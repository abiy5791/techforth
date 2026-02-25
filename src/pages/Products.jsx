import { MainLayout } from '../components/MainLayout';

const products = [
  {
    name: 'Quantum OS License',
    type: 'Software',
    price: '$299.00',
    description: "Single user license for the world's most advanced operating system.",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwwFtquhD9i88lSZg0RDV00ihsjdf7xTgPfppBlYGjOiLBP6LaY7mbHKx62dPhJjb_LXQi2TS7u3ofav3l0BK3YJi6Vx4qKTQLWfMxQ_68KBfwywkA9vOV9-IU_n6gckS01SWo3TR4fmLsHvAGIGjK0KaqnVqAq2gwmekcyXzAVuuxR6fmgK2uTn3JPSkLMAOeQ5nXcB-JhGOxKfefFctaC7kE4cz10WGbKjTXdne7GS0weUVMRbO_Yu7QGc3L9Tww2ueJcTLTRw')",
  },
  {
    name: 'Neural Processor Unit',
    type: 'Hardware',
    price: '$899.00',
    description: 'Hardware acceleration for AI models. 500 TOPS performance.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD2YVNFnNblEgsXNbTApshYNWgZMtohU7vsm3FslRIu_8ejY13NcQCNirr8fqdb1v6n7_Wg70JIN6Fcz0tuiBRnKWfYDuTKPGgqzw8V4Y0wZ6ei3XAZu519EJZ2SdcEFH1ELaAUjaqb6EGVr0F2l9HCbJGBWJuVtfYDHzkwbPQ1uBrxbn2pGqqIeAg5rklRJDcgfYnP8c5CpVMXSEb60RA3wfqpmZS5VU3ql-RZ09nfZw5lOUM071ZN5jUyTsk513oIamy5F4VGQ')",
  },
  {
    name: 'Liquid Cooling Kit',
    type: 'Hardware',
    price: '$149.00',
    description: 'Advanced thermal management for high-performance rigs.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVQkN0z-ARDP1B9GQvvTTteDe3NhsfQ7A8Gv7RP9ql-jhIsMh_2iWoPFSWxLV6mPlQAvEkJh9ZfuDeFN70-CQMyO7SbX6ggMSdwJykmJ3f5lnTgdU4-Jm8QY8wgLy4gNx0f8PHaTEJJE1VTi8h_6ksMkgkEJLHVV9c4o48_hJGe5sFec2PsMoCJZ_cTvpL-joWCTuFsyuLcg9qHe-v6sFB_o_ihOjytGu84exGtXIUpbjmGPiQc0raNEFW3EKK3pk6Ubw72GtSEQ')",
  },
  {
    name: 'Titan Portable SSD',
    type: 'Hardware',
    price: '$429.00',
    description: '4TB rugged storage with encryption.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOsfnyjzZeRKjyhM8SP8MYUdS_mJru9sZ0zVPrcarh_oQianXWkGob5QDalbPFbH5FwZbYsbbV41aG0jPeqrLZxBGKPoj29PF4QRItKQogjuu73wJmB7AyfHPgczrleh5I6oxfeFFEPIX-Mmpw2-thL-itBItWA8LQmqiQSM80PiSKir2KuSoP-vPdeuxtZlQ8OY1HhsK5GPfEOt2GJrZ2f1ydEZxOR5eLQ13SFHGtZcgRusLSGs51Zs976u2rEChescWYaOBuig')",
  },
];

export function Products() {
  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-28 pb-16 px-6 sm:px-10 lg:px-20">
        {/* Hero / Featured Product */}
        <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 md:p-10 mb-14 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[color:var(--primary)]/10 text-[color:var(--primary)] text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider border border-[color:var(--primary)]/20">
                  Catalog
                </span>
                <span className="muted text-xs font-medium tracking-wide">Enterprise Hardware &amp; Software</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-current tracking-tight mb-4 font-[Manrope]">
                  Aether Product Catalog
                </h1>
                <p className="muted text-base md:text-lg leading-relaxed max-w-xl">
                  Curated systems, components, and licenses engineered for high‑performance data centers,
                  AI workloads, and mission‑critical infrastructure.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Categories', value: 'Hardware, Software' },
                  { label: 'Availability', value: 'Global, 24/7' },
                  { label: 'Lead Time', value: '< 5 business days' },
                  { label: 'Support', value: 'Enterprise SLA' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="muted uppercase tracking-wide text-xs mb-1">{item.label}</p>
                    <p className="text-current font-mono text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl overflow-hidden relative border border-[color:var(--border)]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDczTlNXMtHvvfas4nqNByjFySnhKZpmLgxbqdqcn6XR7F9wSEXr0Q8rSvEN7n_5u8thoCQOW_M6kztO8uLVoDKCy-pd0AJQ22ns9Xw90BOSDaDkyGVE1tbJ5Boe9pPliAJiiz8DZzPL26RAarIUINOnG6HOVSC36yuMX5K1HkhaGxWTUoy8ZTQlt-iwxmv-mBbMR4wFf0tNHFJ0sjaUkoPQfxb6cwpX64KTg8C7B53rr0inQpRWl2PahjLD9T7DJlUfSNh_dM3EA')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-[color:var(--card)]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-[color:var(--primary)] font-mono mb-1">FLAGSHIP</p>
                  <p className="text-current font-semibold">Aether Core Server X1</p>
                  <p className="muted text-xs mt-1">
                    Quantum‑ready architecture with integrated liquid cooling and 400GbE networking.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-current font-bold text-lg">$4,999</p>
                  <p className="muted text-xs">per unit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-label">Catalog</p>
              <h2 className="text-2xl font-bold text-current tracking-tight font-[Manrope]">
                Featured Peripherals &amp; Licenses
              </h2>
            </div>
            <div className="flex gap-2">
              {['filter_list', 'sort'].map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className="p-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] muted hover:text-current hover:bg-[color:var(--muted)]/50 transition-all"
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 hover:border-[color:var(--primary)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[color:var(--primary)]/5 flex flex-col"
              >
                <div className="aspect-square w-full rounded-xl mb-4 overflow-hidden relative border border-[color:var(--border)]">
                  {product.type === 'Software' && (
                    <div className="absolute top-2 right-2 z-10 bg-[color:var(--primary)] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {product.type}
                    </div>
                  )}
                  <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: product.image }}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-current font-semibold text-lg mb-1 group-hover:text-[color:var(--primary)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="muted text-sm mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-[color:var(--border)]">
                    <span className="text-current font-bold">{product.price}</span>
                    <button
                      type="button"
                      className="text-[color:var(--primary)] p-2 rounded-xl hover:bg-[color:var(--primary)]/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Products;

