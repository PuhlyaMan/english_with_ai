"use client";

import styles from "./HomePanel.module.css";

interface Card {
  title: string;
  text: string;
}

const CARDS: Card[] = [
  {
    title: "Speak",
    text: "Short conversations you can repeat out loud.",
  },
  {
    title: "Words",
    text: "A small set of words to review when you have a minute.",
  },
  {
    title: "Listen",
    text: "Hear a phrase, then try it in your own words.",
  },
];

export function HomePanel() {
  return (
    <section>
      <p className={styles.eyebrow}>English with AI</p>
      <h1 className={styles.title}>Practice a little every day.</h1>
      <p className={styles.lead}>
        EasyEnglish helps you practice a little every day. Lessons, conversation, and progress will live
        here.
      </p>
      <ul className={styles.cards}>
        {CARDS.map((card) => (
          <li key={card.title} className={styles.card}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardText}>{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
