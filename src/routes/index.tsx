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
  Building2,
  ShoppingBag,
  Store,
  Coffee,
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

type BenefitCard = {
  image: string;
  mode: string;
  title: string;
  body: string;
  tileClass: string;
};

type PurchaseOption = {
  eyebrow: string;
  price: string;
  title: string;
  items: string[];
  url: string;
};

const benefitModes: BenefitCard[] = [
  {
    image: deadSpill,
    mode: "Spill deflection",
    title: "Coffee",
    body: "60% of laptop damage starts with a spilled drink. Coffee leads the list.",
    tileClass: "lg:mt-10",
  },
  {
    image: safeSpill,
    mode: "Save your laptop",
    title: "Golden minute",
    body: "KOFENOT™ creates an escape angle that helps redirect spills away from the critical components beneath the keyboard.",
    tileClass: "lg:mt-16",
  },
  {
    image: neck,
    mode: "Better posture",
    title: "Tilt laptop, not neck",
    body: "Lifting the screen and tilting it back reduces tech-neck strain.",
    tileClass: "lg:mt-44",
  },
  {
    image: threeDevices,
    mode: "Stand",
    title: "Flips to hold 3 devices",
    body: "Quietly turns coffee shops, airports, and gyms into your office.",
    tileClass: "lg:mt-24",
  },
  {
    image: fidget,
    mode: "Fidget",
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

const testimonials = [
  "Why doesn't Apple include this?",
  "I immediately bought one.",
  "This is genius.",
  "I've never seen anything like this.",
];

const faq = [
  ["What is KOFENOT?", "A pocket-flat laptop wedge that lifts the rear hinge to help deflect spills and improve the viewing angle."],
  ["Does it use magnets or adhesive?", "No. KOFENOT is a mechanical wedge with zero magnets, clips, or adhesives."],
  ["What devices does it support?", "It is designed for laptops and can also support phones and tablets for quick desk setup."],
  ["How much is the retail unit?", "Retail Price: $15 for one KOFENOT in hanging pack."],
];

const purchaseOptions: PurchaseOption[] = [
  {
    eyebrow: "1 unit in Retail Box",
    price: "$15",
    title: "One KOFENOT™ laptop wedge in retail box.",
    items: ["free shipping in the US", "In Stock. Ships from California", "3-5 business days"],
    url: retailCheckoutUrl,
  },
  {
    eyebrow: "2 units in Retail Box",
    price: "$25",
    title: "Two KOFENOT™ laptop wedges in retail box.",
    items: ["free shipping in the US", "In Stock. Ships from California", "3-5 business days"],
    url: twoUnitCheckoutUrl,
  },
];

export function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"none" | "consumer" | "wholesale" | "custom">("none");

  const openCheckout = (url = retailCheckoutUrl) => {
    window.location.href = url;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="page-shell bg-black text-white min-h-screen selection:bg-[color:var(--neon)] selection:text-black">
      {/* Universal Fixed Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,255,0,0.12)] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1760px] items-center justify-between px-6 h-16">
          <span 
            className="font-black tracking-tighter text-xl italic cursor-pointer text-white" 
            onClick={() => {
              setActiveSegment("none");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            KOFENOT<span className="text-[color:var(--neon)]">™</span>
          </span>
          <div className="flex gap-6">
            <button 
              onClick={() => { setActiveSegment("consumer"); setTimeout(() => scrollToSection("benefits"), 100); }}
              className={cx("text-xs uppercase tracking-wider font-bold transition", activeSegment === "consumer" ? "text-[color:var(--neon)]" : "text-white/60 hover:text-white")}
            >
              Consumer
            </button>
            <button 
              onClick={() => { setActiveSegment("wholesale"); setTimeout(() => scrollToSection("wholesale-section"), 100); }}
              className={cx("text-xs uppercase tracking-wider font-bold transition", activeSegment === "wholesale" ? "text-[color:var(--neon)]" : "text-white/60 hover:text-white")}
            >
              Coffee Shops
            </button>
            <button 
              onClick={() => { setActiveSegment("custom"); setTimeout(() => scrollToSection("custom-section"), 100); }}
              className={cx("text-xs uppercase tracking-wider font-bold transition", activeSegment === "custom" ? "text-[color:var(--neon)]" : "text-white/60 hover:text-white")}
            >
              Corporate
            </button>
          </div>
        </div>
      </nav>

      {/* Main Gateway Architecture */}
      {activeSegment === "none" && (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-16 px-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-30" aria-hidden="true">
            <img src={coffeeShopHero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="hero-overlay" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <Reveal delay={0.05}>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon)] font-black">
                HIGH-IMPACT MOBILITY SOLUTIONS
              </span>
              <h1 className="mt-4 text-5xl font-black italic leading-[0.9] tracking-tight neon-text md:text-7xl lg:text-8xl uppercase">
                MAKE YOUR LAPTOP<br />COFFEE SHOP-FRIENDLY
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm font-medium tracking-wide text-white/70 md:text-base leading-relaxed">
                An ultra-light, structural wedge engineered to elevate mobile workspaces, fix typing ergonomics, and safeguard logic boards from liquid hazards. Choose your deployment profile below.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
                <button
                  onClick={() => setActiveSegment("consumer")}
                  className="group flex flex-col items-center justify-between p-6 bg-black/60 border border-[rgba(0,255,0,0.12)] hover:border-[color:var(--neon)] rounded-sm transition duration-300 text-center min-h-[220px]"
                >
                  <ShoppingBag className="h-7 w-7 text-[color:var(--neon)] mb-2 group-hover:scale-110 transition" />
                  <div>
                    <span className="text-base font-black uppercase tracking-wider text-white block">Individual Buyers</span>
                    <span className="mt-2 text-xs text-white/50 block">Single or multi-pack options ready for daily transport.</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--neon)]">
                    Enter Shop <ArrowRight className="h-3 w-3" />
                  </div>
                </button>

                <button
                  onClick={() => setActiveSegment("wholesale")}
                  className="group flex flex-col items-center justify-between p-6 bg-black/60 border border-[rgba(0,255,0,0.12)] hover:border-[color:var(--neon)] rounded-sm transition duration-300 text-center min-h-[220px]"
                >
                  <Store className="h-7 w-7 text-[color:var(--neon)] mb-2 group-hover:scale-110 transition" />
                  <div>
                    <span className="text-base font-black uppercase tracking-wider text-white block">Cafés & Retailers</span>
                    <span className="mt-2 text-xs text-white/50 block">Counter kits and high-margin point-of-purchase displays.</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--neon)]">
                    Wholesale Packs <ArrowRight className="h-3 w-3" />
                  </div>
                </button>

                <button
                  onClick={() => setActiveSegment("custom")}
                  className="group flex flex-col items-center justify-between p-6 bg-black/60 border border-[rgba(0,255,0,0.12)] hover:border-[color:var(--neon)] rounded-sm transition duration-300 text-center min-h-[220px]"
                >
                  <BriefcaseBusiness className="h-7 w-7 text-[color:var(--neon)] mb-2 group-hover:scale-110 transition" />
                  <div>
                    <span className="text-base font-black uppercase tracking-wider text-white block">Corporate Gifting</span>
                    <span className="mt-2 text-xs text-white/50 block">Bespoke laser engraving, logo branding, and tech kits.</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--neon)]">
                    Corporate Portal <ArrowRight className="h-3 w-3" />
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
            <button 
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition"
            >
              <Play className="h-4 w-4 fill-white" /> Watch Mechanical Spec Video
            </button>
          </div>
        </section>
      )}

      {/* TRACK 1: Direct-to-Consumer Funnel */}
      {activeSegment === "consumer" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
          <section className="page-hero min-h-[90svh] relative flex flex-col justify-center">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
              <img src={corp} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="hero-overlay" />
            </div>
            <div className="relative z-10 mx-auto max-w-[1480px] px-6 w-full">
              <Reveal>
                <p className="text-lg font-semibold italic uppercase tracking-[0.18em] text-white lg:ml-2">COFFEE HAPPENS. BE READY.</p>
                <h1 className="mt-4 text-[56px] font-black italic leading-[0.9] tracking-tight neon-text sm:text-[80px] md:text-[110px] lg:text-[128px]">
                  ULTIMATE<br />LAPTOP<br />WEDGE
                </h1>
                <div className="mt-8 flex flex-wrap gap-4 lg:ml-2">
                  <button onClick={() => setVideoOpen(true)} className="group inline-flex h-12 items-center gap-4 bg-red-600 px-6 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] transition hover:bg-red-500 rounded-sm">
                    <Play className="h-4 w-4 fill-white text-white" /> 2-SEC SETUP
                  </button>
                  <Button onClick={() => scrollToSection("pricing")} className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)] rounded-sm uppercase tracking-wider">
                    Buy Now
                  </Button>
                </div>
              </Reveal>
            </div>
            <HeroStats />
          </section>

          <BenefitsSection />
          <HowItWorksSection />
          <ReviewsSection openCheckout={openCheckout} />
          <PricingSection openCheckout={openCheckout} />
          <FaqSection />
        </motion.div>
      )}

      {/* TRACK 2: B2B Wholesale / Café Counter Kit Funnel */}
      {activeSegment === "wholesale" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
          <section id="wholesale-section" className="relative min-h-[70svh] flex flex-col justify-center bg-black">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-50" aria-hidden="true">
              <img src={coffeeShopHero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="hero-overlay" />
            </div>
            <div className="relative z-10 mx-auto max-w-[1320px] px-6 w-full text-left">
              <Reveal>
                <span className={text.eyebrow}>Wholesale Distribution Tier</span>
                <h1 className="text-4xl font-black italic tracking-tight text-white sm:text-6xl lg:text-7xl uppercase leading-none">
                  CAFÉ COUNTER KITS &<br />BULK DISTRIBUTION
                </h1>
                <p className="mt-6 max-w-xl text-sm text-white/70 leading-relaxed">
                  Turn minimum counter spaces into highly dynamic profit drivers. Built explicitly for independent coffee shops, roasters, and active hybrid office areas.
                </p>
                <div className="mt-8">
                  <Button onClick={() => scrollToSection("wholesale-lead")} className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-wider rounded-none">
                    Acquire Wholesale Sheet
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Wholesale Asset Display Layout */}
          <section className={cx(layout.section, layout.standard)}>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="border border-white/10 bg-black/40 overflow-hidden rounded-sm">
                <div className="aspect-video overflow-hidden"><img src={coffeeShopDisplay} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-wider">Point of Purchase Display</h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">Sits neatly beside point-of-sale setups. Minimal square-inch footprint with maximum organic turn visibility.</p>
                </div>
              </article>
              <article className="border border-white/10 bg-black/40 overflow-hidden rounded-sm">
                <div className="aspect-video overflow-hidden"><img src={wholesalePack} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-wider">Pre-Packed Wholesale Cases</h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">Shipped flat in batch quantities with high retail margin spreads optimized directly for counter merchants.</p>
                </div>
              </article>
              <article className="border border-white/10 bg-black/40 overflow-hidden rounded-sm">
                <div className="aspect-video overflow-hidden"><img src={fidget} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-wider">The Customer Clip Appeal</h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">Features a clean, satisfying tactile mechanical snap action that customers automatically interact with at point-of-checkout.</p>
                </div>
              </article>
            </div>
          </section>

          <LeadCaptureForm id="wholesale-lead" title="Request Wholesale Pricing" type="Wholesale Display Kit" />
          <FaqSection />
        </motion.div>
      )}

      {/* TRACK 3: B2B Corporate Gifting & Custom Logo Customization Funnel */}
      {activeSegment === "custom" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
          <section id="custom-section" className="relative min-h-[70svh] flex flex-col justify-center bg-black">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
              <img src={giftBox} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="hero-overlay" />
            </div>
            <div className="relative z-10 mx-auto max-w-[1320px] px-6 w-full text-left">
              <Reveal>
                <span className={text.eyebrow}>B2B Premium Procurement</span>
                <h1 className="text-4xl font-black italic tracking-tight text-white sm:text-6xl lg:text-7xl uppercase leading-none">
                  CUSTOM ENGRAVING &<br />ORGANIZATIONAL GIFTING
                </h1>
                <p className="mt-6 max-w-xl text-sm text-white/70 leading-relaxed">
                  Embed your company identity inside an ultralight workspace essential. Perfect configurations for corporate onboarding, enterprise tech deployment, and promotional event structures.
                </p>
                <div className="mt-8">
                  <Button onClick={() => scrollToSection("custom-lead")} className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-wider rounded-none">
                    Request Custom Manifest
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Corporate / Custom Design Asset Grid */}
          <section className={cx(layout.section, layout.standard)}>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="border border-white/10 bg-black/40 overflow-hidden rounded-sm">
                <div className="aspect-video overflow-hidden"><img src={brand} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-wider">Precision Co-Branding</h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">High-definition permanent laser profiling allows crisp organizational logos directly on the anodized wedge face.</p>
                </div>
              </article>
              <article className="border border-white/10 bg-black/40 overflow-hidden rounded-sm">
                <div className="aspect-video overflow-hidden"><img src={corpGift} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-wider">Premium Tech Kits</h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">Integrates perfectly with internal corporate wellness frameworks, lifestyle welcome cases, and remote employee setups.</p>
                </div>
              </article>
              <article className="border border-white/10 bg-black/40 overflow-hidden rounded-sm">
                <div className="aspect-video overflow-hidden"><img src={expo} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-wider">Corporate Event Exhibits</h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">A memorable premium item that cuts through promotional noise at trade shows, conferences, and executive summits.</p>
                </div>
              </article>
            </div>
          </section>

          <LeadCaptureForm id="custom-lead" title="Request Corporate Custom Proofs" type="Custom Co-Branded Run" />
          <FaqSection />
        </motion.div>
      )}

      {/* Product Video Lightbox Player */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl bg-black p-2 neon-border rounded-none">
          <video src={demoVideo} controls autoPlay playsInline preload="metadata" className="w-full" />
        </DialogContent>
      </Dialog>
    </main>
  );
}

