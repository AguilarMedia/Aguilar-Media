export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Aguilar Media</h1>
            <p className="text-sm text-slate-400">Performance marketing for modern brands</p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#results" className="transition hover:text-white">Results</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Helping brands scale with stronger creative and smarter ads
          </p>
          <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Professional marketing that makes your brand look premium.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Aguilar Media helps businesses attract attention, build trust, and convert more customers with clean branding, stronger messaging, and paid ad strategy that performs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
            >
              Book a Strategy Call
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">What we do</p>
              <h3 className="mt-2 text-2xl font-bold">Paid Ads + Brand Positioning</h3>
              <p className="mt-3 text-slate-300">
                We help your business look more polished online and create campaigns built to drive real growth.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <p className="text-3xl font-bold">More Reach</p>
                <p className="mt-2 text-sm text-slate-400">Get in front of the right audience with better targeting.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <p className="text-3xl font-bold">Better Conversions</p>
                <p className="mt-2 text-sm text-slate-400">Turn attention into inquiries, leads, and sales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">What Aguilar Media helps you with</h3>
            <p className="mt-4 text-slate-300">
              Everything is built to make your business feel more established, more trustworthy, and more ready to grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-xl shadow-black/20">
              <h4 className="text-xl font-bold">Digital Advertising</h4>
              <p className="mt-3 text-slate-400">
                Campaign strategy, ad setup, targeting, and optimization focused on getting results.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-xl shadow-black/20">
              <h4 className="text-xl font-bold">Content Strategy</h4>
              <p className="mt-3 text-slate-400">
                Better creative direction and messaging that supports your ads and strengthens your brand.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-xl shadow-black/20">
              <h4 className="text-xl font-bold">Brand Positioning</h4>
              <p className="mt-3 text-slate-400">
                Sharper visuals and clearer offers that help your business stand out from competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About</p>
            <h3 className="mt-3 text-3xl font-bold">Why Aguilar Media?</h3>
            <p className="mt-5 text-slate-300">
              Many businesses struggle because their ads feel weak, their content looks inconsistent, or their message is not clear enough to convert. Aguilar Media fixes that with stronger strategy, cleaner brand presentation, and marketing that looks professional.
            </p>
            <p className="mt-4 text-slate-400">
              The goal is simple: make your business look premium and help it grow faster.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-white p-6 text-slate-950 shadow-xl">
              <h4 className="text-lg font-bold">Professional image</h4>
              <p className="mt-2 text-sm text-slate-700">
                We help brands show up online with more clarity, confidence, and trust.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg shadow-black/20">
              <h4 className="text-lg font-bold">Clear strategy</h4>
              <p className="mt-2 text-sm text-slate-400">
                Better offers, better messaging, and better creative direction.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg shadow-black/20">
              <h4 className="text-lg font-bold">Growth focus</h4>
              <p className="mt-2 text-sm text-slate-400">
                Every move is built to increase reach, improve conversions, and support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="border-t border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Results Process</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">How growth happens</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">
              <p className="text-4xl font-bold text-cyan-300">01</p>
              <h4 className="mt-4 text-xl font-bold">Attract</h4>
              <p className="mt-3 text-slate-400">Use cleaner visuals and stronger hooks to get the right people to notice your brand.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">
              <p className="text-4xl font-bold text-cyan-300">02</p>
              <h4 className="mt-4 text-xl font-bold">Convert</h4>
              <p className="mt-3 text-slate-400">Turn interest into action with clearer messaging, better offers, and stronger calls to action.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">
              <p className="text-4xl font-bold text-cyan-300">03</p>
              <h4 className="mt-4 text-xl font-bold">Scale</h4>
              <p className="mt-3 text-slate-400">Keep improving your system so your business grows in a way that feels real and repeatable.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">Let’s build a stronger brand presence</h3>
            <p className="mt-4 max-w-2xl text-slate-300">
              Ready to level up your business with better marketing and a more professional online presence? Let’s talk.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
              />
              <textarea
                placeholder="Tell me about your business"
                className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 md:col-span-2"
              />
            </div>
            <button className="mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Aguilar Media. All rights reserved.</p>
          <p>Built for clean branding, better ads, and real business growth.</p>
        </div>
      </footer>
    </div>
  );
}
