"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  hoverImage?: string;
  stack: string[];
  liveUrl: string;
};

export function FeaturedWorksBrowser({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const active = useMemo(() => {
    if (activeIndex === null) return null;
    return projects[activeIndex] ?? null;
  }, [activeIndex, projects]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.setAttribute("data-browser-open", "true");
    } else {
      document.body.removeAttribute("data-browser-open");
    }

    return () => {
      document.body.removeAttribute("data-browser-open");
    };
  }, [activeIndex]);

  return (
    <>
      <div className="mt-8 grid gap-y-10 sm:mt-12">
        {projects.map((project, i) => (
          <article key={project.title} className="fade-up space-y-3">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="hover-lift block w-full overflow-hidden bg-zinc-950 text-left"
            >
              <Image
                src={hoveredIndex === i && project.hoverImage ? project.hoverImage : project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="h-[260px] w-full bg-black object-cover sm:h-[420px] lg:h-[560px]"
                priority={i < 2}
              />
            </button>
            <h3 className="font-mono text-xl font-bold uppercase tracking-[0.03em] text-zinc-200 sm:text-2xl">{project.title}</h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{project.category}</p>
            <p className="text-sm leading-7 text-zinc-400">{project.description}</p>
          </article>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-[120]" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-3 top-3 z-10 rounded-md border border-zinc-700 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-100 backdrop-blur sm:right-4 sm:top-4 sm:text-xs"
            aria-label="Close"
          >
            Close
          </button>
          <iframe
            title={active.title}
            src={active.liveUrl}
            className="h-screen w-screen bg-black"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : null}
    </>
  );
}
