import type { PipelineStage } from "../types";

export const PIPELINE_STAGES: {
  value: PipelineStage;
  label: string;
  color: string;
  probability: number;
}[] = [
  { value: "research", label: "Research", color: "bg-zinc-500", probability: 5 },
  { value: "lead_found", label: "Lead Found", color: "bg-zinc-400", probability: 10 },
  { value: "qualified", label: "Qualified", color: "bg-blue-500", probability: 20 },
  { value: "contacted", label: "Contacted", color: "bg-blue-600", probability: 25 },
  { value: "reply_received", label: "Reply Received", color: "bg-cyan-500", probability: 40 },
  { value: "meeting_scheduled", label: "Meeting Scheduled", color: "bg-cyan-600", probability: 55 },
  { value: "sample_shipped", label: "Sample Shipped", color: "bg-violet-500", probability: 50 },
  { value: "negotiation", label: "Negotiation", color: "bg-violet-600", probability: 65 },
  { value: "quote_sent", label: "Quote Sent", color: "bg-amber-500", probability: 60 },
  { value: "waiting", label: "Waiting", color: "bg-amber-600", probability: 45 },
  { value: "won", label: "Won", color: "bg-emerald-500", probability: 100 },
  { value: "lost", label: "Lost", color: "bg-red-500", probability: 0 },
  { value: "repeat_customer", label: "Repeat Customer", color: "bg-emerald-600", probability: 90 },
  { value: "partner", label: "Partner", color: "bg-purple-500", probability: 80 },
];

export function getStageLabel(stage: PipelineStage): string {
  return PIPELINE_STAGES.find((s) => s.value === stage)?.label ?? stage;
}

export function getStageColor(stage: PipelineStage): string {
  return PIPELINE_STAGES.find((s) => s.value === stage)?.color ?? "bg-zinc-500";
}

export const ACTIVE_STAGES: PipelineStage[] = [
  "qualified",
  "contacted",
  "reply_received",
  "meeting_scheduled",
  "sample_shipped",
  "negotiation",
  "quote_sent",
  "waiting",
];
