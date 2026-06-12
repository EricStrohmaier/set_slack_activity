// Public, sanitized aggregate stats for the landing page.
// Server-side only: uses the service-role key. Only callable from server
// components — do NOT export this from a "use server" actions file.

import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import { Database } from "@/types/supabase_generated";

export interface PublicStats {
  totalUsers: number;
  activeWorkspaces: number;
  totalWorkspaces: number;
  logs30d: number;
  totalLogs: number;
  firstLog: string | null; // "operating since"
  lastLog: string | null; // health indicator
  hoursOnline30d: number; // sum(set_active) * 5 / 60 over the last 30 days
  daily: { day: string; active: number; away: number }[];
}

interface OverviewRow {
  total_users: number;
  total_workspaces: number;
  active_workspaces: number;
  total_logs: number;
  logs_30d: number;
  first_log: string | null;
  last_log: string | null;
}

async function fetchPublicStats(): Promise<PublicStats | null> {
  try {
    // Plain service-role client (supabaseAdmin() calls noStore(), which is
    // not allowed inside unstable_cache).
    const supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.SUPABASE_SERVICE_ROLE_KEY || ""
    );

    const end = new Date();
    const start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [overviewRes, dailyRes] = await Promise.all([
      supabase.rpc("admin_overview_stats"),
      supabase.rpc("admin_daily_logs", {
        p_start: start.toISOString(),
        p_end: end.toISOString(),
      }),
    ]);

    if (overviewRes.error || dailyRes.error) {
      console.error(
        "publicStats fetch failed:",
        overviewRes.error ?? dailyRes.error
      );
      return null;
    }

    const overview = overviewRes.data as unknown as OverviewRow;

    // Explicit whitelist: no per-workspace data, no errors/deactivations.
    const daily = (dailyRes.data ?? []).map((r) => ({
      day: r.day,
      active: Number(r.set_active ?? 0),
      away: Number(r.set_away ?? 0),
    }));

    const activeTicks30d = daily.reduce((sum, d) => sum + d.active, 0);

    return {
      totalUsers: Number(overview.total_users ?? 0),
      activeWorkspaces: Number(overview.active_workspaces ?? 0),
      totalWorkspaces: Number(overview.total_workspaces ?? 0),
      logs30d: Number(overview.logs_30d ?? 0),
      totalLogs: Number(overview.total_logs ?? 0),
      firstLog: overview.first_log ?? null,
      lastLog: overview.last_log ?? null,
      hoursOnline30d: Math.round((activeTicks30d * 5) / 60),
      daily,
    };
  } catch (error) {
    console.error("publicStats fetch failed:", error);
    return null;
  }
}

export const getPublicStats = unstable_cache(
  fetchPublicStats,
  ["public-stats"],
  { revalidate: 600 }
);
