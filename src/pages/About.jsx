// import { MainLayout } from '../components/MainLayout';

// export function About() {
//   const leaders = [
//     { name: 'Alexander West', role: 'Chief Executive Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7dPha4NvCUhDaa-jFUgE-DgUYHyRkwv2kYXqwiwvGxZkL_9dsNymZxn3DEBn4QjyvUqKHW3zX2yTS2Zcwr1RSNHBFmnxiy7W0QrZOBfnPW3wP4_rrqJ61AeOrKxxJ1T8pi4exAns4rVN22nK0294yeoUpFEHoDyR-GgqYub1lNmVlGBqXlMUYo-t4JiLKAwTujfg-1lrmpKy12Y6syx7_Xved7TglpkzJ-o4GSGEcvBa5zQGM2N93WOiqXlnjOr_EZBlhoxs9NQ' },
//     { name: 'Elena Rodriguez', role: 'Chief Technology Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAh29dxxEB-jfl31grwb6pSX_wrPbfoZjAqJE06cOGvtkQiEH4Kkek84DKbOnQ11oenC858CDF8lsvF9L2MkLv-ydjcTUF7Iuv3Fl8feQpqq2mlCVHjFFaB56nWw3VdD1ua4NtSk7eajOXk7J-tnJ_pS1YOoZRSeUZofj59a0Kx3l3SMbxT-f8DZcDIrWAQjA6pfNLswKetygcngoeI-f-MtTxXLpxfczG11Ka5Ed7tsEnQCPrqBoAbV2jzmm1xE4x7fPuAJLaSw' },
//     { name: 'Marcus Chen', role: 'Head of Design', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhFMOXl9DsiNGxsypOe0mMDD_ZIs6nc_B_Z_CO0Z50i3lB2sG2WwZv719TxJSAWiZBwskE8l_YM7G9Kmlg5xeWle3TNuvggMTlgl3kg5SLEjXjDJQiAqPL4-PktCvWDY76h3IxuuSPePdFodyW9btXhWC9gwKCChaHB-8mk9F6X5LGAsKpBGu65E_H80OxpCkxhXCul6P9GrR1AC7fVNgarZ4eRZtSqaPsBZoPLtfWDSGOR3ZSUFZ1wcRyhT2cRPrc9MgD92MVg' },
//     { name: 'Sarah Jenkins', role: 'Chief Operations Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkLIcnDk6q63oe7s-mcSBnEbaXalrGtv62GWhRGuZLR38HS2bhs6gjGksGO4TMIHPmgMePmQepqzH8Ex414JOs-opTbhYCebOGLqTAHDM_pcTAIN06CMIoV0N2ARbpKp8JFycSBzSMjeK8nxkrU86beIA0OXz9NM5WE23fmwZjmFABOCUnQ5l8CWrdCAPFa1N7yT-eCsjwkHE5Tf4rpmjYC_vFUQ4sfXf85Lc7AG8Ua59Yj_j2lA3e_hit7GElRkPByhdmQVCqA' },
//   ];

//   return (
//     <MainLayout>
//       <main className="flex-1 flex flex-col pt-28 pb-20">
//         {/* Hero */}
//         <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6">
//           <div className="absolute inset-0 z-0">
//             <img
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7WTKwHm_6rYLBCdjI476Hhbt-IO650NX2ePFzoNbe7L5rJE2ClPRB_dEY0TIhHW3pV8dNIPS7C0d6mOHy-vCdT2c0Nd6pAQtXu8DSc1z52vUd96rqwp7LK2d3Du8FhkxVEf-8LHoZGhjhII8Bkse-s347H5Bgo2AR--VWm_4xM8AreK2a8nRX4YH2fZi2pGn-7L-W3h5rTd1ACviti9JRf18znS_hU4f7I6xLD4a9c4CjJwv4jfBtHMZl5YSOYRHGpJxmB9vNBQ"
//               alt="Futuristic tech lab background"
//               className="h-full w-full object-cover rounded-2xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/80 via-[color:var(--background)]/70 to-[color:var(--background)]" />
//           </div>
//           <div className="relative z-10 mx-auto max-w-5xl text-center">
//             <span className="mb-6 inline-block rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[color:var(--primary)] backdrop-blur-sm">
//               About TechForth
//             </span>
//             <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-current font-[Manrope]">
//               Pioneering the{' '}
//               <span className="bg-gradient-to-r from-[color:var(--primary)] to-sky-400 bg-clip-text text-transparent">
//                 Next Era
//               </span>
//             </h1>
//             <p className="mx-auto max-w-2xl text-lg muted md:text-xl leading-relaxed">
//               We are architects of the digital future, bridging the gap between human potential and technological
//               possibility through relentless innovation.
//             </p>
//           </div>
//         </section>

