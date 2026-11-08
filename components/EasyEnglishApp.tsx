"use client";

import { useEffect, useState, type JSX } from "react";
import { TabBar } from "@/components/TabBar";
import { TopBar } from "@/components/TopBar";
import { HomePanel, PracticePanel, ProgressPanel } from "@/components/Panels";
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

  useEffect(() => {
    document.documentElement.dataset.online = online ? "true" : "false";
  }, [online]);

  return (
    <div className="app">
      <TopBar online={online} canInstall={canInstall} onInstall={install} />
      <main>
        <Panel />
      </main>
      <TabBar tabs={TABS} current={tab} onChange={setTab} />
    </div>
  );
}
