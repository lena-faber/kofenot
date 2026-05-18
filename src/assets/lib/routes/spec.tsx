import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/spec")({
  head: () => ({
    meta: [
      { title: "Kofeᵉ̬Not — Spec Sheet | OEM Promo Wedge" },
      { name: "description", content: "Technical specs and pricing tiers for the Kofeᵉ̬Not branded laptop wedge. Download the one-page PDF." },
      { property: "og:title", content: "Kofeᵉ̬Not — Spec Sheet" },
      { property: "og:description", content: "1 oz, 3.4×2.4×0.4 in folded. RoHS ABS. 2.0×1.6 in branding zone. FOB California." },
    ],
  }),
  component: Spec,
});

function Spec() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 lg:px-6 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--neon)]">Spec Sheet 2026</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-2">
            Kofe<span className="neon-text">ᵉ̬</span>Not — Technical & Commercial
          </h1>
          <p className="text-muted-foreground mt-2">One-page reference for procurement, agencies, and OEM partners.</p>
        </div>
        <a href="/kofeenot-spec.pdf" download>
          <Button className="bg-[color:var(--neon)] text-black hover:bg-[color:var(--neon-dim)] font-bold h-11 px-5">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </a>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <section className="panel rounded-sm p-6">
          <h2 className="text-[color:var(--neon)] uppercase tracking-[0.2em] text-xs font-bold border-b border-[rgba(0,255,0,0.25)] pb-2">Technical Specifications</h2>
          <dl className="mt-4 text-sm divide-y divide-[rgba(0,255,0,0.1)]">
            {[
              ["Material", "High-Impact RoHS-Compliant ABS"],
              ["Weight", "1 oz per unit"],
              ["Folded Size", "3.4\" L × 2.4\" W × 0.4\" H"],
              ["Branding Area", "2.0\" L × 1.6\" W, front-facing"],
              ["Construction", "Pure mechanical, zero adhesives / magnets"],
              ["Compatibility", "Most laptops, tablets, phones"],
              ["Ergonomics", "Posture support, spill deflection"],
              ["Production", "FOB California, OEM-ready"],
              ["IP Status", "Utility patent pending, trademark pending"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px,1fr] py-2.5">
                <dt className="text-muted-foreground">{k}</dt><dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="panel rounded-sm p-6">
          <h2 className="text-[color:var(--neon)] uppercase tracking-[0.2em] text-xs font-bold border-b border-[rgba(0,255,0,0.25)] pb-2">Pricing Tiers</h2>
          <div className="mt-4 grid gap-3">
            {[
              ["2-Unit Gift Box", "$30", "US shipping included. Credited toward OEM order."],
              ["20 Gift Boxes Pack", "$480", "Bulk retail / event-ready."],
              ["Bulk OEM Min Order", "Quote", "1 Pack (100 units) or 1 Master Case (400 units / 25 lb). Ships blank."],
              ["Enterprise / Licensing", "Quote", "OEM manufacturing, private label, licensing available."],
            ].map(([n, p, d]) => (
              <div key={n} className="border border-[rgba(0,255,0,0.3)] rounded-sm p-4 flex items-start justify-between gap-4">
                <div>
                  <div className="font-bold">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{d}</div>
                </div>
                <div className="neon-text font-black text-xl shrink-0">{p}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">24-48h dispatch • FOB SF Bay Area, CA, US • info@kofeenot.com</p>
        </section>
      </div>
    </div>
  );
}
