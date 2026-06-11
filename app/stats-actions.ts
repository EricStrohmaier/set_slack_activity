"use server";

import { getUser } from "@/app/action";
import { supabaseAdmin } from "@/utils/supabase/admin";
import { WorkingHours } from "@/types/supabase";
import { configuredHoursPerDay } from "@/lib/workingHours";

export interface DailyStat {
  day: string; // YYYY-MM-DD in workspace timezone
  activeTicks: number;
  awayTicks: number;
  totalTicks: number;
  activeHours: number;
  awayHours: number;
}

export interface ActivitySummary {
  totalActiveHours: number;
  daysCovered: number;
  configuredHoursInPeriod: number | null;
  coveragePercent: number | null;
  currentStreak: number;
}

export interface WorkspaceActivityStats {
  daily: DailyStat[];
  summary: ActivitySummary;
  timezone: string;
}

function countConfiguredDays(
  start: Date,
  end: Date,
  daysOfWeek: number[]
): number {
  let count = 0;
  const d = new Date(start);
  d.setHours(0, 0, 0, 0);
  while (d <= end) {
    if (daysOfWeek.includes(d.getDay())) count++;
    d.setDate(d.getDate() + 1);
  }
  return count;
}

export async function getWorkspaceActivityStats(
  workspaceId: string,
  days: number
): Promise<WorkspaceActivityStats> {
  const user = await getUser();
  if (!user) throw new Error("Not authenticated");
  if (![30, 90, 365].includes(days)) throw new Error("Invalid period");

  const supabase = supabaseAdmin();

  // Ownership check: the workspace must belong to the calling user.
  const { data: workspace, error: wsError } = await supabase
    .from("workspace")
    .select("id, working_hours")
    .eq("id", workspaceId)
    .eq("user_id", user.id)
    .single();

  if (wsError || !workspace) throw new Error("Workspace not found");

  const workHours = workspace.working_hours as unknown as WorkingHours | null;
  const timezone = workHours?.timezone || "UTC";

  const end = new Date();
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000);

  const dailyRes = await supabase.rpc("activity_daily_stats", {
    p_workspace_ids: [workspaceId],
    p_start: start.toISOString(),
    p_end: end.toISOString(),
    p_tz: timezone,
  });

  if (dailyRes.error) throw dailyRes.error;

  const daily: DailyStat[] = (dailyRes.data ?? []).map((r) => ({
    day: r.day,
    activeTicks: Number(r.active_ticks ?? 0),
    awayTicks: Number(r.away_ticks ?? 0),
    totalTicks: Number(r.total_ticks ?? 0),
    activeHours: Number(r.active_hours ?? 0),
    awayHours: Number(r.away_hours ?? 0),
  }));

  // Summary
  const totalActiveHours = daily.reduce((sum, d) => sum + d.activeHours, 0);
  const activeDays = new Set(
    daily.filter((d) => d.activeTicks > 0).map((d) => d.day)
  );

  let configuredHoursInPeriod: number | null = null;
  let coveragePercent: number | null = null;
  let currentStreak = 0;

  if (workHours && Array.isArray(workHours.daysOfWeek)) {
    configuredHoursInPeriod =
      configuredHoursPerDay(workHours) *
      countConfiguredDays(start, end, workHours.daysOfWeek);
    if (configuredHoursInPeriod > 0) {
      coveragePercent = Math.min(
        100,
        (totalActiveHours / configuredHoursInPeriod) * 100
      );
    }

    // Streak: consecutive configured workdays (walking back from today)
    // that have at least one active tick. Today is skipped if it has no
    // activity yet (e.g. before working hours started).
    const d = new Date();
    for (let i = 0; i < days; i++) {
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const isWorkday = workHours.daysOfWeek.includes(d.getDay());
      if (isWorkday) {
        if (activeDays.has(key)) {
          currentStreak++;
        } else if (i > 0) {
          break;
        }
      }
      d.setDate(d.getDate() - 1);
    }
  }

  return {
    daily,
    timezone,
    summary: {
      totalActiveHours: Math.round(totalActiveHours * 10) / 10,
      daysCovered: activeDays.size,
      configuredHoursInPeriod:
        configuredHoursInPeriod !== null
          ? Math.round(configuredHoursInPeriod)
          : null,
      coveragePercent:
        coveragePercent !== null ? Math.round(coveragePercent) : null,
      currentStreak,
    },
  };
}

// ---------- Admin ----------

export interface AdminOverview {
  total_users: number;
  total_workspaces: number;
  active_workspaces: number;
  paid_workspaces: number;
  total_logs: number;
  logs_30d: number;
  first_log: string | null;
  last_log: string | null;
  signups_30d: number;
}

export interface AdminDailyLog {
  day: string;
  set_active: number;
  set_away: number;
  errors: number;
  deactivated: number;
  total: number;
}

export interface AdminWorkspaceStat {
  workspace_id: string;
  team_name: string | null;
  user_email: string | null;
  is_active: boolean | null;
  stripe_is_paid: boolean | null;
  created_at: string;
  last_log: string | null;
  active_ticks: number;
  total_ticks: number;
  active_share: number | null;
}

export interface AdminStats {
  overview: AdminOverview;
  dailyLogs: AdminDailyLog[];
  workspaces: AdminWorkspaceStat[];
}

export async function isAdminUser(): Promise<boolean> {
  const user = await getUser();
  if (!user?.email) return false;
  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return adminEmails.includes(user.email.toLowerCase());
}

export async function getAdminStats(days: number): Promise<AdminStats> {
  if (!(await isAdminUser())) throw new Error("Not authorized");
  if (![30, 90, 365].includes(days)) throw new Error("Invalid period");

  const supabase = supabaseAdmin();
  const end = new Date();
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000);

  const [overviewRes, dailyRes, wsRes] = await Promise.all([
    supabase.rpc("admin_overview_stats"),
    supabase.rpc("admin_daily_logs", {
      p_start: start.toISOString(),
      p_end: end.toISOString(),
    }),
    supabase.rpc("admin_workspace_stats", {
      p_start: start.toISOString(),
      p_end: end.toISOString(),
    }),
  ]);

  if (overviewRes.error) throw overviewRes.error;
  if (dailyRes.error) throw dailyRes.error;
  if (wsRes.error) throw wsRes.error;

  return {
    overview: overviewRes.data as unknown as AdminOverview,
    dailyLogs: (dailyRes.data ?? []).map((r) => ({
      day: r.day,
      set_active: Number(r.set_active ?? 0),
      set_away: Number(r.set_away ?? 0),
      errors: Number(r.errors ?? 0),
      deactivated: Number(r.deactivated ?? 0),
      total: Number(r.total ?? 0),
    })),
    workspaces: (wsRes.data ?? []).map((r) => ({
      workspace_id: r.workspace_id,
      team_name: r.team_name,
      user_email: r.user_email,
      is_active: r.is_active,
      stripe_is_paid: r.stripe_is_paid,
      created_at: r.created_at,
      last_log: r.last_log,
      active_ticks: Number(r.active_ticks ?? 0),
      total_ticks: Number(r.total_ticks ?? 0),
      active_share: r.active_share !== null ? Number(r.active_share) : null,
    })),
  };
}
