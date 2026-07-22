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
        title: "KOFENOT Wholesale | Retail, Bare Bulk, Custom Logo",
      },
      {
        name: "description",
        content:
          "Wholesale KOFENOT retail-ready packs, bare bulk packs, custom logos, private label, licensing, and distribution.",
      },
    ],
  }),
  component: Wholesale,
});

const retailPackCheckoutUrl =
  "https://buy.stripe.com/00w28qgD40dScQEgcsdUY0G";

const industrialPackCheckoutUrl =
  "https://buy.stripe.com/8x25kC4UmgcQ7wkaS8dUY0I";

const masterCartonCheckoutUrl =
  "https://buy.stripe.com/9B6fZgfz07Gk5ocbWcdUY0J";

const quoteEmail =
  "mailto:info@kofenot.com?subject=KOFENOT%20Wholesale%20Quote&body=Company%3A%0AUse%20case%3A%0AQuantity%3A%0ARetail-ready%2C%20bare%20bulk%2C%20custom%20logo%2C%20private%20label%2C%20licensing%2C%20or%20distribution%3A%0ALogo%20or%20design%20needs%3A%0ANeed-by%20date%3A%0AShipping%20destination%3A%0A";

const pricing = [
  {
    title: "Retail-Ready Units",
    price: "$8",
    note: "each",
    detail: "30-unit minimum • Individually packaged • Ready to sell",
    cta: "Buy Retail Wholesale",
    url: retailPackCheckoutUrl,
  },
  {
    title: "Bare Pack",
    price: "$600",
    note: "per pack",
    detail: "100 bare units • $6 each • Bulk packed",
    cta: "Buy 100 Units",
    url: industrialPackCheckoutUrl,
  },
  {
    title: "Bare Master Carton",
    price: "$2,000",
    note: "per carton",
    detail: "400 bare units • $5 each • 4 bare packs",
    cta: "Buy 400 Units",
    url: masterCartonCheckoutUrl,
  },
  {
    title: "Custom / Private Label",
    price: "Quote",
    note: "",
    detail: "Logo, special packaging, licensing, distribution",
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
      "Ready-to-sell KOFENOT™ units for coffee shops, bookstores, museum shops, campus stores, and gift shops.",
  },
  {
    icon: PackageCheck,
    title: "Bare Bulk Wholesale",
    image: bareProduct,
    copy:
      "Bare unpackaged KOFENOT™ units for kits, events, custom packaging, resale, or distribution.",
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
    title: "Trade Shows",
    image: expo,
    copy:
      "A useful giveaway people keep after trade shows, expos, conferences, and company events.",
  },
  {
    icon: Handshake,
    title: "Private Label / Licensing",
    image: customLogoDisplay,
    copy:
      "For private label programs, licensing, regional distribution, and larger B2B deals.",
  },
];

