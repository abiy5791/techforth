import { MainLayout } from '../components/MainLayout';

export function Landing() {
  return (
    <MainLayout>
      <main className="flex-grow flex flex-col pt-32 pb-12 px-6 sm:px-12 lg:px-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center gap-8 mt-10 md:mt-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full card border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium muted uppercase tracking-widest">
              System Operational
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-current pb-2">
            Powering the Future of <br />
            <span className="text-primary text-glow">Enterprise AI</span>
          </h1>
          <p className="text-lg md:text-xl muted max-w-2xl font-light">
            Experience the next generation of intelligent enterprise solutions designed for scalability,
            security, and peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button
              type="button"
              className="group relative flex items-center justify-center gap-2 bg-[color:var(--primary)] hover:opacity-95 text-[color:var(--primary-foreground)] text-base font-bold h-12 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.12)] w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-current text-base font-bold h-12 px-8 rounded-full transition-all w-full sm:w-auto"
            >
              <span className="material-symbols-outlined text-lg">play_circle</span>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Trusted By Strip (added) */}
        <div className="mt-12 w-full py-8 border-y border-white/5 bg-white/[0.01]">
          <p className="text-center text-xs font-bold muted uppercase tracking-[0.3em] mb-6">
            Trusted by Fortune 500 Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 group cursor-default">
              <span className="material-symbols-outlined text-3xl text-current group-hover:text-primary transition-colors">rocket_launch</span>
              <span className="text-lg font-bold text-current tracking-tight">StellarX</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="material-symbols-outlined text-3xl text-current group-hover:text-emerald-400 transition-colors">database</span>
              <span className="text-lg font-bold text-current tracking-tight">DataFlow</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="material-symbols-outlined text-3xl text-current group-hover:text-purple-400 transition-colors">shield_moon</span>
              <span className="text-lg font-bold text-current tracking-tight">LunarSec</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="material-symbols-outlined text-3xl text-current group-hover:text-orange-400 transition-colors">all_inclusive</span>
              <span className="text-lg font-bold text-current tracking-tight">OmniCorp</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="material-symbols-outlined text-3xl text-current group-hover:text-cyan-400 transition-colors">memory</span>
              <span className="text-lg font-bold text-current tracking-tight">NanoTech</span>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mt-24 md:mt-32 w-full">
          <div className="flex items-center justify-between mb-8 px-2">
            <h3 className="text-xl font-bold text-current">Core Technologies</h3>
            <div className="flex gap-2">
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 muted hover:text-current transition-colors"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 muted hover:text-current transition-colors"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cloud Infrastructure */}
            <article className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-[color:var(--primary)]/50 hover:to-[color:var(--primary)]/10 transition-all duration-300">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative h-full card rounded-xl p-6 flex flex-col gap-6 overflow-hidden">
                <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXylJJ1Up3-hVYwp9kiwn-aTdvDmZ8te66Zbir_2-faLBRzkYR3qdwt_YWHw37_frKOwZIcge_IGgZu8SMYiD2_MQs1EGmaLHEA6U9G0WXLBCTFtIHkMUuxDQ3i0uhS1QuV3rmUa7buv-w2TzoU3XPOcn7wAqBOJRX6bp2T5drqrF377FB8CbghHE_GlO0dLzJ31aKGwoUIkIzGPHFkomXaRKK41TEoj6xZjQ2fWHihfw4lpA8rBk2yooWmOWmp1Sshz05cghdjA')",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-[color:var(--primary)] text-[color:var(--primary)] group-hover:text-[color:var(--primary-foreground)] transition-colors">
                    <span className="material-symbols-outlined text-3xl">cloud_queue</span>
                  </div>
                  <h4 className="text-xl font-bold text-current group-hover:text-[color:var(--primary)] transition-colors">
                    Cloud Infrastructure
                  </h4>
                  <p className="text-sm muted leading-relaxed">
                    Scalable, resilient cloud solutions engineered for the modern business ecosystem with 99.99%
                    uptime.
                  </p>
                </div>
              </div>
            </article>

            {/* Enterprise AI */}
            <article className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-primary/50 hover:to-primary/10 transition-all duration-300">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative h-full card rounded-xl p-6 flex flex-col gap-6 overflow-hidden">
                <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI2ATrs9vC9o0izGkMknrT4BieS3s3-Z2Z-3N16EL_Lr9JGn2WBD_aGZoTLF7Cveh9yzkWwHHowLpKKM1p81x9xaB_LgK7yJNqTxuN4Z5Vbc6TzBV_4T9mTFdCYbA1wEHLjIjwtBERgiKSJoGO_pUL_pb-apOboV9dzPcZPnctv4kaA3dzRK4yhBhUTnlxkWLUzIcA8j0A5H0ZfoVmxnjxb3krjPnwuNsOv4bvRBzv0K2EzFliC4QpEj7N2clP4gru4EU76UWHyg')",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-[color:var(--primary)] text-[color:var(--primary)] group-hover:text-[color:var(--primary-foreground)] transition-colors">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <h4 className="text-xl font-bold text-current group-hover:text-[color:var(--primary)] transition-colors">
                    Enterprise AI
                  </h4>
                  <p className="text-sm muted leading-relaxed">
                    Advanced machine learning models that adapt to your data, providing actionable insights in
                    real-time.
                  </p>
                </div>
              </div>
            </article>

            {/* Cyber Security */}
            <article className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-primary/50 hover:to-primary/10 transition-all duration-300">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative h-full card rounded-xl p-6 flex flex-col gap-6 overflow-hidden">
                <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkUy1z_-cOMQD3uQnZ0ZJ2Y7e0aRCIXt6LeR0lHZWVSRWoeyF0M-0kfDIX6cB5BAm2b8kzMMlZAw9tQ5-hyYPOTgg2VelEoZMeubrdAMxxe9kCt-Nj3v410Gvdqqq-997TvVxsJxc8HW2jsgXV9VZVryF9Q6HyX0LaAqTm2SYxQi5XjbofV8lzJc2MPOjKvLoRoBAuE0ooohUuHk2zhHHy8DM8P5fpja94hMOI2-BqP4v6hz1F94Od3UGrsESdOdXpQLzCyN7M-Q')",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-[color:var(--primary)] text-[color:var(--primary)] group-hover:text-[color:var(--primary-foreground)] transition-colors">
                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                  </div>
                  <h4 className="text-xl font-bold text-current group-hover:text-[color:var(--primary)] transition-colors">
                    Cyber Security
                  </h4>
                  <p className="text-sm muted leading-relaxed">
                    Next-generation protection for your sensitive data with banking-grade encryption standards.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Services for Scale (added) */}
        <div className="mt-12 w-full">
          <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Capabilities</span>
            <h2 className="text-2xl md:text-4xl font-bold text-current mb-2">Services for Scale</h2>
            <p className="muted max-w-2xl mx-auto">Tailored enterprise solutions designed to accelerate digital transformation across every layer of your organization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'analytics', title: 'Data Intelligence', body: 'Transform raw data into strategic assets with our advanced analytics and pipelines.' },
              { icon: 'architecture', title: 'Edge Computing', body: 'Deploy compute closer to data sources for ultra-low latency and peak performance.' },
              { icon: 'hub', title: 'API Ecosystems', body: 'Seamlessly integrate third-party services and internal systems with robust API management.' },
              { icon: 'security_update_good', title: 'Compliance Engine', body: 'Automate regulatory compliance and global risk management at scale.' },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform">{s.icon}</span>
                <h4 className="text-xl font-bold text-current mb-2">{s.title}</h4>
                <p className="text-sm muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products (added) */}
        <div className="mt-16 w-full">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold text-current mb-2">Featured Products</h2>
              <p className="muted">Discover the tools driving innovation in the world's most successful enterprises.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all hover:text-white">
              View All Products <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[0, 1].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-3xl bg-surface-card overflow-hidden mb-6 border border-white/10 relative shadow-2xl">
                  <div className="absolute inset-0 bg-[color:var(--primary)]/0 group-hover:bg-[color:var(--primary)]/10 transition-colors z-10" />
                  <img alt={`product-${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://via.placeholder.com/1200x700.png?text=Product+Preview" />
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">v4.0.2 Stable</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-current mb-2 group-hover:text-primary transition-colors">NexGen Product {i + 1}</h3>
                    <p className="text-sm muted max-w-md">A concise description highlighting key capabilities and target use-cases.</p>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all muted">
                    <span className="material-symbols-outlined">north_east</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical FAQ (added) */}
        <div className="mt-16 w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-current mb-2">Technical FAQ</h2>
            <p className="muted">Common questions from our engineering partners.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How does NexGen integrate with legacy ERP systems?',
                a: 'Our Universal Bridge API enables bidirectional data flow with SAP, Oracle, and custom environments with zero-downtime migrations.'
              },
              {
                q: 'What encryption standards are used for data at rest?',
                a: 'We use AES-256 with rotating keys managed by our KMS and support BYOK for enhanced compliance.'
              },
              {
                q: 'Is the AI model training data kept isolated?',
                a: 'Yes — we process training data in single-tenant containers and never use client data to improve base models.'
              },
              {
                q: 'Can we deploy NexGen on-premise?',
                a: 'Yes — NexGen Edge supports air-gapped, on-premise deployments with feature parity.'
              },
            ].map((f) => (
              <div key={f.q} className="bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                <details className="group">
                  <summary className="flex justify-between items-center font-bold text-current cursor-pointer list-none p-6">
                    <span>{f.q}</span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined text-primary">expand_more</span>
                    </span>
                  </summary>
                  <div className="text-sm muted px-6 pb-6 leading-relaxed">{f.a}</div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach (added) */}
        <section className="mt-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Global Reach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-current mb-4">Impact by the Numbers</h2>
            <p className="muted text-lg mb-6">
              Our infrastructure supports critical operations across the globe, processing petabytes of data daily
              with zero compromise on speed or security.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-current">99.99%</div>
                  <div className="text-sm muted uppercase tracking-wide">Historical Uptime</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-current">500+</div>
                  <div className="text-sm muted uppercase tracking-wide">Enterprise Partners</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative glass-card rounded-2xl p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-8" />
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" />
              <div className="absolute inset-6 rounded-full border border-dashed border-white/20 animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full bg-primary/5 backdrop-blur-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary animate-pulse">language</span>
              </div>
              <div className="absolute top-2 right-6 bg-surface-dark border border-white/10 px-3 py-1 rounded text-xs text-white shadow-lg animate-float">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-1" /> Node SF-01 Active
              </div>
              <div className="absolute bottom-6 left-3 bg-surface-dark border border-white/10 px-3 py-1 rounded text-xs text-white shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-1" /> Node LON-88 Active
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-24 border-t border-white/5 py-16 card cyber-panel">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-current">99.9%</span>
              <span className="text-sm muted uppercase tracking-wide">Uptime Guarantee</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-current">500+</span>
              <span className="text-sm muted uppercase tracking-wide">Enterprise Clients</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-current">24/7</span>
              <span className="text-sm muted uppercase tracking-wide">Expert Support</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-current">150+</span>
              <span className="text-sm muted uppercase tracking-wide">Countries Served</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-8 mb-24 relative overflow-hidden rounded-3xl card border border-white/5 p-8 md:p-16 text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-current mb-6">
            Ready to transform your business?
          </h2>
          <p className="relative z-10 muted text-lg max-w-2xl mx-auto mb-10">
            Join the leading enterprises building the future on NexGen&apos;s robust infrastructure today.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="bg-[color:var(--primary)] hover:opacity-95 text-[color:var(--primary-foreground)] text-base font-bold h-12 px-8 rounded-full transition-all shadow-lg"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              className="card hover:bg-white/5 border border-white/20 text-current text-base font-bold h-12 px-8 rounded-full transition-all"
            >
              Contact Sales
            </button>
          </div>
        </section>

        {/* Footer (from landing) */}
        <footer className="border-t border-white/10 pt-12 pb-8 card">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">token</span>
              <span className="font-bold text-current">NexGen Systems</span>
            </div>
            <div className="flex gap-8 text-sm muted">
              <a href="#" className="hover:text-[color:var(--primary)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[color:var(--primary)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[color:var(--primary)] transition-colors">
                Cookie Settings
              </a>
            </div>
            <div className="text-sm muted">© 2023 NexGen Systems Inc.</div>
          </div>
        </footer>
      </main>
    </MainLayout>
  );
}

export default Landing;

