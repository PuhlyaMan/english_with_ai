"use client";

import type { ReactNode } from "react";
import styles from "./RootLayoutClient.module.css";
import { StoreProvider } from "@/stores/StoreContext";

interface RootLayoutClientProps {
  children: ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <StoreProvider>
      <div className={styles.shell}>{children}</div>
    </StoreProvider>
  );
}
