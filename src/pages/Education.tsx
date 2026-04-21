import { educationModules } from "@/data/education";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, ExternalLink } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Structured learning modules to understand punk's history, culture, and impact.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationModules.map((mod, i) => (
            <ScrollReveal key={mod.id} delay={Math.min(i * 80, 400)}>
              <div className="group h-full p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-md bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-mono bg-primary/10 text-primary border-primary/20"
                  >
                    Full learning coming up
                  </Badge>
                </div>

                <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {mod.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {mod.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-[10px]">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {mod.estimatedTime}
                  </span>
                </div>
                {mod.references && mod.references.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                    {mod.references.map((ref) => (
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
      </div>
    </div>
  );
}
