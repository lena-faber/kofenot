import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, FileSpreadsheet } from "lucide-react";

import { Button } from "@/components/ui/button";

import retailPackSipSafeBack from "@/assets/kofenot-retail-pack-00.jpg";
import retailPackDad from "@/assets/kofenot-retail-pack-01.jpg";
import bareProduct from "@/assets/kofenot-retail-pack-02.jpg";
import retailPackSipSafeFront from "@/assets/kofenot-retail-pack-03.jpg";
import retailPackPlanet from "@/assets/kofenot-retail-pack-04.jpg";

export const Route = createFileRoute("/retail-kit")({
  component: RetailKit,
});

const productDescription =
  "Pocket-size laptop wedge that improves typing comfort, helps redirect accidental spills away from the keyboard, increases airflow beneath the laptop, and doubles as a phone stand.";

const csv = `Image,SKU,Product Name,Trademark,Brand,Category,Description,Print Options,MSRP,Wholesale Price,Case Pack,Mixed Assortment,Product Size,Product Weight,Retail Pack Weight,Country of Origin,Inventory,Product URL
kofenot-retail-pack-03.jpg,KFN-001,KOFENOT™ Laptop Wedge,"KOFENOT: Make Your Laptop Coffee Shop-Friendly™",KOFENOT™,Laptop Accessories,"${productDescription}","SIP SAFE, I 💚 Planet Earth, I ❤️ Dad",15.00,,30,Yes,"2.4 in W x 3.4 in H x 0.4 in D",0.9 oz,2.1 oz,China,4500,https://kofenot.com
`;

const retailDesigns = [
  {
    title: "SIP SAFE",
    image: retailPackSipSafeFront,
    description: "Retail-ready package.",
  },
  {
    title: "I 💚 Planet Earth",
    image: retailPackPlanet,
    description: "Retail-ready package.",
  },
  {
    title: "I ❤️ Dad",
    image: retailPackDad,
    description: "Retail-ready package.",
  },
];

const productImages = [
  {
    title: "Bare Product",
    image: bareProduct,
    description: "KOFENOT™ shown outside the retail package.",
  },
];

const packageImages = [
  {
    title: "Package Front",
    image: retailPackSipSafeFront,
    description: "Front retail packaging.",
  },
  {
    title: "Package Back",
    image: retailPackSipSafeBack,
    description: "Back retail packaging.",
  },
];

const specs = [
  ["Product", "KOFENOT™ Laptop Wedge"],
  ["Trademark", "KOFENOT™: Make Your Laptop Coffee Shop-Friendly"],
  ["SKU", "KFN-001"],
  ["Brand", "KOFENOT™"],
  ["Category", "Laptop Accessories"],
  ["MSRP", "$15.00"],
  ["Case Pack", "30 units"],
  ["Mixed Assortment", "Yes"],
  ["Retail Designs", "SIP SAFE · I 💚 Planet Earth · I ❤️ Dad"],
  ["Product Size", '2.4" W × 3.4" H × 0.4" D'],
  ["Product Weight", "0.9 oz"],
  ["Retail Pack Weight", "2.1 oz"],
  ["Inventory", "4,500 units"],
  ["Country of Origin", "China"],
];

function downloadCsv() {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "KOFENOT_Product_Submission.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

function AssetCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <article className="overflow-hidden rounded-sm border border-white/10 bg-[#080908]">
      <a
        href={image}
        target="_blank"
        rel="noreferrer"
        className="block bg-white p-3"
      >
        <img
          src={image}
          alt={title}
          className="aspect-square w-full object-contain"
        />
      </a>

      <div className="border-t border-white/10 p-4">
        <h3 className="text-lg font-black italic leading-tight text-[color:var(--neon)]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-5 text-white/60">{description}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={image}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-white/15 px-3 text-xs font-black uppercase tracking-[0.12em] text-white hover:bg-white/10"
          >
            <Eye className="mr-2 h-4 w-4" />
            Open
          </a>

          <a
            href={image}
            download
            className="inline-flex h-10 items-center justify-center rounded-sm bg-red-600 px-3 text-xs font-black uppercase tracking-[0.12em] text-white hover:bg-red-500"
          >
            <Download className="mr-2 h-4 w-4" />
            File
          </a>
        </div>
      </div>
    </article>
  );
}

function RetailKit() {
  return (
    <main className="page-shell">
      <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10">
        <p className="section-kicker">Retail Buyer Assets</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <h1 className="text-[52px] font-black italic leading-[0.9] tracking-tight neon-text md:text-[86px] lg:text-[104px]">
              KOFENOT™
              <br />
              Retail Kit
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/75">
              CSV, product specifications, downloadable retail images, and
              packaging assets.
            </p>
          </div>

          <div className="rounded-sm bg-white p-3 shadow-2xl">
            <img
              src={retailPackSipSafeFront}
              alt="KOFENOT SIP SAFE retail package"
              className="aspect-[4/5] w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={downloadCsv}
            className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]"
          >
            <FileSpreadsheet className="mr-2 h-5 w-5" />
            Download CSV
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-12 lg:px-10">
        <p className="section-kicker">Product Specifications</p>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="rounded-sm border border-white/10 bg-[#080908] p-4"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--neon)]">
                {label}
              </p>
              <p className="mt-2 text-base font-bold leading-6 text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-12 lg:px-10">
        <p className="section-kicker">Retail Designs</p>

        <h2 className="section-title">
          Downloadable <span className="neon-text">Retail Images</span>
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {retailDesigns.map((item) => (
            <AssetCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-12 lg:px-10">
        <p className="section-kicker">Product Image</p>

        <h2 className="section-title">
          Bare <span className="neon-text">KOFENOT™</span>
        </h2>

        <div className="mt-8 max-w-sm">
          {productImages.map((item) => (
            <AssetCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-12 lg:px-10">
        <p className="section-kicker">Packaging</p>

        <h2 className="section-title">
          Package <span className="neon-text">Front + Back</span>
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {packageImages.map((item) => (
            <AssetCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
