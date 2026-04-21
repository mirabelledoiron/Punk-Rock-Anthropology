import { useState } from "react";
import { dictionaryTerms, alphabet } from "@/data/dictionary";
import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function DictionaryPage() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = activeLetter
    ? dictionaryTerms.filter((t) => t.letter === activeLetter)
    : dictionaryTerms;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Punk <span className="text-primary">Dictionary</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Learn the language. From anarcho-punk to zines.
          </p>
        </ScrollReveal>

        {/* Alphabet filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-1 mb-10">
            <button
              onClick={() => setActiveLetter(null)}
              className={cn(
                "w-8 h-8 text-xs font-mono rounded transition-all duration-200",
                !activeLetter
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              All
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setActiveLetter(letter === activeLetter ? null : letter)}
                className={cn(
                  "w-8 h-8 text-xs font-mono rounded transition-all duration-200",
                  activeLetter === letter
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {letter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Terms */}
        <Accordion type="multiple">
          {filtered.map((term, i) => (
            <ScrollReveal key={term.id} delay={Math.min(i * 50, 250)}>
              <AccordionItem value={term.id} className="border-border">
                <AccordionTrigger className="font-mono text-left hover:no-underline hover:text-primary transition-colors">
                  <span>
                    <span className="text-primary mr-2">{term.letter}.</span>
                    {term.term}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {term.definition}
                  {term.references && term.references.length > 0 && (
                    <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                      {term.references.map((ref) => (
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
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-muted-foreground">No terms found for this letter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
