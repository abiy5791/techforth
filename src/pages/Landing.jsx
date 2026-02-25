import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';

const techCards = [
  {
    icon: 'cloud_queue',
    title: 'Cloud Infrastructure',
    body: 'Scalable, resilient cloud solutions engineered for the modern business ecosystem with 99.99% uptime.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXylJJ1Up3-hVYwp9kiwn-aTdvDmZ8te66Zbir_2-faLBRzkYR3qdwt_YWHw37_frKOwZIcge_IGgZu8SMYiD2_MQs1EGmaLHEA6U9G0WXLBCTFtIHkMUuxDQ3i0uhS1QuV3rmUa7buv-w2TzoU3XPOcn7wAqBOJRX6bp2T5drqrF377FB8CbghHE_GlO0dLzJ31aKGwoUIkIzGPHFkomXaRKK41TEoj6xZjQ2fWHihfw4lpA8rBk2yooWmOWmp1Sshz05cghdjA',
  },
  {
    icon: 'psychology',
    title: 'Enterprise AI',
    body: 'Advanced machine learning models that adapt to your data, providing actionable insights in real-time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBI2ATrs9vC9o0izGkMknrT4BieS3s3-Z2Z-3N16EL_Lr9JGn2WBD_aGZoTLF7Cveh9yzkWwHHowLpKKM1p81x9xaB_LgK7yJNqTxuN4Z5Vbc6TzBV_4T9mTFdCYbA1wEHLjIjwtBERgiKSJoGO_pUL_pb-apOboV9dzPcZPnctv4kaA3dzRK4yhBhUTnlxkWLUzIcA8j0A5H0ZfoVmxnjxb3krjPnwuNsOv4bvRBzv0K2EzFliC4QpEj7N2clP4gru4EU76UWHyg',
  },
  {
    icon: 'verified_user',
    title: 'Cyber Security',
    body: 'Next-generation protection for your sensitive data with banking-grade encryption standards.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkUy1z_-cOMQD3uQnZ0ZJ2Y7e0aRCIXt6LeR0lHZWVSRWoeyF0M-0kfDIX6cB5BAm2b8kzMMlZAw9tQ5-hyYPOTgg2VelEoZMeubrdAMxxe9kCt-Nj3v410Gvdqqq-997TvVxsJxc8HW2jsgXV9VZVryF9Q6HyX0LaAqTm2SYxQi5XjbofV8lzJc2MPOjKvLoRoBAuE0ooohUuHk2zhHHy8DM8P5fpja94hMOI2-BqP4v6hz1F94Od3UGrsESdOdXpQLzCyN7M-Q',
  },
];

const services = [
  { icon: 'analytics', title: 'Data Intelligence', body: 'Transform raw data into strategic assets with our advanced analytics and pipelines.' },
  { icon: 'architecture', title: 'Edge Computing', body: 'Deploy compute closer to data sources for ultra-low latency and peak performance.' },
  { icon: 'hub', title: 'API Ecosystems', body: 'Seamlessly integrate third-party services and internal systems with robust API management.' },
  { icon: 'security_update_good', title: 'Compliance Engine', body: 'Automate regulatory compliance and global risk management at scale.' },
];

const faqs = [
  { q: 'How does NexGen integrate with legacy ERP systems?', a: 'Our Universal Bridge API enables bidirectional data flow with SAP, Oracle, and custom environments with zero-downtime migrations.' },
  { q: 'What encryption standards are used for data at rest?', a: 'We use AES-256 with rotating keys managed by our KMS and support BYOK for enhanced compliance.' },
  { q: 'Is the AI model training data kept isolated?', a: 'Yes — we process training data in single-tenant containers and never use client data to improve base models.' },
  { q: 'Can we deploy NexGen on-premise?', a: 'Yes — NexGen Edge supports air-gapped, on-premise deployments with feature parity.' },
];

const trustedBy = [
  { icon: 'rocket_launch', name: 'StellarX' },
  { icon: 'database', name: 'DataFlow' },
  { icon: 'shield_moon', name: 'LunarSec' },
  { icon: 'all_inclusive', name: 'OmniCorp' },
  { icon: 'memory', name: 'NanoTech' },
];

