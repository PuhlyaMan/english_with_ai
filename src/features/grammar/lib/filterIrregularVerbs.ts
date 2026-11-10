import type { IrregularVerbItem } from "@/features/grammar/stores/GrammarStore";

function normalizeQuery(query: string): string {
  return query.trim().toLowerCase();
}

function matchesField(field: string, query: string): boolean {
  return field.toLowerCase().includes(query);
}

export function filterIrregularVerbs(verbs: IrregularVerbItem[], query: string): IrregularVerbItem[] {
  const normalized = normalizeQuery(query);
  if (normalized.length === 0) {
    return verbs;
  }

  return verbs.filter(
    (verb) =>
      matchesField(verb.base, normalized) ||
      matchesField(verb.past, normalized) ||
      matchesField(verb.pastParticiple, normalized) ||
      matchesField(verb.translation, normalized),
  );
}
