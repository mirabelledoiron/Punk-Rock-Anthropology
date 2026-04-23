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

## Performance & Accessibility

- Routes are lazy-loaded — the landing page ships ~66KB gzipped JS; each page is its own 4–10KB chunk.
- The hero image is served as WebP with a JPEG fallback, with `fetchpriority="high"` on the LCP element.
- Every page sets its own `<title>` and `<meta name="description">` via the `PageMeta` component.
- Accessibility is layered: Radix primitives (accessible disclosure + keyboard support), semantic HTML, skip-to-content, per-card focus rings, and a hash-scroll hook that focuses the target element for screen reader users.
- In development, `@axe-core/react` runs on every render and logs accessibility violations to the browser console.

### Running Lighthouse

```sh
# Build and preview the production bundle
npm run build
npm run preview

# In another shell, run Lighthouse against the preview URL
npx lighthouse http://localhost:4173 --view
```

## License

© Mirabelle Doiron. All rights reserved.
