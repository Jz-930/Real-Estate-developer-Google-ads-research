// jiackey:module:audits:case-studies
import { DocH1, DocH2, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import { VisualAsset } from "@/components/ui/visual-asset";

export function AuditsModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>行业案例参考：别人做到了什么</DocH1>

        <DocP>
          光讲理论没有说服力。以下是几个真实的案例，来自 Google 官方发布、GTA 本地机构、以及海外行业数据。目的不是让你觉得"我们也能做到"，而是<strong className="text-white">帮你建立一个合理的预期区间</strong>。
        </DocP>

        <DocAlert title="怎么看这些数字" type="info">
          <p>以下是行业顶级水平 (Peak Cases)。实际操作中，以这些案例的 20%~40% 作为初期目标是比较务实的。</p>
        </DocAlert>

        {/* Case 1: Toll Brothers */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl mt-10 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Toll Brothers</h3>
              <p className="text-zinc-500 text-sm">Google 官方认证的 Luxury Home Builder 案例</p>
            </div>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full font-medium">Google 官方案例</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            美国最大的豪宅建商，$900K+ 均价，19 个州运营。他们把 36% 的数字营销预算投在 Google Display 上，配合 In-Market 定向 + Remarketing 再营销。
          </p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">-50%</p>
              <p className="text-xs text-zinc-500">广告获客成本下降</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">3x</p>
              <p className="text-xs text-zinc-500">点击率提升</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">36%</p>
              <p className="text-xs text-zinc-500">预算投在 Google</p>
            </div>
          </div>

          <VisualAsset
            src="/images/10-toll-brothers-google-official.png"
            alt="Toll Brothers Google Official Case Study"
            caption="原始资料: thinkwithgoogle.com 官方 Case Study PDF"
          />

          <p className="text-zinc-500 text-xs mt-3 italic">
            启示：连 Google 自己都拿他们做示范案例。In-Market 定向（找正在研究买房的人）+ Remarketing（看过网站的人反复跟进）这套组合拳，在 Luxury 房产领域已经被证实有效。
          </p>
        </div>

        {/* Case 2: Mattamy */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Mattamy Homes × NAV43</h3>
              <p className="text-zinc-500 text-sm">GTA 本地 Pre-Construction Condo 案例</p>
            </div>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full font-medium">GTA 本地</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            北美最大的私营 homebuilder，在 2024 年（利率最高、新盘最难卖的时候）跑了 3 个 GTA pre-construction condo 社区。8 个月的数据：
          </p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">12,801</p>
              <p className="text-xs text-zinc-500">总线索数</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-emerald-400">$7.81</p>
              <p className="text-xs text-zinc-500">Google 平均每条 Lead 成本</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">8x</p>
              <p className="text-xs text-zinc-500">同预算 Lead 数提升</p>
            </div>
          </div>

          <VisualAsset
            src="/images/04-mattamy-nav43-results.png"
            alt="Mattamy NAV43 Campaign Results"
            caption="来源: NAV43 Case Study - Mattamy Homes"
          />

          <p className="text-zinc-500 text-xs mt-3 italic">
            启示：$7.81/条 Lead，这说明在 GTA 做对了方法是可以把成本压得非常低的。关键在于精准的地理围栏（20英里半径）和 Performance Max 的 AI 优化。
          </p>
        </div>

        {/* Case 3: Lennar */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Lennar</h3>
              <p className="text-zinc-500 text-sm">用广告加速整盘售罄</p>
            </div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            这个案例最值得开发商仔细看 —— 重点不是省了多少广告费，而是<strong className="text-white">提前 4 个月把项目卖完了</strong>。
          </p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">95</p>
              <p className="text-xs text-zinc-500">条高质量线索</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">40 套</p>
              <p className="text-xs text-zinc-500">8 个月售罄 (原计划12个月)</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-amber-400">4 个月</p>
              <p className="text-xs text-zinc-500">提前完成去化</p>
            </div>
          </div>

          <p className="text-zinc-500 text-xs italic">
            启示：提前 4 个月售罄意味着什么？interim financing 少付 4 个月利息（一个 $30M 的项目，每月利息 $100K-$200K），资金可以提前释放给下一个项目。这笔账远比广告费本身大得多。
          </p>
        </div>

        {/* Case 4: Boutique Builder */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">澳洲 Boutique Builder</h3>
              <p className="text-zinc-500 text-sm">5年长线复合增长</p>
            </div>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full font-medium">极端 Peak 案例</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-white">$14K 投入</p>
              <p className="text-xs text-zinc-500">5年Google Ads总花费</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-emerald-400">$4.3M 产出</p>
              <p className="text-xs text-zinc-500">广告直接带来的项目成交</p>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
              <p className="text-lg font-bold text-amber-400">300x</p>
              <p className="text-xs text-zinc-500">投入回报倍数 (ROAS)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <VisualAsset
              src="/images/12-boutique-builder-300x-roas.png"
              alt="Boutique Builder Google Ads Dashboard"
              caption="真实 Google Ads 后台截图"
            />
            <VisualAsset
              src="/images/13-boutique-builder-growth-chart.png"
              alt="Boutique Builder Growth"
              caption="5年营收从 $4.5M 增长至 $40M"
            />
          </div>

          <DocAlert title="⚠️ 预期管理" type="warning">
            <p>300 倍回报是这个行业的绝对极端值，多数 builder 做不到。但它说明了一个底层逻辑：房地产客单价极高，哪怕转化率很低，一单的利润就能覆盖大量广告费。Google Ads 是点火，<strong>SEO 和内容积累才是长期资产</strong>。</p>
          </DocAlert>
        </div>

      </FadeIn>
    </div>
  );
}
