import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Coffee,
  Gift,
  Handshake,
  Presentation,
  ShoppingBag,
  Store,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import coffeeShopDisplay from "@/assets/coffee-shop.jpg";
import coffeeShopHero from "@/assets/kofenot-coffee-shop.jpeg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import wholesalePack from "@/assets/kofenot-wholesale-pack.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      {
        title: "KOFENOT Wholesale | Retail, Custom Logo & Corporate Orders",
      },
      {
        name: "description",
        content:
          "Wholesale KOFENOT for coffee shops, coworking spaces, retailers, custom logo programs, corporate gifts, events, and promotional products.",
      },
    ],
  }),
  component: Wholesale,
});

const retailPackCheckoutUrl = "https://buy.stripe.com/00w28qgD40dScQEgcsdUY0G";
const individualBoxCheckoutUrl = "https://buy.stripe.com/3cI7sK86y1hWeYMgcsdUY0L";

const quoteEmail =
  "mailto:info@kofenot.com?subject=KOFENOT%20Wholesale%20or%20Custom%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0ARetail%20pack%2C%20retail%20box%2C%20blank%20units%2C%20custom%20logo%2C%20or%20licensing%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";

const resaleOptions = [
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

const customOptions = [
  {
    product: "Blank 100-Pack",
    price: "$600.00 USD",
    note: "For custom logos, events, gifts, and promotional programs",
    url: "https://buy.stripe.com/8x25kC4UmgcQ7wkaS8dUY0I",
  },
  {
    product: "Blank 400-Unit Master Case",
    price: "$2,000.00 USD",
    note: "For larger custom, white-label, and licensing conversations",
    url: "https://buy.stripe.com/9B6fZgfz07Gk5ocbWcdUY0J",
  },
];

const overviewCards = [
  {
    icon: Coffee,
    title: "Coffee Shops",
    copy: "Sell KOFENOT where laptop customers already buy coffee and sit down to work.",
  },
  {
    icon: Store,
    title: "Retailers",
    copy: "Use retail-ready packaging for counters, shelves, gift shops, and travel retail.",
  },
  {
    icon: Building2,
    title: "Coworking",
    copy: "Offer it at shared desks, front counters, member kits, or branded workspace gifts.",
  },
  {
    icon: Gift,
    title: "Custom Gifts",
    copy: "Use blank units for logos, conferences, corporate gifts, and promotional programs.",
  },
];

const sellingPoints = [
  "Useful, not novelty swag",
  "Easy to explain in one sentence",
  "Compact counter-ready product",
  "Made for coffee-shop laptop users",
];

const programScope = [
  "Retail inventory for resale",
  "Blank units for custom logos",
  "Corporate gifts and employee kits",
  "Conference and trade-show handouts",
  "White-label and licensing conversations",
];

const displayIdeas = [
  { img: coffeeShopHero, label: "Coffee shop counter" },
  { img: coffeeShopDisplay, label: "Coffee-bar display" },
  { img: giftBox, label: "Retail-ready packaging" },
  { img: expo, label: "Events & trade shows" },
  { img: corpGift, label: "Corporate gifts" },
  { img: brand, label: "Custom logo area" },
];

const faq = [
  [
    "Who is wholesale for?",
    "Coffee shops, coworking spaces, gift shops, retailers, corporate buyers, event organizers, and promotional product companies.",
  ],
  [
    "What is the difference between retail and blank units?",
    "Retail packs and retail boxes are ready for resale. Blank units are for custom logo, corporate gift, event, white-label, or licensing programs.",
  ],
  [
    "Can I start with 30 units?",
    "Yes. The minimum wholesale quantity for retail packs or retail boxes is 30 units.",
  ],
  [
    "Can I put my logo on KOFENOT?",
    "Yes. Order blank units or request a quote for logo print, packaging, merchandising, and fulfillment options.",
  ],
  [
    "How do I order?",
    "Use the checkout buttons for standard wholesale quantities. For custom logo, white-label, licensing, or special timelines, request a quote.",
  ],
];

function Wholesale() {
  return (
    <main className="page-shell">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <WhyItSellsSection />
      <PricingSection />
      <ProgramScopeSection />
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
        alt="KOFENOT coffee shop wholesale display"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay" />

      <div className="page-hero-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">Wholesale · custom · corporate</p>
          <h1 className="hero-title">
            SELL KOFENOT
            <br />
            <span className="neon-text">WHERE COFFEE HAPPENS</span>
          </h1>
          <p className="hero-copy">
            Retail-ready KOFENOT for shops and counters. Blank units and custom
            logo programs for events, corporate gifts, white label, and licensing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={retailPackCheckoutUrl}>
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Buy 30 Retail Units
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#custom">
              <Button
                variant="outline"
                className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
              >
                Custom Logo / Blank Units
              </Button>
            </a>
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
        <a href="#custom">Custom</a>
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
      <p className="section-kicker">Wholesale programs</p>
      <h2 className="section-title">
        Retail inventory and custom logo orders in one place.
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewCards.map((item) => (
          <article key={item.title} className="panel panel-hover rounded-sm p-6">
            <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
            <h3 className="mt-5 text-xl font-black uppercase">{item.title}</h3>
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
          {resaleOptions.map((option) => (
            <WholesaleOptionCard key={option.format} option={option} />
          ))}
        </div>
      </div>

      <div id="custom" className="mt-16">
        <p className="section-kicker">Blank units for custom programs</p>
        <h2 className="section-title">
          Custom logo, white label, licensing, and corporate orders.
        </h2>

        <div className="mt-8 overflow-hidden border border-[rgba(0,255,0,0.22)]">
          <table className="responsive-table text-left text-sm sm:text-lg">
            <thead className="bg-[rgba(0,255,0,0.08)]">
              <tr>
                <th className="px-4 py-4 text-[color:var(--neon)] sm:px-5">
                  Product
                </th>
                <th className="px-4 py-4 text-[color:var(--neon)] sm:px-5">
                  Price
                </th>
                <th className="px-4 py-4 text-[color:var(--neon)] sm:px-5">
                  Best For
                </th>
                <th className="px-4 py-4 text-[color:var(--neon)] sm:px-5">
                  Order
                </th>
              </tr>
            </thead>
            <tbody>
              {customOptions.map((item) => (
                <tr
                  key={item.product}
                  className="border-t border-[rgba(0,255,0,0.18)]"
                >
                  <td className="px-4 py-4 font-black sm:px-5">
                    {item.product}
                  </td>
                  <td className="px-4 py-4 font-black sm:px-5">
                    {item.price}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground sm:px-5">
                    {item.note}
                  </td>
                  <td className="px-4 py-4 sm:px-5">
                    <a href={item.url}>
                      <Button className="h-10 bg-[color:var(--neon)] px-5 font-black text-black hover:bg-[color:var(--neon-dim)]">
                        Buy
                      </Button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a href={quoteEmail} className="mt-7 inline-block">
          <Button
            variant="outline"
            className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
          >
            Request Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}

function ProgramScopeSection() {
  return (
    <section className="section-band">
      <div className="page-section grid gap-8 lg:grid-cols-2">
        <div className="panel overflow-hidden rounded-sm">
          <img
            src={brand}
            alt="KOFENOT logo branding area"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-kicker">Program scope</p>
          <h2 className="section-title">
            From counter resale to custom brand programs.
          </h2>

          <div className="mt-6 grid gap-3">
            {programScope.map((item) => (
              <div key={item} className="flex gap-3 text-lg font-bold">
                <Handshake className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
                {item}
              </div>
            ))}
          </div>
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
          <p className="section-kicker">Display and use ideas</p>
          <h2 className="section-title">
            Coffee counter, retail shelf, expo table, corporate gift.
          </h2>
        </div>
        <Store className="hidden h-10 w-10 text-[color:var(--neon)] md:block" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayIdeas.map((item) => (
          <ImageCard key={item.label} item={item} />
        ))}
      </div>

      <p className="mt-5 text-sm font-bold text-muted-foreground">
        Display concepts shown for illustration. Packaging, logo, merchandising,
        and fulfillment options depend on quantity and timeline.
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
        <BriefcaseBusiness className="mx-auto h-9 w-9 text-[color:var(--neon)]" />
        <p className="section-kicker mt-5">Order wholesale</p>
        <h2 className="section-title">
          Ready for resale, custom logo, or corporate quantity?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Buy standard wholesale units now, or request a quote for logo printing,
          blank units, white label, licensing, packaging, and delivery.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={retailPackCheckoutUrl}>
            <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Order Retail Pack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href={individualBoxCheckoutUrl}>
            <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Order Retail Box
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href={quoteEmail}>
            <Button
              variant="outline"
              className="h-12 border-[rgba(0,255,0,0.55)] px-8 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
            >
              Request Quote
            </Button>
          </a>
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

function ImageCard({
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
