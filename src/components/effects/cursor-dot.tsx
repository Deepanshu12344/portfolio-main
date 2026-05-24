"use client";

import { useEffect, useState } from "react";

export function CursorDot() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}

