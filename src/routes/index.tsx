"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Check,
  Feather,
  MonitorSmartphone,
  Play,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import corp from "@/assets/kofenot-corp.jpeg";
import deadSpill from "@/assets/dead-spill.jpg";
import demoVideo from "@/assets/kofeenot-demo.mp4";
import testimonialVideo from "@/assets/kofenot-testimonials.mp4";
import testimonialPoster from "@/assets/kofenot-testimonials.jpg";
import fidget from "@/assets/kofeenot-fidget.jpg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import mechanics from "@/assets/kofeenot-mechanics.jpg";
import neck from "@/assets/kofeenot-neck.jpg";
import safeSpill from "@/assets/safe-spill.jpeg";
import tilt from "@/assets/kofeenot-tilt.jpg";

export const Route = createFileRoute("/")({ component: Home });

const retailCheckoutUrl = "https://buy.stripe.com/fZu7sKfz0gcQ7wk6BSdUY0E";

const benefits = [
  {
    img: deadSpill,
    label: "Dead spill",
    text:
      "Flat laptops trap liquid through the keyboard into the motherboard. One spill can mean a full replacement.",
  },
  {
    img: safeSpill,
    label: "Safe spill",
    text:
      "Hinge-first incline redirects liquid away from critical components and buys reaction time during accidents.",
  },
  {
    img: neck,
    label: "Better posture",
    text: "Raised screen angle helps reduce neck strain during daily laptop use.",
  },
];

const steps = [
  ["01", "Open Laptop All the Way", "Feel for the rear hinge."],
  [
    "02",
    "Rest Rear Hinge on Wedge",
    "Works with open-trench hinges. Flip wedge for closed-angle hinges.",
  ],
  ["03", "Snap Shut", "A satisfying mechanical click users keep repeating."],
];

const devices = [
  { img: mechanics, caption: "Laptop hinge-first wedge design" },
  { img: tilt, caption: "Phone and tablet desk angle" },
  { img: fidget, caption: "Tactile snap-open desk fidget" },
];

const stats = [
  { value: 1000, suffix: "+", label: "$ saved per spill" },
  { value: 24, suffix: "h", label: "Dispatch time" },
  { value: 100, suffix: "%", label: "RoHS compliant" },
  { value: 3, suffix: "", label: "Device categories" },
];

const testimonials = [
  "Fits in my laptop sleeve and makes cafe work feel less risky.",
  "The snap is addictive. I keep it on my desk now.",
  "Simple, light, and useful every day.",
];

const faq = [
  [
    "What is KOFENOT?",
    "A pocket-flat laptop wedge that lifts the rear hinge to help deflect spills and improve the viewing angle.",
  ],
  [
    "Does it use magnets or adhesive?",
    "No. KOFENOT is a mechanical wedge with zero magnets, clips, or adhesives.",
  ],
  [
    "What devices does it support?",
    "It is designed for laptops and can also support phones and tablets for quick desk setup.",
  ],
  ["How much is the retail unit?", "Retail Price: $15 for one KOFENOT in hanging pack."],
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const duration = 1200;
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
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
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const openCheckout = () => {
    window.location.href = retailCheckoutUrl;
  };

  return (
    <main className="page-shell">
      <section ref={heroRef} className="page-hero min-h-[100svh]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img
            src={corp}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 mx-auto min-h-[calc(100svh-4rem)] max-w-[1480px] px-6 pb-[170px] pt-7 lg:px-10">
          <Reveal delay={0.08}>
            <p className="mt-2 text-lg font-semibold italic uppercase tracking-[0.18em] text-white md:text-xl lg:ml-6">
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
            <div className="mt-10 flex flex-wrap gap-3 lg:ml-6">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group inline-flex h-10 w-fit items-center gap-4 rounded-lg bg-red-600 px-6 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(220,38,38,0.55)] transition hover:bg-red-500"
              >
                <Play className="h-7 w-7 shrink-0 fill-white text-white" />
                2-SEC SETUP
              </button>

              <a href="#pricing">
                <Button className="h-10 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                  Buy Now
                </Button>
              </a>
            </div>
          </Reveal>
        </div>

        <HeroStats />
      </section>

      <BenefitsSection />
      <HowItWorksSection />
      <ReviewsSection openCheckout={openCheckout} />
      <FaqSection />
      <PricingSection openCheckout={openCheckout} />
      <StatsSection />

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl bg-black p-2 neon-border">
          <video
            src={demoVideo}
            controls
            autoPlay
            playsInline
            className="w-full rounded-sm"
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}

function HeroStats() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 hidden lg:block">
      <Reveal delay={0.2}>
        <div className="grid min-h-[70px] grid-cols-4 border-t border-white/20 bg-black/10 backdrop-blur-sm">
          <HeroStat icon={<span className="text-4xl font-black neon-text">0</span>} title="Zero">
            Magnets, Clips, Adhesives
          </HeroStat>
          <HeroStat icon={<Feather className="h-7 w-7 stroke-[1.5]" />} title="1 OZ">
            Pocket-Flat-Folding
          </HeroStat>
          <HeroStat icon={<Trophy className="h-7 w-7 stroke-[1.5]" />} title="2 WINS">
            Spill Antidote / Better Posture
          </HeroStat>
          <HeroStat
            icon={<MonitorSmartphone className="h-7 w-7 stroke-[1.5]" />}
            title="3 DEVICES"
            last
          >
            Laptops / Phones / Tablets
          </HeroStat>
        </div>
      </Reveal>
    </div>
  );
}

