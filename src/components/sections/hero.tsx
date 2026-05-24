"use client";

import { motion } from "framer-motion";
import { ExternalLink, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center px-4 pt-24" id="home">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-cyan-300">
          Hi, I&apos;m
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          Deepanshu Sharma
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-2xl font-semibold text-slate-100 md:text-4xl">
          Full Stack Developer
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-5 max-w-2xl text-slate-300">
          Building scalable web apps, AI-powered systems, and real-time platforms.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
          <Button>Let&apos;s Collaborate</Button>
          <Button variant="secondary"><Download className="mr-2 h-4 w-4" />Resume</Button>
          <a href="https://github.com/Deepanshu12344" target="_blank" rel="noreferrer"><Button variant="ghost"><ExternalLink className="mr-2 h-4 w-4" />GitHub</Button></a>
          <a href="https://www.linkedin.com/in/deepanshu-sharma-164057250/" target="_blank" rel="noreferrer"><Button variant="ghost"><ExternalLink className="mr-2 h-4 w-4" />LinkedIn</Button></a>
        </motion.div>
        <div className="mt-16 animate-bounce text-slate-400"><ArrowDown /></div>
      </div>
    </section>
  );
}
