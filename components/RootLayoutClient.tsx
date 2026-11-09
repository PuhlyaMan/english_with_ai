"use client";

import type { ReactNode } from "react";
import styles from "./RootLayoutClient.module.css";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { StoreProvider } from "@/src/stores/StoreProvider";

interface RootLayoutClientProps {
  children: ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <StoreProvider>
      <div className={styles.shell}>
        {children}
        <ServiceWorkerRegistration />
      </div>
    </StoreProvider>
  );
}
