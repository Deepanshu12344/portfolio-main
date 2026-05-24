"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div className="pointer-events-none fixed z-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" style={{ left: pos.x - 112, top: pos.y - 112 }} />;
}

