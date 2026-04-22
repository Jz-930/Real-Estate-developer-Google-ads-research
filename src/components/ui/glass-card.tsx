import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Glass morphism card — jiackey:component:v1
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false }: GlassCardProps) {
  return (
    <div data-jk="gc"
      className={cn(
        "relative overflow-hidden rounded-2xl glass",
        glow && "before:absolute before:inset-0 before:-z-10 before:bg-accent/10 before:blur-2xl before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
    >
      {/* Subtle top inner border for lighting effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
