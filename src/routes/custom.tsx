import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Coffee,
  Gift,
  Handshake,
  Presentation,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import brand from "@/assets/kofenot-your-logo-here.jpeg";
import coffeeShop from "@/assets/kofenot-coffee-shop.jpeg";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom KOFENOT | Logo Printing, Events & Corporate Gifts" },
      {
        name: "description",
        content:
          "Put your logo on KOFENOT for businesses, coffee shops, coworking spaces, conferences, trade shows, promotional products, and corporate gifts.",
      },
    ],
  }),
  component: Custom,
});

const quoteEmail =
  "mailto:info@kofenot.com?subject=KOFENOT%20Custom%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";

const audiences = [
  {
    icon: Coffee,
    title: "Coffee Shops",
    copy: "Brand a useful laptop accessory for loyal cafe customers and counter retail.",
  },
  {
    icon: Presentation,
    title: "Conferences & Trade Shows",
    copy: "Give attendees a desk tool they can use during and after the event.",
  },
  {
    icon: Gift,
    title: "Corporate Gifts",
    copy: "A practical gift for clients, employees, new hires, and remote teams.",
  },
  {
    icon: Building2,
    title: "Coworking Spaces",
    copy: "Add your brand to a product people use at shared desks every day.",
  },
];

const examples = [
  { img: expo, label: "Conferences & trade shows" },
  { img: corpGift, label: "Corporate gifts" },
  { img: coffeeShop, label: "Coffee shops" },
];

const programScope = [
  "Logo print and design direction",
  "Coffee-shop and coworking merchandising",
  "Conference and trade-show handouts",
  "Corporate gift and employee kit planning",
];

const pricing = [
  {
    product: "Raw 100-Pack",
    price: "$600.00 USD",
    url: "https://buy.stripe.com/8x25kC4UmgcQ7wkaS8dUY0I",
  },
  {
    product: "KOFENOT™ Raw 400-Unit Master Case",
    price: "$2,000.00 USD",
    url: "https://buy.stripe.com/9B6fZgfz07Gk5ocbWcdUY0J",
  },
];

const faq = [
  [
    "Who is Custom for?",
    "Businesses, events, conferences, coffee shops, coworking spaces, promotional product companies, and corporate gifts.",
  ],
  [
    "What can be customized?",
    "Logo print, design direction, packaging, merchandising, and fulfillment options can be scoped by quote.",
  ],
  [
    "Are prices final?",
    "No. Use $X placeholders until print method, quantity, packaging, and timeline are confirmed.",
  ],
  [
    "How do I request a quote?",
    "Send quantity, timeline, destination, and logo/design requirements through the quote email.",
  ],
];

function Custom() {
  return (
    <main className="page-shell">
      <HeroSection />
      <SectionNav />
      <AudiencesSection />
      <ExamplesSection />
      <ProgramScopeSection />
      <PricingSection />
      <FaqSection />
      <RequestSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="page-hero">
      <img
        src={corpGift}
        alt="Custom KOFENOT corporate gift concept"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay" />

      <div className="page-hero-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">Custom logo programs</p>
          <h1 className="hero-title">
            PUT YOUR LOGO ON
            <br />
            <span className="neon-text">KOFENOT</span>
          </h1>
          <p className="hero-copy body-copy">
            For businesses, events, conferences, coffee shops, coworking spaces,
            promotional product companies, and corporate gifts.
          </p>
          <a href="#request" className="mt-8 inline-block">
            <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionNav() {
  return (
    <nav className="section-nav">
      <div className="section-nav-inner">
        <a href="#examples">Examples</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#request">Request Quote</a>
      </div>
    </nav>
  );
}

function AudiencesSection() {
  return (
    <section className="page-section">
      <p className="section-kicker">Put your logo on KOFENOT</p>
      <h2 className="section-title">A branded desk tool people actually use.</h2>
      <p className="body-copy mt-5 max-w-3xl">
        KOFENOT gives your logo a daily-use surface on a compact laptop wedge
        built for coffee-shop work, events, gifting, and shared workspaces.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item) => (
          <article key={item.title} className="panel panel-hover rounded-sm p-6">
            <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
            <h3 className="mt-5 text-xl font-black uppercase">
              {item.title}
            </h3>
            <p className="body-copy mt-3">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExamplesSection() {
  return (
    <section id="examples" className="section-band">
      <div className="page-section">
        <p className="section-kicker">Custom design examples</p>
        <h2 className="section-title">Coffee, expo, corporate, coworking.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((item) => (
            <ImageCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramScopeSection() {
  return (
    <section className="page-section grid gap-8 lg:grid-cols-2">
      <div className="panel overflow-hidden rounded-sm">
        <img
          src={brand}
          alt="KOFENOT logo branding area"
          className="h-full min-h-[420px] w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="section-kicker">Custom program scope</p>
        <h2 className="section-title">
          Built for promotional product companies and brand teams.
        </h2>
        <div className="mt-6 grid gap-3">
          {programScope.map((item) => (
            <div key={item} className="body-copy flex gap-3">
              <Handshake className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="page-section-narrow">
      <h2 className="section-title">
        Custom <span className="neon-text">Pricing</span>
      </h2>
      <div className="mt-8 overflow-hidden border border-[rgba(0,255,0,0.22)]">
        <table className="responsive-table text-left text-sm sm:text-lg">
          <thead className="bg-[rgba(0,255,0,0.08)]">
            <tr>
              <th className="section-kicker px-4 py-4 sm:px-5">Product</th>
              <th className="section-kicker px-4 py-4 sm:px-5">Price</th>
              <th className="section-kicker px-4 py-4 sm:px-5">Order</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((item) => (
              <tr
                key={item.product}
                className="border-t border-[rgba(0,255,0,0.18)]"
              >
                <td className="body-copy px-4 py-4 sm:px-5">
                  {item.product}
                </td>
                <td className="body-copy px-4 py-4 sm:px-5">
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
            <p className="body-copy">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RequestSection() {
  return (
    <section id="request" className="mx-auto max-w-[1320px] px-4 pb-20 lg:px-6">
      <div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 text-center neon-glow md:p-12">
        <BriefcaseBusiness className="mx-auto h-9 w-9 text-[color:var(--neon)]" />
        <p className="section-kicker mt-5">Request quote</p>
        <h2 className="section-title">Tell us your logo, quantity, and timeline.</h2>
        <p className="body-copy mx-auto mt-4 max-w-2xl">
          We will quote print, packaging, delivery, and merchandising options
          based on your program.
        </p>
        <a href={quoteEmail} className="mt-7 inline-block">
          <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
            Request Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
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
      <figcaption className="section-kicker p-3 text-center">
        {item.label}
      </figcaption>
    </figure>
  );
}
