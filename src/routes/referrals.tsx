import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CalendarDays,
  Coffee,
  Gift,
  Handshake,
  Megaphone,
  Network,
  Presentation,
  Send,
  Store,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import referralHero from "@/assets/referral.jpeg";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "KOFENOT Referral Program | Business Introductions" },
      {
        name: "description",
        content:
          "Introduce KOFENOT to large buyers, distributors, corporate gifting agencies, coworking operators, coffee chains, trade show suppliers, and event organizers.",
      },
    ],
  }),
  component: Referrals,
});

const referralEmail =
  "mailto:info@kofenot.com?subject=KOFENOT%20Referral%20Partner&body=Name%3A%0AEmail%3A%0ACompany%3A%0AWho%20I%20can%20introduce%3A%0A";

const introductions = [
  { icon: Gift, title: "Corporate gifting agencies" },
  { icon: Megaphone, title: "Promotional products distributors" },
  { icon: Presentation, title: "Trade show suppliers" },
  { icon: CalendarDays, title: "Event organizers" },
  { icon: Coffee, title: "Coffee chains" },
  { icon: Building2, title: "Coworking operators" },
  { icon: Network, title: "Marketing agencies" },
  { icon: Store, title: "Technology companies" },
];

const steps = [
  ["Step 1", "Introduce a buyer."],
  ["Step 2", "We handle the conversations, pricing, samples, and fulfillment."],
  [
    "Step 3",
    " Receive 10% of the first order, capped at $5,000.",
  ],
];

const faqs = [
  ["Do I need to sell KOFENOT?", "No. A qualified introduction is enough."],
  [
    "Do I receive recurring commissions?",
    "No. The referral fee is a one-time payment based on the first qualifying order.",
  ],
  [
    "How long is my referral protected?",
    "12 months from the date of introduction.",
  ],
  ["Is there a minimum order size?", "We evaluate opportunities individually."],
];

const inputClass =
  "h-12 border border-[rgba(0,255,0,0.3)] bg-black px-4 text-base text-white outline-none focus:border-[color:var(--neon)]";

const labelClass =
  "grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground";

function Referrals() {
  return (
    <main>
      <section className="relative isolate -mt-16 min-h-[86svh] overflow-hidden bg-black pt-16">
        <img
          src={referralHero}
          alt="KOFENOT business referral opportunity"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/94 via-black/76 to-black/30" />

        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-[1320px] items-center px-4 py-20 lg:px-6">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">
              Referral partner program
            </p>
            <h1 className="mt-5 text-6xl font-black leading-[.88] tracking-tight md:text-8xl">
              Earn by Introducing <span className="neon-text">KOFENOT™</span>
            </h1>
            <div className="mt-7 max-w-3xl space-y-4 text-xl leading-relaxed text-white">
              <p>
                Know a company that could use branded KOFENOT™ units for corporate
                gifts, trade shows, employee welcome kits, coffee shops, coworking
                spaces, conferences, or promotional campaigns?
              </p>
              <p className="text-2xl font-black text-[color:var(--neon)]">
                Introduce us.
              </p>
              <p>
                If your introduction results in a qualifying first order within
                12 months, we&apos;ll pay you 5% of the first order value.
              </p>
            </div>
            <a href="#contact" className="mt-8 inline-block">
              <Button className="h-12 bg-[color:var(--neon)] px-7 font-black text-black hover:bg-[color:var(--neon-dim)]">
                Become a Referral Partner
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">
          How it works
        </p>
        <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
          A warm introduction. We handle the rest.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map(([step, text]) => (
            <article key={step} className="panel panel-hover rounded-sm p-7">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--neon)]">
                {step}
              </div>
              <p className="mt-6 text-2xl font-black leading-tight">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[rgba(0,255,0,0.18)] bg-[rgba(0,255,0,0.025)]">
        <div className="mx-auto max-w-[1320px] px-4 py-20 lg:px-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--neon)]">
            Ideal introductions
          </p>
          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            High-value buyers and channels.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {introductions.map((item) => (
              <article
                key={item.title}
                className="panel panel-hover rounded-sm p-6"
              >
                <item.icon className="h-7 w-7 text-[color:var(--neon)]" />
                <h3 className="mt-5 text-xl font-black uppercase leading-tight">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 py-20 lg:px-6">
        <h2 className="text-5xl font-black tracking-tight">FAQ</h2>
        <div className="mt-7 divide-y divide-[rgba(0,255,0,0.18)] border-y border-[rgba(0,255,0,0.18)]">
          {faqs.map(([question, answer]) => (
            <div
              key={question}
              className="grid gap-2 py-6 md:grid-cols-[.85fr_1.15fr]"
            >
              <h3 className="text-lg font-black uppercase">Q: {question}</h3>
              <p className="text-sm text-muted-foreground">A: {answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-[1320px] px-4 pb-20 lg:px-6"
      >
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="neon-border bg-[rgba(0,255,0,0.05)] p-8 neon-glow md:p-10">
            <Handshake className="h-9 w-9 text-[color:var(--neon)]" />
            <h2 className="mt-6 text-5xl font-black tracking-tight">
              Let&apos;s Talk
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us who you know and how KOFENOT might fit their business.
            </p>
            <a
              href={referralEmail}
              className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[color:var(--neon)] hover:underline"
            >
              info@kofenot.com
              <Send className="h-4 w-4" />
            </a>
          </div>

          <form
            action={referralEmail}
            method="post"
            encType="text/plain"
            className="panel rounded-sm p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                Name
                <input name="name" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </label>
            </div>

            <label className={`mt-5 ${labelClass}`}>
              Company
              <input name="company" className={inputClass} />
            </label>

            <label className={`mt-5 ${labelClass}`}>
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="resize-none border border-[rgba(0,255,0,0.3)] bg-black p-4 text-base text-white outline-none focus:border-[color:var(--neon)]"
              />
            </label>

            <Button
              type="submit"
              className="mt-6 h-12 w-full bg-[color:var(--neon)] font-black text-black hover:bg-[color:var(--neon-dim)]"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-16 text-center lg:px-6">
        <div className="border-t border-[rgba(0,255,0,0.18)] pt-8">
          <Users className="mx-auto h-7 w-7 text-[color:var(--neon)]" />
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            KOFENOT™ is available for custom branding, white-label programs,
            trade shows, conferences, promotional products, and corporate gifting.
          </p>
        </div>
      </section>
    </main>
  );
}
