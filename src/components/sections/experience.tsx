"use client";
import { timeline } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">Experience Timeline</h3>
      <div className="relative mt-10 border-l border-slate-700 pl-8">
        {timeline.map((item) => (
          <div key={item.title} className="relative mb-10">
            <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-cyan-400" />
            <p className="text-sm text-cyan-300">{item.year}</p>
            <h4 className="text-xl font-semibold text-slate-100">{item.title}</h4>
            <p className="text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

