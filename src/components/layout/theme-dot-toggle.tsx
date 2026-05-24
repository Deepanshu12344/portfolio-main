"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeDotToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="inline-flex items-center"
    >
      <span
        className="inline-block h-3.5 w-3.5 rounded-full"
        style={{ backgroundColor: isDark ? "#ffffff" : "#000000" }}
      />
    </button>
  );
}
