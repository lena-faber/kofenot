import { callAI } from "../client";
import type { Company, ContentItem, ContentType } from "@/os/types";

const CONTENT_TEMPLATES: Record<ContentType, (ctx?: string) => { title: string; body: string }> = {
  linkedin: (ctx) => ({
    title: ctx ? `LinkedIn: ${ctx}` : "Daily LinkedIn — KOFENOT use case",
    body: `Most corporate swag ends up in a drawer within a week.

KOFENOT is different:
→ Protects laptops from coffee spills
→ Improves posture at any desk
→ Folds flat — pocket-sized
→ Your logo stays visible every workday

Made in California. 30-unit wholesale minimum. Ships in 48 hours.

${ctx ? `Perfect for ${ctx}.` : "Who's tired of swag nobody keeps?"}

#KOFENOT #CorporateGifts #DeskAccessories`,
  }),
  instagram: () => ({
    title: "Instagram — product in action",
    body: `☕ + 💻 = disaster waiting to happen.

KOFENOT sits in your laptop hinge gap — no magnets, no adhesive, no clips. Just a mechanical snap that protects your machine and lifts the screen for better posture.

Pocket-sized. Made in California. Ships in 48hrs.

#KOFENOT #LaptopStand #CoffeeShop #WFH #DeskSetup`,
  }),
  newsletter: () => ({
    title: "Newsletter — monthly update",
    body: `Subject: KOFENOT Monthly — New partners, use cases, and wholesale updates

Hi there,

Here's what's new at KOFENOT this month:

NEW USE CASE: Coffee shop retail
Independent roasters are co-branding KOFENOT for their cafe gift shops. Customers buy them alongside beans — practical, branded, and Made in California.

WHOLESALE UPDATE
• 30-unit minimum unchanged
• Master cartons available for 500+ unit orders
• Private label and corporate branding included

CUSTOMER STORY
A Bay Area museum added KOFENOT to their store — sold out first month. Pocket-flat packaging fits any display.

Ready to order? Reply to this email or visit kofenot.com/wholesale.

— The KOFENOT Team`,
  }),
  press: (ctx) => ({
    title: ctx ? `Press pitch: ${ctx}` : "Press pitch — Made in California desk accessory",
    body: `FOR IMMEDIATE RELEASE

KOFENOT: The Pocket-Sized Laptop Wedge That Coffee Shops and Corporations Are Adopting

Los Gatos, CA — KOFENOT™, a pocket-sized laptop wedge made in California, is gaining traction among coffee shops, museums, and corporate gifting programs as companies seek swag that people actually keep.

Unlike traditional promotional products, KOFENOT protects laptops from coffee spills, improves posture, and stays on the user's desk daily — keeping the brand visible for months instead of minutes.

Key facts:
• 2.0 × 1.6" — folds flat, fits in a pocket
• No magnets, clips, or adhesive
• SGS tested, RoHS compliant, patent pending
• Retail $15 / 2 for $25 / wholesale 30-unit minimum
• Ships within 24–48 hours from Los Gatos, CA

${ctx ? `Current angle: ${ctx}` : "Available for interview and product samples."}

Contact: [founder email]`,
  }),
  case_study: (ctx) => ({
    title: ctx ? `Case study: ${ctx}` : "Case study — museum retail success",
    body: `CASE STUDY: How SFMOMA Added a California-Made Desk Accessory to Their Museum Store

THE CHALLENGE
SFMOMA's retail team wanted unique, locally-made products that appealed to their design-conscious audience. Standard gift shop items weren't differentiated enough.

THE SOLUTION
KOFENOT — a pocket-sized laptop wedge made in California. Museum-branded, pocket-flat packaging, retail-ready at $15.

THE RESULTS
• Sold out first month in museum store
• High repeat purchase rate from members
• Positive customer feedback on practicality
• Brand visibility extends beyond the museum visit

"People actually use it every day at their desk. That's the kind of brand exposure you can't buy with a tote bag."
— Retail Buyer, SFMOMA

Interested in a similar program? 30-unit wholesale minimum. Contact us for pricing.`,
  }),
  landing_page: (ctx) => ({
    title: ctx ? `Landing page: ${ctx}` : "Landing page — wholesale program",
    body: `# KOFENOT™ for ${ctx ?? "Your Business"}

## The swag people actually keep

KOFENOT is a pocket-sized laptop wedge that protects laptops, improves posture, and keeps your brand visible every day.

### Why teams choose KOFENOT
- **Daily use** — stays on the desk, not in a drawer
- **Pocket-flat** — easy to ship, store, and display
- **Custom branding** — your logo on every unit
- **Made in California** — ships in 48 hours from Los Gatos

### Pricing
| Pack | Price | Best for |
|------|-------|----------|
| Single | $15 | Retail |
| 2-pack | $25 | Gift sets |
| Wholesale (30+) | Contact us | Corporate, retail, events |

### Get started
Request a sample or wholesale quote — we ship within 48 hours.

[Request Sample] [Get Wholesale Pricing]`,
  }),
  campaign: (ctx) => ({
    title: ctx ? `Campaign: ${ctx}` : "Q4 Corporate Gifting Campaign",
    body: `CAMPAIGN: ${ctx ?? "Q4 Corporate Gifting Push"}

TIMELINE: 8 weeks

WEEK 1-2: Research & qualify 50 corporate HR/marketing leads
WEEK 3-4: Personalized outreach + sample shipments
WEEK 5-6: Follow-up sequence + meeting scheduling
WEEK 7-8: Quote generation + close before holiday deadline

CHANNELS:
• LinkedIn (3 posts/week)
• Email outreach (Closer agent)
• Direct sample program

OFFER:
• 30-unit minimum wholesale
• Free US shipping
• Rush production for holiday delivery
• Custom branding included

TARGET: $50K pipeline value, 5 closed deals

KPIs: Reply rate >15%, sample-to-close >30%, avg order $7,500`,
  }),
};

