import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-5 text-center">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase max-w-md leading-relaxed">
          Punk Rock Anthropology © {new Date().getFullYear()}
          <span className="block normal-case tracking-normal text-muted-foreground/90 mt-2">
            <a
              href="https://www.mirabelledoiron.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline font-medium"
            >
              Mirabelle Doiron
            </a>
          </span>
        </p>
        <Link
          to="/sources"
          className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wider"
        >
          Sources
        </Link>
      </div>
    </footer>
  );
}
