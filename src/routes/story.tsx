import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Fingerprint, Hammer, Laptop, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import inventor from "@/assets/kofenot-inventor.jpg";
import coffeeShop from "@/assets/kofenot-coffee-shop.jpeg";
import threeDevices from "@/assets/kofeenot-triad.jpg";
import expo from "@/assets/kofenot-expo.jpeg";
import corporate from "@/assets/kofenot-corp-gift.jpeg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Story Behind KOFENOT" },
      {
        name: "description",
        content:
          "The story behing KOFENOT: one dead laptop, one dead car, Silicon Valley neighbors, and the invention of a pocket-flat laptop wedge.",
      },
    ],
  }),
  component: Story,
});

const downloadHref = "/kofenot-press-release.pdf";

const facts = [
  { icon: Laptop, label: "Built for", value: "Code. Coffee. Laptops." },
  { icon: Hammer, label: "Designed with", value: "Pure mechanics" },
  { icon: Sparkles, label: "Must do", value: "Snap shut" },
  { icon: Fingerprint, label: "Made by", value: "A village" },
];

const sections = [
  {
    id: "laptop",
    nav: "Laptop",
    title: "One Dead Laptop. One Dead Car. One-way ticket to Silicon Valley..",
    body: [
      "A cup of coffee on a Palisades Tahoe Tuesday afternoon ended the short life of a new Macbook Pro of a ski instructor, Lena Faber. At her lunch time she was building a Web3 space-time infrastructure for human history. Because ones she was a journalist.",
      "On a Thursday heavy storm, an elderly driver's hit her car from the side. And action: Lena’s car flew down a steep hill like in a movie, bouncing over obstacles along the way. The car was killed, the driver got zero injury. Because once she was a car racer.",
      "On Friday night she bought a new car, moved to Silicon Valley, posed ambitious The Here™ to first launch not so ambitious KOFENOT, inspired by an upside down coffee cup, which she always placed under her new laptop hinge to deflect future spills.",
      "The problem was carrying a coffee cup in a laptop bag.",
    ],
    image: {
      src: coffeeShop,
      alt: "KOFENOT in a coffee shop setting where laptops and coffee share the same table",
    },
  },
  {
    id: "obsession",
    nav: "Obsession",
    title: "One Ounce of Obsession",
    body: [
      "When her upside-down eureca started to grab attention, she scetched a wedge, filed a utility patent, and 3D printed an ugly prototype, knowing that one day",
      "It had to look elegant. It had to feel good in the hand.",
      "It had to work with laptops, phones, and tablets.",
      "It could not use pins. It could not use magnets. It could not use adhesives.",
      "One ounce limit. Flat-folding. Multifunctional.",
      "The kind of simple thing that seems obvious once it exists.",
    ],
    image: {
      src: threeDevices,
      alt: "KOFENOT used with a laptop, phone, and tablet",
    },
  },
  {
    id: "snap",
    nav: "Snap",
    title: "Folding Cars and Flying Wedge",
    body: [
      "This day came soon. One engineer saw Lena’s struggling to beautify a piece of plastic, realized she had absolutely no idea how to prepare files for injection molding and offered help.",
      "Lena raised the bar: the thing had to make a satisfyingly loud snap when it closed.",
      "Not just close. Snap.",
      "It had to tempt people to open and close it again. It had to be a fidget.",
      "The engineer laughed. And draw it for manufacturing. I takes countless 3D prints to figure out the the precise geometry of the opening and closing mechanism. Lena didn't want to hear about pins. No magnets. no adhesives either. Just mechanics. Oh, and snap!",
      "She didn't know yet that the person patiently helping her was one of the Valley's most senior industrial engineer in charge of designing flying-cars…",
      "Done. People stare at KOFENOT™ as if it were a Rubik's Cube, turn it around in their hands, open and close it a few times, and then ask the same question: \"How does this thing work?” Including engineers.",
      "That was the first hint that maybe the invention wasn’t quite as simple as it looked to Lena.",
    ],
  },
  {
    id: "village",
    nav: "Village",
    title: "SIilicon Valley, Unfiltered.",
    body: [
      "Then came manufacturing… Felt like online gambling. Hours of video calls with the sales girl from a massive Chinese factory, accustomed to handling far larger orders yet explaining Lena all the nuts and bolts of manufacturing. Shipping at times when noone garantee the product would arrive at all. Disclaimer: It did!",
      "Meanwile, Lena was still a few thousand dollars short of paying a balance to the factory. .",
      "She mentioned the situation to her new friends in her new Los Gatos neighborhood.",
      "The next minute her phone dinged - a few thousands dropped to her Zelle…",
      "No question asked. No paper signed. Just people who believed she would figure it out.",
      "More obstacle later, and during a regular phone call from a friend she'd known since hiking the Appalachian Trail realized she still needed more money.",
      "And next minute the same ding.",
      "No question asked. No paper signed. Just trust accumulated over thousands of miles of trail.",
      "Then packaging became the bottleneck. An owner of a huge Santa Clara printing facility looked at the KOFENOT, punched two holes in the piece of hard paper: you figure out the rest, I’ll print a bunch.",
      "No money asked, no paper signed…",
      "A friend storing her inventory at his garage. A friend storing more inventory in his office.",
      "KOFENOT™ may have one inventor. But it has many fingerprints.",
      "It feels like something an entire Silicon Valley neighborhood quietly decided should exist.",
    ],
  },
];

