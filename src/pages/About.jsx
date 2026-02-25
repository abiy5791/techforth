import { MainLayout } from "../components/MainLayout";
import profile1 from "../../assets/images/profile1.jpg";
import profile2 from "../../assets/images/profile2.jpg";
import profile3 from "../../assets/images/profile3.jpg";
import profile4 from "../../assets/images/profile4.jpg";
import bannerImg from "../../assets/images/about-banner.jpg";
import vissionImg from "../../assets/images/vision.jpg";
import missionImg from "../../assets/images/mission.jpg";

export function About() {
  const leaders = [
    {
      name: "Alexander West",
      role: "Chief Executive Officer",
      img: profile1,
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Technology Officer",
      img: profile2,
    },
    {
      name: "Marcus Chen",
      role: "Head of Design",
      img: profile3,
    },
    {
      name: "Sarah Jenkins",
      role: "Chief Operations Officer",
      img: profile4,
    },
  ];

  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-28 pb-20">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <img
              src={bannerImg}
              alt="Digital identity technology background"
              className="h-full w-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/20 via-[color:var(--background)]/60 to-[color:var(--background)]" />
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
                  src={vissionImg}
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
                  src={missionImg}
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
