import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading2, Paragraph, AccentText } from "@/components/ui/typography";
import { VisualAsset } from "@/components/ui/visual-asset";

export function ProductsSection() {
  const products = [
    {
      title: "Google Search Ads (搜索广告)",
      image: "/images/24-gta-builder-search-maps.png",
      desc: "精准收割极高意向度的高净值买家。当购房者主动搜索“Markham 新楼盘”时，确保您的项目位列第一。",
      colSpan: "md:col-span-12",
    },
    {
      title: "YouTube Ads (视频广告)",
      image: "/images/29-youtube-skippable-ad-examples.png",
      desc: "相比传统电视发行的极低 CPM（千次曝光成本）。用视频重塑房产项目的影院级吸引力。",
      colSpan: "md:col-span-6",
    },
    {
      title: "Demand Gen (AI 需启发模式)",
      image: "/images/26-demand-gen-5-placements.png",
      desc: "用精美的渲染画面在 Gmail, YouTube Shorts 和 Discover 信息流中穿插，唤醒潜在购房需求。",
      colSpan: "md:col-span-6",
    },
    {
      title: "Performance Max (全效果最大化)",
      image: "/images/14-performance-max-real-estate-stats.png",
      desc: "输入所有楼盘素材，由 Google AI 接管并在全网所有版位寻找最优低价线索 (Leads)。",
      colSpan: "md:col-span-6",
    },
    {
      title: "Local Services (LSA 本地服务专家)",
      image: "/images/25-lsa-real-estate-examples.png",
      desc: "自带“Google Screened”信用背书，按来电付费 (Pay per lead) 的神兵利器。",
      colSpan: "md:col-span-6",
    }
  ];

  return (
    <Section id="products" className="bg-zinc-950/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <AccentText className="mb-4 block">武器库 (The Arsenal)</AccentText>
          <Heading2>全场景・全漏斗覆盖。</Heading2>
          <Paragraph className="mx-auto">
            从 YouTube 上的“品牌种草”到搜索页面的“精准收割”。我们将部署针对期房 (Pre-construction) 决策周期的多触点战役矩阵。
          </Paragraph>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {products.map((p, i) => (
          <FadeIn key={p.title} delay={0.1 * i} className={p.colSpan}>
            <div className="flex flex-col h-full bg-zinc-900/40 p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors">
              <div className="mb-6 flex-1">
                <VisualAsset src={p.image} alt={p.title} className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
