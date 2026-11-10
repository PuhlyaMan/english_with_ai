"use client";

import type { DictionaryEntry, DictionaryPhonetic } from "@/types/dictionary";
import styles from "./WordEntryView.module.css";

interface WordEntryViewProps {
  entry: DictionaryEntry;
}

function collectPhonetics(phonetics: DictionaryPhonetic[]) {
  const seen = new Set<string>();
  const items: { text: string; audio?: string }[] = [];

  for (const item of phonetics) {
    const text = item.text?.trim();
    if (!text || seen.has(text)) {
      continue;
    }
    seen.add(text);
    const audio = item.audio?.trim() || undefined;
    items.push({ text, audio });
  }

  return items;
}

export function WordEntryView({ entry }: WordEntryViewProps) {
  const phonetics = collectPhonetics(entry.phonetics);

  return (
    <article className={styles.entry}>
      <header className={styles.header}>
        <h2 className={styles.word}>{entry.word}</h2>
        {phonetics.length > 0 && (
          <ul className={styles.phonetics}>
            {phonetics.map((item) => (
              <li key={item.text} className={styles.phonetic}>
                <span className={styles.phoneticText}>{item.text}</span>
                {item.audio && (
                  <button
                    type="button"
                    className={styles.playButton}
                    aria-label={`Play pronunciation ${item.text}`}
                    onClick={() => {
                      const audio = new Audio(item.audio);
                      void audio.play();
                    }}
                  >
                    Listen
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </header>

      {entry.meanings.map((meaning) => (
        <section key={meaning.partOfSpeech} className={styles.meaning}>
          <h3 className={styles.partOfSpeech}>{meaning.partOfSpeech}</h3>
          <ol className={styles.definitions}>
            {meaning.definitions.map((def, index) => (
              <li key={`${meaning.partOfSpeech}-${index}`} className={styles.definition}>
                <p className={styles.definitionText}>{def.definition}</p>
                {def.example && <p className={styles.example}>&ldquo;{def.example}&rdquo;</p>}
              </li>
            ))}
          </ol>
          {meaning.synonyms.length > 0 && (
            <p className={styles.meta}>
              <span className={styles.metaLabel}>Synonyms:</span> {meaning.synonyms.join(", ")}
            </p>
          )}
          {meaning.antonyms.length > 0 && (
            <p className={styles.meta}>
              <span className={styles.metaLabel}>Antonyms:</span> {meaning.antonyms.join(", ")}
            </p>
          )}
        </section>
      ))}
    </article>
  );
}
