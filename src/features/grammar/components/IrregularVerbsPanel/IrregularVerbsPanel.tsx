"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { IrregularVerbItem } from "@/features/grammar/stores/GrammarStore";
import { filterIrregularVerbs } from "@/features/grammar/lib/filterIrregularVerbs";
import styles from "./IrregularVerbsPanel.module.css";

export interface IrregularVerbsPanelProps {
  verbs: IrregularVerbItem[];
}

export function IrregularVerbsPanel({ verbs }: IrregularVerbsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const panelId = useId();
  const searchId = useId();
  const headingId = "irregular-verbs-heading";

  const filteredVerbs = useMemo(() => filterIrregularVerbs(verbs, query), [verbs, query]);
  const isSearching = query.trim().length > 0;

  useEffect(() => {
    if (isSearching) {
      setIsOpen(true);
    }
  }, [isSearching]);

  if (verbs.length === 0) {
    return null;
  }

  return (
    <section className={styles.panel} aria-labelledby={headingId}>
      <h2 className={styles.title} id={headingId}>
        Неправильные глаголы
      </h2>
      <p className={styles.lead}>
        {verbs.length} неправильных глаголов: V1, V2 (Past Simple), V3 (Past Participle) и перевод на русский.
      </p>

      <div className={styles.search}>
        <label className={styles.searchLabel} htmlFor={searchId}>
          Поиск глагола
        </label>
        <input
          id={searchId}
          className={styles.searchInput}
          type="search"
          name="verb-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Например: go, went, swim"
          autoComplete="off"
        />
      </div>

      <p className={styles.searchMeta} aria-live="polite">
        {isSearching
          ? `Найдено: ${filteredVerbs.length} из ${verbs.length}`
          : "Введите слово в любой форме, чтобы отфильтровать таблицу."}
      </p>

      <button
        type="button"
        className={styles.disclosure}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.chevron} data-open={isOpen} aria-hidden />
        {isOpen ? "Свернуть таблицу" : "Открыть таблицу"}
      </button>

      {isOpen && (
        <div className={styles.tableWrap} id={panelId} role="region" aria-labelledby={headingId}>
          {filteredVerbs.length === 0 ? (
            <p className={styles.empty}>Ничего не найдено. Попробуйте другую форму или латиницу без опечаток.</p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">V1</th>
                  <th scope="col">V2</th>
                  <th scope="col">V3</th>
                  <th scope="col">Перевод</th>
                </tr>
              </thead>
              <tbody>
                {filteredVerbs.map((verb) => (
                  <tr key={verb.id}>
                    <td>{verb.base}</td>
                    <td>{verb.past}</td>
                    <td>{verb.pastParticiple}</td>
                    <td>{verb.translation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </section>
  );
}
