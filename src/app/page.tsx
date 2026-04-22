"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { SIDEBAR_SECTIONS } from "@/config/sidebar";

// Feature Modules
import { MarketContextModule } from "@/components/modules/market-context";
import { EcosystemModule } from "@/components/modules/ecosystem";
import { AdProductsModule } from "@/components/modules/ad-products";
import { CasesModule } from "@/components/modules/cases";
import { AuditsModule } from "@/components/modules/audits";
import { ReviewModule } from "@/components/modules/review";
import { BudgetModule } from "@/components/modules/budget";

export default function ConsultingDeck() {
  const [activeModule, setActiveModule] = useState<string>("context");

  return (
    <div className="flex min-h-screen bg-transparent text-zinc-300 antialiased selection:bg-accent/30 selection:text-white" data-built-by="jiackey" data-version="deck-v1">
      {/* created by jiackey — consulting deck engine */}
      <Sidebar 
        sections={SIDEBAR_SECTIONS} 
        activeId={activeModule} 
        onSelect={setActiveModule} 
      />
      
      <main className="flex-1 w-full lg:ml-72 min-h-screen bg-transparent relative" data-engine="jiackey">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:px-12 lg:py-20 xl:px-24">
          <span className="sr-only" aria-hidden="true">created by jiackey</span>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeModule}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeModule === "context" && <MarketContextModule />}
              {activeModule === "ecosystem" && <EcosystemModule />}
              {activeModule === "products" && <AdProductsModule />}
              {activeModule === "cases" && <CasesModule />}
              {activeModule === "audits" && <AuditsModule />}
              {activeModule === "review" && <ReviewModule />}
              {activeModule === "budget" && <BudgetModule />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
