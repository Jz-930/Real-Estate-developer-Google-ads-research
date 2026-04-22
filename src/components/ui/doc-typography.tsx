// Document typographic system — created by jiackey
import { cn } from "@/lib/utils";
import React from "react";

export function DocH1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="mb-10 pb-6 border-b border-accent/20 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-accent to-transparent" />
      <h1 className={cn("text-3xl md:text-5xl font-bold tracking-tight text-gradient-gold drop-shadow-xl", className)}>
        {children}
      </h1>
    </div>
  );
}

export function DocH2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-xl md:text-3xl font-semibold text-zinc-100 tracking-tight mt-12 md:mt-16 mb-4 md:mb-6 drop-shadow-md", className)}>
      {children}
    </h2>
  );
}

export function DocH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-lg md:text-xl font-medium text-zinc-200 mt-6 md:mt-8 mb-3 md:mb-4", className)}>
      {children}
    </h3>
  );
}

export function DocP({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-zinc-300 leading-relaxed mb-6 text-base md:text-lg font-light tracking-wide", className)}>
      {children}
    </p>
  );
}

export function DocAlert({ title, children, type = "info" }: { title?: string; children: React.ReactNode; type?: "info" | "warning" }) {
  return (
    <div className={cn(
      "p-6 rounded-xl mb-10 glass-panel relative overflow-hidden group",
      type === "warning" 
        ? "border-l-4 border-l-amber-500" 
        : "border-l-4 border-l-accent"
    )}>
      {/* Decorative subtle background elements for premium feel */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-500" />
      
      {title && <h4 className={cn("font-bold mb-3 text-lg", type === "warning" ? "text-amber-400" : "text-accent")}>{title}</h4>}
      <div className="text-zinc-300 opacity-95 leading-relaxed space-y-2 font-light">{children}</div>
    </div>
  );
}
