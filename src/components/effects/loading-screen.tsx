"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`fixed inset-0 z-[80] grid place-items-center bg-[#050816] transition-opacity duration-700 ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`}>
      <div className="space-y-4 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />
        <p className="text-sm tracking-[0.2em] text-slate-300">LOADING EXPERIENCE</p>
      </div>
    </div>
  );
}

