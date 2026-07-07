import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Feather,
  MonitorSmartphone,
  Play,
  Trophy,
  ShoppingBag,
  Store,
  BriefcaseBusiness,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Global Assets
import corp from "@/assets/kofenot-corp.jpeg";
import deadSpill from "@/assets/dead-spill.jpg";
import demoVideo from "@/assets/kofeenot-demo.mp4";
import testimonialPoster from "@/assets/kofenot-testimonials.jpg";
import testimonialVideo from "@/assets/kofenot-testimonials.mp4";
import fidget from "@/assets/kofeenot-fidget.jpg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import neck from "@/assets/kofeenot-neck.jpg";
import safeSpill from "@/assets/safe-spill.jpeg";
import threeDevices from "@/assets/kofenot-3-devices.jpg";

// Integrated Sub-Route Assets
import coffeeShopDisplay from "@/assets/coffee-shop.jpg";
import coffeeShopHero from "@/assets/kofenot-coffee-shop.jpeg";
import wholesalePack from "@/assets/kofenot-wholesale-pack.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";

export const Route = createFileRoute("/")({ component: Home });

const retailCheckoutUrl = "https://buy.stripe.com/fZu7sKfz0gcQ7wk6BSdUY0E";
const twoUnitCheckoutUrl = "https://buy.stripe.com/eVq00i3Qi9Os9EsbWcdUY0M";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const layout = {
  section: "border-t border-[rgba(0,255,0,0.12)] py-20",
  sectionLast: "pb-20 pt-8",
  standard: "mx-auto max-w-[1320px] px-6 lg:px-8",
  wide: "mx-auto max-w-[1760px] px-6 lg:px-8",
  narrow: "mx-auto max-w-[980px] px-6 lg:px-8",
  content: "mt-12",
};

const text = {
  eyebrow: "section-kicker text-xs uppercase tracking-[0.2em] text-[color:var(--neon)] font-bold mb-2 block",
  title: "section-title text-3xl font-black italic uppercase tracking-tight sm:text-4xl md:text-5xl",
  body: "text-sm text-muted-foreground",
};

const benefitModes = [
  {
    image: deadSpill,
    title: "Coffee",
    body: "60% of laptop damage starts with a spilled drink. Coffee leads the list.",
    tileClass: "lg:mt-10",
  },
  {
    image: safeSpill,
    title: "Golden minute",
    body: "KOFENOT™ creates an escape angle that helps redirect spills away from the critical components beneath the keyboard.",
    tileClass: "lg:mt-16",
  },
  {
    image: neck,
    title: "Tilt laptop, not neck",
    body: "Lifting the screen and tilting it back reduces tech-neck strain.",
    tileClass: "lg:mt-44",
  },
  {
    image: threeDevices,
    title: "Flips to hold 3 devices",
    body: "Quietly turns coffee shops, airports, and gyms into your office.",
    tileClass: "lg:mt-24",
  },
  {
    image: fidget,
    title: "Snap. Shut. Repeat.",
    body: "KOFENOT™'s satisfying snap keeps restless fingers busy.",
    tileClass: "lg:mt-40",
  },
];

const howItWorksSteps = [
  ["01", "Open Laptop All the Way", "Feel for the rear hinge."],
  ["02", "Rest Rear Hinge on Wedge", "Works with open-trench hinges. Flip wedge for closed-angle hinges."],
  ["03", "Snap Shut", "A satisfying mechanical click users keep repeating."],
];