function HeroStat({
  children,
  icon,
  title,
  last = false,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-7 px-8 ${
        last ? "" : "border-r border-white/20"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]">
        {icon}
      </div>
      <div>
        <div className="text-sm font-black uppercase text-white">{title}</div>
        <div className="mt-1 text-base leading-6 text-white/80">{children}</div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="page-section border-t border-[rgba(0,255,0,0.12)]">
      <Reveal>
        <p className="section-kicker">One Small Wedge.Endless Benefits</p>
        <h2 className="section-title">
          Why KOFENOT
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {benefits.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <article className="panel overflow-hidden rounded-sm">
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed">
                  <strong className="text-[color:var(--neon)]">
                    {item.label}:
                  </strong>{" "}
                  {item.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {devices.map((item, index) => (
          <Reveal key={item.caption} delay={index * 0.08}>
            <article className="panel overflow-hidden rounded-sm">
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.caption}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.caption}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="page-section border-t border-[rgba(0,255,0,0.12)] py-10">
      <Reveal>
        <h2 className="section-title">
          How It Works: <span className="neon-text">Open / Rest / Snap</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map(([number, title, description], index) => (
          <Reveal key={number} delay={index * 0.1}>
            <article className="panel relative h-full rounded-sm p-7">
              <div className="text-6xl font-black leading-none neon-text">
                {number}
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              <div className="absolute right-7 top-7 h-1 w-12 bg-[color:var(--neon)]" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection({ openCheckout }: { openCheckout: () => void }) {
  const [testimonialPlaying, setTestimonialPlaying] = useState(false);

  return (
    <section id="reviews" className="page-section border-t border-[rgba(0,255,0,0.12)] py-10">
      <Reveal>
        <h2 className="section-title">
          Reviews / <span className="neon-text">Testimonials</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-5 lg:grid-cols-[7fr_3fr]">
          <div className="overflow-hidden rounded-sm bg-black">
            {testimonialPlaying ? (
              <video
                src={testimonialVideo}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full object-cover"
              />
            ) : (
              <button
                type="button"
                onClick={() => setTestimonialPlaying(true)}
                className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                aria-label="Play testimonial video"
              >
                <img
                  src={testimonialPoster}
                  alt="KOFENOT testimonial video cover"
                  className="absolute inset-0 h-full w-full object-cover opacity-100 brightness-100 contrast-100 saturate-100"
                />
                <Play className="relative z-10 h-28 w-28 fill-red-600 text-red-600 md:h-36 md:w-36" />
              </button>
            )}
          </div>
          <aside className="panel flex flex-col justify-center rounded-sm p-6">
            <div className="text-2xl leading-none text-[color:var(--neon)]">
              ★★★★★
            </div>
            <p className="mt-3 text-lg font-black uppercase text-white">
              Tested by real users
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Watch 180 seconds
            </p>
            <div className="mt-5 space-y-3 border-y border-[rgba(0,255,0,0.18)] py-4">
              {testimonials.map((quote) => (
                <blockquote key={quote} className="text-sm font-semibold leading-snug text-white">
                  “{quote}”
                </blockquote>
              ))}
            </div>
            <Button
              onClick={openCheckout}
              className="mt-6 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]"
            >
              Buy Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="page-section-narrow border-t border-[rgba(0,255,0,0.12)] py-10">
      <h2 className="section-title">FAQ</h2>
      <div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">
        {faq.map(([question, answer]) => (
          <div key={question} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-lg font-black uppercase">{question}</h3>
            <p className="text-sm text-muted-foreground">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection({ openCheckout }: { openCheckout: () => void }) {
  return (
    <section id="pricing" className="page-section border-t border-[rgba(0,255,0,0.12)] py-10">
      <Reveal>
        <h2 className="section-title">
          Buy <span className="neon-text">KOFENOT</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Consumer retail page. Wholesale pricing lives on Wholesale.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-[.95fr_1.05fr]">
        <article className="neon-border neon-glow flex flex-col rounded-sm bg-[rgba(0,255,0,0.06)] p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Retail Price
          </div>
          <div className="mt-3 text-5xl font-black neon-text">$15</div>
          <p className="mt-3 text-sm">
            One KOFENOT™ laptop wedge in retail-ready hanging pack.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <PricingItem>1 oz flat-folding unit</PricingItem>
            <PricingItem>No magnets, clips, or adhesives</PricingItem>
            <PricingItem>Coffee-shop ready</PricingItem>
          </ul>
          <Button
            onClick={openCheckout}
            className="mt-7 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]"
          >
            Buy Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </article>

        <div className="panel overflow-hidden rounded-sm">
          <img
            src={giftBox}
            alt="KOFENOT retail packaging"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function PricingItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Check className="h-4 w-4 text-[color:var(--neon)]" />
      {children}
    </li>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-16 lg:px-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="panel rounded-sm p-6 text-center">
            <div className="text-3xl font-black neon-text md:text-4xl">
              <CountUp value={item.value} />
              {item.suffix}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
              {item.label}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
