-- Stats aggregation for activity_logs (called via service-role RPC only).
-- activity_logs rows are cron ticks (~1 per workspace per ~5 min), so hours
-- are derived from tick shares: active_hours = 24 * active_ticks / total_ticks.

-- Covering indexes (INCLUDE action) so the aggregate functions below run as
-- index-only scans: cron ticks are interleaved across workspaces, so heap
-- access for one workspace's history touches ~1 page per row and times out
-- on yearly windows.
create index if not exists idx_activity_logs_ws_ts
  on public.activity_logs (workspace_id, "timestamp") include (action);

create index if not exists idx_activity_logs_ts
  on public.activity_logs ("timestamp") include (action);

-- Daily active/away breakdown for a set of workspaces, bucketed in a timezone.
create or replace function public.activity_daily_stats(
  p_workspace_ids uuid[],
  p_start timestamptz,
  p_end timestamptz,
  p_tz text default 'UTC'
)
returns table (
  day date,
  active_ticks bigint,
  away_ticks bigint,
  total_ticks bigint,
  active_hours numeric,
  away_hours numeric
)
language sql
stable
as $$
  select
    (al."timestamp" at time zone p_tz)::date as day,
    count(*) filter (where al.action = 'set_active') as active_ticks,
    count(*) filter (where al.action = 'set_away') as away_ticks,
    count(*) filter (where al.action in ('set_active', 'set_away')) as total_ticks,
    round(
      24.0 * count(*) filter (where al.action = 'set_active')
        / nullif(count(*) filter (where al.action in ('set_active', 'set_away')), 0),
      2
    ) as active_hours,
    round(
      24.0 * count(*) filter (where al.action = 'set_away')
        / nullif(count(*) filter (where al.action in ('set_active', 'set_away')), 0),
      2
    ) as away_hours
  from public.activity_logs al
  where al.workspace_id = any (p_workspace_ids)
    and al."timestamp" >= p_start
    and al."timestamp" < p_end
  group by 1
  order by 1;
$$;

-- Admin: high-level account/data totals.
create or replace function public.admin_overview_stats()
returns json
language sql
stable
as $$
  select json_build_object(
    'total_users', (select count(*) from public.users),
    'total_workspaces', (select count(*) from public.workspace),
    'active_workspaces', (select count(*) from public.workspace where is_active),
    'paid_workspaces', (select count(*) from public.workspace where stripe_is_paid),
    'total_logs', (select count(*) from public.activity_logs),
    'logs_30d', (
      select count(*) from public.activity_logs
      where "timestamp" >= now() - interval '30 days'
    ),
    'first_log', (select min("timestamp") from public.activity_logs),
    'last_log', (select max("timestamp") from public.activity_logs),
    'signups_30d', (
      select count(*) from public.users
      where created_at >= now() - interval '30 days'
    )
  );
$$;

-- Admin: daily log volume by action.
create or replace function public.admin_daily_logs(
  p_start timestamptz,
  p_end timestamptz
)
returns table (
  day date,
  set_active bigint,
  set_away bigint,
  errors bigint,
  deactivated bigint,
  total bigint
)
language sql
stable
as $$
  select
    (al."timestamp" at time zone 'UTC')::date as day,
    count(*) filter (where al.action = 'set_active') as set_active,
    count(*) filter (where al.action = 'set_away') as set_away,
    count(*) filter (where al.action = 'error') as errors,
    count(*) filter (where al.action = 'deactivated') as deactivated,
    count(*) as total
  from public.activity_logs al
  where al."timestamp" >= p_start
    and al."timestamp" < p_end
  group by 1
  order by 1;
$$;

-- Admin: per-workspace usage over a window.
create or replace function public.admin_workspace_stats(
  p_start timestamptz,
  p_end timestamptz
)
returns table (
  workspace_id uuid,
  team_name text,
  user_email text,
  is_active boolean,
  stripe_is_paid boolean,
  created_at timestamptz,
  last_log timestamptz,
  active_ticks bigint,
  total_ticks bigint,
  active_share numeric
)
language sql
stable
as $$
  select
    w.id as workspace_id,
    w.team_name,
    u.email as user_email,
    w.is_active,
    w.stripe_is_paid,
    w.created_at,
    max(al."timestamp") as last_log,
    -- count workspace_id (not id) so the covering index can satisfy the join
    count(al.workspace_id) filter (where al.action = 'set_active') as active_ticks,
    count(al.workspace_id) filter (where al.action in ('set_active', 'set_away')) as total_ticks,
    round(
      100.0 * count(al.workspace_id) filter (where al.action = 'set_active')
        / nullif(count(al.workspace_id) filter (where al.action in ('set_active', 'set_away')), 0),
      1
    ) as active_share
  from public.workspace w
  left join public.users u on u.id = w.user_id
  left join public.activity_logs al
    on al.workspace_id = w.id
    and al."timestamp" >= p_start
    and al."timestamp" < p_end
  group by w.id, w.team_name, u.email, w.is_active, w.stripe_is_paid, w.created_at
  order by total_ticks desc;
$$;

-- These are service-role only: do not expose via PostgREST to anon/authenticated.
revoke execute on function public.activity_daily_stats(uuid[], timestamptz, timestamptz, text) from public, anon, authenticated;
revoke execute on function public.admin_overview_stats() from public, anon, authenticated;
revoke execute on function public.admin_daily_logs(timestamptz, timestamptz) from public, anon, authenticated;
revoke execute on function public.admin_workspace_stats(timestamptz, timestamptz) from public, anon, authenticated;

grant execute on function public.activity_daily_stats(uuid[], timestamptz, timestamptz, text) to service_role;
grant execute on function public.admin_overview_stats() to service_role;
grant execute on function public.admin_daily_logs(timestamptz, timestamptz) to service_role;
grant execute on function public.admin_workspace_stats(timestamptz, timestamptz) to service_role;
