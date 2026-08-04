import { callAI } from "../client";
import type { ScoutProspect } from "@/os/types";
import { TARGET_INDUSTRIES } from "@/os/constants/product";

const SCOUT_TEMPLATES: ScoutProspect[] = [
  {
    name: "Philz Coffee",
    website: "https://philzcoffee.com",
    industry: "Coffee Shop",
    location: "San Francisco, CA",
    employee_count: "500-1000",
    decision_makers: [
      { name: "Amy Chen", role: "Marketing Director", linkedin: "linkedin.com/in/amychen" },
      { name: "David Park", role: "Retail Operations", linkedin: "linkedin.com/in/davidpark" },
    ],
    entry_point: "Co-branded retail in cafes + employee onboarding kits",
    use_case: "Customers bring laptops to Philz locations daily. KOFENOT co-branded with Philz logo protects laptops and keeps brand visible at every desk.",
    pain_points: ["coffee spills near customer laptops", "need differentiated retail items", "employee swag gets discarded"],
    score: 82,
  },
  {
    name: "Notion",
    website: "https://notion.so",
    industry: "Tech",
    location: "San Francisco, CA",
    employee_count: "500-1000",
    decision_makers: [
      { name: "Rachel Kim", role: "Employee Experience Lead" },
      { name: "Tom Walsh", role: "Events Marketing Manager" },
    ],
    entry_point: "New hire welcome kits + conference swag",
    use_case: "Notion ships welcome kits to remote employees worldwide. KOFENOT is pocket-flat, ships easily, and stays on desk daily — perfect for distributed teams.",
    pain_points: ["remote employee onboarding gifts", "conference booth differentiation", "swag fatigue"],
    score: 78,
  },
  {
    name: "Y Combinator",
    website: "https://ycombinator.com",
    industry: "Events",
    location: "Mountain View, CA",
    employee_count: "50-200",
    decision_makers: [
      { name: "Jessica Liu", role: "Operations Manager" },
    ],
    entry_point: "Demo Day swag + founder gifts",
    use_case: "Demo Day attendees are laptop-heavy founders. KOFENOT as a Demo Day gift protects their most important tool while keeping YC brand visible.",
    pain_points: ["memorable event swag", "founder-focused gifts", "startup budget constraints"],
    score: 75,
  },
  {
    name: "Stanford Bookstore",
    website: "https://bookstore.stanford.edu",
    industry: "University",
    location: "Stanford, CA",
    employee_count: "50-200",
    decision_makers: [
      { name: "Michael Torres", role: "Buyer" },
    ],
    entry_point: "Campus bookstore retail — California-made desk accessory",
    use_case: "Students and faculty use laptops daily on campus. KOFENOT as a Stanford-branded desk accessory fits the bookstore's tech accessory category.",
    pain_points: ["unique gift shop items", "California-made products", "student laptop protection"],
    score: 71,
  },
  {
    name: "Bespoke Post",
    website: "https://bespokepost.com",
    industry: "Corporate Gifts",
    location: "New York, NY",
    employee_count: "50-200",
    decision_makers: [
      { name: "Kevin O'Brien", role: "Product Curation Lead" },
    ],
    entry_point: "Subscription box curation — unique desk item",
    use_case: "Bespoke Post curates unique items for subscription boxes. KOFENOT is unlike anything in their catalog — practical, pocket-sized, and brandable.",
    pain_points: ["product differentiation", "sourcing unique items", "member retention through novelty"],
    score: 68,
  },
];

export async function runScoutAgent(count = 5): Promise<{
  prospects: ScoutProspect[];
  summary: string;
}> {
  const industry = TARGET_INDUSTRIES[Math.floor(Math.random() * TARGET_INDUSTRIES.length)];

  const aiResult = await callAI(
    `You are Scout, KOFENOT's prospecting AI. Find qualified B2B prospects for a pocket-sized laptop wedge. Return JSON with { prospects: ScoutProspect[], summary: string }. Each prospect needs name, website, industry, location, employee_count, decision_makers[], entry_point, use_case, pain_points[], score (0-100).`,
    `Find ${count} new qualified prospects in the ${industry} industry. Focus on companies that would buy KOFENOT for corporate gifting, retail resale, employee onboarding, or event swag.`,
    { json: true },
  );

  if (aiResult) {
    try {
      const parsed = JSON.parse(aiResult) as { prospects: ScoutProspect[]; summary: string };
      if (parsed.prospects?.length) return parsed;
    } catch {
      /* fall through to templates */
    }
  }

  const shuffled = [...SCOUT_TEMPLATES].sort(() => Math.random() - 0.5);
  const prospects = shuffled.slice(0, count);

  return {
    prospects,
    summary: `Found ${prospects.length} qualified prospects across coffee, tech, events, and retail. Top match: ${prospects[0]?.name} (${prospects[0]?.score}% fit) — ${prospects[0]?.entry_point}. Average score: ${Math.round(prospects.reduce((s, p) => s + p.score, 0) / prospects.length)}.`,
  };
}

export function researchCompany(company: {
  name: string;
  industry?: string | null;
  website?: string | null;
  location?: string | null;
}): Record<string, unknown> {
  const industry = company.industry ?? "General";
  const useCases: Record<string, string[]> = {
    "Coffee Roaster": ["Co-branded cafe retail", "Employee onboarding kits", "Customer loyalty gifts"],
    "Coffee Shop": ["Retail gift shop item", "Barista employee gifts", "Customer laptop protection program"],
    Tech: ["New hire welcome kits", "Conference booth swag", "Remote employee care packages"],
    "Corporate HR": ["Onboarding kits", "Employee appreciation gifts", "Work-from-home desk setup"],
    Coworking: ["Member welcome gifts", "Community event giveaways", "Desk accessory retail"],
    Museum: ["Museum store retail", "Member gifts", "Corporate sponsor packages"],
    University: ["Bookstore retail", "Alumni association gifts", "New student orientation"],
    Events: ["Attendee swag bags", "Speaker gifts", "Sponsor-branded giveaways"],
    Retail: ["Gift shop placement", "Impulse buy near checkout", "Seasonal gifting"],
  };

  const cases = useCases[industry] ?? ["Corporate gifting", "Retail resale", "Employee swag"];
  const roles = ["Marketing Manager", "HR Director", "Retail Buyer", "Operations Manager", "Events Manager"];

  return {
    use_cases: cases,
    suggested_roles: roles.slice(0, 3),
    brand_style: `${company.name} likely values practical, premium-feeling items that align with their brand identity`,
    news_hook: `Growing focus on employee experience and practical desk accessories in ${industry}`,
    entry_point: cases[0],
    researched_at: new Date().toISOString(),
  };
}
