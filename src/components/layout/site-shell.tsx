"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { CursorDot } from "@/components/effects/cursor-dot";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CursorDot />
      {children}
    </ThemeProvider>
  );
}
