"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  getWorkspaceActivityStats,
  WorkspaceActivityStats,
} from "@/app/stats-actions";

const PERIODS = [
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 365, label: "Last year" },
] as const;

interface WorkspaceStatsProps {
  workspaceId: string;
  teamName?: string | null;
}

const WorkspaceStats: React.FC<WorkspaceStatsProps> = ({
  workspaceId,
  teamName,
}) => {
  const [days, setDays] = useState<number>(30);
  const [stats, setStats] = useState<WorkspaceActivityStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    getWorkspaceActivityStats(workspaceId, days)
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Failed to load stats");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [workspaceId, days]);

  const chartData = useMemo(() => {
    if (!stats) return [];
    if (days <= 90) {
      return stats.daily.map((d) => ({
        label: d.day.slice(5), // MM-DD
        active: d.activeHours,
        away: d.awayHours,
      }));
    }
    // Aggregate to weekly buckets for the 1-year view.
    const weeks = new Map<string, { active: number; away: number }>();
    for (const d of stats.daily) {
      const date = new Date(d.day + "T00:00:00");
      const monday = new Date(date);
      monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
      const key = monday.toISOString().slice(0, 10);
      const bucket = weeks.get(key) || { active: 0, away: 0 };
      bucket.active += d.activeHours;
      bucket.away += d.awayHours;
      weeks.set(key, bucket);
    }
    return Array.from(weeks.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, v]) => ({
        label: key.slice(5),
        active: Math.round(v.active),
        away: Math.round(v.away),
      }));
  }, [stats, days]);

  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <CardTitle className="text-xl font-bold">
              Activity statistics
            </CardTitle>
            <CardDescription>
              How much {teamName ? `${teamName} was` : "you were"} kept online
              {stats ? ` (times in ${stats.timezone})` : ""}
            </CardDescription>
          </div>
          <Select
            value={String(days)}
            onValueChange={(v) => setDays(parseInt(v, 10))}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((p) => (
                <SelectItem key={p.value} value={String(p.value)}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            Loading statistics...
          </div>
        ) : error ? (
          <div className="py-12 text-center text-sm text-destructive">
            {error}
          </div>
        ) : !stats || stats.daily.length === 0 ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No activity data for this period yet. Data appears once the
            presence scheduler has been running for your workspace.
          </div>
        ) : (
          <div className="space-y-8">
            {/* Summary cards */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <SummaryCard
                label="Hours kept online"
                value={stats.summary.totalActiveHours.toLocaleString()}
              />
              <SummaryCard
                label="Coverage of work hours"
                value={
                  stats.summary.coveragePercent !== null
                    ? `${stats.summary.coveragePercent}%`
                    : "—"
                }
                hint={
                  stats.summary.configuredHoursInPeriod !== null
                    ? `of ${stats.summary.configuredHoursInPeriod}h configured`
                    : undefined
                }
              />
              <SummaryCard
                label="Days covered"
                value={String(stats.summary.daysCovered)}
              />
              <SummaryCard
                label="Workday streak"
                value={
                  stats.summary.currentStreak > 0
                    ? `${stats.summary.currentStreak} ${
                        stats.summary.currentStreak === 1 ? "day" : "days"
                      }`
                    : "—"
                }
              />
            </div>

            {/* Daily/weekly hours chart */}
            <div>
              <h3 className="mb-2 text-sm font-medium">
                Online hours per {days <= 90 ? "day" : "week"}
              </h3>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} barCategoryGap={1}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 11 }}
                      interval="preserveStartEnd"
                      minTickGap={24}
                    />
                    <YAxis tick={{ fontSize: 11 }} width={32} />
                    <Tooltip
                      formatter={(value, name) => [
                        `${value}h`,
                        name === "active" ? "Online" : "Away",
                      ]}
                    />
                    <Bar
                      dataKey="active"
                      stackId="hours"
                      fill="#22c55e"
                      name="active"
                    />
                    <Bar
                      dataKey="away"
                      stackId="hours"
                      fill="#e5e7eb"
                      name="away"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const SummaryCard = ({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) => (
  <div className="rounded-lg border bg-muted/30 p-4">
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="mt-1 text-2xl font-bold">{value}</p>
    {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
  </div>
);

export default WorkspaceStats;
