import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  FileArchive,
  FileText,
  Image,
  Mail,
  MapPin,
  Package,
  Ruler,
  Sparkles,
  Weight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import heroImage from "@/assets/kofenot-designer.jpg";
import designImage00 from "@/assets/lena-faber-designing-kofenot-00.jpg";
import designImage01 from "@/assets/lena-faber-designing-kofenot-01.jpg";
import designImage02 from "@/assets/lena-faber-designing-kofenot-02.jpg";
import designImage03 from "@/assets/lena-faber-designing-kofenot-03.jpg";
import designImage04 from "@/assets/lena-faber-designing-kofenot-04.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "KOFENOT™ Press & Media Kit" },
      {
        name: "description",
        content:
          "Download the KOFENOT press release, media kit, product facts, high-resolution photos, and founder information.",
      },
    ],
  }),
  component: PressPage,
});

const downloadItems = [
  {
    title: "Press Release",
    type: "PDF",
    href: "/media/kofenot-press-release.pdf",
    icon: FileText,
  },
  {
    title: "Press Release",
    type: "DOCX",
    href: "/media/kofenot-press-release.docx",
    icon: FileText,
  },
  {
    title: "Full Media Kit",
    type: "ZIP",
    href: "/media/kofenot-media-kit.zip",
    icon: FileArchive,
  },
  {
    title: "High-Resolution Photos",
    type: "ZIP",
    href: "/media/kofenot-photos.zip",
    icon: Image,
  },
  {
    title: "Logos",
    type: "ZIP",
    href: "/media/kofenot-logos.zip",
    icon: Sparkles,
  },
  {
    title: "Product Specifications",
    type: "PDF",
    href: "/media/kofenot-product-specifications.pdf",
    icon: Package,
  },
];

const facts = [
  ["Product", "KOFENOT™"],
  ["Trademark", "KOFENOT™: Make Your Laptop Coffee Shop-Friendly."],
  ["Category", "Laptop wedge / phone stand"],
  ["Bare weight", "0.9 oz"],
  ["Retail pack weight", "2.1 oz"],
  ["Size", "2.4” × 3.4” × 0.4”"],
  ["Uses", "Laptop • Phone • Tablet"],
  ["Custom branding", "Yes"],
  ["Corporate gifts", "Yes"],
  ["Wholesale MOQ", "30 units"],
  ["Origin", "Designed in California"],
];

function PressPage() {
  return (
    <main className="bg-[#f6f6f2] text-black">
      <HeroSection />
      <section className="mx-auto grid max-w-[1480px] gap-6 px-4 py-6 lg:grid-cols-[1fr_360px] lg:px-6">
        <StorySection />
        <ProductFacts />
      </section>
      <BottomGrid />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[72svh] overflow-hidden bg-black text-black">
      <img
        src={heroImage}
        alt="Lena Faber designing KOFENOT with a laptop and coffee cup"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative z-10 flex min-h-[72svh] max-w-4xl flex-col justify-end px-6 pb-12 pt-24 lg:px-10">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">
          KOFENOT™ Media Kit
        </p>

        <h1 className="text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
          One Dead Laptop.
          <br />
          One Dead Car.
          <br />
          One-way Ticket to Silicon Valley.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-snug text-black/90">
          The accidental story behind a pocket-size laptop wedge that helps
          make laptops more coffee shop-friendly.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-sm font-black">
            <a href="/media/kofenot-media-kit.zip" download>
              <Download className="mr-2 h-5 w-5" />
              Download Media Kit
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-sm border-white bg-white/10 font-black text-black hover:bg-white hover:text-black"
          >
            <a href="/media/kofenot-press-release.pdf" download>
              Press Release PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <article className="rounded-sm border border-black/10 bg-white p-5 shadow-sm lg:p-7">
      <h2 className="text-3xl font-black tracking-tight">
        The Story Behind KOFENOT™
      </h2>

      <div className="mt-6 grid gap-6 text-base leading-relaxed text-black/85">
        <p>
          A cup of coffee on a Palisades Tahoe Tuesday afternoon ended the short
          life of a new MacBook Pro of a ski instructor, Lena Faber. At her lunch
          time she was building a Web3 space-time infrastructure for human
          history. Because once she was a journalist.
        </p>

        <p>
          On a Thursday heavy storm, an elderly driver hit her car from the
          side. And action: Lena’s car flew down a steep hill like in a movie,
          bouncing over obstacles along the way. The car was killed, the driver
          got zero injury. Because once she was a car racer.
        </p>

        <MediaFigure
  src={designImage00}
  alt="Lena Faber designing KOFENOT"
  caption="Lena Faber designing KOFENOT™ in Silicon Valley."
/>

<MediaFigure
  src={designImage01}
  alt="KOFENOT development"
  caption="Developing the first KOFENOT™ prototypes."
/>

<MediaFigure
  src={designImage02}
  alt="Prototype testing"
  caption="Testing the hinge-lifting design."
/>

<MediaFigure
  src={designImage03}
  alt="Design refinement"
  caption="Refining the final product."
/>

<MediaFigure
  src={designImage04}
  alt="Finished KOFENOT"
  caption="The finished KOFENOT™ ready for production."
/>

        <p>
          On Friday night she bought a new car, moved to Silicon Valley, and
          paused her larger venture, The Here™, to first launch KOFENOT™,
          inspired by an upside-down coffee cup she always placed under her new
          laptop hinge to deflect future spills.
        </p>

        <p>The problem was carrying a coffee cup in a laptop bag.</p>

        <p>
          When her upside-down eureka started to grab attention, she sketched a
          wedge, filed a utility patent, and 3D printed an ugly prototype,
          knowing that one day it had to look premium, feel good in the hand,
          work with laptops, phones, and tablets, and use no pins, magnets, or
          adhesives.
        </p>

        <MediaFigure
          src={designImage03}
          alt="KOFENOT sketches and prototypes"
          caption="Early product development focused on a hinge-lifting mechanism requiring no magnets, clips, pins, or adhesives."
        />

        <p>
          Then one engineer saw Lena struggling to beautify a piece of plastic
          and offered help. Lena raised the bar: the thing had to make a loud,
          satisfying snap when it closed. Not just close. Snap.
        </p>

        <p>
          It took countless 3D prints to figure out the precise geometry of the
          opening and closing mechanism. Done. People stare at KOFENOT™ as if it
          were a Rubik’s Cube, turn it around in their hands, open and close it a
          few times, and then ask the same question: how does this thing work?
        </p>

        <MediaFigure
          src={designImage04}
          alt="KOFENOT product in hand"
          caption="KOFENOT™ evolved through support from engineers, neighbors, manufacturers, and friends across Silicon Valley."
        />

        <p>
          KOFENOT™ is a 0.9 oz flat-folding laptop wedge that lifts a laptop at
          the hinge, helps improve posture, and helps deflect spills away from
          the keyboard. It also serves as a stand for phones and tablets and
          has a front-facing area for custom branding, making it suitable for
          corporate gifts, conferences, trade shows, and promotional campaigns.
        </p>
      </div>
    </article>
  );
}

