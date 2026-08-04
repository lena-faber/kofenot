import { Link, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  Building2,
  Command,
  Kanban,
  LayoutDashboard,
  Megaphone,
  Radar,
  Send,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/os", label: "CEO Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/os/scout", label: "Scout", icon: Radar, desc: "Find prospects" },
  { to: "/os/closer", label: "Closer", icon: Send, desc: "Outreach & follow-ups" },
  { to: "/os/cmo", label: "CMO", icon: Megaphone, desc: "Content engine" },
  { to: "/os/companies", label: "Companies", icon: Building2 },
  { to: "/os/pipeline", label: "Pipeline", icon: Kanban },
  { to: "/os/analytics", label: "Analytics", icon: BarChart3 },
] as const;

interface OsSidebarProps {
  onOpenCommand: () => void;
}

export function OsSidebar({ onOpenCommand }: OsSidebarProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-os-border bg-os-sidebar">
      <div className="flex items-center gap-2 border-b border-os-border px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-os-accent/15">
          <Zap className="h-4 w-4 text-os-accent" />
        </div>
        <div>
          <div className="text-xs font-semibold tracking-tight text-os-fg">Revenue OS</div>
          <div className="text-[10px] uppercase tracking-wider text-os-muted">KOFENOT™</div>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 p-2">
        {NAV.map(({ to, label, icon: Icon, exact }) => {
          const active = exact ? pathname === to : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-xs transition-colors",
                active
                  ? "bg-os-accent/10 text-os-accent"
                  : "text-os-muted hover:bg-os-hover hover:text-os-fg",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-os-border p-2">
        <button
          type="button"
          onClick={onOpenCommand}
          className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-os-muted transition-colors hover:bg-os-hover hover:text-os-fg"
        >
          <Command className="h-4 w-4" />
          <span>Search</span>
          <kbd className="ml-auto rounded border border-os-border bg-os-bg px-1.5 py-0.5 text-[10px] font-medium">
            ⌘K
          </kbd>
        </button>
      </div>
    </aside>
  );
}
