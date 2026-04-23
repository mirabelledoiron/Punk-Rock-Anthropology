import { useState, useMemo } from "react";
import { bands } from "@/data/bands";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PageMeta } from "@/components/PageMeta";
import { Search, ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BandsPage() {
  const [search, setSearch] = useState("");
  const [refsOpen, setRefsOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!search.trim()) return bands;
    const q = search.toLowerCase();
    return bands.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.genre.some((g) => g.toLowerCase().includes(q)) ||
        b.origin.toLowerCase().includes(q)
    );
  }, [search]);

  // Collect all unique references for bibliography
  const bibliography = useMemo(() => {
    const refs = new Map<string, { label: string; url: string; bands: string[] }>();
    filtered.forEach((band) => {
      band.references?.forEach((ref) => {
        const existing = refs.get(ref.url);
        if (existing) {
          existing.bands.push(band.name);
        } else {
          refs.set(ref.url, { label: ref.label, url: ref.url, bands: [band.name] });
        }
      });
    });
    return Array.from(refs.values());
  }, [filtered]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <PageMeta
        title="Bands"
        description="A directory of the bands that shaped punk — from the Ramones and Sex Pistols to modern hardcore. Search by name, genre, or city."
      />
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            All <span className="text-primary">Bands</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The definitive directory. Search by name, genre, or city.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative max-w-md mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bands, genres, cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 font-mono text-sm bg-card"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((band, i) => (
            <ScrollReveal key={band.id} delay={Math.min(i * 60, 300)} direction="scale">
              <div
                id={`band-${band.id}`}
                className="group p-5 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col scroll-mt-28 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <h3 className="font-mono text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {band.name}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-2">
                  {band.era} · {band.origin}
                </p>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                  {band.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {band.genre.map((g) => (
                    <Badge key={g} variant="secondary" className="text-[10px]">
                      {g}
                    </Badge>
                  ))}
                </div>
                {band.references && band.references.length > 0 && (
                  <div className="flex gap-2 pt-2 border-t border-border">
                    {band.references.map((ref) => (
                      <a
                        key={ref.url}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-2.5 w-2.5" />
                        {ref.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-muted-foreground">No bands found. Try a different search.</p>
          </div>
        )}

        {/* Bibliography */}
        {bibliography.length > 0 && (
          <ScrollReveal delay={200}>
            <div className="mt-16 border-t border-border pt-8">
              <Collapsible open={refsOpen} onOpenChange={setRefsOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 w-full group cursor-pointer">
                  <h2 className="font-mono text-xl font-bold">
                    References & <span className="text-primary">Sources</span>
                  </h2>
                  <span className="text-xs text-muted-foreground font-mono">({bibliography.length})</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-200 ml-auto",
                    refsOpen && "rotate-180"
                  )} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                    {bibliography.map((ref) => (
                      <a
                        key={ref.url}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ExternalLink className="h-3 w-3 shrink-0 opacity-50 group-hover:opacity-100" />
                        <span className="font-mono">{ref.label}</span>
                        <span className="text-muted-foreground/50">— {ref.bands.join(", ")}</span>
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
