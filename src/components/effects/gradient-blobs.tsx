"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function GradientBlobs() {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!a.current || !b.current) return;
    gsap.to(a.current, { x: 80, y: 30, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(b.current, { x: -70, y: -20, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div ref={a} className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div ref={b} className="absolute right-[8%] top-[24%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}

