"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { navItems } from "@/data/portfolio";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-start bg-black/60 p-4 pt-24" onClick={() => setOpen(false)}>
      <Command className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 text-slate-100" onClick={(e) => e.stopPropagation()}>
        <Command.Input placeholder="Jump to a section..." className="w-full border-b border-slate-700 bg-transparent p-4 outline-none" />
        <Command.List className="p-2">
          {navItems.map((item) => (
            <Command.Item
              key={item.href}
              className="cursor-pointer rounded-lg px-3 py-2 data-[selected=true]:bg-slate-800"
              onSelect={() => {
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}

