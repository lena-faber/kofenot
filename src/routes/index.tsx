"use client";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import corp from "@/assets/kofenot-corp.jpeg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import deadSpill from "@/assets/dead-spill.jpg";
import safeSpill from "@/assets/safe-spill.jpeg";
import neck from "@/assets/kofeenot-neck.jpg";
import mechanics from "@/assets/kofeenot-mechanics.jpg";
import tilt from "@/assets/kofeenot-tilt.jpg";
import fidget from "@/assets/kofeenot-fidget.jpg";
import triad from "@/assets/kofeenot-triad.jpg";
import demoVideo from "@/assets/kofeenot-demo.mp4";

import { Play, ArrowRight, Feather, Trophy, MonitorSmartphone, Check } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const retailCheckoutUrl = "https://buy.stripe.com/fZu7sKfz0gcQ7wk6BSdUY0E";

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
    <motion.div className="relative z-10 pointer-events-auto" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const faq = [
  ["What is KOFENOT?", "A pocket-flat laptop wedge that lifts the rear hinge to help deflect spills and improve the viewing angle."],
  ["Does it use magnets or adhesive?", "No. KOFENOT is a mechanical wedge with zero magnets, clips, or adhesives."],
  ["What devices does it support?", "It is designed for laptops and can also support phones and tablets for quick desk setup."],
  ["How much is the retail unit?", "Retail Price: $15 for one KOFENOT in hanging pack."],
];

