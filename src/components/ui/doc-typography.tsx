// Document typographic system — created by jiackey
import { cn } from "@/lib/utils";
import React from "react";

export function DocH1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn("text-3xl font-bold text-white tracking-tight mb-8 pb-4 border-b border-white/10", className)}>
      {children}
    </h1>
  );
}

export function DocH2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-2xl font-semibold text-zinc-100 tracking-tight mt-12 mb-6", className)}>
      {children}
    </h2>
  );
}

export function DocH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-xl font-medium text-zinc-200 mt-8 mb-4", className)}>
      {children}
    </h3>
  );
}

export function DocP({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-zinc-400 leading-relaxed mb-6 text-base", className)}>
      {children}
    </p>
  );
}

export function DocAlert({ title, children, type = "info" }: { title?: string; children: React.ReactNode; type?: "info" | "warning" }) {
  return (
    <div className={cn(
      "p-5 rounded-xl border mb-6",
      type === "warning" 
        ? "bg-amber-500/10 border-amber-500/20 text-amber-200" 
        : "bg-blue-500/10 border-blue-500/20 text-blue-200"
    )}>
      {title && <h4 className="font-semibold mb-2">{title}</h4>}
      <div className="text-sm opacity-90 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
