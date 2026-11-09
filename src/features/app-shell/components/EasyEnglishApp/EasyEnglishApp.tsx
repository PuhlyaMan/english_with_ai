"use client";

import { useState, type JSX } from "react";
import styles from "./EasyEnglishApp.module.css";
import { TabBar } from "@/features/app-shell/components/TabBar/TabBar";
import { TopBar } from "@/features/app-shell/components/TopBar/TopBar";
import { HomePanel } from "@/features/app-shell/components/HomePanel/HomePanel";
import { PracticePanel } from "@/features/app-shell/components/PracticePanel/PracticePanel";
import { ProgressPanel } from "@/features/app-shell/components/ProgressPanel/ProgressPanel";
import { useOnlineStatus } from "@/features/app-shell/hooks/useOnlineStatus";
import type { TabId, TabItem } from "@/types/tabs";

const TABS: TabItem[] = [
  { id: "home", label: "Home" },
  { id: "practice", label: "Practice" },
  { id: "progress", label: "Progress" },
];

const PANELS: Record<TabId, () => JSX.Element> = {
  home: HomePanel,
  practice: PracticePanel,
  progress: ProgressPanel,
};

export function EasyEnglishApp() {
  const online = useOnlineStatus();
  const [tab, setTab] = useState<TabId>("home");
  const Panel = PANELS[tab];

  return (
    <div className={styles.app}>
      <TopBar online={online} />
      <main className={styles.main}>
        <Panel />
      </main>
      <TabBar tabs={TABS} current={tab} onChange={setTab} />
    </div>
  );
}
