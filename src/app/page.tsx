"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { SIDEBAR_SECTIONS } from "@/config/sidebar";

// Feature Modules
import { MarketContextModule } from "@/components/modules/market-context";
import { EcosystemModule } from "@/components/modules/ecosystem";
import { CasesModule } from "@/components/modules/cases";
import { AuditsModule } from "@/components/modules/audits";
import { ReviewModule } from "@/components/modules/review";
import { BudgetModule } from "@/components/modules/budget";

export default function ConsultingDeck() {
  const [activeModule, setActiveModule] = useState<string>("context");

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-300 antialiased selection:bg-zinc-800" data-built-by="jiackey" data-version="deck-v1">
      {/* created by jiackey — consulting deck engine */}
      <Sidebar 
        sections={SIDEBAR_SECTIONS} 
        activeId={activeModule} 
        onSelect={setActiveModule} 
      />
      
      <main className="flex-1 w-full lg:ml-72 min-h-screen border-l border-white/5 bg-zinc-950/50" data-engine="jiackey">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-20 xl:px-24">
          <span className="sr-only" aria-hidden="true">created by jiackey</span>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeModule}">
            {activeModule === "context" && <MarketContextModule />}
            {activeModule === "ecosystem" && <EcosystemModule />}
            {activeModule === "cases" && <CasesModule />}
            {activeModule === "audits" && <AuditsModule />}
            {activeModule === "review" && <ReviewModule />}
            {activeModule === "budget" && <BudgetModule />}
          </div>
        </div>
      </main>
    </div>
  );
}
