"use client";

import * as React from "react";

type AvailableCircleProps = {
  text?: string;
  size?: number;
  speedSeconds?: number;
  className?: string;
};

export function AvailableCircle({
  text = "OPEN TO OPPORTUNITIES",
  size = 140,
  speedSeconds = 10,
  className,
}: AvailableCircleProps) {
  const id = React.useId();
  const viewBox = 100;
  const r = 36;
  const cx = viewBox / 2;
  const cy = viewBox / 2;
  const circumference = 2 * Math.PI * r;

  // Fill the ring by repeating a phrase with separators (prevents any visible gap).
  const ringChunk = `${text} • `;
  // Keep the string long enough to cover the path, and rely on textLength to avoid overlaps.
  const ringText = ringChunk.repeat(6).trim();

  return (
    <div
      className={["relative grid place-items-center", "text-zinc-900 dark:text-zinc-100", className].join(" ")}
      style={{ width: size, height: size }}
      aria-label="Open to opportunities"
    >
      <svg viewBox={`0 0 ${viewBox} ${viewBox}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path
            id={id}
            d={`M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,1 ${2 * r},0 a ${r},${r} 0 1,1 -${2 * r},0`}
          />
        </defs>
        <g className="origin-center available-circle-spin" style={{ animationDuration: `${speedSeconds}s` }}>
          <text fill="currentColor" className="font-mono text-[9px] font-bold uppercase tracking-[0.28em]">
            <textPath
              href={`#${id}`}
              startOffset="50%"
              textAnchor="middle"
              textLength={circumference}
              lengthAdjust="spacingAndGlyphs"
            >
              {ringText}
            </textPath>
          </text>
        </g>
      </svg>

      <div
        className={[
          "grid place-items-center rounded-full",
          "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black",
          "shadow-sm ring-1 ring-black/10 dark:ring-white/10",
        ].join(" ")}
        style={{ width: Math.round(size * 0.54), height: Math.round(size * 0.54) }}
      >
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">CONNECT</span>
      </div>
    </div>
  );
}
