"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleMove = (e) => {
      const glow = document.querySelector(".cursor-glow");
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div className="site-shell">
        <div className="noise" />
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
        <div className="bg-grid" />
        <div className="cursor-glow" />

        <header className="topbar elite-topbar">
          <div className="container nav-wrap elite-nav-wrap">
            <a href="#top" className="brand fade-in-up brand-link">
              <div className="brand-mark-wrap">
                <div className="logo-wrap logo-crazy-wrap">
                  <span className="logo-ring logo-ring-1" />
                  <span className="logo-ring logo-ring-2" />
                  <span className="logo-spark logo-spark-1" />
                  <span className="logo-spark logo-spark-2" />
                  <img src="/logo-premium.png" alt="Aguilar Media Logo" className="logo-insane" />
                  <span className="logo-shimmer" />
                </div>
                <div className="brand-copy">
                  <span className="brand-kicker">PREMIUM GROWTH STUDIO</span>
                  <h1>Aguilar Media</h1>
                  <p>Premium freelance brand scaling for modern businesses</p>
                </div>
              </div>
            </a>

            <nav className="nav-links elite-nav-links">
              <a href="#services">Services</a>
              <a href="#business-help">Value</a>
              <a href="#about">About</a>
              <a href="#case-study">Results</a>
              <a href="#process">Process</a>
              <a href="#contact" className="nav-cta">Book Call</a>
            </nav>
          </div>
        </header>

        <main id="top">
          <section className="hero container">
            <div className="hero-copy fade-in-up delay-1">
              <div className="hero-logo-wrap">
                <div className="hero-logo-shell">
                  <span className="hero-ring ring-1" />
                  <span className="hero-ring ring-2" />
                  <span className="hero-ring ring-3" />
                  <img src="/logo-premium.png" alt="Aguilar Media Hero Logo" className="hero-logo pulse-glow hero-logo-crazy" />
                  <span className="hero-shimmer" />
                </div>
              </div>

              <span className="eyebrow">Built for premium brands and serious growth</span>
              <h2>
                Scale your brand with
                <span> sharper positioning, stronger creative, and a cleaner online presence.</span>
              </h2>
              <p>
                Aguilar Media helps businesses scale through stronger branding, better creative, data-backed marketing decisions, and website builds for brands that need a cleaner online presence.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-solid">Book a Strategy Call</a>
                <a href="#services" className="btn btn-ghost">View Services</a>
              </div>

              <div className="hero-proof fade-in-up delay-2">
                <div className="proof-card glass-card">
                  <strong>Premium Positioning</strong>
                  <span>Sharper brand presentation built to make your business look more established.</span>
                </div>
                <div className="proof-card glass-card">
                  <strong>Data-Led Strategy</strong>
                  <span>Growth decisions guided by performance, audience behavior, and testing.</span>
                </div>
                <div className="proof-card glass-card">
                  <strong>Websites Available</strong>
                  <span>Clean, premium websites available when your brand needs a stronger online presence.</span>
                </div>
              </div>
            </div>

            <div className="hero-panel fade-in-up delay-3">
              <div className="glass-card panel-main tilt-card">
                <p className="mini-label">Positioning + Performance</p>
                <h3>Premium freelance growth support with a brand-first mindset.</h3>
                <p>
                  I help brands scale with stronger presentation, better marketing structure, and optional website support when a business needs a better online foundation.
                </p>
              </div>
              <div className="panel-grid">
                <div className="glass-card stat-card tilt-card">
                  <strong>Premium Image</strong>
                  <span>Clean visuals. Better trust. Stronger first impression.</span>
                </div>
                <div className="glass-card stat-card tilt-card">
                  <strong>Higher Return</strong>
                  <span>Smarter campaigns designed to convert attention into revenue.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="logo-strip container fade-in-up delay-2">
            <div>Brand Strategy</div>
            <div>Paid Ads</div>
            <div>Creative Direction</div>
            <div>Landing Pages</div>
            <div>Content Systems</div>
          </section>

          <section id="services" className="section container">
            <div className="section-head fade-in-up">
              <span className="eyebrow">Services</span>
              <h3>Premium support built to help brands scale</h3>
              <p>
                I help brands scale through stronger creative, clearer positioning, and data-driven strategy built around growth.
              </p>
              <p>
                When needed, I also offer websites to help businesses look more professional online and create a stronger foundation for growth.
              </p>
            </div>

            <div className="card-grid services-grid">
              <article className="glass-card service-card fade-in-up delay-1 tilt-card">
                <span className="card-number">01</span>
                <h4>Premium Brand Scaling</h4>
                <p>
                  I help businesses scale by improving how the brand looks, communicates, and shows up online so it can attract more attention and better customers.
                </p>
              </article>
              <article className="glass-card service-card fade-in-up delay-2 tilt-card">
                <span className="card-number">02</span>
                <h4>Growth Strategy</h4>
                <p>
                  I use performance data, audience behavior, and testing to make smarter growth decisions so your marketing improves over time instead of relying on guesswork.
                </p>
              </article>
              <article className="glass-card service-card fade-in-up delay-3 tilt-card">
                <span className="card-number">03</span>
                <h4>Website Builds</h4>
                <p>
                  If your brand needs a better online presence, I can also build a clean website that makes your business look more professional and ready to grow.
                </p>
              </article>
            </div>
          </section>

          <section id="business-help" className="section container">
            <div className="section-head fade-in-up">
              <span className="eyebrow">How I Can Help Your Business</span>
              <h3>Premium freelance support built to help your business scale with more confidence</h3>
              <p>
                A lot of businesses struggle because they have a good product or service, but their marketing does not reflect their actual value. Weak ads, inconsistent branding, and unclear messaging can make a strong business look average.
              </p>
              <p>
                Aguilar Media helps solve that by improving the way your brand is seen online. I can help your business create stronger first impressions, reach the right audience, and build campaigns that are designed to turn interest into action.
              </p>
            </div>

            <div className="card-grid process-grid">
              <article className="glass-card process-card fade-in-up delay-1 tilt-card">
                <span className="step">01</span>
                <h4>Make your business look more professional</h4>
                <p>
                  Better creative, cleaner messaging, and a more polished online presence can instantly increase trust and make your brand feel more established.
                </p>
              </article>
              <article className="glass-card process-card fade-in-up delay-2 tilt-card">
                <span className="step">02</span>
                <h4>Reach the right audience</h4>
                <p>
                  Instead of putting content in front of random people, I help position your business in front of the audience most likely to buy, book, or inquire.
                </p>
              </article>
              <article className="glass-card process-card fade-in-up delay-3 tilt-card">
                <span className="step">03</span>
                <h4>Improve conversions over time</h4>
                <p>
                  Through testing, data, and creative adjustments, your campaigns can improve over time and create a system that produces more consistent results.
                </p>
              </article>
            </div>
          </section>

          <section id="about" className="section container two-col">
            <div className="glass-card about-main fade-in-up tilt-card">
              <span className="eyebrow">About</span>
              <h3>About Aguilar Media</h3>
              <p>
                Aguilar Media is a freelance brand scaling service built to help modern businesses grow faster, look stronger, and stand out in competitive markets. We don’t rely on guesswork — everything we do is backed by data, strategy, and real market behavior.
              </p>
              <p>
                My focus is simple: help brands scale in a way that feels professional, strategic, and built for long-term growth. That can mean stronger branding, better creative, smarter strategy, and websites when needed.
              </p>
              <p>
                I work closely with each client to understand their brand, audience, and goals, then build a growth approach that improves how the business looks and performs online.
              </p>
              <p>
                We believe strong marketing should do more than just get views. It should help a business build trust, look more established, and create a system that supports long-term growth. That is why every part of the strategy — from the creative to the targeting — is built with both brand image and performance in mind.
              </p>
              <p>
                Whether your goal is getting more leads, bringing in more customers, or simply making your business look stronger online, Aguilar Media is built to help you grow with a more professional and results-focused approach.
              </p>
            </div>
            <div className="about-stack">
              <div className="glass-card fade-in-up delay-1 tilt-card">
                <h4>Why Aguilar Media?</h4>
                <p>
                  A lot of businesses do not need a huge agency. They need someone who can help them scale with focused support, stronger execution, and a more personal approach.
                </p>
                <p>
                  Aguilar Media is built around that idea — freelance growth support that focuses on your actual goals, your brand, and what will help you grow the fastest.
                </p>
              </div>
              <div className="glass-card fade-in-up delay-2 tilt-card">
                <h4>Creative + Strategy</h4>
                <p>
                  I combine creative thinking with data-backed strategy so your brand does not just look better — it scales smarter.
                </p>
              </div>
              <div className="glass-card fade-in-up delay-3 tilt-card">
                <h4>Websites If Needed</h4>
                <p>
                  If your current site is holding your brand back, I can also build a cleaner website that supports trust, conversion, and growth.
                </p>
              </div>
            </div>
          </section>

          <section id="case-study" className="section container">
            <div className="section-head fade-in-up">
              <span className="eyebrow">Case Study</span>
              <h3>Results that show what strong creative and strategy can do</h3>
              <p>
                This example shows how better positioning, stronger ad creative, and cleaner campaign strategy can help a brand get more attention, stronger engagement, and better conversion performance.
              </p>
            </div>

            <div className="case-study-grid">
              <div className="glass-card case-main fade-in-up tilt-card">
                <span className="case-tag">Featured Result</span>
                <h4>Premium apparel brand growth campaign</h4>
                <p>
                  We improved the brand’s presentation with cleaner visuals, sharper messaging, and stronger creative direction. Then we supported that with more focused ad strategy and data-based optimization.
                </p>
                <div className="case-metrics">
                  <div className="metric-card">
                    <strong>+42%</strong>
                    <span>Higher click-through rate</span>
                  </div>
                  <div className="metric-card">
                    <strong>+31%</strong>
                    <span>More qualified leads</span>
                  </div>
                  <div className="metric-card">
                    <strong>-22%</strong>
                    <span>Lower cost per result</span>
                  </div>
                </div>
              </div>

              <div className="case-side">
                <div className="glass-card fade-in-up delay-1 tilt-card">
                  <h4>What changed</h4>
                  <p>
                    We upgraded the creative style, improved the brand’s offer positioning, and tested stronger hooks designed to stop attention and drive more serious traffic.
                  </p>
                </div>
                <div className="glass-card fade-in-up delay-2 tilt-card">
                  <h4>Why it worked</h4>
                  <p>
                    Instead of relying on random content, the campaign was built around visuals that felt premium and messaging that was aligned with what the audience actually responded to.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="process" className="section container">
            <div className="section-head fade-in-up">
              <span className="eyebrow">Process</span>
              <h3>How growth happens</h3>
            </div>
            <div className="card-grid process-grid">
              <article className="glass-card process-card fade-in-up delay-1 tilt-card">
                <span className="step">01</span>
                <h4>Attract</h4>
                <p>Use stronger hooks, sharper visuals, and better positioning to get noticed by the right people.</p>
              </article>
              <article className="glass-card process-card fade-in-up delay-2 tilt-card">
                <span className="step">02</span>
                <h4>Convert</h4>
                <p>Turn attention into action with clearer messaging, stronger offers, and a cleaner journey.</p>
              </article>
              <article className="glass-card process-card fade-in-up delay-3 tilt-card">
                <span className="step">03</span>
                <h4>Scale</h4>
                <p>Keep refining the system so your business grows in a way that feels repeatable and premium.</p>
              </article>
            </div>
          </section>

          <section id="contact" className="section container">
            <div className="contact-box fade-in-up tilt-card">
              <div>
                <span className="eyebrow">Contact</span>
                <h3>Let’s build a stronger brand presence.</h3>
                <p>
                  Ready to scale your brand, sharpen your presence, or get a cleaner website built? Let’s talk about the next move for your business.
                </p>
              </div>
           <form action="https://formspree.io/f/xbdpkodd" method="POST" className="contact-form">
  <input type="hidden" name="_subject" value="New Client Inquiry - Aguilar Media" />
  <input type="text" name="name" placeholder="Your Name" />
  <input type="email" name="email" placeholder="Your Email" />
  <textarea name="message" placeholder="Tell me about your business" />
  <button type="submit" className="btn btn-solid">Send Inquiry</button>