function ProductFacts() {
  return (
    <aside className="rounded-sm border border-black/10 bg-white p-5 shadow-sm lg:p-7">
      <h2 className="text-2xl font-black tracking-tight">Product Facts</h2>

      <div className="mt-6 grid gap-4">
        {facts.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[120px_1fr] gap-4 border-b border-black/10 pb-3">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-black/50">
              {label}
            </p>
            <p className="text-sm font-bold leading-snug">{value}</p>
          </div>
        ))}
      </div>

      <Button asChild variant="outline" className="mt-6 w-full rounded-sm font-black">
        <a href="/media/kofenot-product-specifications.pdf" download>
          <Ruler className="mr-2 h-4 w-4" />
          Download Specs
        </a>
      </Button>

      <Button asChild className="mt-3 w-full rounded-sm font-black">
        <a href="/wholesale">
          Wholesale Info
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </aside>
  );
}

function BottomGrid() {
  return (
    <section className="mx-auto grid max-w-[1480px] gap-6 px-4 pb-10 lg:grid-cols-[1fr_1fr_1fr] lg:px-6">
      <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight">About Lena Faber</h2>
        <p className="mt-4 leading-relaxed text-black/75">
          Lena Faber is a journalist, former university professor, car racer,
          ski instructor, Appalachian Trail thru-hiker, and World Masters
          Athletics silver medalist. KOFENOT™ is her answer to a problem she
          lived through: coffee, laptops, and work happening at the same table.
        </p>

        <Button asChild variant="outline" className="mt-6 rounded-sm font-black">
          <a href="/story">Read Full Story</a>
        </Button>
      </section>

      <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight">Download Center</h2>

        <div className="mt-5 grid gap-2">
          {downloadItems.map((item) => (
            <a
              key={`${item.title}-${item.type}`}
              href={item.href}
              download
              className="flex items-center justify-between rounded-sm border border-black/10 px-3 py-3 text-sm font-bold hover:border-[color:var(--neon)] hover:bg-[rgba(0,255,0,0.08)]"
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-[color:var(--neon)]" />
                {item.title}
              </span>
              <span>{item.type}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight">Media Contact</h2>

        <div className="mt-5 grid gap-4 text-sm font-bold">
          <p>
            Lena Faber
            <br />
            Founder, KOFENOT™
          </p>

          <p className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[color:var(--neon)]" />
            <a href="mailto:press@kofenot.com">press@kofenot.com</a>
          </p>

          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-[color:var(--neon)]" />
            Silicon Valley, California
          </p>
        </div>

        <Button asChild className="mt-6 w-full rounded-sm font-black">
          <a href="mailto:press@kofenot.com?subject=KOFENOT%20Media%20Inquiry">
            Contact for Interview
          </a>
        </Button>
      </section>
    </section>
  );
}

function MediaFigure({
  alt,
  caption,
  src,
}: {
  alt: string;
  caption: string;
  src: string;
}) {
  return (
    <figure className="my-4">
      <img
        src={src}
        alt={alt}
        className="aspect-[16/10] w-full rounded-sm object-cover"
      />
      <figcaption className="mt-2 text-sm leading-snug text-black/55">
        {caption}
      </figcaption>
    </figure>
  );
}
