import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
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

import giftBox from "@/assets/kofenot-gift-box.jpeg";
import wholesalePack from "@/assets/kofenot-wholesale-pack.jpeg";
import brand from "@/assets/kofeenot-brand.jpg";
import corpGift from "@/assets/kofenot-corp-gift.jpeg";
import expo from "@/assets/kofenot-expo.jpeg";
import shipping from "@/assets/kofeenot-shipping.jpeg";

import retailPackSipSafeBack from "@/assets/kofenot-retail-pack-00.jpg";
import retailPackDad from "@/assets/kofenot-retail-pack-01.jpg";
import bareProduct from "@/assets/kofenot-retail-pack-02.jpg";
import retailPackSipSafeFront from "@/assets/kofenot-retail-pack-03.jpg";
import retailPackPlanet from "@/assets/kofenot-retail-pack-04.jpg";
import yourLogoHere from "@/assets/kofenot-your-logo-here.jpeg";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      {
        title: "KOFENOT Wholesale | Retail Kit, Custom Logo & Corporate Orders",
      },
      {
        name: "description",
        content:
          "Wholesale KOFENOT for resale, retail-ready packaging, custom logos, corporate gifts, events, white label, and licensing.",
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
  "Custom logo printing",
  "Corporate gifts",
  "Conference and trade-show orders",
  "Employee welcome kits",
  "Promotional product programs",
  "White-label programs",
  "Licensing opportunities",
];

const retailImages = [
  {
    img: retailPackSipSafeFront,
    title: "SIP SAFE",
    copy: "Retail-ready package.",
    filename: "kofenot-retail-pack-sip-safe-front.jpg",
  },
  {
    img: retailPackPlanet,
    title: "I 💚 Planet Earth",
    copy: "Retail-ready package.",
    filename: "kofenot-retail-pack-planet-earth.jpg",
  },
  {
    img: retailPackDad,
    title: "I ❤️ Dad",
    copy: "Retail-ready package.",
    filename: "kofenot-retail-pack-dad.jpg",
  },
];

const productImages = [
  {
    img: bareProduct,
    title: "Bare KOFENOT™",
    copy: "Product outside the retail package.",
    filename: "kofenot-bare-product.jpg",
  },
  {
    img: yourLogoHere,
    title: "Your Logo Here",
    copy: "Example surface for custom branding.",
    filename: "kofenot-your-logo-here.jpg",
  },
];

