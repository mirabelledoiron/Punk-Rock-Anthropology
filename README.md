# PUNK ROCK ANTHROPOLOGY

Documenting the culture, the music, and the movement that changed everything.

## Tech Stack

- **React 18** — Component-based UI
- **TypeScript** — Type-safe development
- **Vite** — Fast build tooling & HMR
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **shadcn/ui (trimmed)** — A small set of Radix-based primitives actually used by the app
- **React Router** — Client-side routing (SPA)
- **Scroll-reveal** — Intersection Observer–based motion via custom hooks
- **Vitest + Testing Library** — Unit tests for archive search and route smoke tests

## Architecture

```
src/
├── appRoutes.tsx   # Route table (shared by App + tests)
├── components/     # Reusable UI (Navbar, Footer, ScrollReveal, ui/*)
├── pages/          # Route-level views
├── data/           # Typed data modules (timeline, bands, dictionary, etc.)
├── hooks/          # Custom hooks (useTheme, useScrollReveal)
└── lib/            # Utilities + searchArchive (keyword search)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing — hero, featured content, navigation |
| `/timeline` | Interactive punk history timeline |
| `/bands` | Band directory with profiles & references |
| `/dictionary` | Punk terminology glossary |
| `/interviews` | Interview archive |
| `/archive` | Media & document archive |
| `/education` | Learning modules (coming soon) |
| `/articles` | Written articles & essays |
| `/sources` | Bibliography & academic sources |
| `/search` | Keyword search across archive content |

## Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project
cd punk-rock-motion

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test
```

## License

© Mirabelle Doiron. All rights reserved.
