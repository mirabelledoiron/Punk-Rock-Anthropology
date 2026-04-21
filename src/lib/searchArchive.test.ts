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
});
