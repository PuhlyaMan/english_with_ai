"use client";

import type { FormEvent } from "react";
import { useWordSearch } from "@/features/word-search/hooks/useWordSearch";
import { WordEntryView } from "@/features/word-search/components/WordEntryView/WordEntryView";
import styles from "./WordLookupPanel.module.css";

export function WordLookupPanel() {
  const { query, setQuery, entries, isLoading, errorMessage, search } = useWordSearch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void search();
  };

  return (
    <section className={styles.panel}>
      <p className={styles.eyebrow}>Word search</p>
      <h1 className={styles.title}>Look up a word</h1>
      <p className={styles.lead}>Enter an English word and search the Free Dictionary API.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="word-search">
          Word
        </label>
        <div className={styles.controls}>
          <input
            id="word-search"
            className={styles.input}
            type="search"
            name="word"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. hello"
            autoComplete="off"
            disabled={isLoading}
          />
          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Searching…" : "Search"}
          </button>
        </div>
      </form>

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      {entries && entries.length > 0 && (
        <div className={styles.results}>
          {entries.map((entry) => (
            <WordEntryView key={`${entry.word}-${entry.sourceUrls?.[0] ?? "default"}`} entry={entry} />
          ))}
        </div>
      )}
    </section>
  );
}
