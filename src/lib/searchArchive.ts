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
  href: string;
}

const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "of", "in", "on", "at", "by", "for",
  "with", "about", "to", "from", "as", "into", "than", "then",
  "is", "are", "was", "were", "be", "been", "being", "am",
  "do", "does", "did", "done", "doing",
  "have", "has", "had", "having",
  "can", "could", "will", "would", "should", "may", "might", "must",
  "i", "me", "my", "you", "your", "he", "she", "it", "its", "they",
  "them", "their", "we", "our", "us",
  "what", "who", "whom", "whose", "when", "where", "why", "how", "which",
  "tell", "say", "said", "talk", "talks", "talked",
  "this", "that", "these", "those",
  "some", "any", "all", "each", "every",
]);

function tokenize(query: string): string[] {
  const raw = query
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((t) => t.length >= 2);

  const meaningful = raw.filter((t) => !STOPWORDS.has(t));
  // If stopword removal leaves nothing (e.g. "the"), fall back to raw tokens
  // so the user still gets results rather than silence.
  return meaningful.length > 0 ? meaningful : raw;
}

function scoreTokens(titleText: string, bodyText: string, tokens: string[]): number {
  const title = titleText.toLowerCase();
  const body = bodyText.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (title.includes(t)) score += 2;
    else if (body.includes(t)) score += 1;
  }
  return score;
}

interface ScoredResult {
  score: number;
  result: ArchiveSearchResult;
}

/**
 * Keyword search across static archive data.
 *
 * - Tokenizes the query, strips common English stopwords and question words.
 * - Scores each item: +2 per token found in the title-like field,
 *   +1 per token found in the body (description, tags, etc.).
 * - Returns items with score > 0, sorted by score descending.
 * - Empty or whitespace-only queries return [].
 */
export function searchArchive(rawQuery: string): ArchiveSearchResult[] {
  const q = rawQuery.trim();
  if (!q) return [];

  const tokens = tokenize(q);
  if (tokens.length === 0) return [];

  const scored: ScoredResult[] = [];

  for (const e of timelineEvents) {
    const score = scoreTokens(e.title, `${e.description} ${e.scene} ${e.year}`, tokens);
    if (score > 0) {
      scored.push({
        score,
        result: {
          type: "timeline",
          title: `${e.year}: ${e.title}`,
          description: e.description,
          meta: `Timeline · ${e.scene}`,
          href: `/timeline#event-${e.id}`,
        },
      });
    }
  }

  for (const b of bands) {
    const score = scoreTokens(b.name, `${b.description} ${b.era} ${b.origin} ${b.genre.join(" ")}`, tokens);
    if (score > 0) {
      scored.push({
        score,
        result: {
          type: "band",
          title: b.name,
          description: b.description,
          meta: `Band · ${b.era} · ${b.origin}`,
          href: `/bands#band-${b.id}`,
        },
      });
    }
  }

  for (const t of dictionaryTerms) {
    const score = scoreTokens(t.term, `${t.definition} ${t.letter}`, tokens);
    if (score > 0) {
      scored.push({
        score,
        result: {
          type: "term",
          title: t.term,
          description: t.definition,
          meta: "Dictionary",
          href: `/dictionary#term-${t.id}`,
        },
      });
    }
  }

  for (const a of articles) {
    const score = scoreTokens(a.title, `${a.excerpt} ${a.category} ${a.tags.join(" ")}`, tokens);
    if (score > 0) {
      scored.push({
        score,
        result: {
          type: "article",
          title: a.title,
          description: a.excerpt,
          meta: `Article · ${a.category}`,
          href: `/articles#article-${a.id}`,
        },
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.result);
}
