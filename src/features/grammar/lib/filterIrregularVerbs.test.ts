import { describe, expect, it } from "vitest";
import { filterIrregularVerbs } from "./filterIrregularVerbs";
import type { IrregularVerbItem } from "@/features/grammar/stores/GrammarStore";

const SAMPLE: IrregularVerbItem[] = [
  {
    id: "go",
    base: "go",
    past: "went",
    pastParticiple: "gone",
    translation: "идти, ехать",
  },
  {
    id: "swim",
    base: "swim",
    past: "swam",
    pastParticiple: "swum",
    translation: "плавать",
  },
];

describe("filterIrregularVerbs", () => {
  it("returns all verbs when query is empty", () => {
    expect(filterIrregularVerbs(SAMPLE, "")).toHaveLength(2);
  });

  it("matches base, past and participle forms", () => {
    expect(filterIrregularVerbs(SAMPLE, "went")).toEqual([SAMPLE[0]]);
    expect(filterIrregularVerbs(SAMPLE, "swum")).toEqual([SAMPLE[1]]);
  });
});
