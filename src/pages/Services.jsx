import { MainLayout } from '../components/MainLayout';

export function Services() {
  const sections = [
    {
      label: 'Identity Systems',
      icon: 'badge',
      title: 'National ID System Development',
      body: 'Robust, national-scale identity systems that are secure, efficient, and inclusive — tailored to meet the needs of diverse populations. We architect end-to-end solutions from enrollment to credential issuance.',
      image: 'https://kimi-web-img.moonshot.cn/img/static.wixstatic.com/01d850056f8a6b16bc8ec8270d4483ed8c9ebadb.jpg',
      overlay: { label: 'SYSTEM.STATUS: DEPLOYED', title: 'National Identity Platform' },
      features: [
        { icon: 'groups', title: 'Inclusive Design', body: 'Accessibility for diverse populations.' },
        { icon: 'shield', title: 'Secure Architecture', body: 'End-to-end encryption & privacy.' },
        { icon: 'public', title: 'Scalable Infrastructure', body: 'Millions of identities managed.' },
      ],
    },
    {
      label: 'MOSIP Experts',
      icon: 'settings_suggest',
      title: 'MOSIP Customization & Deployment',
      body: 'Recognized experts in adapting the open-source MOSIP platform to local contexts, laws, and specific requirements for client countries. We handle configuration, deployment, and ongoing optimization.',
      image: 'https://kimi-web-img.moonshot.cn/img/cdn.prod.website-files.com/8c4de7acd238e0526a18af1246414bce12521754.jpg',
      overlay: null,
      features: [
        { icon: 'code', title: 'Custom Modules', body: 'Localized feature development.' },
        { icon: 'cloud_done', title: 'Cloud Deployment', body: 'Scalable Kubernetes clusters.' },
        { icon: 'verified', title: 'Compliance Ready', body: 'ID2020 & WCAG standards.' },
      ],
    },
    {
      label: 'Training',
      icon: 'school',
      title: 'Consultancy & Technical Training',
      body: 'Empowering local teams through system operation training, integration programs, and sustainable technical support strategies. We build capacity for long-term operational independence.',
      image: 'https://kimi-web-img.moonshot.cn/img/cioafrica.co/2ddfd7e05adf8a0c71a86d02007b013e9f9c6c20.jpg',
      overlay: null,
      features: [
        { icon: 'menu_book', title: 'Hands-on Training', body: 'Biometric device operation.' },
        { icon: 'support_agent', title: '24/7 Support', body: 'Multi-tier helpdesk system.' },
        { icon: 'sync', title: 'Knowledge Transfer', body: 'Sustainable local capacity.' },
      ],
    },
  ];

  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-28 pb-20 px-6 sm:px-10 lg:px-20">
        {/* Overview */}
        <section className="border-b border-[color:var(--border)] pb-14 mb-14">
          <div className="max-w-4xl">
            <p className="section-label">Overview</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-current mb-4 font-[Manrope]">
              Services We Provide
            </h1>
            <p className="text-lg muted leading-relaxed">
              Empowering nations with secure, scalable, and inclusive digital identity infrastructure. 
              From system architecture to biometric enrollment, we deliver end-to-end identity solutions.
            </p>
          </div>
        </section>

        {/* Modular Innovation Section */}
        <section className="rounded-2xl bg-[color:var(--secondary)]/30 border border-[color:var(--border)] p-8 mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 text-[color:var(--primary)] mb-3">
              <span className="material-symbols-outlined">extension</span>
              <span className="text-sm font-bold tracking-wider uppercase">Modular Innovation</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-current font-[Manrope] mb-3">
              Integrated MOSIP-Compliant Systems
            </h2>
            <p className="muted text-lg leading-relaxed max-w-3xl">
              We develop specialized modules that integrate seamlessly with the MOSIP ecosystem to ensure 
              centralized control and data integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: 'devices', 
                title: 'Device Management (DMS)', 
                body: 'Centralized control for all field hardware.' 
              },
              { 
                icon: 'fingerprint', 
                title: 'Secure Biometric (SBI)', 
                body: 'Fingerprint, face, and iris capture interface.' 
              },
              { 
                icon: 'person_search', 
                title: 'Manual Adjudication', 
                body: 'Human-led verification workflows.' 
              },
              { 
                icon: 'fact_check', 
                title: 'Data Verification (RDVS)', 
                body: 'Cross-checking and validation tools.' 
              },
            ].map((module) => (
              <div key={module.title} className="bg-[color:var(--card)] rounded-xl p-6 border border-[color:var(--border)]">
                <span className="material-symbols-outlined text-[color:var(--primary)] mb-3 text-2xl">
                  {module.icon}
                </span>
                <h3 className="text-current font-semibold mb-2 text-sm">{module.title}</h3>
                <p className="text-sm muted leading-relaxed">{module.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service sections */}
        <div className="space-y-16">
          {sections.map((section, idx) => {
            const imageFirst = idx % 2 === 1;
            return (
              <section
                key={section.title}
                className={`rounded-2xl p-6 sm:p-10 ${
                  idx % 2 === 1
                    ? 'bg-[color:var(--secondary)]/30 border border-[color:var(--border)]'
                    : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Text */}
                  <div className={`space-y-8 ${imageFirst ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[color:var(--primary)]">
                        <span className="material-symbols-outlined">{section.icon}</span>
                        <span className="text-sm font-bold tracking-wider uppercase">{section.label}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-current font-[Manrope]">
                        {section.title}
                      </h2>
                      <p className="muted text-lg leading-relaxed">{section.body}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[color:var(--border)] pt-6">
                      {section.features.map((f) => (
                        <div key={f.title}>
                          <span className="material-symbols-outlined text-[color:var(--primary)] mb-2 block">
                            {f.icon}
                          </span>
                          <h3 className="text-current font-semibold mb-1">{f.title}</h3>
                          <p className="text-sm muted leading-relaxed">{f.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative group ${imageFirst ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--primary)]/15 to-sky-500/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:var(--border)]">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {section.overlay && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:var(--card)]/90 to-transparent p-6 flex justify-between items-end">
                          <div>
                            <div className="text-xs text-[color:var(--primary)] font-mono mb-1">
                              {section.overlay.label}
                            </div>
                            <div className="text-current font-bold">{section.overlay.title}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </MainLayout>
  );
}

export default Services;