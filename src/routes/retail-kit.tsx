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
                const csv = `Image,SKU,Product Name,Description,MSRP
kofenot-retail-pack.jpg,KFN-001,KOFENOT™ Laptop Wedge,"Pocket-size laptop wedge that improves typing comfort, helps redirect accidental spills away from the keyboard, increases airflow beneath the laptop, and doubles as a phone stand.",15.00`;
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
