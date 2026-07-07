import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Gift,
  Handshake,
  PackageCheck,
  Presentation,
  Store,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import coffeeShopHero from "@/assets/kofenot-coffee-shop.jpeg";
import coffeeShopDisplay from "@/assets/coffee-shop.jpg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import wholesalePack from "@/assets/kofenot-wholesale-pack.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "KOFENOT Wholesale | Bulk, Custom Logo & Corporate Orders" },
      {
        name: "description",
        content:
          "Wholesale KOFENOT for resale, bulk orders, custom logos, corporate gifts, events, white label, and licensing.",
      },
    ],
  }),
  component: Wholesale,
});

const retailPackCheckoutUrl = "https://buy.stripe.com/00w28qgD40dScQEgcsdUY0G";
const retailBoxCheckoutUrl = "https://buy.stripe.com/3cI7sK86y1hWeYMgcsdUY0L";
const blank100CheckoutUrl = "https://buy.stripe.com/8x25kC4UmgcQ7wkaS8dUY0I";
const blank400CheckoutUrl = "https://buy.stripe.com/9B6fZgfz07Gk5ocbWcdUY0J";

const quoteEmail =
  "mailto:info@kofenot.com?subject=KOFENOT%20Wholesale%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0AResale%2C%20custom%20logo%2C%20white%20label%2C%20or%20licensing%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";

const programs = [
  {
    icon: Store,
    title: "Resale",
    copy: "Retail-ready KOFENOT for counters, shelves, gift shops, coffee shops, and coworking spaces.",
  },
  {
    icon: Tag,
    title: "Custom Logo",
    copy: "Blank KOFENOT units for businesses, events, universities, and promotional product programs.",
  },
  {
    icon: Gift,
    title: "Corporate Gifts",
    copy: "A practical desk gift for employees, clients, remote teams, and new-hire kits.",
  },
  {
    icon: Presentation,
    title: "Events",
    copy: "A compact conference and trade-show product people keep using after the event.",
  },
];

const resalePricing = [
  {
    format: "Retail Pack",
    quantity: "30 units minimum",
    price: "$8 each",
    url: retailPackCheckoutUrl,
  },
  {
    format: "Retail Box",
    quantity: "30 units minimum",
    price: "$8 each",
    url: retailBoxCheckoutUrl,
  },
];

const bulkPricing = [
  {
    product: "Blank 100-Pack",
    price: "$600.00 USD",
    use: "For custom logos, events, gifts, and promotional programs",
    url: blank100CheckoutUrl,
  },
  {
    product: "Blank 400-Unit Master Case",
    price: "$2,000.00 USD",
    use: "For white label, licensing, and larger custom programs",
    url: blank400CheckoutUrl,
  },
];

const scope = [
  "Retail-ready resale inventory",
  "Blank units for custom logos",
  "Corporate gift orders",
  "Conference and trade-show programs",
  "White-label and licensing conversations",
];

const images = [
  { img: coffeeShopHero, label: "Coffee shop use" },
  { img: coffeeShopDisplay, label: "Counter display" },
  { img: giftBox, label: "Retail box" },
  { img: brand, label: "Logo area" },
  { img: corpGift, label: "Corporate gift" },
  { img: expo, label: "Event order" },
];

const faq = [
  [
    "What is wholesale?",
    "Wholesale is for resale, bulk orders, corporate gifts, custom logo programs, white label, and licensing.",
  ],
  [
    "What should I buy for resale?",
    "Choose Retail Pack or Retail Box. Both start at 30 units.",
  ],
  [
    "What should I buy for custom logo?",
    "Choose blank units, or request a quote if you need printing, packaging, or fulfillment.",
  ],
  [
    "What is white label?",
    "White label means KOFENOT is supplied for another company to sell or distribute under its own brand program.",
  ],
  [
    "What is licensing?",
    "Licensing means permission to use the KOFENOT product, design, phrase, brand, or sales rights under agreed terms.",
  ],
];

