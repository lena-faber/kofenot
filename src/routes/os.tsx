import { createFileRoute, Outlet } from "@tanstack/react-router";
import osStyles from "@/os/styles/os-theme.css?url";

export const Route = createFileRoute("/os")({
  head: () => ({
    links: [{ rel: "stylesheet", href: osStyles }],
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: OsLayout,
});

function OsLayout() {
  return (
    <div
      id="os-root"
      className="os-theme os-isolate min-h-screen bg-os-bg text-os-fg"
    >
      <Outlet />
    </div>
  );
}
