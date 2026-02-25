import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import nationa_lid from '../../assets/images/national-id.jpg';
import mosip_customization from '../../assets/images/mosip-customization.jpg';
import secure_biometrics from '../../assets/images/secure-biometrics.jpg';
import Iris_Scanners from '../../assets/images/iris-scanners.jpg';
import Fingerprint_Scanners from '../../assets/images/fingerprint-scanners.jpg';
const techCards = [
  {
    icon: 'badge',
    title: 'National ID Systems',
    body: 'Robust, national-scale identity systems that are secure, efficient, and inclusive — tailored to meet the needs of diverse populations.',
    image:
      nationa_lid,
  },
  {
    icon: 'settings_suggest',
    title: 'MOSIP Customization',
    body: 'Expert deployment and customization of the open-source MOSIP platform, adapted to local contexts, laws, and specific requirements.',
    image:
      mosip_customization,
  },
  {
    icon: 'verified_user',
    title: 'Secure Biometrics',
    body: 'Next-generation biometric authentication with banking-grade encryption, supporting fingerprint, face, and iris recognition.',
    image:
      secure_biometrics,
  },
];

const services = [
  { icon: 'devices', title: 'Device Management (DMS)', body: 'Centralized registration, monitoring, and control of all biometric field devices.' },
  { icon: 'fingerprint', title: 'Secure Biometric (SBI)', body: 'MOSIP-compliant interface for fingerprint, face, and iris capture devices.' },
  { icon: 'person_search', title: 'Manual Adjudication', body: 'Human-led verification workflows for complex identity cases.' },
  { icon: 'fact_check', title: 'Data Verification (RDVS)', body: 'Cross-checking and validation tools for registration data integrity.' },
];

const faqs = [
  { q: 'What is MOSIP and why does it matter?', a: 'MOSIP (Modular Open Source Identity Platform) is an open-source platform for building national digital identity systems. It ensures vendor independence, cost efficiency, and compliance with international standards.' },
  { q: 'How does Techforth ensure data security?', a: 'We implement end-to-end encryption, zero-trust architecture, and strict access controls. All biometric data is handled according to international privacy standards and local regulations.' },
  { q: 'Can you customize solutions for specific countries?', a: 'Yes — we specialize in adapting MOSIP and our modules to local contexts, languages, legal frameworks, and specific population needs.' },
  { q: 'What training do you provide for local teams?', a: 'We offer comprehensive capacity-building including system operation, device management, integration strategies, and ongoing technical support to ensure sustainability.' },
];

const trustedBy = [
  { icon: 'account_balance', name: 'Ethiopia NID' },
  { icon: 'fingerprint', name: 'Integrated Bio' },
  { icon: 'security', name: 'Bio Rugged' },
  { icon: 'public', name: 'MOSIP' },
  { icon: 'handshake', name: 'ID2020' },
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
              MOSIP Compliant
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-current font-[Manrope]">
            Empower Identity Through{' '}
            <span className="bg-gradient-to-r from-[color:var(--primary)] to-sky-400 bg-clip-text text-transparent text-glow">
              Innovative Technology
            </span>
          </h1>

          <p className="text-lg md:text-xl muted max-w-2xl font-light leading-relaxed">
            We design, customize, and implement secure, scalable, and inclusive digital identity systems. 
            Bringing digital transformation to life through cutting-edge biometric technology.
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
            Trusted by Governments & Industry Leaders
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
              <h2 className="text-2xl md:text-4xl font-bold text-current font-[Manrope]">Core Solutions</h2>
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
                  <div className="absolute inset-0 z-10" />
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
            <h2 className="text-2xl md:text-4xl font-bold text-current font-[Manrope] mb-3">Integrated MOSIP-Compliant Systems</h2>
            <p className="muted max-w-2xl mx-auto">
              We develop specialized modules that integrate seamlessly with the MOSIP ecosystem to ensure centralized control and data integrity.
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
              <p className="muted">Production-ready, MOSIP-compliant biometric devices and tools tailored to real-world identity registration challenges.</p>
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
            {[
              {
                title: 'Iris Scanners',
                desc: 'Advanced biometric devices for MOSIP-compliant digital identity systems, accurately verifying identity through unique iris patterns.',
                img: Iris_Scanners
              },
              {
                title: 'Fingerprint Scanners',
                desc: 'High-precision fingerprint capture devices that verify identity by matching unique ridge patterns for secure enrollment.',
                img: Fingerprint_Scanners
              }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-5 border border-[color:var(--border)] relative shadow-lg">
                  <div className="absolute inset-0 bg-[color:var(--primary)]/0 group-hover:bg-[color:var(--primary)]/8 transition-colors z-10" />
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={product.img}
                  />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[color:var(--card)]/80 backdrop-blur-md text-current text-xs font-bold px-3 py-1.5 rounded-full border border-[color:var(--border)]">
                      MOSIP Compliant
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-current mb-1.5 group-hover:text-[color:var(--primary)] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm muted max-w-md">
                      {product.desc}
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
            <p className="muted">Common questions about our digital identity solutions.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-current font-[Manrope] mb-3">Implementation in 3 Steps</h2>
            <p className="muted text-lg max-w-xl mx-auto">
              From discovery to deployment — we get your national identity system operational fast.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-gradient-to-r from-[color:var(--primary)]/40 via-[color:var(--primary)] to-[color:var(--primary)]/40" />

            {[
              {
                step: '01',
                icon: 'handshake',
                title: 'Discovery & Planning',
                body: 'We assess your requirements, map existing infrastructure, and design a tailored MOSIP deployment blueprint aligned with local regulations.',
                tag: '1–2 weeks',
              },
              {
                step: '02',
                icon: 'construction',
                title: 'Customization & Integration',
                body: 'Our engineers customize MOSIP modules, integrate biometric devices, configure DMS/SBI systems, and conduct comprehensive testing.',
                tag: '4–8 weeks',
              },
              {
                step: '03',
                icon: 'rocket_launch',
                title: 'Deployment & Training',
                body: 'Go live with 24/7 monitoring. We train your local teams on system operation, device management, and ongoing maintenance.',
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
              { value: '10+', label: 'Projects Delivered' },
              { value: '4+', label: 'Industry Awards' },
              { value: '24/7', label: 'Technical Support' },
              { value: '100%', label: 'MOSIP Compliant' },
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
            Ready to transform digital identity?
          </h2>
          <p className="relative z-10 muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join governments and institutions building the future of secure, inclusive identity systems with Techforth.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[color:var(--primary)] hover:brightness-110 text-white text-lg font-bold h-14 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1"
            >
              Start Your Project
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