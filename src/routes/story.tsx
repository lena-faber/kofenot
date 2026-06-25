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
      { title: "The Story of KOFENOT | Press Release" },
      {
        name: "description",
        content:
          "The KOFENOT story and press release: one dead laptop, one dead car, Silicon Valley neighbors, and the invention of a pocket-flat laptop wedge.",
      },
    ],
  }),
  component: Story,
});

const downloadHref = "/kofenot-press-release.pdf";

const sections = [
  {
    id: "laptop",
    kicker: "One Dead Laptop. One Dead Car.",
    title: "One-way ticket to Silicon Valley.",
    body: [
      "A cup of coffee on a Palisades Tahoe Tuesday afternoon ended the short life of a new MacBook Pro owned by ski instructor Lena Faber. At lunch, she was building a Web3 space-time infrastructure for human history, because once she was a journalist.",
      "On a stormy Thursday, an elderly driver hit her car from the side. Lena's car flew down a steep hill like a movie scene, bouncing over obstacles along the way. The car was destroyed. The driver walked away with zero injury, because once she was a car racer.",
      "On Friday night, she bought a new car, moved to Silicon Valley, and paused her ambitious venture The Here(TM) to first launch the not-so-ambitious KOFENOT, inspired by an upside-down coffee cup she kept placing under her new laptop hinge to deflect future spills.",
      "The problem was carrying a coffee cup in a laptop bag.",
    ],
  },
  {
    id: "obsession",
    kicker: "One Ounce of Obsession",
    title: "The simple thing that seems obvious once it exists.",
    body: [
      "When her upside-down eureka started to grab attention, she sketched a wedge, filed a utility patent, and 3D printed an ugly prototype, knowing that one day it had to look elegant. It had to feel good in the hand. It had to work with laptops, phones, and tablets.",
      "It could not use pins. It could not use magnets. It could not use adhesives. One ounce limit. Flat-folding. Multifunctional.",
    ],
  },
  {
    id: "snap",
    kicker: "Folding Cars and Flying Wedges",
    title: "Not just close. Snap.",
    body: [
      "One engineer saw Lena struggling to beautify a piece of plastic, realized she had absolutely no idea how to prepare files for injection molding, and offered help.",
      "Lena raised the bar: the thing had to make a satisfyingly loud snap when it closed. It had to tempt people to open and close it again. It had to be a fidget.",
      "It took countless 3D prints to figure out the precise geometry of the opening and closing mechanism. No pins. No magnets. No adhesives. Just mechanics. Oh, and snap.",
      "She did not know yet that the person patiently helping her was one of Silicon Valley's most senior industrial engineers, in charge of designing flying cars.",
    ],
  },
  {
    id: "village",
    kicker: "Silicon Valley, Unfiltered",
    title: "No questions asked. No paper signed.",
    body: [
      "Then came manufacturing. It felt like online gambling: hours of video calls with a massive Chinese factory, a balance still due, shipping that no one could guarantee, and a product that somehow did arrive.",
      "When Lena was still a few thousand dollars short, new friends in her Los Gatos neighborhood sent the money by Zelle. Later, a friend from the Appalachian Trail did the same.",
      "Then packaging became the bottleneck. The owner of a huge Santa Clara printing facility looked at KOFENOT, punched two holes in a piece of hard paper, and said: you figure out the rest, I will print a bunch.",
      "A friend stored inventory in his garage. Another friend stored more inventory in his office. KOFENOT may have one inventor. But it has many fingerprints.",
    ],
  },
];

const facts = [
  { icon: Laptop, label: "Built for", value: "Code. Coffee. Laptops." },
  { icon: Hammer, label: "Designed with", value: "Pure mechanics" },
  { icon: Sparkles, label: "Must do", value: "Snap shut" },
  { icon: Fingerprint, label: "Made by", value: "A village" },
];

function StoryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`overflow-hidden border-y border-[rgba(0,255,0,0.18)] bg-black ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </figure>
  );
}

function Story() {
  return (
    <main>
      <section className="relative isolate -mt-16 overflow-hidden bg-black pt-16">
        <div className="relative h-[74svh] min-h-[560px] w-full overflow-hidden">
          <img
            src={inventor}
            alt="KOFENOT inventor Lena Faber working outside with a laptop and coffee"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          <div className="absolute left-4 top-24 max-w-[620px] sm:left-8 lg:left-[max(2rem,calc((100vw-1320px)/2))]">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">The Story / Press Release</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              KILL A LAPTOP.<br />KILL A CAR.<br />START A COMPANY.
            </h1>
            <a href={downloadHref} download className="mt-7 inline-block">
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Download <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-40 border-y border-[rgba(0,255,0,0.18)] bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] gap-5 overflow-x-auto px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] lg:px-6">
          <a href="#laptop" className="hover:text-[color:var(--neon)]">Laptop</a><span>•</span>
          <a href="#obsession" className="hover:text-[color:var(--neon)]">Obsession</a><span>•</span>
          <a href="#snap" className="hover:text-[color:var(--neon)]">Snap</a><span>•</span>
          <a href="#village" className="hover:text-[color:var(--neon)]">Village</a><span>•</span>
          <a href={downloadHref} download className="hover:text-[color:var(--neon)]">Download</a>
        </div>
      </nav>

      <section className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {facts.map((item) => (
            <article key={item.label} className="panel rounded-sm p-6">
              <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">{item.value}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[980px] px-4 lg:px-6">
        <article id={sections[0].id} className="border-t border-[rgba(0,255,0,0.18)] py-14">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">{sections[0].kicker}</p>
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">{sections[0].title}</h2>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
            {sections[0].body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </section>

      <StoryImage
        src={coffeeShop}
        alt="KOFENOT in a coffee shop setting where laptops and coffee share the same table"
        className="h-[58svh] min-h-[380px]"
      />

      <section className="mx-auto max-w-[980px] px-4 lg:px-6">
        {sections.slice(1, 3).map((section) => (
          <article key={section.kicker} id={section.id} className="border-t border-[rgba(0,255,0,0.18)] py-14">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">{section.kicker}</p>
            <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">{section.title}</h2>
            <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </section>

      <StoryImage
        src={threeDevices}
        alt="KOFENOT used with a laptop, phone, and tablet"
        className="h-[58svh] min-h-[380px]"
      />

      <section className="mx-auto max-w-[980px] px-4 lg:px-6">
        <article id={sections[3].id} className="border-t border-[rgba(0,255,0,0.18)] py-14">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">{sections[3].kicker}</p>
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">{sections[3].title}</h2>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
            {sections[3].body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-black">
        <div className="grid md:grid-cols-2">
          <img src={expo} alt="KOFENOT at an expo or trade show" className="h-[48svh] min-h-[340px] w-full object-cover" />
          <img src={corporate} alt="KOFENOT as a corporate gift and custom branding product" className="h-[48svh] min-h-[340px] w-full object-cover" />
        </div>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">Code. Coffee. Laptops.</p>
            <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Created by a founder, not a consumer products company.</h2>
          </div>
          <div className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-white/90">
            <p>Every day, thousands of people work exactly the way KOFENOT was designed for: laptop open, coffee nearby, one small wedge changing the angle of the risk.</p>
            <p>What makes KOFENOT unusual is that it was created by a startup founder building a much larger technology venture.</p>
            <a href={downloadHref} download className="mt-3 inline-flex w-fit items-center text-sm font-black uppercase tracking-[0.18em] text-[color:var(--neon)] hover:underline">
              Download press release <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-20 text-center lg:px-6">
        <MapPin className="mx-auto h-9 w-9 text-[color:var(--neon)]" />
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">KOFENOT may have one inventor. But it has many fingerprints.</h2>
      </section>
    </main>
  );
}
