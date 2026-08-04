-- KOFENOT™ Revenue OS — Complete CRM Schema

-- Pipeline stages
create type public.pipeline_stage as enum (
  'research',
  'lead_found',
  'qualified',
  'contacted',
  'reply_received',
  'meeting_scheduled',
  'sample_shipped',
  'negotiation',
  'quote_sent',
  'waiting',
  'won',
  'lost',
  'repeat_customer',
  'partner'
);

-- Companies
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  website text,
  industry text,
  employee_count text,
  location text,
  linkedin_url text,
  buying_reason text,
  pain_points text[] default '{}',
  stage public.pipeline_stage not null default 'research',
  probability integer not null default 0 check (probability >= 0 and probability <= 100),
  potential_order_size numeric(12,2),
  expected_revenue numeric(12,2),
  next_action text,
  last_activity_at timestamptz,
  tags text[] default '{}',
  research_summary jsonb,
  ai_entry_point text,
  is_partner boolean not null default false,
  is_repeat_customer boolean not null default false,
  lost_reason text,
  referral_source_id uuid references public.companies(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index companies_stage_idx on public.companies(stage);
create index companies_industry_idx on public.companies(industry);
create index companies_last_activity_idx on public.companies(last_activity_at desc nulls last);

-- Contacts
create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  name text not null,
  email text,
  phone text,
  role text,
  linkedin_url text,
  is_decision_maker boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

create index contacts_company_idx on public.contacts(company_id);

-- Activities (emails, calls, meetings)
create table public.activities (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  type text not null check (type in ('email', 'call', 'meeting', 'note')),
  subject text,
  body text,
  direction text check (direction in ('inbound', 'outbound')),
  status text,
  metadata jsonb default '{}',
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index activities_company_idx on public.activities(company_id);
create index activities_occurred_idx on public.activities(occurred_at desc);

-- Tasks
create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  title text not null,
  description text,
  due_at timestamptz,
  priority text not null default 'medium' check (priority in ('low', 'medium', 'high', 'urgent')),
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'completed', 'cancelled')),
  task_type text,
  ai_generated boolean not null default false,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index tasks_due_idx on public.tasks(due_at) where status = 'pending';
create index tasks_company_idx on public.tasks(company_id);

-- Notes
create table public.notes (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  content text not null,
  created_at timestamptz not null default now()
);

-- Opportunities
create table public.opportunities (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  title text not null,
  stage public.pipeline_stage not null,
  value numeric(12,2),
  probability integer default 0,
  expected_close_date date,
  lost_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Quotes
create table public.quotes (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  quote_number text,
  items jsonb default '[]',
  total numeric(12,2),
  status text not null default 'draft',
  valid_until date,
  created_at timestamptz not null default now()
);

-- Orders
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  quote_id uuid references public.quotes(id) on delete set null,
  order_number text,
  total numeric(12,2) not null,
  status text not null default 'pending',
  shipped_at timestamptz,
  created_at timestamptz not null default now()
);

-- Samples
create table public.samples (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  shipped_at timestamptz,
  tracking_number text,
  follow_up_due timestamptz,
  converted boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

-- Marketing content
create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null check (type in ('linkedin', 'instagram', 'newsletter', 'press', 'case_study', 'landing_page', 'campaign')),
  body text not null,
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'published')),
  scheduled_for timestamptz,
  metadata jsonb default '{}',
  ai_generated boolean not null default true,
  created_at timestamptz not null default now()
);

-- Partnerships
create table public.partnerships (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text,
  company_id uuid references public.companies(id) on delete set null,
  status text not null default 'active',
  notes text,
  created_at timestamptz not null default now()
);

-- Objection library
create table public.objections (
  id uuid primary key default gen_random_uuid(),
  objection text not null,
  category text,
  best_response text not null,
  usage_count integer not null default 0,
  success_rate numeric(5,2),
  created_at timestamptz not null default now()
);

-- Email drafts
create table public.email_drafts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  subject text not null,
  body text not null,
  draft_type text not null,
  status text not null default 'draft',
  ai_generated boolean not null default true,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

