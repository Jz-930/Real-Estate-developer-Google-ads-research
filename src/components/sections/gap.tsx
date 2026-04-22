import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading2, Paragraph, AccentText } from "@/components/ui/typography";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowDown } from "lucide-react";

export function GapSection() {
  return (
    <Section id="gap" className="bg-zinc-950/50">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <FadeIn direction="left">
            <AccentText className="mb-4 block text-red-400">致命缺陷 (The Fatal Flaw)</AccentText>
            <Heading2 className="mb-6">
              流量不是目的，<br />信任才是转化。
            </Heading2>
            <Paragraph className="mb-6">
              房地产行业的痛点永远不是买不到流量，而在于昂贵的流量进入落地页 (Landing Page) 后，因为粗糙的体验和匮乏的信息而流失。
            </Paragraph>
            <Paragraph>
              典型误区：“留下电话了解更多”。在如今成熟的买方市场，高净值客户在留下个人信息之前，<span className="text-white font-medium">必须先看到详尽的 ROI 计算、户型图与开发商背书。</span>“没有供给，就没有回报”。
            </Paragraph>
          </FadeIn>
        </div>

        <div className="lg:col-span-3">
          <FadeIn direction="right" delay={0.2}>
            <GlassCard className="border-red-500/20">
              <div className="flex flex-col items-center">
                {/* Visual Funnel */}
                <div className="w-full max-w-sm space-y-2 mb-8 mt-4">
                  <div className="bg-blue-500/20 border border-blue-500/30 text-blue-200 py-3 rounded-lg text-center font-medium">
                    Google Ads 高意向流量输入
                  </div>
                  <div className="flex justify-center text-zinc-600"><ArrowDown className="w-5 h-5" /></div>
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 py-4 w-3/4 mx-auto rounded-lg text-center relative">
                    <span className="font-semibold block mb-1">现有的老式楼盘网站</span>
                    <span className="text-xs opacity-70">体验差 / 缺失核心信息 / 逼迫留资</span>
                    {/* The leak */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-red-500 whitespace-nowrap text-sm font-medium animate-pulse">
                      ← 95% 流量白白流失
                    </div>
                  </div>
                  <div className="flex justify-center text-zinc-600"><ArrowDown className="w-5 h-5" /></div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 py-3 w-1/2 mx-auto rounded-lg text-center text-sm font-semibold">
                    极少数线索 (Leads)
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-3">破局方案：定制高转化落地页</h3>
                  <p className="text-zinc-400 max-w-md mx-auto text-sm leading-relaxed">
                    我们不止代投广告。我们为您重新构建沉浸式的专属 Landing Page。让点击直接转化为信任，大幅度拉升您的真实询盘率。
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
