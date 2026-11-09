"use client";

import styles from "./PracticePanel.module.css";

export function PracticePanel() {
  return (
    <section>
      <p className={styles.eyebrow}>Practice</p>
      <h1 className={styles.title}>Your next session</h1>
      <p className={styles.lead}>Practice activities are not connected yet. This screen is part of the app shell.</p>
    </section>
  );
}
