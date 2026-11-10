"use client";

import { useId, useState } from "react";
import type { GrammarRuleItem } from "@/features/grammar/stores/GrammarStore";
import styles from "./GrammarSection.module.css";

export interface GrammarRuleCardProps {
  rule: GrammarRuleItem;
}

export function GrammarRuleCard({ rule }: GrammarRuleCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const headingId = useId();

  return (
    <li className={styles.ruleCard}>
      <h3 className={styles.ruleHeading}>
        <button
          type="button"
          className={styles.disclosureButton}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={headingId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.chevron} data-open={isOpen} aria-hidden />
          {rule.title}
        </button>
      </h3>
      {isOpen && (
        <div className={styles.rulePanel} id={panelId} role="region" aria-labelledby={headingId}>
          <p className={styles.ruleText}>{rule.rule}</p>
          {rule.examples.length > 0 && (
            <ul className={styles.exampleList}>
              {rule.examples.map((example) => (
                <li className={styles.exampleItem} key={example}>
                  {example}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}
