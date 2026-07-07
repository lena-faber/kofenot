import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Eye, FileSpreadsheet } from "lucide-react";

import { Button } from "@/components/ui/button";

import retailPackBack from "@/assets/kofenot-retail-pack-00.jpg";
import retailPackSipSafe from "@/assets/kofenot-retail-pack-01.jpg";
import productOpenView from "@/assets/kofenot-retail-pack-02.jpg";
import retailPackFront from "@/assets/kofenot-retail-pack-03.jpg";
import customPrintExample from "@/assets/kofenot-retail-pack-04.jpg";

export const Route = createFileRoute("/retail-kit")({
  component: RetailKit,
});

const productDescription =
  "Pocket-size laptop wedge that improves typing comfort, helps redirect accidental spills away from the keyboard, increases airflow beneath the laptop, and doubles as a phone stand.";

const csv = `Image,SKU,Product Name,Brand,Category,Description,MSRP,Wholesale Price,Case Pack,Country of Origin,Inventory,Product URL
kofenot-retail-pack-front.jpg,KFN-001,KOFENOT™ Laptop Wedge,KOFENOT™,Laptop Accessories,"${productDescription}",15.00,,30,China,4500,https://kofenot.com
`;

const images = [
  {
    title: "Retail Package — Front",
    fileName: "kofenot-retail-pack-front.jpg",
    image: retailPackFront,
    description: "Primary retail package image.",
  },
  {
    title: "Product — Open View",
    fileName: "kofenot-product-open-view.jpg",
    image: productOpenView,
    description: "Clean product-only image.",
  },
  {
    title: "Retail Package — Back",
    fileName: "kofenot-retail-pack-back.jpg",
    image: retailPackBack,
    description: "Back of package with instructions.",
  },
  {
    title: "SIP SAFE Package",
    fileName: "kofenot-retail-pack-sip-safe.jpg",
    image: retailPackSipSafe,
    description: "Retail package with SIP SAFE print.",
  },
  {
    title: "Custom Print Example",
    fileName: "kofenot-custom-print-example.jpg",
    image: customPrintExample,
    description: "Custom print / gift version.",
  },
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

function RetailKit() {
  return (
    <main className="page-shell">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[rgba(0,255,0,0.14)]">
        <div className="absolute inset-0">
          <img
            src={productOpenView}
            alt=""
            className="h-full w-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-[1320px] items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_420px] lg:px-10">
          <div>
            <p className="section-kicker">Retail Buyer Assets</p>

            <h1 className="mt-5 text-[52px] font-black italic leading-[0.9] tracking-tight neon-text md:text-[86px] lg:text-[108px]">
              KOFENOT™
              <br />
              Retail Kit
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
              Product CSV, retail package images, product photography, and
              buyer-ready details for retail onboarding.
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
                  View Image Assets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden rounded-sm bg-white p-3 shadow-2xl lg:block">
            <img
              src={retailPackFront}
              alt="KOFENOT retail package front"
              className="aspect-[4/5] w-full rounded-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="mx-auto max-w-[1320px] px-6 py-14 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-sm p-7">
            <h2 className="text-4xl font-black italic leading-none text-white">
              Product Details
            </h2>

            <div className="mt-6 grid gap-3 text-sm leading-6 text-white/75 sm:grid-cols-2">
              <p>
                <strong className="text-white">Product:</strong>
                <br />
                KOFENOT™ Laptop Wedge
              </p>
              <p>
                <strong className="text-white">SKU:</strong>
                <br />
                KFN-001
              </p>
              <p>
                <strong className="text-white">Category:</strong>
                <br />
                Laptop Accessories
              </p>
              <p>
                <strong className="text-white">Retail Price:</strong>
                <br />
                $15.00
              </p>
              <p>
                <strong className="text-white">Case Pack:</strong>
                <br />
                30 units
              </p>
              <p>
                <strong className="text-white">Inventory:</strong>
                <br />
                4,500 units
              </p>
              <p>
                <strong className="text-white">Origin:</strong>
                <br />
                China
              </p>
              <p>
                <strong className="text-white">Brand:</strong>
                <br />
                KOFENOT™
              </p>
            </div>
          </div>

          <div className="panel rounded-sm p-7">
            <h2 className="text-4xl font-black italic leading-none text-white">
              CSV Description
            </h2>

            <p className="mt-5 text-base leading-7 text-white/75">
              {productDescription}
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

      {/* IMAGE ASSETS */}
      <section
        id="images"
        className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-14 lg:px-10"
      >
        <p className="section-kicker">Downloadable Assets</p>

        <h2 className="section-title">
          Product Image <span className="neon-text">Library</span>
        </h2>

        <p className="mt-4 max-w-3xl text-white/70">
          Click preview to open the full-size image. Use Download for retail
          submission files.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {images.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-sm border border-white/10 bg-[#080908]"
            >
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square w-full object-contain"
                />
              </a>

              <div className="border-t border-white/10 p-4">
                <h3 className="text-lg font-black italic leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[40px] text-sm leading-5 text-white/60">
                  {item.description}
                </p>

                <p className="mt-3 break-all text-xs text-white/40">
                  {item.fileName}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-sm border border-white/15 px-3 text-xs font-black uppercase tracking-[0.12em] text-white hover:bg-white/10"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Open
                  </a>

                  <a
                    href={item.image}
                    download={item.fileName}
                    className="inline-flex h-10 items-center justify-center rounded-sm bg-red-600 px-3 text-xs font-black uppercase tracking-[0.12em] text-white hover:bg-red-500"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    File
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
