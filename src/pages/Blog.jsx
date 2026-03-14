import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';

const categories = ['All', 'Featured', 'Intelligence', 'Sustainability', 'Design UI'];

const posts = [
  {
    slug: 'minimalist-computing-future',
    featured: true,
    category: 'Featured',
    readTime: '8 min read',
    title: 'The Future of Minimalist Computing',
    dateLabel: 'Jan 15, 2024',
    badge: 'Editorial',
    description:
      'Exploring how hardware design is shifting towards extreme simplicity and high-performance efficiency. Why less is becoming more in the next era of personal technology.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyip3xdYHbg7pAxlamUn9PmLZofMxeYUSnboL93vutgE4R5qjsSbKlTDKoXnZw3NKwX-BoL1WbljPPrG0ichI5nQRp9iYRTUe4o8-JXQCjG8gCJe4syTkaNWidi95-MWEPPuYglIPrnvd30P0fybznxWur7KuJBL9CeCkBTRob3avGG9PDZUZAFJn0dPt0qfI0ujJA6J-QvnNkI3kJVfMs3GqiakRqUfzYRL1Ak3wzqU46g6HCNdLI6AzyPZNZl-7E1P-AXJSS2Q',
    author: 'Editorial Team',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqpgF4jzvdUHVWo3kT1ogKN6os1ZzJnO43qICeHTzvhgWUzL1nQOr_fof3qS7CBMQr2P-yT9_B25MMUYY8Oj2H4e0zPSU4rJmndRzbo4fMcL6tybzRoI6hmv4s6yZggM06LlmZVt0Wl5_-r_XtCGw_-KL8rMZJnOq4yyQnXBuBuAhfTUlghz2PAvCmPDbfK6PiOj-g39hdCm4kJiZYoHWXJcREBgOENpq6dPxiaDUvUE2sheYSCKxhzcfoye0hRn9ab219AZdZAA',
  },
  {
    slug: 'ai-creative-workflows',
    category: 'Intelligence',
    dateLabel: 'Jan 12, 2024',
    readTime: '6 min read',
    title: 'AI in Creative Workflows: The New Brush',
    description:
      'How generative models are changing design processes for the better, empowering creators rather than replacing them.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDT4ErfofQb4mSjthsHw0aascwN2grQmty5C-wnVrXmwfpqXjnNWB6Rqwvo7V6gdzBxV-U3NK3aatMnvShw9K_SAehno0Cgn8Ige0EpGD5djf6MO4I4fPiH4kHQchL-zWC5u7cMlEOMfC-6cfMY59XI0St_jbpMEzZfrMFSHtcg3X-emIQeKzvO5c6fM7uAs7hxY371R_TWr5z-crEC6OhSne5mWy2kB6sogE_dcAjoaZQ7yhg9abreaUUaNgSkhWwgokBCdJrl5A',
    author: 'David Chen',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqpgF4jzvdUHVWo3kT1ogKN6os1ZzJnO43qICeHTzvhgWUzL1nQOr_fof3qS7CBMQr2P-yT9_B25MMUYY8Oj2H4e0zPSU4rJmndRzbo4fMcL6tybzRoI6hmv4s6yZggM06LlmZVt0Wl5_-r_XtCGw_-KL8rMZJnOq4yyQnXBuBuAhfTUlghz2PAvCmPDbfK6PiOj-g39hdCm4kJiZYoHWXJcREBgOENpq6dPxiaDUvUE2sheYSCKxhzcfoye0hRn9ab219AZdZAA',
  },
  {
    slug: 'hardware-that-lasts-decade',
    category: 'Sustainability',
    dateLabel: 'Jan 10, 2024',
    readTime: '5 min read',
    title: 'Hardware That Lasts a Decade',
    description:
      'The growing trend of repairable and modular electronics aiming to reduce global e-waste.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTSYeiS3vPO8l-ijnm9v-4Tlyap0Y3XwQ8pnAI2n_sryE5_8eDuxFnQfv31X6TpE5eRSem97cDKj8diFvazH2CkktG-9n5XWggCpfxB3rzsQYNpRppSsjCa5FNEZbgcAPAN_0W46juy43JCtcJBxq5jGcDzPJwGSPkrEV5CT138WRtsB59UefrycMHnMPNlmE2-khlnfvXd0gVstU0qBBrUC-490_HkwTdnudWNAMpZkf3OH2zVqmE3OVxDkw6wVBOW79PeADJ1A',
    author: 'Sarah Miller',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFeBzj8CVRWFTEUFg7nvw3xXXbbCY7N96NkEiHDH5otYeAOWCwPtodTG6DVYeimDLm2ecLzCis5fzj6VKtP2L3rfKNVnuxglpRofDVTplYBjQJaclk2_prds5EfOC_n4QUsqEg3wI75QcbfZOJr_6XYL-JtV4GqV2j0FRrcA-tmuYZAUc7EtYreZnnKW7xeOjln6_b3Zz7PJPivDiiNG7dHShkJ7CF9xFabOh0DQq-0CWXYkmzSIWDjgt3SOAUdN_Ts5He1ywLbA',
  },
  {
    slug: 'evolution-inter-ui',
    category: 'Design UI',
    dateLabel: 'Jan 08, 2024',
    readTime: '4 min read',
    title: 'The Evolution of Inter UI',
    description:
      'Why typography matters more than ever in small screens and how fonts define user experience.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiTKBtCUzd40EdLXtXt8CpB-ZRnuti6_MJ3swK1Uj_8NkFW-3g_WeA6WpjkSJW8EeAFLmX3AeiDRymkg78XHiJaFQt1nXOotaDisGOCWn8RyZ5kp6gUydp_fp-RLgeJwaEePqAsUqEbPcvaEuC9c5_Xe2-MnvofNbFVLPwYAyOWaalDbe8XkmA-fGHUQvwv3qn09MXJDUu8BNnLY-Amns-R-quJuwtyB4hxuOmlIxoh2L4BR9M_XLawIV0VjDHX4ukohN6pT5Fuw',
    author: 'Marc Jacobs',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX8bce5zjYSfOeG4QxYn0dlx7heu7HoC0rDc-JnFHRWTPEV3pv3ka96qLe8AyLs6Y9ilYazNGpGzXsE-NhDTD_DFccB7XUetkCKyVcRJ-3Dsvp97rVkCqHEWeobyLaGIQAyuWiKNNMniITSDIAmnaCE-tQfugyvWBa_yNWddcFzTOsVkvti2Z1ZJsz-v_L2LHX_4c77nk9tSSO7RFSuwy_Q8Bm5mOLD7jlY3Jdr6MX2FEu9W88cNtFU17nEf5XeJa0ETqkwv-tZg',
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = posts.find((p) => p.featured);
  const filtered =
    activeCategory === 'All'
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => !p.featured && p.category === activeCategory);

  return (
    <MainLayout>
      <main className="flex-grow">
        {/* ─── Hero Section ─── */}
        <section className="relative overflow-hidden pt-28 pb-16 px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10"
            >
              <div>
                <p className="section-label">Blog</p>
                <h1 className="mt-1 text-4xl md:text-5xl font-extrabold text-current font-[Manrope] tracking-tight">
                  Insights &{' '}
                  <span className="bg-gradient-to-r from-[color:var(--primary)] to-sky-400 bg-clip-text text-transparent">
                    Perspectives
                  </span>
                </h1>
                <p className="muted mt-3 max-w-xl text-base md:text-lg font-light leading-relaxed">
                  Perspectives on digital identity, biometrics, and
                  government-scale technology systems.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-2.5 text-sm font-medium muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 transition-all group"
                >
                  <span className="material-symbols-outlined text-base group-hover:text-[color:var(--primary)] transition-colors">
                    mail
                  </span>
                  Get updates by email
                </Link>
              </motion.div>
            </motion.div>

            {/* ─── Category Filter ─── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${activeCategory === cat
                    ? 'bg-[color:var(--primary)] text-white shadow-lg shadow-[color:var(--primary)]/20'
                    : 'bg-[color:var(--card)] border border-[color:var(--border)] muted hover:text-current hover:border-[color:var(--primary)]/40'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Featured Article ─── */}
        {featured && activeCategory === 'All' && (
          <section className="px-6 sm:px-8 lg:px-10 mb-16">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[color:var(--primary)]/5"
              >
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--primary)] to-transparent opacity-60" />

                <Link
                  to={`/blog/${featured.slug}`}
                  className="flex flex-col md:flex-row gap-0"
                >
                  {/* Image */}
                  <div className="md:w-[55%] relative overflow-hidden">
                    <div
                      className="h-64 sm:h-72 md:h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url(${featured.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[color:var(--card)]/20 md:bg-gradient-to-r md:from-transparent md:to-[color:var(--card)]/60" />
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--primary)] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-[color:var(--primary)]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 sm:p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)]">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        {featured.readTime}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[color:var(--primary)]/40" />
                      <span className="muted normal-case font-normal tracking-normal text-xs">
                        {featured.dateLabel}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-current mb-4 font-[Manrope] group-hover:text-[color:var(--primary)] transition-colors duration-300">
                      {featured.title}
                    </h2>

                    <p className="muted text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed">
                      {featured.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-[color:var(--primary)]/20 ring-offset-2 ring-offset-[color:var(--card)]">
                          <img
                            src={featured.authorAvatar}
                            alt={featured.author}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-current block">
                            {featured.author}
                          </span>
                          <span className="text-[11px] muted">
                            {featured.badge}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] group-hover:gap-3 transition-all">
                        Read article
                        <span className="w-8 h-8 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center group-hover:bg-[color:var(--primary)] group-hover:text-white transition-all">
                          <span className="material-symbols-outlined text-base">
                            arrow_forward
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* ─── Articles Grid ─── */}
        <section className="px-6 sm:px-8 lg:px-10 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-current font-[Manrope]">
                  {activeCategory === 'All'
                    ? 'Recent articles'
                    : activeCategory}
                </h2>
                <p className="muted text-sm mt-1">
                  Daily updates on identity tech, design, and operations.
                </p>
              </div>
              <Link
                to="#"
                className="hidden sm:inline-flex items-center gap-2 text-[color:var(--primary)] text-sm font-semibold hover:gap-3 transition-all"
              >
                View archive
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group flex cursor-pointer flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden hover:border-[color:var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[color:var(--primary)]/5"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="relative block overflow-hidden"
                  >
                    <div className="aspect-[16/10] bg-slate-200/40 dark:bg-slate-800/60">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                    </div>
                    {/* Overlay gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-[color:var(--card)]/80 backdrop-blur-md border border-[color:var(--border)]/50 text-[10px] font-bold uppercase tracking-[0.15em] text-current">
                        {post.category}
                      </span>
                    </div>
                    {/* Read time badge */}
                    <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[color:var(--card)]/80 backdrop-blur-md text-[10px] font-medium muted">
                        <span className="material-symbols-outlined text-xs">
                          schedule
                        </span>
                        {post.readTime}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-[11px] muted">
                      <span className="material-symbols-outlined text-xs">
                        calendar_today
                      </span>
                      <span>{post.dateLabel}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="mb-3 text-lg md:text-xl font-bold text-current leading-snug group-hover:text-[color:var(--primary)] transition-colors duration-300 line-clamp-2"
                    >
                      {post.title}
                    </Link>

                    <p className="muted mb-5 text-sm line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Author + arrow */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-[color:var(--border)]/50">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-[color:var(--border)]">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-semibold text-current">
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <span className="material-symbols-outlined text-5xl muted mb-4 block">
                  article
                </span>
                <p className="text-lg font-semibold text-current mb-1">
                  No articles found
                </p>
                <p className="muted text-sm">
                  No articles match the "{activeCategory}" category yet.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ─── Newsletter ─── */}
        <section className="px-6 sm:px-8 lg:px-10 pb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] px-8 py-12 sm:px-12 sm:py-16 text-center group"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--primary)] to-transparent opacity-50" />
              {/* Ambient glow */}
              <div className="absolute -top-[150px] -left-[150px] w-[400px] h-[400px] bg-[color:var(--primary)]/8 blur-[100px] rounded-full pointer-events-none group-hover:bg-[color:var(--primary)]/15 transition-colors duration-1000" />
              <div className="absolute -bottom-[150px] -right-[150px] w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-1000" />

              <div className="relative z-10 mx-auto max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--primary)]/20 bg-[color:var(--primary)]/5 mb-6">
                  <span className="material-symbols-outlined text-base text-[color:var(--primary)]">
                    notifications_active
                  </span>
                  <span className="text-xs font-semibold text-[color:var(--primary)] uppercase tracking-wider">
                    Newsletter
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-current font-[Manrope] mb-3 tracking-tight">
                  Stay ahead on digital identity
                </h2>
                <p className="muted mb-8 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                  Get a curated roundup of the most important updates in MOSIP,
                  biometrics, and identity infrastructure. No spam — just
                  signal.
                </p>

                <form
                  className="flex flex-col gap-3 sm:flex-row max-w-md mx-auto"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg muted">
                      mail
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/30 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-xl bg-[color:var(--primary)] px-7 py-3.5 text-sm font-bold text-white hover:brightness-110 transition-all shadow-lg shadow-[color:var(--primary)]/20 hover:shadow-[color:var(--primary)]/30 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="mt-4 text-[11px] muted">
                  By subscribing, you agree to receive occasional product and
                  content updates from Techforth. You can unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Blog;