//         {/* Vision & Mission */}
//         <section className="py-20">
//           <div className="mx-auto max-w-6xl px-6 space-y-20">
//             {/* Vision */}
//             <div className="grid gap-10 md:grid-cols-2 items-center">
//               <div className="space-y-6">
//                 <div>
//                   <p className="section-label">Philosophy</p>
//                   <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[Manrope]">
//                     Our <span className="text-[color:var(--primary)]">Vision</span>
//                   </h2>
//                 </div>
//                 <p className="text-lg leading-relaxed muted">
//                   To create a world where technology feels indistinguishable from magic. We envision a seamless
//                   ecosystem where hardware serves as an intuitive extension of the human mind, removing barriers
//                   to creativity and productivity.
//                 </p>
//                 <p className="text-lg leading-relaxed muted">
//                   By pushing the boundaries of physics and computation, we are crafting the engines of tomorrow&apos;s
//                   discoveries.
//                 </p>
//               </div>
//               <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-xl group">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOrNTzjh2UiS_RFaoBNemYMGX4iab-9w4h8CR9yAVzHa_GBp_Q5zHyQCI8cxc7AmV8VWCS5XHBHJByoZY5ehRdJmwpoLMMxxy0UY8oCTi6Y1Ioql86-Ec7ll4417BA8hfCZwuTwcq93_YfomqikaNJL6MHtegaU4eeN_sCNSKubeQ8GVWb7MaA2syow2p-8YuEeZCjtcEZ7Y5u1Iq1zhtEaReRwdDH6AZw297HRfN7lMX_EWRyv3Ehbbwe0W8oDAUYzgisCjvQBw"
//                   alt="Visionary workspace"
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)]/80 to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6 text-current flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--primary)] text-white">
//                     <span className="material-symbols-outlined">visibility</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Future Focused</p>
//                     <p className="text-sm muted">Looking beyond the horizon.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mission */}
//             <div className="grid gap-10 md:grid-cols-2 items-center">
//               <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-xl group">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5BFHRuwMVBH5K9VvcPPcVb1N7e1PIBELbazhjhX1wKPyGMnxypbbv1YBhLu2vo640dbUlOuVBeU2kDufOQOYCgruXwGCsDMeu5nYiHJoJox9VSZf-hYTaBxa69atLLhR1GbB3KQ5qpHERq1jN2xEA64R-geQtsKTa0N7JxclqmY70YF0XufjijAtaw-kXldOlwlCAmxa9mErl9AWTVDQbkcBcE8POrmQxLJNMxvS7noa7bm5ljSafft13Qrop4oZ4BSoRnywPw"
//                   alt="Engineering lab"
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)]/80 to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6 text-current flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--primary)] text-white">
//                     <span className="material-symbols-outlined">rocket_launch</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Action Oriented</p>
//                     <p className="text-sm muted">Building today for tomorrow.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-6">
//                 <div>
//                   <p className="section-label">Purpose</p>
//                   <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[Manrope]">
//                     Our <span className="text-[color:var(--primary)]">Mission</span>
//                   </h2>
//                 </div>
//                 <p className="text-lg leading-relaxed muted">
//                   Our mission is to democratize high\u2011performance computing. We engineer premium hardware that
//                   refuses to compromise on power, efficiency, or aesthetics.
//                 </p>
//                 <ul className="space-y-3 text-lg muted">
//                   {['Sustainable innovation practices.', 'User\u2011centric design philosophy.', 'Global accessibility and support.'].map((item) => (
//                     <li key={item} className="flex items-start gap-3">
//                       <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)]/15 text-[color:var(--primary)]">
//                         <span className="material-symbols-outlined text-sm">check</span>
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Leadership */}
//         <section className="py-20">
//           <div className="mx-auto max-w-6xl px-6">
//             <div className="mb-14 text-center">
//               <p className="section-label justify-center">Team</p>
//               <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[Manrope]">
//                 Meet the <span className="text-[color:var(--primary)]">Leadership</span>
//               </h2>
//               <p className="mt-4 text-lg muted max-w-2xl mx-auto">
//                 The visionaries driving TechForth forward, combining decades of experience in engineering, design,
//                 and strategy.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {leaders.map((leader) => (
//                 <div
//                   key={leader.name}
//                   className="group flex flex-col items-center p-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[color:var(--primary)]/5"
//                 >
//                   <div className="relative mb-5 h-36 w-36 overflow-hidden rounded-full border-4 border-[color:var(--border)] transition-all duration-300 group-hover:border-[color:var(--primary)] group-hover:scale-105">
//                     <img src={leader.img} alt={leader.name} className="h-full w-full object-cover" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-current">{leader.name}</h3>
//                   <p className="text-xs font-medium text-[color:var(--primary)] uppercase tracking-wider mt-1">{leader.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </MainLayout>
//   );
// }

