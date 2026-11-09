"use client";

import styles from "./TabBar.module.css";
import type { TabId, TabItem } from "@/types/tabs";

interface TabBarProps {
  tabs: TabItem[];
  current: TabId;
  onChange: (id: TabId) => void;
}

export function TabBar({ tabs, current, onChange }: TabBarProps) {
  return (
    <nav className={styles.tabbar} aria-label="Primary">
      {tabs.map((tab) => {
        const isActive = tab.id === current;
        const buttonClassName = isActive
          ? `${styles.tabButton} ${styles.tabButtonActive}`
          : styles.tabButton;

        return (
          <button
            key={tab.id}
            type="button"
            className={buttonClassName}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
