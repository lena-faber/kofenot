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
  section: "border-t border-[rgba(0,255,0,0.12)] py-24",
  standard: "mx-auto max-w-[1320px] px-6 lg:px-8",
  wide: "mx-auto max-w-[1760px] px-6 lg:px-8",
  narrow: "mx-auto max-w-[980px] px-6 lg:px-8",
  content: "mt-16",
};

export function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [wholesaleSent, setWholesaleSent] = useState(false);
  const [customSent, setCustomSent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="page-shell bg-black text-white min-h-screen selection:bg-[color:var(--neon)] selection:text-black">
      {/* Universal Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,255,0,0.12)] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1760px] items-center justify-between px-6 h-16">
          <span 
            className="font-black tracking-tighter text-xl italic cursor-pointer text-white" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            KOFENOT<span className="text-[color:var(--neon)]">™</span>
          </span>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection("what-is-it")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">What is it</button>
            <button onClick={() => scrollToSection("benefits")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Features</button>
            <button onClick={() => scrollToSection("pricing")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Buy Now</button>
            <button onClick={() => scrollToSection("wholesale-section")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Wholesale</button>
            <button onClick={() => scrollToSection("custom-section")} className="text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition">Corporate</button>
          </div>
        </div>
      </nav>

      {/* 1. HERO HERO SECTION: High-Impact Hook */}
      <section className="relative min-h-[95svh] flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden="true">
          <img src={coffeeShopHero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon)] font-black">THE ULTIMATE CAFE WORKSPACE DEFENSE</span>
          <h1 className="mt-4 text-5xl font-black italic leading-[0.9] tracking-tight neon-text sm:text-7xl md:text-8xl lg:text-9xl uppercase">
            MAKE YOUR LAPTOP<br />COFFEE SHOP-FRIENDLY
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium tracking-wide text-white/70 md:text-base leading-relaxed">
            Stop risking your logic board every time you work remote. KOFENOT™ is the pocket-flat mechanical wedge that slips under your device to deflect liquid disasters and instantly save your spine.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button onClick={() => scrollToSection("pricing")} className="h-12 bg-[color:var(--neon)] px-10 font-black text-black hover:bg-[color:var(--neon-dim)] rounded-none uppercase tracking-wider text-xs">
              Buy KOFENOT™ Now
            </Button>
            <button onClick={() => setVideoOpen(true)} className="group inline-flex h-12 items-center gap-4 bg-red-600 px-6 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] transition hover:bg-red-500 rounded-none">
              <Play className="h-4 w-4 fill-white text-white" /> See Spill Protection
            </button>
          </div>
        </div>

        {/* Hero Quick Stats */}
        <div className="absolute inset-x-0 bottom-10 z-20 hidden lg:block mx-auto max-w-[1760px]">
          <div className="grid min-h-[70px] grid-cols-4 border-t border-white/20 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 px-8 py-4 border-r border-white/20">
              <div className="text-xs font-bold text-[color:var(--neon)] border border-[color:var(--neon)] rounded-full h-8 w-8 flex items-center justify-center shrink-0">0</div>
              <div>
                <div className="text-xs font-black uppercase">Zero Mess</div>
                <div className="text-xs text-white/60">No sticky tapes or permanent magnets.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-8 py-4 border-r border-white/20">
              <Feather className="h-5 w-5 text-[color:var(--neon)] shrink-0" />
              <div>
                <div className="text-xs font-black uppercase">1 Ounce</div>
                <div className="text-xs text-white/60">Ultralight hardware folds entirely flat.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-8 py-4 border-r border-white/20">
              <Trophy className="h-5 w-5 text-[color:var(--neon)] shrink-0" />
              <div>
                <div className="text-xs font-black uppercase">Dual Utility</div>
                <div className="text-xs text-white/60">Fluid deflection + ergonomic relief.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-8 py-4">
              <MonitorSmartphone className="h-5 w-5 text-[color:var(--neon)] shrink-0" />
              <div>
                <div className="text-xs font-black uppercase">3 Devices</div>
                <div className="text-xs text-white/60">Flips to support phones and tablets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE EXPLANATION SECTION: What the hell is KOFENOT? */}
      <section id="what-is-it" className={cx(layout.section, layout.standard)}>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)] font-bold block mb-2">The Solution</span>
            <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">WHAT THE HELL IS KOFENOT™?</h2>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              It is not a bulky plastic laptop stand. It is a precision-engineered, ultra-streamlined **laptop wedge** that sits directly under your computer's rear hinge. 
            </p>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              By pitching your laptop forward at an exact ergonomic angle, it changes the trajectory of liquid spills. If a drink gets knocked over, the fluid hits the wedge gradient and gets routed *away* from your machine's vents and logic board components instead of pooling right into your keyboard core.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 p-4 bg-white/5">
                <div className="text-lg font-black uppercase text-[color:var(--neon)]">Ergonomic Elevation</div>
                <div className="text-xs text-white/50 mt-1">Tilts your keyboard to relax your wrists and keep your neck straight.</div>
              </div>
              <div className="border border-white/10 p-4 bg-white/5">
                <div className="text-lg font-black uppercase text-[color:var(--neon)]">The Mechanical Fidget</div>
                <div className="text-xs text-white/50 mt-1">Equipped with a built-in tactile snap closure users use to occupy restless hands.</div>
              </div>
            </div>
          </div>
          <div className="border border-white/10 bg-black/40 overflow-hidden">
            <img src={corp} alt="KOFENOT product display" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* 3. VISUAL VISUAL BENEFITS SECTION: The Core Value Layout */}
      <section id="benefits" className={cx("border-t border-[rgba(0,255,0,0.12)] pb-12 pt-24", layout.wide)}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)] font-bold block">Engineered Workspace Defense</span>
          <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">WHAT IT DOES FOR YOUR HARDWARE</h2>
        </div>
        <div className="relative z-10 grid gap-4 md:grid-cols-2 lg:min-h-[620px] lg:grid-cols-[25fr_17fr_16fr_20fr_17fr] lg:items-start">
          <article className="group flex h-full flex-col overflow-hidden bg-black border border-white/5 transition duration-300 hover:-translate-y-2 lg:mt-10">
            <div className="aspect-square overflow-hidden bg-black"><img src={deadSpill} alt="Spill risk" className="h-full w-full object-cover" /></div>
            <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
              <h3 className="font-black italic leading-none text-white text-3xl">Coffee Danger</h3>
              <p className="mt-3 text-xs font-medium leading-relaxed text-white/70">60% of liquid laptop damage starts with a spilled drink. Coffee leads the hazard charts.</p>
            </div>
          </article>

          <article className="group flex h-full flex-col overflow-hidden bg-black border border-white/5 transition duration-300 hover:-translate-y-2 lg:mt-16">
            <div className="aspect-square overflow-hidden bg-black"><img src={safeSpill} alt="Spill deflection" className="h-full w-full object-cover" /></div>
            <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
              <h3 className="font-black italic leading-none text-white text-2xl">Golden Minute</h3>
              <p className="mt-3 text-xs font-medium leading-relaxed text-white/70">Creates an instant escape angle to keep spills away from critical motherboards.</p>
            </div>
          </article>

          <article className="group flex h-full flex-col overflow-hidden bg-black border border-white/5 transition duration-300 hover:-translate-y-2 lg:mt-44">
            <div className="aspect-square overflow-hidden bg-black"><img src={neck} alt="Ergonomic viewing posture" className="h-full w-full object-cover" /></div>
            <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
              <h3 className="font-black italic leading-none text-white text-2xl">Tilt Laptop</h3>
              <p className="mt-3 text-xs font-medium leading-relaxed text-white/70">Lifts your sightlines to permanently banish tech-neck slouching strain.</p>
            </div>
          </article>

          <article className="group flex h-full flex-col overflow-hidden bg-black border border-white/5 transition duration-300 hover:-translate-y-2 lg:mt-24">
            <div className="aspect-square overflow-hidden bg-black"><img src={threeDevices} alt="Triple device support configuration" className="h-full w-full object-cover" /></div>
            <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
              <h3 className="font-black italic leading-none text-white text-2xl">3 Devices</h3>
              <p className="mt-3 text-xs font-medium leading-relaxed text-white/70">Flips over dynamically to hold phones, tablets, or notebooks seamlessly.</p>
            </div>
          </article>

          <article className="group flex h-full flex-col overflow-hidden bg-black border border-white/5 transition duration-300 hover:-translate-y-2 lg:mt-40">
            <div className="aspect-square overflow-hidden bg-black"><img src={fidget} alt="Mechanical snap action close up" className="h-full w-full object-cover" /></div>
            <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
              <h3 className="font-black italic leading-none text-white text-2xl">Fidget Snap</h3>
              <p className="mt-3 text-xs font-medium leading-relaxed text-white/70">Satisfying mechanical closure clicks shut to give restless fingers something to track.</p>
            </div>
          </article>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION: 2-Second Steps */}
      <section id="how-it-works" className={cx(layout.section, layout.standard)}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">DEPLOYMENT IN <span className="neon-text">TWO SECONDS</span></h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="panel relative h-full rounded-none p-6 border border-white/10 bg-black/50">
            <div className="text-5xl font-black leading-none neon-text">01</div>
            <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">Open Laptop</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">Open your device all the way up and position the rear structural hinge.</p>
            <div className="absolute right-6 top-6 h-1 w-10 bg-[color:var(--neon)]" />
          </article>
          <article className="panel relative h-full rounded-none p-6 border border-white/10 bg-black/50">
            <div className="text-5xl font-black leading-none neon-text">02</div>
            <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">Rest on Wedge</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">Slide the wedge underneath the hinge core. Flip it depending on your track type.</p>
            <div className="absolute right-6 top-6 h-1 w-10 bg-[color:var(--neon)]" />
          </article>
          <article className="panel relative h-full rounded-none p-6 border border-white/10 bg-black/50">
            <div className="text-5xl font-black leading-none neon-text">03</div>
            <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">Snap Shut</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">Pack up instantly with a crisp mechanical snap you will keep repeating.</p>
            <div className="absolute right-6 top-6 h-1 w-10 bg-[color:var(--neon)]" />
          </article>
        </div>
      </section>

      {/* 5. VERDICTS VIDEO SECTION: Field Proof */}
      <section id="reviews" className={cx(layout.section, layout.standard)}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">FIELD TESTING & <span className="neon-text">USER VERDICTS</span></h2>
        </div>
        <div className="mx-auto max-w-[980px]">
          <div className="relative border border-white/10">
            <video ref={videoRef} src={`${testimonialVideo}#t=0.1`} poster={testimonialPoster} controls={isPlaying} preload="auto" playsInline className="block w-full" />
            {!isPlaying && (
              <button onClick={() => { videoRef.current?.play(); setIsPlaying(true); }} className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play className="h-16 w-16 fill-red-600 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,.6)]" strokeWidth={0} />
              </button>
            )}
          </div>
          <div className="mt-8 text-center">
            <div className="grid gap-3 sm:grid-cols-4">
              <blockquote className="border border-[rgba(0,255,0,0.12)] bg-black/40 p-4 text-xs font-semibold tracking-wide">“Why doesn't Apple include this?”</blockquote>
              <blockquote className="border border-[rgba(0,255,0,0.12)] bg-black/40 p-4 text-xs font-semibold tracking-wide">“I immediately bought one.”</blockquote>
              <blockquote className="border border-[rgba(0,255,0,0.12)] bg-black/40 p-4 text-xs font-semibold tracking-wide">“This is complete genius.”</blockquote>
              <blockquote className="border border-[rgba(0,255,0,0.12)] bg-black/40 p-4 text-xs font-semibold tracking-wide">“Never seen anything like this.”</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRIMARY DIRECT PAYMENTS: Consumer Purchase Matrix */}
      <section id="pricing" className={cx(layout.section, layout.standard)}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">SECURE YOUR <span className="neon-text">KOFENOT™ UNIT</span></h2>
          <p className="mt-3 text-muted-foreground text-xs leading-relaxed">Stripe Secure Encryption. All orders ship directly from our California logistics warehouse node daily.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr] mt-8">
          <article className="neon-border neon-glow flex flex-col justify-between bg-[rgba(0,255,0,0.03)] p-6 min-h-[340px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Single Deployment Pack</div>
              <div className="mt-3 text-4xl font-black neon-text">$15</div>
              <p className="mt-3 text-xs leading-relaxed text-white/90">One KOFENOT™ laptop wedge shipped inside a protective retail box.</p>
              <ul className="mt-5 space-y-2 text-xs text-white/70">
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Free shipping across the US</li>
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Ships out from California inside 24 hours</li>
              </ul>
            </div>
            <Button onClick={() => window.location.href = retailCheckoutUrl} className="mt-8 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-wider text-xs">
              Buy 1 Retail Box
            </Button>
          </article>

          <article className="neon-border neon-glow flex flex-col justify-between bg-[rgba(0,255,0,0.03)] p-6 min-h-[340px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Dual Pack Station Set</div>
              <div className="mt-3 text-4xl font-black neon-text">$25</div>
              <p className="mt-3 text-xs leading-relaxed text-white/90">Two KOFENOT™ laptop wedges in independent consumer package boxes.</p>
              <ul className="mt-5 space-y-2 text-xs text-white/70">
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Free domestic shipping included</li>
                <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" /> Save $5 instantly on the bundle set</li>
              </ul>
            </div>
            <Button onClick={() => window.location.href = twoUnitCheckoutUrl} className="mt-8 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-wider text-xs">
              Buy 2 Boxes Combo
            </Button>
          </article>

          <div className="border border-white/10 bg-black overflow-hidden">
            <img src={giftBox} alt="KOFENOT individual gift box packaging" className="h-full min-h-[320px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 7. COMMERCIAL WHOLESALE SECTOR: Café Display Bundles */}
      <section id="wholesale-section" className={cx(layout.section, layout.standard)}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)] font-bold block">Bulk Café Distribution</span>
          <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">WHOLESALE COUNTER KITS</h2>
          <p className="mt-3 text-muted-foreground text-xs">High-margin point-of-sale setups engineered for roasters, coffee shops, and independent retail lanes.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={coffeeShopDisplay} alt="KOFENOT sitting on coffee shop countertop" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Point of Sale Placement</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Sits clean right next to your register terminal. Minimal counter footprint with maximal organic customer conversions.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={wholesalePack} alt="KOFENOT master wholesale shipping packs" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Pre-Packed Display Cases</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Shipped completely flat in grouped wholesale bundles with aggressive merchant retail margins built-in.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={fidget} alt="Satisfying click closure action" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Tactile Click Conversion</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">The built-in structural hinge snap naturally prompts interaction while customers wait for drinks at checkout.</p>
            </div>
          </article>
        </div>

        <div className="mt-12 max-w-3xl mx-auto border border-[rgba(0,255,0,0.15)] bg-[rgba(0,255,0,0.02)] p-8">
          <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2">Acquire Commercial Counter Sheets</h3>
          {wholesaleSent ? (
            <div className="text-center py-6 border border-dashed border-[color:var(--neon)] text-[color:var(--neon)] font-bold uppercase text-sm">✓ Sheet Transmitted. Deployment parameters departing in 12 hours.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setWholesaleSent(true); }} className="space-y-4">
              <input required type="text" placeholder="Cafe Entity / Establishment Name" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Procurement Agent Contact Email" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
                <select className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11">
                  <option>Initial Run (50 Display Units)</option>
                  <option>Multi-Location Franchise Group Run</option>
                </select>
              </div>
              <Button type="submit" className="w-full h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest text-xs rounded-none">Download Wholesale Sheet</Button>
            </form>
          )}
        </div>
      </section>

      {/* 8. CORPORATE CUSTOM SECTOR: Enterprise Custom Orders */}
      <section id="custom-section" className={cx(layout.section, layout.standard)}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)] font-bold block">Premium Enterprise Branding</span>
          <h2 className="text-4xl font-black italic uppercase tracking-tight sm:text-5xl">CUSTOM ENGRAVING & GIFTING</h2>
          <p className="mt-3 text-muted-foreground text-xs">Laser stamp corporate branding, logos, and emblems directly onto anodized alloy structural hardware components.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={brand} alt="Laser engraved customized branding close up" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Precision Co-Branding</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">High-definition permanent fiber laser engraving keeps corporate identities clean and razor-sharp on the wedge face.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={corpGift} alt="Corporate custom onboarding corporate gift box" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Onboarding Packs</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Integrates directly into elite internal employee welcome cases, wellness frameworks, and remote hardware boxes.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-black/40 overflow-hidden rounded-none">
            <div className="aspect-video overflow-hidden"><img src={expo} alt="Exhibition trade show promotional table display layout" className="w-full h-full object-cover" /></div>
            <div className="p-6">
              <h3 className="text-lg font-black uppercase tracking-wider">Summit & Expo Assets</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">A high-utility, conversation-starting custom item that breaks cleanly through standard tech trade show junk.</p>
            </div>
          </article>
        </div>

        <div className="mt-12 max-w-3xl mx-auto border border-[rgba(0,255,0,0.15)] bg-[rgba(0,255,0,0.02)] p-8">
          <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2">Request Enterprise Customs Manifest</h3>
          {customSent ? (
            <div className="text-center py-6 border border-dashed border-[color:var(--neon)] text-[color:var(--neon)] font-bold uppercase text-sm">✓ Request Authenticated. Mockup specs departing within 12 hours.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setCustomSent(true); }} className="space-y-4">
              <input required type="text" placeholder="Organization / Corporate Domain Name" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Corporate Procurement Officer Email" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11" />
                <select className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] h-11">
                  <option>Logo Stamping Custom Run (250+ units)</option>
                  <option>Full Distribution Enterprise Hardware Allocation</option>
                </select>
              </div>
              <textarea rows={2} placeholder="Detail any unique branding directives or laser marking layouts..." className="w-full bg-black border border-white/20 p-4 text-xs text-white focus:outline-none focus:border-[color:var(--neon)]" />
              <Button type="submit" className="w-full h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest text-xs rounded-none">Get Custom Sample Mockups</Button>
            </form>
          )}
        </div>
      </section>

      {/* 9. GLOBAL PANEL FAQ */}
      <section id="faq" className={cx("pb-20 pt-8", layout.narrow)}>
        <div className="text-left mb-6">
          <h2 className="text-3xl font-black italic uppercase tracking-tight">FAQ</h2>
        </div>
        <div className="divide-y divide-[rgba(0,255,0,0.12)] border-y border-[rgba(0,255,0,0.12)]">
          <div className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">What is KOFENOT?</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">A pocket-flat hardware utility wedge that positions the rear laptop hinge upwards to help slide fluid spills away from keys and realign optical typing mechanics.</p>
          </div>
          <div className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">Does it use tape or glue components?</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">No. KOFENOT is a clean, free-sitting mechanical wedge utility. No permanent glues, stick pads, or magnets that warp delicate component internals.</p>
          </div>
          <div className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">Where does this ship from?</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">All batches are processed, packed, and fulfilled directly from distribution nodes out of California.</p>
          </div>
        </div>
      </section>

      {/* Video Lightbox Player */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl bg-black p-2 neon-border rounded-none">
          <video src={demoVideo} controls autoPlay playsInline preload="metadata" className="w-full" />
        </DialogContent>
      </Dialog>
    </main>
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