/* ==========================================
   REUSABLE RECONSTRUCTED SECTIONS
   ========================================== */

function BenefitsSection() {
  return (
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
  );
}

function HowItWorksSection() {
  return (
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
  );
}

function ReviewsSection({ openCheckout }: { openCheckout: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="reviews" className={cx(layout.section, layout.standard)}>
      <SectionHeader title={<>FIELD TESTING & <span className="neon-text">USER VERDICTS</span></>} />
      <Reveal delay={0.1}>
        <div className={cx(layout.content, "mx-auto max-w-[980px]")}>
          <div className="relative border border-white/10">
            <video ref={videoRef} src={`${testimonialVideo}#t=0.1`} poster={testimonialPoster} controls={isPlaying} preload="auto" playsInline className="block w-full" />
            {!isPlaying && (
              <button onClick={() => { videoRef.current?.play(); setIsPlaying(true); }} className="absolute inset-0 flex items-center justify-center bg-black/30" aria-label="Play Video">
                <Play className="h-16 w-16 fill-red-600 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,.6)]" strokeWidth={0} />
              </button>
            )}
          </div>
          <div className="mt-8 text-center">
            <div className="grid gap-3 sm:grid-cols-4">
              {testimonials.map((quote) => (
                <blockquote key={quote} className="border border-[rgba(0,255,0,0.12)] bg-black/40 p-4 text-xs font-semibold tracking-wide">“{quote}”</blockquote>
              ))}
            </div>
            <Button onClick={openCheckout} className="mt-8 h-12 bg-[color:var(--neon)] px-10 font-black text-black hover:bg-[color:var(--neon-dim)] rounded-none uppercase tracking-wider">
              Secure Personal Unit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function PricingSection({ openCheckout }: { openCheckout: (url?: string) => void }) {
  return (
    <section id="pricing" className={cx(layout.section, layout.standard)}>
      <SectionHeader title={<>ACQUIRE <span className="neon-text">KOFENOT™</span></>} body="Stripe Encryption Shielded. Domestic US batches depart California distribution nodes daily." />
      <div className={cx(layout.content, "grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr]")}>
        {purchaseOptions.map((option) => (
          <article key={option.eyebrow} className="neon-border neon-glow flex flex-col justify-between bg-[rgba(0,255,0,0.03)] p-6 min-h-[340px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{option.eyebrow}</div>
              <div className="mt-3 text-4xl font-black neon-text">{option.price}</div>
              <p className="mt-3 text-xs leading-relaxed text-white/90">{option.title}</p>
              <ul className="mt-5 space-y-2 text-xs">
                {option.items.map((item) => (
                  <li key={item} className="flex gap-2 text-white/70">
                    <Check className="h-3.5 w-3.5 text-[color:var(--neon)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button onClick={() => openCheckout(option.url)} className="mt-8 h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-wider">
              Buy Now
            </Button>
          </article>
        ))}
        <div className="border border-white/10 bg-black overflow-hidden"><img src={giftBox} alt="" className="h-full min-h-[320px] w-full object-cover" /></div>
      </div>
    </section>
  );
}

function LeadCaptureForm({ id, title, type }: { id: string; title: string; type: string }) {
  const [sent, setSent] = useState(false);
  return (
    <section id={id} className={cx(layout.section, layout.narrow)}>
      <div className="border border-[rgba(0,255,0,0.15)] bg-[rgba(0,255,0,0.02)] p-8">
        <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground mb-6">Commercial procurement desk reviews will be finalized inside 12 business hours.</p>
        {sent ? (
          <div className="text-center py-6 border border-dashed border-[color:var(--neon)] bg-black/40">
            <div className="text-[color:var(--neon)] text-2xl font-bold mb-1">✓ INQUIRY DEPLOYED</div>
            <p className="text-xs text-white/60">An allocation agent will dispatch data manifests to your secure email block shortly.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <input required type="text" placeholder="Organization / Commercial Retailer Name" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] rounded-none h-11" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input required type="email" placeholder="Corporate Contact Email" className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] rounded-none h-11" />
              <select className="w-full bg-black border border-white/20 px-4 py-2 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] rounded-none h-11">
                <option>Initial Minimum Run ({type === "Wholesale Display Kit" ? "50 Units" : "250 Units"})</option>
                <option>Mid-Tier Wholesale Batch Portfolio</option>
                <option>Enterprise Scale Custom Allocation</option>
              </select>
            </div>
            <textarea rows={3} placeholder="Provide structural distribution specifications or customized laser marking requests..." className="w-full bg-black border border-white/20 p-4 text-xs text-white focus:outline-none focus:border-[color:var(--neon)] rounded-none" />
            <Button type="submit" className="w-full h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest rounded-none text-xs">
              Transmit Specification Request
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function HeroStats() {
  return (
    <div className="absolute inset-x-0 bottom-10 z-20 hidden lg:block mx-auto max-w-[1760px]">
      <Reveal delay={0.2}>
        <div className="grid min-h-[70px] grid-cols-4 border-t border-white/20 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center gap-6 px-8 py-4 border-r border-white/20">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-xs font-bold text-[color:var(--neon)]">0</div>
            <div>
              <div className="text-xs font-black uppercase">Zero Elements</div>
              <div className="text-xs text-white/70 mt-0.5">No magnets, messy adhesives, or metal clips.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 px-8 py-4 border-r border-white/20">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-[color:var(--neon)]"><Feather className="h-4 w-4" /></div>
            <div>
              <div className="text-xs font-black uppercase">1 Ounce</div>
              <div className="text-xs text-white/70 mt-0.5">Ultralight layout folds completely pocket-flat.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 px-8 py-4 border-r border-white/20">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-[color:var(--neon)]"><Trophy className="h-4 w-4" /></div>
            <div>
              <div className="text-xs font-black uppercase">Dual Utility</div>
              <div className="text-xs text-white/70 mt-0.5">Instant fluid diversion and spinal relief.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 px-8 py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--neon)] text-[color:var(--neon)]"><MonitorSmartphone className="h-4 w-4" /></div>
            <div>
              <div className="text-xs font-black uppercase">3-Way Platform</div>
              <div className="text-xs text-white/70 mt-0.5">Balances laptops, tablets, and smartphones.</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function FaqSection() {
  return (
    <section id="faq" className={cx(layout.sectionLast, layout.narrow)}>
      <SectionHeader title="FAQ" />
      <div className={cx(layout.content, "divide-y divide-[rgba(0,255,0,0.12)] border-y border-[rgba(0,255,0,0.12)]")}>
        {faq.map(([q, a]) => (
          <div key={q} className="grid gap-4 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3 className="text-sm font-black uppercase text-white leading-tight">{q}</h3>
            <p className={cx(text.body, "text-xs leading-relaxed")}>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