function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const openCheckout = () => {
    const width = Math.min(920, window.screen.availWidth - 48);
    const height = Math.min(760, window.screen.availHeight - 48);
    const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
    const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
    const checkoutWindow = window.open(retailCheckoutUrl, "kofeenot_stripe_checkout", `popup=yes,width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`);
    if (checkoutWindow) {
      checkoutWindow.focus();
      return;
    }
    setCheckoutUrl(retailCheckoutUrl);
  };

  return (
    <>
      <section ref={heroRef} className="relative isolate -mt-16 min-h-[100svh] overflow-hidden bg-black pt-16">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img src={corp} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto min-h-[calc(100svh-4rem)] max-w-[1480px] px-9 pb-[170px] pt-7 lg:px-10">
          <Reveal delay={0.08}><p className="ml-6 mt-2 text-lg font-semibold italic uppercase tracking-[0.18em] text-white md:text-xl">COFFEE HAPPENS. BE READY.</p></Reveal>
          <Reveal delay={0.05}><h1 className="mt-6 text-[64px] font-black italic leading-[0.9] tracking-tight neon-text md:text-[96px] lg:text-[128px]">ULTIMATE<br />LAPTOP<br />WEDGE</h1></Reveal>
          <Reveal delay={0.15}>
            <div className="ml-6 mt-10 flex flex-wrap gap-3">
              <button type="button" onClick={() => setVideoOpen(true)} className="group inline-flex h-10 w-fit items-center gap-4 rounded-lg bg-red-600 px-6 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(220,38,38,0.55)] transition hover:bg-red-500"><Play className="h-7 w-7 shrink-0 fill-white text-white" />2-SEC SETUP</button>
              <a href="#pricing"><Button className="h-10 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">Buy Now</Button></a>
            </div>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-15 z-20">
          <Reveal delay={0.2}>
            <div className="grid h-[70px] grid-cols-4 border-t border-white/20 bg-black/10 backdrop-blur-sm">
              <div className="flex h-full items-center gap-7 border-r border-white/20 px-9"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-4xl font-black neon-text">0</div><div><div className="text-sm font-black uppercase text-white">Zero</div><div className="mt-1 text-base leading-6 text-white/80">Magnets, Clips, Adhesives</div></div></div>
              <div className="flex items-center gap-7 border-r border-white/20 px-9"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]"><Feather className="h-7 w-7 stroke-[1.5]" /></div><div><div className="text-sm font-black uppercase text-white">1 OZ</div><div className="mt-1 text-base leading-6 text-white/80">Pocket-Flat-Folding</div></div></div>
              <div className="flex items-center gap-7 border-r border-white/20 px-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]"><Trophy className="h-7 w-7 stroke-[1.5]" /></div><div><div className="text-sm font-black uppercase text-white">2 WINS</div><div className="mt-1 text-base leading-6 text-white/80">Spill Antidote / Better Posture</div></div></div>
              <div className="flex items-center gap-7 px-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]"><MonitorSmartphone className="h-7 w-7 stroke-[1.5]" /></div><div><div className="text-sm font-black uppercase text-white">3 DEVICES</div><div className="mt-1 text-base leading-6 text-white/80">Laptops / Phones / Tablets</div></div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.12)] px-4 pb-10 pt-20 lg:px-6">
        <Reveal><h2 className="text-4xl font-black tracking-tight md:text-5xl">One Small Wedge. <span className="neon-text">Two Big Wins</span></h2></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { img: deadSpill, label: "Dead spill", text: "Flat laptops trap liquid through the keyboard into the motherboard. One spill can mean a full replacement." },
            { img: safeSpill, label: "Safe spill", text: "Hinge-first incline redirects liquid away from critical components and buys reaction time during accidents." },
            { img: neck, label: "Better posture", text: "Raised screen angle helps reduce neck strain during daily laptop use." },
          ].map((u, i) => <Reveal key={u.label} delay={i * 0.08}><article className="panel overflow-hidden rounded-sm"><div className="aspect-square overflow-hidden bg-black"><img src={u.img} alt={u.label} className="h-full w-full object-cover" /></div><div className="p-5"><p className="text-sm leading-relaxed"><strong className="text-[color:var(--neon)]">{u.label}:</strong> {u.text}</p></div></article></Reveal>)}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.12)] px-4 py-10 lg:px-6">
        <Reveal><h2 className="text-4xl font-black tracking-tight md:text-5xl">How It Works: <span className="neon-text">Open › Rest › Snap</span></h2></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[ ["01", "Open Laptop All the Way", "Feel for the rear hinge."], ["02", "Rest Rear Hinge on Wedge", "Works with open-trench hinges. Flip wedge for closed-angle hinges."], ["03", "Snap Shut", "A satisfying mechanical click users keep repeating."] ].map(([n, t, d], i) => <Reveal key={n} delay={i * 0.1}><div className="panel relative h-full rounded-sm p-7"><div className="text-6xl font-black leading-none neon-text">{n}</div><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p><div className="absolute right-7 top-7 h-1 w-12 bg-[color:var(--neon)]" /></div></Reveal>)}
        </div>
      </section>

      <section id="devices" className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.12)] px-4 py-10 lg:px-6">
        <Reveal><h2 className="text-4xl font-black tracking-tight md:text-5xl"><span className="neon-text">3 Devices</span></h2></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[ { img: mechanics, c: "Laptop hinge-first wedge design" }, { img: tilt, c: "Phone and tablet desk angle" }, { img: fidget, c: "Tactile snap-open desk fidget" } ].map((g) => <div key={g.c} className="panel overflow-hidden rounded-sm"><div className="aspect-square overflow-hidden bg-black"><img src={g.img} alt={g.c} className="h-full w-full object-cover" /></div><div className="p-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">{g.c}</div></div>)}
        </div>
      </section>

      <section id="why" className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.12)] px-4 py-10 lg:px-6">
        <Reveal><h2 className="text-4xl font-black tracking-tight md:text-5xl">Why <span className="neon-text">KOFENOT</span></h2><p className="mt-3 max-w-3xl text-muted-foreground">Pocket-flat, one ounce, no magnets, no adhesives, and made for the real risk of coffee near laptops.</p></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="panel rounded-sm p-6"><h3 className="text-xl font-black">Patent-Pending Geometry</h3><p className="mt-3 text-sm text-muted-foreground">The small wedge lifts the rear hinge without attaching to the laptop.</p></div>
          <div className="panel rounded-sm p-6"><h3 className="text-xl font-black">Easy to Carry</h3><p className="mt-3 text-sm text-muted-foreground">Flat-folding 1 oz profile fits into a pocket, pouch, backpack, or laptop sleeve.</p></div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.12)] px-4 py-10 lg:px-6">
        <Reveal><h2 className="text-4xl font-black tracking-tight md:text-5xl">Reviews / <span className="neon-text">Testimonials</span></h2></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Fits in my laptop sleeve and makes cafe work feel less risky.", "The snap is addictive. I keep it on my desk now.", "Simple, light, and useful every day."].map((quote) => <blockquote key={quote} className="panel rounded-sm p-6 text-lg font-semibold">“{quote}”</blockquote>)}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-[900px] border-t border-[rgba(0,255,0,0.12)] px-4 py-10 lg:px-6">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">FAQ</h2>
        <div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">{faq.map(([q, a]) => <div key={q} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr]"><h3 className="text-lg font-black uppercase">{q}</h3><p className="text-sm text-muted-foreground">{a}</p></div>)}</div>
      </section>

      <section id="pricing" className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.12)] px-4 py-10 lg:px-6">
        <Reveal><h2 className="text-4xl font-black tracking-tight md:text-5xl">Buy <span className="neon-text">KOFENOT</span></h2><p className="mt-3 text-muted-foreground">Consumer retail page. Wholesale pricing lives on Wholesale.</p></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-[.95fr_1.05fr]">
          <article className="neon-border neon-glow flex flex-col rounded-sm bg-[rgba(0,255,0,0.06)] p-6"><div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Retail Price</div><div className="mt-3 text-5xl font-black neon-text">$15</div><p className="mt-3 text-sm">One KOFENOT™ laptop wedge in retail-ready hanging pack.</p><ul className="mt-5 space-y-2 text-sm"><li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" />1 oz flat-folding unit</li><li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" />No magnets, clips, or adhesives</li><li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" />Coffee-shop ready</li></ul><Button onClick={openCheckout} className="mt-7 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]">Buy Now <ArrowRight className="ml-2 h-4 w-4" /></Button></article>
          <div className="panel overflow-hidden rounded-sm"><img src={giftBox} alt="KOFENOT retail packaging" className="h-full min-h-[360px] w-full object-cover" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-16 lg:px-6"><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{[{ v: 1000, s: "+", l: "$ saved per spill" }, { v: 24, s: "h", l: "Dispatch time" }, { v: 100, s: "%", l: "RoHS compliant" }, { v: 3, s: "", l: "Device categories" }].map((c) => <div key={c.l} className="panel rounded-sm p-6 text-center"><div className="text-3xl font-black neon-text md:text-4xl"><CountUp value={c.v} />{c.s}</div><div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{c.l}</div></div>)}</div></section>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}><DialogContent className="max-w-3xl bg-black p-2 neon-border"><video src={demoVideo} controls autoPlay playsInline className="w-full rounded-sm" /></DialogContent></Dialog>
      <Dialog open={!!checkoutUrl} onOpenChange={(o) => !o && setCheckoutUrl(null)}><DialogContent className="max-w-md bg-black p-8 text-center neon-border"><h3 className="text-2xl font-black neon-text">Secure checkout</h3><p className="mt-3 text-sm text-muted-foreground">Stripe checkout opens in its own secure payment window.</p><Button onClick={() => checkoutUrl && (window.location.href = checkoutUrl)} className="mt-6 bg-[color:var(--neon)] font-bold text-black hover:bg-[color:var(--neon-dim)]">Continue to checkout <ArrowRight className="ml-2 h-4 w-4" /></Button></DialogContent></Dialog>
    </>
  );
}
