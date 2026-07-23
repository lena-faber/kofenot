import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
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
      {
        title: "KOFENOT™ Press & Media Kit",
      },
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
  ["Trademark", "KOFENOT: Make Your Laptop Coffee Shop-Friendly™."],
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

const mediaImages = [
 {
    src: heroImage,
    alt: "One second before killing a laptop",
    caption: "Restoring a spill drama behind the KOFENOT™ inventoion.",
  },
  {
    src: designImage00,
    alt: "Laptop wedge Eureka",
    caption: "Laptop wedge Eureka.",
  },
  {
    src: designImage01,
    alt: "KOFENOT development",
    caption: "As simple as upside-down coffee cup.",
  },
  {
    src: designImage02,
    alt: "KOFENOT geometry testing",
    caption: "Checking geometry and ergonomics.",
  },
  {
    src: designImage03,
    alt: "KOFENOT sound refinement",
    caption: "Making sure the snap is loud.",
  },
  {
    src: designImage04,
    alt: "Finished KOFENOT product",
    caption: "The hinge on the wedge. Ready for manufacturing",
  },
];

function PressPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="mx-auto grid max-w-[1480px] items-start gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-6">
        <StorySection />
        <ProductSidebar />
      </section>

      <BottomGrid />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[72svh] overflow-hidden text-white">
      <img
        src={heroImage}
        alt="Lena Faber designing KOFENOT with a laptop and coffee cup"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative z-10 flex min-h-[72svh] max-w-4xl flex-col justify-end px-6 pb-12 pt-8 lg:px-10">
        <h3>
          KOFENOT™ Media Kit
        </h3>

        <h1>
          One-way Ticket to Silicon Valley
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-snug text-white/90">
          The coffee accident behind KOFENOT™ that helps
          make laptops survive coffee.
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
            className="rounded-sm border-white bg-white/10 font-black text-white hover:bg-white hover:text-black"
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
   <article className="rounded-sm border border-black/10 bg-white text-black p-5 shadow-sm sm:p-7 lg:p-9">
  <header className="border-b border-black/10 pb-7">
    <p className="text-sm font-black uppercase tracking-[0.18em] text-black/60">
      Founder Story
    </p>

    <h2>
      One Dead Laptop. One Dead Car. One-way Ticket to Silicon Valley.
    </h2>
  </header>

      <div className="mt-8 space-y-6 text-[17px] leading-[1.85]">
        <p>
          A cup of coffee on a snowy afternoon at Palisades Tahoe ended the
          short life of ski instructor Lena Faber's new MacBook Pro.
        </p>

        <p>
          That lunchtime, she was building a space-time cube of human history.
          Because once she was a journalist.
        </p>

        <p>
          After this spill drama, she started putting an upside-down coffee cup
          under the hinge of her new laptop to deflect future spills. She wanted
          to stay out of the repair statistics showing that spilled drinks kill
          millions of laptops every year.
        </p>

        <p>
          One stormy noon, she miraculously escaped a highway crash and pulled
          onto the shoulder to catch her breath. The next second, an elderly
          driver slammed into her car from the side, sending it down a steep
          hill. She floored the accelerator and held the steering wheel dead
          straight, fighting to keep the car from rolling over. Just before
          reaching the bottom, she hit the brakes hard, instantly lifted off the
          accelerator to keep the front bumper from digging into the ground,
          then braked gently as the car slid into the muddy field. The car died.
          She walked away uninjured. Because once she was a car racer.
        </p>

        <p>
          That same day, she bought another car. The next day, she moved to
          Silicon Valley to turn her space-time cube into a BI startup.
        </p>

        <StoryHeading>Folding Cars and Flying Wedge</StoryHeading>

        <p>
          Her upside-down eureka started attracting attention, so she sketched a
          wedge, filed a utility patent, and 3D printed an ugly prototype.
        </p>

        <p>
          One engineer watching her struggle to beautify a piece of plastic
          offered help. Lena raised the bar: the thing had to not just close -it
          had to snap. Loud. The engineer laughed and drew it for manufacturing.
        </p>

        <p>
          Before then, it took countless 3D prints to figure out the precise
          geometry of the opening and closing mechanism with no pins, no
          magnets, and no adhesives either. 1 oz. Sharp. Oh, and snap!
        </p>

        <p>
          She didn't know yet that the person patiently helping her was one of
          the Valley's most senior industrial engineers in charge of designing
          flying cars...
        </p>

        <p>
          Done. People stare at KOFENOT™ as if it were a Rubik's Cube, turn it
          around in their hands, open and close it a few times, and then ask the
          same question: "How does this thing work?" Including engineers!
        </p>

        <p>
          That was the first hint that the invention wasn’t quite as simple as
          it lookes.
        </p>

        <StoryHeading>Silicon Valley, Unfiltered</StoryHeading>

        <p>
          Then came manufacturing... Felt like online gambling. Hours of video
          calls with a girl from a massive Chinese factory, accustomed to
          handling far larger orders yet explaining to Lena all the nuts and
          bolts of manufacturing. Shipping at times when no one guaranteed the
          product would arrive at all. Disclaimer: it did.
        </p>

        <p>
          Meanwhile, Lena was still a few thousand dollars short of paying a
          balance to the factory. She mentioned the situation to her new friends
          in her new Los Gatos neighborhood. The next minute her phone dinged -
          a few thousands dollars dropped to her Zelle… No question asked. No
          paper signed. Just people who believed she would figure it out.
        </p>

        <p>
          More obstacles later, and during a regular phone call from a friend
          she’d known since hiking the Appalachian Trail realized she still
          needed more money. And the next minute the same ding. No question
          asked. No paper signed. Just trust accumulated over thousands of miles
          of trail.
        </p>

        <p>
          Then packaging became the bottleneck. The owner of a huge Santa Clara
          printing facility looked at the KOFENOT™, punched two holes in the
          piece of hard paper: “you figure out the rest; I'll print a bunch.” No
          money asked, no paper signed...
        </p>

        <p>
          A friend storing her inventory in his garage. A friend storing more
          inventory in his office.
        </p>

        <p>
          KOFENOT™ may have one inventor. But it has many fingerprints. It feels
          like something an entire Silicon Valley neighborhood quietly decided
          should exist.
        </p>

        <StoryHeading>About KOFENOT™</StoryHeading>

        <p>
          KOFENOT™ is a 1 oz, flat-folding laptop wedge that lifts a laptop at
          the hinge to improve posture while helping deflect spills away from
          the keyboard. It also serves as a stand for phones and tablets and
          features a front-facing area for custom branding, making it suitable
          for corporate gifts, conferences, trade shows, and promotional
          campaigns.
        </p>

        <div className="border-t border-black/10 pt-7">
          <p className="!font-black">###</p>
        </div>

        <StoryHeading>Media Contact</StoryHeading>

        <div className="space-y-1">
          <p>Lena Faber</p>
          <p>Founder, KOFENOT™</p>

          <p>
            <a
              href="mailto:info@kofenot.com"
              className="font-bold underline decoration-black/30 underline-offset-4 hover:decoration-black"
            >
              info@kofenot.com
            </a>
          </p>

          <p>
            <a
              href="https://kofenot.com"
              className="font-bold underline decoration-black/30 underline-offset-4 hover:decoration-black"
            >
              kofenot.com
            </a>
          </p>
        </div>

        <div className="space-y-1 pt-3">
          <p>Product samples available for review.</p>
        </div>
      </div>
    </article>
  );
}

function StoryHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="border-t border-black/10 pt-8 text-2xl font-black leading-tight tracking-tight sm:text-3xl">
      {children}
    </h3>
  );
}

function ProductSidebar() {
  return (
    <aside className="space-y-6">
      <ProductFacts />
      <MediaGallery />
    </aside>
  );
}

function ProductFacts() {
  return (
    <section className="p-5 lg:p-7">
      <h2>
        Product Facts
      </h2>

      <div className="mt-6 grid gap-4">
        {facts.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[105px_minmax(0,1fr)] gap-4 border-b border-black/10 pb-3"
          >
            <p className="!text-sm !font-black !uppercase !tracking-[0.12em] !text-white/80">
              {label}
            </p>

            <p className="!text-sm !font-bold !leading-snug !text-white/80">
              {value}
            </p>
          </div>
        ))}
      </div>

      <Button
        asChild
        variant="outline"
        className="mt-6 w-full rounded-sm font-black text-white"
      >
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
    </section>
  );
}

function MediaGallery() {
  return (
    <section className="p-5 lg:p-6">
      <h2>
        Media Photos
      </h2>

      <div className="mt-5 space-y-6">
        {mediaImages.map((image) => (
          <MediaFigure
            key={image.src}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
          />
        ))}
      </div>

      <Button
        asChild
        variant="outline"
        className="mt-6 w-full rounded-sm font-black text-white"
      >
        <a href="/media/kofenot-photos.zip" download>
          <Download className="mr-2 h-4 w-4" />
          Download High-Resolution Photos
        </a>
      </Button>
    </section>
  );
}

function BottomGrid() {
  return (
    <section className="mx-auto grid max-w-[1480px] gap-6 px-4 pb-10 lg:grid-cols-3 lg:px-6">
      <section className="p-6">
        <h2>
          KOFENOT™
        </h2>

        <p className="mt-4 !leading-relaxed !text-white/80">
          KOFENOT™ is a flat-folding laptop wedge and stand for laptops, phones,
          and tablets.
        </p>

        <Button
          asChild
          variant="outline"
          className="mt-6 rounded-sm font-black text-white"
        >
          <a href="/wholesale">Wholesale Info</a>
        </Button>
      </section>

      <section className="p-6">
        <h2>
          Download Center
        </h2>

        <div className="mt-5 grid gap-2">
          {downloadItems.map((item) => (
            <a
              key={`${item.title}-${item.type}`}
              href={item.href}
              download
              className="flex items-center justify-between rounded-sm border border-black/10 px-3 py-3 text-sm font-bold text-white transition hover:border-[color:var(--neon)] hover:bg-[rgba(0,255,0,0.08)]"
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-[color:var(--neon)]" />
                {item.title}
              </span>

              <span className="text-white/80">{item.type}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="p-6">
        <h2>
          Media Contact
        </h2>

        <div className="mt-5 grid gap-4 text-sm font-bold">
          <p className="!text-white">
            Lena Faber
            <br />
            Founder, KOFENOT™
          </p>

          <p className="flex items-center gap-3 !text-white">
            <Mail className="h-4 w-4 text-[color:var(--neon)]" />

            <a href="mailto:info@kofenot.com">info@kofenot.com</a>
          </p>

          <p className="flex items-center gap-3 !text-white">
            <MapPin className="h-4 w-4 text-[color:var(--neon)]" />
            Silicon Valley, California
          </p>
        </div>

        <Button asChild className="mt-6 w-full rounded-sm font-black">
          <a href="mailto:info@kofenot.com?subject=KOFENOT%20Media%20Inquiry">
            Contact
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
    <figure>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[4/3] w-full rounded-sm object-cover"
      />

      <figcaption className="mt-2 !text-sm !leading-snug !text-white/80">
        {caption}
      </figcaption>
    </figure>
  );
}
