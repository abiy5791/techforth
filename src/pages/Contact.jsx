import { MainLayout } from '../components/MainLayout';

export function Contact() {
  return (
    <MainLayout>
      <main className="flex-1 px-6 sm:px-10 lg:px-20 py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <section className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-current text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em]">
                Let&apos;s build the <span className="text-primary">future</span>
              </h1>
              <p className="muted text-base md:text-lg max-w-md">
                Have a visionary project in mind? Our expert engineering team is ready to scale your ambitions.
              </p>
            </div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl text-current border border-[color:var(--color-border)] dark:border-primary/20 bg-white dark:bg-card-dark focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)] h-12 px-4 transition-all placeholder:text-[color:var(--color-muted-foreground)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full rounded-xl text-current border border-[color:var(--color-border)] dark:border-primary/20 bg-white dark:bg-card-dark focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)] h-12 px-4 transition-all placeholder:text-[color:var(--color-muted-foreground)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  placeholder="Tell us about your technical goals and requirements"
                  className="w-full rounded-xl text-current border border-[color:var(--color-border)] dark:border-primary/20 bg-white dark:bg-card-dark focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)] min-h-[140px] p-4 transition-all placeholder:text-[color:var(--color-muted-foreground)]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] font-black rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </section>

          {/* Locations / Labs */}
          <section className="flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">public</span>
                <h3 className="text-current text-xl font-bold">Global Support</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-primary/10 hover:border-[color:var(--primary)]/40 transition-colors">
                  <h4 className="text-primary font-bold mb-1">San Francisco</h4>
                  <p className="text-sm muted leading-relaxed">
                    101 Tech Plaza, SOMA
                    <br />
                    CA 94103, USA
                    <br />
                    <span className="text-xs muted mt-2 block">+1 (555) 012-3456</span>
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-primary/10 hover:border-[color:var(--primary)]/40 transition-colors">
                  <h4 className="text-primary font-bold mb-1">London</h4>
                  <p className="text-sm muted leading-relaxed">
                    24 Silicon Way, Shoreditch
                    <br />
                    EC1V 9NR, UK
                    <br />
                    <span className="text-xs muted mt-2 block">+44 20 7946 0123</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">science</span>
                <h3 className="text-current text-xl font-bold">Innovation Labs</h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="group relative overflow-hidden rounded-xl h-44 w-full card">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUSDA8vx7NVUeDRf_Ek4wsuX0obEOhXpWzYhRe0A_Mdw1X4vQXlG7Em9KObrTZMFw9YlX0uyAvhRdXVyaSrxifR6vx-Y6p9gqoTXwSX_81QJKMk1OdnqNJP88JNTdt5bnch5gxIfCbkl70qSmQT1bWQguohZ1mVpY4xGCysQurbFV5is1JB-Kqjst2jQrNnP40pmVSGwnaOT40OR6xvyIQALq7hvreh1t14aI-UnNooU5tX7Dljsh0MGCL45jbyHpAfXVsUc_K4Q')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-card)]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h4 className="text-current font-bold text-lg">Tokyo R&amp;D Hub</h4>
                    <p className="text-[color:var(--primary)] text-sm font-medium">Quantum Computing &amp; AI</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">
                      Active Now
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl h-44 w-full card">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWMKA9wmLmhxBOrhgyvKQnIZSDjOTGCagl98scKZ5m2nzOaOgfYLNLAld88zuw6vPGE3FQsDMvKJOb7iDYr2GwmZf-OWjT8rISO1t1Qt7aYkYRO8xSmVu8Q9L6hGGlWOPmEEft19yina-kZw67a9S9PU3lkkAut6VxQu305bluBba0RfnIoz81XMZ5DyVoTwZcx_Aj4x4P0g0wakPPoDAML8U0TiwCgxQhQcKA-Ub-QZtxXJrRalt0U46xyflh1adOfDr6jIs2xw')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h4 className="text-current font-bold text-lg">Berlin Edge Center</h4>
                    <p className="text-[color:var(--primary)] text-sm font-medium">Cybersecurity &amp; IoT</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

export default Contact;

