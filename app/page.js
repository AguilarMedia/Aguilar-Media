"use client";

export default function Page() {
  return (
    <>
      <div className="site-shell">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-grid" />

        <header className="topbar">
          <div className="container nav-wrap">
            <div className="brand fade-in-up">
              <div className="brand-mark-wrap">
                <img src="/logo-combo.svg" alt="Aguilar Media Logo" className="logo-img logo-float" />
                <div>
                  <h1>Aguilar Media</h1>
                  <p>Luxury-level performance marketing</p>
                </div>
              </div>
            </div>
            <nav className="nav-links">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="hero container">
            <div className="hero-copy fade-in-up delay-1">
              <div className="hero-logo-wrap">
                <img src="/logo-combo.svg" alt="Aguilar Media Hero Logo" className="hero-logo pulse-glow" />
              </div>
              <span className="eyebrow">Built for premium brands and serious growth</span>
              <h2>
                We make your brand look
                <span> expensive, trusted, and impossible to ignore.</span>
              </h2>
              <p>
                Aguilar Media helps businesses attract better clients with premium design direction,
                sharper messaging, and high-converting digital campaigns.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-solid">Book a Strategy Call</a>
                <a href="#services" className="btn btn-ghost">View Services</a>
              </div>
            </div>

            <div className="hero-panel fade-in-up delay-2">
              <div className="glass-card panel-main">
                <p className="mini-label">Positioning + Performance</p>
                <h3>Agency-level presentation with a growth-first mindset.</h3>
                <p>
                  We help your brand feel more high-end online while building a system that drives
                  leads, inquiries, and sales.
                </p>
              </div>
              <div className="panel-grid">
                <div className="glass-card stat-card">
                  <strong>Premium Image</strong>
                  <span>Clean visuals. Better trust. Stronger first impression.</span>
                </div>
                <div className="glass-card stat-card">
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
              <h3>What Aguilar Media helps you with</h3>
              <p>
                We create high-quality, attention-grabbing ad creatives for your business and combine them with data-driven strategies to maximize performance, consistency, and growth.
              </p>
              <p>
                Every decision is backed by real data — from targeting to creative direction — so your ads are not only visually strong, but built to convert, scale, and bring in better customers over time.
              </p>
            </div>

            <div className="card-grid services-grid">
              <article className="glass-card service-card fade-in-up delay-1">
                <span className="card-number">01</span>
                <h4>Creative Ad Production</h4>
                <p>
                  We create clean, modern, attention-grabbing ad creatives that help your business stand out and instantly look more professional online.
                </p>
              </article>
              <article className="glass-card service-card fade-in-up delay-2">
                <span className="card-number">02</span>
                <h4>Data-Driven Ad Strategy</h4>
                <p>
                  We use performance data, audience behavior, and testing to make smarter decisions so your campaigns improve over time instead of relying on guesswork.
                </p>
              </article>
              <article className="glass-card service-card fade-in-up delay-3">
                <span className="card-number">03</span>
                <h4>Brand Positioning</h4>
                <p>
                  We help your business present itself in a stronger way, with clearer messaging and more premium branding that builds trust with your audience.
                </p>
              </article>
            </div>
          </section>

          <section id="business-help" className="section container">
            <div className="section-head fade-in-up">
              <span className="eyebrow">How I Can Help Your Business</span>
              <h3>Marketing support built to help your business grow with more confidence</h3>
              <p>
                A lot of businesses struggle because they have a good product or service, but their marketing does not reflect their actual value. Weak ads, inconsistent branding, and unclear messaging can make a strong business look average.
              </p>
              <p>
                Aguilar Media helps solve that by improving the way your brand is seen online. I can help your business create stronger first impressions, reach the right audience, and build campaigns that are designed to turn interest into action.
              </p>
            </div>

            <div className="card-grid process-grid">
              <article className="glass-card process-card fade-in-up delay-1">
                <span className="step">01</span>
                <h4>Make your business look more professional</h4>
                <p>
                  Better creative, cleaner messaging, and a more polished online presence can instantly increase trust and make your brand feel more established.
                </p>
              </article>
              <article className="glass-card process-card fade-in-up delay-2">
                <span className="step">02</span>
                <h4>Reach the right audience</h4>
                <p>
                  Instead of putting content in front of random people, I help position your business in front of the audience most likely to buy, book, or inquire.
                </p>
              </article>
              <article className="glass-card process-card fade-in-up delay-3">
                <span className="step">03</span>
                <h4>Improve conversions over time</h4>
                <p>
                  Through testing, data, and creative adjustments, your campaigns can improve over time and create a system that produces more consistent results.
                </p>
              </article>
            </div>
          </section>

          <section id="about" className="section container two-col">
            <div className="glass-card about-main fade-in-up">
              <span className="eyebrow">About</span>
              <h3>About Aguilar Media</h3>
              <p>
                Aguilar Media is a performance-driven marketing agency built to help modern brands grow faster, scale smarter, and stand out in competitive markets. We don’t rely on guesswork — everything we do is backed by data, strategy, and real market behavior.
              </p>
              <p>
                Our focus is simple: turn attention into revenue. By combining high-converting ad creatives, strong brand positioning, and precise targeting, we help businesses consistently attract the right audience and convert them into paying customers.
              </p>
              <p>
                We work closely with every client to understand their brand, their audience, and their goals — then build campaigns that not only look premium, but perform at a high level.
              </p>
              <p>
                We believe strong marketing should do more than just get views. It should help a business build trust, look more established, and create a system that supports long-term growth. That is why every part of the strategy — from the creative to the targeting — is built with both brand image and performance in mind.
              </p>
              <p>
                Whether your goal is getting more leads, bringing in more customers, or simply making your business look stronger online, Aguilar Media is built to help you grow with a more professional and results-focused approach.
              </p>
            </div>
            <div className="about-stack">
              <div className="glass-card fade-in-up delay-1">
                <h4>Why Choose Aguilar Media?</h4>
                <p>
                  Most agencies focus on vanity metrics like clicks and views. We focus on what actually matters — leads, conversions, stronger brand perception, and real revenue growth.
                </p>
                <p>
                  Aguilar Media takes a more personal and strategic approach, building campaigns around your actual business goals instead of using the same formula for every client.
                </p>
              </div>
              <div className="glass-card fade-in-up delay-2">
                <h4>Creative + Data</h4>
                <p>
                  We combine attention-grabbing creative ads with data-driven strategies so your campaigns don’t just look good — they perform.
                </p>
              </div>
              <div className="glass-card fade-in-up delay-3">
                <h4>Built to Scale</h4>
                <p>
                  Everything we build is designed for long-term growth, helping your business scale consistently instead of relying on random results.
                </p>
              </div>
            </div>
          </section>

          <section id="process" className="section container">
            <div className="section-head fade-in-up">
              <span className="eyebrow">Process</span>
              <h3>How growth happens</h3>
            </div>
            <div className="card-grid process-grid">
              <article className="glass-card process-card fade-in-up delay-1">
                <span className="step">01</span>
                <h4>Attract</h4>
                <p>Use stronger hooks, sharper visuals, and better positioning to get noticed by the right people.</p>
              </article>
              <article className="glass-card process-card fade-in-up delay-2">
                <span className="step">02</span>
                <h4>Convert</h4>
                <p>Turn attention into action with clearer messaging, stronger offers, and a cleaner journey.</p>
              </article>
              <article className="glass-card process-card fade-in-up delay-3">
                <span className="step">03</span>
                <h4>Scale</h4>
                <p>Keep refining the system so your business grows in a way that feels repeatable and premium.</p>
              </article>
            </div>
          </section>

          <section id="contact" className="section container">
            <div className="contact-box fade-in-up">
              <div>
                <span className="eyebrow">Contact</span>
                <h3>Let’s build a stronger brand presence.</h3>
                <p>
                  Ready to upgrade the way your business looks and performs online? Let’s talk about your next move.
                </p>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Tell me about your business" />
                <button type="button" className="btn btn-solid">Send Inquiry</button>
              </form>
            </div>
          </section>
        </main>

        <footer className="footer container">
          <div className="footer-brand">
            <img src="/logo-combo.svg" alt="Aguilar Media Footer Logo" className="footer-logo" />
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

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
        }

        .brand-mark-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .logo-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(103,232,249,0.35));
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .logo-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 18px rgba(168,85,247,0.5));
        }

        .logo-float {
          animation: logoFloat 3.5s ease-in-out infinite;
        }

        .hero-logo-wrap {
          margin-bottom: 22px;
        }

        .hero-logo {
          width: 90px;
          height: 90px;
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(103,232,249,0.35));
        }

        .pulse-glow {
          animation: pulseGlow 2.8s ease-in-out infinite;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(103,232,249,0.25));
        }

        .favicon-note {
          color: #64748b;
        }

        .brand-mark {
          position: relative;
          display: grid;
          place-items: center;
          width: 52px;
          height: 52px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 10px 30px rgba(0,0,0,0.28);
          overflow: hidden;
        }

        .brand-glow {
          position: absolute;
          inset: -20%;
          background: conic-gradient(from 180deg, rgba(103,232,249,0.0), rgba(103,232,249,0.28), rgba(168,85,247,0.28), rgba(103,232,249,0.0));
          filter: blur(12px);
          animation: spinGlow 7s linear infinite;
        }

        .brand-svg {
          position: relative;
          width: 34px;
          height: 34px;
          z-index: 1;
          animation: floatLogo 3.4s ease-in-out infinite;
          filter: drop-shadow(0 0 14px rgba(103,232,249,0.28));
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

        .nav-links a:hover {
          color: #fff;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding: 96px 0 56px;
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

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 18px;
          font-weight: 700;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-solid {
          background: linear-gradient(135deg, #67e8f9 0%, #a855f7 100%);
          color: #020617;
          box-shadow: 0 18px 48px rgba(103,232,249,0.2);
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

        .fade-in-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeInUp 0.9s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 18px rgba(103,232,249,0.28));
          }
          50% {
            transform: scale(1.04);
            filter: drop-shadow(0 0 28px rgba(168,85,247,0.45));
          }
        }

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
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-3px) scale(1.03); }
        }

        @keyframes spinGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
          .panel-grid {
            grid-template-columns: 1fr;
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
            width: 72px;
            height: 72px;
          }
        }
      `}</style>
    </>
  );
}
