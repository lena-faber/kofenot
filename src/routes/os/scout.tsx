import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Download, Loader2, Plus, Radar, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { OsShell } from "@/os/components/layout/os-shell";
import { LoadingState } from "@/os/components/shared/os-ui";
import { importScoutProspect, runScout } from "@/os/lib/revenue-os.functions";
import type { ScoutProspect } from "@/os/types";

export const Route = createFileRoute("/os/scout")({
  component: ScoutPage,
});

function ScoutPage() {
  const queryClient = useQueryClient();
  const [prospects, setProspects] = useState<ScoutProspect[]>([]);
  const [summary, setSummary] = useState("");
  const [importing, setImporting] = useState<string | null>(null);

  const scoutMutation = useMutation({
    mutationFn: () => runScout({ data: { count: 5 } }),
    onSuccess: (result) => {
      setProspects(result.prospects);
      setSummary(result.summary);
      toast.success(`Scout found ${result.prospects.length} prospects`);
    },
    onError: () => toast.error("Scout run failed — check Supabase connection"),
  });

  const handleImport = async (prospect: ScoutProspect) => {
    setImporting(prospect.name);
    try {
      await importScoutProspect({ data: prospect });
      toast.success(`${prospect.name} added to CRM`);
      queryClient.invalidateQueries({ queryKey: ["os-companies"] });
      queryClient.invalidateQueries({ queryKey: ["os-dashboard"] });
    } catch {
      toast.error("Import failed");
    } finally {
      setImporting(null);
    }
  };

  return (
    <OsShell
      title="Scout — Prospecting Agent"
      actions={
        <Button
          size="sm"
          onClick={() => scoutMutation.mutate()}
          disabled={scoutMutation.isPending}
          className="bg-os-accent text-black hover:bg-os-accent/90"
        >
          {scoutMutation.isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Radar className="mr-2 h-4 w-4" />
          )}
          Run Scout
        </Button>
      }
    >
      <div className="p-6">
        <div className="mb-6 rounded-lg border border-os-border bg-os-card p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Radar className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="os-title">Scout Agent</div>
              <div className="os-body mt-1">
                Finds 20–50 qualified prospects daily. Researches decision-makers, identifies
                entry points, and scores fit for KOFENOT™ across coffee shops, corporate HR,
                museums, universities, coworking, and events.
              </div>
            </div>
          </div>
        </div>

        {scoutMutation.isPending && <LoadingState />}

        {summary && (
          <div className="mb-4 flex items-start gap-2 rounded-lg border border-os-accent/20 bg-os-accent/5 p-3">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-os-accent" />
            <p className="text-sm">{summary}</p>
          </div>
        )}

        {prospects.length === 0 && !scoutMutation.isPending && (
          <div className="flex flex-col items-center py-16 text-center">
            <Radar className="mb-3 h-10 w-10 text-os-muted" />
            <p className="text-sm font-medium">No prospects yet</p>
            <p className="mt-1 text-xs text-os-muted">Click Run Scout to find qualified leads</p>
          </div>
        )}

        <div className="space-y-3">
          {prospects.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-os-border bg-os-card p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="font-medium">{p.name}</div>
                    <span className="rounded bg-os-accent/15 px-2 py-0.5 text-xs font-medium text-os-accent">
                      {p.score}% fit
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-os-muted">
                    <span>{p.industry}</span>
                    <span>·</span>
                    <span>{p.location}</span>
                    <span>·</span>
                    <span>{p.employee_count} employees</span>
                    {p.website && (
                      <>
                        <span>·</span>
                        <a href={p.website} target="_blank" rel="noopener noreferrer" className="hover:text-os-accent">
                          {p.website.replace("https://", "")}
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleImport(p)}
                  disabled={importing === p.name}
                  className="shrink-0 border-os-border"
                >
                  {importing === p.name ? (
                    <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                  ) : (
                    <Plus className="mr-1 h-3 w-3" />
                  )}
                  Import
                </Button>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">
                    Entry Point
                  </div>
                  <p className="mt-0.5 text-xs">{p.entry_point}</p>
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">
                    Use Case
                  </div>
                  <p className="mt-0.5 text-xs">{p.use_case}</p>
                </div>
              </div>

              {p.decision_makers.length > 0 && (
                <div className="mt-3">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-os-muted">
                    Decision Makers
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {p.decision_makers.map((dm) => (
                      <span
                        key={dm.name}
                        className="rounded border border-os-border px-2 py-0.5 text-xs"
                      >
                        {dm.name} — {dm.role}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {p.pain_points.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.pain_points.map((pp) => (
                    <span key={pp} className="rounded bg-os-hover px-2 py-0.5 text-[11px] text-os-muted">
                      {pp}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </OsShell>
  );
}
