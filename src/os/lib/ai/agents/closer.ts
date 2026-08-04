import { callAI } from "../client";
import type { Company, Contact, EmailDraftType, MeetingBrief, Objection } from "@/os/types";

function pickUseCase(company: Company): string {
  if (company.ai_entry_point) return company.ai_entry_point;
  const industry = company.industry ?? "";
  const map: Record<string, string> = {
    Coffee: "co-branded retail in your cafes and employee onboarding kits",
    Tech: "new hire welcome kits that employees actually keep on their desk",
    Museum: "museum store retail — a unique California-made desk accessory",
    University: "campus bookstore placement and alumni gifting",
    Coworking: "member welcome gifts that differentiate your spaces",
    Events: "attendee swag that people use daily instead of tossing",
    Retail: "gift shop placement — pocket-flat display, high margin impulse buy",
  };
  for (const [key, value] of Object.entries(map)) {
    if (industry.includes(key)) return value;
  }
  return "corporate gifting and employee desk accessories";
}

export async function generateEmail(
  company: Company,
  contact: Contact | null,
  draftType: EmailDraftType,
): Promise<{ subject: string; body: string }> {
  const firstName = contact?.name?.split(" ")[0] ?? "there";
  const role = contact?.role ?? "team";
  const useCase = pickUseCase(company);

  const aiResult = await callAI(
    `You are Closer, KOFENOT's sales AI. Write personalized outreach emails that never sound AI-generated. Reference the company specifically. Be concise, warm, and direct. No buzzwords. No "I hope this email finds you well." Return JSON: { subject, body }`,
    `Write a ${draftType} email to ${firstName} (${role}) at ${company.name} (${company.industry}, ${company.location}). Use case: ${useCase}. Pain points: ${company.pain_points?.join(", ") || "generic swag gets discarded"}. Draft type: ${draftType}.`,
    { json: true },
  );

  if (aiResult) {
    try {
      const parsed = JSON.parse(aiResult) as { subject: string; body: string };
      if (parsed.subject && parsed.body) return parsed;
    } catch {
      /* fall through */
    }
  }

  const templates: Record<EmailDraftType, { subject: string; body: string }> = {
    initial: {
      subject: `${company.name} + KOFENOT — practical swag people actually keep`,
      body: `Hi ${firstName},

I noticed ${company.name} ${company.industry ? `in the ${company.industry} space` : ""} — and thought KOFENOT might be a fit for ${useCase}.

It's a pocket-sized laptop wedge (2" × 1.6") that protects laptops from coffee spills and improves posture. No magnets, no adhesive — it snaps into the rear hinge gap. People actually keep it on their desk, so your logo stays visible every day.

Made in California, ships from Los Gatos in 24–48 hours. Wholesale starts at 30 units with custom branding.

Would a sample be useful? Happy to send one this week.

Best,
[Founder name]
KOFENOT™`,
    },
    follow_up_2: {
      subject: `Re: ${company.name} — quick follow-up`,
      body: `Hi ${firstName},

Wanted to bump this up — I know ${role} teams are busy.

The short version: KOFENOT is a pocket-flat laptop wedge your ${company.industry ? `${company.industry.toLowerCase()} ` : ""}audience would actually use daily. Not another pen or tote bag.

30-unit minimum, custom logo, free US shipping. I can ship a sample in 48 hours if that helps move things forward.

Best,
[Founder name]`,
    },
    follow_up_3: {
      subject: `One more thought for ${company.name}`,
      body: `Hi ${firstName},

Last note from me — if timing isn't right, no worries at all.

One thing I didn't mention: KOFENOT works especially well for ${useCase}. At $15 retail / 2-for-$25, the per-impression cost beats most swag because people keep it on their desk for months.

If you'd like a sample or one-pager for internal review, just reply with an address.

Best,
[Founder name]`,
    },
    last: {
      subject: `Closing the loop — ${company.name}`,
      body: `Hi ${firstName},

I'll keep this brief — I've reached out a few times about KOFENOT for ${company.name} and don't want to be a pest.

If ${useCase} is ever on your radar, I'm here. We ship samples in 48 hours from California and the 30-unit wholesale minimum keeps it accessible for most teams.

Wishing you a great quarter.

Best,
[Founder name]`,
    },
    holiday: {
      subject: `${company.name} holiday gifting idea — ships in 48hrs`,
      body: `Hi ${firstName},

With holiday gifting season approaching, wanted to flag KOFENOT as an option for ${company.name}.

It's a pocket-sized laptop wedge — practical, branded, and something people keep on their desk long after the holidays. Made in California, 30-unit minimum, custom logo included.

We have inventory in Los Gatos and ship within 48 hours. Happy to rush a sample if you're evaluating options.

Best,
[Founder name]`,
    },
    trade_show: {
      subject: `Trade show swag upgrade for ${company.name}`,
      body: `Hi ${firstName},

Saw ${company.name} ${company.website ? `(${company.website})` : ""} and thought of KOFENOT for your next event.

Most booth giveaways end up in hotel trash cans. KOFENOT folds flat, fits in a pocket, and people use it daily at their desk — so your logo gets months of visibility instead of 5 minutes.

30-unit wholesale minimum, custom branding, ships in 48 hours. Want a sample before your next show?

Best,
[Founder name]`,
    },
    sample: {
      subject: `Did your KOFENOT sample arrive?`,
      body: `Hi ${firstName},

Just checking — did the KOFENOT sample make it to you? Should have arrived within a few days of shipping from Los Gatos.

When you get a chance to look at it, I'd love to hear your thoughts on fit for ${useCase}. Happy to put together volume pricing if it looks good for ${company.name}.

Best,
[Founder name]`,
    },
    meeting: {
      subject: `Looking forward to our call — ${company.name}`,
      body: `Hi ${firstName},

Looking forward to connecting about KOFENOT for ${company.name}.

I'll come prepared with pricing for ${useCase}, branding options, and shipping timelines. If there's anything specific you'd like me to cover, just let me know.

Talk soon,
[Founder name]`,
    },
    quote: {
      subject: `KOFENOT quote for ${company.name}`,
      body: `Hi ${firstName},

As discussed, here's the KOFENOT quote for ${company.name}:

• Product: KOFENOT™ pocket laptop wedge with custom branding
• Quantity: ${company.potential_order_size ?? 30} units
• Estimated total: $${company.expected_revenue?.toLocaleString() ?? "TBD"}
• Ships from Los Gatos, CA within 24–48 hours
• Free US shipping

Quote valid for 30 days. Let me know if you need any adjustments on quantity or branding method.

Best,
[Founder name]`,
    },
  };

  return templates[draftType] ?? templates.initial;
}

