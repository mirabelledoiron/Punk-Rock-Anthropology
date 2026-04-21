import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground opacity-0 animate-fade-up"
          >
            PUNK ROCK
            <br />
            <span className="text-primary">ANTHROPOLOGY</span>
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-center opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Documenting the culture, the music, and the movement that changed everything.
          </p>
          <p
            className="mt-3 font-mono text-xs tracking-[0.2em] text-primary/90 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            Mirabelle Doiron
          </p>
          <div
            className="mt-8 flex flex-col gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button asChild size="lg" className="font-mono w-full sm:w-auto">
              <Link to="/timeline">Explore the Timeline</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-mono w-full sm:w-auto">
              <Link to="/bands">Browse All Bands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-16">
              Explore the <span className="text-primary">Punk History</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Timeline",
                desc: "Trace punk's evolution from 1967 proto-punk to the modern era.",
                link: "/timeline",
              },
              {
                title: "Interviews",
                desc: "First-person accounts from the people who built punk.",
                link: "/interviews",
              },
              {
                title: "Archives",
                desc: "Flyers, zines, photos, and recordings from punk history.",
                link: "/archive",
              },
              {
                title: "All Bands",
                desc: "The definitive directory of punk bands across every subgenre.",
                link: "/bands",
              },
              {
                title: "Education",
                desc: "Structured modules to understand punk's history and impact.",
                link: "/education",
              },
              {
                title: "Articles",
                desc: "Long-form writing on punk culture, scenes, and politics.",
                link: "/articles",
              },
              {
                title: "Search",
                desc: "Keyword search across the timeline, bands, dictionary, and articles.",
                link: "/search",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link
                  to={item.link}
                  className="block group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 h-full"
                >
                  <h3 className="font-mono text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-16 max-w-xl mx-auto border border-dashed border-primary/30 rounded-sm p-6 bg-card/50 backdrop-blur-sm relative">
              <span className="absolute -top-3 left-6 bg-background px-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                ⚠ Disclaimer
              </span>
              <p className="text-md text-muted-foreground leading-relaxed font-sans">
                This is punk history as far as, I — Mirabelle knows it. If your favorite band is missing, it's not a conspiracy — it's a knowledge gap. No punks were harmed in the making of this anthropology. <span className="text-primary font-mono">Probably.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