const productCopy = [
  "Every day, thousands of people work exactly the way KOFENOT™ was designed for.",
  "What makes KOFENOT™ unusual is that it was not created by a consumer products company. It was created by a startup founder building a much larger technology venture.",
  "KOFENOT™ is a 1 oz, flat-folding laptop wedge that lifts a laptop at the hinge to improve posture while helping deflect spills away from the keyboard. It also serves as a stand for phones and tablets and features a front-facing area for custom branding, making it suitable for corporate gifts, conferences, trade shows, and promotional campaigns.",
  "KOFENOT is available online at kofenot.com and in the JP Graphics store at 3310 Woodward Ave, Santa Clara, CA 95054",
];

function Story() {
  return (
    <main>
      <Hero />
      <StoryNav />
      <Facts />

      <StorySection section={sections[0]} />
      <StoryImage image={sections[0].image} />

      <StorySection section={sections[1]} />
      <StoryImage image={sections[1].image} />

      <StorySection section={sections[2]} />
      <MarketImages />

      <StorySection section={sections[3]} />
      <ProductSection />
      <FingerprintClose />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-black pt-16">
      <div className="relative h-[74svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={inventor}
          alt="KOFENOT inventor Lena Faber working outside with a laptop and coffee"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute left-4 top-24 max-w-[620px] sm:left-8 lg:left-[max(2rem,calc((100vw-1320px)/2))]">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">
            Kill a laptop. Kill a car. Start a company
          </p>
          <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            KOFENOT™.<br />It Took a Village.
          </h1>
          <a href={downloadHref} download className="mt-7 inline-block">
            <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
              Download <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function StoryNav() {
  return (
    <nav className="sticky top-16 z-40 border-y border-[rgba(0,255,0,0.18)] bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] gap-5 overflow-x-auto px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] lg:px-6">
        {sections.map((section, index) => (
          <span key={section.id} className="flex items-center gap-5">
            <a href={`#${section.id}`} className="hover:text-[color:var(--neon)]">
              {section.nav}
            </a>
            {index < sections.length - 1 ? <span>•</span> : null}
          </span>
        ))}
        <span>•</span>
        <a href={downloadHref} download className="hover:text-[color:var(--neon)]">
          Download
        </a>
      </div>
    </nav>
  );
}

function Facts() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
      <div className="grid gap-4 md:grid-cols-4">
        {facts.map((item) => (
          <article key={item.label} className="panel rounded-sm p-6">
            <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              {item.label}
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">{item.value}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}

function StorySection({ section }: { section: (typeof sections)[number] }) {
  return (
    <section className="mx-auto max-w-[980px] px-4 lg:px-6">
      <article id={section.id} className="border-t border-[rgba(0,255,0,0.18)] py-14">
        <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">{section.title}</h2>
        <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </section>
  );
}

function StoryImage({ image }: { image?: { src: string; alt: string } }) {
  if (!image) return null;

  return (
    <figure className="h-[58svh] min-h-[380px] overflow-hidden border-y border-[rgba(0,255,0,0.18)] bg-black">
      <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
    </figure>
  );
}

function MarketImages() {
  return (
    <section className="border-y border-[rgba(0,255,0,0.18)] bg-black">
      <div className="grid md:grid-cols-2">
        <img src={expo} alt="KOFENOT at an expo or trade show" className="h-[48svh] min-h-[340px] w-full object-cover" />
        <img src={corporate} alt="KOFENOT as a corporate gift and custom branding product" className="h-[48svh] min-h-[340px] w-full object-cover" />
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">
            Code. Coffee. Laptops.
          </p>
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Code. Coffee. Laptops.</h2>
        </div>
        <div className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-white/90">
          {productCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            href={downloadHref}
            download
            className="mt-3 inline-flex w-fit items-center text-sm font-black uppercase tracking-[0.18em] text-[color:var(--neon)] hover:underline"
          >
            Download press release <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FingerprintClose() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 py-20 text-center lg:px-6">
      <MapPin className="mx-auto h-9 w-9 text-[color:var(--neon)]" />
      <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
        KOFENOT™ may have one inventor. But it has many fingerprints.
      </h2>
    </section>
  );
}
