"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type SkillGroup = {
  title: string;
  items: string[];
};

const logoMap: Record<string, string> = {
  "REACT": "https://cdn.simpleicons.org/react/61DAFB",
  "NEXT.JS": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "JAVASCRIPT": "https://cdn.simpleicons.org/javascript/F7DF1E",
  "TYPESCRIPT": "https://cdn.simpleicons.org/typescript/3178C6",
  "TAILWIND CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "NODE.JS": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  "EXPRESS.JS": "https://cdn.simpleicons.org/express/FFFFFF",
  "FASTAPI": "https://cdn.simpleicons.org/fastapi/009688",
  "DJANGO": "https://cdn.simpleicons.org/django/44B78B",
  "MONGODB": "https://cdn.simpleicons.org/mongodb/47A248",
  "POSTGRESQL": "https://cdn.simpleicons.org/postgresql/4169E1",
  "DOCKER": "https://cdn.simpleicons.org/docker/2496ED",
  "LINUX": "https://cdn.simpleicons.org/linux/FCC624",
  "GIT": "https://cdn.simpleicons.org/git/F05032",
};

const themeLogoMap: Record<string, { dark: string; light: string }> = {
  "NEXT.JS": {
    dark: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    light: "https://cdn.simpleicons.org/nextdotjs/000000",
  },
  "EXPRESS.JS": {
    dark: "https://cdn.simpleicons.org/express/FFFFFF",
    light: "https://cdn.simpleicons.org/express/000000",
  },
};

export function SkillsCarousel({ groups }: { groups: SkillGroup[] }) {
  const { resolvedTheme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const skills = Array.from(new Set(groups.flatMap((g) => g.items))).filter((s) => logoMap[s]);
  const looped = [...skills, ...skills, ...skills];
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!hoveredSkill) return;
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [hoveredSkill]);

  return (
    <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden">
      <div className="skills-track flex w-max gap-4 px-0" style={{ animationPlayState: hoveredSkill ? "paused" : "running" }}>
        {looped.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="grid h-24 w-24 shrink-0 place-items-center"
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Image
              src={themeLogoMap[skill] ? (isLight ? themeLogoMap[skill].light : themeLogoMap[skill].dark) : logoMap[skill]}
              alt={skill}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              loading="lazy"
              unoptimized
            />
          </div>
        ))}
      </div>
      {mounted && hoveredSkill
        ? createPortal(
            <div
              className="pointer-events-none fixed z-[130] -translate-x-1/2 -translate-y-[140%] border border-zinc-700 bg-zinc-950 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-100"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              {hoveredSkill}
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
