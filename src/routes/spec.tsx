import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, PackageCheck, Ruler, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/spec")({
  head: () => ({
    meta: [
      { title: "KOFENOT Spec Sheet | OEM Promo Wedge" },
      {
        name: "description",
        content:
          "Technical specs and pricing tiers for the KOFENOT branded laptop wedge. Download the one-page PDF.",
      },
      { property: "og:title", content: "KOFENOT Spec Sheet" },
      {
        property: "og:description",
        content:
          "1 oz, 3.4 x 2.4 x 0.4 in folded. RoHS ABS. 2.0 x 1.6 in branding zone. FOB California.",
      },
    ],
  }),
  component: Spec,
});

const summaryCards = [
  { icon: Ruler, title: "Pocket-flat", copy: "3.4 x 2.4 x 0.4 in folded" },
  { icon: ShieldCheck, title: "RoHS ABS", copy: "High-impact compliant material" },
  { icon: PackageCheck, title: "OEM-ready", copy: "Blank, branded, or licensed programs" },
];

const technicalSpecs = [
  ["Material", "High-impact RoHS-compliant ABS"],
  ["Weight", "1 oz per unit"],
  ["Folded Size", "3.4 in L x 2.4 in W x 0.4 in H"],
  ["Branding Area", "2.0 in L x 1.6 in W, front-facing"],
  ["Construction", "Pure mechanical, zero adhesives or magnets"],
  ["Compatibility", "Most laptops, tablets, and phones"],
  ["Eronomics", "Posture support and spill deflection"],
  ["Production", "FOB California, OEM-ready"],
  ["IP Status", "Utility patent pending, trademark pending"],
];

const pricingTiers = [
  ["2-Unit Gift Box", "$30", "US shipping included. Credited toward OEM order."],
  ["20 Gift Boxes Pack", "$480", "Bulk retail and event-ready."],
  ["Bulk OEM Min Order", "Quote", "100-unit pack or 400-unit master case. Ships blank."],
  [
    "Enterprise / Licensing",
    "Quote",
    "OEM manufacturing, private label, and licensing available.",
  ],
];

function Spec() {
  return (
    <main className="page-shell">
      <HeroSection />
      <SummarySection />
      <DetailsSection />
      <ProcurementSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="page-hero">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,0,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_22%)]" />

      <div className="page-hero-inner">
        <div className="max-w-4xl">
          <h3>Spec Sheet 2026</h3>
          <h1 className="hero-title">KOFENOT TECHNICAL & COMMERCIAL</h1>
          <p className="hero-copy body-copy">
            One-page reference for procurement, promotional agencies, OEM
            partners, and enterprise buyers.
          </p>
          <a href="/kofeenot-spec.pdf" download className="mt-8 inline-block">
            <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function SummarySection() {
  return (
    <section className="page-section">
      <div className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((item) => (
          <article key={item.title} className="panel rounded-sm p-6">
            <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
            <h2 className="mt-5 text-3xl font-black tracking-tight">
              {item.title}
            </h2>
            <p className="body-copy mt-3">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DetailsSection() {
  return (
    <section className="page-section pt-0">
      <div className="grid gap-5 md:grid-cols-2">
        <TechnicalSpecsPanel />
        <PricingTiersPanel />
      </div>
    </section>
  );
}

function ProcurementSection() {
  return (
    <section className="page-section-narrow pt-0 text-center">
      <FileText className="mx-auto h-8 w-8 text-[color:var(--neon)]" />
      <h2 className="section-title">Need procurement details?</h2>
      <p className="body-copy mx-auto mt-4 max-w-2xl">
        Download the PDF for a compact buyer-facing sheet, or contact KOFENOT
        for custom branding, wholesale, OEM, or licensing requirements.
      </p>
    </section>
  );
}

function TechnicalSpecsPanel() {
  return (
    <section className="panel rounded-sm p-6">
      <h3 className="border-b border-[rgba(0,255,0,0.25)] pb-2">
        Technical Specifications
      </h3>
      <dl className="mt-4 divide-y divide-[rgba(0,255,0,0.1)]">
        {technicalSpecs.map(([key, value]) => (
          <div key={key} className="grid gap-2 py-3 sm:grid-cols-[140px,1fr]">
            <dt><h3>{key}</h3></dt>
            <dd className="body-copy">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function PricingTiersPanel() {
  return (
    <section className="panel rounded-sm p-6">
      <h3 className="border-b border-[rgba(0,255,0,0.25)] pb-2">
        Pricing Tiers
      </h3>
      <div className="mt-4 grid gap-3">
        {pricingTiers.map(([name, price, description]) => (
          <article
            key={name}
            className="grid gap-4 rounded-sm border border-[rgba(0,255,0,0.3)] p-4 sm:grid-cols-[1fr_auto]"
          >
            <div>
              <h3>{name}</h3>
              <p className="body-copy mt-1">{description}</p>
            </div>
            <div className="neon-text text-xl font-black">{price}</div>
          </article>
        ))}
      </div>
      <p className="body-copy mt-4">
        24-48h dispatch | FOB SF Bay Area, CA, US | info@kofenot.com
      </p>
    </section>
  );
}