function Wholesale() {
  return (
    <main className="page-shell">
      <HeroSection />
      <SectionNav />
      <ProgramsSection />
      <PricingSection />
      <ScopeSection />
      <GallerySection />
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
        alt="KOFENOT in a coffee shop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay" />

      <div className="page-hero-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">Wholesale orders</p>

          <h1 className="hero-title">
            RETAIL,
            <br />
            <span className="neon-text">CUSTOM & BULK</span>
          </h1>

          <p className="hero-copy">
            Order KOFENOT for resale, branded gifts, custom logos, events,
            white-label programs, and licensing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing">
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                See Wholesale Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href={quoteEmail}>
              <Button
                variant="outline"
                className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
              >
                Request Quote
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
        <a href="#programs">Programs</a>
        <a href="#pricing">Pricing</a>
        <a href="#scope">Scope</a>
        <a href="#formats">Formats</a>
        <a href="#faq">FAQ</a>
        <a href="#order">Order</a>
        <Link to="/referrals">Referral Program</Link>
      </div>
    </nav>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="page-section">
      <p className="section-kicker">B2B options</p>
      <h2 className="section-title">One product. Several wholesale paths.</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((item) => (
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

function PricingSection() {
  return (
    <section id="pricing" className="section-band">
      <div className="page-section">
        <p className="section-kicker">Pricing</p>
        <h2 className="section-title">Wholesale prices by order type.</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-black uppercase">
              Retail-ready resale
            </h3>

            <div className="grid gap-4">
              {resalePricing.map((item) => (
                <PriceCard key={item.format} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-black uppercase">
              Blank bulk units
            </h3>

            <div className="overflow-hidden border border-[rgba(0,255,0,0.22)]">
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
                      Order
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {bulkPricing.map((item) => (
                    <tr
                      key={item.product}
                      className="border-t border-[rgba(0,255,0,0.18)]"
                    >
                      <td className="px-4 py-4 sm:px-5">
                        <div className="font-black">{item.product}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {item.use}
                        </div>
                      </td>

                      <td className="px-4 py-4 font-black sm:px-5">
                        {item.price}
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

            <a href={quoteEmail} className="mt-5 inline-block">
              <Button
                variant="outline"
                className="h-11 border-[rgba(0,255,0,0.55)] px-6 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
              >
                Need print, packaging, or licensing?
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScopeSection() {
  return (
    <section id="scope" className="page-section grid gap-8 lg:grid-cols-2">
      <div className="panel overflow-hidden rounded-sm">
        <img
          src={brand}
          alt="KOFENOT custom logo surface"
          className="h-full min-h-[420px] w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="section-kicker">Order scope</p>
        <h2 className="section-title">
          Buy standard quantities now. Quote anything custom.
        </h2>

        <div className="mt-6 grid gap-3">
          {scope.map((item) => (
            <div key={item} className="flex gap-3 text-lg font-bold">
              <Handshake className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="formats" className="section-band">
      <div className="page-section">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="section-kicker">Formats</p>
            <h2 className="section-title">
              Coffee shop, counter, retail, brand, gift, event.
            </h2>
          </div>

          <PackageCheck className="hidden h-10 w-10 text-[color:var(--neon)] md:block" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <ImageCard key={item.label} item={item} />
          ))}
        </div>

        <p className="mt-5 text-sm font-bold text-muted-foreground">
          Standard checkout covers listed quantities. Printing, packaging,
          fulfillment, white label, licensing, and special timelines require a quote.
        </p>
      </div>
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

        <p className="section-kicker mt-5">Order</p>

        <h2 className="section-title">
          Checkout for standard orders. Email for custom programs.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Use checkout for resale or blank units. Use quote for logos, packaging,
          fulfillment, white label, licensing, or larger quantities.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={retailPackCheckoutUrl}>
            <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Retail Pack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href={retailBoxCheckoutUrl}>
            <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Retail Box
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href={blank100CheckoutUrl}>
            <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Blank 100-Pack
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

function PriceCard({
  item,
}: {
  item: {
    format: string;
    quantity: string;
    price: string;
    url: string;
  };
}) {
  return (
    <article className="neon-border rounded-sm bg-[rgba(0,255,0,0.05)] p-6">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {item.format}
      </div>

      <div className="mt-3 text-4xl font-black neon-text">{item.price}</div>

      <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-white">
        {item.quantity}
      </p>

      <a href={item.url} className="mt-6 inline-flex">
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
