import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Box, Check, Download, Eye, Mail, PackageCheck, ShieldCheck, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import masterCase from "@/assets/kofeenot-pack.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";
import mechanics from "@/assets/kofeenot-mechanics.jpg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({ meta: [
    { title: "KofeNot™ Wholesale | Raw Packs & Master Cases" },
    { name: "description", content: "Order raw KofeNot laptop wedges by sample, 100-pack, or 400-unit master case. Custom branding quoted separately." },
  ] }),
  component: Wholesale,
});

const offers = [
  { label: "Evaluate", name: "Raw Sample", price: "$10", unit: "1 raw unit", description: "Review the product, fit, finish, and branding surface before a volume order.", checkout: "https://buy.stripe.com/9B614m9aC2m0eYM2lCdUY0F", cta: "Order raw sample" },
  { label: "Pilot / Team Pack", name: "Raw 100-Pack", price: "$600", unit: "$6.00 per unit", description: "For teams, pilot programs, agencies, and smaller campaigns.", checkout: "https://buy.stripe.com/8x25kC4UmgcQ7wkaS8dUY0I", cta: "Buy 100-pack" },
  { label: "Best Unit Price", name: "400-Unit Master Case", price: "$2,000", unit: "$5.00 per unit", description: "Factory master-case configuration for distributors, larger campaigns, and repeat programs.", checkout: "https://buy.stripe.com/9B6fZgfz07Gk5ocbWcdUY0J", cta: "Buy master case", featured: true },
];

