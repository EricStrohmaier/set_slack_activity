"use client";

import React, { useMemo } from "react";
import { Container } from "@/components/landingpage/container";
import { landingpageContent } from "@/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PublicStats } from "@/lib/publicStats";

interface LiveStatsProps {
  stats: PublicStats;
}

export const LiveStats: React.FC<LiveStatsProps> = ({ stats }) => {
  const chartData = useMemo(
    () =>
      stats.daily.map((d) => ({
        label: d.day.slice(5),
        active: d.active,
        away: d.away,
      })),
    [stats.daily]
  );

  const lastLogTime = stats.lastLog ? new Date(stats.lastLog).getTime() : null;
  const minutesSinceLast =
    lastLogTime !== null
      ? Math.max(0, Math.round((Date.now() - lastLogTime) / 60000))
      : null;
  const isOperational = minutesSinceLast !== null && minutesSinceLast < 60;

  const operatingSince = stats.firstLog
    ? new Date(stats.firstLog).toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      })
    : null;

  const hoursPerDay = Math.round(stats.hoursOnline30d / 30);

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-text">
                {landingpageContent.liveStats.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {landingpageContent.liveStats.description}
                {operatingSince && (
                  <> Operating since {operatingSince} · free forever.</>
                )}
              </p>
            </div>
            {minutesSinceLast !== null &&
              (isOperational ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  Operational · last presence update {minutesSinceLast}m ago
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gray-400" />
                  Last update:{" "}
                  {stats.lastLog
                    ? new Date(stats.lastLog).toLocaleString()
                    : "—"}
                </div>
              ))}
          </div>

          {/* Overview cards */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <OverviewCard
              label="Hours kept online (30d)"
              value={stats.hoursOnline30d.toLocaleString()}
              hint={`≈ ${hoursPerDay} h every day, for free`}
            />
            <OverviewCard
              label="Presence updates (30d)"
              value={stats.logs30d.toLocaleString()}
              hint={`${stats.totalLogs.toLocaleString()} all-time`}
            />
            <OverviewCard label="Users" value={stats.totalUsers} />
            <OverviewCard
              label="Workspaces"
              value={stats.totalWorkspaces}
              hint={`${stats.activeWorkspaces} active`}
            />
          </div>

          {/* Daily volume chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Presence updates per day
              </CardTitle>
              <CardDescription>
                Online vs away updates across all workspaces, last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-56 w-full md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 11 }}
                      interval="preserveStartEnd"
                      minTickGap={24}
                    />
                    <YAxis tick={{ fontSize: 11 }} width={48} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="active"
                      name="Kept online"
                      stackId="1"
                      stroke="#22c55e"
                      fill="#22c55e"
                      fillOpacity={0.5}
                    />
                    <Area
                      type="monotone"
                      dataKey="away"
                      name="Set away"
                      stackId="1"
                      stroke="#94a3b8"
                      fill="#94a3b8"
                      fillOpacity={0.35}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

const OverviewCard = ({
  label,
  value,
  hint,
}: {
  label: string;
  value: number | string;
  hint?: string;
}) => (
  <Card>
    <CardContent className="p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </CardContent>
  </Card>
);