export function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [wholesaleSent, setWholesaleSent] = useState(false);
  const [customSent, setCustomSent] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="page-shell bg-black text-white min-h-screen selection:bg-[color:var(--neon)] selection:text-black">
      {/* Global Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,255,0,0.12)] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1760px] items-center justify-between px-6 h-16">
          <span 
            className="font-black tracking-tighter text-xl italic cursor-pointer text-white" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            KOFENOT<span className="text-[color:var(--neon)]">™</span>
          </span>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection("benefits")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Product</button>
            <button onClick={() => scrollToSection("pricing")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Buy Now</button>
            <button onClick={() => scrollToSection("wholesale-section")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Cafes</button>
            <button onClick={() => scrollToSection("custom-section")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Corporate</button>
          </div>
        </div>
      </nav>

      {/* Hero Block */}
      <section className="relative min-h-[90svh] flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden="true">
          <img src={coffeeShopHero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon)] font-black">HIGH-IMPACT MOBILITY SOLUTIONS</span>
            <h1 className="mt-4 text-5xl font-black italic leading-[0.9] tracking-tight neon-text sm:text-7xl md:text-8xl lg:text-9xl uppercase">
              MAKE YOUR LAPTOP<br />COFFEE SHOP-FRIENDLY
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-medium tracking-wide text-white/70 md:text-base leading-relaxed">
              An ultra-light structural wedge engineered to elevate mobile workspaces, correct typing ergonomics, and safeguard logic boards from critical liquid hazards.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button onClick={() => scrollToSection("pricing")} className="h-12 bg-[color:var(--neon)] px-10 font-black text-black hover:bg-[color:var(--neon-dim)] rounded-none uppercase tracking-wider">
                Get KOFENOT™ Now
              </Button>
              <button onClick={() => setVideoOpen(true)} className="group inline-flex h-12 items-center gap-4 bg-red-600 px-6 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] transition hover:bg-red-500 rounded-none">
                <Play className="h-4 w-4 fill-white text-white" /> Watch Spec Video
              </button>
            </div>
          </Reveal>
        </div>
        <HeroStats />
      </section>

      {/* Core Product Benefits */}
      <section id="benefits" className={cx("relative overflow-hidden pb-12 pt-16", layout.wide)}>
        <SectionHeader eyebrow="Minimal Footprint. Ultimate Security." title="Engineered Workspace Defense" />
        <div className={cx(layout.content, "relative z-10 grid gap-4 md:grid-cols-2 lg:min-h-[620px] lg:grid-cols-[25fr_17fr_16fr_20fr_17fr] lg:items-start")}>
          {benefitModes.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05} className={card.tileClass}>
              <article className="group flex h-full flex-col overflow-hidden bg-black border border-white/5 transition duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden bg-black">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
                  <h3 className={cx("font-black italic leading-none text-white", index === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl")}>{card.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-white/70">{card.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deployment Protocol */}
      <section id="how-it-works" className={cx(layout.section, layout.standard)}>
        <SectionHeader title={<>DEPLOYMENT IN <span className="neon-text">TWO SECONDS</span></>} />
        <div className={cx(layout.content, "grid gap-5 md:grid-cols-3")}>
          {howItWorksSteps.map(([number, title, description], i) => (
            <Reveal key={number} delay={i * 0.1}>
              <article className="panel relative h-full rounded-none p-6 border border-white/10 bg-black/50">
                <div className="text-5xl font-black leading-none neon-text">{number}</div>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">{title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
                <div className="absolute right-6 top-6 h-1 w-10 bg-[color:var(--neon)]" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Direct Stripe Consumer Pricing Matrix */}
      <section id="pricing" className={cx(layout.section, layout.standard)}>
        <SectionHeader title={<>SELECT YOUR <span className="neon-text">DEPLOYMENT KIT</span></>} body="Stripe Encryption Shielded. Domestic US batches depart California nodes daily." />
        <div className={cx(layout.content, "grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr]")}>
          <article className="neon-border neon-glow flex flex-col justify-between bg-[rgba(0,255,0,0.03)] p-6 min-h-[340px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Single Run Pack</div>
              <div className="mt-3 text-4xl font-black neon-text">$15</div>
              <p className="mt-3 text-xs leading-relaxed text-white/90">One KOFENOT™ laptop wedge in single retail presentation box.</p>
              <ul className="mt-5 space-y-2 text-xs text-white/70">
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Free shipping inside the US</li>
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> In Stock. Ships from California node</li>
              </ul>
            </div>
            <Button onClick={() => window.location.href = retailCheckoutUrl} className="mt-8 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-wider">
              Buy 1 Unit Box
            </Button>
          </article>

          <article className="neon-border neon-glow flex flex-col justify-between bg-[rgba(0,255,0,0.03)] p-6 min-h-[340px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Dual Station Run</div>
              <div className="mt-3 text-4xl font-black neon-text">$25</div>
              <p className="mt-3 text-xs leading-relaxed text-white/90">Two KOFENOT™ laptop wedges in separate retail packing sets.</p>
              <ul className="mt-5 space-y-2 text-xs text-white/70">
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Free shipping inside the US</li>
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Save $5 on individual kit pricing</li>
              </ul>
            </div>
            <Button onClick={() => window.location.href = twoUnitCheckoutUrl} className="mt-8 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-wider">
              Buy 2 Units Combo
            </Button>
          </article>

          <div className="border border-white/10 bg-black overflow-hidden"><img src={giftBox} alt="" className="h-full min-h-[320px] w-full object-cover" /></div>
        </div>
      </section>

      {/* Commercial Wholesale Segment Layout */}
      <section id="wholesale-section" className={cx(layout.section, layout.standard)}>
        <SectionHeader eyebrow="Commercial Volume Distribution" title="CAFÉ RETAIL & COUNTER SELECTION" body="Position high-margin, ultra-tactile workspace solutions right beside point-of-sale layout logs." />
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={coffeeShopDisplay} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Point of Purchase</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Sits clean beside cash lanes. Tiny square-inch space profile for high conversion.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={wholesalePack} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Pre-Packed Batches</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Shipped completely flat in grouped quantities with bulk pricing parameters.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={fidget} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">The Tactile Click</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">The mechanical hinge click prompts quick interaction directly at the counter.</p>
            </div>
          </article>
        </div>

        <div className="mt-12 max-w-3xl mx-auto border border-[rgba(0,255,0,0.15)] bg-[rgba(0,255,0,0.02)] p-8">
          <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2">Request Commercial Counter Sheets</h3>
          {wholesaleSent ? (
            <div className="text-center py-6 border border-dashed border-[color:var(--neon)] text-[color:var(--neon)] font-bold uppercase">✓ Transmitted. Pricing Sheet departing in 12 hours.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setWholesaleSent(true); }} className="space-y-4">
              <input required type="text" placeholder="Cafe / Establishment Corporate Entity Name" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Procurement Agent Email Address" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
                <select className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11">
                  <option>Initial Run (50 Display Units)</option>
                  <option>Multi-Location Franchise Volume Run</option>
                </select>
              </div>
              <Button type="submit" className="w-full h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest text-xs rounded-none">Get Counter Specifications</Button>
            </form>
          )}
        </div>
      </section>

      {/* Corporate Gifting Custom Segment Layout */}
      <section id="custom-section" className={cx(layout.section, layout.standard)}>
        <SectionHeader eyebrow="B2B Premium Custom Procurement" title="CO-BRANDING & CORPORATE LOGISTICS" body="Laser stamp company identities directly into high-durability anodized alloy wedges." />
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={brand} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Precision Profiling</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Crisp, permanent laser styling for high-definition branding execution across all surfaces.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={corpGift} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Onboarding Bundles</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Integrates with high-end corporate welcome boxes and mobile developer loadouts.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={expo} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Conventions & Summits</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">A high-utility tech asset that breaks through standard trade show promotional noise.</p>
            </div>
          </article>
        </div>

        <div className="mt-12 max-w-3xl mx-auto border border-[rgba(0,255,0,0.15)] bg-[rgba(0,255,0,0.02)] p-8">
          <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2">Request Enterprise Branding Manifest</h3>
          {customSent ? (
            <div className="text-center py-6 border border-dashed border-[color:var(--neon)] text-[color:var(--neon)] font-bold uppercase">✓ Blueprint Request Authenticated. Manifest dispatches inside 12 hours.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setCustomSent(true); }} className="space-y-4">
              <input required type="text" placeholder="Organization Identity / Enterprise Domain Name" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Corporate Procurement Email" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
                <select className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11">
                  <option>Logo Customization Run (250+ units)</option>
                  <option>Full Scale Enterprise Asset Deployment</option>
                </select>
              </div>
              <textarea rows={2} placeholder="Detail unique technical or custom corporate laser stamping directives..." className="w-full bg-black border border-white/20 p-4 text-xs text-white focus:outline-none focus:border-[color:var(--neon)]" />
              <Button type="submit" className="w-full h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest text-xs rounded-none">Request Custom Mockup Manifest</Button>
            </form>
          )}
        </div>
      </section>

      {/* Global Product FAQ Panel */}
      <section id="faq" className={cx(layout.sectionLast, layout.narrow)}>
        <SectionHeader title="FAQ" />
        <div className={cx(layout.content, "divide-y divide-[rgba(0,255,0,0.12)] border-y border-[rgba(0,255,0,0.12)]")}>
          <div className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">What is KOFENOT?</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">A pocket-flat laptop wedge that lists the rear hinge up to deflect liquid accidents and improve tracking posture.</p>
          </div>
          <div className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">Does it use adhesive tape or clips?</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">No. KOFENOT is an unattached mechanical utility wedge. Zero adhesive lines, zero magnets, zero friction damage to laptop housings.</p>
          </div>
          <div className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">What environments support its deployment?</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">Engineered for active coffee shops, tight commercial airlines, tech conventions, and workspace counters globally.</p>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl bg-black p-2 neon-border rounded-none">
          <video src={demoVideo} controls autoPlay playsInline preload="metadata" className="w-full" />
        </DialogContent>
      </Dialog>
    </main>
  );
}

