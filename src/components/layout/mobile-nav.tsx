import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Layers, 
  LayoutDashboard,
  Target, 
  SearchCode, 
  Globe,
  Wallet 
} from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface MobileNavProps {
  sections: Section[];
  activeId: string;
  onSelect: (id: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  "context": <BarChart3 className="w-5 h-5" />,
  "ecosystem": <Layers className="w-5 h-5" />,
  "products": <LayoutDashboard className="w-5 h-5" />,
  "cases": <Target className="w-5 h-5" />,
  "audits": <SearchCode className="w-5 h-5" />,
  "review": <Globe className="w-5 h-5" />,
  "budget": <Wallet className="w-5 h-5" />,
};

export function MobileNav({ sections, activeId, onSelect }: MobileNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#030304]/85 backdrop-blur-2xl border-t border-white/10 pb-4 pt-2 px-2" data-crafted="jiackey">
      <div className="flex overflow-x-auto hide-scrollbar gap-1 justify-start md:justify-center">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={cn(
                "relative flex-none flex items-center justify-center p-3 rounded-xl transition-all duration-300",
                isActive ? "text-accent" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobilenav-active"
                  className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={cn("relative z-10 flex flex-col items-center gap-1.5 transition-transform duration-300", isActive ? "scale-105" : "")}>
                {iconMap[section.id]}
                <span className="text-[10px] whitespace-nowrap font-medium">{section.title.split('：')[0]}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
