import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { runScoutAgent, researchCompany } from "@/os/lib/ai/agents/scout";
import {
  generateEmail,
  generateMeetingBrief,
  generateLinkedInMessage,
} from "@/os/lib/ai/agents/closer";
import {
  generateContent,
  generateContentCalendar,
  generateCampaignIdeas,
  generateCaseStudy,
} from "@/os/lib/ai/agents/cmo";
import { buildCeoBrief, computeDashboardStats } from "@/os/lib/ai/agents/ceo";
import {
  DEMO_COMPANIES,
  DEMO_CONTACTS,
  DEMO_CONTENT,
  DEMO_OBJECTIONS,
  DEMO_TASKS,
  isDemoMode,
} from "@/os/lib/demo-data";
import type {
  Company,
  Contact,
  ContentType,
  EmailDraftType,
  PipelineStage,
  Task,
} from "@/os/types";

async function logAgentRun(agent: string, input: unknown, output: unknown) {
  if (isDemoMode()) return;
  await supabaseAdmin.from("agent_runs").insert({
    agent,
    input: input as Record<string, unknown>,
    output: output as Record<string, unknown>,
    status: "completed",
  });
}

export const getDashboard = createServerFn({ method: "GET" }).handler(async () => {
  if (isDemoMode()) {
    const companies = DEMO_COMPANIES;
    const tasks = DEMO_TASKS;
    const stats = computeDashboardStats(companies, tasks, [], []);
    const brief = buildCeoBrief(companies, tasks, stats);
    return {
      stats,
      brief,
      recentTasks: tasks.slice(0, 10),
      recentCompanies: companies.slice(0, 8),
      recentContent: DEMO_CONTENT,
      demoMode: true,
    };
  }

  const [companiesRes, tasksRes, ordersRes, emailsRes, contentRes] = await Promise.all([
    supabaseAdmin.from("companies").select("*").order("last_activity_at", { ascending: false, nullsFirst: false }),
    supabaseAdmin.from("tasks").select("*, company:companies(id, name, stage)").eq("status", "pending").order("due_at", { ascending: true, nullsFirst: false }),
    supabaseAdmin.from("orders").select("total, created_at"),
    supabaseAdmin.from("email_drafts").select("created_at, status"),
    supabaseAdmin.from("content_items").select("*").order("created_at", { ascending: false }).limit(5),
  ]);

  const companies = (companiesRes.data ?? []) as Company[];
  const tasks = (tasksRes.data ?? []) as Task[];
  const orders = ordersRes.data ?? [];
  const emails = emailsRes.data ?? [];

  const stats = computeDashboardStats(companies, tasks, orders, emails);
  const brief = buildCeoBrief(companies, tasks, stats);

  return {
    stats,
    brief,
    recentTasks: tasks.slice(0, 10),
    recentCompanies: companies.slice(0, 8),
    recentContent: contentRes.data ?? [],
  };
});

export const getCompanies = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => {
    const schema = z.object({
      stage: z.string().optional(),
      search: z.string().optional(),
      limit: z.number().optional(),
    });
    return schema.parse(input ?? {});
  })
  .handler(async ({ data }) => {
    if (isDemoMode()) {
      let list = [...DEMO_COMPANIES];
      if (data.stage) list = list.filter((c) => c.stage === data.stage);
      if (data.search) {
        const q = data.search.toLowerCase();
        list = list.filter((c) => c.name.toLowerCase().includes(q));
      }
      if (data.limit) list = list.slice(0, data.limit);
      return list;
    }

    let query = supabaseAdmin

    if (data.stage) query = query.eq("stage", data.stage);
    if (data.search) query = query.ilike("name", `%${data.search}%`);
    if (data.limit) query = query.limit(data.limit);

    const { data: companies, error } = await query;
    if (error) throw new Error(error.message);
    return companies ?? [];
  });

export const getCompany = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ id: z.string().min(1) }).parse(input))
  .handler(async ({ data }) => {
    if (isDemoMode()) {
      const company = DEMO_COMPANIES.find((c) => c.id === data.id);
      if (!company) throw new Error("Company not found");
      return {
        company,
        contacts: DEMO_CONTACTS[data.id] ?? [],
        tasks: DEMO_TASKS.filter((t) => t.company_id === data.id),
        activities: [],
        email_drafts: [],
        notes: [],
      };
    }

    const [companyRes, contactsRes, tasksRes, activitiesRes, draftsRes, notesRes] =
      await Promise.all([
        supabaseAdmin.from("companies").select("*").eq("id", data.id).single(),
        supabaseAdmin.from("contacts").select("*").eq("company_id", data.id),
        supabaseAdmin.from("tasks").select("*").eq("company_id", data.id).order("due_at"),
        supabaseAdmin.from("activities").select("*").eq("company_id", data.id).order("occurred_at", { ascending: false }),
        supabaseAdmin.from("email_drafts").select("*").eq("company_id", data.id).order("created_at", { ascending: false }),
        supabaseAdmin.from("notes").select("*").eq("company_id", data.id).order("created_at", { ascending: false }),
      ]);

    if (companyRes.error) throw new Error(companyRes.error.message);

    return {
      company: companyRes.data as Company,
      contacts: (contactsRes.data ?? []) as Contact[],
      tasks: tasksRes.data ?? [],
      activities: activitiesRes.data ?? [],
      email_drafts: draftsRes.data ?? [],
      notes: notesRes.data ?? [],
    };
  });

