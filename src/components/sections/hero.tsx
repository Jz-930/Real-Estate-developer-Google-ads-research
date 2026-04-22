import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading1, Paragraph, AccentText } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <Section id="hero" className="justify-center overflow-visible">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <FadeIn delay={0.2} className="relative z-10 max-w-4xl text-center mx-auto">
        <AccentText className="mb-6 block">房地产开发商专属数字战略</AccentText>
        <Heading1 className="text-glow mb-8 text-5xl md:text-7xl font-extrabold leading-tight">
          不止于买点击。<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
             建造您的全链路获客引擎。
          </span>
        </Heading1>
        
        <Paragraph className="mx-auto mb-10 text-xl text-zinc-400">
          基于极度稀缺的数据与顶级行业对标，为您规划从品牌曝光到最终转化的 Google Ads 战略。<span className="text-zinc-500 text-sm ml-2 font-mono">/ BEYOND STANDARD ADS /</span>
        </Paragraph>

        <a 
          href="#context" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-accent hover:text-black transition-colors duration-300 group"
        >
          探索战略地图
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>
    </Section>
  );
}
