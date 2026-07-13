import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Download,
  FileArchive,
  FileSpreadsheet,
  FileText,
  Images,
  Presentation,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      {
        title: "KOFENOT Resources | Sales Decks, Specifications & Media",
      },
      {
        name: "description",
        content:
          "Download KOFENOT retail, corporate, and distribution sales decks, product specifications, product images, logos, and CSV product data.",
      },
    ],
  }),
  component: DownloadsPage,
});

const downloads = [
  {
    title: "Retail Sales Deck",
    format: "PDF",
    description:
      "For coffee shops, bookstores, office supply stores, campus stores, museum shops, airport stores, and other retailers.",
    file: "/downloads/kofenot-retail-sales-deck.pdf",
    icon: Presentation,
  },
  {
    title: "Corporate Programs Deck",
    format: "PDF",
    description:
      "For employee programs, client gifts, conferences, expos, trade shows, universities, custom branding, and promotional products.",
    file: "/downloads/kofenot-corporate-programs-deck.pdf",
    icon: Presentation,
  },
  {
    title: "Distribution Deck",
    format: "PDF",
    description:
      "For distributors, importers, private-label partners, licensing partners, and large-volume buyers.",
    file: "/downloads/kofenot-distribution-deck.pdf",
    icon: Presentation,
  },
  {
    title: "Product Specifications",
    format: "PDF",
    description:
      "Product dimensions, weight, packaging, pricing, minimum quantities, production, shipping, private label, and licensing information.",
    file: "/downloads/kofenot-product-specifications.pdf",
    icon: FileText,
  },
  {
    title: "Product Images",
    format: "ZIP",
    description:
      "High-resolution product, retail packaging, lifestyle, custom branding, and promotional images.",
    file: "/downloads/kofenot-product-images.zip",
    icon: Images,
  },
  {
    title: "Logo Package",
    format: "ZIP",
    description:
      "KOFENOT logos and approved brand assets for retail listings, presentations, press, and partner materials.",
    file: "/downloads/kofenot-logo-package.zip",
    icon: FileArchive,
  },
  {
    title: "CSV Product Data",
    format: "CSV",
    description:
      "Structured product information for retailer, distributor, inventory, and e-commerce systems.",
    file: "/downloads/kofenot-product-data.csv",
    icon: FileSpreadsheet,
  },
];

function DownloadsPage() {
  return (
    <main className="page-shell">
      <DownloadsHero />
      <DownloadsGrid />
      <DownloadsContact />
    </main>
  );
}

function DownloadsHero() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-1 pt-15 lg:px-6">
     
      <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
        KOFENOT™ Resource Center
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Sales presentations, product specifications, media assets, logos,
        and product data for retailers, corporations, distributors, and
        partners.
      </p>
    </section>
  );
}

function DownloadsGrid() {
  return (
    <section className="page-section">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {downloads.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="panel panel-hover flex min-h-[330px] flex-col rounded-sm p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[rgba(0,255,0,0.3)] bg-[rgba(0,255,0,0.07)]">
                  <Icon className="h-6 w-6 text-[var(--neon)]" />
                </div>

                <span className="rounded-sm border border-white/15 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                  {item.format}
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-black uppercase leading-tight">
                {item.title}
              </h2>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <a
                href={item.file}
                download
                className="mt-7 block"
              >
                <Button className="h-12 w-full bg-[var(--neon)] font-black uppercase tracking-[0.12em] text-black hover:bg-[var(--neon-dim)]">
                  <Download className="mr-2 h-4 w-4" />
                  Download {item.format}
                </Button>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function DownloadsContact() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-20 pt-6 lg:px-6">
      <div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 text-center neon-glow md:p-12">
        <p className="section-kicker">Need something else?</p>

        <h2 className="section-title mt-4">
          Request additional KOFENOT™ materials.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Contact us for custom quotations, samples, artwork templates,
          packaging information, licensing discussions, or additional
          high-resolution files.
        </p>

        <a
          href="mailto:info@kofenot.com?subject=KOFENOT%20Partner%20Materials"
          className="mt-7 inline-flex"
        >
          <Button className="h-12 bg-[var(--neon)] px-8 font-black text-black hover:bg-[var(--neon-dim)]">
            Contact KOFENOT
          </Button>
        </a>
      </div>
    </section>
  );
}
