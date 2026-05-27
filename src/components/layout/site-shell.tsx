"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { CursorDot } from "@/components/effects/cursor-dot";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { LoadingScreen } from "@/components/effects/loading-screen";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CursorDot />
      {children}
    </ThemeProvider>
  );
}
