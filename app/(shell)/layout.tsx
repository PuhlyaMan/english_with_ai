import type { ReactNode } from "react";
import { AppShell } from "@/features/app-shell/components/AppShell/AppShell";

interface ShellLayoutProps {
  children: ReactNode;
}

export default function ShellLayout({ children }: ShellLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
