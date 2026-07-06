import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  FileSpreadsheet,
  ImageIcon,
  Package,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import giftBox from "@/assets/kofenot-gift-box.jpeg";
import corp from "@/assets/kofenot-corp.jpeg";
import safeSpill from "@/assets/safe-spill.jpeg";
import threeDevices from "@/assets/kofenot-3-devices.jpg";

export const Route = createFileRoute("/retail-kit")({
  component: RetailKit,
});

const productCsv = `Image,SKU,Product Name,Brand,Category,Description,MSRP Retail Price USD,Wholesale Price USD,Case Pack,Country of Origin,Inventory,Product URL
kofenot-retail-pack.jpeg,KFN-001,KOFENOT™ Laptop Wedge,KOFENOT™,Laptop Accessories,"Pocket-size laptop wedge that improves typing comfort, helps redirect accidental spills away from the keyboard, increases airflow beneath the laptop, and doubles as a phone stand.",15.00,,30,China,4500,https://kofenot.com
`;

function downloadCsv() {
  const blob = new Blob([productCsv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "KOFENOT_Product_Submission.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

const assets = [
  {
    title: "Retail Package",
    fileName: "kofenot-retail-pack.jpeg",
    image: giftBox,
    description: "Use this as the main product image for the buyer CSV.",
  },
  {
    title: "Hero Lifestyle Image",
    fileName: "kofenot-hero.jpeg",
    image: corp,
    description: "Use this for buyer review, presentations, and retail context.",
  },
  {
    title: "Spill Protection Image",
    fileName: "kofenot-spill-protection.jpeg",
    image: safeSpill,
    description: "Use this to explain the product benefit visually.",
  },
  {
    title: "Three Devices Image",
    fileName: "kofenot-3-devices.jpeg",
    image: threeDevices,
    description: "Use this to show laptop, phone, and tablet versatility.",
  },
];

function RetailKit() {
  return (
    <main className="page-shell">
      <section className="relative min-h-screen overflow-hidden border-b border-[rgba(0,255,0,0.14)]">
        <img
          src={corp}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] flex-col justify-center px-6 py-16 lg:px-10">
          <p className="section-kicker">Retail Buyer Assets</p>

          <h1 className="mt-5 max-w-5xl text-[56px] font-black italic leading-[0.9] tracking-tight neon-text md:text-[96px] lg:text-[118px]">
            KOFENOT™
            <br />
            Product
            <br />
            Submission
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
            Download the buyer CSV and product images for retail review,
            gift-store onboarding, POS import, and product approval.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={downloadCsv}
              className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]"
            >
              <FileSpreadsheet className="mr-2 h-5 w-5" />
              Download CSV
            </Button>

            <a href="#images">
              <Button className="h-12 bg-red-600 px-7 font-black text-white hover:bg-red-500">
                Product Images
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-14 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-sm p-7">
            <Package className="h-10 w-10 text-[color:var(--neon)]" />

            <h2 className="mt-5 text-4xl font-black italic leading-none text-white">
              Product Details
            </h2>

            <div className="mt-6 space-y-3 text-sm leading-6 text-white/75">
              <p>
                <strong className="text-white">Product:</strong> KOFENOT™
                Laptop Wedge
              </p>
              <p>
                <strong className="text-white">SKU:</strong> KFN-001
              </p>
              <p>
                <strong className="text-white">Retail Price:</strong> $15.00
              </p>
              <p>
                <strong className="text-white">Case Pack:</strong> 30 units
              </p>
              <p>
                <strong className="text-white">Inventory:</strong> 4,500 units
              </p>
              <p>
                <strong className="text-white">Country of Origin:</strong>{" "}
                China
              </p>
            </div>
          </div>

          <div className="panel rounded-sm p-7">
            <h2 className="text-4xl font-black italic leading-none text-white">
              CSV Description
            </h2>

            <p className="mt-5 text-base leading-7 text-white/75">
              Pocket-size laptop wedge that improves typing comfort, helps
              redirect accidental spills away from the keyboard, increases
              airflow beneath the laptop, and doubles as a phone stand.
            </p>

            <button
              type="button"
              onClick={downloadCsv}
              className="mt-7 inline-flex h-12 items-center rounded-sm bg-[color:var(--neon)] px-7 text-sm font-black uppercase tracking-[0.16em] text-black hover:bg-[color:var(--neon-dim)]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CSV File
            </button>
          </div>
        </div>
      </section>

      <section
        id="images"
        className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-14 lg:px-10"
      >
        <p className="section-kicker">Downloadable Product Images</p>

        <h2 className="section-title">
          Images for <span className="neon-text">Retail Review</span>
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {assets.map((asset) => (
            <article
              key={asset.title}
              className="group overflow-hidden rounded-sm bg-black"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={asset.image}
                  alt={asset.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-white/10 bg-[#080908] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black italic text-white">
                      {asset.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/65">
                      {asset.description}
                    </p>

                    <p className="mt-2 text-xs text-white/45">
                      File name: {asset.fileName}
                    </p>
                  </div>

                  <ImageIcon className="h-6 w-6 shrink-0 text-[color:var(--neon)]" />
                </div>

                <a
                  href={asset.image}
                  download={asset.fileName}
                  className="mt-5 inline-flex h-11 items-center rounded-sm bg-red-600 px-5 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-red-500"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Image
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
