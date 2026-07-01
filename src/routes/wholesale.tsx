import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Coffee, ShoppingBag, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import coffeeShopDisplay from "@/assets/coffee-shop.jpg";
import coffeeShopHero from "@/assets/kofenot-coffee-shop.jpeg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import wholesalePack from "@/assets/kofenot-wholesale-pack.jpeg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      {
        title: "KOFENOT Wholesale | Coffee Shops, Coworking Spaces & Retailers",
      },
      {
        name: "description",
        content:
          "Wholesale KOFENOT for coffee shops, coworking spaces, gift shops, and retailers that want a useful counter-ready laptop accessory.",
      },
    ],
  }),
  component: Wholesale,
});

const retailPackCheckoutUrl = "https://buy.stripe.com/00w28qgD40dScQEgcsdUY0G";
const individualBoxCheckoutUrl = "https://buy.stripe.com/3cI7sK86y1hWeYMgcsdUY0L";

const overviewCards = [
  {
    icon: Coffee,
    title: "At checkout",
    copy: "Place it near the register for laptop users buying coffee before work.",
  },
  {
    icon: Store,
    title: "Near seating",
    copy: "Merchandise it where customers open laptops, plug in, and settle in.",
  },
  {
    icon: ShoppingBag,
    title: "As an add-on",
    copy: "A useful accessory that fits gift shops, coworking desks, and travel retail.",
  },
];

const sellingPoints = [
  "Useful, not novelty swag",
  "Compact hanging-pack format",
  "Easy to explain in one sentence",
  "Works for commuters, students, and remote workers",
];

const wholesaleOptions = [
  {
    format: "Retail pack",
    minimum: "30 units minimum",
    price: "$8 each",
    url: retailPackCheckoutUrl,
  },
  {
    format: "Retail box",
    minimum: "30 units minimum",
    price: "$8 each",
    url: individualBoxCheckoutUrl,
  },
];

const displayIdeas = [
  { img: coffeeShopHero, label: "Coffee shop counter" },
  { img: coffeeShopDisplay, label: "Coffee-bar display" },
  { img: giftBox, label: "Retail-ready packaging" },
];

const faq = [
  [
    "Who is wholesale for?",
    "Coffee shops, coworking spaces, gift shops, retailers, and counters where laptop users already work.",
  ],
  [
    "Is this custom printed?",
    "No. Wholesale is for resale inventory. Custom logo programs live on the Custom page.",
  ],
  ["Can I start with 30 units?", "Yes. The minimum wholesale quantity is 30 units."],
  ["How do I order?", "Choose Retail pack or Retail box and use its wholesale checkout link."],
];

function Wholesale() {
  return (
    <main className="page-shell">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <WhyItSellsSection />
      <PricingSection />
      <DisplayIdeasSection />
      <FaqSection />
      <OrderSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="page-hero">
      <img
        src={coffeeShopHero}
        alt="KOFENOT coffee shop retail display concept"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay" />

      <div className="page-hero-inner">
        <div className="max-w-3xl">
          <h1 className="hero-title">
            SELL KOFENOT
            <br />
            <span className="neon-text">WHERE COFFEE HAPPENS</span>
          </h1>
          <p className="hero-copy">
            For coffee shops, coworking spaces, and retailers that want a useful,
            counter-ready product for laptop customers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={retailPackCheckoutUrl}>
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Buy 30 Units
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/custom">
              <Button
                variant="outline"
                className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
              >
                Need custom logo?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionNav() {
  return (
    <nav className="section-nav">
      <div className="section-nav-inner">
        <a href="#overview">Overview</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#order">Order</a>
        <Link to="/referrals">Referral Program</Link>
      </div>
    </nav>
  );
}

function OverviewSection() {
  return (
    <section id="overview" className="page-section">
      <p className="section-kicker">How coffee shops sell KOFENOT</p>
      <h2 className="section-title">Small counter product. Easy customer story.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {overviewCards.map((item) => (
          <article key={item.title} className="panel panel-hover rounded-sm p-6">
            <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
            <h3 className="mt-5 text-xl font-black uppercase">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyItSellsSection() {
  return (
    <section className="section-band">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-6">
        <div>
          <p className="section-kicker">Why it sells</p>
          <h2 className="section-title">
            It solves a problem customers understand instantly.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Coffee and laptops already share the same table. KOFENOT gives that
            everyday risk a simple, visible answer.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sellingPoints.map((text) => (
            <div key={text} className="panel rounded-sm p-5">
              <Check className="h-5 w-5 text-[color:var(--neon)]" />
              <p className="mt-3 font-bold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="page-section">
      <h2 className="section-title">
        Wholesale <span className="neon-text">Pricing</span>
      </h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
        <div className="panel overflow-hidden rounded-sm">
          <img
            src={wholesalePack}
            alt="KOFENOT wholesale pack"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="grid gap-4">
          {wholesaleOptions.map((option) => (
            <WholesaleOptionCard key={option.format} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DisplayIdeasSection() {
  return (
    <section className="page-section pt-10">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker">Display ideas</p>
          <h2 className="section-title">Counter, shelf, and coffee-bar concepts.</h2>
        </div>
        <Store className="hidden h-10 w-10 text-[color:var(--neon)] md:block" />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {displayIdeas.map((item) => (
          <DisplayIdea key={item.label} item={item} />
        ))}
      </div>
      <p className="mt-5 text-sm font-bold text-muted-foreground">
        Display concepts shown for illustration. Packaging and merchandising
        options available.
      </p>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="page-section-narrow">
      <h2 className="section-title">FAQ</h2>
      <div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">
        {faq.map(([question, answer]) => (
          <div
            key={question}
            className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr]"
          >
            <h3 className="text-lg font-black uppercase">{question}</h3>
            <p className="text-sm text-muted-foreground">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OrderSection() {
  return (
    <section id="order" className="mx-auto max-w-[1320px] px-4 pb-20 lg:px-6">
      <div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 text-center neon-glow md:p-12">
        <p className="section-kicker">Order wholesale</p>
        <h2 className="section-title">Ready for resale inventory?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Choose retail pack or retail box. Minimum quantity is 30 units.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {wholesaleOptions.map((option) => (
            <a key={option.format} href={option.url}>
              <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Order {option.format}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WholesaleOptionCard({
  option,
}: {
  option: {
    format: string;
    minimum: string;
    price: string;
    url: string;
  };
}) {
  return (
    <article className="neon-border flex flex-col rounded-sm bg-[rgba(0,255,0,0.05)] p-6">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {option.format}
      </div>
      <div className="mt-3 text-4xl font-black neon-text">{option.price}</div>
      <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-white">
        {option.minimum}
      </p>
      <a href={option.url} className="mt-6 inline-flex w-fit">
        <Button className="h-11 bg-[color:var(--neon)] px-6 font-black text-black hover:bg-[color:var(--neon-dim)]">
          Buy
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </article>
  );
}

function DisplayIdea({
  item,
}: {
  item: {
    img: string;
    label: string;
  };
}) {
  return (
    <figure className="panel overflow-hidden rounded-sm">
      <img
        src={item.img}
        alt={item.label}
        className="aspect-square w-full object-cover"
      />
      <figcaption className="p-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {item.label}
      </figcaption>
    </figure>
  );
}
