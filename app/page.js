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
              <h1>Aguilar Media</h1>
              <p>Luxury-level performance marketing</p>
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
                Everything is built to make your business feel more established, more trustworthy,
                and more ready to scale.
              </p>
            </div>

            <div className="card-grid services-grid">
              <article className="glass-card service-card fade-in-up delay-1">
                <span className="card-number">01</span>
                <h4>Digital Advertising</h4>
                <p>Campaign strategy, ad setup, targeting, and optimization focused on getting results.</p>
              </article>
              <article className="glass-card service-card fade-in-up delay-2">
                <span className="card-number">02</span>
                <h4>Content Strategy</h4>
                <p>Sharper messaging and creative systems that support your ads and strengthen your brand.</p>
              </article>
              <article className="glass-card service-card fade-in-up delay-3">
                <span className="card-number">03</span>
                <h4>Brand Positioning</h4>
                <p>Cleaner presentation and better offers that make your business stand out from competitors.</p>
              </article>
            </div>
          </section>

          <section id="about" className="section container two-col">
            <div className="glass-card about-main fade-in-up">
              <span className="eyebrow">About</span>
              <h3>Why Aguilar Media?</h3>
              <p>
                Most businesses do not have a traffic problem. They have a perception problem. Their
                brand feels inconsistent, their message is weak, or their marketing does not look premium
                enough to justify attention.
              </p>
              <p>
                Aguilar Media solves that by combining clean presentation, smarter campaign strategy,
                and stronger creative direction.
              </p>
            </div>
            <div className="about-stack">
              <div className="glass-card fade-in-up delay-1">
                <h4>Professional image</h4>
                <p>Make your brand feel premium from the first click.</p>
              </div>
              <div className="glass-card fade-in-up delay-2">
                <h4>Clear strategy</h4>
                <p>Better offers, better creative, better customer journey.</p>
              </div>
              <div className="glass-card fade-in-up delay-3">
                <h4>Growth focus</h4>
                <p>Every move is built to increase reach, improve conversions, and support long-term growth.</p>
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
          <p>© 2026 Aguilar Media. All rights reserved.</p>
          <p>Built for clean branding, better ads, and real business growth.</p>
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
          background: rgba(34, 211, 238, 0.18);
          top: -80px;
          left: -90px;
        }

        .orb-2 {
          width: 380px;
          height: 380px;
          background: rgba(96, 165, 250, 0.14);
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
          border: 1px solid rgba(34, 211, 238, 0.24);
          background: rgba(255,255,255,0.05);
          color: #67e8f9;
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
          background: linear-gradient(90deg, #ffffff 0%, #bae6fd 42%, #94a3b8 100%);
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
          background: #fff;
          color: #020617;
          box-shadow: 0 16px 40px rgba(255,255,255,0.12);
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
        }
      `}</style>
    </>
  );
}
