"use client";

import Image from "next/image";
import styles from "./TopBar.module.css";

interface TopBarProps {
  online: boolean;
}

export function TopBar({ online }: TopBarProps) {
  const statusClassName = online
    ? styles.brandStatus
    : `${styles.brandStatus} ${styles.brandStatusOffline}`;

  return (
    <header className={styles.topbar}>
      <div className={styles.brand}>
        <Image
          className={styles.brandIcon}
          src="/icons/icon-192.png"
          width={40}
          height={40}
          alt=""
          priority
        />
        <div>
          <p className={styles.brandName}>EasyEnglish</p>
          <p className={statusClassName}>{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </header>
  );
}
