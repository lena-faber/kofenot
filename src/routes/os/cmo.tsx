import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Copy,
  Loader2,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OsShell } from "@/os/components/layout/os-shell";
import { LoadingState } from "@/os/components/shared/os-ui";
import {
  getCampaignIdeas,
  getContentCalendar,
  runCmoGenerate,
} from "@/os/lib/revenue-os.functions";
import type { ContentType } from "@/os/types";

const CONTENT_TYPES: { value: ContentType; label: string }[] = [
  { value: "linkedin", label: "LinkedIn Post" },
  { value: "instagram", label: "Instagram Post" },
  { value: "newsletter", label: "Newsletter" },
  { value: "press", label: "Press Pitch" },
  { value: "case_study", label: "Case Study" },
  { value: "landing_page", label: "Landing Page" },
  { value: "campaign", label: "Campaign Plan" },
];

export const Route = createFileRoute("/os/cmo")({
  component: CmoPage,
});

function CmoPage() {
  const queryClient = useQueryClient();
  const [contentType, setContentType] = useState<ContentType>("linkedin");
  const [context, setContext] = useState("");
  const [generated, setGenerated] = useState<{ title: string; body: string } | null>(null);

  const { data: calendar, isLoading: loadingCalendar } = useQuery({
    queryKey: ["os-content-calendar"],
    queryFn: () => getContentCalendar(),
  });

  const { data: campaignIdeas } = useQuery({
    queryKey: ["os-campaign-ideas"],
    queryFn: () => getCampaignIdeas(),
  });

  const generateMutation = useMutation({
    mutationFn: (save: boolean) =>
      runCmoGenerate({
        data: { type: contentType, context: context || undefined, save },
      }),
    onSuccess: (result) => {
      setGenerated({ title: result.title, body: result.body });
      if ("id" in result) {
        queryClient.invalidateQueries({ queryKey: ["os-content-calendar"] });
        toast.success("Content saved to library");
      } else {
        toast.success("Content generated");
      }
    },
    onError: () => toast.error("Generation failed"),
  });

  const copyContent = () => {
    if (!generated) return;
    navigator.clipboard.writeText(`${generated.title}\n\n${generated.body}`);
    toast.success("Copied to clipboard");
  };

  return (
    <OsShell title="CMO — Marketing Agent">
      <Tabs defaultValue="generate" className="h-full">
        <div className="border-b border-os-border px-6 pt-4">
          <TabsList className="bg-os-card">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="generate" className="mt-0">
          <div className="grid lg:grid-cols-2">
            <div className="space-y-4 border-r border-os-border p-6">
              <div className="rounded-lg border border-os-border bg-os-card p-4">
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
                    <Megaphone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold">Content Engine</h2>
                    <p className="mt-1 text-xs text-os-muted">
                      LinkedIn, Instagram, newsletters, press pitches, case studies, and campaigns.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Select value={contentType} onValueChange={(v) => setContentType(v as ContentType)}>
                    <SelectTrigger className="border-os-border bg-os-bg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTENT_TYPES.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <textarea
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Optional context (e.g., coffee shop partnerships, Q4 gifting...)"
                    className="w-full rounded-md border border-os-border bg-os-bg px-3 py-2 text-sm placeholder:text-os-muted focus:outline-none focus:ring-1 focus:ring-os-accent"
                    rows={3}
                  />

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-os-accent text-black hover:bg-os-accent/90"
                      disabled={generateMutation.isPending}
                      onClick={() => generateMutation.mutate(false)}
                    >
                      {generateMutation.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                      )}
                      Generate
                    </Button>
                    <Button
                      variant="outline"
                      className="border-os-border"
                      disabled={generateMutation.isPending}
                      onClick={() => generateMutation.mutate(true)}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xs font-medium uppercase tracking-wider text-os-muted">
                  Preview
                </h2>
                {generated && (
                  <Button size="sm" variant="outline" onClick={copyContent} className="border-os-border">
                    <Copy className="mr-1 h-3 w-3" />
                    Copy
                  </Button>
                )}
              </div>

              {!generated ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-os-border py-24">
                  <Megaphone className="mb-3 h-8 w-8 text-os-muted" />
                  <p className="text-sm text-os-muted">Generate content to preview</p>
                </div>
              ) : (
                <div className="rounded-lg border border-os-border bg-os-card">
                  <div className="border-b border-os-border px-4 py-3">
                    <div className="text-sm font-medium">{generated.title}</div>
                  </div>
                  <div className="prose-email p-4">{generated.body}</div>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="mt-0 p-6">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-os-muted">
            Content Calendar
          </h2>
          {loadingCalendar ? (
            <LoadingState />
          ) : (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {(calendar?.calendar ?? []).map((item, i) => (
                <div key={i} className="rounded-lg border border-os-border bg-os-card p-4">
                  <div className="flex items-center gap-2 text-xs text-os-muted">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                    <span className="rounded bg-os-hover px-1.5 py-0.5 uppercase">{item.type}</span>
                  </div>
                  <div className="mt-2 text-sm font-medium">{item.title}</div>
                  <p className="mt-1 line-clamp-3 text-xs text-os-muted">{item.body}</p>
                </div>
              ))}
              {(calendar?.existing ?? []).map((item) => (
                <div key={item.id} className="rounded-lg border border-os-accent/20 bg-os-card p-4">
                  <div className="flex items-center gap-2 text-xs text-os-accent">
                    Saved · {item.type}
                  </div>
                  <div className="mt-2 text-sm font-medium">{item.title}</div>
                  <p className="mt-1 line-clamp-3 text-xs text-os-muted">{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="campaigns" className="mt-0 p-6">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-os-muted">
            Campaign Ideas
          </h2>
          <div className="space-y-3">
            {(campaignIdeas ?? []).map((idea, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-os-border bg-os-card p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-amber-600/20 text-xs font-bold text-amber-500">
                  {i + 1}
                </div>
                <p className="text-sm">{idea}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </OsShell>
  );
}
