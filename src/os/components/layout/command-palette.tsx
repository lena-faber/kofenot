import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Building2, CheckSquare, Loader2, Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { searchAll } from "@/os/lib/revenue-os.functions";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    companies: Array<{ id: string; name: string; industry: string | null; stage: string }>;
    contacts: Array<{ id: string; name: string; company_id: string; company?: { name: string } }>;
    tasks: Array<{ id: string; title: string; company_id: string | null; company?: { name: string } }>;
  }>({ companies: [], contacts: [], tasks: [] });

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults({ companies: [], contacts: [], tasks: [] });
      return;
    }
    setLoading(true);
    try {
      const data = await searchAll({ data: { q } });
      setResults(data);
    } catch {
      setResults({ companies: [], contacts: [], tasks: [] });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => search(query), 200);
    return () => clearTimeout(timer);
  }, [query, search]);

  const go = (path: string) => {
    onOpenChange(false);
    setQuery("");
    navigate({ to: path });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search companies, contacts, tasks..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {loading && (
          <div className="flex items-center justify-center py-6 text-sm text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Searching...
          </div>
        )}

        {!loading && query.length < 2 && (
          <CommandEmpty>Type to search...</CommandEmpty>
        )}

        {!loading && query.length >= 2 && !results.companies.length && !results.contacts.length && !results.tasks.length && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}

        {results.companies.length > 0 && (
          <CommandGroup heading="Companies">
            {results.companies.map((c) => (
              <CommandItem key={c.id} onSelect={() => go(`/os/companies/${c.id}`)}>
                <Building2 className="mr-2 h-4 w-4" />
                <span>{c.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">{c.stage}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {results.contacts.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Contacts">
              {results.contacts.map((c) => (
                <CommandItem key={c.id} onSelect={() => go(`/os/companies/${c.company_id}`)}>
                  <Search className="mr-2 h-4 w-4" />
                  <span>{c.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {c.company?.name}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {results.tasks.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Tasks">
              {results.tasks.map((t) => (
                <CommandItem
                  key={t.id}
                  onSelect={() => t.company_id && go(`/os/companies/${t.company_id}`)}
                >
                  <CheckSquare className="mr-2 h-4 w-4" />
                  <span>{t.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        <CommandSeparator />
        <CommandGroup heading="Quick actions">
          <CommandItem onSelect={() => go("/os/scout")}>Run Scout — find prospects</CommandItem>
          <CommandItem onSelect={() => go("/os/closer")}>Open Closer — email drafts</CommandItem>
          <CommandItem onSelect={() => go("/os/cmo")}>Open CMO — content engine</CommandItem>
          <CommandItem onSelect={() => go("/os/pipeline")}>View pipeline</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
