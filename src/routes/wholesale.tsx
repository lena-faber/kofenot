import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Eye,
  Gift,
  Handshake,
  PackageCheck,
  Presentation,
  Ruler,
  Store,
  Tag,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import coffeeShopHero from "@/assets/kofenot-coffee-shop.jpeg";
import coffeeShopDisplay from "@/assets/coffee-shop.jpg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";
import shipping from "@/assets/kofenot-shipping.jpeg";

import retailPackSipSafeBack from "@/assets/kofenot-retail-pack-00.jpg";
import retailPackDad from "@/assets/kofenot-retail-pack-01.jpg";
import bareProduct from "@/assets/kofenot-retail-pack-02.jpg";
import retailPackSipSafeFront from "@/assets/kofenot-retail-pack-03.jpg";
import retailPackPlanet from "@/assets/kofenot-retail-pack-04.jpg";
import yourLogoHere from "@/assets/kofenot-your-logo-here.jpeg";
import customLogoDisplay from "@/assets/kofenot-your-logo-here-01.jpg";
import francisco from "@/assets/i-love-sf.png";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      {
        title: "KOFENOT Wholesale | Retail, Custom Logo, Private Label",
      },
      {
        name: "description",
        content:
          "Wholesale KOFENOT for resale, retail-ready packaging, custom logos, corporate gifts, private label, licensing, and distribution.",
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
  "mailto:info@kofenot.com?subject=KOFENOT%20Wholesale%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0AResale%2C%20custom%20logo%2C%20private%20label%2C%20licensing%2C%20or%20distribution%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";

const pricing = [
  {
    title: "Retail Pack",
    price: "$8",
    note: "each",
    detail: "30 units minimum",
    cta: "Buy Retail Pack",
    url: retailPackCheckoutUrl,
  },
  {
    title: "Retail Box",
    price: "$8",
    note: "each",
    detail: "30 units minimum",
    cta: "Buy Retail Box",
    url: retailBoxCheckoutUrl,
  },
  {
    title: "Custom / Bulk",
    price: "Quote",
    note: "",
    detail: "Logo, private label, licensing, distribution",
    cta: "Request Quote",
    url: quoteEmail,
  },
];

const programs: Program[] = [
  {
    icon: Store,
    title: "Retail Wholesale",
    image: coffeeShopDisplay,
    copy:
      "For coffee shops, bookstores, campus stores, museum shops, gift shops, and office stores.",
  },
  {
    icon: Tag,
    title: "Custom Logo",
    image: yourLogoHere,
    copy:
      "For conferences, coworking spaces, universities, employee kits, client gifts, and branded campaigns.",
  },
  {
    icon: Gift,
    title: "Corporate Gifts",
    image: corpGift,
    copy:
      "A practical desk gift for employees, clients, executive welcome kits, and remote teams.",
  },
  {
    icon: Presentation,
    title: "Events",
    image: expo,
    copy:
      "A useful giveaway people keep after trade shows, expos, conferences, and company events.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Private Label",
    image: customLogoDisplay,
    copy:
      "KOFENOT™ supplied for your brand program, with custom logo and packaging options.",
  },
  {
    icon: Handshake,
    title: "Licensing",
    image: giftBox,
    copy:
      "For regional distribution, international partners, manufacturing conversations, and larger B2B deals.",
  },
];

const specs = [
  ["Product", "KOFENOT™ laptop wedge"],
  ["Trademark line", "KOFENOT™: Make Your Laptop Coffee Shop-Friendly"],
  ["Bare unit size", '2.4" W × 3.4" H × 0.4" D'],
  ["Bare unit weight", "0.9 oz"],
  ["Retail pack weight", "2.1 oz"],
  ["Wholesale minimum", "30 units"],
  ["Retail formats", "Retail Pack and Retail Box"],
  ["Custom programs", "Quote only"],
];

const mediaKit = [
  {
    group: "Retail Packaging",
    images: [
      {
        img: retailPackSipSafeFront,
        title: "SIP SAFE Front",
        file: "kofenot-retail-pack-sip-safe-front.jpg",
      },
      {
        img: retailPackSipSafeBack,
        title: "SIP SAFE Back",
        file: "kofenot-retail-pack-sip-safe-back.jpg",
      },
      {
        img: retailPackPlanet,
        title: "Planet Earth Pack",
        file: "kofenot-retail-pack-planet-earth.jpg",
      },
      {
        img: retailPackDad,
        title: "Dad Pack",
        file: "kofenot-retail-pack-dad.jpg",
      },
    ],
  },
  {
    group: "Product + Custom Examples",
    images: [
      {
        img: bareProduct,
        title: "Bare KOFENOT™",
        file: "kofenot-bare-product.jpg",
      },
      {
        img: yourLogoHere,
        title: "Your Logo Here",
        file: "kofenot-your-logo-here.jpg",
      },
      {
        img: customLogoDisplay,
        title: "3D Logo View",
        file: "kofenot-custom-logo-3d.jpg",
      },
      {
        img: francisco,
        title: "I ♥ SF",
        file: "kofenot-i-love-sf.png",
      },
    ],
  },
];

const shippingPoints = [
  "Retail Pack and Retail Box orders ship as ready-to-sell products.",
  "Custom, private-label, licensing, and distributor orders are quoted by quantity, packaging, destination, and timeline.",
  "Send company name, use case, quantity, logo needs, deadline, and shipping destination.",
];

const faq = [
  [
    "What should I buy for resale?",
    "Retail Pack or Retail Box. Both start at 30 units.",
  ],
  [
    "Can I put my logo on it?",
    "Yes. Logo printing, packaging, and fulfillment are quoted by order.",
  ],
  [
    "Can I sell it under my own brand?",
    "Yes. That is private label. It is quoted separately.",
  ],
  [
    "Do you offer licensing?",
    "Yes. Licensing and distribution are discussed individually.",
  ],
  [
    "Why no public custom price?",
    "Because custom price depends on quantity, print method, packaging, timeline, and shipping destination.",
  ],
];

type Program = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  image: string;
  copy: string;
};