export async function generateMeetingBrief(
  company: Company,
  contacts: Contact[],
  objections: Objection[],
): Promise<MeetingBrief> {
  const dm = contacts.find((c) => c.is_decision_maker) ?? contacts[0];

  const aiResult = await callAI(
    `You are a sales coach for KOFENOT. Prepare a meeting brief. Return JSON with company_summary, contacts_summary, talking_points[], objections[{objection,response}], recommended_products[], estimated_order, upsell_opportunities[]`,
    `Prepare meeting brief for ${company.name} (${company.industry}, stage: ${company.stage}). Contact: ${dm?.name ?? "unknown"} (${dm?.role ?? ""}). Expected revenue: $${company.expected_revenue ?? "TBD"}. Pain points: ${company.pain_points?.join(", ")}`,
    { json: true },
  );

  if (aiResult) {
    try {
      return JSON.parse(aiResult) as MeetingBrief;
    } catch {
      /* fall through */
    }
  }

  const relevantObjections = objections.slice(0, 4).map((o) => ({
    objection: o.objection,
    response: o.best_response,
  }));

  return {
    company_summary: `${company.name} is a ${company.industry ?? "B2B"} company based in ${company.location ?? "unknown"}. Currently at ${company.stage.replace("_", " ")} stage with ${company.probability}% close probability. Buying reason: ${company.buying_reason ?? pickUseCase(company)}.`,
    contacts_summary: contacts.length
      ? contacts.map((c) => `${c.name} (${c.role ?? "unknown role"})${c.is_decision_maker ? " — decision maker" : ""}`).join("; ")
      : "No contacts on file — ask about decision maker in meeting",
    talking_points: [
      `Lead with use case: ${pickUseCase(company)}`,
      "Emphasize daily desk visibility — not another discarded swag item",
      "Mention Made in California + 48-hour shipping from Los Gatos",
      `Wholesale minimum: 30 units. Potential order: ${company.potential_order_size ?? 30} units (~$${company.expected_revenue?.toLocaleString() ?? "TBD"})`,
      "Offer to ship sample on the call if they're interested",
    ],
    objections: relevantObjections,
    recommended_products: [
      "Standard KOFENOT with custom logo (30-unit minimum)",
      company.potential_order_size && company.potential_order_size > 100
        ? "Master carton bulk pricing for larger orders"
        : "2-for-$25 retail bundle for smaller gift programs",
    ],
    estimated_order: `${company.potential_order_size ?? 30} units (~$${company.expected_revenue?.toLocaleString() ?? "3,750"})`,
    upsell_opportunities: [
      "Private label / co-branded packaging for retail partners",
      "Repeat order program with 90-day reorder reminder",
      "Event-specific branding for trade shows or onboarding cohorts",
    ],
  };
}

export async function generateLinkedInMessage(
  company: Company,
  contact: Contact,
): Promise<string> {
  const aiResult = await callAI(
    "Write a short LinkedIn connection message for KOFENOT sales. Max 300 chars. Personal, not salesy.",
    `Message to ${contact.name} (${contact.role}) at ${company.name}. Use case: ${pickUseCase(company)}`,
  );

  if (aiResult) return aiResult;

  return `Hi ${contact.name.split(" ")[0]} — I work with ${company.industry?.toLowerCase() ?? "B2B"} teams on practical desk accessories (KOFENOT — pocket laptop wedge, Made in CA). Thought it might be relevant for ${company.name}. Would love to connect.`;
}
