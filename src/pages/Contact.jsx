// import { MainLayout } from '../components/MainLayout';

// export function Contact() {
//   const inputClass =
//     'w-full rounded-xl text-current border border-[color:var(--border)] bg-[color:var(--card)] h-12 px-4 transition-all placeholder:muted';

//   return (
//     <MainLayout>
//       <main className="flex-1 px-6 sm:px-10 lg:px-20 pt-28 pb-16">
//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Form */}
//           <section className="flex flex-col gap-8">
//             <div className="space-y-4">
//               <p className="section-label">Contact</p>
//               <h1 className="text-current text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] font-[Manrope]">
//                 Let&apos;s build the{' '}
//                 <span className="text-[color:var(--primary)]">future</span>
//               </h1>
//               <p className="muted text-base md:text-lg max-w-md">
//                 Have a visionary project in mind? Our expert engineering team is ready to scale your ambitions.
//               </p>
//             </div>
//             <form className="flex flex-col gap-5">
//               {[
//                 { label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
//                 { label: 'Business Email', type: 'email', placeholder: 'email@company.com' },
//               ].map((field) => (
//                 <div key={field.label} className="flex flex-col gap-2">
//                   <label className="muted text-sm font-semibold uppercase tracking-wider">
//                     {field.label}
//                   </label>
//                   <input type={field.type} placeholder={field.placeholder} className={inputClass} />
//                 </div>
//               ))}
//               <div className="flex flex-col gap-2">
//                 <label className="muted text-sm font-semibold uppercase tracking-wider">
//                   Project Details
//                 </label>
//                 <textarea
//                   placeholder="Tell us about your technical goals and requirements"
//                   className="w-full rounded-xl text-current border border-[color:var(--border)] bg-[color:var(--card)] min-h-[140px] p-4 transition-all placeholder:muted"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn-primary w-full py-3 text-base rounded-xl group"
//               >
//                 Send Message
//                 <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
//                   arrow_forward
//                 </span>
//               </button>
//             </form>
//           </section>

//           {/* Map */}
//           <section className="flex flex-col gap-4">
//             <div className="flex items-center gap-3">
//               <span className="material-symbols-outlined text-[color:var(--primary)]">location_on</span>
//               <h3 className="text-current text-xl font-bold">Find Us</h3>
//             </div>
//             <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[color:var(--border)]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11841258105!2d38.69557186796921!3d8.963167692998878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1772003421937!5m2!1sen!2set"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </section>
//         </div>
//       </main>
//     </MainLayout>
//   );
// }

// export default Contact;



import { motion } from 'framer-motion';
import { MainLayout } from '../components/MainLayout';

export function Contact() {
  const inputClass =
    'w-full rounded-xl text-current border border-[color:var(--border)] bg-[color:var(--card)] h-12 px-4 transition-all placeholder:muted';

  return (
    <MainLayout>
      <main className="flex-1 px-6 sm:px-10 lg:px-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.section 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <p className="section-label">Contact</p>
              <h1 className="text-current text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] font-[Manrope]">
                Let&apos;s build your{' '}
                <span className="text-[color:var(--primary)]">digital identity</span>
              </h1>
              <p className="muted text-base md:text-lg max-w-md">
                Ready to implement a secure, scalable national ID system? Our MOSIP experts are here to guide your digital transformation journey.
              </p>
            </div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)]">
                <div className="w-10 h-10 rounded-lg bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)]">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div>
                  <p className="text-xs muted uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-current">info@techforth.io</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)]">
                <div className="w-10 h-10 rounded-lg bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)]">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <div>
                  <p className="text-xs muted uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-current">+251 911 234 567</p>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="muted text-sm font-semibold uppercase tracking-wider">
                    Full Name
                  </label>
                  <input type="text" placeholder="Enter your name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="muted text-sm font-semibold uppercase tracking-wider">
                    Organization
                  </label>
                  <input type="text" placeholder="Government/Company name" className={inputClass} />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Business Email
                </label>
                <input type="email" placeholder="email@organization.com" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Project Type
                </label>
                <select className={inputClass + ' cursor-pointer'}>
                  <option value="" className="bg-[color:var(--card)]">Select a service</option>
                  <option value="national-id" className="bg-[color:var(--card)]">National ID System Development</option>
                  <option value="mosip" className="bg-[color:var(--card)]">MOSIP Customization & Deployment</option>
                  <option value="dms" className="bg-[color:var(--card)]">Device Management System (DMS)</option>
                  <option value="sbi" className="bg-[color:var(--card)]">Secure Biometric Interface (SBI)</option>
                  <option value="training" className="bg-[color:var(--card)]">Consultancy & Technical Training</option>
                  <option value="products" className="bg-[color:var(--card)]">Biometric Hardware Products</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="muted text-sm font-semibold uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  placeholder="Tell us about your identity system requirements, population scale, and timeline"
                  className="w-full rounded-xl text-current border border-[color:var(--border)] bg-[color:var(--card)] min-h-[140px] p-4 transition-all placeholder:muted"
                />
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--primary)]/5">
                <span className="material-symbols-outlined text-[color:var(--primary)]">schedule</span>
                <p className="text-sm muted">
                  <span className="text-current font-semibold">Response Time:</span> We typically respond within 24 hours for government and enterprise inquiries.
                </p>
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
          </motion.section>

          {/* Map & Info */}
          <motion.section 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[color:var(--primary)]">location_on</span>
              <h3 className="text-current text-xl font-bold">Our Location</h3>
            </div>
            
            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-[color:var(--border)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.682046776301!2d38.7636113152236!3d9.01079339353799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1772003421937!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Info Card */}
            <div className="p-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)] flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">apartment</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-current mb-1">Techforth Solutions PLC</h4>
                  <p className="text-sm muted leading-relaxed">
                    Bole Sub-City, Addis Ababa<br />
                    Ethiopia
                  </p>
                </div>
              </div>
              
              <div className="border-t border-[color:var(--border)] pt-4">
                <p className="text-sm muted mb-3">
                  <span className="text-current font-semibold">Working Hours:</span>
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="muted mr-2">Mon - Fri:</span>
                    <span className="text-current">8:30 AM - 5:30 PM</span>
                  </div>
                  <div>
                    <span className="muted mr-2">Sat - Sun:</span>
                    <span className="text-current">Closed</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[color:var(--border)] pt-4">
                <p className="text-xs muted uppercase tracking-wider mb-2">Specialized In</p>
                <div className="flex flex-wrap gap-2">
                  {['MOSIP', 'National ID', 'Biometrics', 'DMS', 'SBI'].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[color:var(--primary)]/10 text-[color:var(--primary)] border border-[color:var(--primary)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="p-6 rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--primary)]/5 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[color:var(--primary)]">support_agent</span>
                <h4 className="text-current font-bold">Need Immediate Assistance?</h4>
              </div>
              <p className="text-sm muted mb-4">
                Our technical team is available for urgent government project consultations and MOSIP deployment support.
              </p>
              <a 
                href="mailto:support@techforth.io" 
                className="inline-flex items-center gap-2 text-[color:var(--primary)] font-semibold text-sm hover:gap-3 transition-all"
              >
                Contact Support Team
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </motion.section>
        </div>
      </main>
    </MainLayout>
  );
}

export default Contact;