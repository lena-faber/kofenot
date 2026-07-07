import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Feather,
  MonitorSmartphone,
  Play,
  Trophy,
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
    <main className="bg-black text-white min-h-screen selection:bg-[color:var(--neon)] selection:text-black font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
          <span 
            className="font-black tracking-tighter text-2xl italic cursor-pointer text-white uppercase" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            KOFENOT<span className="text-[color:var(--neon)]">™</span>
          </span>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection("product-reveal")} className="text-xs uppercase tracking-widest font-black text-white/60 hover:text-white transition">Product</button>
            <button onClick={() => scrollToSection("evidence")} className="text-xs uppercase tracking-widest font-black text-white/60 hover:text-white transition">Deflection</button>
            <button onClick={() => scrollToSection("pricing")} className="text-xs uppercase tracking-widest font-black text-white/60 hover:text-white transition">Buy Now</button>
            <button onClick={() => scrollToSection("wholesale")} className="text-xs uppercase tracking-widest font-black text-white/60 hover:text-white transition">Cafes</button>
            <button onClick={() => scrollToSection("corporate")} className="text-xs uppercase tracking-widest font-black text-white/60 hover:text-white transition">Enterprise</button>
          </div>
        </div>
      </nav>

      {/* 1. HERO HOOK */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={coffeeShopHero} alt="KOFENOT Coffee Shop Scene" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--neon)] font-black bg-white/5 border border-white/10 px-4 py-2">THE MOBILE WORKSPACE INSURANCE POLICY</span>
          <h1 className="mt-8 text-5xl font-black italic leading-[0.85] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl uppercase">
            MAKE YOUR LAPTOP<br />COFFEE SHOP-FRIENDLY
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-medium tracking-wide text-white/80 leading-relaxed">
            Stop risking a $2,000 logic board every time you open your device. KOFENOT™ is the pocket-flat, ultra-light structural hardware wedge that elevates your machine to deflect liquid disasters and correct typing ergonomics instantly.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Button onClick={() => scrollToSection("pricing")} className="h-14 bg-[color:var(--neon)] px-12 font-black text-black hover:bg-[color:var(--neon-dim)] rounded-none uppercase tracking-widest text-sm">
              Secure Your Wedge Now
            </Button>
            <button onClick={() => setVideoOpen(true)} className="group inline-flex h-14 items-center gap-4 bg-red-600 px-8 text-sm font-black uppercase tracking-widest text-white transition hover:bg-red-500 rounded-none">
              <Play className="h-4 w-4 fill-white text-white" /> Watch Spill Test
            </button>
          </div>
        </div>
      </section>

      {/* 2. HUGE PRODUCT REVEAL: Full-Width Presentation */}
      <section id="product-reveal" className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)] font-black block mb-2">Industrial Identity</span>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter sm:text-6xl">THE LAPTOP WEDGE EXPLAINED</h2>
          </div>
          
          {/* Giant Asset Image Container */}
          <div className="w-full border border-white/10 bg-zinc-900 overflow-hidden mb-12">
            <img src={corp} alt="KOFENOT Hardware Spec Layout" className="w-full h-auto object-cover aspect-[21/9]" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 text-white/90">
            <p className="text-lg font-medium leading-relaxed">
              This is not another generic, heavy plastic stand. KOFENOT™ is an ultra-streamlined, unattached tool crafted to sit directly underneath your computer's rear hinge structure. It adds zero permanent weight, needs no sticky adhesives, and snaps entirely flat to fit right inside your pocket.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              By raising your device's rear footprint to an exact, calibrated slope, it alters the path of unprompted spills. When liquid strikes your table space, the angled pitch deflects the fluid run *away* from your machine's vital ports, fans, and internal hardware nodes instead of letting it pool beneath the frame.
            </p>
          </div>
        </div>
      </section>

      {/* 3. RELENTLESS BIG IMAGE TIME-LINE: One Massive Block After Another */}
      <section id="evidence" className="bg-zinc-950">
        
        {/* BLOCK 1: Coffee Hazard */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="w-full border border-white/10 bg-black overflow-hidden mb-12">
              <img src={deadSpill} alt="Unprotected Laptop Liquid Exposure" className="w-full h-auto object-cover max-h-[70vh]" />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-red-500 font-black block mb-2">Core Risk Assessment</span>
              <h3 className="text-3xl font-black italic uppercase sm:text-5xl">60% of Hardware Fatalities Start Here</h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Coffee, tea, and water account for the vast majority of accidental remote workspace replacements. When a cup tips over on a flat table surface, fluid paths channel instantly beneath your computer frame, forcing immediate, catastrophic liquid intrusion into logic boards.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2: The Escape Angle */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="w-full border border-white/10 bg-black overflow-hidden mb-12">
              <img src={safeSpill} alt="KOFENOT Fluid Deflection Performance" className="w-full h-auto object-cover max-h-[70vh]" />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black block mb-2">The Escape Metric</span>
              <h3 className="text-3xl font-black italic uppercase sm:text-5xl">The Golden Minute Defense</h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                KOFENOT™ alters gravity's advantage. Elevating the rear hinge establishes an active protective gradient. Spills are deflected down and away, buying you the critical window needed to secure your hardware before moisture breaks the baseline perimeter.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3: Ergonomic Realignment */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="w-full border border-white/10 bg-black overflow-hidden mb-12">
              <img src={neck} alt="Ergonomic Vision Correction Alignment" className="w-full h-auto object-cover max-h-[70vh]" />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black block mb-2">Biomechanical Structural Correction</span>
              <h3 className="text-3xl font-black italic uppercase sm:text-5xl">Tilt the Laptop, Not Your Spine</h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Working for long hours over flat screens forces severe tech-neck compression. The calculated wedge tilt lifts your screen sightlines closer to eye level and sets your keyboard to a natural typing angle, eliminating wrist fatigue and hunch strain.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 4: Triple Device Support */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="w-full border border-white/10 bg-black overflow-hidden mb-12">
              <img src={threeDevices} alt="Multi Hardware Adaptability Display" className="w-full h-auto object-cover max-h-[70vh]" />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black block mb-2">Adaptive Architecture</span>
              <h3 className="text-3xl font-black italic uppercase sm:text-5xl">One Tool. Three Platforms.</h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Flip the wedge body over dynamically to change its structural assignment. KOFENOT™ instantly transforms to form a perfect, rigid mechanical cradle for your smartphones, tablets, or design notebooks on any surface.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 5: The Mechanical Snap */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="w-full border border-white/10 bg-black overflow-hidden mb-12">
              <img src={fidget} alt="Mechanical Closure Action Close Up" className="w-full h-auto object-cover max-h-[70vh]" />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black block mb-2">Tactile Implementation</span>
              <h3 className="text-3xl font-black italic uppercase sm:text-5xl">The Addictive Fidget Click</h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Engineered with an internal mechanical hinge configuration that shuts with a precise, clean feedback snap. It gives restless fingers an intuitive tactile outlet between tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. USER PROOF PANEL */}
      <section className="border-b border-white/10 bg-black py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter sm:text-5xl">FIELD PERFORMANCE PROOF</h2>
          </div>
          <div className="relative border border-white/10 bg-zinc-950">
            <video ref={videoRef} src={`${testimonialVideo}#t=0.1`} poster={testimonialPoster} controls={isPlaying} preload="auto" playsInline className="block w-full" />
            {!isPlaying && (
              <button onClick={() => { videoRef.current?.play(); setIsPlaying(true); }} className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Play className="h-20 w-20 fill-red-600 text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]" strokeWidth={0} />
              </button>
            )}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-white/10 bg-zinc-950 p-6 text-sm font-bold uppercase tracking-wide">“Why doesn't Apple include this?”</div>
            <div className="border border-white/10 bg-zinc-950 p-6 text-sm font-bold uppercase tracking-wide">“I immediately bought one.”</div>
            <div className="border border-white/10 bg-zinc-950 p-6 text-sm font-bold uppercase tracking-wide">“This is complete genius.”</div>
            <div className="border border-white/10 bg-zinc-950 p-6 text-sm font-bold uppercase tracking-wide">“Never seen anything like this.”</div>
          </div>
        </div>
      </section>

      {/* 5. SECURE TRANSACTION MATRIX: Consumer Retail Packs */}
      <section id="pricing" className="border-b border-white/10 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter sm:text-6xl">SELECT DEPLOYMENT KIT</h2>
            <p className="mt-4 text-white/60 text-sm tracking-wide">Secure checkout processing powered by Stripe. All orders pack and depart California daily.</p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-3 items-stretch">
            {/* Box 1 */}
            <div className="border border-white/10 bg-zinc-950 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/50 font-black">Option 01</span>
                <h3 className="text-2xl font-black uppercase mt-2">Single Unit Run</h3>
                <div className="text-5xl font-black text-[color:var(--neon)] mt-4">$15</div>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">One KOFENOT™ hardware wedge secured in a single consumer retail box pack.</p>
                <ul className="mt-6 space-y-3 text-xs text-white/60 font-medium">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)] shrink-0" /> Free Shipping across the United States</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)] shrink-0" /> Fully stocked. Departs hub inside 24 hours</li>
                </ul>
              </div>
              <Button onClick={() => window.location.href = retailCheckoutUrl} className="mt-12 h-14 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-widest text-xs">
                Order Single Pack
              </Button>
            </div>

            {/* Box 2 */}
            <div className="border-2 border-[color:var(--neon)] bg-zinc-950 p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,0,0.05)]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black">Option 02 / Recommended</span>
                <h3 className="text-2xl font-black uppercase mt-2">Dual Station Combo</h3>
                <div className="text-5xl font-black text-[color:var(--neon)] mt-4">$25</div>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">Two complete KOFENOT™ hardware wedges shipped in individual retail presentation cases.</p>
                <ul className="mt-6 space-y-3 text-xs text-white/60 font-medium">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)] shrink-0" /> Free domestic shipping included</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)] shrink-0" /> Save $5 instantly on individual unit pricing</li>
                </ul>
              </div>
              <Button onClick={() => window.location.href = twoUnitCheckoutUrl} className="mt-12 h-14 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] w-full rounded-none uppercase tracking-widest text-xs">
                Order 2-Unit Bundle
              </Button>
            </div>

            {/* Huge Box Packaging Image */}
            <div className="border border-white/10 bg-zinc-900 overflow-hidden min-h-[350px]">
              <img src={giftBox} alt="KOFENOT Consumer Retail Gift Packing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHOLESALE BULK MERCHANDISE: Large Café Display Batches */}
      <section id="wholesale" className="border-b border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black block mb-2">Volume Point of Sale Channels</span>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter sm:text-6xl">CAFÉ RETAIL COUNTER KITS</h2>
          </div>

          <div className="space-y-24">
            <div>
              <div className="w-full border border-white/10 bg-black overflow-hidden mb-6">
                <img src={coffeeShopDisplay} alt="KOFENOT Countertop Merchandising" className="w-full h-auto object-cover max-h-[60vh]" />
              </div>
              <h3 className="text-2xl font-black uppercase">Point of Purchase Lanes</h3>
              <p className="mt-2 text-sm text-white/60 max-w-3xl leading-relaxed">Sits clean directly flush with register stands. Tiny square-inch landscape consumption creates instant impulse buys while users wait on specialty drinks.</p>
            </div>

            <div>
              <div className="w-full border border-white/10 bg-black overflow-hidden mb-6">
                <img src={wholesalePack} alt="Bulk Flat Shipping Containers" className="w-full h-auto object-cover max-h-[60vh]" />
              </div>
              <h3 className="text-2xl font-black uppercase">Pre-Packed Wholesale Displays</h3>
              <p className="mt-2 text-sm text-white/60 max-w-3xl leading-relaxed">Shipped completely flat-packed in heavy grouped distributions. Includes aggressive, calibrated product retail margins designed for regional multi-location roasters.</p>
            </div>
          </div>

          {/* Wholesale Lead Core */}
          <div className="mt-24 max-w-4xl mx-auto border border-[rgba(0,255,0,0.15)] bg-black p-8 lg:p-12">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Acquire Wholesale Fleet Manifests</h3>
            <p className="text-xs text-white/50 mb-6">Receive volume discount scales and physical countertop footprint parameters.</p>
            {wholesaleSent ? (
              <div className="text-center py-8 border border-dashed border-[color:var(--neon)] text-[color:var(--neon)] font-black uppercase text-sm">✓ Manifest Request Transmitted. Data arrives inside 12 hours.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setWholesaleSent(true); }} className="space-y-4">
                <input required type="text" placeholder="Cafe Brand / Retail Corporate Identity" className="w-full bg-zinc-950 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] h-12 rounded-none" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required type="email" placeholder="Procurement Agent Contact Email" className="w-full bg-zinc-950 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] h-12 rounded-none" />
                  <select className="w-full bg-zinc-950 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] h-12 rounded-none text-white/80">
                    <option>Initial Counter Display Run (50 Wedges)</option>
                    <option>Full Franchise Network Allocation</option>
                  </select>
                </div>
                <Button type="submit" className="w-full h-14 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest text-xs rounded-none">Download Commercial Price Sheet</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE PREMIUM CO-BRANDING: Custom Corporate Procurement */}
      <section id="corporate" className="border-b border-white/10 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[color:var(--neon)] font-black block mb-2">High-End B2B Corporate Orders</span>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter sm:text-6xl">CO-BRANDING & ASSET LOGISTICS</h2>
          </div>

          <div className="space-y-24">
            <div>
              <div className="w-full border border-white/10 bg-zinc-950 overflow-hidden mb-6">
                <img src={brand} alt="Laser Marked Custom Branding Finish" className="w-full h-auto object-cover max-h-[60vh]" />
              </div>
              <h3 className="text-2xl font-black uppercase">High-Definition Laser Engraving</h3>
              <p className="mt-2 text-sm text-white/60 max-w-3xl leading-relaxed">Crisp, unyielding precision fiber laser stamping fuses corporate identity vectors directly onto the alloy wedge surface face. Zero ink fading, zero cracking over time.</p>
            </div>

            <div>
              <div className="w-full border border-white/10 bg-zinc-950 overflow-hidden mb-6">
                <img src={corpGift} alt="Premium Internal Welcome Gifting Boxes" className="w-full h-auto object-cover max-h-[60vh]" />
              </div>
              <h3 className="text-2xl font-black uppercase">Onboarding Hardware Kits</h3>
              <p className="mt-2 text-sm text-white/60 max-w-3xl leading-relaxed">Integrates directly with high-end corporate asset packages, mobile developer welcome bundles, and luxury remote workspace gifts.</p>
            </div>

            <div>
              <div className="w-full border border-white/10 bg-zinc-950 overflow-hidden mb-6">
                <img src={expo} alt="Trade Show Exhibition Presentation Display" className="w-full h-auto object-cover max-h-[60vh]" />
              </div>
              <h3 className="text-2xl font-black uppercase">Summit & Keynote Assets</h3>
              <p className="mt-2 text-sm text-white/60 max-w-3xl leading-relaxed">A permanent, premium utilitarian physical device that completely shatters trade show promo clutter and stays on recipient desks permanently.</p>
            </div>
          </div>

          {/* Corporate Form */}
          <div className="mt-24 max-w-4xl mx-auto border border-[rgba(0,255,0,0.15)] bg-zinc-950 p-8 lg:p-12">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Request Laser Stamped Digital Mockups</h3>
            <p className="text-xs text-white/50 mb-6">Submit organizational brand parameters for physical verification blueprints.</p>
            {customSent ? (
              <div className="text-center py-8 border border-dashed border-[color:var(--neon)] text-[color:var(--neon)] font-black uppercase text-sm">✓ Blueprint Authenticated. Production files dispatch within 12 hours.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setCustomSent(true); }} className="space-y-4">
                <input required type="text" placeholder="Organization / Corporate Identity Name" className="w-full bg-black border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] h-12 rounded-none" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required type="email" placeholder="Procurement Officer Email Address" className="w-full bg-black border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] h-12 rounded-none" />
                  <select className="w-full bg-black border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] h-12 rounded-none text-white/80">
                    <option>Custom Logo Engraving Batch (250+ units)</option>
                    <option>Full Scale Enterprise Asset Fleet Deployment</option>
                  </select>
                </div>
                <textarea rows={3} placeholder="Specify positioning preferences or exact laser marking directives..." className="w-full bg-black border border-white/20 p-4 text-sm text-white focus:outline-none focus:border-[color:var(--neon)] rounded-none" />
                <Button type="submit" className="w-full h-14 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)] uppercase tracking-widest text-xs rounded-none">Generate Custom Mockup Package</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Video Lightbox Player */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl bg-black p-2 neon-border rounded-none">
          <video src={demoVideo} controls autoPlay playsInline preload="metadata" className="w-full" />
        </DialogContent>
      </Dialog>
    </main>
  );
}
