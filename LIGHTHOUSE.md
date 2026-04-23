# Lighthouse audit

Scores from a local Lighthouse run (headless Chrome, mobile emulation, default throttling) against the production build. Regenerate at any time — see "How to reproduce" below.

## Scores

| Page | Performance | Accessibility | Best Practices | SEO |
|------|:-----------:|:-------------:|:--------------:|:---:|
| `/` (home) | **85** | **95** | **100** | **100** |
| `/timeline` | **85** | **92** | **100** | **100** |
| `/search` | **92** | **95** | **100** | **100** |

## Core Web Vitals (home page)

| Metric | Value |
|--------|-------|
| Largest Contentful Paint (LCP) | 4.2 s |
| First Contentful Paint (FCP) | 1.6 s |
| Cumulative Layout Shift (CLS) | 0 |
| Total Blocking Time (TBT) | 0 ms |
| Speed Index | 1.6 s |
| Total page weight | 411 KiB |

Perfect CLS and TBT. LCP is dominated by the hero image — Lighthouse emulates a slower connection than most real users see, so field LCP will come in lower.

## Known findings

- **Color contrast — primary button (Accessibility).** The dark-theme primary (`hsl(348 83% 60%)` / `#ee4466`) against white text gives a contrast ratio of 3.71:1, below WCAG AA's 4.5:1 for normal body text. This is the only contrast violation flagged across all pages and affects every primary CTA. Dropping the dark-theme primary lightness to about 53% would clear the threshold while keeping the color recognizably punk-red — a brand decision, not applied in this audit.
- The light-theme primary (`hsl(348 83% 47%)`) already passes.

## How to reproduce

```sh
bun run build
bun run preview -- --port 5199

# in a separate terminal
lighthouse http://localhost:5199/ \
  --chrome-flags="--headless=new --no-sandbox" \
  --only-categories=performance,accessibility,best-practices,seo \
  --view
```

Swap in `/timeline`, `/search`, or any other route to audit a different page.
