import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { OsShell } from "@/os/components/layout/os-shell";
import {
  formatCurrency,
  LoadingState,
  StatCard,
} from "@/os/components/shared/os-ui";
import { getAnalytics, getDashboard } from "@/os/lib/revenue-os.functions";
import { getStageLabel } from "@/os/constants/pipeline";
import type { PipelineStage } from "@/os/types";

export const Route = createFileRoute("/os/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const { data: analytics, isLoading: loadingAnalytics } = useQuery({
    queryKey: ["os-analytics"],
    queryFn: () => getAnalytics(),
  });

  const { data: dashboard } = useQuery({
    queryKey: ["os-dashboard"],
    queryFn: () => getDashboard(),
  });

  if (loadingAnalytics) {
    return (
      <OsShell title="Analytics">
        <LoadingState />
      </OsShell>
    );
  }

  const stats = dashboard?.stats;

  return (
    <OsShell title="Analytics">
      <div className="space-y-6 p-6">
        {/* Sales metrics */}
        <section>
          <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
            Sales Performance
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatCard
              label="Total Revenue"
              value={formatCurrency(analytics?.totalRevenue ?? 0)}
              accent
            />
            <StatCard label="Companies" value={analytics?.totalCompanies ?? 0} />
            <StatCard
              label="Emails Sent"
              value={analytics?.totalEmails ?? 0}
              sub={`${stats?.reply_rate ?? 0}% reply rate`}
            />
            <StatCard
              label="Conversion"
              value={`${stats?.conversion_rate ?? 0}%`}
              sub={`${stats?.repeat_customer_rate ?? 0}% repeat`}
            />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* By industry */}
          <section className="rounded-lg border border-os-border bg-os-card p-4">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-os-muted">
              Top Industries
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics?.byIndustry?.slice(0, 8) ?? []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis
                    dataKey="industry"
                    tick={{ fill: "#71717a", fontSize: 11 }}
                    angle={-30}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fill: "#71717a", fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "#141416",
                      border: "1px solid #27272a",
                      borderRadius: 6,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="count" fill="#00ff00" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* By stage */}
          <section className="rounded-lg border border-os-border bg-os-card p-4">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-os-muted">
              Pipeline by Stage
            </h2>
            <div className="space-y-2">
              {(analytics?.byStage ?? []).map((item) => (
                <div key={item.stage} className="flex items-center gap-3">
                  <div className="w-32 truncate text-xs text-os-muted">
                    {getStageLabel(item.stage as PipelineStage)}
                  </div>
                  <div className="flex-1">
                    <div
                      className="h-2 rounded-full bg-os-accent/80"
                      style={{
                        width: `${Math.min(100, (item.count / (analytics?.totalCompanies ?? 1)) * 100 * 3)}%`,
                      }}
                    />
                  </div>
                  <div className="w-6 text-right text-xs tabular-nums">{item.count}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Marketing + Agent activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-lg border border-os-border bg-os-card p-4">
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
              Marketing Metrics
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Samples Sent" value={analytics?.totalSamples ?? 0} />
              <StatCard
                label="Pipeline Value"
                value={formatCurrency(stats?.pipeline_value ?? 0)}
              />
              <StatCard label="Quotes Outstanding" value={stats?.quotes_outstanding ?? 0} />
              <StatCard
                label="Meetings Scheduled"
                value={stats?.meetings_scheduled ?? 0}
              />
            </div>
          </section>

          <section className="rounded-lg border border-os-border bg-os-card p-4">
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
              Recent Agent Runs
            </h2>
            <ul className="space-y-2">
              {(analytics?.recentAgentRuns ?? []).slice(0, 8).map((run) => (
                <li
                  key={run.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="capitalize">{run.agent as string}</span>
                  <span className="text-xs text-os-muted">
                    {new Date(run.created_at as string).toLocaleString()}
                  </span>
                </li>
              ))}
              {(analytics?.recentAgentRuns ?? []).length === 0 && (
                <li className="text-sm text-os-muted">No agent runs yet — use Scout, Closer, or CMO</li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </OsShell>
  );
}