export async function generateContent(
  type: ContentType,
  context?: string,
): Promise<{ title: string; body: string }> {
  const aiResult = await callAI(
    `You are CMO, KOFENOT's marketing AI. Create compelling ${type} content. Match KOFENOT brand voice: direct, practical, no fluff. Return JSON: { title, body }`,
    `Create ${type} content${context ? ` about: ${context}` : ""}. KOFENOT is a pocket-sized laptop wedge for corporate gifting, retail, and events.`,
    { json: true },
  );

  if (aiResult) {
    try {
      const parsed = JSON.parse(aiResult) as { title: string; body: string };
      if (parsed.title && parsed.body) return parsed;
    } catch {
      /* fall through */
    }
  }

  const template = CONTENT_TEMPLATES[type];
  return template(context);
}

export async function generateContentCalendar(): Promise<
  Array<{ date: string; type: ContentType; title: string; body: string }>
> {
  const types: ContentType[] = ["linkedin", "linkedin", "instagram", "newsletter", "linkedin"];
  const contexts = [
    "coffee shop retail partnerships",
    "corporate onboarding kits",
    "trade show swag upgrade",
    "monthly product update",
    "museum and university retail",
  ];

  const calendar = [];
  const now = new Date();

  for (let i = 0; i < 5; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() + i + 1);
    const content = await generateContent(types[i], contexts[i]);
    calendar.push({
      date: date.toISOString().split("T")[0],
      type: types[i],
      title: content.title,
      body: content.body,
    });
  }

  return calendar;
}

export async function generateCaseStudy(company: Company): Promise<{ title: string; body: string }> {
  return generateContent("case_study", `${company.name} — ${company.industry} — ${company.buying_reason ?? "corporate gifting"}`);
}

export async function generateCampaignIdeas(): Promise<string[]> {
  const aiResult = await callAI(
    "Generate 5 marketing campaign ideas for KOFENOT. Return JSON: { ideas: string[] }",
    "Focus on Q4 gifting, coffee shop partnerships, trade show season, university bookstores, and corporate onboarding.",
    { json: true },
  );

  if (aiResult) {
    try {
      const parsed = JSON.parse(aiResult) as { ideas: string[] };
      if (parsed.ideas?.length) return parsed.ideas;
    } catch {
      /* fall through */
    }
  }

  return [
    "Q4 Corporate Gifting Blitz — target HR teams with 48hr shipping guarantee",
    "Coffee Shop Co-Brand Program — partner with 10 independent roasters for retail placement",
    "Trade Show Season Push — 'Swag people keep' messaging for event organizers",
    "University Bookstore Roadshow — California-made angle for campus retail buyers",
    "Sample-to-Close Sprint — ship 20 samples/week with automated follow-up sequence",
  ];
}

export function planContentWeek(existing: ContentItem[]): {
  daily: ContentItem[];
  gaps: string[];
} {
  const scheduled = existing.filter((c) => c.scheduled_for);
  const gaps: string[] = [];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  for (const day of days) {
    const hasContent = scheduled.some((c) => {
      const d = new Date(c.scheduled_for!);
      return d.toLocaleDateString("en-US", { weekday: "short" }) === day;
    });
    if (!hasContent) gaps.push(day);
  }

  return { daily: scheduled, gaps };
}
