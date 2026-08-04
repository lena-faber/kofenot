import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { OsShell } from "@/os/components/layout/os-shell";
import {
  formatCurrency,
  LoadingState,
  StageBadge,
} from "@/os/components/shared/os-ui";
import { PIPELINE_STAGES, getStageColor } from "@/os/constants/pipeline";
import { getPipeline } from "@/os/lib/revenue-os.functions";
import type { PipelineStage } from "@/os/types";

export const Route = createFileRoute("/os/pipeline")({
  component: PipelinePage,
});

function PipelinePage() {
  const { data: companies, isLoading } = useQuery({
    queryKey: ["os-pipeline"],
    queryFn: () => getPipeline(),
  });

  const activeStages = PIPELINE_STAGES.filter(
    (s) => !["won", "lost"].includes(s.value),
  );

  const byStage = activeStages.map((stage) => ({
    ...stage,
    companies: (companies ?? []).filter((c) => c.stage === stage.value),
    totalValue: (companies ?? [])
      .filter((c) => c.stage === stage.value)
      .reduce((s, c) => s + (c.expected_revenue ?? 0), 0),
  }));

  const totalPipeline = (companies ?? []).reduce(
    (s, c) => s + (c.expected_revenue ?? 0),
    0,
  );

  return (
    <OsShell title="Pipeline">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-os-muted">Total Pipeline</div>
            <div className="text-xs font-medium tabular-nums text-os-accent">
              {formatCurrency(totalPipeline)}
            </div>
          </div>
          <div className="text-sm text-os-muted">
            {(companies ?? []).length} active deals
          </div>
        </div>

        {isLoading ? (
          <LoadingState />
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-4">
            {byStage.map((stage) => (
              <div
                key={stage.value}
                className="w-64 shrink-0 rounded-lg border border-os-border bg-os-sidebar"
              >
                <div className="border-b border-os-border p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${stage.color}`} />
                      <span className="text-sm font-medium">{stage.label}</span>
                    </div>
                    <span className="rounded bg-os-hover px-1.5 py-0.5 text-xs tabular-nums">
                      {stage.companies.length}
                    </span>
                  </div>
                  {stage.totalValue > 0 && (
                    <div className="mt-1 text-xs tabular-nums text-os-muted">
                      {formatCurrency(stage.totalValue)}
                    </div>
                  )}
                </div>
                <div className="space-y-2 p-2">
                  {stage.companies.map((c) => (
                    <Link
                      key={c.id}
                      to="/os/companies/$companyId"
                      params={{ companyId: c.id }}
                      className="block rounded-md border border-os-border bg-os-card p-3 transition-colors hover:border-os-accent/30"
                    >
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="mt-1 text-xs text-os-muted">{c.industry}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs tabular-nums text-os-accent">
                          {c.probability}%
                        </span>
                        {c.expected_revenue && (
                          <span className="text-xs tabular-nums text-os-muted">
                            {formatCurrency(c.expected_revenue)}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                  {stage.companies.length === 0 && (
                    <div className="py-4 text-center text-xs text-os-muted">Empty</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </OsShell>
  );
}
