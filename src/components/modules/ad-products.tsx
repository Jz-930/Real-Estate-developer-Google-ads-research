// Module: ad-products | crafted by jiackey
import { DocH1, DocH2, DocH3, DocP, DocAlert } from "@/components/ui/doc-typography";
import { FadeIn } from "@/components/ui/fade-in";
import { VisualAsset } from "@/components/ui/visual-asset";

export function AdProductsModule() {
  return (
    <div className="max-w-4xl">
      <FadeIn>
        <DocH1>Google Ads 广告产品矩阵</DocH1>

        <DocP>
          客户常有一个误区，认为 Google Ads 就是“别人在谷歌搜索时出现的那些文字链接”。实际上，Google 的广告版图极其庞大，它能覆盖一个人从看视频、读新闻、刷手机到主动搜索的**全链路买家旅程**。以下是针对房地产开发商真正能用得上的核心产品。
        </DocP>

        <DocAlert title="给建商的实战建议" type="info">
          各个渠道不是可以互相替代的。Search Ads 负责收割“现在就要买”的高意向人群，而 YouTube、Demand Gen 和 GDN 则是为了在他们真正开始搜索前，就将您的楼盘抢先植入他们的潜意识中。
        </DocAlert>

        <div className="my-16" />

        {/* --- YOUTUBE ADS --- */}
        <DocH2>1. YouTube 视频广告 (Video Campaigns)</DocH2>
        
        <DocP>
          <strong className="text-white">出现位置：</strong> 用户观看 YouTube 视频前的贴片（In-stream）或短视频流（Shorts）。
          <br/>
          <strong className="text-white">最大优势：</strong> 您拥有最多 **30秒** 的沉浸式大屏展示时间。如果在前5秒被跳过（Skip），您完全**不需要付钱**。只有真正看完 30 秒或点击互动的高意向买家才计费。
        </DocP>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform">
            <h4 className="text-accent font-semibold mb-2">应用场景</h4>
            <p className="text-zinc-400 text-sm">用户正在搜索“Mississauga 新开盘 Condo 预测”时，您的奢华项目宣传片作为片头播放，附带极具诱惑力的“限时 VIP 注册”按钮。</p>
          </div>
          <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform">
            <h4 className="text-accent font-semibold mb-2">成本参考</h4>
            <p className="text-zinc-400 text-sm">由于跳过机制的存在，实际有效观看每次大概只需 $0.05–$0.10，是极佳的品牌曝光手段。</p>
          </div>
        </div>

        <VisualAsset
          src="/images/mockup-youtube.png"
          alt="Premium YouTube Ad Mockup"
          caption="[重绘图示] 高级定制版 YouTube 实况截图：展示用户在观看视频前的高清奢华地产品牌露出及跳转按钮。"
        />

        <div className="my-16" />

        {/* --- DEMAND GEN --- */}
        <DocH2>2. Demand Gen 原生信息流 (发现广告)</DocH2>

        <DocP>
          <strong className="text-white">出现位置：</strong> Google App 发现流 (Discover)、Gmail 促销收件箱。
          <br/>
          <strong className="text-white">最大优势：</strong> 完美融入用户日常刷手机的习惯。就像微信朋友圈广告一样，它们不会显得突兀。基于 Google 的强大 AI，系统能找到那些“虽然没有主动搜索房屋，但近期频繁看家居设计、查看银行按揭数据”的潜在买家。
        </DocP>

        <VisualAsset
          src="/images/mockup-demand-gen.png"
          alt="Demand Gen Ad Mockup"
          caption="[重绘图示] Google Discover 原生资讯流广告：无感融入阅读流，大尺寸高清配图极易吸引眼球。"
        />

        <div className="my-16" />

        {/* --- LSA --- */}
        <DocH2>3. Local Services Ads (LSA 本地服务广告)</DocH2>

        <DocP>
          <strong className="text-white">出现位置：</strong> 高居于所有广告和搜索结果之上的**最顶部黄金位**。
          <br/>
          <strong className="text-white">最大优势：</strong> 极其强烈的**信任背书**。广告自带清晰的评分、“Google Screened（谷歌认证）”绿色徽章和直拨电话按钮。这种形式不按点击计费，而是**按真实询盘计费 (Pay-per-Lead)**。只有客户真的打电话、发消息了才产生花费。
        </DocP>
        
        <VisualAsset
          src="/images/mockup-lsa.png"
          alt="LSA Google Search Mockup"
          caption="[重绘图示] 手机搜索结果置顶 LSA 展示：自带 Google 信用认证与星级评分，极大提高客户信赖。"
        />

        <div className="my-16" />

        {/* --- GDN --- */}
        <DocH2>4. Google Display Network (GDN 网站横幅广告)</DocH2>

        <DocP>
          <strong className="text-white">出现位置：</strong> 全球超 200 万个合作网站（如 Toronto Star, 新闻资讯, 天气应用）内部。
          <br/>
          <strong className="text-white">最大优势：</strong> 大网撒鱼或**精准再营销（Remarketing）**。当一位买家曾经访问过您的新盘网站并看了“A户型”，第二天他在浏览新闻时，网页侧面就会不经意地弹出“A户型最后5套，点此预约”的极窄横幅。
        </DocP>

        <VisualAsset
          src="/images/mockup-gdn.png"
          alt="GDN Display Banner Mockup"
          caption="[重绘图示] 财经/新闻网站右侧经典 GDN 横幅：随时随地通过再营销技术反复触达访问过您着陆页的用户。"
        />

        <div className="my-16" />

        {/* --- SEARCH & PMAX --- */}
        <DocH2>5. Search Ads & Performance Max (搜索与全渠道 AI 广告)</DocH2>

        <DocP>
          除了视觉导向的产品，我们依然保留底层支柱：
          <br/><br/>
          <strong className="text-white">Search Ads（搜索广告）：</strong> 作为收割漏斗的最底端，针对精准意图关键词（例如 "new detached homes in Vaughan"），直接拦截那些明确要购买的客户群。
          <br/><br/>
          <strong className="text-white">Performance Max (PMax)：</strong> 这是未来的趋势。只要提供好图片素材和文案，Google 底层的 AI 大模型会自动将广告变形成上述几乎所有的形态，并利用机器学习为您获取转化。
        </DocP>

      </FadeIn>
    </div>
  );
}