create index email_drafts_company_idx on public.email_drafts(company_id);

-- Agent runs
create table public.agent_runs (
  id uuid primary key default gen_random_uuid(),
  agent text not null check (agent in ('scout', 'closer', 'cmo', 'ceo')),
  input jsonb default '{}',
  output jsonb default '{}',
  status text not null default 'completed',
  created_at timestamptz not null default now()
);

-- Analytics events
create table public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  company_id uuid references public.companies(id) on delete set null,
  metadata jsonb default '{}',
  created_at timestamptz not null default now()
);

-- Updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger companies_updated_at
  before update on public.companies
  for each row execute function public.set_updated_at();

create trigger opportunities_updated_at
  before update on public.opportunities
  for each row execute function public.set_updated_at();

-- RLS: service role bypasses; authenticated users get full access (founder app)
alter table public.companies enable row level security;
alter table public.contacts enable row level security;
alter table public.activities enable row level security;
alter table public.tasks enable row level security;
alter table public.notes enable row level security;
alter table public.opportunities enable row level security;
alter table public.quotes enable row level security;
alter table public.orders enable row level security;
alter table public.samples enable row level security;
alter table public.content_items enable row level security;
alter table public.partnerships enable row level security;
alter table public.objections enable row level security;
alter table public.email_drafts enable row level security;
alter table public.agent_runs enable row level security;
alter table public.analytics_events enable row level security;

create policy "authenticated full access" on public.companies for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.contacts for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.activities for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.tasks for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.notes for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.opportunities for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.quotes for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.orders for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.samples for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.content_items for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.partnerships for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.objections for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.email_drafts for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.agent_runs for all to authenticated using (true) with check (true);
create policy "authenticated full access" on public.analytics_events for all to authenticated using (true) with check (true);

-- Seed objection library
insert into public.objections (objection, category, best_response) values
  ('Too expensive', 'price', 'At $15 retail with 2-for-$25, KOFENOT costs less per impression than most swag — and people actually keep it on their desk daily. For wholesale at 30+ units, the per-unit cost drops significantly while your brand stays visible every workday.'),
  ('No budget', 'budget', 'Many teams fund this from employee experience or marketing budgets rather than procurement. A 30-unit run for onboarding or a trade show often fits under $500 — less than one sponsored lunch.'),
  ('Already have swag', 'competition', 'That''s exactly why KOFENOT works — it''s not another pen or tote bag. It protects laptops from coffee spills and improves posture. People use it daily, so your logo stays visible instead of sitting in a drawer.'),
  ('Need approval', 'process', 'Happy to send a one-pager and sample for your internal review. Most approvals move faster when stakeholders can hold the product — I can ship a sample within 48 hours from Los Gatos.'),
  ('Not interested', 'timing', 'Totally understand. Would it help if I checked back before your next event season or onboarding cycle? KOFENOT works especially well for Q4 gifting and new-hire kits.'),
  ('Wrong timing', 'timing', 'No problem — when does your team typically plan swag or employee gifts? I can follow up ahead of that cycle with pricing and a sample ready to go.'),
  ('Need samples', 'samples', 'Absolutely. I ship samples within 24–48 hours from our Los Gatos inventory. Send me your address and any branding preferences — I''ll include spec sheets and wholesale pricing.'),
  ('We use a promo distributor', 'channel', 'Great — we work with promo agencies regularly. KOFENOT is retail-ready with master cartons, private label, and corporate branding. I can send wholesale specs and margin guidance for your catalog.');

-- Seed partnerships
insert into public.partnerships (name, type, status, notes) values
  ('Blue Bottle Coffee', 'coffee_shop', 'prospect', 'Independent coffee chain — potential co-branded retail'),
  ('JP Graphics', 'printing', 'active', 'Printing partner for custom branding'),
  ('PromoShop Distributors', 'distributor', 'prospect', 'Regional promo product distributor');