export const updateCompanyStage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().min(1), stage: z.string() }).parse(input),
  )
  .handler(async ({ data }) => {
    if (isDemoMode()) return { ok: true };

    const { error } = await supabaseAdmin
      .from("companies")
      .update({
        stage: data.stage as PipelineStage,
        last_activity_at: new Date().toISOString(),
      })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const createCompany = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        name: z.string().min(1),
        website: z.string().optional(),
        industry: z.string().optional(),
        location: z.string().optional(),
        employee_count: z.string().optional(),
        stage: z.string().optional(),
        ai_entry_point: z.string().optional(),
        tags: z.array(z.string()).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    if (isDemoMode()) {
      return { id: `demo-${Date.now()}`, name: data.name, stage: data.stage ?? "lead_found" };
    }

    const research = researchCompany(data);
    const { data: company, error } = await supabaseAdmin
      .from("companies")
      .insert({
        name: data.name,
        website: data.website ?? null,
        industry: data.industry ?? null,
        location: data.location ?? null,
        employee_count: data.employee_count ?? null,
        stage: (data.stage as PipelineStage) ?? "lead_found",
        ai_entry_point: data.ai_entry_point ?? (research.entry_point as string),
        research_summary: research,
        tags: data.tags ?? [],
        last_activity_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return company;
  });

export const runScout = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({ count: z.number().min(1).max(50).optional() }).parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    const result = await runScoutAgent(data.count ?? 5);
    await logAgentRun("scout", { count: data.count }, result);
    return result;
  });

export const importScoutProspect = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        name: z.string(),
        website: z.string(),
        industry: z.string(),
        location: z.string(),
        employee_count: z.string(),
        entry_point: z.string(),
        use_case: z.string(),
        pain_points: z.array(z.string()),
        decision_makers: z.array(
          z.object({ name: z.string(), role: z.string(), linkedin: z.string().optional() }),
        ),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    if (isDemoMode()) {
      return { id: `demo-${Date.now()}`, name: data.name, stage: "lead_found" };
    }

    const research = researchCompany(data);
    const { data: company, error } = await supabaseAdmin
      .from("companies")
      .insert({
        name: data.name,
        website: data.website,
        industry: data.industry,
        location: data.location,
        employee_count: data.employee_count,
        stage: "lead_found",
        ai_entry_point: data.entry_point,
        pain_points: data.pain_points,
        research_summary: { ...research, use_case: data.use_case },
        tags: ["scout-import"],
        last_activity_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (error) throw new Error(error.message);

    if (data.decision_makers.length > 0) {
      await supabaseAdmin.from("contacts").insert(
        data.decision_makers.map((dm, i) => ({
          company_id: company.id,
          name: dm.name,
          role: dm.role,
          linkedin_url: dm.linkedin ?? null,
          is_decision_maker: i === 0,
        })),
      );
    }

    await supabaseAdmin.from("tasks").insert({
      company_id: company.id,
      title: `Research & qualify ${data.name}`,
      description: `Scout import — entry point: ${data.entry_point}`,
      due_at: new Date(Date.now() + 86400000).toISOString(),
      priority: "medium",
      task_type: "research",
      ai_generated: true,
    });

    return company;
  });

export const generateEmailDraft = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        company_id: z.string().min(1),
        contact_id: z.string().optional(),
        draft_type: z.string(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    let company: Company;
    let contact: Contact | null = null;

    if (isDemoMode()) {
      company = DEMO_COMPANIES.find((c) => c.id === data.company_id)!;
      if (!company) throw new Error("Company not found");
      const contacts = DEMO_CONTACTS[data.company_id] ?? [];
      contact = data.contact_id
        ? contacts.find((c) => c.id === data.contact_id) ?? null
        : contacts[0] ?? null;
    } else {
      const [companyRes, contactRes] = await Promise.all([
        supabaseAdmin.from("companies").select("*").eq("id", data.company_id).single(),
        data.contact_id
          ? supabaseAdmin.from("contacts").select("*").eq("id", data.contact_id).single()
          : Promise.resolve({ data: null }),
      ]);
      if (companyRes.error) throw new Error(companyRes.error.message);
      company = companyRes.data as Company;
      contact = contactRes.data as Contact | null;
    }

    const draft = await generateEmail(company, contact, data.draft_type as EmailDraftType);

    if (isDemoMode()) {
      await logAgentRun("closer", { company_id: data.company_id, draft_type: data.draft_type }, draft);
      return { id: `draft-${Date.now()}`, ...draft, draft_type: data.draft_type, company_id: data.company_id };
    }

    const { data: saved, error } = await supabaseAdmin
      .from("email_drafts")
      .insert({
        company_id: data.company_id,
        contact_id: data.contact_id ?? null,
        subject: draft.subject,
        body: draft.body,
        draft_type: data.draft_type,
        ai_generated: true,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);

    await logAgentRun("closer", { company_id: data.company_id, draft_type: data.draft_type }, draft);
    return saved;
  });

