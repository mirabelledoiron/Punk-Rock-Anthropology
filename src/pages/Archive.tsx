import { useState, useMemo } from "react";
import { archiveItems, archiveTypes } from "@/data/archive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FileText, Image, Music, Video, File, Newspaper, ExternalLink } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  flyer: <Newspaper className="h-5 w-5" />,
  zine: <FileText className="h-5 w-5" />,
  photo: <Image className="h-5 w-5" />,
  recording: <Music className="h-5 w-5" />,
  document: <File className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
};

export default function ArchivePage() {
  const [activeType, setActiveType] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeType === "All") return archiveItems;
    return archiveItems.filter((item) => item.type === activeType);
  }, [activeType]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">Archives</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Flyers, zines, photos, recordings, and documents from punk history. The artifacts that tell the real story.
          </p>
        </ScrollReveal>

        {/* Type filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {archiveTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono rounded-full border transition-all duration-300 capitalize",
                  activeType === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={Math.min(i * 60, 300)} direction="scale">
              <div className="group h-full p-5 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {typeIcons[item.type]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted-foreground">
                      {item.type}
                    </span>
                    <p className="text-xs font-mono text-muted-foreground">
                      {item.year} · {item.scene}
                    </p>
                  </div>
                </div>

                <h3 className="font-mono text-base font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {item.references && item.references.length > 0 && (
                  <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                    {item.references.map((ref) => (
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
            <p className="font-mono text-muted-foreground">No archive items found for this type.</p>
          </div>
        )}
      </div>
    </div>
  );
}
