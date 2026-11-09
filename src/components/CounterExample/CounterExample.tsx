"use client";

import { observer } from "mobx-react-lite";
import styles from "./CounterExample.module.css";
import { useStore } from "@/src/stores/StoreProvider";

interface CounterExampleProps {
  title?: string;
}

export const CounterExample = observer(function CounterExample({
  title = "MobX counter"
}: CounterExampleProps) {
  const { counterStore } = useStore();

  return (
    <section className={styles.wrap} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.row}>
        <p className={styles.count} data-testid="counter-value">
          {counterStore.count}
        </p>
        <button type="button" className={styles.button} onClick={() => counterStore.increment()}>
          Increment
        </button>
      </div>
    </section>
  );
});
