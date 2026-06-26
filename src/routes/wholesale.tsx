import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Coffee, ShoppingBag, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import coffeeShop from "@/assets/kofenot-coffee-shop.jpeg";
import pack from "@/assets/kofeenot-pack.jpeg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "KOFENOT Wholesale | Coffee Shops, Coworking Spaces & Retailers" },
      { name: "description", content: "Wholesale KOFENOT for coffee shops, coworking spaces, gift shops, and retailers that want a useful counter-ready laptop accessory." },
    ],
  }),
  component: Wholesale,
});

const wholesaleEmail = "mailto:info@kofenot.com?subject=KOFENOT%20Wholesale%20Order&body=Business%3A%0AQuantity%3A%0AShipping%20destination%3A%0ATimeline%3A%0A";

const pricing = [["30", "$X"], ["100", "$X"], ["400", "$X"], ["1000+", "Contact"]];
const faq = [
  ["Who is wholesale for?", "Coffee shops, coworking spaces, gift shops, retailers, and counters where laptop users already work."],
  ["Is this custom printed?", "No. Wholesale is for resale inventory. Custom logo programs live on the Custom page."],
  ["Can I start with 30 units?", "Yes. Use the 30-unit placeholder tier until final wholesale pricing is confirmed."],
  ["How do I order?", "Email quantity, business name, destination, and timeline. We will confirm availability and terms."],
];

function Wholesale() {
  return (
    <main>
      <section className="relative isolate -mt-16 min-h-[86svh] overflow-hidden bg-black pt-16">
        <img src={coffeeShop} alt="KOFENOT coffee shop retail display concept" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-[1320px] items-center px-4 py-20 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="mt-5 text-6xl font-black leading-[.88] tracking-tight md:text-8xl">SELL KOFENOT<br /><span className="neon-text">WHERE COFFEE HAPPENS.</span></h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white">For coffee shops, coworking spaces, and retailers that want a useful, counter-ready product for laptop customers.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={wholesaleEmail}><Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">Order Wholesale <ArrowRight className="ml-2 h-4 w-4" /></Button></a><Link to="/custom"><Button variant="outline" className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]">Need custom logo?</Button></Link></div>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-40 border-y border-[rgba(0,255,0,0.18)] bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] gap-5 overflow-x-auto px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] lg:px-6"><a href="#overview" className="hover:text-[color:var(--neon)]">Overview</a><span>•</span><a href="#pricing" className="hover:text-[color:var(--neon)]">Pricing</a><span>•</span><a href="#faq" className="hover:text-[color:var(--neon)]">FAQ</a><span>•</span><a href="#order" className="hover:text-[color:var(--neon)]">Order</a><span>•</span><Link to="/referrals" className="hover:text-[color:var(--neon)]">Referral Program</Link></div>
      </nav>

      <section id="overview" className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">How coffee shops sell KOFENOT</p>
        <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Small counter product. Easy customer story.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[{ icon: Coffee, title: "At checkout", copy: "Place it near the register for laptop users buying coffee before work." }, { icon: Store, title: "Near seating", copy: "Merchandise it where customers open laptops, plug in, and settle in." }, { icon: ShoppingBag, title: "As an add-on", copy: "A useful accessory that fits gift shops, coworking desks, and travel retail." }].map((item) => <article key={item.title} className="panel panel-hover rounded-sm p-6"><item.icon className="h-7 w-7 text-[color:var(--neon)]" /><h3 className="mt-5 text-xl font-black uppercase">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p></article>)}
        </div>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-6">
          <div><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Why it sells</p><h2 className="mt-3 text-5xl font-black tracking-tight">It solves a problem customers understand instantly.</h2><p className="mt-5 text-lg text-muted-foreground">Coffee and laptops already share the same table. KOFENOT gives that everyday risk a simple, visible answer.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{["Useful, not novelty swag", "Compact hanging-pack format", "Easy to explain in one sentence", "Works for commuters, students, and remote workers"].map((text) => <div key={text} className="panel rounded-sm p-5"><Check className="h-5 w-5 text-[color:var(--neon)]" /><p className="mt-3 font-bold">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-[900px] px-4 py-20 lg:px-6">
        <h2 className="text-5xl font-black tracking-tight">Wholesale <span className="neon-text">Pricing</span></h2>
        <div className="mt-8 overflow-hidden border border-[rgba(0,255,0,0.22)]"><table className="w-full text-left text-lg"><thead className="bg-[rgba(0,255,0,0.08)]"><tr><th className="px-5 py-4 text-[color:var(--neon)]">Qty</th><th className="px-5 py-4 text-[color:var(--neon)]">Price</th></tr></thead><tbody>{pricing.map(([qty, price]) => <tr key={qty} className="border-t border-[rgba(0,255,0,0.18)]"><td className="px-5 py-4 font-black">{qty}</td><td className="px-5 py-4 font-black">{price}</td></tr>)}</tbody></table></div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-10 lg:px-6">
        <div className="flex items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Display ideas</p><h2 className="mt-3 text-5xl font-black tracking-tight">Counter, shelf, and coffee-bar concepts.</h2></div><Store className="hidden h-10 w-10 text-[color:var(--neon)] md:block" /></div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{[{ img: coffeeShop, label: "Coffee shop counter" }, { img: pack, label: "Wholesale pack" }, { img: giftBox, label: "Retail-ready packaging" }].map((item) => <figure key={item.label} className="panel overflow-hidden rounded-sm"><img src={item.img} alt={item.label} className="aspect-square w-full object-cover" /><figcaption className="p-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</figcaption></figure>)}</div>
        <p className="mt-5 text-sm font-bold text-muted-foreground">Display concepts shown for illustration. Packaging and merchandising options available.</p>
      </section>

      <section id="faq" className="mx-auto max-w-[900px] px-4 py-20 lg:px-6"><h2 className="text-5xl font-black tracking-tight">FAQ</h2><div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">{faq.map(([q, a]) => <div key={q} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr]"><h3 className="text-lg font-black uppercase">{q}</h3><p className="text-sm text-muted-foreground">{a}</p></div>)}</div></section>

      <section id="order" className="mx-auto max-w-[1320px] px-4 pb-20 lg:px-6"><div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 text-center neon-glow md:p-12"><p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Order wholesale</p><h2 className="mt-3 text-5xl font-black tracking-tight">Ready for resale inventory?</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Send quantity, business type, destination, and timeline. We will confirm current wholesale pricing and availability.</p><a href={wholesaleEmail} className="mt-7 inline-block"><Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">Order Wholesale <ArrowRight className="ml-2 h-4 w-4" /></Button></a></div></section>
    </main>
  );
}
