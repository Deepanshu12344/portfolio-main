import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-slate-950 hover:scale-[1.03]",
        secondary: "border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-slate-200 hover:border-cyan-300/60",
        ghost: "px-3 py-2 text-slate-300 hover:bg-slate-800/50",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

