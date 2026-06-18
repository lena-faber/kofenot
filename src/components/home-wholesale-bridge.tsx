"use client";
import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeWholesaleBridge() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (pathname !== "/") return;

    const howHeading = Array.from(document.querySelectorAll("h2")).find((node) =>
      node.textContent?.trim().startsWith("How It Works"),
    );
    howHeading?.closest("section")?.setAttribute("id", "how-it-works");

    const wholesaleButton = Array.from(document.querySelectorAll("button")).find((node) =>
      node.textContent?.includes("Download Product CSV"),
    );
    if (wholesaleButton) {
      wholesaleButton.textContent = "View Wholesale Pricing";
      const redirect = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        window.location.assign("/wholesale");
      };
      wholesaleButton.addEventListener("click", redirect, true);
      return () => wholesaleButton.removeEventListener("click", redirect, true);
    }
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-16 lg:px-6">
      <div className="neon-border bg-[rgba(0,255,0,0.04)] p-8 text-center neon-glow md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Ready to order in volume?</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Shop raw wholesale packs.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Compare the raw sample, 100-pack, and 400-unit master case, or request a separately quoted custom-branding program.</p>
        <Link to="/wholesale" className="mt-7 inline-block">
          <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
            View Wholesale Pricing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
