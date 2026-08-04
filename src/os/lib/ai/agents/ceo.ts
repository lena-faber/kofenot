import type { CeoBrief, Company, DashboardStats, Task } from "@/os/types";
import { ACTIVE_STAGES } from "@/os/constants/pipeline";

export function buildCeoBrief(
  companies: Company[],
  tasks: Task[],
  stats: DashboardStats,
): CeoBrief {
  const now = new Date();
  const overdueTasks = tasks.filter(
    (t) => t.status === "pending" && t.due_at && new Date(t.due_at) < now,
  );

  const todayTasks = tasks.filter((t) => {
    if (t.status !== "pending" || !t.due_at) return false;
    const due = new Date(t.due_at);
    return due.toDateString() === now.toDateString();
  });

  const hotProspects = companies
    .filter(
      (c) =>
        ACTIVE_STAGES.includes(c.stage) &&
        c.probability >= 50 &&
        c.stage !== "lost" &&
        c.stage !== "won",
    )
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 5)
    .map((c) => ({
      company_id: c.id,
      name: c.name,
      stage: c.stage,
      probability: c.probability,
      reason: buildHotReason(c),
    }));

  const topActions = [
    ...overdueTasks.slice(0, 2).map((t) => ({
      title: t.title,
      reason: "Overdue — act now to prevent deal decay",
      company_id: t.company_id ?? undefined,
      priority: "urgent" as const,
    })),
    ...todayTasks.slice(0, 3).map((t) => ({
      title: t.title,
      reason: "Due today",
      company_id: t.company_id ?? undefined,
      priority: t.priority,
    })),
  ];

  if (topActions.length === 0) {
    const researchCompanies = companies.filter((c) => c.stage === "research").slice(0, 2);
    for (const c of researchCompanies) {
      topActions.push({
        title: `Research ${c.name}`,
        reason: "New lead — Scout identified, needs qualification",
        company_id: c.id,
        priority: "medium",
      });
    }
  }

  const atRisk = [
    ...overdueTasks.map((t) => ({
      title: t.title,
      company_id: t.company_id ?? undefined,
      due_at: t.due_at!,
      type: "overdue_task",
    })),
    ...companies
      .filter(
        (c) =>
          c.last_activity_at &&
          new Date(c.last_activity_at) < new Date(now.getTime() - 14 * 86400000) &&
          ACTIVE_STAGES.includes(c.stage),
      )
      .slice(0, 3)
      .map((c) => ({
        title: `${c.name} — no activity in 14+ days`,
        company_id: c.id,
        due_at: c.last_activity_at!,
        type: "stale_deal",
      })),
  ];

  const recommendations = buildRecommendations(companies, tasks, stats);

  return {
    top_actions: topActions.slice(0, 5),
    hot_prospects: hotProspects,
    at_risk: atRisk.slice(0, 5),
    pipeline_value: stats.pipeline_value,
    revenue_this_month: stats.revenue_this_month,
    emails_sent_week: stats.emails_sent,
    recommendations,
  };
}

function buildHotReason(company: Company): string {
  const reasons: Record<string, string> = {
    reply_received: "They replied — momentum is high, schedule a call",
    meeting_scheduled: "Meeting coming up — prepare brief and close",
    sample_shipped: "Sample in their hands — follow up for feedback",
    negotiation: "Active negotiation — send updated quote",
    quote_sent: "Quote outstanding — 3rd follow-up due",
    meeting_scheduled_alt: "High probability + active engagement",
  };
  return reasons[company.stage] ?? `${company.probability}% probability at ${company.stage.replace("_", " ")} stage`;
}

function buildRecommendations(
  companies: Company[],
  tasks: Task[],
  stats: DashboardStats,
): string[] {
  const recs: string[] = [];

  const staleCount = companies.filter(
    (c) =>
      c.last_activity_at &&
      new Date(c.last_activity_at) < new Date(Date.now() - 14 * 86400000) &&
      ACTIVE_STAGES.includes(c.stage),
  ).length;

  if (staleCount > 0) {
    recs.push(`${staleCount} active deals have gone quiet for 14+ days — run Closer follow-up sequence`);
  }

  if (stats.samples_pending_followup > 0) {
    recs.push(`${stats.samples_pending_followup} samples need follow-up — highest conversion window is 7-10 days post-ship`);
  }

  const researchCount = companies.filter((c) => c.stage === "research").length;
  if (researchCount > 3) {
    recs.push(`${researchCount} companies in research — run Scout to qualify and prioritize top 5`);
  }

  if (stats.reply_rate < 15) {
    recs.push("Reply rate below 15% — test new entry points and personalize first lines more");
  }

  const wonCount = companies.filter((c) => c.stage === "won" || c.is_repeat_customer).length;
  if (wonCount > 0) {
    recs.push(`${wonCount} won customers — trigger repeat order outreach and referral asks`);
  }

  if (recs.length === 0) {
    recs.push("Pipeline looks healthy — focus on moving reply_received deals to meetings");
  }

  return recs.slice(0, 4);
}

export function computeDashboardStats(
  companies: Company[],
  tasks: Task[],
  orders: Array<{ total: number; created_at: string }>,
  emails: Array<{ created_at: string; status: string }>,
): DashboardStats {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const weekStart = new Date(now.getTime() - 7 * 86400000);

  const activePipeline = companies.filter(
    (c) => ACTIVE_STAGES.includes(c.stage) && c.expected_revenue,
  );
  const pipeline_value = activePipeline.reduce((s, c) => s + (c.expected_revenue ?? 0), 0);

  const revenue_this_month = orders
    .filter((o) => new Date(o.created_at) >= monthStart)
    .reduce((s, o) => s + o.total, 0);

  const revenue_this_week = orders
    .filter((o) => new Date(o.created_at) >= weekStart)
    .reduce((s, o) => s + o.total, 0);

  const emails_sent = emails.filter((e) => new Date(e.created_at) >= weekStart).length;
  const replies = emails.filter((e) => e.status === "replied").length;
  const reply_rate = emails.length > 0 ? Math.round((replies / emails.length) * 100) : 0;

  const meetings_scheduled = companies.filter((c) => c.stage === "meeting_scheduled").length;
  const quotes_outstanding = companies.filter((c) => c.stage === "quote_sent").length;

  const won = companies.filter((c) => c.stage === "won" || c.is_repeat_customer).length;
  const total = companies.filter((c) => c.stage !== "research" && c.stage !== "lost").length;
  const conversion_rate = total > 0 ? Math.round((won / total) * 100) : 0;

  const repeat = companies.filter((c) => c.is_repeat_customer).length;
  const repeat_customer_rate = won > 0 ? Math.round((repeat / won) * 100) : 0;

  return {
    pipeline_value,
    revenue_this_month,
    revenue_this_week,
    emails_sent,
    reply_rate,
    meetings_scheduled,
    quotes_outstanding,
    samples_pending_followup: tasks.filter(
      (t) => t.task_type === "follow_up" && t.title.toLowerCase().includes("sample") && t.status === "pending",
    ).length,
    conversion_rate,
    repeat_customer_rate,
  };
}
