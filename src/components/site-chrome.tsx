"use client";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] isolate border-b border-white/5 bg-black/70 text-white backdrop-blur-md">
      <div className="ml-auto flex h-16 max-w-[1320px] items-center gap-3 px-4 lg:px-6">
        <Link to="/" className="group flex shrink-0 items-center gap-4">
          <span className="text-xl font-black tracking-[0.18em] text-[color:var(--neon)] group-hover:text-[color:var(--neon-dim)]">
            KOFENOT
          </span>

          <span className="hidden whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--neon)] sm:block">
            Make your laptop coffeeshop-friendly™
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-sm md:flex">
          <a
            href="/#why"
            className="transition-colors hover:text-[color:var(--neon)]"
          >
            Why KOFENOT
          </a>

          <a
            href="/#how-it-works"
            className="transition-colors hover:text-[color:var(--neon)]"
          >
            How It Works
          </a>

          <a
            href="/#specs"
            className="transition-colors hover:text-[color:var(--neon)]"
          >
            Specs
          </a>

          <Link
            to="/wholesale"
            className="transition-colors hover:text-[color:var(--neon)]"
          >
            Wholesale
          </Link>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[color:var(--neon)] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[color:var(--neon-dim)] sm:px-6"
          >
            Buy Now
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center border border-[rgba(0,255,0,0.25)] p-2 transition-colors hover:border-[color:var(--neon)] hover:text-[color:var(--neon)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`transition-transform duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid bg-black transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="grid gap-4 border-t border-[rgba(0,255,0,0.18)] px-4 py-4 text-sm">
            <a href="/#why" onClick={() => setOpen(false)}>
              Why KOFENOT
            </a>

            <a href="/#how-it-works" onClick={() => setOpen(false)}>
              How It Works
            </a>

            <a href="/#specs" onClick={() => setOpen(false)}>
              Specifications
            </a>

            <Link to="/wholesale" onClick={() => setOpen(false)}>
              Wholesale
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-[rgba(0,255,0,0.18)] mt-20"><div className="mx-auto max-w-[1320px] px-4 lg:px-6 py-10 text-center text-sm text-muted-foreground space-y-3"><p className="text-foreground"><strong>© 2026 Kofeᵉ̬Not: Make Your Laptop Coffee Shop-Friendly.</strong> Patent Pending. Made in California.</p><p><Link to="/wholesale" className="text-[color:var(--neon)] hover:underline">Samples • Wholesale Packs • Bulk Cases</Link>{" "}• OEM Runs •{" "}<a className="text-[color:var(--neon)] hover:underline" href="mailto:info@kofenot.com">info@kofenot.com</a></p><p className="text-xs">RoHS Compliant | Patent Pending | KofeNot: Make Your Laptop CoffeeShop-Friendly™ Trademark</p></div></footer>;
}
