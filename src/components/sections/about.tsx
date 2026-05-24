"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const tech = ["React", "Next.js", "Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "WebSockets", "AI APIs"];
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">About Me</h3>
      <p className="mt-4 max-w-3xl text-slate-300">Deepanshu Sharma is a Full Stack Developer and Computer Science Engineering student passionate about building scalable web applications, real-time systems, and AI-powered solutions.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tech.map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} viewport={{ once: true }}>
            <Card className="p-5 text-slate-200 hover:border-cyan-300/50">{item}</Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