/* Reusable Components */
function SectionHeader({ eyebrow, title, body }: { eyebrow?: string; title: React.ReactNode; body?: string }) {
  return (
    <Reveal>
      <div>
        {eyebrow && <span className={text.eyebrow}>{eyebrow}</span>}
        <h2 className={text.title}>{title}</h2>
        {body && <p className="mt-3 text-muted-foreground text-xs max-w-2xl leading-relaxed">{body}</p>}
      </div>
    </Reveal>
  );
}

function HeroStats() {
  return (
    <div className="absolute inset-x-0 bottom-10 z-20 hidden lg:block mx-auto max-w-[1760px]">
      <Reveal delay={0.1}>
        <div className="grid min-h-[70px] grid-cols-4 border-t border-white/20 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center gap-6 px-8 py-4 border-r border-white/20">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-xs font-bold text-[color:var(--neon)]">0</div>
            <div>
              <div className="text-xs font-black uppercase">Zero Complications</div>
              <div className="text-xs text-white/70 mt-0.5">No magnets, sticky adhesives, or metal clips.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 px-8 py-4 border-r border-white/20">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-[color:var(--neon)]"><Feather className="h-4 w-4" /></div>
            <div>
              <div className="text-xs font-black uppercase">1 Ounce Profile</div>
              <div className="text-xs text-white/70 mt-0.5">Ultralight tactical footprint folds totally pocket-flat.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 px-8 py-4 border-r border-white/20">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-[color:var(--neon)]"><Trophy className="h-4 w-4" /></div>
            <div>
              <div className="text-xs font-black uppercase">Dual Protection</div>
              <div className="text-xs text-white/70 mt-0.5">Instant path fluid diversion and workspace spinal relief.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 px-8 py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-[color:var(--neon)]"><MonitorSmartphone className="h-4 w-4" /></div>
            <div>
              <div className="text-xs font-black uppercase">Triple Platform</div>
              <div className="text-xs text-white/70 mt-0.5">Perfect balance controls for laptops, tablets, and phones.</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={cx("relative pointer-events-auto h-full w-full", className)}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}
