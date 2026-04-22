import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading2, Paragraph, AccentText } from "@/components/ui/typography";
import { VisualAsset } from "@/components/ui/visual-asset";

export function CasesSection() {
  const cases = [
    {
      title: "Google 官方案例: Toll Brothers",
      image: "/images/10-toll-brothers-google-official.png",
      tag: "CPA 直接减半"
    },
    {
      title: "房产搜索平台: Zoopla",
      image: "/images/11-zoopla-campaign-results.png",
      tag: "AI 驱动的 Demand Gen 爆发"
    },
    {
      title: "澳洲精品开发商",
      image: "/images/12-boutique-builder-300x-roas.png",
      tag: "300x 惊人纯利润回报率 (ROAS)"
    }
  ];

  return (
    <Section id="cases">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <AccentText className="mb-4 block">成熟框架 (Proven Frameworks)</AccentText>
          <Heading2>标杆可复制的增长。</Heading2>
          <Paragraph className="mx-auto">
            数字获客不是靠盲目试错，而是基于数据模型推拉。我们所有的策略，均以这些经过市场检验的极高峰值案例为底层逻辑。
          </Paragraph>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={0.2 * i}>
            <div className="group">
              <VisualAsset src={c.image} alt={c.title} className="mb-6 rounded-xl border border-white/10" />
              <div className="px-2">
                <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-accent bg-accent/10 rounded-full">
                  {c.tag}
                </span>
                <h4 className="text-xl font-medium text-white">{c.title}</h4>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
