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
          "The story behing KOFENOT: one dead laptop, one dead car, " +
          "Silicon Valley neighbors, and the invention of a pocket-flat laptop wedge.",
      },
    ],
  }),
  component: Story,
});

const downloadHref = "/kofenot-press-release.pdf";

function Story() {
  return (
    <main>
      <section className="relative isolate -mt-16 min-h-[100svh] overflow-hidden bg-black pt-16">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img
            src={inventor}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1480px] items-end px-9 pb-20 pt-7 lg:px-10">
          <div>
            <h1 className="text-[56px] font-black leading-[0.9] tracking-tight md:text-[86px] lg:text-[112px]">
              KILL A LAPTOP.<br />KILL A CAR.<br />START A COMPANY.
            </h1>
            <a href={downloadHref} download className="mt-7 inline-block">
              
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
        <div className="grid gap-4 md:grid-cols-4">
          <article className="panel rounded-sm p-6">
            <Laptop className="h-7 w-7 text-[color:var(--neon)]" />
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              Built for
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Code. Coffee. Repeat.</h2>
          </article>
          <article className="panel rounded-sm p-6">
            <Hammer className="h-7 w-7 text-[color:var(--neon)]" />
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              Designed with
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Pure mechanics</h2>
          </article>
          <article className="panel rounded-sm p-6">
            <Sparkles className="h-7 w-7 text-[color:var(--neon)]" />
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              Must do
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Snap shut</h2>
          </article>
          <article className="panel rounded-sm p-6">
            <Fingerprint className="h-7 w-7 text-[color:var(--neon)]" />
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
              Made by
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">A village</h2>
          </article>
        </div>
      </section>

      <section id="laptop" className="mx-auto max-w-[980px] px-4 lg:px-6">
        <article className="border-t border-[rgba(0,255,0,0.18)] py-14">
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            One Dead Laptop. One Dead Car. One-way ticket to Silicon Valley..
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
            <p>
              A cup of coffee on a Palisades Tahoe Tuesday afternoon ended the short life of a new Macbook Pro of a ski instructor, Lena Faber. At her lunch time she was building a Web3 space-time infrastructure for human history. Because once she was a journalist.
            </p>
            <p>
              On a Thursday heavy storm, an elderly driver's hit her car from the side. And action: Lena’s car flew down a steep hill like in a movie, bouncing over obstacles along the way. The car was killed, the driver got zero injury. Because once she was a car racer.
            </p>
            <p>
              On Friday night she bought a new car, moved to Silicon Valley, posed ambitious The Here™ to first launch not so ambitious KOFENOT, inspired by an upside down coffee cup, which she always placed under her new laptop hinge to deflect future spills.
            </p>
            <p>The problem was carrying a coffee cup in a laptop bag.</p>
          </div>
        </article>
      </section>

      <figure className="h-[58svh] min-h-[380px] overflow-hidden border-y border-[rgba(0,255,0,0.18)] bg-black">
        <img
          src={coffeeShop}
          alt="KOFENOT in a coffee shop setting where laptops and coffee share the same table"
          className="h-full w-full object-cover"
        />
      </figure>

      <section id="obsession" className="mx-auto max-w-[980px] px-4 lg:px-6">
        <article className="border-t border-[rgba(0,255,0,0.18)] py-14">
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            One Ounce of Obsession
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
            <p>
              When her upside-down eureka started to grab attention, she sketched a wedge, filed a utility patent, and 3D printed an ugly prototype, knowing that one day
            </p>
            <p>It had to look premium. It had to feel good in the hand.</p>
            <p>It had to work with laptops, phones, and tablets.</p>
            <p>It could not use pins. It could not use magnets. It could not use adhesives.</p>
            <p>One ounce limit. Flat-folding. Multifunctional.</p>
            <p>The kind of simple thing that seems obvious once it exists.</p>
          </div>
        </article>
      </section>

      <figure className="h-[58svh] min-h-[380px] overflow-hidden border-y border-[rgba(0,255,0,0.18)] bg-black">
        <img
          src={threeDevices}
          alt="KOFENOT used with a laptop, phone, and tablet"
          className="h-full w-full object-cover"
        />
      </figure>

      <section id="snap" className="mx-auto max-w-[980px] px-4 lg:px-6">
        <article className="border-t border-[rgba(0,255,0,0.18)] py-14">
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            Folding Cars and Flying Wedge
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
            <p>
              This day came soon. One engineer saw Lena’s struggling to beautify a piece of plastic, realized she had absolutely no idea how to prepare files for injection molding and offered help.
            </p>
            <p>Lena raised the bar: the thing had to make a satisfyingly loud snap when it closed.</p>
            <p>Not just close. Snap.</p>
            <p>It had to tempt people to open and close it again. It had to be a fidget.</p>
            <p>
              The engineer laughed. And drew it for manufacturing. I takes countless 3D prints to figure out the the precise geometry of the opening and closing mechanism. Lena didn't want to hear about pins. No magnets. no adhesives either. Just mechanics. Oh, and snap!
            </p>
            <p>
              She didn't know yet that the person patiently helping her was one of the Valley's most senior industrial engineer in charge of designing flying-cars…
            </p>
            <p>
              Done. People stare at KOFENOT™ as if it were a Rubik's Cube, turn it around in their hands, open and close it a few times, and then ask the same question: "How does this thing work?” Including engineers.
            </p>
            <p>That was the first hint that maybe the invention wasn’t quite as simple as it looked to Lena.</p>
          </div>
        </article>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-black">
        <div className="grid md:grid-cols-2">
          <img
            src={expo}
            alt="KOFENOT at an expo or trade show"
            className="h-[48svh] min-h-[340px] w-full object-cover"
          />
          <img
            src={corporate}
            alt="KOFENOT as a corporate gift and custom branding product"
            className="h-[48svh] min-h-[340px] w-full object-cover"
          />
        </div>
      </section>

      <section id="village" className="mx-auto max-w-[980px] px-4 lg:px-6">
        <article className="border-t border-[rgba(0,255,0,0.18)] py-14">
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            Silicon Valley, Unfiltered.
          </h2>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-white/90">
            <p>
              Then came manufacturing… Felt like online gambling. Hours of video calls with the sales girl from a massive Chinese factory, accustomed to handling far larger orders yet explaining Lena all the nuts and bolts of manufacturing. Shipping at times when noone garanteed the product would arrive at all. Disclaimer: It did!
            </p>
            <p>Meanwile, Lena was still a few thousand dollars short of paying a balance to the factory.</p>
            <p>She mentioned the situation to her new friends in her new Los Gatos neighborhood.</p>
            <p>The next minute her phone dinged - a few thousands dropped to her Zelle…</p>
            <p>No question asked. No paper signed. Just people who believed she would figure it out.</p>
            <p>
              More obstacle later, and during a regular phone call from a friend she'd known since hiking the Appalachian Trail realized she still needed more money.
            </p>
            <p>And next minute the same ding.</p>
            <p>No question asked. No paper signed. Just trust accumulated over thousands of miles of trail.</p>
            <p>
              Then packaging became the bottleneck. An owner of a huge Santa Clara printing facility looked at the KOFENOT, punched two holes in the piece of hard paper: you figure out the rest, I’ll print a bunch.
            </p>
            <p>No money asked, no paper signed…</p>
            <p>A friend storing her inventory at his garage. A friend storing more inventory in his office.</p>
            <p>KOFENOT™ may have one inventor. But it has many fingerprints.</p>
            <p>It feels like something an entire Silicon Valley neighborhood quietly decided should exist.</p>
          </div>
        </article>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Code. Coffee. Repeat.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-white/90">
            <p>Every day, thousands of people work exactly the way KOFENOT™ was designed for.</p>
            <p>
              What makes KOFENOT™ unusual is that it was not created by a consumer products company. It was created by a startup founder building a much larger technology venture.
            </p>
            <p>
              KOFENOT™ is a 1 oz, flat-folding laptop wedge that lifts a laptop at the hinge to improve posture while helping deflect spills away from the keyboard. It also serves as a stand for phones and tablets and features a front-facing area for custom branding, making it suitable for corporate gifts, conferences, trade shows, and promotional campaigns.
            </p>
            <p>
              KOFENOT is available online at kofenot.com and in the JP Graphics store at 3310 Woodward Ave, Santa Clara, CA 95054
            </p>
            
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-20 text-center lg:px-6">
        <MapPin className="mx-auto h-9 w-9 text-[color:var(--neon)]" />
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
          KOFENOT™ may have one inventor. But it took a village to lounch it.
        </h2>
      </section>
    </main>
  );
}
