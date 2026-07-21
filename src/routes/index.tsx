import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Feather,
  MonitorSmartphone,
  Play,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import corp from "@/assets/kofenot-corp.jpeg";
import deadSpill from "@/assets/dead-spill.jpg";
import demoVideo from "@/assets/kofeenot-demo.mp4";
import testimonialPoster from "@/assets/kofenot-testimonials.jpg";
import testimonialVideo from "@/assets/kofenot-testimonials.mp4";
import fidget from "@/assets/kofeenot-fidget.jpg";
import giftBox from "@/assets/kofenot-gift-box.jpeg";
import neck from "@/assets/kofeenot-neck.jpg";
import safeSpill from "@/assets/safe-spill.jpeg";
import spillSafeProduct from "@/assets/spill-safe.jpeg";
import threeDevices from "@/assets/kofenot-3-devices.jpg";

export const Route = createFileRoute("/")({ component: Home });

const retailCheckoutUrl = "https://buy.stripe.com/fZu7sKfz0gcQ7wk6BSdUY0E";
const twoUnitCheckoutUrl = "https://buy.stripe.com/eVq00i3Qi9Os9EsbWcdUY0M";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const layout = {
  section: "border-t border-[rgba(0,255,0,0.12)] py-10",
  sectionLast: "pb-12 pt-8",
  standard: "mx-auto max-w-[1320px] px-6 lg:px-8",
  wide: "mx-auto max-w-[1760px] px-6 lg:px-8",
  narrow: "mx-auto max-w-[980px] px-6 lg:px-8",
  content: "mt-5",
};

const text = {
  body: "text-muted-foreground",
};

type BenefitCard = {
  image: string;
  mode: string;
  title: string;
  body: string;
  tileClass: string;
};

type PurchaseOption = {
  sectionKicker: string;
  price: string;
  title: string;
  items: string[];
  url: string;
};

const benefitModes: BenefitCard[] = [
  {
    image: deadSpill,
    mode: "Spill deflection",
    title: "Coffee",
    body: "60% of laptop damage starts with a spilled drink. Coffee leads the list.",
    tileClass: "lg:mt-10",
  },
  {
    image: safeSpill,
    mode: "Save your laptop",
    title: "Golden minute",
    body:
      "KOFENOT™ creates an escape angle that helps redirect spills away " +
      "from the critical components beneath the keyboard.",
    tileClass: "lg:mt-16",
  },
  {
    image: neck,
    mode: "Better posture",
    title: "Tilt laptop, not neck",
    body: "Lifting the screen and tilting it back reduces tech-neck strain.",
    tileClass: "lg:mt-44",
  },
  {
    image: threeDevices,
    mode: "Stand",
    title: "Flips to hold 3 devices",
    body: "Quietly turns coffee shops, airports, and gyms into your office.",
    tileClass: "lg:mt-24",
  },
  {
    image: fidget,
    mode: "Fidget",
    title: "Snap. Shut. Repeat.",
    body: "KOFENOT™'s satisfying snap keeps restless fingers busy.",
    tileClass: "lg:mt-40",
  },
];

const howItWorksSteps = [
  ["01", "Open Laptop All the Way", "Feel for the rear hinge."],
  [
    "02",
    "Rest Rear Hinge on Wedge",
    "Works with open-trench hinges. Flip wedge for closed-angle hinges.",
  ],
  ["03", "Snap Shut", "A satisfying mechanical click users keep repeating."],
];

const testimonials = [
  "Why doesn't Apple include this?",
  "I immediately bought one.",
  "This is genius.",
  "I've never seen anything like this.",
];

const faq = [
  [
    "What is KOFENOT?",
    "A pocket-flat laptop wedge that lifts the rear hinge to help deflect spills and improve the viewing angle.",
  ],
  [
    "Does it use magnets or adhesive?",
    "No. KOFENOT is a mechanical wedge with zero magnets, clips, or adhesives.",
  ],
  [
    "What devices does it support?",
    "It is designed for laptops and can also support phones and tablets for quick desk setup.",
  ],
  [
    "How much is the retail unit?",
    "Retail Price: $15 for one KOFENOT in hanging pack.",
  ],
];

const purchaseOptions: PurchaseOption[] = [
  {
    sectionKicker: "1 unit in Retail Box",
    price: "$15",
    title: "One KOFENOT™ laptop wedge in retail box.",
    items: ["free shipping in the US", "In Stock. Ships from California", "3-5 business days"],
    url: retailCheckoutUrl,
  },
  {
    sectionKicker: "2 units in Retail Box",
    price: "$25",
    title: "Two KOFENOT™ laptop wedges in retail box.",
    items: ["free shipping in the US", "In Stock. Ships from California", "3-5 business days"],
    url: twoUnitCheckoutUrl,
  },
];

export function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  const openCheckout = (url = retailCheckoutUrl) => {
    window.location.href = url;
  };

  return (
    <main className="page-shell">
      <HeroSection openDemo={() => setVideoOpen(true)} />
      <BenefitsSection />
      <HowItWorksSection />
      <ReviewsSection openCheckout={openCheckout} />
      <PricingSection openCheckout={openCheckout} />
      <ProductDetailsSection />
      <FaqSection />

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl bg-black p-2 neon-border">
          <video
            src={demoVideo}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full rounded-sm"
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}

