import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentType, ReactNode } from "react";
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
import bareProduct from "@/assets/blank-kofenot.png";
import retailPackSipSafeFront from "@/assets/kofenot-retail-pack-03.jpg";
import retailPackPlanet from "@/assets/kofenot-retail-pack-04.jpg";
import francisco from "@/assets/i-love-sf.png";
import customLogoDisplay from "@/assets/referral.jpeg";
import spillSafeProduct from "@/assets/spill-safe.png";
import yourlogo from "@/assets/your-logo.png";
import exposure from "@/assets/kofenot-your-logo-here-00.jpg";
import jpGraphicsLogo from "@/assets/JP-Graphics-Logo.png";

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
    cta: "Buy Retail",
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
    title: "Bare Bulk for Customzation",
    image: bareProduct,
    copy:
      "Bulk unbranded KOFENOT™ units ready for custom printing and packaging, private labels, resale, and distribution.",
  },
  {
    icon: Tag,
    title: "Brand Exposure",
    image: exposure,
    copy:
      "Put your logo where people actually work. Perfect for conferences, coworking spaces, universities, cafés, aeroports, and libraries.",
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
        img: yourlogo,
        title: "Your Logo Here",
        file: "your-logo.jpg",
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

type FaqItem = [string, ReactNode];

type FaqGroup = {
  label: string;
  items: FaqItem[];
};

const faqGroups: FaqGroup[] = [
  {
    label: "BUYING & BULK ORDERS",
    items: [
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
    ],
  },
  {
    label: "CUSTOM BRANDING",
    items: [
      [
        "Can you print our logo on KOFENOT™?",
        "Yes. Custom logo printing is available for corporate gifts, retail, coffee shops, universities, conferences, and promotional campaigns.",
      ],
      [
        "Can you create custom retail packaging?",
        "Yes. We create custom retail packaging, private-label packaging, branded inserts, and retail-ready displays tailored to your brand.",
      ],
      [
        "Who handles printing and packaging?",
        <>
          Custom printing and retail packaging are produced in partnership with{" "}
          <a
            href="https://jp-graphics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[color:var(--neon)]"
          >
            J P Graphics, Inc.
          </a>
          , our Silicon Valley partner.{" "}
        </>,
      ],
      [
        "Can I sell KOFENOT™ under my own brand?",
        "Yes. Private-label programs are available for qualifying quantities.",
      ],
    ],
  },
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
      <BrandDeservesBetterSection />
      <ProgramsSection />
      <MediaKitSection />
      <PricingSection />
      <SpecsSection />
      <ShippingSection />
      <PrintingPartnerSection />
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

          <h1>
            RETAIL READY.
            <br />
            CUSTOM.
          </h1>

          <p className="hero-copy body-copy">
            Retail-ready packaged units, bare bulk packs, master cartons,
            custom programs, private label, and licensing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing">
              <Button className="h-12 bg-[var(--neon)] px-7 font-black text-black hover:bg-[var(--neon-dim)]">
                Buy Retail
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
        <a href="#programs">Programs</a>
        <a href="#media">Product Images</a>
        <a href="#pricing">Pricing</a>
        <a href="#specs">Specs</a>
        <a href="#shipping">Shipping</a>
        <a href="#faq">FAQ</a>
        <a href="#order">Order</a>
        <Link to="/referrals">Referral Program</Link>
      </div>
    </nav>
  );
}

