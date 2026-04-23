import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { PageMeta } from "@/components/PageMeta";
import { ExternalLink } from "lucide-react";
import { sourceCategories } from "@/data/sources";

const typeColors: Record<string, string> = {
  Book: "bg-primary/15 text-primary border-primary/30",
  Film: "bg-secondary text-foreground border-border",
  Documentary: "bg-secondary text-foreground border-border",
  Academic: "bg-secondary text-secondary-foreground border-secondary",
  Reference: "bg-muted text-muted-foreground border-border",
  "Label Archive": "bg-primary/15 text-primary border-primary/30",
  Archive: "bg-secondary text-secondary-foreground border-secondary",
  Photography: "bg-secondary text-foreground border-border",
  Zine: "bg-muted text-muted-foreground border-border",
};

export default function SourcesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <PageMeta
        title="Sources"
        description="A bibliography of books, films, documentaries, zines, and archives used throughout Punk Rock Anthropology."
      />
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Bibliography & <span className="text-primary">Sources</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A comprehensive collection of books, films, archives, zines, and academic resources used to compile this punk rock anthropology platform.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {sourceCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name} delay={Math.min(catIdx * 80, 300)}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-mono text-xl font-bold">{category.name}</h2>
                  <span className="text-xs font-mono text-muted-foreground">
                    {category.sources.length} sources
                  </span>
                </div>
                <div className="grid gap-3">
                  {category.sources.map((source) => (
                    <a
                      key={source.title}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-mono text-sm font-bold group-hover:text-primary transition-colors">
                            {source.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={`text-[10px] ${typeColors[source.type] || "bg-secondary text-secondary-foreground"}`}
                          >
                            {source.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-mono">
                            {source.author}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 p-6 rounded-lg bg-card border border-border">
            <h2 className="font-mono text-lg font-bold mb-2">Citation & Attribution</h2>
            <p className="text-sm text-muted-foreground">
              This platform synthesizes information from multiple authoritative sources including books, documentaries, oral histories, zines, and academic publications. All content is used for educational and archival purposes.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              For academic citation of this platform, please reference individual sources listed above along with the specific content areas they inform (timeline events, band histories, venue documentation, etc.).
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
