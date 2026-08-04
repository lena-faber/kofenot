import type { PipelineStage, TaskPriority } from "../../types";
import { getStageColor, getStageLabel } from "../../constants/pipeline";
import { cn } from "@/lib/utils";

export function StageBadge({ stage }: { stage: PipelineStage }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-medium text-white",
        getStageColor(stage),
      )}
    >
      {getStageLabel(stage)}
    </span>
  );
}

export function PriorityDot({ priority }: { priority: TaskPriority }) {
  const colors: Record<TaskPriority, string> = {
    urgent: "bg-red-500",
    high: "bg-orange-500",
    medium: "bg-yellow-500",
    low: "bg-zinc-500",
  };
  return <span className={cn("inline-block h-2 w-2 rounded-full", colors[priority])} />;
}

export function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-os-border bg-os-card p-4">
      <div className="text-xs font-medium uppercase tracking-wider text-os-muted">{label}</div>
      <div className={cn("mt-1 text-xs font-medium tabular-nums", accent && "text-os-accent")}>
        {value}
      </div>
      {sub && <div className="mt-0.5 text-xs text-os-muted">{sub}</div>}
    </div>
  );
}

export function AgentCard({
  name,
  role,
  description,
  icon: Icon,
  href,
  color,
}: {
  name: string;
  role: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      className="group block rounded-lg border border-os-border bg-os-card p-4 transition-colors hover:border-os-accent/40 hover:bg-os-hover"
    >
      <div className="flex items-start gap-3">
        <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", color)}>
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div>
          <div className="os-title">{name}</div>
          <div className="text-xs font-medium text-os-accent">{role}</div>
          <div className="os-body mt-1.5">{description}</div>
        </div>
      </div>
    </a>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-sm font-medium text-os-fg">{title}</div>
      <p className="mt-1 max-w-sm text-xs text-os-muted">{description}</p>
    </div>
  );
}

export function LoadingState() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-os-accent border-t-transparent" />
    </div>
  );
}

export function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function formatRelativeDate(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}
