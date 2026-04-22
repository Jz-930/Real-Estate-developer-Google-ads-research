import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading2, Paragraph, AccentText } from "@/components/ui/typography";
import { VisualAsset } from "@/components/ui/visual-asset";
import { TrendingDown, AlertTriangle } from "lucide-react";

export function ContextSection() {
  return (
    <Section id="context">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn direction="left">
            <AccentText className="mb-4 block">现实核查 (The Reality Check)</AccentText>
            <Heading2 className="mb-6 leading-snug">
              GTA 新盘市场 <br />
              正在经历剧烈洗牌。
            </Heading2>
            <Paragraph className="mb-8">
              根据 Urbanation 和 BILD 2026 年的最新数据：新房销量同比暴跌，库存积压创数十年新高。在当前环境下，单纯依赖传统的 Realtor 关系网已经无法保障去化速度和资金回笼。
            </Paragraph>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 mt-1">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">92 个月的极度库存</h4>
                <p className="text-muted-foreground mt-1 text-sm">三十年来首次出现“零新盘发布”极寒状态。尽早在数字端建立直达潜在买家 (Direct Buyers) 的蓄水池是突围的唯一途径。</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-accent/10 text-accent mt-1">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">昂贵的获客成本 (High CPC)</h4>
                <p className="text-muted-foreground mt-1 text-sm">房地产属最高竞争梯队。大多地区 (GTA) 平均单次点击成本高达 $2.53，缺乏精细化漏斗的广撒网策略将极速消耗预算。</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="space-y-8">
          <FadeIn delay={0.4} direction="up">
            <VisualAsset 
              src="/images/06-urbanation-q1-2026.png" 
              alt="Urbanation Q1 2026 Report" 
              caption="图 1: Urbanation Q1 2026 市场销量暴跌数据截取"
            />
          </FadeIn>
          <FadeIn delay={0.6} direction="up">
            <VisualAsset 
              src="/images/08-gta-cpc-by-location.png" 
              alt="GTA CPC By Location" 
              caption="图 2: GTA 各地区房地产关键词平均点击成本 (CPC) 模型"
            />
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