function BrandDeservesBetterSection() {
  return (
    <section className="border-t border-[rgba(0,255,0,0.22)] py-10 lg:py-14">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
  <div className="grid lg:grid-cols-2">
        <div className="flex flex-col px-6 lg:px-8">
          <h2>
            BRAND. <br/>NO THROWAWAYS.
          </h2>

          <div className="mt-2 max-w-[760px] space-y-6">
            <p>
              Too many branded hats and T-shirts end up in thrift stores instead
              of reaching the people you wanted to reach.
            </p>

            <p>
              Electronic gadgets often come with incompatible ports and end up
              in the trash right at the trade show.
            </p>

            <p className="font-bold">
              Help keep the <span className="text-[#00ff00]">planet cleaner</span> with a <span className="text-[#00ff00]">thoughtfully crafted accessory </span>
              instead of generic merchandise that often ends up in the trash.
            </p>
          </div>

          <a
            href={quoteEmail}
            className="mt-10 inline-flex w-fit items-center gap-8 bg-[#00ff00] px-8 py-4 font-bold uppercase tracking-[0.12em] text-black"
          >
            Request Branding / Packaging
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={spillSafeProduct}
            alt="KOFENOT Spill Safe"
            className="absolute left-1/2 top-1/2 h-full w-auto max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>
      </div>
          </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="section-band">
      <div className="page-section">
        <h2>Wholesale Pricing</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((item) => (
            <article
              key={item.title}
              className="neon-border rounded-sm bg-[rgba(0,255,0,0.05)] p-6"
            >
              <h3>{item.title}</h3>

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

              <p className="mt-3">{item.detail}</p>

              <a href={item.url} target="_blank"
  rel="noopener noreferrer"
                className="mt-6 inline-flex">
                
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
      <h2>Programs &amp; Use Cases</h2>

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
              <h3 className="mt-5">{item.title}</h3>
              <p className="body-copy mt-3">{item.copy}</p>
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
          <Ruler className="h-8 w-8 text-[var(--neon)]" />
          <h2>Buyer Specs</h2>
        </div>

        <div className="mt-8 overflow-hidden border border-[rgba(0,255,0,0.22)]">
          <table className="responsive-table text-left text-sm sm:text-lg">
            <tbody>
              {specs.map(([label, value]) => (
                <tr
                  key={label}
                  className="border-t border-[rgba(0,255,0,0.18)] first:border-t-0"
                >
                  <th className="w-1/3 bg-[rgba(0,255,0,0.06)] px-4 py-4 sm:px-5">
                    <h3>{label}</h3>
                  </th>

                  <td className="body-copy px-4 py-4 sm:px-5">
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
      <h2>
        Product images for buyers and partners
      </h2>

      <p className="body-copy mt-5 max-w-3xl">
        Download images for retail review, internal approval, wholesale
        listings, custom logo planning, and promotional presentations.
      </p>

      <div className="mt-10 grid gap-12">
        {mediaKit.map((group) => (
          <div key={group.group}>
            <h3>{group.group}</h3>

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
              <h2>Shipping &amp; Production</h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {shippingSections.map((section) => (
                <article key={section.title} className="panel rounded-sm p-5">
                  <h3>{section.title}</h3>

                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="body-copy flex gap-3">
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
              <h3>Need a freight quote?</h3>

              <p className="body-copy mt-3">
                Send quantity, destination, deadline, and packaging requirements.
We can also ship using your UPS, FedEx, or DHL account.
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

function PrintingPartnerSection() {
  return (
    <section className="section-band">
      <div className="page-section-narrow">
        <h3>FEATURED IN PARTNER&apos;S NEWSLETTER</h3>

        <h2>
          Printing & Packaging
        </h2>

        <div className="panel mt-8 overflow-visible rounded-sm border-l-4 border-l-[var(--neon)] p-8 md:p-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
            <a
              href="https://jp-graphics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center transition hover:opacity-90"
              aria-label="Visit J P Graphics, Inc."
            >
              <img
                src={jpGraphicsLogo}
                alt="J P Graphics, Inc."
                className="block h-auto w-[110px]"
              />
            </a>

            <div className="min-w-0 flex-1 text-center md:text-left">
              <blockquote className="relative mx-auto max-w-2xl md:mx-0">
                <span
                  className="pointer-events-none absolute -left-1 top-0 select-none font-serif text-6xl leading-none text-neon md:-left-3"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="relative pl-6 text-lg italic leading-relaxed text-white md:pl-8 md:text-xl">
                  We&apos;re{" "}
                  <a
                    href="https://createsend.com/t/i-72387891A36D50542540EF23F30FEDED"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--neon)] not-italic"
                  >
                    featuring
                  </a>{" "}
                  the founder of KOFENOT™, and the clever laptop wedge she invented.<br/>
                  We were happy to step in as a printing partner. 
                  <br/>J P Graphics is proud to support Silicon Valley businesses
                  with high-quality packaging and printing services
                </p>
                <footer className="mt-5 pl-6 text-sm font-bold uppercase tracking-[0.1em] text-[var(--neon)] md:pl-8">
                  <cite className="not-italic">
                    <a
                      href="https://jp-graphics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[color:var(--neon)]"
                    >
                      J P Graphics, Inc.
                    </a>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="page-section">
      <div className="page-section-narrow">
        <h2>FAQ</h2>

        <div className="mt-7 flex flex-col gap-12">
          {faqGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00ff00]">
                {group.label}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map(([question, answer]) => (
                  <article
                    key={question}
                    className="flex h-full flex-col rounded-sm border border-[rgba(0,255,0,0.22)] bg-[#212121] p-5 transition-colors hover:border-[rgba(0,255,0,0.55)] md:p-6"
                  >
                    <h3 className="text-[10px] font-bold uppercase leading-snug tracking-[0.1em] text-[#00ff00]">
                      {question}
                    </h3>
                    <div className="body-copy mt-3 flex-1 leading-relaxed text-white">
                      {answer}
                    </div>
                  </article>
                ))}
              </div>
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
        <h3 className="mt-5">Order</h3>

        <h2>Ready to order KOFENOT™ wholesale?</h2>

        <p className="body-copy mx-auto mt-4 max-w-2xl">
          Retail-ready units are $8 each with a 30-unit minimum. Bare bulk
          starts at 100 bare units for $600. Master carton: 400 bare units for
          $2,000. Custom logo, private label, licensing, and distribution are
          quoted separately.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
  href={retailPackCheckoutUrl}
  target="_blank"
  rel="noopener noreferrer"
>
            <Button className="h-12 bg-[var(--neon)] px-8 font-black text-black hover:bg-[var(--neon-dim)]">
              Buy Wholesale
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
   <article className="panel overflow-hidden rounded-sm flex flex-col">
  <div className="flex-1 overflow-hidden">
    <img
      src={item.img}
      alt={item.title}
      className="h-full object-cover"
    />
  </div>

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