export function Landing() {
  return (
    <MainLayout>
      <main className="flex-grow flex flex-col pt-28 pb-12 px-6 sm:px-10 lg:px-20">

        {/* ─── Hero ─── */}
        <section className="flex flex-col items-center justify-center text-center gap-7 mt-10 md:mt-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold muted uppercase tracking-widest">
              System Operational
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-current font-[Manrope]">
            Powering the Future of{' '}
            <span className="bg-gradient-to-r from-[color:var(--primary)] to-sky-400 bg-clip-text text-transparent text-glow">
              Enterprise AI
            </span>
          </h1>

          <p className="text-lg md:text-xl muted max-w-2xl font-light leading-relaxed">
            Experience the next generation of intelligent enterprise solutions designed for scalability,
            security, and peak performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
            <Link to="/contact" className="btn-primary text-base h-12 px-8 group">
              <span>Get Started</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <button type="button" className="btn-secondary text-base h-12 px-8">
              <span className="material-symbols-outlined text-lg">play_circle</span>
              <span>Watch Demo</span>
            </button>
          </div>
        </section>

        {/* ─── Trusted By ─── */}
        <section className="mt-16 w-full py-8 border-y border-[color:var(--border)]">
          <p className="text-center text-xs font-bold muted uppercase tracking-[0.3em] mb-6">
            Trusted by Fortune 500 Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 hover:opacity-80 transition-opacity duration-500">
            {trustedBy.map((b) => (
              <div key={b.name} className="flex items-center gap-3 group cursor-default">
                <span className="material-symbols-outlined text-2xl muted group-hover:text-[color:var(--primary)] transition-colors">
                  {b.icon}
                </span>
                <span className="text-base font-bold text-current tracking-tight">{b.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Core Technologies ─── */}
        <section className="mt-24 md:mt-32 w-full">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="section-label">Technology</p>
              <h2 className="text-2xl md:text-4xl font-bold text-current font-[Manrope]">Core Technologies</h2>
            </div>
            <div className="flex gap-2">
              {['arrow_back', 'arrow_forward'].map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className="w-10 h-10 rounded-xl border border-[color:var(--border)] flex items-center justify-center muted hover:text-current hover:bg-[color:var(--muted)]/50 transition-all"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techCards.map((card) => (
              <article
                key={card.title}
                className="group relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden hover:border-[color:var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[color:var(--primary)]/5"
              >
                {/* Image */}
                <div className="w-full aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] to-transparent z-10" />
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)] group-hover:bg-[color:var(--primary)] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-current group-hover:text-[color:var(--primary)] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm muted leading-relaxed">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Services for Scale ─── */}
        <section className="mt-24 w-full">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Our Capabilities</p>
            <h2 className="text-2xl md:text-4xl font-bold text-current font-[Manrope] mb-3">Services for Scale</h2>
            <p className="muted max-w-2xl mx-auto">
              Tailored enterprise solutions designed to accelerate digital transformation across every layer of your organization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[color:var(--primary)]/5"
              >
                <div className="w-12 h-12 rounded-xl bg-[color:var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[color:var(--primary)] transition-colors">
                  <span className="material-symbols-outlined text-2xl text-[color:var(--primary)] group-hover:text-white transition-colors">
                    {s.icon}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-current mb-2">{s.title}</h4>
                <p className="text-sm muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Featured Products ─── */}
        <section className="mt-24 w-full">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div className="max-w-xl">
              <p className="section-label">Showcase</p>
              <h2 className="text-2xl md:text-4xl font-bold text-current font-[Manrope] mb-2">Featured Products</h2>
              <p className="muted">Discover the tools driving innovation in the world&apos;s most successful enterprises.</p>
            </div>
            <Link
              to="/products"
              className="text-[color:var(--primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm"
            >
              View All Products
              <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-5 border border-[color:var(--border)] relative shadow-lg">
                  <div className="absolute inset-0 bg-[color:var(--primary)]/0 group-hover:bg-[color:var(--primary)]/8 transition-colors z-10" />
                  <img
                    alt={`product-${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[color:var(--card)]/80 backdrop-blur-md text-current text-xs font-bold px-3 py-1.5 rounded-full border border-[color:var(--border)]">
                      v4.0.2 Stable
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-current mb-1.5 group-hover:text-[color:var(--primary)] transition-colors">
                      NexGen Product {i + 1}
                    </h3>
                    <p className="text-sm muted max-w-md">
                      A concise description highlighting key capabilities and target use-cases.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex-shrink-0 w-11 h-11 rounded-xl border border-[color:var(--border)] flex items-center justify-center muted group-hover:bg-[color:var(--primary)] group-hover:text-white group-hover:border-[color:var(--primary)] transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">north_east</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="mt-24 w-full">
          <div className="text-center mb-10">
            <p className="section-label justify-center">Support</p>
            <h2 className="text-2xl md:text-4xl font-bold text-current font-[Manrope] mb-2">Technical FAQ</h2>
            <p className="muted">Common questions from our engineering partners.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden hover:border-[color:var(--primary)]/30 transition-colors"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-current cursor-pointer list-none p-5 text-[15px]">
                    <span>{f.q}</span>
                    <span className="material-symbols-outlined text-[color:var(--primary)] transition-transform group-open:rotate-180 ml-4 flex-shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="text-sm muted px-5 pb-5 leading-relaxed">{f.a}</div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="mt-24 w-full">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-current font-[Manrope] mb-3">Launch in 3 Steps</h2>
            <p className="muted text-lg max-w-xl mx-auto">
              From first contact to full deployment — we get you operational fast.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-gradient-to-r from-[color:var(--primary)]/40 via-[color:var(--primary)] to-[color:var(--primary)]/40" />

            {[
              {
                step: '01',
                icon: 'handshake',
                title: 'Discovery & Audit',
                body: 'We map your existing infrastructure, identify bottlenecks, and define a tailored migration blueprint — zero assumptions, all data.',
                tag: '1–2 weeks',
              },
              {
                step: '02',
                icon: 'construction',
                title: 'Build & Integrate',
                body: 'Our engineers spin up your dedicated environment, wire APIs, configure security policies, and run load testing at scale.',
                tag: '2–4 weeks',
              },
              {
                step: '03',
                icon: 'rocket_launch',
                title: 'Launch & Optimize',
                body: 'Go live with 24/7 monitoring. We continuously tune performance, push updates, and scale resources as you grow.',
                tag: 'Ongoing',
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Step card */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[color:var(--primary)]/5 hover:-translate-y-1 h-full">
                  {/* Step number bubble */}
                  <div className="relative mb-6">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-[color:var(--primary)]/10 flex items-center justify-center group-hover:bg-[color:var(--primary)] transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl text-[color:var(--primary)] group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                    </div>
                    {/* Floating step badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[color:var(--primary)] text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-[color:var(--primary)]/25">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-current mb-2 font-[Manrope]">{item.title}</h3>
                  <p className="text-sm muted leading-relaxed mb-5">{item.body}</p>

                  {/* Timeline badge */}
                  <div className="mt-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[color:var(--border)] bg-[color:var(--primary)]/5 text-[color:var(--primary)]">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="text-xs font-bold">{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="mt-24 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '500+', label: 'Enterprise Clients' },
              { value: '24/7', label: 'Expert Support' },
              { value: '150+', label: 'Countries Served' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-current">{s.value}</span>
                <span className="text-sm muted uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-8 mb-8 relative overflow-hidden rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-10 md:p-20 text-center group">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[color:var(--primary)] to-transparent opacity-50" />

          {/* Ambient glow orbs */}
          <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-[color:var(--primary)]/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-[color:var(--primary)]/20 transition-colors duration-1000" />
          <div className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-colors duration-1000" />

          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold text-current font-[Manrope] mb-6 tracking-tight">
            Ready to transform your business?
          </h2>
          <p className="relative z-10 muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the leading enterprises building the future on NexGen&apos;s robust infrastructure today.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[color:var(--primary)] hover:brightness-110 text-white text-lg font-bold h-14 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[color:var(--foreground)]/5 hover:bg-[color:var(--foreground)]/10 border border-[color:var(--border)] text-current text-lg font-bold h-14 px-10 rounded-full transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Landing;
