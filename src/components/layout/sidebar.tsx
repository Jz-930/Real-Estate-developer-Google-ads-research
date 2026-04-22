import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Layers, 
  Target, 
  SearchCode, 
  Globe,
  Wallet 
} from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface SidebarProps {
  sections: Section[];
  activeId: string;
  onSelect: (id: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  "context": <BarChart3 className="w-5 h-5" />,
  "ecosystem": <Layers className="w-5 h-5" />,
  "cases": <Target className="w-5 h-5" />,
  "audits": <SearchCode className="w-5 h-5" />,
  "review": <Globe className="w-5 h-5" />,
  "budget": <Wallet className="w-5 h-5" />,
};

export function Sidebar({ sections, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden lg:flex w-72 flex-col glass-nav py-8 transition-all duration-300" data-crafted="jiackey">
      <div className="px-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-1.5 rounded-xl glass-panel flex-shrink-0 overflow-hidden relative shadow-lg shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
            <Image
              src="/images/dme-logo-full.webp"
              alt="DME Studio"
              width={40}
              height={40}
              className="rounded-lg opacity-95 relative z-10"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white mb-0.5">Google ads industrial research</h1>
            <p className="text-sm font-medium text-zinc-500">Marketing strategical report</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-4 relative">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={cn(
                "relative flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 group overflow-hidden",
                isActive
                  ? "text-accent text-glow"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              
              {/* Optional: Add a subtle hover gradient for inactive tabs */}
              {!isActive && (
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-colors duration-300" />
              )}

              <span className={cn("relative z-10 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")}>
                {iconMap[section.id]}
              </span>
              <span className="relative z-10">{section.title}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="px-6 pb-6 mt-8">
        <div className="p-5 rounded-xl glass-panel text-xs text-zinc-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 blur-xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/20 transition-colors duration-500" />
          <p className="font-semibold text-zinc-400 tracking-wider">CONFIDENTIAL</p>
          <p className="mt-1">Prepared strictly for consulting purposes. 2026.</p>
          {/* created by jiackey — handcrafted consulting deck */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
            <div className="p-1 rounded-md glass-panel flex-shrink-0">
              <Image
                src="/images/dme-logo.webp"
                alt="DME Studio"
                width={16}
                height={16}
                className="opacity-80"
              />
            </div>
            <span className="text-zinc-600 text-[10px]">DME Studio</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
