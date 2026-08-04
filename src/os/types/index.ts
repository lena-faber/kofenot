export type PipelineStage =
  | "research"
  | "lead_found"
  | "qualified"
  | "contacted"
  | "reply_received"
  | "meeting_scheduled"
  | "sample_shipped"
  | "negotiation"
  | "quote_sent"
  | "waiting"
  | "won"
  | "lost"
  | "repeat_customer"
  | "partner";

export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled";
export type ContentType =
  | "linkedin"
  | "instagram"
  | "newsletter"
  | "press"
  | "case_study"
  | "landing_page"
  | "campaign";
export type AgentName = "scout" | "closer" | "cmo" | "ceo";
export type EmailDraftType =
  | "initial"
  | "follow_up_2"
  | "follow_up_3"
  | "last"
  | "holiday"
  | "trade_show"
  | "sample"
  | "meeting"
  | "quote";

export interface Company {
  id: string;
  name: string;
  website: string | null;
  industry: string | null;
  employee_count: string | null;
  location: string | null;
  linkedin_url: string | null;
  buying_reason: string | null;
  pain_points: string[];
  stage: PipelineStage;
  probability: number;
  potential_order_size: number | null;
  expected_revenue: number | null;
  next_action: string | null;
  last_activity_at: string | null;
  tags: string[];
  research_summary: Record<string, unknown> | null;
  ai_entry_point: string | null;
  is_partner: boolean;
  is_repeat_customer: boolean;
  lost_reason: string | null;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  company_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  role: string | null;
  linkedin_url: string | null;
  is_decision_maker: boolean;
  notes: string | null;
  created_at: string;
}

export interface Task {
  id: string;
  company_id: string | null;
  contact_id: string | null;
  title: string;
  description: string | null;
  due_at: string | null;
  priority: TaskPriority;
  status: TaskStatus;
  task_type: string | null;
  ai_generated: boolean;
  created_at: string;
  completed_at: string | null;
  company?: Pick<Company, "id" | "name" | "stage">;
}

export interface EmailDraft {
  id: string;
  company_id: string | null;
  contact_id: string | null;
  subject: string;
  body: string;
  draft_type: EmailDraftType;
  status: string;
  ai_generated: boolean;
  created_at: string;
  company?: Pick<Company, "id" | "name">;
  contact?: Pick<Contact, "id" | "name" | "email">;
}

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  body: string;
  status: "draft" | "scheduled" | "published";
  scheduled_for: string | null;
  metadata: Record<string, unknown>;
  ai_generated: boolean;
  created_at: string;
}

export interface Objection {
  id: string;
  objection: string;
  category: string | null;
  best_response: string;
  usage_count: number;
  success_rate: number | null;
}

export interface Activity {
  id: string;
  company_id: string | null;
  contact_id: string | null;
  type: "email" | "call" | "meeting" | "note";
  subject: string | null;
  body: string | null;
  direction: "inbound" | "outbound" | null;
  status: string | null;
  occurred_at: string;
}

export interface ScoutProspect {
  name: string;
  website: string;
  industry: string;
  location: string;
  employee_count: string;
  decision_makers: Array<{ name: string; role: string; linkedin?: string }>;
  entry_point: string;
  use_case: string;
  pain_points: string[];
  score: number;
}

export interface MeetingBrief {
  company_summary: string;
  contacts_summary: string;
  talking_points: string[];
  objections: Array<{ objection: string; response: string }>;
  recommended_products: string[];
  estimated_order: string;
  upsell_opportunities: string[];
}

export interface CeoBrief {
  top_actions: Array<{
    title: string;
    reason: string;
    company_id?: string;
    priority: TaskPriority;
  }>;
  hot_prospects: Array<{
    company_id: string;
    name: string;
    stage: PipelineStage;
    probability: number;
    reason: string;
  }>;
  at_risk: Array<{
    title: string;
    company_id?: string;
    due_at: string;
    type: string;
  }>;
  pipeline_value: number;
  revenue_this_month: number;
  emails_sent_week: number;
  recommendations: string[];
}

export interface DashboardStats {
  pipeline_value: number;
  revenue_this_month: number;
  revenue_this_week: number;
  emails_sent: number;
  reply_rate: number;
  meetings_scheduled: number;
  quotes_outstanding: number;
  samples_pending_followup: number;
  conversion_rate: number;
  repeat_customer_rate: number;
}

export interface CompanyWithRelations extends Company {
  contacts: Contact[];
  tasks: Task[];
  activities: Activity[];
  email_drafts: EmailDraft[];
}
