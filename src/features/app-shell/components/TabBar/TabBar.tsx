"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./TabBar.module.css";
import { PRIMARY_NAV_TABS } from "@/types/tabs";

function isActiveTab(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.tabbar} aria-label="Primary">
      {PRIMARY_NAV_TABS.map((tab) => {
        const isActive = isActiveTab(pathname, tab.href);
        const tabClassName = isActive
          ? `${styles.tabLink} ${styles.tabLinkActive}`
          : styles.tabLink;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={tabClassName}
            aria-current={isActive ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
