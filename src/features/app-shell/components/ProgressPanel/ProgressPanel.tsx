"use client";

import styles from "./ProgressPanel.module.css";

export function ProgressPanel() {
  return (
    <section>
      <p className={styles.eyebrow}>Progress</p>
      <h1 className={styles.title}>Keep the streak</h1>
      <p className={styles.lead}>Progress will show here once lessons start saving on this device.</p>
    </section>
  );
}
