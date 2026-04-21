import { interviews } from "@/data/interviews";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Quote, ExternalLink } from "lucide-react";

export default function InterviewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Interviews</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            First-person accounts from the people who built punk. In their own words.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {interviews.map((interview, i) => (
            <ScrollReveal key={interview.id} delay={Math.min(i * 100, 400)}>
              <article className="group relative p-6 md:p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="font-mono text-xl font-bold group-hover:text-primary transition-colors">
                      {interview.subject}
                    </h2>
                    <p className="text-sm text-muted-foreground font-mono">
                      {interview.role}
                      {interview.band && <> · {interview.band}</>}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {interview.year}
                  </span>
                </div>

                <blockquote className="text-foreground italic leading-relaxed mb-4 pl-4 border-l-2 border-primary/30">
                  "{interview.excerpt}"
                </blockquote>

                <div className="flex flex-wrap gap-1.5">
                  {interview.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-[10px]">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    🔗 Full interview coming soon
                  </span>
                  {interview.references && interview.references.length > 0 && (
                    <div className="flex gap-2">
                      {interview.references.map((ref) => (
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
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