export const getMeetingBrief = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ company_id: z.string().min(1) }).parse(input))
  .handler(async ({ data }) => {
    let company: Company;
    let contacts: Contact[];
    let objections: typeof DEMO_OBJECTIONS;

    if (isDemoMode()) {
      company = DEMO_COMPANIES.find((c) => c.id === data.company_id)!;
      if (!company) throw new Error("Company not found");
      contacts = DEMO_CONTACTS[data.company_id] ?? [];
      objections = DEMO_OBJECTIONS;
    } else {
      const [companyRes, contactsRes, objectionsRes] = await Promise.all([
        supabaseAdmin.from("companies").select("*").eq("id", data.company_id).single(),
        supabaseAdmin.from("contacts").select("*").eq("company_id", data.company_id),
        supabaseAdmin.from("objections").select("*").limit(8),
      ]);
      if (companyRes.error) throw new Error(companyRes.error.message);
      company = companyRes.data as Company;
      contacts = (contactsRes.data ?? []) as Contact[];
      objections = objectionsRes.data ?? [];
    }

    const brief = await generateMeetingBrief(company, contacts, objections);

    await logAgentRun("closer", { company_id: data.company_id, type: "meeting_brief" }, brief);
    return brief;
  });

export const generateLinkedIn = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({ company_id: z.string().uuid(), contact_id: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data }) => {
    const [companyRes, contactRes] = await Promise.all([
      supabaseAdmin.from("companies").select("*").eq("id", data.company_id).single(),
      supabaseAdmin.from("contacts").select("*").eq("id", data.contact_id).single(),
    ]);
    if (companyRes.error || contactRes.error) throw new Error("Not found");

    return generateLinkedInMessage(companyRes.data as Company, contactRes.data as Contact);
  });

export const runCmoGenerate = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        type: z.string(),
        context: z.string().optional(),
        save: z.boolean().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const content = await generateContent(data.type as ContentType, data.context);

    if (data.save) {
      const { data: saved, error } = await supabaseAdmin
        .from("content_items")
        .insert({
          title: content.title,
          type: data.type,
          body: content.body,
          status: "draft",
          ai_generated: true,
        })
        .select()
        .single();
      if (error) throw new Error(error.message);
      await logAgentRun("cmo", { type: data.type }, content);
      return saved;
    }

    await logAgentRun("cmo", { type: data.type }, content);
    return content;
  });

export const getContentCalendar = createServerFn({ method: "GET" }).handler(async () => {
  const calendar = await generateContentCalendar();
  if (isDemoMode()) return { calendar, existing: DEMO_CONTENT };
  const existingRes = await supabaseAdmin.from("content_items").select("*").order("scheduled_for", { ascending: true });
  return { calendar, existing: existingRes.data ?? [] };
});

export const getCampaignIdeas = createServerFn({ method: "GET" }).handler(async () => {
  return generateCampaignIdeas();
});

export const getPipeline = createServerFn({ method: "GET" }).handler(async () => {
  if (isDemoMode()) {
    return DEMO_COMPANIES.filter((c) => !["won", "lost"].includes(c.stage));
  }
  const { data, error } = await supabaseAdmin
    .from("companies")
    .select("*")
    .not("stage", "in", '("won","lost")')
    .order("expected_revenue", { ascending: false, nullsFirst: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const getTasks = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ status: z.string().optional() }).parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    if (isDemoMode()) {
      let tasks = [...DEMO_TASKS];
      if (data.status) tasks = tasks.filter((t) => t.status === data.status);
      return tasks;
    }
    let query = supabaseAdmin
      .from("tasks")
      .select("*, company:companies(id, name, stage)")
      .order("due_at", { ascending: true, nullsFirst: false });
    if (data.status) query = query.eq("status", data.status);
    const { data: tasks, error } = await query;
    if (error) throw new Error(error.message);
    return tasks ?? [];
  });

