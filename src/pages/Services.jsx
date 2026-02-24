import { MainLayout } from '../components/MainLayout';

export function Services() {
  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-32 pb-20 px-6 sm:px-10 lg:px-16">
        {/* Overview */}
        <section className="border-b border-slate-200 dark:border-white/10 pb-12 mb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-primary font-medium tracking-wider text-sm uppercase mb-4">
              <span className="h-px w-8 bg-primary" />
              <span>Overview</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-current mb-4">
              Our Capabilities
            </h1>
              <p className="text-lg muted leading-relaxed">
              We engineer the backbone of the digital future. From elastic cloud infrastructure to neural
              processing units, our systems are built for mission‑critical performance.
            </p>
          </div>
        </section>

        {/* Managed Cloud */}
        <section className="border-b border-slate-200 dark:border-white/10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary/80">
                  <span className="material-symbols-outlined">cloud_queue</span>
                  <span className="text-sm font-bold tracking-wider uppercase">Infrastructure</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-current">
                  Managed Cloud
                </h2>
                  <p className="muted text-lg leading-relaxed">
                  Scalable infrastructure designed for enterprise resilience and high availability. We provide a
                  seamless mesh of computing power that adapts to your needs in real‑time.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 dark:border-white/10 pt-6">
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">trending_up</span>
                  <h3 className="text-current font-semibold">Elastic Scaling</h3>
                  <p className="text-sm muted">Dynamic resource allocation based on load.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">security</span>
                  <h3 className="text-current font-semibold">Security First</h3>
                  <p className="text-sm muted">Zero‑trust architecture implementation.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">public</span>
                  <h3 className="text-current font-semibold">Global Edge</h3>
                  <p className="text-sm muted">&lt; 20ms latency worldwide delivery.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl card border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAts1diW-5gED_QTIHsB7OfkqF5hjAXaeeJZtUWSuV6FrkI0vDxVt-idfbygNn5_cRbfPRtB5qKNO6-UylMuX103dn3u2LETbMh180GQpKBLo43bWjz_laCQ7Y7nbEVJqg9C7WYU-B8cJz4vzfgxuQyvnooA3NQjmiQXVOH4dXGwd_Klu5IFtn5egQPqfqKd6Hqctuis2E_orpOf2ig2HkfMEHzH7Fprfg-qc37wHf5sa5iyWAxJJ-TpCeQXRPyJiNgU_Z9DcOmBw')",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:var(--color-card)]/80 to-transparent p-6 flex justify-between items-end">
                  <div>
                    <div className="text-xs text-[color:var(--primary)] font-mono mb-1">SYS.STATUS: ONLINE</div>
                    <div className="text-current font-bold">Node Cluster Alpha</div>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center bg-[color:var(--color-card)]/60 backdrop-blur">
                    <span className="material-symbols-outlined text-current text-sm">add</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neural Networks */}
        <section className="border-b border-slate-200 dark:border-white/10 py-12 bg-slate-100 dark:bg-white/5 rounded-3xl px-4 sm:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-dark border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCO03IVh3mBE5meCNdySRhczWEjj1cB80suDRiQH0LZ7AY8DrNsFbG9m1-v13YBfrr3fPWubQZwZURKDTwa5rseNPJPVl42WDeCnTcas6hA-MOvCeO_pAPYH_iJrwKF_qW2C_GzdJWAyc-6na_APHmVmF1bBQW-kjbR1DWU95r8GkbcsCy-0MdosSw0VVcTzDR9fPDTKDY3W8rRIOU4vylsGhXD5O-6UeWgnkNbYbEBUmk34N1IdrIxmUGSU8qbit4JECpfwFNCA')",
                  }}
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 rounded px-3 py-1">
                  <div className="text-xs text-primary font-mono">AI_MODEL_V4.2</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary/80">
                  <span className="material-symbols-outlined">psychology</span>
                  <span className="text-sm font-bold tracking-wider uppercase">Machine Learning</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-current">
                  Neural Networks
                </h2>
                <p className="muted text-lg leading-relaxed">
                  Advanced models tailored to process your data with precision. Unlock patterns hidden within
                  your data lakes using our proprietary deep learning algorithms.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 dark:border-white/10 pt-6">
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">memory</span>
                  <h3 className="text-current font-semibold">Deep Learning</h3>
                  <p className="text-sm muted">Multi‑layer perception engines.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">insights</span>
                  <h3 className="text-current font-semibold">Predictive Analytics</h3>
                  <p className="text-sm muted">99.8% accurate forecasting.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">bolt</span>
                  <h3 className="text-current font-semibold">Real‑time Ops</h3>
                  <p className="text-sm muted">Automated processing at scale.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Integration */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary/80">
                  <span className="material-symbols-outlined">settings_input_component</span>
                  <span className="text-sm font-bold tracking-wider uppercase">Physical Systems</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-current">
                  Hardware Integration
                </h2>
                <p className="muted text-lg leading-relaxed">
                  Seamless integration of physical systems with digital intelligence. We bridge the gap between
                  software and the tangible world through advanced robotics and IoT ecosystems.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 dark:border-white/10 pt-6">
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">sensors</span>
                  <h3 className="text-current font-semibold">IoT Sensors</h3>
                  <p className="text-sm muted">Smart data collection arrays.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">
                    precision_manufacturing
                  </span>
                  <h3 className="text-current font-semibold">Robotics Control</h3>
                  <p className="text-sm muted">Precision automation &lt; 1mm.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary mb-1 block">developer_board</span>
                  <h3 className="text-current font-semibold">Embedded Systems</h3>
                  <p className="text-sm muted">Optimized custom firmware.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl card border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlYQalu3H-vd63q1752-bZkFuoU7-KWv6jpVFylvQvH_Hu6GbapxaSoSRBTjgWso-G4Mmd8E0MO_89Pmsa79b-jinVVk-3H5CgDQxdXexAQ7KhnwBNWkFap8VDTtR2GqvQCLsMhNeYUOmE68BMVFrBvzOjVG6ZB-IPERPUkrY5gpoUJrWkNsn48KAH8hfXm3FUuab5NLf-urezp3YP10vjpopla-Ott_HmHTfWewXcVPUPhiGIy8MhochsCRMXvxbo3GpRHWYuBg')",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Services;

