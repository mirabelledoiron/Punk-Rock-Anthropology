# PUNK ROCK ANTHROPOLOGY

Documenting the culture, the music, and the movement that changed everything.

**Author:** Mirabelle Doiron

A personal archive of punk rock history — bands, scenes, key terms, a scrollable timeline from 1965 to 2024, long-form articles, interviews, and sources. The kind of reference site I'd want to browse myself: filterable, searchable, keyboard-navigable, readable on a phone.

If your favorite band is missing it's not a conspiracy — it's a knowledge gap. I'll keep adding.

## What's in it

- A timeline from 1965 to 2024, filterable by scene (New York, London, L.A., D.C., and more)
- A band directory with full-text search across names, genres, and cities
- A punk dictionary covering subgenres, movements, and shorthand — anarcho-punk through zines
- Long-form articles, interviews, and a bibliography of sources
- A cross-archive keyword search that handles natural-language queries — "Tell me about CBGB" actually finds the CBGB entries, and every result deep-links to the item on its list page

## Highlights

- Lazy-loaded routes — the landing page ships 66 KB gzipped JS; each subpage is its own 4–10 KB chunk
- Hero served as WebP with a JPEG fallback and `fetchpriority="high"` on the LCP element
- Accessibility via Radix Primitives, semantic HTML, skip-to-content, focus-visible rings, and `@axe-core/react` running in dev
- Per-page `<title>` and meta description — no tab shares a generic title
- Dark/light theming via CSS custom properties and token-based Tailwind

## Lighthouse

| Page | Performance | Accessibility | Best Practices | SEO |
|------|:---:|:---:|:---:|:---:|
| `/` | 85 | 95 | 100 | 100 |
| `/timeline` | 85 | 92 | 100 | 100 |
| `/search` | 92 | 95 | 100 | 100 |

Headless Chrome, mobile emulation.

## Built with

React 18, TypeScript, Vite, Tailwind CSS, Radix Primitives, React Router, Vitest.

© Mirabelle Doiron
