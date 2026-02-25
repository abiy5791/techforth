import { MainLayout } from '../components/MainLayout';

export function Contact() {
  const inputClass =
    'w-full rounded-xl text-current border border-[color:var(--border)] bg-[color:var(--card)] h-12 px-4 transition-all placeholder:muted';

  return (
    <MainLayout>
      <main className="flex-1 px-6 sm:px-10 lg:px-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <section className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="section-label">Contact</p>
              <h1 className="text-current text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] font-[Manrope]">
                Let&apos;s build the{' '}
                <span className="text-[color:var(--primary)]">future</span>
              </h1>
              <p className="muted text-base md:text-lg max-w-md">
                Have a visionary project in mind? Our expert engineering team is ready to scale your ambitions.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
                { label: 'Business Email', type: 'email', placeholder: 'email@company.com' },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-2">
                  <label className="muted text-sm font-semibold uppercase tracking-wider">
                    {field.label}
                  </label>
                  <input type={field.type} placeholder={field.placeholder} className={inputClass} />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  placeholder="Tell us about your technical goals and requirements"
                  className="w-full rounded-xl text-current border border-[color:var(--border)] bg-[color:var(--card)] min-h-[140px] p-4 transition-all placeholder:muted"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-3 text-base rounded-xl group"
              >
                Send Message
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </section>

          {/* Map */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[color:var(--primary)]">location_on</span>
              <h3 className="text-current text-xl font-bold">Find Us</h3>
            </div>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[color:var(--border)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11841258105!2d38.69557186796921!3d8.963167692998878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1772003421937!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

export default Contact;

