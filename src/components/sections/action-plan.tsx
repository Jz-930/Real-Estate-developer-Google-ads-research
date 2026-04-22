import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading2, Paragraph, AccentText } from "@/components/ui/typography";
import { GlassCard } from "@/components/ui/glass-card";

export function ActionPlanSection() {
  const steps = [
    {
      phase: "Phase 1: 基础设施建设",
      timeline: "Days 0-30",
      title: "落地页重构与全链路追踪",
      desc: "评估现有数字资产。重塑高标准、信息完整的落地页系统。植入极度精确的转化追踪（电话打点、表单回传），确保从 Day 1 起每一分广告费都在数据监控下。",
      status: "active"
    },
    {
      phase: "Phase 2: 品牌声量覆盖",
      timeline: "Days 31-60",
      title: "区域渗透与认知唤醒",
      desc: "规模化上线 YouTube 视频插播与 Demand Gen 社交图文，精准圈定目标社区潜在买家。利用低成本展示提前占领心智。",
      status: "upcoming"
    },
    {
      phase: "Phase 3: 激进获客收割",
      timeline: "Days 61-90+",
      title: "高意向 Leads 获取",
      desc: "大盘推流 Google Search 与 Performance Max (AI 智能生成)。核心 KPI 转移至降低获客成本 (CPL)，为您的销售团队源源不断输送清洗过的精准线索。",
      status: "upcoming"
    }
  ];

  return (
    <Section id="action-plan">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <AccentText className="mb-4 block">执行路径 (The Road to Scaling)</AccentText>
          <Heading2>90 天破局时间轴。</Heading2>
          <Paragraph className="mx-auto">
            从无到有建立一套可持续的内循环数字获客机器。我们不承诺次日爆单，我们只搭建长期赢家的高效漏斗。
          </Paragraph>
        </FadeIn>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.phase} delay={0.2 * i} direction="up">
              <div className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent z-10" />
                
                <div className="w-full md:w-1/2" />
                
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <GlassCard className="hover:-translate-y-1 transition-transform duration-300 border-white/5 bg-zinc-900/40">
                    <div className="flex justify-between items-start mb-4">
                      <AccentText>{step.phase}</AccentText>
                      <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-1 rounded">{step.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                  </GlassCard>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      <FadeIn delay={0.8} className="mt-24 text-center">
        <GlassCard glow className="inline-block mx-auto border-accent/30 bg-accent/5 max-w-2xl">
          <h3 className="text-2xl font-semibold text-white mb-4">第一步：数字资产免费审查 (Audit)</h3>
          <p className="text-zinc-400 mb-8 mx-auto text-sm">
            让我们从一次免费无附带条件的现有网站审查开始，看看您现在每个月漏掉了多少潜在的看房客。
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-amber-400 transition-colors shadow-xl shadow-accent/20">
            预约深度技术研讨
          </button>
        </GlassCard>
      </FadeIn>
    </Section>
  );
}
