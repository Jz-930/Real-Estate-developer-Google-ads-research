import { cn } from "@/lib/utils";
import Image from "next/image";
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
    <aside className="fixed inset-y-0 left-0 z-40 hidden lg:flex w-72 flex-col bg-zinc-950 border-r border-white/5 py-8" data-crafted="jiackey">
      <div className="px-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <Image
            src="/images/dme-logo-full.webp"
            alt="DME Studio"
            width={44}
            height={44}
            className="rounded-lg opacity-90"
            priority
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white mb-0.5">Acquisition Audit</h1>
            <p className="text-sm font-medium text-zinc-500">Developer Strategy Deck</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5 px-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              activeId === section.id
                ? "bg-accent/10 text-accent"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            )}
          >
            {iconMap[section.id]}
            {section.title}
          </button>
        ))}
      </nav>
      
      <div className="px-6 pb-6">
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 text-xs text-zinc-500">
          <p>CONFIDENTIAL</p>
          <p className="mt-1">Prepared strictly for consulting purposes. 2026.</p>
          {/* created by jiackey — handcrafted consulting deck */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
            <Image
              src="/images/dme-logo.webp"
              alt="DME Studio"
              width={18}
              height={18}
              className="opacity-60"
            />
            <span className="text-zinc-600 text-[10px]">DME Studio</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
