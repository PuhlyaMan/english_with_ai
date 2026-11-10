"use client";

import { useId, useState } from "react";
import type { GrammarRuleItem } from "@/features/grammar/stores/GrammarStore";
import { GrammarRuleCard } from "./GrammarRuleCard";
import styles from "./GrammarSection.module.css";

export interface GrammarSectionProps {
  sectionId: string;
  title: string;
  rules: GrammarRuleItem[];
}

export function GrammarSection({ sectionId, title, rules }: GrammarSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const headingId = `${sectionId}-heading`;

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <h2 className={styles.heading}>
        <button
          type="button"
          className={styles.sectionDisclosure}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={headingId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.chevron} data-open={isOpen} aria-hidden />
          {title}
        </button>
      </h2>

      {isOpen && (
        <div className={styles.sectionPanel} id={panelId} role="region" aria-labelledby={headingId}>
          <ul className={styles.ruleList}>
            {rules.map((rule) => (
              <GrammarRuleCard key={rule.id} rule={rule} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
