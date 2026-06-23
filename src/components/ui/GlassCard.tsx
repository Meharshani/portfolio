import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        "dark:border-white/10 dark:bg-white/5",
        "light:border-gray-200/60 light:bg-white/70",
        hover && "transition-all duration-300 hover:border-brand-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-brand-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}
