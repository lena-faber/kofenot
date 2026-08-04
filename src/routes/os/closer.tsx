import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Copy, Loader2, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OsShell } from "@/os/components/layout/os-shell";
import { LoadingState, StageBadge } from "@/os/components/shared/os-ui";
import {
  completeTask,
  generateEmailDraft,
  getCompanies,
  getObjections,
  getTasks,
} from "@/os/lib/revenue-os.functions";
import type { EmailDraftType, PipelineStage } from "@/os/types";

const DRAFT_TYPES: { value: EmailDraftType; label: string }[] = [
  { value: "initial", label: "Initial outreach" },
  { value: "follow_up_2", label: "2nd follow-up" },
  { value: "follow_up_3", label: "3rd follow-up" },
  { value: "last", label: "Last follow-up" },
  { value: "holiday", label: "Holiday" },
  { value: "trade_show", label: "Trade show" },
  { value: "sample", label: "Sample follow-up" },
  { value: "meeting", label: "Meeting prep" },
  { value: "quote", label: "Quote follow-up" },
];

export const Route = createFileRoute("/os/closer")({
  component: CloserPage,
});

function CloserPage() {
  const queryClient = useQueryClient();
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [draftType, setDraftType] = useState<EmailDraftType>("initial");
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);

  const { data: companies, isLoading: loadingCompanies } = useQuery({
    queryKey: ["os-companies"],
    queryFn: () => getCompanies({ data: {} }),
  });

  const { data: tasks } = useQuery({
    queryKey: ["os-tasks"],
    queryFn: () => getTasks({ data: { status: "pending" } }),
  });

  const { data: objections } = useQuery({
    queryKey: ["os-objections"],
    queryFn: () => getObjections(),
  });

  const emailMutation = useMutation({
    mutationFn: () =>
      generateEmailDraft({
        data: { company_id: selectedCompany, draft_type: draftType },
      }),
    onSuccess: (result) => {
      setDraft({ subject: result.subject, body: result.body });
      toast.success("Email draft generated — review and send");
    },
    onError: () => toast.error("Failed to generate email"),
  });

  const completeMutation = useMutation({
    mutationFn: (id: string) => completeTask({ data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["os-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["os-dashboard"] });
      toast.success("Task completed");
    },
  });

  const copyDraft = () => {
    if (!draft) return;
    navigator.clipboard.writeText(`Subject: ${draft.subject}\n\n${draft.body}`);
    toast.success("Copied to clipboard");
  };

  return (
    <OsShell title="Closer — Sales Agent">
      <div className="grid h-full lg:grid-cols-2">
        {/* Left: tasks + email generator */}
        <div className="space-y-6 border-r border-os-border p-6">
          <section>
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
              Generate Email (5 min, not 1 hour)
            </h2>
            <div className="space-y-3 rounded-lg border border-os-border bg-os-card p-4">
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger className="border-os-border bg-os-bg">
                  <SelectValue placeholder="Select company..." />
                </SelectTrigger>
                <SelectContent>
                  {(companies ?? []).map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={draftType} onValueChange={(v) => setDraftType(v as EmailDraftType)}>
                <SelectTrigger className="border-os-border bg-os-bg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DRAFT_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                className="w-full bg-os-accent text-black hover:bg-os-accent/90"
                disabled={!selectedCompany || emailMutation.isPending}
                onClick={() => emailMutation.mutate()}
              >
                {emailMutation.isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="mr-2 h-4 w-4" />
                )}
                Generate Email
              </Button>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
              Pending Follow-ups
            </h2>
            {loadingCompanies ? (
              <LoadingState />
            ) : (
              <ul className="space-y-2">
                {(tasks ?? [])
                  .filter((t) => t.task_type === "follow_up" || t.task_type === "meeting_prep")
                  .slice(0, 8)
                  .map((task) => (
                    <li
                      key={task.id}
                      className="flex items-center justify-between rounded-lg border border-os-border bg-os-card px-3 py-2"
                    >
                      <div className="flex-1">
                        <div className="text-sm">{task.title}</div>
                        {task.company && (
                          <Link
                            to="/os/companies/$companyId"
                            params={{ companyId: task.company_id! }}
                            className="text-xs text-os-muted hover:text-os-accent"
                          >
                            {task.company.name}
                          </Link>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => completeMutation.mutate(task.id)}
                        className="text-xs text-os-muted"
                      >
                        Done
                      </Button>
                    </li>
                  ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
              Objection Library
            </h2>
            <div className="space-y-2">
              {(objections ?? []).slice(0, 4).map((obj) => (
                <details
                  key={obj.id}
                  className="rounded-lg border border-os-border bg-os-card"
                >
                  <summary className="cursor-pointer px-3 py-2 text-sm font-medium">
                    {obj.objection}
                  </summary>
                  <p className="border-t border-os-border px-3 py-2 text-xs leading-relaxed text-os-muted">
                    {obj.best_response}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Right: email preview */}
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-wider text-os-muted">
              Email Preview
            </h2>
            {draft && (
              <Button size="sm" variant="outline" onClick={copyDraft} className="border-os-border">
                <Copy className="mr-1 h-3 w-3" />
                Copy
              </Button>
            )}
          </div>

          {!draft ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-os-border py-24 text-center">
              <Send className="mb-3 h-8 w-8 text-os-muted" />
              <p className="text-sm text-os-muted">Select a company and generate an email</p>
              <p className="mt-1 text-xs text-os-muted">Personalized in seconds, not an hour</p>
            </div>
          ) : (
            <div className="rounded-lg border border-os-border bg-os-card">
              <div className="border-b border-os-border px-4 py-3">
                <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">
                  Subject
                </div>
                <div className="mt-0.5 text-sm font-medium">{draft.subject}</div>
              </div>
              <div className="prose-email p-4 text-os-fg">{draft.body}</div>
            </div>
          )}

          {/* Active companies quick list */}
          <div className="mt-6">
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-os-muted">
              Active Companies
            </h2>
            <div className="space-y-1">
              {(companies ?? [])
                .filter((c) => !["won", "lost", "research"].includes(c.stage))
                .slice(0, 6)
                .map((c) => (
                  <Link
                    key={c.id}
                    to="/os/companies/$companyId"
                    params={{ companyId: c.id }}
                    className="flex items-center justify-between rounded px-2 py-1.5 text-sm hover:bg-os-hover"
                  >
                    <span>{c.name}</span>
                    <StageBadge stage={c.stage as PipelineStage} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </OsShell>
  );
}
