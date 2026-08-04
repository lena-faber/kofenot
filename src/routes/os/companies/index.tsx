import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Building2, Search } from "lucide-react";
import { useState } from "react";
import { OsShell } from "@/os/components/layout/os-shell";
import {
  formatCurrency,
  formatRelativeDate,
  LoadingState,
  StageBadge,
} from "@/os/components/shared/os-ui";
import { getCompanies } from "@/os/lib/revenue-os.functions";
import type { PipelineStage } from "@/os/types";
import { PIPELINE_STAGES } from "@/os/constants/pipeline";

export const Route = createFileRoute("/os/companies/")({
  component: CompaniesPage,
});

function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("");

  const { data: companies, isLoading } = useQuery({
    queryKey: ["os-companies", search, stageFilter],
    queryFn: () =>
      getCompanies({
        data: {
          search: search || undefined,
          stage: stageFilter || undefined,
        },
      }),
  });

  return (
    <OsShell title="Companies">
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-os-muted" />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-os-border bg-os-card py-2 pl-9 pr-3 text-sm placeholder:text-os-muted focus:outline-none focus:ring-1 focus:ring-os-accent"
            />
          </div>
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="rounded-md border border-os-border bg-os-card px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-os-accent"
          >
            <option value="">All stages</option>
            {PIPELINE_STAGES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {isLoading ? (
          <LoadingState />
        ) : (
          <div className="overflow-hidden rounded-lg border border-os-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-os-border bg-os-card text-left text-xs uppercase tracking-wider text-os-muted">
                  <th className="px-4 py-2.5 font-medium">Company</th>
                  <th className="px-4 py-2.5 font-medium">Industry</th>
                  <th className="px-4 py-2.5 font-medium">Stage</th>
                  <th className="px-4 py-2.5 font-medium">Probability</th>
                  <th className="px-4 py-2.5 font-medium">Revenue</th>
                  <th className="px-4 py-2.5 font-medium">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {(companies ?? []).map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-os-border/50 transition-colors hover:bg-os-hover"
                  >
                    <td className="px-4 py-2.5">
                      <Link
                        to="/os/companies/$companyId"
                        params={{ companyId: c.id }}
                        className="flex items-center gap-2 font-medium hover:text-os-accent"
                      >
                        <Building2 className="h-4 w-4 text-os-muted" />
                        {c.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2.5 text-os-muted">{c.industry ?? "—"}</td>
                    <td className="px-4 py-2.5">
                      <StageBadge stage={c.stage as PipelineStage} />
                    </td>
                    <td className="px-4 py-2.5 tabular-nums">{c.probability}%</td>
                    <td className="px-4 py-2.5 tabular-nums">
                      {c.expected_revenue ? formatCurrency(c.expected_revenue) : "—"}
                    </td>
                    <td className="px-4 py-2.5 text-os-muted">
                      {c.last_activity_at ? formatRelativeDate(c.last_activity_at) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {(companies ?? []).length === 0 && (
              <div className="py-12 text-center text-sm text-os-muted">No companies found</div>
            )}
          </div>
        )}
      </div>
    </OsShell>
  );
}
