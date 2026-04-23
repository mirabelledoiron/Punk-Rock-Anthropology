# PUNK ROCK ANTHROPOLOGY

Documenting the culture, the music, and the movement that changed everything.

**Author:** Mirabelle Doiron

---

This is my personal attempt at building a reference site for punk rock history — not a Wikipedia mirror, not a Spotify-style directory, but the kind of archive I'd want to browse myself. It covers bands, scenes, key terms, a scrollable timeline from 1965 to 2024, a handful of long-form articles, interviews, and sources. Filterable, searchable, keyboard-navigable, readable on a phone.

If your favorite band is missing it's not a conspiracy — it's a knowledge gap. I'll keep adding.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with a token-based design system (dark/light)
- **Radix Primitives** via a trimmed **shadcn/ui** — only what the app actually uses (Accordion, Collapsible, Slot)
- **React Router** for client-side routing
- **Vitest** + **Testing Library** for unit and route tests
- **@axe-core/react** in dev for a11y violations in the console

## Project layout

```
src/
├── appRoutes.tsx    route table (also imported by tests)
├── components/      Navbar, Footer, ScrollReveal, PageMeta, ui/*
├── pages/           one file per route
├── data/            typed content (timeline, bands, dictionary, etc.)
├── hooks/           useTheme, useScrollReveal, useHashScroll
└── lib/             utils + searchArchive (keyword search with stopword stripping)
```

The `src/data` folder is the closest thing this project has to a database. Each file exports a typed array — open one, copy an entry, edit fields. The types at the top of each file tell you what's required.

## Pages

| Route | What lives there |
|-------|-------------------|
| `/` | Hero + section index |
| `/timeline` | Vertical timeline, 1965–2024, filterable by scene |
| `/bands` | Directory with text search across name / genre / city |
| `/dictionary` | Alphabetical glossary — anarcho-punk, DIY, straight edge, zines, etc. |
| `/interviews` | First-person accounts |
| `/articles` | Long-form essays |
| `/archive` | Flyers, zines, photos, recordings |
| `/education` | Learning modules |
| `/sources` | Bibliography — books, films, academic sources |
| `/search` | Keyword search across timeline, bands, dictionary, and articles — cards deep-link into the list page |

## Running it locally

Clone from GitHub:

```sh
git clone https://github.com/mirabelledoiron/Punk-Rock-Anthropology.git
cd Punk-Rock-Anthropology
```

Install dependencies (I use `bun`, but `npm` works too):

```sh
bun install    # or: npm install
```

Start the dev server:

```sh
bun run dev    # or: npm run dev
```

Run the tests:

```sh
bun run test   # or: npm test
```

Build + preview the production bundle:

```sh
bun run build
bun run preview
```

## Performance and accessibility notes

Things I cared about while building:

- Routes are lazy-loaded — the landing page ships ~66 KB gzipped; each subpage is its own 4–10 KB chunk.
- The hero image is served as WebP with a JPEG fallback, and has `fetchpriority="high"` on the `<img>` so the LCP element starts loading immediately.
- Every page sets its own `<title>` and meta description through a `PageMeta` component — no generic site title on every tab.
- Accessibility leans on Radix for keyboard support and focus management inside disclosure patterns, plus semantic HTML, a skip-to-content link, focus-visible rings on cards, and a `useHashScroll` hook that focuses the target element when you arrive via a deep link.
- `@axe-core/react` runs in dev only (dead-code eliminated in prod) and logs violations to the console on every render.

To run Lighthouse yourself:

```sh
bun run build && bun run preview
# in a separate terminal:
npx lighthouse http://localhost:4173 --view
```

## License

© Mirabelle Doiron. All rights reserved.
