export const TAB_IDS = ["home", "practice", "progress"] as const;

export type TabId = (typeof TAB_IDS)[number];

export type TabItem = {
  id: TabId;
  label: string;
};
