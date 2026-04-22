// Module: market-context | crafted by jiackey
import { DocH1, DocH2, DocH3, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import { VisualAsset } from "@/components/ui/visual-asset";

export function MarketContextModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>房地产 Google Ads：先认清现实</DocH1>

        <DocP>
          在聊任何策略之前，有几件事必须先讲清楚。<strong className="text-white">房地产是 Google Ads 里最贵的行业之一</strong>，跟金融（信用卡、贷款）并列第一梯队。这不是技术能改变的，是行业本身决定的 —— 因为卖的东西利润高，所有竞争者都在砸钱。
        </DocP>

        <DocH2>广告费到底有多贵？</DocH2>

        <DocP>
          很多客户的第一反应是："Google Ads 不就是几毛钱一个点击吗？" <strong className="text-white">这是完全错误的预期。</strong>在房地产行业：
        </DocP>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-white mb-2">$2 - $10+</p>
            <p className="text-sm text-zinc-400">每次点击成本 (CPC)</p>
            <p className="text-xs text-zinc-600 mt-1">有人点一下你的广告，就扣这么多</p>
          </div>
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-white mb-2">$40 - $120</p>
            <p className="text-sm text-zinc-400">每条线索成本 (CPL)</p>
            <p className="text-xs text-zinc-600 mt-1">获得一个留了电话/填了表的人</p>
          </div>
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-amber-400 mb-2">高竞争</p>
            <p className="text-sm text-zinc-400">行业竞争等级</p>
            <p className="text-xs text-zinc-600 mt-1">40-50 个竞争对手同时竞价</p>
          </div>
        </div>

        <VisualAsset
          src="/images/01-real-estate-benchmarks.png"
          alt="Real Estate Google Ads Benchmarks 2026"
          caption="PPC Chief 2026年行业基准: 房地产平均 CPC $2.53, CPL $100.48"
        />

        <DocAlert title="为什么贵？一句话" type="info">
          <p>当一个行业非常赚钱的时候，它的广告就一定很贵。房子一套几十万、上百万，所有开发商都在抢同一批买家 —— 所以每个点击都贵。这是规律，不是问题。</p>
        </DocAlert>

        <DocH2>贵不代表不值得做</DocH2>

        <DocP>
          虽然单次点击贵，但房地产的特殊之处在于：<strong className="text-white">一套房子的利润可能是 $100K-$200K</strong>。哪怕你花了 $5,000 的广告费，只要成交了一套，回报率就是几十倍。所以核心问题不是"做不做"，而是"怎么做得聪明"。
        </DocP>

        <DocP>
          目前 GTA 的市场环境更加剧了这个需求：2026 Q1 新盘成交量同比暴跌 52%，库存量创历史新高，等着买家上门已经不够了。<strong className="text-white">主动出击找买家，是当前环境下的必选项。</strong>
        </DocP>

        <DocH2>但是 —— 做得不对，钱就真的白花了</DocH2>

        <DocP>
          这就引出了整个咨询的核心话题：Google Ads 本身不难开，难的是<strong className="text-white">你的广告把人带来之后，你的网站能不能接住</strong>。绝大多数开发商的广告费之所以打水漂，不是广告本身的问题，而是落地页做得太差。
        </DocP>

        <DocP>
          接下来，我们先讲怎么分步推进，然后重点讲落地页为什么是生死线。
        </DocP>

      </FadeIn>
    </div>
  );
}
