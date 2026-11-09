import type { ReactNode } from "react";
import { RootLayoutClient } from "@/components/RootLayoutClient";

export const metadata = {
  title: "EasyEnglish",
  description: "Learn English with AI.",
  applicationName: "EasyEnglish",
  appleWebApp: {
    capable: true,
    title: "EasyEnglish",
    statusBarStyle: "default" as const
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }]
  }
};

export const viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
