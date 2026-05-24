"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
};

export function FeaturedWorksBrowser({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      <div className="mt-12 grid gap-y-10">
        {projects.map((project, i) => (
          <article key={project.title} className="space-y-3">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block w-full overflow-hidden bg-zinc-950 text-left"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="h-screen w-full bg-black object-cover"
                priority={i < 2}
              />
            </button>
            <h3 className="font-mono text-2xl font-bold uppercase tracking-[0.03em] text-zinc-200">{project.title}</h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{project.category}</p>
            <p className="text-sm leading-7 text-zinc-400">{project.description}</p>
          </article>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-[120] bg-black" role="dialog" aria-modal="true">
          <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
            <div className="flex items-center gap-2 px-4 py-3">
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="h-4 w-4 rounded-full bg-red-500"
                aria-label="Close"
              />
              <p className="ml-3 truncate text-xs uppercase tracking-[0.14em] text-zinc-400">{active.title}</p>
            </div>

            <iframe
              title={active.title}
              src={active.liveUrl}
              className="h-full w-full bg-black"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