function Wholesale() {
  const brandingEmail = "mailto:info@kofenot.com?subject=KofeNot%20Custom%20Branding%20Request&body=Company%3A%0AQuantity%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0ABranding%20or%20packaging%20requirements%3A%0A";
  return <main>
    <section className="relative isolate overflow-hidden border-b border-[rgba(0,255,0,0.18)] bg-black">
      <div className="absolute inset-0 opacity-30" aria-hidden="true"><img src={masterCase} alt="" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" /></div>
      <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-4 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Wholesale inventory • FOB California</p>
          <h1 className="mt-5 text-6xl font-black leading-[.88] tracking-tight md:text-8xl">BREAK THROUGH<br /><span className="neon-text">SWAG NOISE.</span></h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white">Give people something they will actually keep on their desks and use. Order raw KofeNot™ inventory directly, or email us for a custom-branded program.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#packs"><Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">View wholesale packs <ArrowRight className="ml-2 h-4 w-4" /></Button></a><a href={brandingEmail}><Button variant="outline" className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"><Mail className="mr-2 h-4 w-4" /> Request custom branding</Button></a></div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> No account required</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Secure Stripe checkout</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Shipping and tax calculated by Stripe</span></div>
        </div>
        <div className="hidden lg:block"><a href="#packs" className="block neon-border overflow-hidden bg-black p-2 neon-glow"><img src={masterCase} alt="KofeNot raw 400-unit manufacturing master case" className="aspect-[4/3] w-full object-cover" /><div className="flex items-center justify-between p-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--neon)]">Manufacturing configuration</p><p className="mt-1 font-bold text-white">400-unit master case • $5 per unit</p></div><Box className="h-7 w-7 text-[color:var(--neon)]" /></div></a></div>
      </div>
    </section>

    <section id="why-wholesale" className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Why buyers choose KofeNot</p><h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Useful beats disposable.</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
        { icon: Zap, title: "Real Utility", copy: "A desk tool people can use daily instead of another throwaway giveaway." },
        { icon: Eye, title: "Visible Branding", copy: "The outward-facing branding area stays visible while the laptop is in use." },
        { icon: Truck, title: "Easy Distribution", copy: "A one-ounce, flat-folding product suited to events, kits, teams, and mailers." },
        { icon: ShieldCheck, title: "Easy Deployment", copy: "No magnets, adhesives, charging, pairing, or technical installation." },
      ].map((item) => <article key={item.title} className="panel panel-hover p-6"><item.icon className="h-6 w-6 text-[color:var(--neon)]" /><h3 className="mt-5 text-xl font-black uppercase">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p></article>)}</div>
    </section>

    <section id="packs" className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]"><div className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Direct wholesale checkout</p><h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Choose your quantity.</h2><p className="mt-4 max-w-3xl text-lg text-muted-foreground">These are raw, unbranded KofeNot™ units. Branding and custom packaging are quoted separately.</p>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">{offers.map((offer) => <article key={offer.name} className={`flex min-h-[430px] flex-col rounded-sm p-7 ${offer.featured ? "neon-border bg-[rgba(0,255,0,0.07)] neon-glow" : "panel panel-hover"}`}><div className="text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--neon)]">{offer.label}</div><h3 className="mt-7 text-3xl font-black uppercase">{offer.name}</h3><div className="mt-5 text-5xl font-black neon-text">{offer.price}</div><div className="mt-2 text-sm font-bold uppercase tracking-wider text-white">{offer.unit}</div><p className="mt-6 text-sm leading-relaxed text-muted-foreground">{offer.description}</p><ul className="mt-6 space-y-2 text-sm"><li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Raw, unbranded inventory</li><li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Ships from California</li><li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Shipping and tax at checkout</li></ul><a href={offer.checkout} target="_blank" rel="noreferrer" className="mt-auto pt-8"><Button className="h-12 w-full bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]">{offer.cta} <ArrowRight className="ml-2 h-4 w-4" /></Button></a></article>)}</div>
      <div className="mt-6 text-center"><a href="/kofenot-wholesale.csv" download className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[color:var(--neon)]"><Download className="h-4 w-4" /> Download product data (CSV)</a></div>
    </div></section>

    <section id="how-wholesale" className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">How it works</p><h2 className="mt-3 text-5xl font-black tracking-tight">Open. Rest. Snap.</h2><div className="mt-8 space-y-5">{[["01", "Open the laptop", "Open it fully and locate the rear hinge."], ["02", "Rest it on the wedge", "Place the rear hinge on KofeNot™; flip the wedge for a different hinge angle."], ["03", "Snap it shut", "Fold it flat after use for storage, transport, or repeat deployment."]].map(([n,t,d]) => <div key={n} className="grid grid-cols-[44px_1fr] gap-4 border-t border-[rgba(0,255,0,0.18)] pt-5"><span className="font-black neon-text">{n}</span><div><h3 className="text-xl font-black uppercase">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div></div>)}</div></div><div className="panel overflow-hidden"><img src={mechanics} alt="KofeNot hinge-first wedge placement" className="aspect-square w-full object-cover" /></div></div></section>

    <section id="branding" className="border-y border-[rgba(0,255,0,0.18)] bg-black"><div className="mx-auto grid max-w-[1320px] lg:grid-cols-2"><div className="min-h-[430px]"><img src={brand} alt="Custom-branded KofeNot laptop wedge" className="h-full w-full object-cover" /></div><div className="flex flex-col justify-center p-8 md:p-14"><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Custom program</p><h2 className="mt-4 text-5xl font-black uppercase">Put your logo where work happens.</h2><p className="mt-5 text-lg text-muted-foreground">The 2.0 × 1.6 inch outward-facing branding area stays visible during everyday laptop use. Logo application, custom packaging, coordinated delivery, and special production are quoted separately.</p><a href={brandingEmail} className="mt-8 self-start"><Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">Email branding request <Mail className="ml-2 h-4 w-4" /></Button></a></div></div></section>

    <section id="wholesale-specs" className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Buyer specifications</p><h2 className="mt-3 text-5xl font-black tracking-tight">The essentials.</h2></div><Link to="/spec"><Button variant="outline" className="border-[rgba(0,255,0,0.55)] hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]">View full specifications <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
      <div className="mt-10 grid gap-px border border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.18)] sm:grid-cols-2 lg:grid-cols-3">{[["Material", "High-impact RoHS-compliant ABS"], ["Unit weight", "1 oz"], ["Folded size", "3.4 × 2.4 × 0.4 in"], ["Branding area", "2.0 × 1.6 in, front-facing"], ["Construction", "No magnets or adhesives"], ["Master case", "400 units • approximately 25 lb"], ["Compatibility", "Most laptops, tablets, and phones"], ["Inventory", "FOB SF Bay Area, California"], ["IP status", "Utility patent pending"]].map(([k,v]) => <div key={k} className="bg-black p-6"><div className="text-xs font-black uppercase tracking-wider text-[color:var(--neon)]">{k}</div><div className="mt-3 text-lg font-bold">{v}</div></div>)}</div>
    </section>

    <section className="mx-auto max-w-[900px] px-4 pb-20 lg:px-6"><h2 className="text-4xl font-black uppercase">Wholesale details</h2><div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">{[["Do I need an account?", "No. Standard raw inventory pricing is public and can be purchased directly through Stripe."], ["Are shipping and tax included?", "Shipping and applicable taxes are calculated in Stripe checkout."], ["Does pricing include branding?", "No. These are raw-unit prices. Branding and custom packaging are quoted separately by email."], ["Who handles custom programs?", "Email info@kofenot.com with your quantity, timeline, destination, and branding requirements."]].map(([q,a]) => <div key={q} className="grid gap-2 py-6 md:grid-cols-[.9fr_1.1fr] md:gap-10"><h3 className="text-lg font-black uppercase">{q}</h3><p className="text-sm text-muted-foreground">{a}</p></div>)}</div></section>
  </main>;
}
