"use client";

import { useContext } from "react";
import { StoreContext } from "@/stores/StoreContext";
import type { RootStore } from "@/stores/RootStore";

export function useStore(): RootStore {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
}
