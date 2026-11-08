import type { TabId, TabItem } from "@/types/tabs";

type TabBarProps = {
  tabs: TabItem[];
  current: TabId;
  onChange: (id: TabId) => void;
};

export function TabBar({ tabs, current, onChange }: TabBarProps) {
  return (
    <nav className="tabbar" aria-label="Primary">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          aria-current={tab.id === current ? "page" : undefined}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
