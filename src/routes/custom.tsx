import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Building2, Coffee, Gift, Handshake, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";
import corp1 from "@/assets/kofenot-corp-1.jpeg";
import corp2 from "@/assets/kofenot-corp-2.jpeg";
import corp3 from "@/assets/kofenot-corp-3.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";
import coffeeShop from "@/assets/kofenot-coffee-shop.jpeg";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom KOFENOT | Logo Printing, Events & Corporate Gifts" },
      { name: "description", content: "Put your logo on KOFENOT for businesses, coffee shops, coworking spaces, conferences, trade shows, promotional products, and corporate gifts." },
    ],
  }),
  component: Custom,
});

const quoteEmail = "mailto:info@kofenot.com?subject=KOFENOT%20Custom%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";
const pricing = [["30", "$X"], ["100", "$X"], ["400", "$X"], ["1000+", "Contact"]];
const audiences = [
  { icon: Coffee, title: "Coffee Shops", copy: "Brand a useful laptop accessory for loyal cafe customers and counter retail." },
  { icon: Presentation, title: "Conferences & Trade Shows", copy: "Give attendees a desk tool they can use during and after the event." },
  { icon: Gift, title: "Corporate Gifts", copy: "A practical gift for clients, employees, new hires, and remote teams." },
  { icon: Building2, title: "Coworking Spaces", copy: "Add your brand to a product people use at shared desks every day." },
];
const faq = [
  ["Who is Custom for?", "Businesses, events, conferences, coffee shops, coworking spaces, promotional product companies, and corporate gifts."],
  ["What can be customized?", "Logo print, design direction, packaging, merchandising, and fulfillment options can be scoped by quote."],
  ["Are prices final?", "No. Use $X placeholders until print method, quantity, packaging, and timeline are confirmed."],
  ["How do I request a quote?", "Send quantity, timeline, destination, and logo/design requirements through the quote email."],
];

function Custom() {
  return (
    <main>
      <section className="relative isolate -mt-16 min-h-[86svh] overflow-hidden bg-black pt-16">
        <img src={corpGift} alt="Custom KOFENOT corporate gift concept" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-[1320px] items-center px-4 py-20 lg:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Custom logo programs</p>
            <h1 className="mt-5 text-6xl font-black leading-[.88] tracking-tight md:text-8xl">PUT YOUR LOGO<br /><span className="neon-text">ON KOFENOT.</span></h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white">For businesses, events, conferences, coffee shops, coworking spaces, promotional product companies, and corporate gifts.</p>
            <a href="#request" className="mt-8 inline-block"><Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">Request Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-40 border-y border-[rgba(0,255,0,0.18)] bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] gap-5 overflow-x-auto px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] lg:px-6"><a href="#examples" className="hover:text-[color:var(--neon)]">Examples</a><span>•</span><a href="#pricing" className="hover:text-[color:var(--neon)]">Pricing</a><span>•</span><a href="#faq" className="hover:text-[color:var(--neon)]">FAQ</a><span>•</span><a href="#request" className="hover:text-[color:var(--neon)]">Request Quote</a></div>
      </nav>

      <section className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Put your logo on KOFENOT</p>
        <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">A branded desk tool people actually use.</h2>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">KOFENOT gives your logo a daily-use surface on a compact laptop wedge built for coffee-shop work, events, gifting, and shared workspaces.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{audiences.map((item) => <article key={item.title} className="panel panel-hover rounded-sm p-6"><item.icon className="h-7 w-7 text-[color:var(--neon)]" /><h3 className="mt-5 text-xl font-black uppercase">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p></article>)}</div>
      </section>

      <section id="examples" className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]">
        <div className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Custom design examples</p>
          <h2 className="mt-3 text-5xl font-black tracking-tight">Coffee, expo, corporate, coworking.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[
            { img: expo, label: "Conferences & trade shows" },
            { img: corpGift, label: "Corporate gifts" },
            { img: coffeeShop, label: "Coffee shops" },
            
          ].map((item) => <figure key={item.label} className="panel overflow-hidden rounded-sm"><img src={item.img} alt={item.label} className="aspect-square w-full object-cover" /><figcaption className="p-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 lg:grid-cols-2 lg:px-6">
        <div className="panel overflow-hidden rounded-sm"><img src={brand} alt="KOFENOT logo branding area" className="h-full min-h-[420px] w-full object-cover" /></div>
        <div className="flex flex-col justify-center"><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Custom program scope</p><h2 className="mt-3 text-5xl font-black tracking-tight">Built for promotional product companies and brand teams.</h2><div className="mt-6 grid gap-3">{["Logo print and design direction", "Coffee-shop and coworking merchandising", "Conference and trade-show handouts", "Corporate gift and employee kit planning"].map((item) => <div key={item} className="flex gap-3 text-lg font-bold"><Handshake className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />{item}</div>)}</div></div>
      </section>

      <section id="pricing" className="mx-auto max-w-[900px] px-4 py-20 lg:px-6">
        <h2 className="text-5xl font-black tracking-tight">Custom <span className="neon-text">Pricing</span></h2>
        <div className="mt-8 overflow-hidden border border-[rgba(0,255,0,0.22)]"><table className="w-full text-left text-lg"><thead className="bg-[rgba(0,255,0,0.08)]"><tr><th className="px-5 py-4 text-[color:var(--neon)]">Qty</th><th className="px-5 py-4 text-[color:var(--neon)]">Custom Print</th></tr></thead><tbody>{pricing.map(([qty, price]) => <tr key={qty} className="border-t border-[rgba(0,255,0,0.18)]"><td className="px-5 py-4 font-black">{qty}</td><td className="px-5 py-4 font-black">{price}</td></tr>)}</tbody></table></div>
      </section>

      <section id="faq" className="mx-auto max-w-[900px] px-4 py-20 lg:px-6"><h2 className="text-5xl font-black tracking-tight">FAQ</h2><div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">{faq.map(([q, a]) => <div key={q} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr]"><h3 className="text-lg font-black uppercase">{q}</h3><p className="text-sm text-muted-foreground">{a}</p></div>)}</div></section>

      <section id="request" className="mx-auto max-w-[1320px] px-4 pb-20 lg:px-6"><div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 text-center neon-glow md:p-12"><BriefcaseBusiness className="mx-auto h-9 w-9 text-[color:var(--neon)]" /><p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Request quote</p><h2 className="mt-3 text-5xl font-black tracking-tight">Tell us your logo, quantity, and timeline.</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">We will quote print, packaging, delivery, and merchandising options based on your program.</p><a href={quoteEmail} className="mt-7 inline-block"><Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">Request Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></a></div></section>
    </main>
  );
}
