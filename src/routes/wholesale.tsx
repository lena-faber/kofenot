import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Coffee,
  Download,
  Gift,
  Handshake,
  PackageCheck,
  Presentation,
  Ruler,
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
      {
        title: "KOFENOT Wholesale | Retail Kit, Custom Logo & Corporate Orders",
      },
      {
        name: "description",
        content:
          "Wholesale KOFENOT for retail resale, coffee shops, gift shops, coworking spaces, custom logos, corporate gifts, events, white label, and licensing.",
      },
    ],
  }),
  component: Wholesale,
});

const retailPackCheckoutUrl =
  "https://buy.stripe.com/00w28qgD40dScQEgcsdUY0G";

const retailBoxCheckoutUrl =
  "https://buy.stripe.com/3cI7sK86y1hWeYMgcsdUY0L";

const quoteEmail =
  "mailto:info@kofenot.com?subject=KOFENOT%20Wholesale%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0AResale%2C%20custom%20logo%2C%20white%20label%2C%20or%20licensing%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";

const wholesalePrices = [
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

const customPrograms = [
  "Coffee shops",
  "Corporate gifts",
  "Conferences & trade shows",
  "Coworking spaces",
  "Universities",
  "Promotional products",
  "Employee welcome kits",
  "White-label programs",
  "Licensing opportunities",
];

const b2bPaths = [
  {
    icon: Store,
    title: "Resale",
    copy: "Retail-ready KOFENOT for counters, shelves, gift shops, coffee shops, bookstores, and campus stores.",
  },
  {
    icon: Tag,
    title: "Custom Logo",
    copy: "Put your logo on KOFENOT for businesses, events, universities, and promotional product programs.",
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

const retailKitFeatures = [
  "Retail-ready hanging package",
  "Works on peg hooks, counters, shelves, and gift racks",
  "Clear customer story on the package",
  "Designed for coffee shops, coworking spaces, gift shops, bookstores, campus stores, and travel retail",
];

const specs = [
  ["Product", "KOFENOT™ laptop wedge"],
  ["Trademark line", "KOFENOT™: Make Your Laptop Coffee Shop-Friendly"],
  ["Bare unit size", '2.4" W × 3.4" H × 0.4" D'],
  ["Bare unit weight", "0.9 oz"],
  ["Retail pack weight", "2.1 oz"],
  ["Wholesale minimum", "30 units"],
  ["Retail-ready formats", "Retail Pack and Retail Box"],
  ["Custom programs", "Quote only"],
];

const merchandising = [
  {
    icon: Coffee,
    title: "Coffee Shop Counter",
    copy: "Place near checkout where laptop customers already buy coffee.",
  },
  {
    icon: Store,
    title: "Gift & Book Shops",
    copy: "Small useful product for impulse, travel, desk, and student sections.",
  },
  {
    icon: PackageCheck,
    title: "Coworking Spaces",
    copy: "Sell at the front desk or include in member and welcome kits.",
  },
];

const images = [
  { img: coffeeShopHero, label: "Coffee shop use" },
  { img: coffeeShopDisplay, label: "Counter display" },
  { img: giftBox, label: "Retail box" },
  { img: wholesalePack, label: "Wholesale pack" },
  { img: corpGift, label: "Corporate gift" },
  { img: expo, label: "Event order" },
];

const faq = [
  [
    "What is wholesale?",
    "Wholesale is for resale inventory, bulk orders, corporate gifts, custom logo programs, white label, and licensing.",
  ],
  [
    "What should I buy for resale?",
    "Choose Retail Pack or Retail Box. Both start at 30 units.",
  ],
  [
    "Can I put my logo on KOFENOT?",
    "Yes. Request a quote for logo printing, packaging, fulfillment, or larger quantities.",
  ],
  [
    "Why are custom prices not public?",
    "Custom pricing depends on quantity, print method, packaging, timeline, and shipping destination.",
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
      <PricingSection />
      <RetailKitSection />
      <SpecsSection />
      <ProgramsSection />
      <MerchandisingSection />
      <CustomSection />
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
          <p className="section-kicker">Wholesale</p>

          <h1 className="hero-title">
            RETAIL KIT,
            <br />
            <span className="neon-text">CUSTOM & CORPORATE</span>
          </h1>

          <p className="hero-copy">
            Everything B2B in one place: resale pricing, retail-ready packaging,
            product specs, custom logo programs, corporate gifts, white label,
            and licensing.
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
        <a href="#pricing">Pricing</a>
        <a href="#retail-kit">Retail Kit</a>
        <a href="#specs">Specs</a>
        <a href="#custom">Custom</a>
        <a href="#faq">FAQ</a>
        <a href="#order">Order</a>
        <Link to="/referrals">Referral Program</Link>
      </div>
    </nav>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="section-band">
      <div className="page-section">
        <p className="section-kicker">Wholesale pricing</p>
        <h2 className="section-title">Public prices for resale. Quote for custom.</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-black uppercase">
              Retail-ready resale
            </h3>

            <div className="grid gap-4">
              {wholesalePrices.map((item) => (
                <PriceCard key={item.format} item={item} />
              ))}
            </div>
          </div>

          <div className="neon-border rounded-sm bg-[rgba(0,255,0,0.05)] p-8">
            <p className="section-kicker">Custom Programs</p>

            <h3 className="text-3xl font-black uppercase">
              Beyond standard wholesale
            </h3>

            <p className="mt-4 text-muted-foreground">
              Put your brand on KOFENOT™ or create a custom wholesale program
              tailored to your business.
            </p>

            <div className="mt-8 grid gap-4">
              {customPrograms.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Minimum quantities apply. Contact us for pricing and program
              details.
            </p>

            <a href={quoteEmail} className="mt-8 inline-flex">
              <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RetailKitSection() {
  return (
    <section id="retail-kit" className="page-section">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Retail Kit</p>

          <h2 className="section-title">
            Retail-ready packaging for easy resale.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            KOFENOT ships in a retail-ready hanging package designed for coffee
            shops, gift shops, bookstores, coworking spaces, campus stores, and
            travel retail.
          </p>

          <div className="mt-7 grid gap-3">
            {retailKitFeatures.map((item) => (
              <div key={item} className="flex gap-3 text-lg font-bold">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
                {item}
              </div>
            ))}
          </div>

          <a href={quoteEmail} className="mt-8 inline-flex">
            <Button
              variant="outline"
              className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
            >
              Request Retail Kit Assets
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ImageCard item={{ img: giftBox, label: "Retail box" }} />
          <ImageCard item={{ img: wholesalePack, label: "Wholesale pack" }} />
          <ImageCard item={{ img: coffeeShopDisplay, label: "Counter display" }} />
          <ImageCard item={{ img: coffeeShopHero, label: "Coffee shop use" }} />
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  return (
    <section id="specs" className="section-band">
      <div className="page-section-narrow">
        <div className="flex items-center gap-3">
          <Ruler className="h-8 w-8 text-[color:var(--neon)]" />
          <div>
            <p className="section-kicker">Product specifications</p>
            <h2 className="section-title">Wholesale buyer details.</h2>
          </div>
        </div>

        <div className="mt-8 overflow-hidden border border-[rgba(0,255,0,0.22)]">
          <table className="responsive-table text-left text-sm sm:text-lg">
            <tbody>
              {specs.map(([label, value]) => (
                <tr
                  key={label}
                  className="border-t border-[rgba(0,255,0,0.18)] first:border-t-0"
                >
                  <th className="w-1/3 bg-[rgba(0,255,0,0.06)] px-4 py-4 text-[color:var(--neon)] sm:px-5">
                    {label}
                  </th>
                  <td className="px-4 py-4 font-semibold sm:px-5">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Shipping, case quantities, UPC, print method, packaging, and custom
          fulfillment details can be confirmed by quote.
        </p>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="page-section">
      <p className="section-kicker">B2B options</p>
      <h2 className="section-title">One product. Several wholesale paths.</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {b2bPaths.map((item) => (
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

function MerchandisingSection() {
  return (
    <section className="section-band">
      <div className="page-section">
        <p className="section-kicker">Merchandising</p>
        <h2 className="section-title">Where KOFENOT sells.</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {merchandising.map((item) => (
            <article key={item.title} className="panel rounded-sm p-6">
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <ImageCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomSection() {
  return (
    <section id="custom" className="page-section grid gap-8 lg:grid-cols-2">
      <div className="panel overflow-hidden rounded-sm">
        <img
          src={brand}
          alt="KOFENOT custom logo surface"
          className="h-full min-h-[420px] w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="section-kicker">Custom, white label, licensing</p>

        <h2 className="section-title">
          Buy standard wholesale now. Quote anything custom.
        </h2>

        <div className="mt-6 grid gap-3">
          {[
            "Custom logo printing",
            "Corporate gifts",
            "Employee welcome kits",
            "Conference and trade-show orders",
            "Promotional product programs",
            "White-label opportunities",
            "Licensing conversations",
          ].map((item) => (
            <div key={item} className="flex gap-3 text-lg font-bold">
              <Handshake className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
              {item}
            </div>
          ))}
        </div>

        <a href={quoteEmail} className="mt-8 inline-flex">
          <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
            Request Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
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
            className="grid gap-2 py-6 md:grid-cols-[0.8fr_1.2fr]"
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
          Checkout for resale. Email for custom programs.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Use checkout for retail-ready wholesale units. Use quote for logos,
          packaging, fulfillment, white label, licensing, or larger quantities.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={retailPackCheckoutUrl}>
            <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Order Retail Pack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href={retailBoxCheckoutUrl}>
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