-- Seed sample companies for demo
insert into public.companies (name, website, industry, employee_count, location, stage, probability, potential_order_size, expected_revenue, buying_reason, pain_points, tags, ai_entry_point, next_action, last_activity_at) values
  ('Verve Coffee Roasters', 'https://vervecoffee.com', 'Coffee Roaster', '200-500', 'Santa Cruz, CA', 'qualified', 45, 500, 3750, 'Retail gift shop + employee swag', ARRAY['coffee spills near laptops', 'brand visibility in cafes'], ARRAY['coffee', 'retail', 'hot'], 'Employee onboarding kits for remote baristas — KOFENOT protects laptops at home and in-store', 'Send personalized outreach to HR lead', now() - interval '2 days'),
  ('Stripe', 'https://stripe.com', 'Tech', '5000+', 'San Francisco, CA', 'contacted', 35, 2000, 15000, 'Corporate gifting + event swag', ARRAY['generic swag gets discarded', 'need useful desk items'], ARRAY['tech', 'corporate', 'enterprise'], 'New hire welcome kits — practical item employees keep on desk daily', 'Follow up on initial email — 2nd touch', now() - interval '5 days'),
  ('WeWork', 'https://wework.com', 'Coworking', '1000+', 'New York, NY', 'research', 25, 1000, 7500, 'Member welcome gifts', ARRAY['differentiation from other coworking spaces', 'practical member perks'], ARRAY['coworking', 'b2b'], 'Member onboarding gift — pocket-sized, no desk clutter', 'Research decision maker — Community Manager', now() - interval '1 day'),
  ('SFMOMA', 'https://sfmoma.org', 'Museum', '200-500', 'San Francisco, CA', 'reply_received', 60, 300, 2250, 'Museum store retail + member gifts', ARRAY['unique gift shop items', 'local California products'], ARRAY['museum', 'retail', 'hot'], 'Museum store retail — Made in California, pocket-sized, unique', 'Schedule call with retail buyer', now() - interval '1 day'),
  ('HubSpot', 'https://hubspot.com', 'Tech', '5000+', 'Cambridge, MA', 'meeting_scheduled', 70, 1500, 11250, 'Conference swag + sales kits', ARRAY['swag fatigue at trade shows', 'need memorable booth giveaway'], ARRAY['tech', 'events', 'priority'], 'INBOUND conference booth giveaway — people keep it vs toss it', 'Prepare meeting brief — review past notes', now() - interval '3 hours'),
  ('Peet''s Coffee', 'https://peets.com', 'Coffee Roaster', '1000+', 'Emeryville, CA', 'sample_shipped', 55, 800, 6000, 'Corporate gifting + cafe retail', ARRAY['brand extension beyond coffee', 'employee gifts'], ARRAY['coffee', 'corporate'], 'Co-branded retail in cafes + corporate holiday gifting', 'Sample follow-up — check if received', now() - interval '7 days'),
  ('University of Michigan', 'https://umich.edu', 'University', '5000+', 'Ann Arbor, MI', 'negotiation', 65, 600, 4500, 'Bookstore retail + alumni gifts', ARRAY['student laptop protection', 'campus bookstore differentiation'], ARRAY['university', 'retail'], 'Campus bookstore + alumni association gifting', 'Send updated quote with volume pricing', now() - interval '2 days'),
  ('TechCrunch Disrupt', 'https://techcrunch.com/events', 'Events', '50-200', 'San Francisco, CA', 'quote_sent', 50, 5000, 37500, 'Attendee swag bags', ARRAY['memorable swag vs disposable items', 'sponsor visibility'], ARRAY['events', 'trade-show', 'priority'], 'Disrupt swag bag — useful daily item with sponsor branding area', 'Follow up on quote — 3rd touch', now() - interval '4 days'),
  ('Anthropologie', 'https://anthropologie.com', 'Retail', '5000+', 'Philadelphia, PA', 'won', 100, 2000, 15000, 'Gift shop retail', ARRAY['unique desk accessories', 'California-made products'], ARRAY['retail', 'won'], 'Gift shop retail placement — pocket flat display friendly', 'Send reorder reminder in 90 days', now() - interval '30 days'),
  ('Airport Retail Group', 'https://example.com', 'Airport Retail', '200-500', 'Los Angeles, CA', 'lost', 0, 1000, 0, 'Travel retail', ARRAY['price sensitivity', 'long approval cycles'], ARRAY['airport', 'lost'], 'Travel retail impulse buy near gates', 'Archive — revisit Q1 2027', now() - interval '60 days');