const packagingImages = [
  {
    img: retailPackSipSafeFront,
    title: "Package Front",
    copy: "Front retail packaging.",
    filename: "kofenot-package-front.jpg",
  },
  {
    img: retailPackSipSafeBack,
    title: "Package Back",
    copy: "Back retail packaging.",
    filename: "kofenot-package-back.jpg",
  },
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

const shippingOptions = [
  "Small wholesale orders ship as retail-ready packs or boxes.",
  "Bulk and custom orders can be quoted by destination, timeline, and packaging format.",
  "Shipping destination must be included in custom quote requests.",
];

const faq = [
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
      <CustomSection />
      <ShippingSection />
      <FaqSection />
      <OrderSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="page-hero">
      <img
        src={brand}
        alt="KOFENOT wholesale"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay" />

      <div className="page-hero-inner">
        <div className="max-w-3xl">
          <p className="section-kicker">Wholesale</p>

          <h1 className="hero-title">
            STANDARD WHOLESALE
            <br />
            <span className="neon-text">OR CUSTOM QUOTE</span>
          </h1>

          <p className="hero-copy">
            Buy retail-ready KOFENOT™ for resale now. Request a quote for logos,
            custom packaging, corporate gifts, white label, licensing, or larger
            quantities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing">
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                See Pricing
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
        <p className="section-kicker">Wholesale pricing</p>
        <h2 className="section-title">Buy standard wholesale now.</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4">
            {wholesalePrices.map((item) => (
              <PriceCard key={item.format} item={item} />
            ))}
          </div>

          <div className="neon-border rounded-sm bg-[rgba(0,255,0,0.05)] p-8">
            <p className="section-kicker">Custom Quote</p>

            <h3 className="text-3xl font-black uppercase">
              Quote anything custom.
            </h3>

            <p className="mt-4 text-muted-foreground">
              Logos, private packaging, corporate gifts, fulfillment, white
              label, licensing, and larger quantities are quoted by project.
            </p>

            <div className="mt-8 grid gap-4">
              {customPrograms.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[color:var(--neon)]" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a href={quoteEmail} className="mt-8 inline-flex">
              <Button className="h-12 bg-[color:var(--neon)] px-8 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Request Quote
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
      <p className="section-kicker">Retail Kit</p>
      <h2 className="section-title">Downloadable product images.</h2>

      <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
        Images for wholesale buyers, coffee shops, gift shops, coworking spaces,
        campus stores, bookstores, corporate buyers, and promotional partners.
      </p>

      <div className="mt-10">
        <p className="section-kicker">Retail package images</p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {retailImages.map((item) => (
            <DownloadCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-[rgba(0,255,0,0.18)] pt-10">
        <p className="section-kicker">Product + Custom Logo</p>

        <h3 className="mt-2 text-4xl font-black italic neon-text">
          Bare KOFENOT™ + Your Logo Here
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {productImages.map((item) => (
            <DownloadCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-[rgba(0,255,0,0.18)] pt-10">
        <p className="section-kicker">Packaging</p>

        <h3 className="mt-2 text-4xl font-black italic neon-text">
          Package Front + Back
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {packagingImages.map((item) => (
            <DownloadCard key={item.title} item={item} />
          ))}
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

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ImageCard item={{ img: giftBox, label: "Retail box" }} />
        <ImageCard item={{ img: wholesalePack, label: "Wholesale pack" }} />
        <ImageCard item={{ img: corpGift, label: "Corporate gift" }} />
        <ImageCard item={{ img: expo, label: "Event order" }} />
      </div>
    </section>
  );
}

function CustomSection() {
  return (
    <section id="custom" className="section-band">
      <div className="page-section grid gap-8 lg:grid-cols-2">
        <div className="panel overflow-hidden rounded-sm">
          <img
            src={yourLogoHere}
            alt="Your logo on KOFENOT"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-kicker">Custom</p>

          <h2 className="section-title">
            Your logo, your event, your program.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Standard wholesale has checkout pricing. Anything with logo,
            packaging, fulfillment, white label, licensing, or special quantity
            needs a quote.
          </p>

          <div className="mt-6 grid gap-3">
            {customPrograms.map((item) => (
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
      </div>
    </section>
  );
}

function ShippingSection() {
  return (
    <section id="shipping" className="page-section">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Truck className="h-9 w-9 text-[color:var(--neon)]" />

          <p className="section-kicker mt-5">Shipping</p>

          <h2 className="section-title">Shipping options by order type.</h2>

          <div className="mt-6 grid gap-4">
            {shippingOptions.map((item) => (
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
    <section id="faq" className="section-band">
      <div className="page-section-narrow">
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
          Checkout for resale. Email for custom.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Retail Pack and Retail Box have public wholesale checkout. Logos,
          custom packaging, fulfillment, white label, licensing, and larger
          quantities are quoted.
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

function DownloadCard({
  item,
}: {
  item: {
    img: string;
    title: string;
    copy: string;
    filename: string;
  };
}) {
  return (
    <article className="panel overflow-hidden rounded-sm">
      <img
        src={item.img}
        alt={item.title}
        className="aspect-square w-full bg-white object-contain"
      />

      <div className="p-4">
        <h3 className="font-black italic text-[color:var(--neon)]">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">{item.copy}</p>

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

          <a href={item.img} download={item.filename}>
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
