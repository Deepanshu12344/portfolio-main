import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl", className)} {...props} />;
}

