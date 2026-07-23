"use client";

import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const sampleCheckoutUrl = "https://buy.stripe.com/9B614m9aC2m0eYM2lCdUY0F";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Wholesale", to: "/wholesale" },
  { label: "Downloads", to: "/downloads" },
  { label: "The Story", to: "/story" },
] as const;

const footerLinks = [
  { label: "About", href: "/#why" },
  { label: "Contact", href: "mailto:info@kofenot.com" },
  { label: "Patent & Trademark", href: "/spec" },
  { label: "Shipping", href: "/#faq" },
  { label: "Returns", href: "/#faq" },
  {
    label: "Privacy",
    href: "mailto:info@kofenot.com?subject=KOFENOT%20Privacy",
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isSamplePage =
    location.pathname === "/wholesale" ||
    location.pathname === "/downloads";

  const ctaHref = isSamplePage ? sampleCheckoutUrl : "/#pricing";
  const ctaLabel = isSamplePage ? "Buy Sample" : "Buy Now";

  return (
   <header className="sticky top-0 z-[100] isolate overflow-x-hidden border-b border-white/5 text-white">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center gap-3 px-4 lg:px-6">
        <Link
          to="/"
          className="group flex min-w-0 shrink items-center gap-3 sm:gap-4"
          onClick={() => setOpen(false)}
        >
          <span className="shrink-0 text-xl font-black tracking-[0.18em] text-[color:var(--neon)] group-hover:text-[color:var(--neon-dim)]">
            KOFENOT
          </span>
          <span className="hidden min-w-0 truncate text-[11px] font-bold uppercase tracking-[0.18em] text-[white] sm:block">
            Make your laptop coffeeshop-friendly™
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 text-sm md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-semibold transition-colors hover:text-[color:var(--neon)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-4">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[color:var(--neon)] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[color:var(--neon-dim)] sm:px-6"
          >
            {ctaLabel}
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
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="grid gap-4 border-t border-[rgba(0,255,0,0.18)] px-4 py-4 text-sm">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 overflow-x-hidden border-t border-[rgba(0,255,0,0.18)]">
      <div className="mx-auto max-w-[1320px] px-4 py-10 text-center lg:px-6">
        <p className="body-copy">
          <strong>
            © 2026 KOFENOT: Make Your Laptop Coffee Shop-Friendly.
          </strong>{" "}
          Patent Pending. Made in California.
        </p>

        <nav className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[color:var(--neon)] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="body-copy mt-4">
          RoHS Compliant | Patent Pending | KOFENOT™ Trademark
        </p>
      </div>
    </footer>
  );
}
