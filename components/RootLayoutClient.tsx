"use client";

import type { ReactNode } from "react";
import styles from "./RootLayoutClient.module.css";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

interface RootLayoutClientProps {
  children: ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <div className={styles.shell}>
      {children}
      <ServiceWorkerRegistration />
    </div>
  );
}