// export default About;

import { MainLayout } from "../components/MainLayout";

export function About() {
  const leaders = [
    {
      name: "Alexander West",
      role: "Chief Executive Officer",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7dPha4NvCUhDaa-jFUgE-DgUYHyRkwv2kYXqwiwvGxZkL_9dsNymZxn3DEBn4QjyvUqKHW3zX2yTS2Zcwr1RSNHBFmnxiy7W0QrZOBfnPW3wP4_rrqJ61AeOrKxxJ1T8pi4exAns4rVN22nK0294yeoUpFEHoDyR-GgqYub1lNmVlGBqXlMUYo-t4JiLKAwTujfg-1lrmpKy12Y6syx7_Xved7TglpkzJ-o4GSGEcvBa5zQGM2N93WOiqXlnjOr_EZBlhoxs9NQ",
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Technology Officer",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAh29dxxEB-jfl31grwb6pSX_wrPbfoZjAqJE06cOGvtkQiEH4Kkek84DKbOnQ11oenC858CDF8lsvF9L2MkLv-ydjcTUF7Iuv3Fl8feQpqq2mlCVHjFFaB56nWw3VdD1ua4NtSk7eajOXk7J-tnJ_pS1YOoZRSeUZofj59a0Kx3l3SMbxT-f8DZcDIrWAQjA6pfNLswKetygcngoeI-f-MtTxXLpxfczG11Ka5Ed7tsEnQCPrqBoAbV2jzmm1xE4x7fPuAJLaSw",
    },
    {
      name: "Marcus Chen",
      role: "Head of Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPhFMOXl9DsiNGxsypOe0mMDD_ZIs6nc_B_Z_CO0Z50i3lB2sG2WwZv719TxJSAWiZBwskE8l_YM7G9Kmlg5xeWle3TNuvggMTlgl3kg5SLEjXjDJQiAqPL4-PktCvWDY76h3IxuuSPePdFodyW9btXhWC9gwKCChaHB-8mk9F6X5LGAsKpBGu65E_H80OxpCkxhXCul6P9GrR1AC7fVNgarZ4eRZtSqaPsBZoPLtfWDSGOR3ZSUFZ1wcRyhT2cRPrc9MgD92MVg",
    },
    {
      name: "Sarah Jenkins",
      role: "Chief Operations Officer",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZkLIcnDk6q63oe7s-mcSBnEbaXalrGtv62GWhRGuZLR38HS2bhs6gjGksGO4TMIHPmgMePmQepqzH8Ex414JOs-opTbhYCebOGLqTAHDM_pcTAIN06CMIoV0N2ARbpKp8JFycSBzSMjeK8nxkrU86beIA0OXz9NM5WE23fmwZjmFABOCUnQ5l8CWrdCAPFa1N7yT-eCsjwkHE5Tf4rpmjYC_vFUQ4sfXf85Lc7AG8Ua59Yj_j2lA3e_hit7GElRkPByhdmQVCqA",
    },
  ];

  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-28 pb-20">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7WTKwHm_6rYLBCdjI476Hhbt-IO650NX2ePFzoNbe7L5rJE2ClPRB_dEY0TIhHW3pV8dNIPS7C0d6mOHy-vCdT2c0Nd6pAQtXu8DSc1z52vUd96rqwp7LK2d3Du8FhkxVEf-8LHoZGhjhII8Bkse-s347H5Bgo2AR--VWm_4xM8AreK2a8nRX4YH2fZi2pGn-7L-W3h5rTd1ACviti9JRf18znS_hU4f7I6xLD4a9c4CjJwv4jfBtHMZl5YSOYRHGpJxmB9vNBQ"
              alt="Digital identity technology background"
              className="h-full w-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/80 via-[color:var(--background)]/70 to-[color:var(--background)]" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="mb-6 inline-block rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[color:var(--primary)] backdrop-blur-sm">
              About Techforth
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-current font-[Manrope]">
              Architecting the{" "}
              <span className="bg-gradient-to-r from-[color:var(--primary)] to-sky-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg muted md:text-xl leading-relaxed">
              We design, customize, and implement secure, scalable, and
              inclusive digital identity systems. Bringing digital
              transformation to life through cutting-edge technology and
              world-class expertise.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 space-y-20">
            {/* Vision */}
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  <p className="section-label">Philosophy</p>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[Manrope]">
                    Our{" "}
                    <span className="text-[color:var(--primary)]">Vision</span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed muted">
                  To create a world where secure digital identity is accessible
                  to all. We envision nations empowered by robust, open-source
                  identity infrastructure that enables inclusive access to
                  services and protects citizen privacy.
                </p>
                <p className="text-lg leading-relaxed muted">
                  By leveraging MOSIP and cutting-edge biometric technologies,
                  we are building the foundation for transparent, efficient, and
                  citizen-centric governance.
                </p>
              </div>
              <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-xl group">
                <img
                  src="https://kimi-web-img.moonshot.cn/img/static.wixstatic.com/739a6feb5893fe650e259bc2ae692e7ab9f99c7b.png"
                  alt="National ID infrastructure"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-current flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--primary)] text-white">
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Identity For All</p>
                    <p className="text-sm muted">
                      Inclusive digital infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-xl group">
                <img
                  src="https://kimi-web-img.moonshot.cn/img/www.cardlogix.com/90a62942d80e31eedee2abc781bf254836a2fe4a.jpg"
                  alt="Biometric enrollment technology"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-current flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--primary)] text-white">
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Implementation Focused</p>
                    <p className="text-sm muted">
                      Deploying real-world solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="section-label">Purpose</p>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[Manrope]">
                    Our{" "}
                    <span className="text-[color:var(--primary)]">Mission</span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed muted">
                  Our mission is to democratize digital identity systems. We
                  engineer secure, scalable solutions based on open-source
                  technologies that refuse to compromise on privacy, security,
                  or accessibility.
                </p>
                <ul className="space-y-3 text-lg muted">
                  {[
                    "Proven track record in national-scale projects.",
                    "Deep MOSIP architecture expertise.",
                    "Commitment to knowledge transfer and sustainability.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)]/15 text-[color:var(--primary)]">
                        <span className="material-symbols-outlined text-sm">
                          check
                        </span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <p className="section-label justify-center">Team</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[Manrope]">
                Meet the{" "}
                <span className="text-[color:var(--primary)]">Leadership</span>
              </h2>
              <p className="mt-4 text-lg muted max-w-2xl mx-auto">
                The experts driving Techforth forward, combining decades of
                experience in software architecture, biometric systems, and
                national-scale project delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="group flex flex-col items-center p-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[color:var(--primary)]/5"
                >
                  <div className="relative mb-5 h-36 w-36 overflow-hidden rounded-full border-4 border-[color:var(--border)] transition-all duration-300 group-hover:border-[color:var(--primary)] group-hover:scale-105">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-current">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-medium text-[color:var(--primary)] uppercase tracking-wider mt-1">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default About;
