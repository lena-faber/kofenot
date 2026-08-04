import { useCallback, useEffect, useState, type ReactNode } from "react";
import { OsSidebar } from "./os-sidebar";
import { CommandPalette } from "./command-palette";

interface OsShellProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
}

export function OsShell({ children, title, actions }: OsShellProps) {
  const [commandOpen, setCommandOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setCommandOpen((o) => !o);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <OsSidebar onOpenCommand={() => setCommandOpen(true)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        {(title || actions) && (
          <header className="flex h-12 shrink-0 items-center justify-between border-b border-os-border px-6">
            {title && (
              <div className="font-semibold tracking-tight text-os-accent">{title}</div>
            )}
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </header>
        )}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
