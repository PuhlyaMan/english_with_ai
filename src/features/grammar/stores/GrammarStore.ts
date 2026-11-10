import { makeAutoObservable } from "mobx";
import tensesData from "@/features/grammar/data/tenses.json";
import prepositionsData from "@/features/grammar/data/prepositions.json";
import pronounsData from "@/features/grammar/data/pronouns.json";
import irregularVerbsData from "@/features/grammar/data/irregular-verbs.json";

export interface GrammarRuleItem {
  id: string;
  title: string;
  rule: string;
  examples: string[];
}

export interface IrregularVerbItem {
  id: string;
  base: string;
  past: string;
  pastParticiple: string;
  translation: string;
}

export interface GrammarSectionData {
  id: string;
  title: string;
  rules: GrammarRuleItem[];
}

function isGrammarRuleItem(value: unknown): value is GrammarRuleItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as Record<string, unknown>;
  return (
    typeof record.id === "string" &&
    typeof record.title === "string" &&
    typeof record.rule === "string" &&
    Array.isArray(record.examples) &&
    record.examples.every((item) => typeof item === "string")
  );
}

function assertRuleArray(data: unknown, sourceLabel: string): GrammarRuleItem[] {
  if (!Array.isArray(data) || !data.every(isGrammarRuleItem)) {
    throw new Error(`Invalid grammar data: ${sourceLabel}`);
  }
  return data;
}

function isIrregularVerbItem(value: unknown): value is IrregularVerbItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as Record<string, unknown>;
  return (
    typeof record.id === "string" &&
    typeof record.base === "string" &&
    typeof record.past === "string" &&
    typeof record.pastParticiple === "string" &&
    typeof record.translation === "string"
  );
}

function assertVerbArray(data: unknown, sourceLabel: string): IrregularVerbItem[] {
  if (!Array.isArray(data) || !data.every(isIrregularVerbItem)) {
    throw new Error(`Invalid grammar data: ${sourceLabel}`);
  }
  return data;
}

export class GrammarStore {
  sections: GrammarSectionData[] = [];
  irregularVerbs: IrregularVerbItem[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadSections(): void {
    this.isLoading = true;
    this.error = null;

    try {
      const tenses = assertRuleArray(tensesData, "tenses.json");
      const prepositions = assertRuleArray(prepositionsData, "prepositions.json");
      const pronouns = assertRuleArray(pronounsData, "pronouns.json");
      const verbs = assertVerbArray(irregularVerbsData, "irregular-verbs.json");

      this.sections = [
        { id: "tenses", title: "Времена", rules: tenses },
        { id: "prepositions", title: "Предлоги", rules: prepositions },
        { id: "pronouns", title: "Местоимения", rules: pronouns },
      ];
      this.irregularVerbs = verbs;
    } catch (err) {
      this.sections = [];
      this.error = err instanceof Error ? err.message : "Could not load grammar sections.";
    } finally {
      this.isLoading = false;
    }
  }
}