const specs = [
  ["Product", "KOFENOT™ laptop wedge"],
  ["Trademark line", "KOFENOT: Make Your Laptop Coffee Shop-Friendly™"],
  ["Retail-ready wholesale", "$8 each / 30-unit minimum"],
  ["Bare industrial pack", "$600 / 100 bare units"],
  ["Bare master carton", "$2,000 / 400 bare units"],
  ["Custom logo / private label", "quote"],
  ["Bare unit size", '2.4" W × 3.4" H × 0.4" D'],
  ["Bare unit weight", "0.9 oz"],
  ["Retail pack weight", "2.1 oz"],
  ["Retail pack dimensions", '7" W x 13" H'],
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

const shippingSections = [
  {
    title: "Retail Packaging",
    items: [
      "Retail-ready KOFENOT™ units are individually packaged.",
      "Wholesale retail minimum: 30 units.",
      "Retail-ready units are priced at $8 each.",
    ],
  },
  {
    title: "Bare Bulk Packaging",
    items: [
      "Bare KOFENOT™ ships bare and unpackaged.",
      "Bare pack: 100 bare units for $600.",
      "Master carton: 400 bare units for $2,000.",
    ],
  },
  {
    title: "Production",
    items: [
      "Retail-ready and bare bulk orders ship from available inventory when in stock.",
      "Custom logo, private label, and licensing orders are scheduled individually.",
    ],
  },
  {
    title: "Shipping Methods",
    items: [
      "Small wholesale orders ship by parcel carrier.",
      "Larger orders may ship by freight.",
    ],
  },
  {
    title: "International Shipping",
    items: [
      "Worldwide shipping available.",
      "Shipping costs, duties, taxes, and import fees depend on destination.",
    ],
  },
  {
    title: "Requesting a Quote",
    items: [
      "Please include company name, quantity, intended use, branding requirements, delivery deadline, and shipping destination.",
    ],
  },
];

const faq = [
  [
    "What should I buy for resale?",
    "Retail-ready packaged units. They are $8 each with a 30-unit minimum.",
  ],
  [
    "What is the bare bulk option?",
    "Bare KOFENOT™ ships blank and unpackaged in a bare pack of 100 units for $600.",
  ],
  [
    "What is the master carton?",
    "One master carton contains 4 bare packs / 400 bare units for $2,000.",
  ],
  [
    "Are bare units retail-packaged?",
    "No. Bare units are bare and bulk packed. Retail-ready units are packaged individually.",
  ],
  [
    "Can I put my logo on KOFENOT™?",
    "Yes. Custom logo printing, packaging, and fulfillment are available by quote.",
  ],
  [
    "Can I sell KOFENOT™ under my own brand?",
    "Yes. Private-label programs are available for qualifying quantities.",
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
      <BrandDeservesBetterSection />
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
          <h3>Wholesale</h3>

          <h1 className="hero-title">
            RETAIL READY.
            <br />
            CUSTOM.
          </h1>

          <p className="hero-copy body-copy body-copy-compact">
            Retail-ready packaged units, bare bulk packs, master cartons,
            custom programs, private label, and licensing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing">
              <Button className="h-12 bg-[var(--neon)] px-7 font-black text-black hover:bg-[var(--neon-dim)]">
                Buy Wholesale
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href={quoteEmail}>
              <Button
                variant="outline"
                className="h-12 border-[rgba(0,255,0,0.55)] px-7 hover:bg-[rgba(0,255,0,0.08)] hover:text-[var(--neon)]"
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
        <h2 className="section-title">Wholesale Pricing</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((item) => (
            <article
              key={item.title}
              className="neon-border rounded-sm bg-[rgba(0,255,0,0.05)] p-6"
            >
              <p className="section-kicker">
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
                <Button className="h-11 bg-[var(--neon)] px-6 font-black text-black hover:bg-[var(--neon-dim)]">
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
      <h2 className="section-title">Programs &amp; Use Cases</h2>

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
              <item.icon className="h-7 w-7 text-[var(--neon)]" />

              <h3 className="mt-5 text-xl font-black uppercase">
                {item.title}
              </h3>

              <p className="body-copy body-copy-compact mt-3">
                {item.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BrandDeservesBetterSection() {
  return (
    <section className="section-band">
      <div className="page-section">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="section-title">
              YOUR BRAND DESERVES BETTER THAN{" "}
              <span className="neon-text">THROWAWAY MERCH</span>
            </h2>

            <a href={quoteEmail} className="mt-2 inline-flex">
              <Button className="h-12 bg-[var(--neon)] px-7 font-black text-black hover:bg-[var(--neon-dim)]">
                Put Your Logo Here
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="space-y-5 border-l border-[rgba(0,255,0,0.28)] pl-7">
            <p className="body-copy body-copy-compact">
              Your brand, printed on a cheap hat or T-shirt no one wants to be
              seen wearing, ends up in thrift stores—which may not align with
              your brand image.
            </p>

            <p className="body-copy body-copy-compact">
              More expensive electronic merchandise with cables that don’t fit
              anyone’s devices gets thrown directly into trade-show trash
              bins—and that’s not where your brand belongs.
            </p>

            <p className="body-copy body-copy-compact">
              Put your logo on an original accessory engineered for both
              precision and aesthetics—something people will appreciate and
              use.
            </p>

            <p className="body-copy body-copy-compact">
              Choose thoughtful, original design with a personal touch and a
              story behind it over generic merchandise that ends up filling
              trash bins and polluting the planet.
            </p>
          </div>
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
          <Ruler className="h-8 w-8 text-[var(--neon)]" />

          <div>
            <h2 className="section-title">Buyer Specs</h2>
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
                  <th className="w-1/3 bg-[rgba(0,255,0,0.06)] px-4 py-4 text-[var(--neon)] sm:px-5">
                    {label}
                  </th>

                  <td className="body-copy body-copy-compact px-4 py-4 sm:px-5">
                    {value}
                  </td>
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
      <h2 className="section-title">
        Product images for buyers and partners
      </h2>

      <p className="body-copy body-copy-compact mt-5 max-w-3xl">
        Download images for retail review, internal approval, wholesale
        listings, custom logo planning, and promotional presentations.
      </p>

      <div className="mt-10 grid gap-12">
        {mediaKit.map((group) => (
          <div key={group.group}>
            <p className="section-kicker">
              {group.group}
            </p>

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
      <div className="page-section">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-[var(--neon)]" />

              <h2 className="section-title">Shipping &amp; Production</h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {shippingSections.map((section) => (
                <article key={section.title} className="panel rounded-sm p-5">
                  <h3 className="text-lg font-black uppercase text-[var(--neon)]">
                    {section.title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="body-copy body-copy-compact flex gap-3"
                      >
                        <PackageCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel mt-[115px] self-start overflow-hidden rounded-sm">
            <img
              src={shipping}
              alt="KOFENOT wholesale shipping"
              className="aspect-square w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-black uppercase text-[var(--neon)]">
                Need a shipping quote?
              </h3>

              <p className="body-copy body-copy-compact mt-3">
                Send quantity, destination, deadline, and packaging needs.
              </p>

              <a href={quoteEmail} className="mt-5 inline-flex">
                <Button className="h-11 bg-[var(--neon)] px-6 font-black text-black hover:bg-[var(--neon-dim)]">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="page-section">
      <div className="page-section-narrow">
        <h2 className="section-title">FAQ</h2>

        <div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">
          {faq.map(([question, answer]) => (
            <div
              key={question}
              className="grid gap-2 py-6 md:grid-cols-[0.8fr_1.2fr]"
            >
              <h3 className="text-lg font-black uppercase">{question}</h3>
              <p className="body-copy body-copy-compact">{answer}</p>
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
        <BriefcaseBusiness className="mx-auto h-9 w-9 text-[var(--neon)]" />

        <p className="section-kicker mt-5">Order</p>

        <h2 className="section-title">Ready to order KOFENOT™ wholesale?</h2>

        <p className="body-copy body-copy-compact mx-auto mt-4 max-w-2xl">
          Retail-ready units are $8 each with a 30-unit minimum. Bare bulk
          starts at 100 bare units for $600. Master carton: 400 bare units for
          $2,000. Custom logo, private label, licensing, and distribution are
          quoted separately.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={retailPackCheckoutUrl}>
            <Button className="h-12 bg-[var(--neon)] px-8 font-black text-black hover:bg-[var(--neon-dim)]">
              Buy Retail Wholesale
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href={quoteEmail}>
            <Button
              variant="outline"
              className="h-12 border-[rgba(0,255,0,0.55)] px-8 hover:bg-[rgba(0,255,0,0.08)] hover:text-[var(--neon)]"
            >
              Request Bulk / Custom Quote
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
        <div className="grid grid-cols-2 gap-2">
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
