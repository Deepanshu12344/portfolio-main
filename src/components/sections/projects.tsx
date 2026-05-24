"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">Featured Projects</h3>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}>
            <Card className="group p-5">
              <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20" />
              <h4 className="font-semibold text-slate-100">{project.title}</h4>
              <p className="mt-2 line-clamp-3 text-sm text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">{tag}</span>)}</div>
              <div className="mt-4 flex gap-3">
                <a href={project.live} className="text-cyan-300"><ExternalLink size={16} /></a>
                <a href={project.github} className="text-cyan-300"><ExternalLink size={16} /></a>
                <button onClick={() => setActive(i)} className="ml-auto text-sm text-slate-200">Details</button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      {active !== null && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4" onClick={() => setActive(null)}>
          <Card className="max-w-xl p-6" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-xl font-semibold text-slate-100">{projects[active].title}</h4>
            <p className="mt-3 text-slate-300">{projects[active].description}</p>
          </Card>
        </div>
      )}
    </section>
  );
}
