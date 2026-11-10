"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/stores/useStore";
import { GrammarSection } from "@/features/grammar/components/GrammarSection/GrammarSection";
import { IrregularVerbsPanel } from "@/features/grammar/components/IrregularVerbsPanel/IrregularVerbsPanel";
import styles from "./GrammarPage.module.css";

export const GrammarPage = observer(function GrammarPage() {
  const { grammarStore } = useStore();

  useEffect(() => {
    if (grammarStore.sections.length === 0 && !grammarStore.isLoading && grammarStore.error === null) {
      grammarStore.loadSections();
    }
  }, [grammarStore]);

  return (
    <div className={styles.page}>
      <p className={styles.eyebrow}>Grammar</p>
      <h1 className={styles.title}>Шпаргалки</h1>
      <p className={styles.lead}>
        Краткие правила по временам, предлогам и местоимениям. Раскройте раздел, чтобы увидеть детали. Содержимое
        можно расширять вручную; позже — через English Constructicon API.
      </p>

      {grammarStore.isLoading && <p className={styles.status}>Загрузка…</p>}

      {grammarStore.error && (
        <p className={styles.error} role="alert">
          {grammarStore.error}
        </p>
      )}

      {!grammarStore.isLoading && grammarStore.sections.length > 0 && (
        <>
          <div className={styles.sections}>
            {grammarStore.sections.map((section) => (
              <GrammarSection
                key={section.id}
                sectionId={section.id}
                title={section.title}
                rules={section.rules}
              />
            ))}
          </div>
          <IrregularVerbsPanel verbs={grammarStore.irregularVerbs} />
        </>
      )}
    </div>
  );
});
