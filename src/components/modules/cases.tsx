/** @landing-page-module — created by jiackey */
import { DocH1, DocH2, DocH3, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import { VisualAsset } from "@/components/ui/visual-asset";
import Image from "next/image";

export function CasesModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>落地页（Landing Page）：整个投放的生死线</DocH1>

        <DocP>
          <strong className="text-white text-lg">这是整个 Google Ads 投放中最关键的环节。</strong>广告只是把人带到门口，Landing Page 决定了他进不进来、留不留下。落地页质量直接决定了广告费是在产生价值，还是在打水漂。
        </DocP>

        <DocH2>核心原则：先给足信息，再要求行动</DocH2>

        <DocP>
          绝大多数开发商犯的最大错误就是：网站上什么信息都没有，上来就是"联系我们获取更多信息"。<strong className="text-white">没有人会理你。</strong>
        </DocP>

        <DocP>
          用户的真实心理是：<em className="text-zinc-200">"你什么信息都不给我，就让我留电话？你当我傻吗？"</em>
        </DocP>

        {/* Comparison Illustration */}
        <div className="my-10">
          <Image
            src="/images/illustration-landing-page-comparison.png"
            alt="错误做法 vs 正确做法对比"
            width={900}
            height={400}
            className="rounded-xl border border-white/5 w-full"
          />
        </div>

        {/* Wrong vs Right - detailed */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-red-400 mb-4">❌ 错误做法（大量客户的通病）</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <p>广告点进来 → 网站上什么也没有 → 就写着"联系我们获取更多信息" → <strong className="text-zinc-200">用户直接关掉</strong></p>
              <p>用户感受：<em>"你花钱让我点进来，就是为了骗我电话？"</em></p>
              <p>结果：<strong className="text-red-300">跳出率极高，转化几乎为零，广告费白花。</strong></p>
              <p className="pt-2 border-t border-red-500/10 text-zinc-500 italic">
                "你做个落地页让人打电话，你不如不做，你不如把电话直接放广告里得了" —— 行业专家原话
              </p>
            </div>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-4">✅ 正确做法</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <p>广告点进来 → 落地页信息丰富、有价值 → 用户产生兴趣 → <strong className="text-zinc-200">用户主动留下联系方式</strong></p>
              <p>户型、价格区间、交房时间、地段分析、配套设施…… 都给出来。</p>
              <p>用户看完之后如果感兴趣，他会<strong className="text-emerald-300">主动</strong>想了解更多。</p>
              <p className="pt-2 border-t border-emerald-500/10 text-zinc-300">
                这样来的 Lead 质量远高于"骗"来的 —— 因为对方已经充分了解了你的项目，是真感兴趣。
              </p>
            </div>
          </div>
        </div>

        <DocH2>落地页到底应该放什么内容？</DocH2>

        <DocP>以下每一项都很重要，缺一不可：</DocP>

        {/* Content Checklist */}
        <div className="space-y-4 mb-10">
          <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
            <h4 className="text-white font-semibold mb-3">📋 基础信息（必须有）</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-zinc-400">
              <li className="flex gap-2"><span className="text-accent">•</span> 项目概述：楼盘名称、位置、类型</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 户型信息：面积、房间数、平面图</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 交房时间线：预售 → 动工 → 交房</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 价格区间：至少给个范围</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 地段配套：学区、交通、商圈、公园</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
            <h4 className="text-white font-semibold mb-3">📊 投资价值分析（关键差异化内容）</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-zinc-400">
              <li className="flex gap-2"><span className="text-accent">•</span> 投资回报率：帮用户算"买了能赚多少"</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 投资者视角：租金回报率、区域增值预期</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 自住者视角：生活便利性、通勤时间</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 区域市场分析：过去房价走势、未来规划</li>
            </ul>
            <p className="text-xs text-zinc-500 mt-3">这些内容让用户觉得你是专业的、在帮他做决策，而不是在推销。</p>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
            <h4 className="text-white font-semibold mb-3">🏗️ 信任与品牌背书</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-zinc-400">
              <li className="flex gap-2"><span className="text-accent">•</span> 开发商介绍：过往项目、资质</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 施工质量展示：建材、设计团队</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 业主评价或案例（如果有）</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 媒体报道、获奖记录</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
            <h4 className="text-white font-semibold mb-3">📸 视觉呈现</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex gap-2"><span className="text-accent">•</span> 高质量效果图和实景图 —— 房地产的核心卖点，<strong className="text-zinc-200">图一定要好看</strong></li>
              <li className="flex gap-2"><span className="text-accent">•</span> 视频 Walkthrough：虚拟看房、项目介绍视频</li>
              <li className="flex gap-2"><span className="text-accent">•</span> 互动元素：比如可以切换户型查看的互动户型图</li>
            </ul>
            <p className="text-xs text-zinc-500 mt-3">视觉质量直接影响用户对项目品质的判断 —— 图做得烂 = 用户觉得房子也烂。</p>
          </div>
        </div>

        <DocH2>"给更多才能要更多" —— 信任链条</DocH2>

        <DocP>
          落地页的本质不是"要信息"，而是<strong className="text-white">"给信息"</strong>。你给得越多，用户回馈的意愿越强。
        </DocP>

        <DocP>
          面上已经给了大量信息之后，要留一些"更深层"的内容作为留资的理由：
        </DocP>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { hook: "下载完整户型手册（含未公开户型）", ask: "需要填邮箱" },
            { hook: "获取专属投资回报分析报告", ask: "需要填联系方式" },
            { hook: "预约一对一购房顾问咨询", ask: "需要填电话" },
            { hook: "了解限时早鸟优惠方案", ask: "需要留资" },
          ].map(item => (
            <div key={item.hook} className="bg-zinc-900 border border-white/5 p-4 rounded-lg">
              <p className="text-white text-sm font-medium mb-1">{item.hook}</p>
              <p className="text-zinc-500 text-xs">{item.ask}</p>
            </div>
          ))}
        </div>

        <DocAlert title="核心逻辑" type="info">
          <p>你已经给了 90% 的信息，用户是为了那额外的 10%（而且是更有价值的 10%）才留资的。这和"什么都不给就要信息"是<strong>本质区别</strong>。</p>
        </DocAlert>

        <DocH2>落地页 ≠ 首页</DocH2>

        <DocP>
          很多人的另一个错误：把广告直接导到网站首页。<strong className="text-white">首页不是落地页。</strong>
        </DocP>

        <ul className="space-y-3 text-sm text-zinc-400 mb-10">
          <li className="flex gap-2"><span className="text-accent">•</span> 广告应该指向<strong className="text-zinc-200">专门为这个广告设计的页面</strong></li>
          <li className="flex gap-2"><span className="text-accent">•</span> 页面内容要和广告文案高度一致 —— 广告承诺了什么，落地页就要兑现什么</li>
          <li className="flex gap-2"><span className="text-accent">•</span> 目标单一明确 —— 不要让用户在 N 个按钮间做选择</li>
          <li className="flex gap-2"><span className="text-accent">•</span> 不同的广告系列（投资者 vs 自住者 vs 首次购房者）应该有<strong className="text-zinc-200">不同的落地页</strong></li>
        </ul>

        <DocH2>内容深度 vs Lead 质量：一个直接的因果关系</DocH2>

        <div className="bg-zinc-900 overflow-hidden border border-white/5 rounded-xl mb-8">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-800/50 text-zinc-400">
              <tr>
                <th className="px-5 py-4 font-medium">落地页内容深度</th>
                <th className="px-5 py-4 font-medium">Lead 数量</th>
                <th className="px-5 py-4 font-medium">Lead 质量</th>
                <th className="px-5 py-4 font-medium">成交概率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-5 py-3 text-red-300">几乎没有内容</td>
                <td className="px-5 py-3">极少</td>
                <td className="px-5 py-3">极差</td>
                <td className="px-5 py-3">接近 0</td>
              </tr>
              <tr>
                <td className="px-5 py-3 text-amber-300">有一些基本信息</td>
                <td className="px-5 py-3">中等</td>
                <td className="px-5 py-3">一般</td>
                <td className="px-5 py-3">低</td>
              </tr>
              <tr>
                <td className="px-5 py-3 text-emerald-300">信息丰富且有吸引力</td>
                <td className="px-5 py-3">多</td>
                <td className="px-5 py-3">高</td>
                <td className="px-5 py-3">高</td>
              </tr>
              <tr className="bg-emerald-500/5">
                <td className="px-5 py-3 text-emerald-300 font-bold">极度详细 + 专业分析</td>
                <td className="px-5 py-3 font-bold text-white">很多</td>
                <td className="px-5 py-3 font-bold text-white">极高</td>
                <td className="px-5 py-3 font-bold text-white">很高</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DocAlert title="网站本身就是品牌背书" type="warning">
          <p>网站的品质 = 用户对你品牌的第一印象。一个粗糙的网站会让用户产生怀疑 —— "连网站都做不好，房子能建好吗？"</p>
          <p className="mt-2">对于房地产这种高客单价行业，网站的品质感尤其重要 —— 因为用户的每一笔投入都是巨大的，他们会从一切细节来判断你是否靠谱。</p>
        </DocAlert>

      </FadeIn>
    </div>
  );
}
