"use client";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLeads } from "@/components/lead-provider";

import corp from "@/assets/kofenot-corp.jpeg";
import giftBox from "@/assets/kofeenot-gift.jpg";
import masterCase from "@/assets/kofeenot-pack.jpeg";
import deadSpill from "@/assets/dead-spill.jpg";
import safeSpill from "@/assets/safe-spill.jpeg";
import neck from "@/assets/kofeenot-neck.jpg";
import mechanics from "@/assets/kofeenot-mechanics.jpg";
import tilt from "@/assets/kofeenot-tilt.jpg";
import fidget from "@/assets/kofeenot-fidget.jpg";
import brand from "@/assets/kofeenot-brand.jpg";
import demoVideo from "@/assets/kofeenot-demo.mp4";

import {
  Play,
  ArrowRight,
  Sparkles,
  Zap,
  Eye,
  RotateCcw,
  Truck,
  Shield,
  Check,
  Feather,
  Trophy,
  MonitorSmartphone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className="relative z-10 pointer-events-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const { openSample, openQuote } = useLeads();
  const [videoOpen, setVideoOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const openCheckout = (url: string) => {
    const width = Math.min(920, window.screen.availWidth - 48);
    const height = Math.min(760, window.screen.availHeight - 48);
    const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
    const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
    const checkoutWindow = window.open(
      url,
      "kofeenot_stripe_checkout",
      `popup=yes,width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`,
    );

    if (checkoutWindow) {
      checkoutWindow.focus();
      return;
    }

    setCheckoutUrl(url);
  };


  return (
    <>
{/* HERO */}
<section
  ref={heroRef}
  className="relative isolate -mt-16 min-h-[100svh] overflow-hidden bg-black pt-16"
>
  {/* Background image */}
  <div
    className="pointer-events-none absolute inset-0 z-0"
    aria-hidden="true"
  >
    <img
      src={corp}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
    
  </div>

  {/* Hero content */}
  <div className="relative z-10 mx-auto min-h-[calc(100svh-4rem)] max-w-[1480px] px-9 pb-[170px] pt-7 lg:px-10">
    <Reveal delay={0.08}>
      <p className="ml-6 mt-2 text-lg font-semibold italic uppercase tracking-[0.18em] text-white md:text-xl">
        COFFEE HAPPENS. BE READY.
      </p>
    </Reveal>

    <Reveal delay={0.05}>
      <h1 className="mt-6 text-[64px] font-black italic leading-[0.9] tracking-tight neon-text md:text-[96px] lg:text-[128px]">
        ULTIMATE
        <br />
        LAPTOP
        <br />
        WEDGE
      </h1>
    </Reveal>

    <Reveal delay={0.15}>
      <button
        type="button"
        onClick={() => setVideoOpen(true)}
        className="group ml-6 mt-10 inline-flex h-8 w-fit items-center gap-5 rounded-lg bg-red-600 px-7 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(220,38,38,0.55)] transition hover:bg-red-500"
      >
        <Play className="h-8 w-8 shrink-0 fill-white text-white" />
        <span className="whitespace-nowrap">2-SEC SETUP</span>
      </button>
    </Reveal>
  </div>

  {/* Bottom tabs */}
  <div className="absolute inset-x-0 bottom-15 z-20">
    <Reveal delay={0.2}>
      <div className="grid h-[70px] grid-cols-4 border-t border-white/20 bg-black/10 backdrop-blur-sm">
        <div className="flex items-center gap-7 border-r border-white/20 px-9 h-full">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-4xl font-black neon-text">
            0
          </div>
          <div>
            <div className="text-sm font-black uppercase text-white">
              Zero
            </div>
            <div className="mt-1 text-base leading-6 text-white/80">
              <div>Magnets, Clips, Adhesives</div>
            </div>
            
          </div>
        </div>

        <div className="flex items-center gap-7 border-r border-white/20 px-9">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]">
            <Feather className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-white">
              1 OZ
            </div>
            <div className="mt-1 text-base leading-6 text-white/80">
              <div>Pocket-Flat-Folding</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7 border-r border-white/20 px-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]">
            <Trophy className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-white">
              2 WINS
            </div>
            <div className="mt-1 text-base leading-6 text-white/80">
              <div>Spill Antidote / Better Posture.</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7 px-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]">
            <MonitorSmartphone className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-white">
              3 DEVICES
            </div>
            <div className="mt-1 text-base leading-6 text-white/80">
              <div>Laptops / Phones / Tablets</div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>
        
      {/* TWO WINS */}
      <section id="why" className="mx-auto max-w-[1320px] px-4 lg:px-6 py-20 border-t border-[rgba(0,255,0,0.12)]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">One Small Wedge. <span className="neon-text">Two Big Wins</span></h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { img: deadSpill, label: "Dead spill", text: "Flat laptops trap liquid through the keyboard into the motherboard. One spill can mean a full replacement." },
            { img: safeSpill, label: "Safe spill", text: "Hinge-first incline redirects liquid away from critical components. Buys reaction time during accidents." },
            { img: neck, label: "Better Posture", text: "Raised screen angle helps reduce neck strain during daily laptop use." },
          ].map((u, i) => (
            <Reveal key={u.label} delay={i * 0.08}>
              <article className="panel rounded-sm overflow-hidden group">
                <div className="bg-black aspect-square overflow-hidden">
                  <img src={u.img} alt={u.label} className="w-full h-full object-cover transition group-hover:scale-[1.02]" />
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed">
                    <strong className="text-[color:var(--neon)]">{u.label}:</strong> {u.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-[1320px] px-4 lg:px-6 py-20 border-t border-[rgba(0,255,0,0.12)]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            How It Works: <span className="neon-text">Open › Rest › Snap</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { n: "01", t: "Open Laptop All the Way", d: "Feel for the rear hinge." },
            { n: "02", t: "Rest Rear Hinge on Wedge", d: "Works with open-trench hinges. Flip wedge for closed-angle hinges." },
            { n: "03", t: "Snap Shut. Weirdly Addictive.", d: "A satisfying mechanical click users keep repeating." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative panel rounded-sm p-7 h-full">
                <div className="text-6xl font-black neon-text leading-none">{s.n}</div>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
                <div className="absolute top-7 right-7 h-1 w-12 bg-[color:var(--neon)]" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { img: mechanics, c: "Hinge-first wedge design" },
            { img: tilt, c: "Mac + PC Compatible" },
            { img: fidget, c: "Tactile click desk fidget" },
          ].map((g) => (
            <div key={g.c} className="panel rounded-sm overflow-hidden">
              <div className="bg-black aspect-square overflow-hidden">
                <img src={g.img} alt={g.c} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 text-xs uppercase tracking-[0.18em] text-muted-foreground text-center">{g.c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="mx-auto max-w-[1320px] px-4 lg:px-6 py-20 border-t border-[rgba(0,255,0,0.12)]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical <span className="neon-text">Specifications</span></h2>
          <p className="text-muted-foreground mt-3">Patent-Pending Geometry</p>
        </Reveal>
        <div className="mt-10 panel rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Material", "High-Impact RoHS-Compliant ABS"],
                ["Weight Per Unit", "1 oz"],
                ["Folded Size", "3.4\" L × 2.4\" W × 0.4\" H"],      
                ["Production Status", "FOB California • OEM ready"],
                ["IP Status", "Utility patent pending • KofeNot™: Make Your Laptop Coffee-Shop Friendly™ trademark pending"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-[rgba(0,255,0,0.12)] last:border-0">
                  <td className="px-5 py-4 text-[color:var(--neon)] font-bold uppercase text-xs tracking-wider w-1/3">{k}</td>
                  <td className="px-5 py-4">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="relative z-20 mt-5 flex flex-wrap gap-3 pointer-events-auto">
          <a href="/kofeenot-spec.pdf" download>
            <Button variant="outline" className="border-[rgba(0,255,0,0.45)] hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]">
              Download spec sheet (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-[1320px] px-4 lg:px-6 py-20 border-t border-[rgba(0,255,0,0.12)]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Retail • Café • <span className="neon-text">Wholesale</span></h2>
          <p className="text-muted-foreground mt-3">24-48h dispatch • FOB SF Bay Area, CA, US</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              vol: "2-Unit Gift Box",
              price: "$30",
              detail: "US shipping included • Professional evaluation set • Gift-ready packaging",
              sub: "Credited toward OEM order",
              cta: "Buy now",
              action: "url" as const,
              source: "price-2pack",
              url: "https://buy.stripe.com/fZufZg5YqbWA3g4gcsdUY0B",
            },
            {
              vol: "1 unit in Hanging Pack",
              price: "$15",
              detail: "Single KOFENOT™ laptop wedge in retail-ready hanging retail packaging for cafés, counters, events, and gift shops.",
              sub: "Compact 1 oz flat-folding unit • ready to merchandise",
              cta: "Buy now",
              action: "url" as const,
              source: "price-hanging-pack",
              url: "https://buy.stripe.com/fZu7sKfz0gcQ7wk6BSdUY0E",
              featured: true,
            },
            {
              vol: "Pack / Case / OEM",
              price: "Wholesale",
              detail: "For distributors, promo agencies, corporate gifts, trade shows, conferences, white-label programs, private label, and licensing.",
              sub: "Includes 100-unit packs, 400-unit master cases, custom logo decoration, packaging, tooling, and logistics options.",
              cta: "Download Product CSV",
              action: "url" as const,
              source: "price-wholesale-csv",
              url: "/kofenot-wholesale.csv",
            },
          ].map((p, i) => (
            <Reveal key={p.vol} delay={i * 0.05}>
              <div className={`rounded-sm p-6 h-full flex flex-col ${p.featured ? "neon-border bg-[rgba(0,255,0,0.06)] neon-glow" : "panel panel-hover"}`}>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.vol}</div>
                <div className="text-3xl font-black mt-3 neon-text">{p.price}</div>
                {p.detail && <div className="text-sm mt-2">{p.detail}</div>}
                {p.sub && <p className="text-xs text-muted-foreground mt-2">{p.sub}</p>}
                <div className="flex-1" />
                <Button
                  onClick={() => {
                    if (p.source === "price-2pack" && p.url) {
                      window.open(p.url, "_blank", "noopener,noreferrer");
                      return;
                    }
                    if (p.action === "url" && p.url) {
                      window.open(p.url, "_blank", "noopener,noreferrer");
                      return;
                    }
                    openQuote(p.source);
                  }}
                  className="mt-5 bg-[color:var(--neon)] text-black hover:bg-[color:var(--neon-dim)] font-bold"
                >
                  {p.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4 items-stretch">
          {[
            { img: giftBox, c: "KOFEᵉ̬NOT in gift box" },
            { img: masterCase, c: "KOFEᵉ̬NOT pack in master case" },
          ].map((g) => (
            <div key={g.c} className="panel rounded-sm overflow-hidden flex flex-col">
              <div className="bg-black flex-1">
                <img src={g.img} alt={g.c} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 text-xs uppercase tracking-[0.18em] text-muted-foreground text-center">{g.c}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Counters */}
      <section className="mx-auto max-w-[1320px] px-4 lg:px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: 1000, s: "+", l: "$ saved per unit" },
            { v: 24, s: "h", l: "Dispatch time" },
            { v: 100, s: "%", l: "RoHS compliant" },
            { v: 3, s: ".5yr", l: "Desk presence" },
          ].map((c) => (
            <div key={c.l} className="panel rounded-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-black neon-text">
                <CountUp value={c.v} />{c.s}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl bg-black neon-border p-2">
          <video src={demoVideo} controls autoPlay playsInline className="w-full rounded-sm" />
        </DialogContent>
      </Dialog>

       {/* Stripe Checkout Fallback Modal */}
      <Dialog open={!!checkoutUrl} onOpenChange={(o) => !o && setCheckoutUrl(null)}>
        <DialogContent className="max-w-md bg-black neon-border p-8 text-center">
          <h3 className="text-2xl font-black neon-text">Secure checkout</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Stripe checkout opens in its own secure payment window.
          </p>
          <Button
            onClick={() => checkoutUrl && (window.location.href = checkoutUrl)}
            className="mt-6 bg-[color:var(--neon)] text-black hover:bg-[color:var(--neon-dim)] font-bold"
          >
            Continue to checkout <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

     
