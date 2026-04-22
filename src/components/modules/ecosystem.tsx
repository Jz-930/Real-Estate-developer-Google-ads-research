/* jiackey:module:ecosystem:strategy */
import { DocH1, DocH2, DocH3, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import { VisualAsset } from "@/components/ui/visual-asset";
import Image from "next/image";

export function EcosystemModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>三步走战略：不要想一口吃成胖子</DocH1>

        <DocP>
          Google Ads 不是一锤子买卖。很多人的误区是"花钱 → 马上来客户 → 马上成交"。现实不是这样的。<strong className="text-white">正确的做法是分三步走，循序渐进。</strong>
        </DocP>

        {/* 三步走 */}
        <div className="my-10">
          <Image
            src="/images/illustration-funnel-3-steps.png"
            alt="三步走战略: 品牌认知 → 收集线索 → 销售跟进"
            width={900}
            height={400}
            className="rounded-xl border border-white/5 w-full"
          />
        </div>

        {/* Step 1 */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold text-lg">1</span>
            <h3 className="text-xl font-bold text-white">Brand Awareness（品牌认知）</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            客户是新品牌，先别着急卖东西。<strong className="text-white">第一步的目标，就是让潜在买家知道"有这么个楼盘"。</strong>
          </p>
          <p className="text-zinc-400 leading-relaxed mt-3">
            这一阶段可以用 YouTube 视频广告（航拍、样板间）和 Google Display 展示广告做大范围曝光。不追求大家马上打电话，追求的是"被看见、被记住"。
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-bold text-lg">2</span>
            <h3 className="text-xl font-bold text-white">Lead Generation（收集潜在客户）</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            有了品牌认知之后，开始收集线索。<strong className="text-white">线索 = 留了电话、填了表单、表示有兴趣的人。</strong>
          </p>
          <p className="text-zinc-400 leading-relaxed mt-3">
            主要渠道：Google 搜索广告（有人搜"Vaughan new condo"时你出现）+ 网站上的 Landing Page + Lead Form。Google Ads 和 Meta（Facebook/Instagram）都有内置的 Lead Form 功能可以用。
          </p>
          <p className="text-zinc-400 leading-relaxed mt-3">
            收集到的数据要用 CRM 系统来管理，不能丢在 Excel 里就算了。
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-lg">3</span>
            <h3 className="text-xl font-bold text-white">Sales Follow-up（销售跟进）</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            线索收上来之后，<strong className="text-white">必须有人及时跟进。</strong>从线上 Lead → 合格 Lead → 最终成交，中间每一步都有流失。
          </p>
          <p className="text-zinc-400 leading-relaxed mt-3">
            经验值：大约 49% 的线上表单提交是无效的或联系不上的；剩下的合格线索里，又有约 49% 最终不成交。<strong className="text-white">10 个表单 → 大约 2.5 个最终成交</strong>（一般行业基准）。房地产行业因为客单价高、决策更谨慎，实际转化率可能略好一些。
          </p>
        </div>

        <DocH2>Google Ads 到底有哪些广告形式？</DocH2>
        <DocP>
          Google 不只是"搜一下出来个广告"那么简单。它有好几种不同的广告产品，各有各的用处：
        </DocP>

        <div className="bg-zinc-900 overflow-hidden border border-white/5 rounded-xl mb-8">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-800/50 text-zinc-400">
              <tr>
                <th className="px-5 py-4 font-medium">广告类型</th>
                <th className="px-5 py-4 font-medium">出现在哪里</th>
                <th className="px-5 py-4 font-medium">适合干什么</th>
                <th className="px-5 py-4 font-medium">怎么收费</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-5 py-3 font-medium text-white">Search Ads<br/><span className="text-zinc-500 text-xs">搜索广告</span></td>
                <td className="px-5 py-3">Google 搜索结果页</td>
                <td className="px-5 py-3">抓住正在搜"买房"的人</td>
                <td className="px-5 py-3">按点击收费</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-white">YouTube Ads<br/><span className="text-zinc-500 text-xs">视频广告</span></td>
                <td className="px-5 py-3">YouTube 视频播放前/中</td>
                <td className="px-5 py-3">用视频展示楼盘氛围、户型</td>
                <td className="px-5 py-3">按观看收费，5秒跳过=免费</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-white">Display / GDN<br/><span className="text-zinc-500 text-xs">展示广告网络</span></td>
                <td className="px-5 py-3">新闻网站、App 等 200万+ 网站</td>
                <td className="px-5 py-3">再营销：访问过网站的人反复看到你</td>
                <td className="px-5 py-3">极低（$0.50-$3 / 千次展示）</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-white">Performance Max<br/><span className="text-zinc-500 text-xs">效果最大化</span></td>
                <td className="px-5 py-3">以上所有渠道，AI 自动分配</td>
                <td className="px-5 py-3">预算够的时候全渠道铺开</td>
                <td className="px-5 py-3">按转化目标自动优化</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DocAlert title="一句话总结" type="info">
          <p>Search Ads 抓住<strong>已经想买</strong>的人；YouTube 和 Display 让<strong>还没想好</strong>的人记住你。组合使用效果最好，但前提是你的落地页得接得住流量。</p>
        </DocAlert>

      </FadeIn>
    </div>
  );
}