export const completeTask = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ id: z.string().min(1) }).parse(input))
  .handler(async ({ data }) => {
    if (isDemoMode()) return { ok: true };

    const { error } = await supabaseAdmin
      .from("tasks")
      .update({ status: "completed", completed_at: new Date().toISOString() })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getObjections = createServerFn({ method: "GET" }).handler(async () => {
  if (isDemoMode()) return DEMO_OBJECTIONS;
  const { data, error } = await supabaseAdmin.from("objections").select("*").order("usage_count", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const getAnalytics = createServerFn({ method: "GET" }).handler(async () => {
  if (isDemoMode()) {
    const companies = DEMO_COMPANIES;
    const byIndustry: Record<string, number> = {};
    const byStage: Record<string, number> = {};
    for (const c of companies) {
      const ind = c.industry ?? "Unknown";
      byIndustry[ind] = (byIndustry[ind] ?? 0) + 1;
      byStage[c.stage] = (byStage[c.stage] ?? 0) + 1;
    }
    return {
      byIndustry: Object.entries(byIndustry).map(([industry, count]) => ({ industry, count })).sort((a, b) => b.count - a.count),
      byStage: Object.entries(byStage).map(([stage, count]) => ({ stage, count })),
      totalRevenue: 15000,
      totalCompanies: companies.length,
      totalEmails: 0,
      totalSamples: 1,
      recentAgentRuns: [],
    };
  }

  const [companiesRes, ordersRes, emailsRes, samplesRes, agentRunsRes] = await Promise.all([
    supabaseAdmin.from("companies").select("*"),
    supabaseAdmin.from("orders").select("*"),
    supabaseAdmin.from("email_drafts").select("*"),
    supabaseAdmin.from("samples").select("*"),
    supabaseAdmin.from("agent_runs").select("*").order("created_at", { ascending: false }).limit(20),
  ]);

  const companies = companiesRes.data ?? [];
  const byIndustry: Record<string, number> = {};
  const byStage: Record<string, number> = {};

  for (const c of companies) {
    const ind = (c as Company).industry ?? "Unknown";
    byIndustry[ind] = (byIndustry[ind] ?? 0) + 1;
    byStage[(c as Company).stage] = (byStage[(c as Company).stage] ?? 0) + 1;
  }

  const totalRevenue = (ordersRes.data ?? []).reduce(
    (s, o) => s + ((o as { total: number }).total ?? 0),
    0,
  );

  return {
    byIndustry: Object.entries(byIndustry)
      .map(([industry, count]) => ({ industry, count }))
      .sort((a, b) => b.count - a.count),
    byStage: Object.entries(byStage).map(([stage, count]) => ({ stage, count })),
    totalRevenue,
    totalCompanies: companies.length,
    totalEmails: emailsRes.data?.length ?? 0,
    totalSamples: samplesRes.data?.length ?? 0,
    recentAgentRuns: agentRunsRes.data ?? [],
  };
});

export const generateCaseStudyForCompany = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ company_id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    const { data: company, error } = await supabaseAdmin
      .from("companies")
      .select("*")
      .eq("id", data.company_id)
      .single();
    if (error) throw new Error(error.message);

    const content = await generateCaseStudy(company as Company);
    const { data: saved, error: saveError } = await supabaseAdmin
      .from("content_items")
      .insert({
        title: content.title,
        type: "case_study",
        body: content.body,
        status: "draft",
        ai_generated: true,
        metadata: { company_id: data.company_id },
      })
      .select()
      .single();
    if (saveError) throw new Error(saveError.message);
    return saved;
  });

export const searchAll = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ q: z.string().min(1) }).parse(input))
  .handler(async ({ data }) => {
    if (isDemoMode()) {
      const q = data.q.toLowerCase();
      return {
        companies: DEMO_COMPANIES.filter((c) => c.name.toLowerCase().includes(q)).map((c) => ({
          id: c.id,
          name: c.name,
          industry: c.industry,
          stage: c.stage,
        })),
        contacts: [],
        tasks: DEMO_TASKS.filter((t) => t.title.toLowerCase().includes(q)).map((t) => ({
          id: t.id,
          title: t.title,
          company_id: t.company_id,
          company: t.company ? { name: t.company.name } : undefined,
        })),
      };
    }
    const [companies, contacts, tasks] = await Promise.all([
      supabaseAdmin.from("companies").select("id, name, industry, stage").ilike("name", `%${data.q}%`).limit(8),
      supabaseAdmin.from("contacts").select("id, name, email, company_id, company:companies(name)").ilike("name", `%${data.q}%`).limit(5),
      supabaseAdmin.from("tasks").select("id, title, company_id, company:companies(name)").ilike("title", `%${data.q}%`).limit(5),
    ]);
    return {
      companies: companies.data ?? [],
      contacts: contacts.data ?? [],
      tasks: tasks.data ?? [],
    };
  });
