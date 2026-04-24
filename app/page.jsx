"use client";

import { useRef, useState } from "react";

const avatarSampleVideo =
  "Add Video.mp4";

export default function HomePage() {
  const avatarVideoRef = useRef(null);
  const [avatarMuted, setAvatarMuted] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

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

  return (
    <>
      {/* Sticky top navigation with high-converting CTAs */}
      <header className="topNav">
        <a href="#" className="brand">
          <span className="brandMark">LQ</span>
          <span>ListQik</span>
        </a>
        <button
          type="button"
          className="navToggle"
          aria-label="Open or close navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Main navigation" className={navOpen ? "open" : ""}>
          <a href="#compare" onClick={() => setNavOpen(false)}>Pricing</a>
          <a href="#seller" onClick={() => setNavOpen(false)}>Sell</a>
          <a href="#compare" onClick={() => setNavOpen(false)}>Compare</a>
          <a href="#seller" onClick={() => setNavOpen(false)}>Get Started</a>
        </nav>
        <div className="navActions">
          <a href="#compare" className="btn btnSecondary">
            View packages
          </a>
          <a href="#seller" className="btn btnPrimary">
            List your home
          </a>
        </div>
      </header>

      <main className="pageShell">
        <section className="hero">
          <div className="heroInner reveal">
            <div className="heroContent">
              <p className="eyebrow">Modern real estate platform</p>
              <h1>List smarter. Sell faster. Close with confidence.</h1>
              <p className="heroCopy">
                Premium property presentation, exposure to serious buyers,
                and local experts who move fast when timing matters.
              </p>
              <div className="heroActions">
                <a href="#seller" className="btn btnPrimary">
                  Start your listing
                </a>
                <a href="#compare" className="btn btnSecondary">
                  Compare packages
                </a>
              </div>
              <ul className="heroStats" aria-label="Featured metrics">
                <li>
                  <strong>24h</strong> average response time
                </li>
                <li>
                  <strong>100%</strong> customer satisfaction
                </li>
                <li className="heroStatWide">
                  One Entry, Infinite Reach: Instantly publish to 750+ real estate websites including your local MLS, Zillow & Trulia, Realtor.com, Redfin and Homes.com
                </li>
                <li className="heroStatHighlight">
                  <strong>$9,000</strong> Sellers save an average of $9,000 in commissions
                </li>
              </ul>
            </div>

            <aside className="heroAvatarCard" aria-label="AI assistant preview">
              <p className="avatarKicker">AI listing assistant</p>
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
                    aria-label={avatarMuted ? "Tap to unmute video sound" : "Tap to mute video sound"}
                  />
                ) : (
                  <div className="avatarVideo avatarPlaceholder" aria-label="Video placeholder">
                    Add your video URL in `avatarSampleVideo`
                  </div>
                )}
              </div>
              
            </aside>
          </div>
        </section>

        <section id="compare" className="section pricing reveal">
          <div className="sectionHeading">
            <p className="sectionKicker">Pricing plans</p>
            <h2>Choose how you want to sell</h2>
            <p>
              No hidden fees or long contracts, just the tools and real estate
              support you need to keep more profit.
            </p>
          </div>
          <p className="pricingHighlight">
            Homeowners save an average of $11,785 compared to traditional
            listing routes.
          </p>

          <div className="pricingGrid">
            <article className="pricingCard isPopular">
              <p className="planBadge">Most popular</p>
              <h3>Subsonic</h3>
              <p className="planCopy">
                Everything you need to list on MLS and sell on your terms.
              </p>
              <p className="planPrice">$99</p>
              <p className="planSub">$99 / .5%</p>
              <a href="#seller" className="btn btnPrimary wide">
                Get Subsonic
              </a>
              <ul>
                <li>Listed on MLS and major portals</li>
                <li>Support with all required documentation</li>
                <li>Unlimited listing changes</li>
                <li>Showing and inquiry forwarding</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">Growth package</p>
              <h3>Supersonic</h3>
              <p className="planCopy">
                Stand out with premium content and stronger listing visibility.
              </p>
              <p className="planPrice">$299</p>
              <p className="planSub">$299 / .3%</p>
              <a href="#seller" className="btn btnSecondary wide">
                Get Supersonic
              </a>
              <ul>
                <li>Everything included in Subsonic</li>
                <li>Professional photography package</li>
                <li>Priority listing optimization</li>
                <li>Expanded social ad reach</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">Performance package</p>
              <h3>Hypersonic</h3>
              <p className="planCopy">
                Maximum exposure for high-urgency, high-impact listings.
              </p>
              <p className="planPrice">$599</p>
              <p className="planSub">$599 / .25%</p>
              <a href="#seller" className="btn btnSecondary wide">
                Get Hypersonic
              </a>
              <ul>
                <li>Everything included in Supersonic</li>
                <li>Premium ranking boost</li>
                <li>Priority seller support workflow</li>
                <li>Expanded campaign distribution</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">Best value</p>
              <h3>Full Service</h3>
              <p className="planCopy">
                Licensed agent support from listing through negotiation and closing.
              </p>
              <p className="planPrice">1%</p>
              <p className="planSub">At closing</p>
              <a href="#seller" className="btn btnSecondary wide">
                Talk to an agent
              </a>
              <ul>
                <li>Dedicated licensed agent</li>
                <li>Offer review and negotiation support</li>
                <li>Buyer screening and qualification</li>
                <li>Pricing strategy to maximize sale value</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="seller" className="section sellerCta reveal">
          <h2>Ready to list with confidence?</h2>
          <p>
            Choose your package and launch a listing strategy that attracts
            high-intent buyers.
          </p>
          <div className="heroActions">
            <a href="#compare" className="btn btnPrimary">
              List now for $99
            </a>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="footerGrid">
          <div>
            <a href="#" className="brand">
              <span className="brandMark">LQ</span>
              <span>ListQik</span>
            </a>
            <p className="footerBlurb">
              Fast, modern real estate support designed to help sellers
              price correctly, attract qualified buyers, and close confidently.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#seller">Why ListQik</a>
            <a href="#compare">Pricing plans</a>
            <a href="#seller">Get started</a>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="tel:+18005551234">(800) 555-1234</a>
            <a href="mailto:hello@listqik.com">hello@listqik.com</a>
            <span>Mon-Fri, 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} ListQik. All rights reserved.
          </p>
          <div className="footerLegal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Fair housing</a>
          </div>
        </div>
      </footer>
    </>
  );
}
