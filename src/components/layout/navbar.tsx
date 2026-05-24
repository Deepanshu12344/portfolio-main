"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/portfolio";
import { useTheme } from "next-themes";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="font-semibold tracking-wide text-slate-100">Deepanshu Sharma</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">{item.label}</a>
          ))}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-lg border border-slate-700 p-2 text-slate-200">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}><Menu className="text-slate-200" /></button>
      </div>
      {open && (
        <div className="border-t border-slate-800 bg-[#050816] px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-300">{item.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

