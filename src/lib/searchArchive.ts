import { timelineEvents } from "@/data/timeline";
import { bands } from "@/data/bands";
import { dictionaryTerms } from "@/data/dictionary";
import { articles } from "@/data/articles";

export type ArchiveSearchResultType = "timeline" | "band" | "term" | "article";

export interface ArchiveSearchResult {
  type: ArchiveSearchResultType;
  title: string;
  description: string;
  meta: string;
}

/** Keyword search across static archive data. Empty or whitespace-only query returns []. */
export function searchArchive(rawQuery: string): ArchiveSearchResult[] {
  const q = rawQuery.toLowerCase().trim();
  if (!q) return [];

  const found: ArchiveSearchResult[] = [];

  for (const e of timelineEvents) {
    if (
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.scene.toLowerCase().includes(q)
    ) {
      found.push({
        type: "timeline",
        title: `${e.year}: ${e.title}`,
        description: e.description,
        meta: `Timeline · ${e.scene}`,
      });
    }
  }

  for (const b of bands) {
    if (
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.genre.some((g) => g.toLowerCase().includes(q))
    ) {
      found.push({
        type: "band",
        title: b.name,
        description: b.description,
        meta: `Band · ${b.era} · ${b.origin}`,
      });
    }
  }

  for (const t of dictionaryTerms) {
    if (t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)) {
      found.push({
        type: "term",
        title: t.term,
        description: t.definition,
        meta: "Dictionary",
      });
    }
  }

  for (const a of articles) {
    if (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    ) {
      found.push({
        type: "article",
        title: a.title,
        description: a.excerpt,
        meta: `Article · ${a.category}`,
      });
    }
  }

  return found;
}
