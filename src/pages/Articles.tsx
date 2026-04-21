import { useState, useMemo } from "react";
import { articles, articleCategories } from "@/data/articles";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock, User, ExternalLink } from "lucide-react";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Articles</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Long-form writing on punk history, culture, and the scenes that shaped the movement.
          </p>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap mb-10">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono rounded-full border transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {filtered.map((article, i) => (
            <ScrollReveal key={article.id} delay={Math.min(i * 80, 400)}>
              <article className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-mono text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 text-xs font-mono text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {article.readTime} read
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      🔗 Full article coming soon
                    </span>
                    {article.references && article.references.length > 0 && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        {article.references.map((ref) => (
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
                      </>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-muted-foreground">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
