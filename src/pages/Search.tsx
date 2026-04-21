import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight } from "lucide-react";
import { searchArchive, type ArchiveSearchResult } from "@/lib/searchArchive";

const suggestedQueries = [
  "What started the punk movement?",
  "Tell me about CBGB",
  "Who were the Ramones?",
  "What is straight edge?",
  "How did hardcore punk begin?",
  "Women in punk rock",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ArchiveSearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchQuery?: string) => {
    const raw = searchQuery ?? query;
    const q = raw.trim();
    if (!q) return;

    setHasSearched(true);
    setResults(searchArchive(raw));
  };

  const typeColors: Record<string, string> = {
    timeline: "bg-primary/10 text-primary border-primary/20",
    band: "bg-accent/10 text-accent-foreground border-accent/20",
    term: "bg-secondary text-secondary-foreground border-secondary",
    article: "bg-muted text-muted-foreground border-muted",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2 mb-4">
              <Search className="h-6 w-6 text-primary shrink-0" />
              <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Search the archive
              </h1>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Keyword search across timeline events, bands, dictionary terms, and articles.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch mb-6">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search punk history…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10 font-mono text-sm bg-card h-12 w-full"
              />
            </div>
            <Button onClick={() => handleSearch()} size="lg" className="font-mono h-12 w-full sm:w-auto shrink-0">
              Search
            </Button>
          </div>
        </ScrollReveal>

        {!hasSearched && (
          <ScrollReveal delay={200}>
            <div className="mb-10">
              <p className="text-xs font-mono text-muted-foreground mb-3">Try a topic:</p>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {suggestedQueries.map((sq) => (
                  <button
                    key={sq}
                    type="button"
                    onClick={() => {
                      setQuery(sq);
                      handleSearch(sq);
                    }}
                    className="flex items-start gap-2 px-3 py-2 text-left text-xs font-mono rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 sm:inline-flex sm:items-center sm:rounded-full sm:py-1.5"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0 mt-0.5 sm:mt-0" />
                    <span>{sq}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {hasSearched && (
          <div className="space-y-4">
            <p className="text-xs font-mono text-muted-foreground mb-4">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </p>
            {results.map((result, i) => (
              <ScrollReveal key={`${result.type}-${result.title}-${i}`} delay={Math.min(i * 60, 300)}>
                <div className="p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-wrap sm:gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className={`text-[10px] capitalize w-fit ${typeColors[result.type]}`}
                    >
                      {result.type}
                    </Badge>
                    <span className="text-[10px] font-mono text-muted-foreground/60 break-words">
                      {result.meta}
                    </span>
                  </div>
                  <h3 className="font-mono text-base font-bold mb-1 break-words">{result.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{result.description}</p>
                </div>
              </ScrollReveal>
            ))}

            {results.length === 0 && (
              <div className="text-center py-12">
                <p className="font-mono text-muted-foreground">
                  No results found. Try different keywords.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
