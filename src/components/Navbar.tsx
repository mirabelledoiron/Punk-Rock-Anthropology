import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const archiveSubLinks = [
  { to: "/timeline", label: "Timeline" },
  { to: "/interviews", label: "Interviews" },
  { to: "/archive", label: "Archives" },
  { to: "/bands", label: "All Bands" },
  { to: "/education", label: "Education" },
  { to: "/articles", label: "Articles" },
];

const archivePaths = archiveSubLinks.map((l) => l.to);

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [mobileArchiveOpen, setMobileArchiveOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setArchiveOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isArchiveActive = archivePaths.includes(location.pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-slide-down" aria-label="Main navigation">
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-mono text-lg font-bold tracking-tighter text-primary">
            PUNK ROCK<span className="text-foreground"> ANTHROPOLOGY</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-3 py-2 text-sm font-mono rounded-md transition-colors",
                location.pathname === "/"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Home
            </Link>

            {/* Archive dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setArchiveOpen(!archiveOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-mono rounded-md transition-colors",
                  isArchiveActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Punk History
                <ChevronDown className={cn("h-3 w-3 transition-transform", archiveOpen && "rotate-180")} />
              </button>

              {archiveOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-md shadow-lg py-1 animate-fade-in">
                  {archiveSubLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setArchiveOpen(false)}
                      className={cn(
                        "block px-4 py-2 text-sm font-mono transition-colors",
                        location.pathname === link.to
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/dictionary"
              className={cn(
                "px-3 py-2 text-sm font-mono rounded-md transition-colors",
                location.pathname === "/dictionary"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Dictionary
            </Link>
            <Link
              to="/search"
              className={cn(
                "px-3 py-2 text-sm font-mono rounded-md transition-colors",
                location.pathname === "/search"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Search
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-mono rounded-md transition-colors",
                  location.pathname === "/"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Home
              </Link>

              {/* Mobile archive accordion */}
              <button
                onClick={() => setMobileArchiveOpen(!mobileArchiveOpen)}
                className={cn(
                  "flex items-center justify-between w-full px-3 py-2 text-sm font-mono rounded-md transition-colors",
                  isArchiveActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Punk History
                <ChevronDown className={cn("h-3 w-3 transition-transform", mobileArchiveOpen && "rotate-180")} />
              </button>
              {mobileArchiveOpen && (
                <div className="pl-4 space-y-1">
                  {archiveSubLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => { setMobileOpen(false); setMobileArchiveOpen(false); }}
                      className={cn(
                        "block px-3 py-2 text-sm font-mono rounded-md transition-colors",
                        location.pathname === link.to
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/dictionary"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-mono rounded-md transition-colors",
                  location.pathname === "/dictionary"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Dictionary
              </Link>
              <Link
                to="/search"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-mono rounded-md transition-colors",
                  location.pathname === "/search"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
