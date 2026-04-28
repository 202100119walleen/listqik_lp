"use client";

import { useEffect, useRef, useState } from "react";

const avatarSampleVideo =
  "https://res.cloudinary.com/dowcybzve/video/upload/v1776868318/avatar_2_ekxnl4.mp4";

export default function HomePage() {
  const avatarVideoRef = useRef(null);
  const [avatarMuted, setAvatarMuted] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [showGiftPopup, setShowGiftPopup] = useState(false);
  const [offerDismissed, setOfferDismissed] = useState(false);

  const toggleAvatarSound = () => {
    const video = avatarVideoRef.current;
    if (!video) return;
    const nextMuted = !avatarMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
    setAvatarMuted(nextMuted);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGiftPopup(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 顶部固定导航 */}
      <header className="topNav">
        <a href="#" className="brand">
          <span className="brandMark">LQ</span>
          <span>ListQik</span>
        </a>
        <button
          type="button"
          className="navToggle"
          aria-label="打开或关闭导航菜单"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="主导航" className={navOpen ? "open" : ""}>
          <a href="#compare" onClick={() => setNavOpen(false)}>价格</a>
          <a href="#seller" onClick={() => setNavOpen(false)}>卖房</a>
          <a href="#compare" onClick={() => setNavOpen(false)}>对比</a>
          <a href="#seller" onClick={() => setNavOpen(false)}>开始使用</a>
        </nav>
        <div className="navActions">
          <a href="#compare" className="btn btnSecondary">
            查看套餐
          </a>
          <a href="#seller" className="btn btnPrimary">
            发布房源
          </a>
        </div>
      </header>

      <main className="pageShell">
        <section className="hero">
          <div className="heroInner reveal">
            <div className="heroContent">
              <p className="eyebrow">现代房地产平台</p>
              <h1>更聪明地挂牌，更快速地成交，更安心地签约。</h1>
              <p className="heroCopy">
                高质量房源展示、精准买家曝光，以及本地专家支持，
                帮你在关键时机快速推进交易。
              </p>
              <div className="heroActions">
                <a href="#seller" className="btn btnPrimary">
                  开始发布
                </a>
                <a href="#compare" className="btn btnSecondary">
                  对比套餐
                </a>
              </div>
              <ul className="heroStats" aria-label="关键指标">
                <li>
                  <strong>24小时</strong> 平均响应
                </li>
                <li>
                  <strong>100%</strong> 客户满意度
                </li>
                <li className="heroStatWide">
                  一次发布，全面曝光：可同步至 750+ 房产网站，包括本地 MLS、Zillow、Trulia、Realtor.com、Redfin 与 Homes.com。
                </li>
                <li className="heroStatHighlight">
                  <strong>$9,000</strong> 卖家平均可节省约 9,000 美元佣金
                </li>
              </ul>
            </div>

            <aside className="heroAvatarCard" aria-label="AI 助手预览">
              <p className="avatarKicker">Sarah Bennet</p>
              <div className="avatarVideoWrap">
                {avatarSampleVideo ? (
                  <video
                    ref={avatarVideoRef}
                    className="avatarVideo"
                    src={avatarSampleVideo}
                    autoPlay
                    loop
                    muted={avatarMuted}
                    playsInline
                    preload="metadata"
                    onClick={toggleAvatarSound}
                    aria-label={avatarMuted ? "点击开启视频声音" : "点击关闭视频声音"}
                  />
                ) : (
                  <div className="avatarVideo avatarPlaceholder" aria-label="视频占位">
                    请在 `avatarSampleVideo` 中填入视频 URL
                  </div>
                )}
              </div>
              
            </aside>
          </div>
        </section>

        <section id="compare" className="section pricing reveal">
          <div className="sectionHeading">
            <p className="sectionKicker">价格方案</p>
            <h2>选择你的售房方式</h2>
            <p>
              无隐藏费用，无长期绑定，仅提供你真正需要的工具与支持，
              帮你保留更多利润。
            </p>
          </div>
          <p className="pricingHighlight">
            与传统挂牌方式相比，业主平均可节省 11,785 美元。
          </p>

          <div className="pricingGrid">
            <article className="pricingCard isPopular">
              <p className="planBadge">最受欢迎</p>
              <h3>Subsonic</h3>
              <p className="planCopy">
                覆盖 MLS 挂牌核心需求，自主掌控售房节奏。
              </p>
              <p className="planPrice">
                <span className="planPriceWas">$99</span> $79
              </p>
              <p className="planSub">$79 / 0.5%</p>
              <a href="#seller" className="btn btnPrimary wide">
                选择 Subsonic
              </a>
              <ul>
                <li>上线 MLS 与主流房产平台</li>
                <li>协助处理全部必要文件</li>
                <li>房源信息不限次数修改</li>
                <li>带看与咨询统一转发</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">进阶套餐</p>
              <h3>Supersonic</h3>
              <p className="planCopy">
                通过高质量内容与更强展示位，让房源脱颖而出。
              </p>
              <p className="planPrice">$299</p>
              <p className="planSub">$299 / 0.3%</p>
              <a href="#seller" className="btn btnSecondary wide">
                选择 Supersonic
              </a>
              <ul>
                <li>包含 Subsonic 全部功能</li>
                <li>专业房产摄影服务</li>
                <li>优先房源优化</li>
                <li>扩展社交广告触达</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">效果套餐</p>
              <h3>Hypersonic</h3>
              <p className="planCopy">
                面向高时效、高影响力房源的最大曝光方案。
              </p>
              <p className="planPrice">$599</p>
              <p className="planSub">$599 / 0.25%</p>
              <a href="#seller" className="btn btnSecondary wide">
                选择 Hypersonic
              </a>
              <ul>
                <li>包含 Supersonic 全部功能</li>
                <li>高级排名加权</li>
                <li>卖家优先支持流程</li>
                <li>扩展营销分发</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">超值推荐</p>
              <h3>全程服务</h3>
              <p className="planCopy">
                持牌经纪人从挂牌到谈判再到成交全流程协助。
              </p>
              <p className="planPrice">1%</p>
              <p className="planSub">成交支付 + $199 服务费</p>
              <a href="#seller" className="btn btnSecondary wide">
                联系经纪人
              </a>
              <ul>
                <li>专属持牌经纪人服务</li>
                <li>报价审核与谈判支持</li>
                <li>买家筛选与资格核验</li>
                <li>定价策略优化成交收益</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="seller" className="section sellerCta reveal">
          <h2>准备好更安心地挂牌卖房了吗？</h2>
          <p>
            选择你的方案，立即启动面向高意向买家的挂牌策略。
          </p>
          <div className="heroActions">
            <a href="#compare" className="btn btnPrimary">
              现在发布，$99 起
            </a>
          </div>
        </section>
      </main>

      {showGiftPopup ? (
        <div className="giftPopupOverlay" role="dialog" aria-modal="true" aria-labelledby="gift-popup-title">
          <div className="giftPopup">
            <button
              type="button"
              className="giftPopupClose"
              aria-label="关闭优惠弹窗"
              onClick={() => {
                setShowGiftPopup(false);
                setOfferDismissed(true);
              }}
            >
              ×
            </button>
            <p className="giftPopupKicker">限时福利</p>
            <h3 id="gift-popup-title">使用优惠可获免费礼品</h3>
            <p>
              今天开始发布房源，即可获得免费礼品。
            </p>
            <p className="giftCoupon">免费礼品将在下单时自动添加。</p>
            <a
              href="#seller"
              className="btn btnPrimary wide"
              onClick={() => {
                setShowGiftPopup(false);
                setOfferDismissed(true);
              }}
            >
              立即领取
            </a>
          </div>
        </div>
      ) : null}

      {offerDismissed && !showGiftPopup ? (
        <button
          type="button"
          className="claimOfferMini"
          onClick={() => {
            setShowGiftPopup(true);
            setOfferDismissed(false);
          }}
        >
          领取优惠
        </button>
      ) : null}

      <footer className="siteFooter">
        <div className="footerGrid">
          <div>
            <a href="#" className="brand">
              <span className="brandMark">LQ</span>
              <span>ListQik</span>
            </a>
            <p className="footerBlurb">
              快速、现代化的房地产支持服务，帮助卖家合理定价、
              吸引合格买家并更有把握地完成交易。
            </p>
          </div>

          <div>
            <h4>公司</h4>
            <a href="#seller">为什么选择 ListQik</a>
            <a href="#compare">价格方案</a>
            <a href="#seller">立即开始</a>
          </div>

          <div>
            <h4>联系方式</h4>
            <a href="tel:+18005551234">(800) 555-1234</a>
            <a href="mailto:hello@listqik.com">hello@listqik.com</a>
            <span>周一至周五，上午 9:00 - 下午 6:00</span>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} ListQik. 保留所有权利。
          </p>
          <div className="footerLegal">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
            <a href="#">公平住房</a>
          </div>
        </div>
      </footer>
    </>
  );
}
