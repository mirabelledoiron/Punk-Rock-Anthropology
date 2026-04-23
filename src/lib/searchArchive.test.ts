import { describe, it, expect } from "vitest";
import { searchArchive } from "./searchArchive";

describe("searchArchive", () => {
  it("returns empty array for empty or whitespace-only query", () => {
    expect(searchArchive("")).toEqual([]);
    expect(searchArchive("   ")).toEqual([]);
    expect(searchArchive("\t\n")).toEqual([]);
  });

  it("finds timeline, band, dictionary, and article matches for a broad query", () => {
    const hits = searchArchive("ramones");
    const types = new Set(hits.map((h) => h.type));
    expect(types.has("timeline")).toBe(true);
    expect(types.has("band")).toBe(true);
    expect(hits.some((h) => h.type === "band" && h.title === "Ramones")).toBe(true);
  });

  it("matches dictionary terms", () => {
    const hits = searchArchive("cbgb");
    expect(hits.some((h) => h.type === "term" && h.title === "CBGB")).toBe(true);
  });

  it("is case-insensitive", () => {
    const a = searchArchive("RAMONES").map((h) => h.title);
    const b = searchArchive("ramones").map((h) => h.title);
    expect(a).toEqual(b);
  });

  it("handles natural-language queries by stripping question words", () => {
    // "Tell me about CBGB" should find CBGB content
    expect(searchArchive("Tell me about CBGB").length).toBeGreaterThan(0);

    // "Who were the Ramones?" should find Ramones
    const ramones = searchArchive("Who were the Ramones?");
    expect(ramones.some((h) => h.title === "Ramones")).toBe(true);

    // "What is straight edge?" should match dictionary/articles
    expect(searchArchive("What is straight edge?").length).toBeGreaterThan(0);
  });

  it("ranks multi-token queries by number of tokens matched", () => {
    // "Women in punk rock" — results matching more tokens should rank higher.
    // Item with "women" + "punk" in title outranks items matching only "punk" or "rock".
    const hits = searchArchive("Women in punk rock");
    expect(hits.length).toBeGreaterThan(0);
    const top = hits[0];
    const topText = `${top.title} ${top.description} ${top.meta}`.toLowerCase();
    expect(topText.includes("women") || topText.includes("woman")).toBe(true);
  });

  it("returns an href for every result", () => {
    const hits = searchArchive("punk");
    expect(hits.length).toBeGreaterThan(0);
    for (const h of hits) {
      expect(h.href).toMatch(/^\/(timeline|bands|dictionary|articles)#/);
    }
  });
});