function HeroSection({ openDemo }: { openDemo: () => void }) {
  return (
    <section className="page-hero min-h-[100svh]">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 pt-7 lg:px-10">
        <div className="min-h-[calc(100svh-4rem)] pb-44">
          <Reveal delay={0.08}>
            <h3>COFFEE HAPPENS. BE READY.</h3>
          </Reveal>

          <Reveal delay={0.05}>
            <h1>
              ULTIMATE
              <br />
              LAPTOP
              <br />
              WEDGE
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3 lg:ml-6">
              <SetupButton onClick={openDemo} />
              <BuyButton href="#pricing" />
            </div>
          </Reveal>
        </div>
      </div>

      <HeroStats />
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <img src={corp} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="hero-overlay" />
    </div>
  );
}

function SetupButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex h-10 w-fit items-center gap-4 rounded-lg bg-red-600 px-6 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(220,38,38,0.55)] transition hover:bg-red-500"
    >
      <Play className="h-7 w-7 shrink-0 fill-white text-white" />
      2-SEC SETUP
    </button>
  );
}

function BuyButton({ href }: { href: string }) {
  return (
    <a href={href}>
      <Button className="h-10 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
        Buy Now
      </Button>
    </a>
  );
}
function BenefitsSection() {
  return (
    <section className={cx("relative overflow-hidden", layout.section)}>
      <div className={layout.wide}>
        <SectionHeader
          sectionKicker="Small Wedge. Big Difference."
          title="Why People Buy KOFENOT™"
        />

        <div
          className="pointer-events-none absolute right-[7%] top-[105px] z-0 hidden -rotate-12 select-none text-right font-black italic uppercase tracking-tight neon-text lg:block"
          aria-hidden="true"
        >
          <div className="text-[25px] leading-[0.82] xl:text-[86px]">
            $1,000+
          </div>

          <div className="mt-1 text-[35px] leading-none xl:text-[45px]">
            Saved
          </div>

          <div className="mt-2 text-[20px] leading-none tracking-[0.16em] xl:text-[24px]">
            Per Spill
          </div>
        </div>

        <div
          className={cx(
            layout.content,
            "relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[25fr_17fr_16fr_20fr_17fr] lg:items-start",
          )}
        >
          {benefitModes.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.055}
              className={card.tileClass}
            >
              <BenefitCard card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ card }: { card: BenefitCard }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-black transition duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden bg-black">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition duration-500"
        />
      </div>

      <div className="flex-1 border-t border-white/10 bg-[#080908] p-5">
        <h3>{card.title}</h3>

        <div className="mt-1 text-base leading-6 text-white/80">
  {card.body}
</div>
      </div>
    </article>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className={cx(layout.section, layout.standard)}>
      <SectionHeader
        title={
          <>
            How It Works: <span className="neon-text">Open / Rest / Snap</span>
          </>
        }
      />

      <div className={cx(layout.content, "grid gap-5 md:grid-cols-3")}>
        {howItWorksSteps.map(([number, title, description], index) => (
          <Reveal key={number} delay={index * 0.1}>
            <StepCard number={number} title={title} description={description} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="panel relative h-full rounded-sm p-7">
      <div className="text-6xl font-black leading-none neon-text">{number}</div>
      <h3>{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="absolute right-7 top-7 h-1 w-12 bg-[color:var(--neon)]" />
    </article>
  );
}
function ReviewsSection({ openCheckout }: { openCheckout: (url?: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="reviews" className={cx(layout.section, layout.standard)}>
      <SectionHeader
        title={
          <>
            Watch <span className="neon-text">Real Reactions</span>
          </>
        }
      />

      <Reveal delay={0.1}>
        <div className={cx(layout.content, "mx-auto max-w-[980px]")}>
          <TestimonialQuotes openCheckout={openCheckout} />

          <div className="relative mt-6">
            <video
              ref={videoRef}
              src={`${testimonialVideo}#t=0.1`}
              poster={testimonialPoster}
              controls={isPlaying}
              preload="auto"
              playsInline
              className="block w-full rounded-sm"
            />

            {!isPlaying && (
              <button
                type="button"
                onClick={() => {
                  videoRef.current?.play();
                  setIsPlaying(true);
                }}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play testimonials video"
              >
                <Play
                  className="h-24 w-24 fill-red-600 text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,.8)]"
                  strokeWidth={0}
                />
              </button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TestimonialQuotes({ openCheckout }: { openCheckout: (url?: string) => void }) {
  return (
    <div className="mt-6 text-center">
      <div className="text-2xl leading-none text-[color:var(--neon)]">★★★★★</div>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {testimonials.map((quote) => (
          <blockquote
            key={quote}
            className="border border-[rgba(0,255,0,0.18)] bg-black/30 p-4 text-sm font-semibold leading-snug text-white"
          >
            “{quote}”
          </blockquote>
        ))}
      </div>

      
    </div>
  );
}

function PricingSection({ openCheckout }: { openCheckout: (url?: string) => void }) {
  return (
    <section id="pricing" className={cx(layout.section, layout.standard)}>
      <SectionHeader
  sectionKicker="Ready to Ship. Secure Stripe Checkout"
  title={
    <>
      Choose Your <span className="neon-text">KOFENOT™</span>
    </>
  }
/>

      <div className={cx(layout.content, "grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr]")}>
        {purchaseOptions.map((option) => (
          <PricingCard key={option.sectionKicker} option={option} openCheckout={openCheckout} />
        ))}

        <div className="panel overflow-hidden rounded-sm">
          <img
            src={giftBox}
            alt="KOFENOT retail packaging"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  option,
  openCheckout,
}: {
  option: PurchaseOption;
  openCheckout: (url?: string) => void;
}) {
  return (
    <article className="neon-border flex flex-col rounded-sm bg-[rgba(0,255,0,0.06)] p-6">
      <p className="section-kicker">
  {option.sectionKicker}
</p>

      <div className="mt-3 text-5xl font-black neon-text">{option.price}</div>
      <p className="mt-3 text-sm">{option.title}</p>

      <ul className="mt-5 space-y-2 text-sm">
        {option.items.map((item) => (
          <PricingItem key={item}>{item}</PricingItem>
        ))}
      </ul>

      <Button
        onClick={() => openCheckout(option.url)}
        className="mt-auto h-12 bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]"
      >
        Buy Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </article>
  );
}
function ProductDetailsSection() {
  const details = [
    ["Size", "3.4 × 2.4 × 0.4 in"],
    ["Weight", "0.9 oz"],
    [
      "Material",
      <>
        Made from durable ABS plastic
        <br />
        tested by SGS for compliance with EU RoHS restricted-substance limits.
      </>,
    ],
    ["Attachment", "No magnets, clips, or adhesives"],
    ["Devices", "Laptops, phones, and tablets"],
  ];

  return (
    <section
      id="product-details"
      className={cx(layout.section, layout.standard)}
    >
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            title={
              <>
                Product <span className="neon-text">Details</span>
              </>
            }
          />

          <Reveal delay={0.08}>
            <div className="mt-6 overflow-hidden border-y border-[rgba(0,255,0,0.18)]">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-[rgba(0,255,0,0.12)] py-5 last:border-b-0 sm:grid-cols-[190px_1fr]"
                >
                  <div className="text-sm font-black uppercase tracking-[0.08em] text-white">
                    {label}
                  </div>

                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-sm bg-white">
            <img
              src={spillSafeProduct}
              alt="KOFENOT™ SPILL SAFE laptop wedge"
              className="aspect-square h-full w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className={cx(layout.sectionLast, layout.narrow)}>
      <SectionHeader title="FAQ" />

      <div
        className={cx(
          layout.content,
          "divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]",
        )}
      >
        {faq.map(([question, answer]) => (
          <div key={question} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr]">
            <h3>{question}</h3>
            <p className={text.body}>{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroStats() {
  return (
    <div className="absolute inset-x-0 bottom-10 z-20 hidden lg:block">
      <Reveal delay={0.2}>
        <div className="grid min-h-[70px] grid-cols-4 border-t border-white/20 bg-black/10 backdrop-blur-sm">
          <HeroStat icon={<span className="text-4xl font-black !text-[color:var(--neon)]">0</span>} title="Zero">
            Magnets, Clips, Adhesives
          </HeroStat>

          <HeroStat icon={<Feather className="h-7 w-7 stroke-[1.5]" />} title="1 OZ">
            Pocket-Flat-Folding
          </HeroStat>

          <HeroStat icon={<Trophy className="h-7 w-7 stroke-[1.5]" />} title="2 WINS">
            Spill Deflection / Better Posture
          </HeroStat>

          <HeroStat icon={<MonitorSmartphone className="h-7 w-7 stroke-[1.5]" />} title="3 DEVICES" last>
            Laptops / Phones / Tablets
          </HeroStat>
        </div>
      </Reveal>
    </div>
  );
}

function HeroStat({
  children,
  icon,
  title,
  last = false,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  last?: boolean;
}) {
  return (
    <div className={cx("flex items-center gap-7 px-8", !last && "border-r border-white/20")}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--neon)] text-[color:var(--neon)]">
        {icon}
      </div>

      <div>
        <div className="text-sm font-black uppercase neon-text">{title}</div>
        <div className="mt-1 text-base leading-6 text-white/80">{children}</div>
      </div>
    </div>
  );
}

function SectionHeader({
  sectionKicker,
  title,
  body,
}: {
  sectionKicker?: string;
  title: React.ReactNode;
  body?: string;
}) {
  return (
    <Reveal>
      <div>
        {sectionKicker && <h3>{sectionKicker}</h3>}
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>
    </Reveal>
  );
}

function PricingItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Check className="h-4 w-4 text-[color:var(--neon)]" />
      {children}
    </li>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cx("relative z-10 pointer-events-auto h-full w-full", className)}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
