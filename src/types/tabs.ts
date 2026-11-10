export type NavTabItem = {
  href: string;
  label: string;
};

export const PRIMARY_NAV_TABS: NavTabItem[] = [
  { href: "/", label: "Home" },
  { href: "/word-search", label: "Word search" },
  { href: "/practice", label: "Practice" },
  { href: "/progress", label: "Progress" },
];
