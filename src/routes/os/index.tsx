import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Megaphone,
  Radar,
  Send,
  TrendingUp,
} from "lucide-react";
import { OsShell } from "@/os/components/layout/os-shell";
import {
  AgentCard,
  formatCurrency,
  LoadingState,
  PriorityDot,
  StageBadge,
  StatCard,
} from "@/os/components/shared/os-ui";
import { getDashboard } from "@/os/lib/revenue-os.functions";
import type { CeoBrief, PipelineStage, TaskPriority } from "@/os/types";

export const Route = createFileRoute("/os/")({
  component: CeoDashboard,
});

function CeoDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["os-dashboard"],
    queryFn: () => getDashboard(),
  });

  if (isLoading) {
    return (
      <OsShell title="CEO Dashboard">
        <LoadingState />
      </OsShell>
    );
  }

  if (error || !data) {
    return (
      <OsShell title="CEO Dashboard">
        <div className="p-6 text-sm text-red-400">
          Failed to load dashboard. Ensure Supabase is connected and migrations are applied.
        </div>
      </OsShell>
    );
  }

  const { stats, brief, recentTasks } = data;

  return (
    <OsShell title="CEO Dashboard">
      <div className="space-y-6 p-6">
        {/* Three CEO questions */}
        <section className="grid gap-4 lg:grid-cols-3">
          <QuestionCard
            number={1}
            question="What should I do today to generate the most revenue?"
            icon={TrendingUp}
          >
            {brief.top_actions.length === 0 ? (
              <p className="text-xs text-os-muted">No urgent actions — run Scout for new leads</p>
            ) : (
              <ul className="space-y-2">
                {brief.top_actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <PriorityDot priority={action.priority as TaskPriority} />
                    <div className="flex-1">
                      {action.company_id ? (
                        <Link
                          to="/os/companies/$companyId"
                          params={{ companyId: action.company_id }}
                          className="text-sm hover:text-os-accent"
                        >
                          {action.title}
                        </Link>
                      ) : (
                        <span className="text-sm">{action.title}</span>
                      )}
                      <div className="text-[11px] text-os-muted">{action.reason}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </QuestionCard>

          <QuestionCard
            number={2}
            question="Which prospects are most likely to buy right now?"
            icon={Radar}
          >
            {brief.hot_prospects.length === 0 ? (
              <p className="text-xs text-os-muted">No hot prospects — qualify more leads</p>
            ) : (
              <ul className="space-y-2">
                {brief.hot_prospects.map((p) => (
                  <li key={p.company_id}>
                    <Link
                      to="/os/companies/$companyId"
                      params={{ companyId: p.company_id }}
                      className="flex items-center justify-between text-sm hover:text-os-accent"
                    >
                      <span>{p.name}</span>
                      <span className="text-xs text-os-accent">{p.probability}%</span>
                    </Link>
                    <div className="flex items-center gap-2">
                      <StageBadge stage={p.stage as PipelineStage} />
                      <span className="text-[11px] text-os-muted">{p.reason}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </QuestionCard>

          <QuestionCard
            number={3}
            question="What follow-up or opportunity am I about to miss?"
            icon={AlertTriangle}
          >
            {brief.at_risk.length === 0 ? (
              <p className="text-xs text-os-muted">Nothing at risk — you're on top of it</p>
            ) : (
              <ul className="space-y-2">
                {brief.at_risk.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" />
                    <div>
                      {item.company_id ? (
                        <Link
                          to="/os/companies/$companyId"
                          params={{ companyId: item.company_id }}
                          className="hover:text-os-accent"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                      <div className="text-[11px] text-os-muted">
                        {item.type === "overdue_task" ? "Overdue" : "Stale deal"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </QuestionCard>
        </section>

        {/* Stats row */}
        <section className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          <StatCard label="Pipeline" value={formatCurrency(stats.pipeline_value)} accent />
          <StatCard label="Revenue (MTD)" value={formatCurrency(stats.revenue_this_month)} />
          <StatCard label="Revenue (Week)" value={formatCurrency(stats.revenue_this_week)} />
          <StatCard label="Emails (Week)" value={stats.emails_sent} sub={`${stats.reply_rate}% reply rate`} />
          <StatCard label="Meetings" value={stats.meetings_scheduled} />
          <StatCard label="Conversion" value={`${stats.conversion_rate}%`} sub={`${stats.repeat_customer_rate}% repeat`} />
        </section>

        {/* AI Agents */}
        <section>
          <div className="os-section-label mb-3">AI Agents</div>
          <div className="grid gap-3 sm:grid-cols-3">
            <AgentCard
              name="Scout"
              role="Prospecting Agent"
              description="Finds 20–50 qualified prospects daily, researches decision-makers, suggests entry points."
              icon={Radar}
              href="/os/scout"
              color="bg-blue-600"
            />
            <AgentCard
              name="Closer"
              role="Sales Agent"
              description="Writes personalized outreach, prepares follow-ups, meeting briefs, and objection responses."
              icon={Send}
              href="/os/closer"
              color="bg-violet-600"
            />
            <AgentCard
              name="CMO"
              role="Marketing Agent"
              description="Creates LinkedIn posts, newsletters, press pitches, case studies, and campaign plans."
              icon={Megaphone}
              href="/os/cmo"
              color="bg-amber-600"
            />
          </div>
        </section>

        {/* Recommendations + Tasks */}
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-lg border border-os-border bg-os-card p-4">
            <div className="os-section-label mb-3">Recommendations</div>
            <ul className="space-y-2">
              {brief.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-os-accent" />
                  {rec}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-os-border bg-os-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="os-section-label">Today's Tasks</div>
              <Link to="/os/pipeline" className="text-xs text-os-accent hover:underline">
                View all
              </Link>
            </div>
            <ul className="space-y-2">
              {recentTasks.slice(0, 6).map((task) => (
                <li key={task.id} className="flex items-center gap-2 text-sm">
                  <PriorityDot priority={task.priority} />
                  {task.company_id ? (
                    <Link
                      to="/os/companies/$companyId"
                      params={{ companyId: task.company_id }}
                      className="flex-1 hover:text-os-accent"
                    >
                      {task.title}
                    </Link>
                  ) : (
                    <span className="flex-1">{task.title}</span>
                  )}
                  {task.company && (
                    <span className="text-xs text-os-muted">{task.company.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </OsShell>
  );
}

function QuestionCard({
  number,
  question,
  icon: Icon,
  children,
}: {
  number: number;
  question: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-os-border bg-os-card p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-os-accent/15 text-xs font-bold text-os-accent">
          {number}
        </div>
        <Icon className="h-4 w-4 text-os-muted" />
      </div>
      <div className="mb-3 os-title leading-snug">{question}</div>
      {children}
    </div>
  );
}
