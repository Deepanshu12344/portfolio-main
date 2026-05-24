"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">Skills</h3>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([k, list], i) => (
          <motion.div key={k} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
            <Card className="h-full p-6">
              <h4 className="mb-3 text-lg font-semibold capitalize text-cyan-300">{k.replace("ai", "AI & Advanced")}</h4>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">{item}</span>)}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

