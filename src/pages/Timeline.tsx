import { useState, useEffect, useRef, useMemo } from "react";
import { timelineEvents, scenes, type Scene } from "@/data/timeline";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PageMeta } from "@/components/PageMeta";
import { cn } from "@/lib/utils";
import { ExternalLink, ChevronDown } from "lucide-react";
const sceneColors: Record<string, string> = {
  "New York": "bg-primary text-primary-foreground",
  "London": "bg-secondary text-foreground border border-border",
  "Detroit": "bg-destructive text-destructive-foreground",
  "Los Angeles": "bg-primary/20 text-primary border border-primary/30",
  "Washington D.C.": "bg-muted text-foreground border border-border",
  "San Francisco": "bg-card text-foreground border border-primary",
  "Midwest": "bg-secondary text-foreground border border-border",
  "Pacific Northwest": "bg-muted text-foreground border border-border",
  "Southeast": "bg-primary/15 text-primary border border-primary/30",
  "Global": "bg-card text-muted-foreground border border-border",
};

export default function TimelinePage() {
  const [activeScene, setActiveScene] = useState<Scene>("All Scenes");
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  const filtered = activeScene === "All Scenes"
    ? timelineEvents
    : timelineEvents.filter((e) => e.scene === activeScene);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const containerHeight = lineRef.current.scrollHeight;
      const visible = Math.min(
        Math.max(0, window.innerHeight - rect.top),
        containerHeight
      );
      setLineHeight((visible / containerHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filtered]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <PageMeta
        title="Timeline"
        description="An interactive timeline of punk rock history from 1965 to 2024, filterable by scene — New York, London, Los Angeles, Washington D.C., and more."
      />
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Punk <span className="text-primary">Timeline</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            From proto-punk rumblings to global movements. Scroll through the moments that shaped a culture.
          </p>
        </ScrollReveal>

        {/* Scene filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2 mb-12">
            {scenes.map((scene) => (
              <button
                key={scene}
                onClick={() => setActiveScene(scene)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono rounded-full border transition-all duration-300",
                  activeScene === scene
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                {scene}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          {/* Animated line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <div
              className="w-full bg-primary transition-all duration-100 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="space-y-12">
            {filtered.map((event, i) => (
              <ScrollReveal
                key={event.id}
                delay={Math.min(i * 80, 400)}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  id={`event-${event.id}`}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start gap-4 scroll-mt-28 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg",
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Year marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                    <span className="sr-only">{event.year}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300",
                      i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-2xl font-bold text-primary">
                        {event.year}
                      </span>
                      <Badge
                        className={cn(
                          "text-[10px]",
                          sceneColors[event.scene] || "bg-secondary text-secondary-foreground"
                        )}
                      >
                        {event.scene}
                      </Badge>
                    </div>
                    <h3 className="font-mono text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      📍 {event.location}
                    </p>
                    {event.references && event.references.length > 0 && (
                      <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                        {event.references.map((ref) => (
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bibliography */}
        <TimelineBibliography events={filtered} />
      </div>
    </div>
  );
}

function TimelineBibliography({ events }: { events: typeof timelineEvents }) {
  const [open, setOpen] = useState(false);

  const bibliography = useMemo(() => {
    const refs = new Map<string, { label: string; url: string; entries: string[] }>();
    events.forEach((event) => {
      event.references?.forEach((ref) => {
        const existing = refs.get(ref.url);
        if (existing) {
          existing.entries.push(event.title);
        } else {
          refs.set(ref.url, { label: ref.label, url: ref.url, entries: [event.title] });
        }
      });
    });
    return Array.from(refs.values());
  }, [events]);

  if (bibliography.length === 0) return null;

  return (
    <ScrollReveal delay={200}>
      <div className="mt-16 border-t border-border pt-8">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 w-full group cursor-pointer">
            <h2 className="font-mono text-xl font-bold">
              References & <span className="text-primary">Sources</span>
            </h2>
            <span className="text-xs text-muted-foreground font-mono">({bibliography.length})</span>
            <ChevronDown className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200 ml-auto",
              open && "rotate-180"
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
                  <span className="text-muted-foreground/50">— {ref.entries.join(", ")}</span>
                </a>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </ScrollReveal>
  );
}