</form>
</form>
            </div>
          </section>
        </main>

        <footer className="footer container">
          <div className="footer-brand">
            <img src="/logo-premium.png" alt="Aguilar Media Footer Logo" className="footer-logo" />
            <div>
              <p>© 2026 Aguilar Media. All rights reserved.</p>
              <p>Built for clean branding, better ads, and real business growth.</p>
            </div>
          </div>
          <p className="favicon-note">Use this same logo as your site favicon.</p>
        </footer>
      </div>

      <style jsx global>{`
        :root {
          color-scheme: dark;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #020617;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site-shell {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(34, 211, 238, 0.12), transparent 28%),
            radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.12), transparent 25%),
            linear-gradient(180deg, #020617 0%, #020817 45%, #040b1e 100%);
        }

        .noise {
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(rgba(255,255,255,0.05) 0.6px, transparent 0.6px);
          background-size: 7px 7px;
          opacity: 0.06;
          pointer-events: none;
          z-index: 0;
        }

        .bg-orb {
          position: fixed;
          border-radius: 999px;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
          animation: floatOrb 12s ease-in-out infinite;
        }

        .orb-1 {
          width: 320px;
          height: 320px;
          background: rgba(34, 211, 238, 0.24);
          top: -80px;
          left: -90px;
        }

        .orb-2 {
          width: 380px;
          height: 380px;
          background: rgba(168, 85, 247, 0.22);
          top: 120px;
          right: -120px;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 420px;
          height: 420px;
          background: rgba(168, 85, 247, 0.18);
          bottom: -120px;
          left: 20%;
          animation-delay: 4s;
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%);
          pointer-events: none;
          z-index: 0;
        }

        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(103,232,249,0.12), transparent 70%);
          pointer-events: none;
          z-index: 0;
          transform: translate(-50%, -50%);
          opacity: 0.85;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(2, 6, 23, 0.7);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .elite-topbar {
          background: linear-gradient(180deg, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.72));
          border-bottom: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.28);
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
        }

        .elite-nav-wrap {
          gap: 24px;
          padding: 18px 0;
        }

        .brand-link {
          display: inline-flex;
        }

        .brand-mark-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .logo-wrap {
          position: relative;
          overflow: visible;
          border-radius: 20px;
          display: inline-grid;
          place-items: center;
        }

        .logo-crazy-wrap {
          isolation: isolate;
        }

        .logo-ring {
          position: absolute;
          inset: 50% auto auto 50%;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        .logo-ring-1 {
          width: 110%;
          height: 110%;
          border: 1.5px solid rgba(103,232,249,0.38);
          animation: orbitPulse 3.2s ease-in-out infinite;
        }

        .logo-ring-2 {
          width: 128%;
          height: 128%;
          border: 1px solid rgba(168,85,247,0.34);
          animation: orbitSpin 7s linear infinite;
        }

        .logo-spark {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95), rgba(103,232,249,0.25));
          box-shadow: 0 0 18px rgba(103,232,249,0.8);
          pointer-events: none;
          z-index: 1;
        }

        .logo-spark-1 {
          top: 8%;
          right: 4%;
          animation: sparkle 2.2s ease-in-out infinite;
        }

        .logo-spark-2 {
          bottom: 10%;
          left: 2%;
          animation: sparkle 2.2s ease-in-out infinite 1.1s;
        }

        .logo-insane {
          height: 90px;
          animation: floatLogo 4s ease-in-out infinite, glowPulse 2.5s ease-in-out infinite;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease, filter 0.3s ease;
          transform-origin: center;
        }

        .logo-insane:hover {
          transform: scale(1.06) rotate(-1deg);
          filter: drop-shadow(0 0 20px rgba(168,85,247,0.9));
        }

        .hero-logo:hover {
          transform: scale(1.04);
          filter: drop-shadow(0 0 32px rgba(168,85,247,0.6));
        }

        .logo-shimmer {
          position: absolute;
          inset: -4px;
          background: linear-gradient(120deg, transparent 15%, rgba(255,255,255,0.4), transparent 85%);
          animation: shimmer 2.6s infinite;
          z-index: 3;
          pointer-events: none;
          mix-blend-mode: screen;
          border-radius: 20px;
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
        }

        .brand-kicker {
          color: #67e8f9;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          margin-bottom: 4px;
          opacity: 0.9;
        }

        .brand h1 {
          margin: 0;
          font-size: 1.65rem;
          letter-spacing: -0.04em;
        }

        .brand p {
          margin: 6px 0 0;
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .elite-nav-links {
          align-items: center;
          gap: 24px;
          padding: 10px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          border-radius: 999px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
        }

        .nav-links a:hover {
          color: #fff;
        }

        .elite-nav-links a {
          position: relative;
        }

        .elite-nav-links a:not(.nav-cta)::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #67e8f9, #a855f7);
          transition: width 0.25s ease;
        }

        .elite-nav-links a:not(.nav-cta):hover::after {
          width: 100%;
        }

        .nav-cta {
          padding: 12px 18px;
          border-radius: 999px;
          background: linear-gradient(135deg, #67e8f9 0%, #a855f7 100%);
          color: #020617;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(103,232,249,0.18);
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          color: #020617 !important;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding: 96px 0 56px;
        }

        .hero-logo-wrap {
          margin-bottom: 24px;
        }

        .hero-logo-shell {
          position: relative;
          display: inline-grid;
          place-items: center;
          isolation: isolate;
        }

        .hero-shimmer {
          position: absolute;
          inset: -8px;
          background: linear-gradient(120deg, transparent 18%, rgba(255,255,255,0.26), transparent 82%);
          animation: shimmer 3s infinite;
          z-index: 3;
          pointer-events: none;
        }

        .hero-logo {
          height: 150px;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 24px rgba(103,232,249,0.35));
          transform-origin: center;
        }

        .pulse-glow {
          animation: heroFloat 3.6s ease-in-out infinite, glowPulse 2.8s ease-in-out infinite;
        }

        .hero-ring {
          position: absolute;
          border-radius: 999px;
          border: 2px solid rgba(103,232,249,0.3);
          animation: pulseRing 4s infinite;
          z-index: 1;
        }

        .ring-1 {
          width: 135%;
          height: 135%;
        }

        .ring-2 {
          width: 168%;
          height: 168%;
          animation-delay: 1.4s;
        }

        .ring-3 {
          width: 196%;
          height: 196%;
          border: 1px solid rgba(255,255,255,0.12);
          animation: orbitSpinReverse 9s linear infinite;
        }

        .eyebrow {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(168, 85, 247, 0.28);
          background: linear-gradient(135deg, rgba(103,232,249,0.12), rgba(168,85,247,0.12));
          color: #c4b5fd;
          font-size: 0.84rem;
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .hero-copy h2 {
          margin: 0;
          font-size: clamp(3rem, 7vw, 5.6rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          max-width: 12ch;
        }

        .hero-copy h2 span {
          display: block;
          background: linear-gradient(90deg, #ffffff 0%, #67e8f9 38%, #a855f7 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-copy p {
          margin: 22px 0 0;
          max-width: 640px;
          color: #cbd5e1;
          font-size: 1.08rem;
          line-height: 1.9;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .hero-proof {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 30px;
        }

        .proof-card {
          padding: 16px;
          border-radius: 18px;
          transition: transform 0.3s ease;
        }

        .proof-card:hover {
          transform: translateY(-6px);
        }

        .proof-card strong {
          display: block;
          margin-bottom: 8px;
        }

        .proof-card span {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 18px;
          font-weight: 700;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-solid {
          background: linear-gradient(135deg, #67e8f9 0%, #a855f7 100%);
          color: #020617;
          box-shadow: 0 18px 48px rgba(103,232,249,0.2);
        }

        .btn-solid::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
          top: -50%;
          left: -50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-solid:hover::after {
          opacity: 1;
        }

        .btn-ghost {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: #fff;
        }

        .btn-ghost:hover {
          background: rgba(255,255,255,0.08);
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.28);
          backdrop-filter: blur(14px);
        }

        .tilt-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .tilt-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 28px 80px rgba(0,0,0,0.34);
          border-color: rgba(103,232,249,0.18);
        }

        .hero-panel {
          position: relative;
        }

        .panel-main,
        .stat-card,
        .service-card,
        .process-card,
        .about-main,
        .about-stack .glass-card {
          border-radius: 28px;
          padding: 28px;
        }

        .panel-main h3,
        .about-main h3,
        .section-head h3,
        .contact-box h3 {
          margin: 10px 0 0;
          font-size: clamp(1.9rem, 3vw, 2.7rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .panel-main p,
        .about-main p,
        .service-card p,
        .process-card p,
        .about-stack p,
        .contact-box p {
          color: #cbd5e1;
          line-height: 1.8;
        }

        .mini-label {
          margin: 0;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .panel-grid,
        .card-grid {
          display: grid;
          gap: 20px;
          margin-top: 20px;
        }

        .panel-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .stat-card strong,
        .service-card h4,
        .process-card h4,
        .about-stack h4 {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .stat-card span,
        .about-stack p {
          color: #94a3b8;
          line-height: 1.7;
          font-size: 0.98rem;
        }

        .case-study-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: stretch;
        }

        .case-main,
        .case-side .glass-card {
          border-radius: 28px;
          padding: 28px;
        }

        .case-tag {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.24);
          color: #bfdbfe;
          font-size: 0.82rem;
          margin-bottom: 16px;
        }

        .case-main h4,
        .case-side h4 {
          margin: 0 0 14px;
          font-size: 1.4rem;
        }

        .case-main p,
        .case-side p {
          color: #cbd5e1;
          line-height: 1.8;
        }

        .case-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .metric-card {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .metric-card strong {
          display: block;
          font-size: 1.8rem;
          color: #bfdbfe;
          margin-bottom: 8px;
        }

        .metric-card span {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .case-side {
          display: grid;
          gap: 20px;
        }

        .logo-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          padding-bottom: 24px;
        }

        .logo-strip div {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #cbd5e1;
          border-radius: 16px;
          padding: 16px 18px;
          text-align: center;
          font-size: 0.95rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .logo-strip div:hover {
          transform: translateY(-5px);
          border-color: rgba(103,232,249,0.22);
        }

        .section {
          padding: 88px 0;
        }

        .section-head {
          max-width: 720px;
          margin-bottom: 28px;
        }

        .section-head p {
          color: #cbd5e1;
          font-size: 1.04rem;
          line-height: 1.8;
          margin-top: 18px;
        }

        .services-grid,
        .process-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .card-number,
        .step {
          display: inline-block;
          color: #67e8f9;
          text-shadow: 0 0 18px rgba(103,232,249,0.35);
          font-size: 0.92rem;
          font-weight: 700;
          margin-bottom: 18px;
          letter-spacing: 0.08em;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: stretch;
        }

        .about-stack {
          display: grid;
          gap: 20px;
        }

        .contact-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          padding: 34px;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
          box-shadow: 0 24px 80px rgba(0,0,0,0.28);
          backdrop-filter: blur(16px);
        }

        .contact-form {
          display: grid;
          gap: 14px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(2, 6, 23, 0.8);
          color: #fff;
          border-radius: 18px;
          padding: 15px 16px;
          font: inherit;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: rgba(103,232,249,0.5);
          box-shadow: 0 0 0 4px rgba(103,232,249,0.08);
        }

        .contact-form textarea {
          min-height: 140px;
          resize: vertical;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #64748b;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 0 0 42px;
          color: #64748b;
          font-size: 0.95rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-logo {
          height: 58px;
          width: auto;
          filter: drop-shadow(0 0 12px rgba(103,232,249,0.25));
        }

        .favicon-note {
          color: #64748b;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeInUp 0.9s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(18px) translateX(10px); }
        }

        @keyframes floatLogo {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        @keyframes heroFloat {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes logoSpinGlow {
          0% { filter: drop-shadow(0 0 10px rgba(103,232,249,0.28)); }
          50% { filter: drop-shadow(0 0 28px rgba(168,85,247,0.55)); }
          100% { filter: drop-shadow(0 0 10px rgba(103,232,249,0.28)); }
        }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes glowPulse {
          0% { filter: drop-shadow(0 0 0px rgba(103,232,249,0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(103,232,249,0.7)); }
          100% { filter: drop-shadow(0 0 0px rgba(103,232,249,0.3)); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes pulseRing {
          0% { transform: scale(0.9); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.9; }
          100% { transform: scale(0.9); opacity: 0.4; }
        }

        @keyframes orbitPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.96); opacity: 0.45; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.95; }
        }

        @keyframes orbitSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1.04); }
        }

        @keyframes orbitSpinReverse {
          0% { transform: translate(-50%, -50%) rotate(360deg) scale(0.98); }
          100% { transform: translate(-50%, -50%) rotate(0deg) scale(1.03); }
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(0.7); opacity: 0.45; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        @media (max-width: 980px) {
          .hero,
          .two-col,
          .contact-box {
            grid-template-columns: 1fr;
          }

          .services-grid,
          .process-grid,
          .logo-strip,
          .panel-grid,
          .hero-proof,
          .case-study-grid,
          .case-metrics {
            grid-template-columns: 1fr;
          }
            grid-template-columns: 1fr;
          }

          .elite-nav-wrap {
            flex-direction: column;
            align-items: flex-start;
          }

          .elite-nav-links {
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
            border-radius: 24px;
          }
        }

        @media (max-width: 760px) {
          .nav-links {
            display: none;
          }

          .hero {
            padding-top: 72px;
          }

          .container {
            width: min(1180px, calc(100% - 24px));
          }

          .footer {
            flex-direction: column;
          }

          .footer-brand {
            align-items: flex-start;
          }

          .hero-logo {
            height: 110px;
          }

          .logo-insane {
            height: 70px;
          }
        }
      `}</style>
    </>
  );
}
