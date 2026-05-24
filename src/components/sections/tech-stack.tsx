import { Card } from "@/components/ui/card";

export function TechStackSection() {
  const stack = ["Next.js", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Framer Motion", "GSAP"];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">Tech Stack</h3>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {stack.map((s) => <Card key={s} className="p-4 text-center text-slate-200">{s}</Card>)}
      </div>
    </section>
  );
}

