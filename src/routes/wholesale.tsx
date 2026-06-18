import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Box, Check, Download, Mail, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import masterCase from "@/assets/kofeenot-pack.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "KofeNot™ Wholesale | Raw Packs & Master Cases" },
      { name: "description", content: "Order raw KofeNot laptop wedges by sample, 100-pack, or 400-unit master case. Custom branding quoted separately." },
    ],
  }),
  component: Wholesale,
});

const offers = [
  { label: "Evaluate", name: "Raw Sample", price: "$10", unit: "1 raw unit", description: "Review the product, fit, finish, and branding surface before a volume order.", checkout: "https://buy.stripe.com/9B614m9aC2m0eYM2lCdUY0F", cta: "Order raw sample" },
  { label: "Pilot / Team Pack", name: "Raw 100-Pack", price: "$600", unit: "$6.00 per unit", description: "A practical starting quantity for teams, pilot programs, agencies, and smaller campaigns.", checkout: "https://buy.stripe.com/8x25kC4UmgcQ7wkaS8dUY0I", cta: "Buy 100-pack" },
  { label: "Best Unit Price", name: "400-Unit Master Case", price: "$2,000", unit: "$5.00 per unit", description: "Factory master-case configuration for distributors, larger campaigns, and repeat programs.", checkout: "https://buy.stripe.com/9B6fZgfz07Gk5ocbWcdUY0J", cta: "Buy master case", featured: true },
];

function Wholesale() {
  const brandingEmail = "mailto:info@kofenot.com?subject=KofeNot%20Custom%20Branding%20Request&body=Company%3A%0AQuantity%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0ABranding%20or%20packaging%20requirements%3A%0A";
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-[rgba(0,255,0,0.18)] bg-black">
        <div className="absolute inset-0 opacity-35" aria-hidden="true"><img src={masterCase} alt="" className="h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" /></div>
        <div className="relative mx-auto grid min-h-[590px] max-w-[1320px] items-center gap-10 px-4 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Wholesale Inventory • FOB California</p>
            <h1 className="mt-5 text-6xl font-black leading-[.9] tracking-tight md:text-8xl">RAW STOCK.<br />READY TO SCALE.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white md:text-xl">Order KofeNot™ raw inventory directly in buyer-friendly quantities. No account or password required. Custom branding and packaging are handled separately.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packs"><Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">View packs <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
              <a href={brandingEmail}><Button variant="outline" className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"><Mail className="mr-2 h-4 w-4" /> Custom branding</Button></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Secure Stripe checkout</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Tax calculated by Stripe</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--neon)]" /> Shipping calculated by Stripe</span>
            </div>
          </div>
          <div className="relative hidden lg:block"><div className="neon-border overflow-hidden bg-black p-2 neon-glow"><img src={masterCase} alt="KofeNot raw 400-unit manufacturing master case" className="aspect-[4/3] w-full object-cover" /><div className="flex items-center justify-between gap-4 p-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--neon)]">Manufacturing Configuration</p><p className="mt-1 font-bold text-white">400-unit master case</p></div><Box className="h-7 w-7 text-[color:var(--neon)]" /></div></div></div>
        </div>
      </section>

      <section id="packs" className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
        <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Direct Wholesale Checkout</p><h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Choose your quantity.</h2><p className="mt-4 text-lg text-muted-foreground">All products below are raw, unbranded KofeNot™ units. Branding is not included in these prices.</p></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => <article key={offer.name} className={`flex min-h-[430px] flex-col rounded-sm p-7 ${offer.featured ? "neon-border bg-[rgba(0,255,0,0.07)] neon-glow" : "panel panel-hover"}`}><div className="text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--neon)]">{offer.label}</div><h3 className="mt-7 text-3xl font-black uppercase tracking-tight">{offer.name}</h3><div className="mt-5 text-5xl font-black neon-text">{offer.price}</div><div className="mt-2 text-sm font-bold uppercase tracking-wider text-white">{offer.unit}</div><p className="mt-6 text-sm leading-relaxed text-muted-foreground">{offer.description}</p><ul className="mt-6 space-y-2 text-sm text-white"><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--neon)]" /> Raw inventory</li><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--neon)]" /> Ships from California</li><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--neon)]" /> Shipping and tax at checkout</li></ul><a href={offer.checkout} target="_blank" rel="noreferrer" className="mt-auto pt-8"><Button className="h-12 w-full bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]">{offer.cta} <ArrowRight className="ml-2 h-4 w-4" /></Button></a></article>)}
        </div>
        <div className="mt-6 text-center"><a href="/kofenot-wholesale.csv" download className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[color:var(--neon)]"><Download className="h-4 w-4" /> Download product data (CSV)</a></div>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]"><div className="mx-auto grid max-w-[1320px] gap-4 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">{[
        { icon: PackageCheck, title: "Raw & Unbranded", copy: "Volume pricing covers blank units ready for your program." }, { icon: ShieldCheck, title: "Buyer-Friendly", copy: "Public prices and direct checkout. No gated account required." }, { icon: Truck, title: "California Stock", copy: "Standard inventory ships from the SF Bay Area." }, { icon: Box, title: "Scalable Packs", copy: "Start with one sample, then move to packs or master cases." },
      ].map((item) => <div key={item.title} className="panel p-6"><item.icon className="h-6 w-6 text-[color:var(--neon)]" /><h3 className="mt-5 text-xl font-black uppercase">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p></div>)}</div></section>

      <section className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6"><div className="grid overflow-hidden border border-[rgba(0,255,0,0.35)] bg-black lg:grid-cols-2"><div className="min-h-[420px] bg-black"><img src={brand} alt="KofeNot branded laptop wedge" className="h-full w-full object-cover" /></div><div className="flex flex-col justify-center p-8 md:p-12"><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Separate Custom Program</p><h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">Need your logo on it?</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Logo application, custom packaging, special production, coordinated delivery, and other program requirements are quoted separately from raw inventory.</p><p className="mt-5 text-sm text-white">Email your company, quantity, need-by date, destination, and branding requirements.</p><a href={brandingEmail} className="mt-8 self-start"><Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">Email branding request <Mail className="ml-2 h-4 w-4" /></Button></a></div></div></section>

      <section className="mx-auto max-w-[900px] px-4 pb-20 lg:px-6"><h2 className="text-4xl font-black uppercase tracking-tight">Wholesale details</h2><div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">{[
        ["Are these prices hidden behind an account?", "No. Standard raw inventory pricing is public and can be purchased directly through Stripe."], ["Are shipping and tax included?", "Shipping and applicable taxes are calculated in Stripe checkout."], ["Does wholesale pricing include branding?", "No. These are raw-unit prices. Branding and custom packaging are quoted separately by email."], ["Who should I contact about a custom program?", "Email info@kofenot.com with your quantity, timeline, destination, and branding requirements."],
      ].map(([question, answer]) => <div key={question} className="grid gap-2 py-6 md:grid-cols-[.9fr_1.1fr] md:gap-10"><h3 className="text-lg font-black uppercase">{question}</h3><p className="text-sm leading-relaxed text-muted-foreground">{answer}</p></div>)}</div></section>
    </main>
  );
}
