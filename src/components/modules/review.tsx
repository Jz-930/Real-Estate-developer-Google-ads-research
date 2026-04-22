// Site audit review — jiackey:handcrafted
import { DocH1, DocH2, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle, AlertCircle } from "lucide-react";

export function ReviewModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>现有网站诊断报告</DocH1>

        <DocP>
          前面讲了落地页是广告投放的"生死线"。那现有的网站到底处于什么状态？以下是对两个相关网站的客观技术审查。主要看的是：<strong className="text-white">如果现在就开始投广告，流量进来之后会遇到哪些问题。</strong>
        </DocP>

        {/* ===== Cornerstone ===== */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl mt-10 mb-8">
          <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white">Cornerstone Marketing Realty</h2>
              <a href="https://cornerstonemarketing.ca/" target="_blank" rel="noopener" className="text-accent text-sm hover:underline mt-1 inline-block">cornerstonemarketing.ca</a>
            </div>
            <div className="flex gap-2 text-xs font-mono text-zinc-500">
              <span className="px-2 py-1 bg-white/5 rounded">WordPress</span>
              <span className="px-2 py-1 bg-white/5 rounded">jQuery 3.7.1</span>
            </div>
          </div>

          {/* Strengths - brief */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-emerald-400 font-semibold mb-3 text-sm">
              <CheckCircle className="w-4 h-4" /> 现有基础
            </h3>
            <ul className="space-y-1.5 text-sm text-zinc-400">
              <li>• B2B 服务叙事结构清晰，逻辑合理</li>
              <li>• 行业洞察专栏（总裁来信）有一定专业深度</li>
              <li>• SEO 基础标签（Open Graph、Canonical）配置完整</li>
            </ul>
          </div>

          {/* Problems - detailed */}
          <div>
            <h3 className="flex items-center gap-2 text-red-400 font-semibold mb-4 text-sm">
              <AlertCircle className="w-4 h-4" /> 需要关注的问题
            </h3>

            <div className="space-y-5">
              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">1. 图片优化严重不足（影响最大）</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  全站 34 张图片，<strong className="text-zinc-200">0 张使用 WebP 格式</strong>，仅 3 张有懒加载。这意味着用户用手机打开网站时，所有图片一次性加载，页面会很慢。
                </p>
                <p className="text-sm text-zinc-400">
                  对于房地产这种以视觉为核心的网站，手机端加载慢 = 跳出率高。广告把人带过来了，页面还没加载完人就走了 —— 广告费直接浪费。
                </p>
              </div>

              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">2. 服务和项目描述太浅</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  六大服务模块每项只有 1-2 句广告语式的描述，比如"我们提供创新的营销方案"，但没有具体说<strong className="text-zinc-200">怎么做、做过哪些、效果如何</strong>。
                </p>
                <p className="text-sm text-zinc-400">
                  回到前面讲的逻辑：信息给得越少，来访者的信任感越弱。一个正在比较多家营销公司的开发商看到这样的描述，很难产生"我要找他们"的冲动。项目页面也只有楼层数、套数等基本参数，缺少去化率、销售周期等对开发商最有说服力的成果数据。
                </p>
              </div>

              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">3. HTML 标题层级混乱</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  页面的标题结构（Heading）是 H1 → H6 → H2 → H3 → H4 → H6 → H2…… 完全没有逻辑。这个问题普通用户看不出来，但<strong className="text-zinc-200">搜索引擎（Google 爬虫）看得一清二楚</strong>。
                </p>
                <p className="text-sm text-zinc-400">
                  混乱的标题层级 = Google 不知道你页面重点在讲什么 = 自然搜索排名受影响。同时也没有 Schema 结构化数据，搜索结果里不会出现富摘要（Rich Snippets），错失免费流量。
                </p>
              </div>

              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">4. 内容长期不更新</h4>
                <p className="text-sm text-zinc-400">
                  最新的行业洞察文章停在 2024 年 5 月，网站元数据显示最后修改时间为 2023 年 10 月。一家以"走在行业前沿"为核心卖点的公司，网站却快两年没更新 —— 这跟品牌主张是矛盾的。搜索引擎也会因为缺乏新内容而逐渐降低权重。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== The Unionville ===== */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl mb-8">
          <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white">The Unionville</h2>
              <a href="https://www.theunionville.ca/" target="_blank" rel="noopener" className="text-accent text-sm hover:underline mt-1 inline-block">theunionville.ca</a>
              <p className="text-zinc-500 text-xs mt-1">inCAN Developments · Markham Angus Glen · 270 套 · 预计 2028 冬入住</p>
            </div>
            <div className="flex gap-2 text-xs font-mono text-zinc-500">
              <span className="px-2 py-1 bg-white/5 rounded">Wix</span>
              <span className="px-2 py-1 bg-white/5 rounded">React 18.3</span>
              <span className="px-2 py-1 bg-white/5 rounded">中英双语</span>
            </div>
          </div>

          {/* Strengths - brief */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-emerald-400 font-semibold mb-3 text-sm">
              <CheckCircle className="w-4 h-4" /> 现有基础
            </h3>
            <ul className="space-y-1.5 text-sm text-zinc-400">
              <li>• 视觉沉浸感很强，几乎每个模块都有背景视频，奢华调性到位</li>
              <li>• 叙事结构吻合买家决策路径：设计 → 地段 → 自然环境 → 户型 → 配套</li>
              <li>• 华人市场定向出色：中英双语 + 小红书/微信渠道覆盖</li>
            </ul>
          </div>

          {/* Problems - detailed */}
          <div>
            <h3 className="flex items-center gap-2 text-red-400 font-semibold mb-4 text-sm">
              <AlertCircle className="w-4 h-4" /> 需要关注的问题
            </h3>

            <div className="space-y-5">
              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">1. 价格和户型信息缺位（对转化影响最大）</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  整个网站没有提供任何价格区间，连"起价 $XX 万"这样的范围都没有。买家无法判断这个项目是不是在自己预算范围内。
                </p>
                <p className="text-sm text-zinc-400 mb-3">
                  平面图在主页也完全缺席。The Residences 是买家判断是否值得深入了解的关键节点，但网站只有文案描述，没有任何能看到的户型图。
                </p>
                <p className="text-sm text-zinc-400">
                  回到前面讲的：<strong className="text-zinc-200">落地页要先给足信息。</strong>不给价格和户型，预算够的买家没法自我筛选，留下来的反而可能是无效询盘；真正精准的买家则可能因为信息不够直接离开。
                </p>
              </div>

              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">2. 社交分享预览图缺失（对华人营销尤其致命）</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">og:image</code> 和 <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">twitter:image</code> 均未配置。这意味着当链接被分享至微信、小红书、Facebook 时，<strong className="text-zinc-200">预览卡片会没有图片</strong>。
                </p>
                <p className="text-sm text-zinc-400">
                  对于一个高度依赖华人社交渠道（小红书 + 微信）的豪宅项目来说，分享出去没有图的链接，点击率会大打折扣。这是成本极低但影响很大的一个修复项。
                </p>
              </div>

              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">3. 页面加载过重</h4>
                <p className="text-sm text-zinc-400 mb-3">
                  当前页面加载了 <strong className="text-zinc-200">120 个脚本文件，总体积约 1.1MB</strong>。这是 Wix 平台的固有问题 —— 平台封装了大量底层代码，即使你的页面内容很简单，脚本量也下不来。
                </p>
                <p className="text-sm text-zinc-400 mb-3">
                  同时，7 个背景视频都没有设置 Poster（封面图），视频加载前会出现空白闪烁，在网络慢的时候影响体验。
                </p>
                <p className="text-sm text-zinc-400">
                  13 张图片均未配置响应式参数（srcset），手机用户会加载和电脑一样大的图片，浪费带宽。
                </p>
              </div>

              <div className="bg-zinc-800/40 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-medium mb-2">4. 缺少结构化数据</h4>
                <p className="text-sm text-zinc-400">
                  和 Cornerstone 一样，没有配置任何 Schema.org 结构化数据。对于预售楼盘，添加 RealEstateListing、LocalBusiness 等标记可以提升 Google 搜索结果的展示效果。另外多个内容区块（LOCATION、AMENITIES、EDUCATION）甚至没有使用标题标签，搜索引擎难以识别页面结构。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <DocAlert title="这些问题跟广告投放的关系" type="warning">
          <p>上面这些问题单看可能觉得"没那么严重"，但放在广告投放的语境下就不同了：</p>
          <p className="mt-2">你花了钱把人带到网站上，但图片加载慢导致人走了 = 广告费浪费。价格和户型不给导致精准买家判断不了 = 留下来的都是无效询盘。分享到微信没图 = 社交传播效果大打折扣。</p>
          <p className="mt-2"><strong>广告投放之前，先把这些基础问题修好</strong>，每一块钱广告费的效率都会更高。</p>
        </DocAlert>

      </FadeIn>
    </div>
  );
}
