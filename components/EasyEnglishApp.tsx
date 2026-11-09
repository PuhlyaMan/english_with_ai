"use client";

import { useState, type JSX } from "react";
import styles from "./EasyEnglishApp.module.css";
import { TabBar } from "@/components/TabBar";
import { TopBar } from "@/components/TopBar";
import { HomePanel } from "@/components/HomePanel";
import { PracticePanel } from "@/components/PracticePanel";
import { ProgressPanel } from "@/components/ProgressPanel";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import type { TabId, TabItem } from "@/types/tabs";

const TABS: TabItem[] = [
  { id: "home", label: "Home" },
  { id: "practice", label: "Practice" },
  { id: "progress", label: "Progress" }
];

const PANELS: Record<TabId, () => JSX.Element> = {
  home: HomePanel,
  practice: PracticePanel,
  progress: ProgressPanel
};

export function EasyEnglishApp() {
  const online = useOnlineStatus();
  const { canInstall, install } = useInstallPrompt();
  const [tab, setTab] = useState<TabId>("home");
  const Panel = PANELS[tab];

  return (
    <div className={styles.app}>
      <TopBar online={online} canInstall={canInstall} onInstall={install} />
      <main className={styles.main}>
        <Panel />
      </main>
      <TabBar tabs={TABS} current={tab} onChange={setTab} />
    </div>
  );
}
