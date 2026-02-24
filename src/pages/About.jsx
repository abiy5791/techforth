import { MainLayout } from '../components/MainLayout';

export function About() {
  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-32 pb-20">
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7WTKwHm_6rYLBCdjI476Hhbt-IO650NX2ePFzoNbe7L5rJE2ClPRB_dEY0TIhHW3pV8dNIPS7C0d6mOHy-vCdT2c0Nd6pAQtXu8DSc1z52vUd96rqwp7LK2d3Du8FhkxVEf-8LHoZGhjhII8Bkse-s347H5Bgo2AR--VWm_4xM8AreK2a8nRX4YH2fZi2pGn-7L-W3h5rTd1ACviti9JRf18znS_hU4f7I6xLD4a9c4CjJwv4jfBtHMZl5YSOYRHGpJxmB9vNBQ"
              alt="Futuristic tech lab background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/70 to-background-dark" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="mb-6 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
              About NexGen
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-current">
              Pioneering the{' '}
              <span className="bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent">
                Next Era
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg muted md:text-xl leading-relaxed">
              We are architects of the digital future, bridging the gap between human potential and technological
              possibility through relentless innovation.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-slate-100 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6 space-y-16">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    Our <span className="text-primary">Vision</span>
                  </h2>
                  <div className="mt-3 h-1 w-20 bg-primary rounded-full" />
                </div>
                <p className="text-lg leading-relaxed muted">
                  To create a world where technology feels indistinguishable from magic. We envision a seamless
                  ecosystem where hardware serves as an intuitive extension of the human mind, removing barriers
                  to creativity and productivity.
                </p>
                <p className="text-lg leading-relaxed muted">
                  By pushing the boundaries of physics and computation, we are crafting the engines of tomorrow&apos;s
                  discoveries.
                </p>
              </div>
              <div className="relative h-[360px] w-full overflow-hidden rounded-3xl card shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOrNTzjh2UiS_RFaoBNemYMGX4iab-9w4h8CR9yAVzHa_GBp_Q5zHyQCI8cxc7AmV8VWCS5XHBHJByoZY5ehRdJmwpoLMMxxy0UY8oCTi6Y1Ioql86-Ec7ll4417BA8hfCZwuTwcq93_YfomqikaNJL6MHtegaU4eeN_sCNSKubeQ8GVWb7MaA2syow2p-8YuEeZCjtcEZ7Y5u1Iq1zhtEaReRwdDH6AZw297HRfN7lMX_EWRyv3Ehbbwe0W8oDAUYzgisCjvQBw"
                  alt="Visionary workspace"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-card)]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-current flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
                    <span className="material-symbols-outlined">visibility</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Future Focused</p>
                    <p className="text-sm muted">Looking beyond the horizon.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="relative h-[360px] w-full overflow-hidden rounded-3xl card shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5BFHRuwMVBH5K9VvcPPcVb1N7e1PIBELbazhjhX1wKPyGMnxypbbv1YBhLu2vo640dbUlOuVBeU2kDufOQOYCgruXwGCsDMeu5nYiHJoJox9VSZf-hYTaBxa69atLLhR1GbB3KQ5qpHERq1jN2xEA64R-geQtsKTa0N7JxclqmY70YF0XufjijAtaw-kXldOlwlCAmxa9mErl9AWTVDQbkcBcE8POrmQxLJNMxvS7noa7bm5ljSafft13Qrop4oZ4BSoRnywPw"
                  alt="Engineering lab"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-card)]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-current flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Action Oriented</p>
                    <p className="text-sm muted">Building today for tomorrow.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    Our <span className="text-primary">Mission</span>
                  </h2>
                  <div className="mt-3 h-1 w-20 bg-primary rounded-full" />
                </div>
                  <p className="text-lg leading-relaxed muted">
                  Our mission is to democratize high‑performance computing. We engineer premium hardware that
                  refuses to compromise on power, efficiency, or aesthetics.
                </p>
                <ul className="space-y-3 text-lg muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)]/20 text-[color:var(--primary)]">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </span>
                    Sustainable innovation practices.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)]/20 text-[color:var(--primary)]">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </span>
                    User‑centric design philosophy.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)]/20 text-[color:var(--primary)]">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </span>
                    Global accessibility and support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Meet the <span className="text-primary">Leadership</span>
              </h2>
              <p className="mt-4 text-lg muted max-w-2xl mx-auto">
                The visionaries driving NexGen forward, combining decades of experience in engineering, design,
                and strategy.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'Alexander West',
                  role: 'Chief Executive Officer',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7dPha4NvCUhDaa-jFUgE-DgUYHyRkwv2kYXqwiwvGxZkL_9dsNymZxn3DEBn4QjyvUqKHW3zX2yTS2Zcwr1RSNHBFmnxiy7W0QrZOBfnPW3wP4_rrqJ61AeOrKxxJ1T8pi4exAns4rVN22nK0294yeoUpFEHoDyR-GgqYub1lNmVlGBqXlMUYo-t4JiLKAwTujfg-1lrmpKy12Y6syx7_Xved7TglpkzJ-o4GSGEcvBa5zQGM2N93WOiqXlnjOr_EZBlhoxs9NQ',
                },
                {
                  name: 'Elena Rodriguez',
                  role: 'Chief Technology Officer',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAh29dxxEB-jfl31grwb6pSX_wrPbfoZjAqJE06cOGvtkQiEH4Kkek84DKbOnQ11oenC858CDF8lsvF9L2MkLv-ydjcTUF7Iuv3Fl8feQpqq2mlCVHjFFaB56nWw3VdD1ua4NtSk7eajOXk7J-tnJ_pS1YOoZRSeUZofj59a0Kx3l3SMbxT-f8DZcDIrWAQjA6pfNLswKetygcngoeI-f-MtTxXLpxfczG11Ka5Ed7tsEnQCPrqBoAbV2jzmm1xE4x7fPuAJLaSw',
                },
                {
                  name: 'Marcus Chen',
                  role: 'Head of Design',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhFMOXl9DsiNGxsypOe0mMDD_ZIs6nc_B_Z_CO0Z50i3lB2sG2WwZv719TxJSAWiZBwskE8l_YM7G9Kmlg5xeWle3TNuvggMTlgl3kg5SLEjXjDJQiAqPL4-PktCvWDY76h3IxuuSPePdFodyW9btXhWC9gwKCChaHB-8mk9F6X5LGAsKpBGu65E_H80OxpCkxhXCul6P9GrR1AC7fVNgarZ4eRZtSqaPsBZoPLtfWDSGOR3ZSUFZ1wcRyhT2cRPrc9MgD92MVg',
                },
                {
                  name: 'Sarah Jenkins',
                  role: 'Chief Operations Officer',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkLIcnDk6q63oe7s-mcSBnEbaXalrGtv62GWhRGuZLR38HS2bhs6gjGksGO4TMIHPmgMePmQepqzH8Ex414JOs-opTbhYCebOGLqTAHDM_pcTAIN06CMIoV0N2ARbpKp8JFycSBzSMjeK8nxkrU86beIA0OXz9NM5WE23fmwZjmFABOCUnQ5l8CWrdCAPFa1N7yT-eCsjwkHE5Tf4rpmjYC_vFUQ4sfXf85Lc7AG8Ua59Yj_j2lA3e_hit7GElRkPByhdmQVCqA',
                },
              ].map((leader) => (
                <div key={leader.name} className="group flex flex-col items-center">
                  <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-slate-800 shadow-xl transition-all duration-300 group-hover:border-[color:var(--primary)] group-hover:scale-105">
                    <img src={leader.img} alt={leader.name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-current">{leader.name}</h3>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mt-1">{leader.role}</p>
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

