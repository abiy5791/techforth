import { MainLayout } from '../components/MainLayout';

export function Services() {
  const sections = [
    {
      label: 'Infrastructure',
      icon: 'cloud_queue',
      title: 'Managed Cloud',
      body: 'Scalable infrastructure designed for enterprise resilience and high availability. We provide a seamless mesh of computing power that adapts to your needs in real\u2011time.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAts1diW-5gED_QTIHsB7OfkqF5hjAXaeeJZtUWSuV6FrkI0vDxVt-idfbygNn5_cRbfPRtB5qKNO6-UylMuX103dn3u2LETbMh180GQpKBLo43bWjz_laCQ7Y7nbEVJqg9C7WYU-B8cJz4vzfgxuQyvnooA3NQjmiQXVOH4dXGwd_Klu5IFtn5egQPqfqKd6Hqctuis2E_orpOf2ig2HkfMEHzH7Fprfg-qc37wHf5sa5iyWAxJJ-TpCeQXRPyJiNgU_Z9DcOmBw',
      overlay: { label: 'SYS.STATUS: ONLINE', title: 'Node Cluster Alpha' },
      features: [
        { icon: 'trending_up', title: 'Elastic Scaling', body: 'Dynamic resource allocation based on load.' },
        { icon: 'security', title: 'Security First', body: 'Zero\u2011trust architecture implementation.' },
        { icon: 'public', title: 'Global Edge', body: '< 20ms latency worldwide delivery.' },
      ],
    },
    {
      label: 'Machine Learning',
      icon: 'psychology',
      title: 'Neural Networks',
      body: 'Advanced models tailored to process your data with precision. Unlock patterns hidden within your data lakes using our proprietary deep learning algorithms.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCO03IVh3mBE5meCNdySRhczWEjj1cB80suDRiQH0LZ7AY8DrNsFbG9m1-v13YBfrr3fPWubQZwZURKDTwa5rseNPJPVl42WDeCnTcas6hA-MOvCeO_pAPYH_iJrwKF_qW2C_GzdJWAyc-6na_APHmVmF1bBQW-kjbR1DWU95r8GkbcsCy-0MdosSw0VVcTzDR9fPDTKDY3W8rRIOU4vylsGhXD5O-6UeWgnkNbYbEBUmk34N1IdrIxmUGSU8qbit4JECpfwFNCA',
      overlay: null,
      features: [
        { icon: 'memory', title: 'Deep Learning', body: 'Multi\u2011layer perception engines.' },
        { icon: 'insights', title: 'Predictive Analytics', body: '99.8% accurate forecasting.' },
        { icon: 'bolt', title: 'Real\u2011time Ops', body: 'Automated processing at scale.' },
      ],
    },
    {
      label: 'Physical Systems',
      icon: 'settings_input_component',
      title: 'Hardware Integration',
      body: 'Seamless integration of physical systems with digital intelligence. We bridge the gap between software and the tangible world through advanced robotics and IoT ecosystems.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlYQalu3H-vd63q1752-bZkFuoU7-KWv6jpVFylvQvH_Hu6GbapxaSoSRBTjgWso-G4Mmd8E0MO_89Pmsa79b-jinVVk-3H5CgDQxdXexAQ7KhnwBNWkFap8VDTtR2GqvQCLsMhNeYUOmE68BMVFrBvzOjVG6ZB-IPERPUkrY5gpoUJrWkNsn48KAH8hfXm3FUuab5NLf-urezp3YP10vjpopla-Ott_HmHTfWewXcVPUPhiGIy8MhochsCRMXvxbo3GpRHWYuBg',
      overlay: null,
      features: [
        { icon: 'sensors', title: 'IoT Sensors', body: 'Smart data collection arrays.' },
        { icon: 'precision_manufacturing', title: 'Robotics Control', body: 'Precision automation < 1mm.' },
        { icon: 'developer_board', title: 'Embedded Systems', body: 'Optimized custom firmware.' },
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
              Our Capabilities
            </h1>
            <p className="text-lg muted leading-relaxed">
              We engineer the backbone of the digital future. From elastic cloud infrastructure to neural
              processing units, our systems are built for mission\u2011critical performance.
            </p>
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