-- Seed contacts for sample companies
insert into public.contacts (company_id, name, email, role, is_decision_maker, linkedin_url)
select c.id, 'Sarah Chen', 'schen@vervecoffee.com', 'HR Director', true, 'https://linkedin.com/in/sarahchen'
from public.companies c where c.name = 'Verve Coffee Roasters';

insert into public.contacts (company_id, name, email, role, is_decision_maker, linkedin_url)
select c.id, 'Marcus Webb', 'mwebb@stripe.com', 'Employee Experience Lead', true, 'https://linkedin.com/in/marcuswebb'
from public.companies c where c.name = 'Stripe';

insert into public.contacts (company_id, name, email, role, is_decision_maker)
select c.id, 'Lisa Park', 'lpark@sfmoma.org', 'Retail Buyer', true
from public.companies c where c.name = 'SFMOMA';

insert into public.contacts (company_id, name, email, role, is_decision_maker)
select c.id, 'James Okonkwo', 'jokonkwo@hubspot.com', 'Events Marketing Manager', true
from public.companies c where c.name = 'HubSpot';

-- Seed tasks
insert into public.tasks (company_id, title, description, due_at, priority, status, task_type, ai_generated)
select c.id, 'Follow up with SFMOMA retail buyer', 'Reply received — schedule call to discuss museum store placement', now() + interval '1 day', 'urgent', 'pending', 'follow_up', true
from public.companies c where c.name = 'SFMOMA';

insert into public.tasks (company_id, title, description, due_at, priority, status, task_type, ai_generated)
select c.id, 'Prepare HubSpot meeting brief', 'Meeting tomorrow — review objections, talking points, and upsell opportunities', now(), 'urgent', 'pending', 'meeting_prep', true
from public.companies c where c.name = 'HubSpot';

insert into public.tasks (company_id, title, description, due_at, priority, status, task_type, ai_generated)
select c.id, '2nd follow-up to Stripe', 'Initial email sent 5 days ago — no reply yet', now() + interval '2 days', 'high', 'pending', 'follow_up', true
from public.companies c where c.name = 'Stripe';

insert into public.tasks (company_id, title, description, due_at, priority, status, task_type, ai_generated)
select c.id, 'Sample follow-up — Peet''s Coffee', 'Sample shipped 7 days ago — check if received and gather feedback', now() - interval '1 day', 'high', 'pending', 'follow_up', true
from public.companies c where c.name = 'Peet''s Coffee';

-- Seed sample content
insert into public.content_items (title, type, body, status, scheduled_for) values
  ('Why coffee shops love KOFENOT', 'linkedin', 'Your customers bring laptops. Coffee spills happen. KOFENOT sits in the hinge gap — pocket-sized, no magnets, no adhesive. Co-brand it with your roaster logo and turn every laptop into a billboard.\n\nMade in California. Ships in 48 hours.\n\n#KOFENOT #CoffeeShop #BrandVisibility', 'draft', now() + interval '1 day'),
  ('Corporate gifting that actually gets used', 'linkedin', 'Most corporate swag ends up in a drawer. KOFENOT is different — it protects laptops, improves posture, and stays on the desk every day.\n\n30-unit minimum. Private label. Free US shipping.\n\nDM for wholesale pricing.', 'draft', now() + interval '2 days'),
  ('Trade show giveaway upgrade', 'instagram', 'Stop giving away pens nobody keeps. KOFENOT folds flat, fits in a pocket, and people use it daily. Your logo. Their desk. Every day.\n\n#TradeShow #Swag #KOFENOT', 'draft', null);
