"use client";
// Navigation capsule — jiackey:ui:navbar

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "开篇致辞" },
  { id: "context", label: "市场现状" },
  { id: "products", label: "广告矩阵" },
  { id: "cases", label: "标杆案例" },
  { id: "gap", label: "转化破局" },
  { id: "action-plan", label: "执行路径" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of [...SECTIONS].reverse()) {
        const el = document.getElementById(section.id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-4 sm:py-6"
      )}
    >
      <div className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
              activeSection === section.id
                ? "text-background"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{section.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
