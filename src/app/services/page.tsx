import Link from "next/link";
import { ServicesPanels } from "@/components/sections/services-panels";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="absolute left-4 top-4 z-20 sm:left-8 sm:top-8">
        <Link
          href="/"
          className="border border-zinc-900 bg-black px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-zinc-100 dark:border-zinc-100 dark:bg-white dark:text-black"
        >
          Back
        </Link>
      </div>
      <ServicesPanels />
    </main>
  );
}
