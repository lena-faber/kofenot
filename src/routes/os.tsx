import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import osStyles from "@/os/styles/os-theme.css?url";

export const Route = createFileRoute("/os")({
  head: () => ({
    links: [{ rel: "stylesheet", href: osStyles }],
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: OsLayout,
});

function OsShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="os-root"
      className="os-theme os-isolate fixed inset-0 z-[9999] h-full overflow-hidden bg-os-bg text-os-fg"
    >
      {children}
    </div>
  );
}

function OsLayout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const siteRoot = document.getElementById("site-root");
    siteRoot?.style.setProperty("visibility", "hidden");
    return () => {
      document.body.style.overflow = "";
      siteRoot?.style.removeProperty("visibility");
    };
  }, []);

  const content = (
    <OsShell>
      <div className="h-full">
        <Outlet />
      </div>
    </OsShell>
  );

  if (typeof document !== "undefined" && mounted) {
    return createPortal(content, document.body);
  }

  return content;
}
