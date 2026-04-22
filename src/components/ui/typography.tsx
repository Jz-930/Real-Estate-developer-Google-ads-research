/**
 * Typography primitives
 * @author jiackey
 * @module deck-typography
 */
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6", className)}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4", className)}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-2xl md:text-3xl font-medium tracking-tight text-white mb-4", className)}>
      {children}
    </h3>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl", className)}>
      {children}
    </p>
  );
}

export function AccentText({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-accent font-semibold tracking-wider uppercase text-sm", className)}>
      {children}
    </span>
  );
}
