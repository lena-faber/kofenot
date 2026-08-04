import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  Loader2,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OsShell } from "@/os/components/layout/os-shell";
import {
  formatCurrency,
  formatRelativeDate,
  LoadingState,
  PriorityDot,
  StageBadge,
} from "@/os/components/shared/os-ui";
import { PIPELINE_STAGES } from "@/os/constants/pipeline";
import {
  generateEmailDraft,
  generateCaseStudyForCompany,
  getCompany,
  getMeetingBrief,
  updateCompanyStage,
} from "@/os/lib/revenue-os.functions";
import type { PipelineStage, TaskPriority } from "@/os/types";

export const Route = createFileRoute("/os/companies/$companyId")({
  component: CompanyDetailPage,
});

function CompanyDetailPage() {
  const { companyId } = Route.useParams();
  const queryClient = useQueryClient();
  const [meetingBrief, setMeetingBrief] = useState<Awaited<ReturnType<typeof getMeetingBrief>> | null>(null);
  const [emailDraft, setEmailDraft] = useState<{ subject: string; body: string } | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["os-company", companyId],
    queryFn: () => getCompany({ data: { id: companyId } }),
  });

  const stageMutation = useMutation({
    mutationFn: (stage: string) =>
      updateCompanyStage({ data: { id: companyId, stage } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["os-company", companyId] });
      toast.success("Stage updated");
    },
  });

  const emailMutation = useMutation({
    mutationFn: () =>
      generateEmailDraft({ data: { company_id: companyId, draft_type: "initial" } }),
    onSuccess: (result) => {
      setEmailDraft({ subject: result.subject, body: result.body });
      toast.success("Email draft ready");
    },
  });

  const briefMutation = useMutation({
    mutationFn: () => getMeetingBrief({ data: { company_id: companyId } }),
    onSuccess: (result) => {
      setMeetingBrief(result);
      toast.success("Meeting brief generated");
    },
  });

  const caseStudyMutation = useMutation({
    mutationFn: () => generateCaseStudyForCompany({ data: { company_id: companyId } }),
    onSuccess: () => toast.success("Case study saved to CMO content library"),
  });

  if (isLoading) {
    return (
      <OsShell title="Company">
        <LoadingState />
      </OsShell>
    );
  }

  if (!data) {
    return (
      <OsShell title="Company">
        <div className="p-6 text-sm text-red-400">Company not found</div>
      </OsShell>
    );
  }

  const { company, contacts, tasks, activities, email_drafts, notes } = data;

  return (
    <OsShell
      title={company.name}
      actions={
        <Link
          to="/os/companies"
          className="flex items-center gap-1 text-xs text-os-muted hover:text-os-fg"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Link>
      }
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xs font-semibold">{company.name}</h1>
              <StageBadge stage={company.stage as PipelineStage} />
            </div>
            <div className="mt-1 flex flex-wrap gap-3 text-sm text-os-muted">
              {company.industry && <span>{company.industry}</span>}
              {company.location && <span>· {company.location}</span>}
              {company.employee_count && <span>· {company.employee_count} employees</span>}
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-os-accent"
                >
                  <ExternalLink className="h-3 w-3" />
                  Website
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={company.stage}
              onChange={(e) => stageMutation.mutate(e.target.value)}
              className="rounded-md border border-os-border bg-os-card px-3 py-1.5 text-sm"
            >
              {PIPELINE_STAGES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <Button
              size="sm"
              onClick={() => emailMutation.mutate()}
              disabled={emailMutation.isPending}
              className="bg-os-accent text-black hover:bg-os-accent/90"
            >
              {emailMutation.isPending ? (
                <Loader2 className="mr-1 h-3 w-3 animate-spin" />
              ) : (
                <Mail className="mr-1 h-3 w-3" />
              )}
              Email
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => briefMutation.mutate()}
              disabled={briefMutation.isPending}
              className="border-os-border"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              Meeting Brief
            </Button>
          </div>
        </div>

        {/* Key metrics */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Metric label="Probability" value={`${company.probability}%`} />
          <Metric
            label="Expected Revenue"
            value={company.expected_revenue ? formatCurrency(company.expected_revenue) : "—"}
          />
          <Metric label="Order Size" value={company.potential_order_size?.toLocaleString() ?? "—"} />
          <Metric
            label="Last Activity"
            value={company.last_activity_at ? formatRelativeDate(company.last_activity_at) : "—"}
          />
        </div>

        {company.ai_entry_point && (
          <div className="mb-6 rounded-lg border border-os-accent/20 bg-os-accent/5 p-4">
            <div className="text-[10px] font-medium uppercase tracking-wider text-os-accent">
              AI Entry Point
            </div>
            <p className="mt-1 text-sm">{company.ai_entry_point}</p>
          </div>
        )}

        <Tabs defaultValue="overview">
          <TabsList className="bg-os-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contacts">Contacts ({contacts.length})</TabsTrigger>
            <TabsTrigger value="tasks">Tasks ({tasks.length})</TabsTrigger>
            <TabsTrigger value="emails">Emails ({email_drafts.length})</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4 space-y-4">
            {company.buying_reason && (
              <Field label="Buying Reason" value={company.buying_reason} />
            )}
            {company.next_action && (
              <Field label="Next Action" value={company.next_action} />
            )}
            {company.pain_points?.length > 0 && (
              <div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">
                  Pain Points
                </div>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {company.pain_points.map((p) => (
                    <span key={p} className="rounded bg-os-hover px-2 py-0.5 text-xs">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {company.tags?.length > 0 && (
              <div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">
                  Tags
                </div>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {company.tags.map((t) => (
                    <span key={t} className="rounded border border-os-border px-2 py-0.5 text-xs text-os-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {company.stage === "won" && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => caseStudyMutation.mutate()}
                disabled={caseStudyMutation.isPending}
                className="border-os-border"
              >
                Generate Case Study
              </Button>
            )}
          </TabsContent>

          <TabsContent value="contacts" className="mt-4">
            {contacts.length === 0 ? (
              <p className="text-sm text-os-muted">No contacts yet</p>
            ) : (
              <div className="space-y-2">
                {contacts.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between rounded-lg border border-os-border bg-os-card p-3"
                  >
                    <div>
                      <div className="text-sm font-medium">
                        {c.name}
                        {c.is_decision_maker && (
                          <span className="ml-2 text-[10px] uppercase text-os-accent">DM</span>
                        )}
                      </div>
                      <div className="text-xs text-os-muted">
                        {c.role} {c.email && `· ${c.email}`}
                      </div>
                    </div>
                    {c.linkedin_url && (
                      <a
                        href={c.linkedin_url.startsWith("http") ? c.linkedin_url : `https://${c.linkedin_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-os-muted hover:text-os-accent"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="tasks" className="mt-4">
            <ul className="space-y-2">
              {tasks.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center gap-2 rounded-lg border border-os-border bg-os-card px-3 py-2"
                >
                  <PriorityDot priority={t.priority as TaskPriority} />
                  <div className="flex-1">
                    <div className="text-sm">{t.title}</div>
                    {t.due_at && (
                      <div className="text-xs text-os-muted">
                        Due {new Date(t.due_at).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  <span className="text-xs capitalize text-os-muted">{t.status}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="emails" className="mt-4 space-y-3">
            {emailDraft && (
              <div className="rounded-lg border border-os-accent/30 bg-os-card">
                <div className="flex items-center justify-between border-b border-os-border px-4 py-2">
                  <span className="text-xs text-os-accent">New Draft</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      navigator.clipboard.writeText(`Subject: ${emailDraft.subject}\n\n${emailDraft.body}`);
                      toast.success("Copied");
                    }}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <div className="px-4 py-2 text-sm font-medium">{emailDraft.subject}</div>
                <div className="prose-email border-t border-os-border p-4">{emailDraft.body}</div>
              </div>
            )}
            {email_drafts.map((d) => (
              <div key={d.id} className="rounded-lg border border-os-border bg-os-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{d.subject}</span>
                  <span className="text-xs text-os-muted">{d.draft_type}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-os-muted">{d.body}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="activity" className="mt-4">
            {activities.length === 0 && notes.length === 0 ? (
              <p className="text-sm text-os-muted">No activity yet</p>
            ) : (
              <div className="space-y-2">
                {activities.map((a) => (
                  <div key={a.id} className="rounded-lg border border-os-border bg-os-card p-3">
                    <div className="flex items-center gap-2 text-xs text-os-muted">
                      <span className="capitalize">{a.type}</span>
                      <span>·</span>
                      <span>{formatRelativeDate(a.occurred_at)}</span>
                    </div>
                    {a.subject && <div className="mt-1 text-sm">{a.subject}</div>}
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Meeting brief modal-like section */}
        {meetingBrief && (
          <div className="mt-6 rounded-lg border border-violet-500/30 bg-os-card p-4">
            <h3 className="mb-3 text-sm font-semibold text-violet-400">Meeting Brief</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-[10px] uppercase text-os-muted">Company</div>
                <p className="mt-0.5">{meetingBrief.company_summary}</p>
              </div>
              <div>
                <div className="text-[10px] uppercase text-os-muted">Contacts</div>
                <p className="mt-0.5">{meetingBrief.contacts_summary}</p>
              </div>
              <div>
                <div className="text-[10px] uppercase text-os-muted">Talking Points</div>
                <ul className="mt-1 list-inside list-disc space-y-0.5">
                  {meetingBrief.talking_points.map((tp, i) => (
                    <li key={i} className="text-xs">{tp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] uppercase text-os-muted">Estimated Order</div>
                <p className="mt-0.5 font-medium text-os-accent">{meetingBrief.estimated_order}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </OsShell>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-os-border bg-os-card p-3">
      <div className="text-[10px] uppercase tracking-wider text-os-muted">{label}</div>
      <div className="mt-0.5 text-xs font-medium tabular-nums">{value}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">{label}</div>
      <p className="mt-0.5 text-sm">{value}</p>
    </div>
  );
}
