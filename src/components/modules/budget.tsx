/** Budget & execution module — developed by jiackey */
import { DocH1, DocH2, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export function BudgetModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>预算、转化漏斗与落地执行</DocH1>

        <DocH2>转化漏斗：广告 → 线索 → 成交，每一步都有损耗</DocH2>

        <DocP>
          很多客户的预期是"花了钱就应该有人买房"。现实是：从有人看到广告，到最终成交，中间要经过好几层筛选，每一层都有流失。
        </DocP>

        <div className="my-8">
          <Image
            src="/images/illustration-conversion-funnel.png"
            alt="转化漏斗示意"
            width={900}
            height={400}
            className="rounded-xl border border-white/5 w-full"
          />
        </div>

        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl mb-8">
          <h4 className="text-white font-semibold mb-4">实际数字参考</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 text-right">
                <span className="text-2xl font-bold text-white">10</span>
              </div>
              <div className="flex-1 bg-blue-500/20 rounded-lg px-4 py-2">
                <p className="text-sm text-zinc-300">个人在网上填了表单 / 打了电话</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-4">
              <p className="text-xs text-zinc-600 w-16 text-right">~49% 流失</p>
              <p className="text-xs text-zinc-600">（无效提交、不回复、号码错误等）</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right">
                <span className="text-2xl font-bold text-white">~5</span>
              </div>
              <div className="flex-1 bg-teal-500/20 rounded-lg px-4 py-2">
                <p className="text-sm text-zinc-300">个合格线索（真的有兴趣、能联系上）</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-4">
              <p className="text-xs text-zinc-600 w-16 text-right">~49% 流失</p>
              <p className="text-xs text-zinc-600">（看了但不买、预算不够、时机不对等）</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right">
                <span className="text-2xl font-bold text-emerald-400">~2.5</span>
              </div>
              <div className="flex-1 bg-emerald-500/20 rounded-lg px-4 py-2">
                <p className="text-sm text-zinc-300">个最终成交</p>
              </div>
            </div>
          </div>

          <p className="text-zinc-500 text-xs mt-4">
            转化率高于 30% → 非常好；高于 50% → 说明你的线索质量极高。如果很低，就说明落地页或跟进流程有问题。
          </p>
        </div>

        <DocH2>转化追踪：不追踪 = 瞎投</DocH2>

        <DocP>
          有两种主要的线索形式需要追踪：
        </DocP>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
            <h4 className="text-white font-semibold mb-2">📞 电话</h4>
            <p className="text-zinc-400 text-sm">加拿大客户更倾向于打电话。需要在广告里设置电话追踪 (Tracking Code)，知道是哪个广告带来的电话。</p>
          </div>
          <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
            <h4 className="text-white font-semibold mb-2">📝 表单</h4>
            <p className="text-zinc-400 text-sm">网站上的表单提交也要打追踪标签 (Event Tag)，能看到有多少人完成了提交。简洁就好，3-5 个字段足够。</p>
          </div>
        </div>

        <DocH2>预算怎么定？</DocH2>

        <DocP>
          预算取决于你的目标和市场竞争程度。以下是两个参考模型：
        </DocP>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-1">模型 A：小规模试水</h4>
            <p className="text-zinc-500 text-xs mb-4">适合：单一楼盘、想先试试效果</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between"><span>广告费 (Google + Meta)</span> <span className="font-semibold text-white">$1,000 - $1,500/月</span></li>
              <li className="flex justify-between"><span>专业管理服务费</span> <span className="font-semibold text-white">$500 - $1,000/月</span></li>
              <li className="flex justify-between border-t border-white/5 pt-2"><span>月总投入</span> <span className="font-semibold text-white">~$1,500 - $2,500</span></li>
              <li className="flex justify-between border-t border-white/5 pt-2 text-emerald-400"><span>预期线索</span> <span>约 15-60 条/月</span></li>
            </ul>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
            <h4 className="text-lg font-bold text-accent mb-1">模型 B：正式发力</h4>
            <p className="text-zinc-500 text-xs mb-4">适合：多盘并行、赶去化进度</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between"><span>广告费 (多渠道铺开)</span> <span className="font-semibold text-white">$4,000 - $7,000/月</span></li>
              <li className="flex justify-between"><span>全案管理服务费</span> <span className="font-semibold text-white">$1,000 - $2,000/月</span></li>
              <li className="flex justify-between border-t border-white/5 pt-2"><span>月总投入</span> <span className="font-semibold text-white">~$5,000 - $9,000</span></li>
              <li className="flex justify-between border-t border-white/5 pt-2 text-emerald-400"><span>预期线索</span> <span>约 150-450 条/月</span></li>
            </ul>
          </div>
        </div>

        <DocAlert title="关于「双重付费」" type="info">
          <p>客户需要同时付广告费 + 服务费，这通常让人觉得成本高。换个角度想：如果不找专业人管，直接投广告，大概率 30%+ 的预算是浪费的（关键词太宽、没做 Remarketing、落地页太差）。<strong>专业管理费本质上是帮你止损。</strong></p>
        </DocAlert>

        <DocH2>关键行动清单</DocH2>

        <div className="bg-zinc-900 overflow-hidden border border-white/5 rounded-xl mb-8">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-800/50 text-zinc-400">
              <tr>
                <th className="px-5 py-4 font-medium w-12">步骤</th>
                <th className="px-5 py-4 font-medium">内容</th>
                <th className="px-5 py-4 font-medium w-20">优先级</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-5 py-3 font-bold text-white">1</td>
                <td className="px-5 py-3">明确客户目标：是品牌曝光？还是获客？还是看房？</td>
                <td className="px-5 py-3"><span className="text-red-400">🔴 高</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">2</td>
                <td className="px-5 py-3">了解客户预算规模</td>
                <td className="px-5 py-3"><span className="text-red-400">🔴 高</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">3</td>
                <td className="px-5 py-3"><strong className="text-white">制作高质量 Landing Page</strong>（内容为王，这是一切的基础）</td>
                <td className="px-5 py-3"><span className="text-red-400">🔴 高</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">4</td>
                <td className="px-5 py-3">调研行业数据，获取真实 CPC 和竞品水平</td>
                <td className="px-5 py-3"><span className="text-red-400">🔴 高</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">5</td>
                <td className="px-5 py-3">设置 Lead Form（Google + 网站）</td>
                <td className="px-5 py-3"><span className="text-amber-400">🟡 中</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">6</td>
                <td className="px-5 py-3">配置 Conversion Tracking（电话 + 表单追踪）</td>
                <td className="px-5 py-3"><span className="text-amber-400">🟡 中</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">7</td>
                <td className="px-5 py-3">确保客户有销售团队能跟进 Leads</td>
                <td className="px-5 py-3"><span className="text-amber-400">🟡 中</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-bold text-white">8</td>
                <td className="px-5 py-3">与客户对齐预期（用数据说话，不承诺不切实际的结果）</td>
                <td className="px-5 py-3"><span className="text-red-400">🔴 高</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </FadeIn>
    </div>
  );
}
