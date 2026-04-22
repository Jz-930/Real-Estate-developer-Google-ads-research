import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
}

export function Section({ children, className, id, containerClass }: SectionProps) {
  return (
    <section
      id={id}
      data-s="jk"
      className={cn("relative min-h-screen flex flex-col py-24 sm:py-32 overflow-hidden", className)}
    >
      {/* Background ambient light or patterns could be injected here */}
      
      <div className={cn("container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center", containerClass)}>
        {children}
      </div>
    </section>
  );
}
