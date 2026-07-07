// src/routes/retail-kit.tsx
// KOFENOT Retail Kit page
// Paste this file into your project.
// (Code omitted here? No, include starter.)

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/retail-kit")({
  component: RetailKit,
});

function RetailKit() {
  return (
    <main className="page-shell">
      <section className="page-hero min-h-screen">
        <div className="mx-auto max-w-[1320px] px-6 py-24">
          <p className="section-kicker">Retail Buyer Assets</p>

          <h1 className="section-title">
            KOFENOT™ Product Submission
          </h1>

          <p className="mt-6 max-w-2xl text-muted-foreground">
            Download the CSV and product images for retail buyers.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => {
                const csv = Image,SKU,Product Name,Description,MSRP
kofenot-retail-pack.jpg,KFN-001,KOFENOT™ Laptop Wedge,"Pocket-size laptop wedge that improves typing comfort, helps redirect accidental spills away from the keyboard, increases airflow beneath the laptop, and doubles as a phone stand.",15.00;
                const blob = new Blob([csv], { type: "text/csv" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "KOFENOT_Product_Submission.csv";
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="rounded bg-lime-400 px-6 py-3 font-bold text-black"
            >
              Download CSV
            </button>
          </div>

          <div className="mt-16 rounded border border-green-500/30 p-6">
            <h2 className="text-2xl font-bold">Product Images</h2>

            <p className="mt-3">
              Add your product images here with:
            </p>

            <ul className="mt-4 list-disc pl-6">
              <li>Retail package</li>
              <li>Hero image</li>
              <li>Spill protection image</li>
              <li>Three devices image</li>
            </ul>

            <p className="mt-6">
              Use:
              {" "}
              &lt;a href={image} download&gt;Download Image&lt;/a&gt;
              {" "}
              under each image.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
Thought for a couple of seconds
Replace your entire retail-kit.tsx with this:
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, FileSpreadsheet } from "lucide-react";

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
    description: "Primary product image for retail review and CSV submission.",
  },
  {
    title: "KOFENOT Product — Open View",
    fileName: "kofenot-product-open-view.jpg",
    image: productOpenView,
    description: "Clean product-only image showing the wedge open.",
  },
  {
    title: "Retail Package — Back",
    fileName: "kofenot-retail-pack-back.jpg",
    image: retailPackBack,
    description: "Back of package with instructions and QR code.",
  },
  {
    title: "Retail Package — SIP SAFE",
    fileName: "kofenot-retail-pack-sip-safe.jpg",
    image: retailPackSipSafe,
    description: "Retail package with SIP SAFE print.",
  },
  {
    title: "Custom Print Example",
    fileName: "kofenot-custom-print-example.jpg",
    image: customPrintExample,
    description: "Example of custom print / gift version.",
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
      <section className="relative min-h-screen overflow-hidden border-b border-[rgba(0,255,0,0.14)]">
        <img
          src={productOpenView}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-[1320px] items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_.8fr] lg:px-10">
          <div>
            <p className="section-kicker">Retail Buyer Assets</p>

            <h1 className="mt-5 text-[54px] font-black italic leading-[0.9] tracking-tight neon-text md:text-[88px] lg:text-[112px]">
              KOFENOT™
              <br />
              Retail Kit
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
              Product CSV, retail package images, product photography, and
              buyer-ready details for gift stores, corporate buyers, and retail
              onboarding.
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

          <div className="hidden overflow-hidden rounded-sm bg-white p-3 shadow-2xl lg:block">
            <img
              src={retailPackFront}
              alt="KOFENOT retail package front"
              className="w-full rounded-sm"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-14 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="panel rounded-sm p-7">
            <h2 className="text-4xl font-black italic leading-none text-white">
              Product Details
            </h2>

            <div className="mt-6 space-y-3 text-sm leading-6 text-white/75">
              <p><strong className="text-white">Product:</strong> KOFENOT™ Laptop Wedge</p>
              <p><strong className="text-white">SKU:</strong> KFN-001</p>
              <p><strong className="text-white">Brand:</strong> KOFENOT™</p>
              <p><strong className="text-white">Category:</strong> Laptop Accessories</p>
              <p><strong className="text-white">Retail Price:</strong> $15.00</p>
              <p><strong className="text-white">Case Pack:</strong> 30 units</p>
              <p><strong className="text-white">Inventory:</strong> 4,500 units</p>
              <p><strong className="text-white">Country of Origin:</strong> China</p>
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

      <section
        id="images"
        className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-14 lg:px-10"
      >
        <p className="section-kicker">Downloadable Product Images</p>

        <h2 className="section-title">
          Images for <span className="neon-text">Retail Review</span>
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {images.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <div className="group overflow-hidden rounded-sm bg-black">
                <div className="overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="border-t border-white/10 bg-[#080908] p-5">
                  <h3 className="text-2xl font-black italic text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/65">
                    {item.description}
                  </p>

                  <p className="mt-2 text-xs text-white/45">
                    File name: {item.fileName}
                  </p>

                  <a
                    href={item.image}
                    download={item.fileName}
                    className="mt-5 inline-flex h-11 items-center rounded-sm bg-red-600 px-5 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-red-500"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Image
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] border-t border-[rgba(0,255,0,0.14)] px-6 py-14 lg:px-10">
        <p className="section-kicker">Packaging Details</p>

        <h2 className="section-title">
          Retail Packaging <span className="neon-text">Front + Back</span>
        </h2>

        <p className="mt-4 max-w-3xl text-white/70">
          Retail packaging shown front and back. Ships ready for display.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <img
            src={retailPackFront}
            alt="KOFENOT retail package front"
            className="rounded-sm bg-white"
          />
          <img
            src={retailPackBack}
            alt="KOFENOT retail package back"
            className="rounded-sm bg-white"
          />
        </div>
      </section>
    </main>
  );
}
Also make sure these files are in:
src/assets/kofenot-retail-pack-00.jpg
src/assets/kofenot-retail-pack-01.jpg
src/assets/kofenot-retail-pack-02.jpg
src/assets/kofenot-retail-pack-03.jpg
src/assets/kofenot-retail-pack-04.jpg
Thought for 4s
I believe you. But the deployment log is very specific: the build is failing before it even gets to the image problem.
The failing line is:

import { Home } from "./index";
in:
src/routes/__root.tsx
That means your app expects Home to be exported from:
src/routes/index.tsx
So check only this:
In src/routes/index.tsx
Find:
function Home() {
Make it:
export function Home() {
Do not change anything else.
That will not redesign the home page. It only restores the export the build expects.
then how I saw it? It still there. What problem cause adding these images?
You saw it because the old deployed version is still live.
The new deployment failed, so Cloudflare kept serving the last successful build. That’s why /retail-kit still exists in the browser.

The error is not image-related. Build stopped here:

"Home" is not exported by "src/routes/index.tsx"
So the deployment never reached the new image page.
What happened most likely:

When you copy-pasted the new page, something accidentally affected src/routes/index.tsx or route generation. The live site still shows the old version, but the repo now fails to build.

Do this exact minimal fix:

In src/routes/index.tsx, make sure this line is:

export function Home() {
not:
function Home() {
Do not change layout. Do not touch content. Just add export.
Then redeploy.
I didnot open any other files. I just past your new code
Thought for 5s
I believe you. But the log still means GitHub repo now has src/routes/index.tsx without export Home.
Maybe it was already broken before, and the site still worked because old deployment stayed live.

Check only this one line:

Open:

src/routes/index.tsx
Find:
function Home() {
Change to:
export function Home() {
That’s all.
Do not touch /retail-kit.

Reason: __root.tsx imports Home:

import { Home } from "./index";
So the homepage file must export it. Your live /retail-kit is only the previous successful deployment.




