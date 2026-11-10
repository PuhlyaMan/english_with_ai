"use client";

import { useCallback, useState } from "react";
import { fetchDictionaryEntry } from "@/lib/dictionary/fetchDictionaryEntry";
import type { DictionaryEntry } from "@/types/dictionary";

export function useWordSearch() {
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<DictionaryEntry[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const search = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const data = await fetchDictionaryEntry(query);
      setEntries(data);
    } catch (error) {
      setEntries(null);
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  return {
    query,
    setQuery,
    entries,
    isLoading,
    errorMessage,
    search,
  };
}