function Wholesale() {
  return (
    <main className="page-shell">
      <HeroSection />
      <SectionNav />
      <PricingSection />
      <ProgramsSection />
      <SpecsSection />
      <MediaKitSection />
      <ShippingSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="page-hero">
      <img
        src={coffeeShopHero}
        alt="KOFENOT wholesale display in a coffee shop"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="hero-overlay" />

      <div className="page-hero-inner">
        <div className="max-w-4xl">
          <p className="section-kicker">Wholesale</p>

          <h1 className="hero-title">
            RESALE.<br />PRIVATE LABEL.<br />LICENSING.
            
          </h1>

          <p className="hero-copy">
            Retail-ready KOFENOT™ for resale, custom logos, corporate gifts,
            private label, licensing, and distributor programs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing">
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Buy Wholesale
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
        <a href="#programs">Programs</a>
        <a href="#specs">Specs</a>
        <a href="#media">Media Kit</a>
        <a href="#shipping">Shipping</a>
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
        <p className="section-kicker">Pricing</p>

        <h2 className="section-title">
          Standard wholesale is simple. Custom work is quoted.
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricing.map((item) => (
            <article
              key={item.title}
              className="neon-border rounded-sm bg-[rgba(0,255,0,0.05)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.title}
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-black neon-text">
                  {item.price}
                </span>

                {item.note && (
                  <span className="pb-2 text-sm font-black uppercase text-white">
                    {item.note}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-white">
                {item.detail}
              </p>

              <a href={item.url} className="mt-6 inline-flex">
                <Button className="h-11 bg-[color:var(--neon)] px-6 font-black text-black hover:bg-[color:var(--neon-dim)]">
                  {item.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="page-section">
      <p className="section-kicker">Programs</p>

      <h2 className="section-title">Choose the path. Same product.</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((item) => (
          <article
            key={item.title}
            className="panel panel-hover overflow-hidden rounded-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[260px] w-full object-cover"
            />

            <div className="p-6">
              <item.icon className="h-7 w-7 text-[color:var(--neon)]" />

              <h3 className="mt-5 text-xl font-black uppercase">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          </article>
        ))}
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
            <p className="section-kicker">Specs</p>
            <h2 className="section-title">Buyer details.</h2>
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
      </div>
    </section>
  );
}

function MediaKitSection() {
  return (
    <section id="media" className="page-section">
      <p className="section-kicker">Media kit</p>

      <h2 className="section-title">Product images for buyers and partners.</h2>

      <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
        Download images for retail review, internal approval, wholesale listings,
        custom logo planning, and promotional presentations.
      </p>

      <div className="mt-10 grid gap-12">
        {mediaKit.map((group) => (
          <div key={group.group}>
            <h3 className="text-3xl font-black italic neon-text">
              {group.group}
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {group.images.map((item) => (
                <DownloadCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShippingSection() {
  return (
    <section id="shipping" className="section-band">
      <div className="page-section grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Truck className="h-9 w-9 text-[color:var(--neon)]" />

          <p className="section-kicker mt-5">Shipping</p>

          <h2 className="section-title">Quoted by order type.</h2>

          <div className="mt-6 grid gap-4">
            {shippingPoints.map((item) => (
              <div key={item} className="flex gap-3 text-lg font-bold">
                <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
                {item}
              </div>
            ))}
          </div>

          <a href={quoteEmail} className="mt-8 inline-flex">
            <Button
              variant="outline"
              className="h-12 border-[rgba(0,255,0,0.55)] px-8 hover:bg-[rgba(0,255,0,0.08)] hover:text-[color:var(--neon)]"
            >
              Ask Shipping Quote
            </Button>
          </a>
        </div>

        <div className="panel overflow-hidden rounded-sm">
          <img
            src={shipping}
            alt="KOFENOT shipping options"
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="page-section">
      <div className="page-section-narrow">
        <p className="section-kicker">FAQ</p>

        <h2 className="section-title">Simple answers.</h2>

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
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="order" className="mx-auto max-w-[1320px] px-4 pb-20 lg:px-6">
      <div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 text-center neon-glow md:p-12">
        <BriefcaseBusiness className="mx-auto h-9 w-9 text-[color:var(--neon)]" />

        <p className="section-kicker mt-5">Order</p>

        <h2 className="section-title">Ready to sell KOFENOT™?</h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Buy standard wholesale now, or request a quote for custom logo,
          private label, licensing, distribution, corporate gifts, and larger
          orders.
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

function DownloadCard({
  item,
}: {
  item: {
    img: string;
    title: string;
    file: string;
  };
}) {
  return (
    <article className="panel overflow-hidden rounded-sm">
      <img
        src={item.img}
        alt={item.title}
        className="h-[340px] w-full bg-white object-contain p-8"
      />

      <div className="p-4">
        <h3 className="font-black italic text-[color:var(--neon)]">
          {item.title}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href={item.img} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="h-10 w-full border-white/20 text-xs font-black uppercase tracking-[0.18em] hover:bg-white/5"
            >
              <Eye className="mr-2 h-4 w-4" />
              Open
            </Button>
          </a>

          <a href={item.img} download={item.file}>
            <Button className="h-10 w-full bg-red-600 text-xs font-black uppercase tracking-[0.18em] text-white hover:bg-red-700">
              <Download className="mr-2 h-4 w-4" />
              File
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}
