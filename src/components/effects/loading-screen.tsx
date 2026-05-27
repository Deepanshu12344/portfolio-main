"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`fixed inset-0 z-[80] grid place-items-center bg-white transition-opacity duration-700 dark:bg-[#050816] ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`}>
      <div className="space-y-4 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-zinc-300 border-t-black dark:border-slate-700 dark:border-t-cyan-400" />
        <p className="text-sm tracking-[0.2em] text-zinc-700 dark:text-slate-300">LOADING EXPERIENCE</p>
      </div>
    </div>
  );
}
