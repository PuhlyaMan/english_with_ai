import type { DictionaryApiError, DictionaryEntry } from "@/types/dictionary";

const DICTIONARY_API_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en";

export class DictionaryValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DictionaryValidationError";
  }
}

export class DictionaryNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DictionaryNotFoundError";
  }
}

export class DictionaryFetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DictionaryFetchError";
  }
}

export async function fetchDictionaryEntry(word: string): Promise<DictionaryEntry[]> {
  const trimmed = word.trim();
  if (!trimmed) {
    throw new DictionaryValidationError("Enter a word to look up.");
  }

  const response = await fetch(`${DICTIONARY_API_BASE}/${encodeURIComponent(trimmed)}`);

  if (!response.ok) {
    if (response.status === 404) {
      let message = "No definitions found for this word.";
      try {
        const body = (await response.json()) as DictionaryApiError;
        if (body.message) {
          message = body.message;
        }
      } catch {
        /* use default message */
      }
      throw new DictionaryNotFoundError(message);
    }
    throw new DictionaryFetchError("Could not load the dictionary. Try again.");
  }

  return (await response.json()) as DictionaryEntry[];
}
