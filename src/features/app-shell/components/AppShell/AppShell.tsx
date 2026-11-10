"use client";

import type { ReactNode } from "react";
import styles from "./AppShell.module.css";
import { TabBar } from "@/features/app-shell/components/TabBar/TabBar";
import { TopBar } from "@/features/app-shell/components/TopBar/TopBar";
import { useOnlineStatus } from "@/features/app-shell/hooks/useOnlineStatus";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const online = useOnlineStatus();

  return (
    <div className={styles.app}>
      <TopBar online={online} />
      <main className={styles.main}>{children}</main>
      <TabBar />
    </div>
  );
}
