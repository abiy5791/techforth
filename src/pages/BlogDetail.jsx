import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MainLayout } from '../components/MainLayout';

const posts = [
  {
    slug: 'minimalist-computing-future',
    category: 'Artificial Intelligence',
    title: 'The Evolution of Generative AI in 2024: Beyond the Hype',
    date: 'Oct 24, 2023',
    readTime: '8 min read',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC38yniIqrRTMHGU0ma8Dhuild_9Vrm69ikIJW97X7p9X9EMikGt2R0pmY94xKED0WDReSdhu39gnuI5Y0aYjIlIKRh7cx0Th5gN0-MU2TAEh73dIvWXt1jNCkEwwrh5HfrhuqA7jlkGtTkhb8i5REfHwhyMGfn3tC0xsy1vwwuxAjJ80oPxFyvrcaZMdgsjcUOyilimUIRhadFwy3GdG9pvcn724MST0vcYd39Zk0MUMTzhZLR4bn_fT5AsLc4w9mFzZZHWYgkOQ',
    author: {
      name: 'Alex Thorne',
      role: 'Senior AI Researcher',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB22LvL3lEpMLMmgAAAMg150_29vUePi-l0SyRF19JJzjT90tii1FWc0MhHSpQl0WHP_rHdQlaIbbrdJv102vXEvvIPJf7iUmQjXvMGBJYe9lkyjfcPIDgqqE-Px6MyB8XUZJMGLSmS-HrB7wP0dbeG2ySA_YyNBJOJJANIXLpQPucXjjofKMNcUHoWPIxF9coS3eSdT5cyHfPWEIxXvEobDcXhjd49TUSGQAUVtJeP-S3a18VtUCec4GAzfApQUOxmz9nOHbF75A',
    },
    tags: ['GenerativeAI', 'Technology', 'FutureTech', 'Innovation'],
  },
];

const related = [
  {
    slug: 'ai-powered-defense-systems',
    category: 'Cybersecurity',
    title: 'Securing the Mesh: AI-Powered Defense Systems',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkoFBWjyLLsKIOaB7k554koZwHwj0l5P_aXe0O9gcRQVkZBw5iYOSa75xjRrGGdGr8QbLJDJhRGPrPlATWxCvanl0PSEVdefx0OEGHvXm5artgrKHEzQAVsHvqjgACDrNhCQwC0W-R9DI-OwNvt0J2L7ulw2TUvm1dcu7Anm34geN_o2wnB6eMft9HsdN3Gk1mH9CIdo9ybzmk0UvLgfppZH2efngoix-9cE1Gk3JLbRyTeYNvmyiRnQO8iKCWZfkTShEnwTVzog',
    description:
      'How automated response systems are redefining corporate digital security in 2024.',
    readTime: '6 min read',
  },
  {
    slug: 'quantum-computing-labs',
    category: 'Hardware',
    title: 'Quantum Computing: From Theory to Laboratory',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIiOSjwRhIJrFGqRoE-PL7J2ruWPZUyQu7jB653BEn0Hg3CcT1NjRITtrELCejjjIxJ48GngDx1NMpyTIZArRyof2STZ7KZ2beT8nOmL1eKqmEje7Tt5GFkdSgeblZc-FVtpzYGWggSr1mwJYBIWVx0SyMPxPR7F_RoFtuhbFExoil4vxGJ7DhVfJwYPqZS2trA-LWgmy1tyTIqX37MUiWhNINQ9ttTC2mF5lFCq021q0HoeUzxC3-RWUPSZAnLfHNbAcEdtB0DQ',
    description:
      'Inside the labs building the next generation of supercomputers.',
    readTime: '7 min read',
  },
  {
    slug: 'sustainable-silicon',
    category: 'Future Tech',
    title: 'Sustainable Silicon: Green Energy in Tech',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpvGPxhn0hEuzjxnWMOJizEyTHGU6E4lPSMqipstB8KcTaxQpjIbijGJQoJRMP6gGDJTx79x79L5q67uQMgAtOUHwv2bH5ZRMYJHzz_FvHauqbWgGg6VdOF457B8LjykETPG7jQ6UG3cosuF1WsgNFT8f8mBl4uxup1ilpcc_XD0vNkg2GmYLu9nChu7QC1e85fBkwAkY8j2qGC0xqslsgS-cIXp0vQTE7gQwM-RdDcQIwwFa0EicBywqiDZ4ihc0DGSBqTicr1w',
    description:
      'The movement toward carbon-neutral data centers and manufacturing.',
    readTime: '5 min read',
  },
];

const tocItems = [
  { id: 'specialized-models', label: 'Specialized Models' },
  { id: 'multi-modality', label: 'Enhanced Multi-modality' },
  { id: 'ethics-safety', label: 'Ethics & Safety' },
];

export function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug) ?? posts[0];
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const articleRef = useRef(null);

  // Reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MainLayout>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[color:var(--primary)] via-sky-400 to-[color:var(--primary)] z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="flex-grow">
        {/* ─── Breadcrumbs & Header ─── */}
        <section className="relative overflow-hidden pt-28 pb-0">
          {/* Decorative blurs */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[color:var(--primary)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-2 text-xs font-medium muted"
            >
              <Link
                to="/"
                className="hover:text-[color:var(--primary)] transition-colors inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">home</span>
                Home
              </Link>
              <span className="material-symbols-outlined text-sm opacity-40">
                chevron_right
              </span>
              <Link
                to="/blog"
                className="hover:text-[color:var(--primary)] transition-colors"
              >
                Blog
              </Link>
              <span className="material-symbols-outlined text-sm opacity-40">
                chevron_right
              </span>
              <span className="truncate text-current max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </motion.nav>

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--primary)]/8 border border-[color:var(--primary)]/20 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--primary)]" />
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-current font-[Manrope] tracking-tight"
            >
              {post.title}
            </motion.h1>

            {/* Author & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 pb-6 border-b border-[color:var(--border)]"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full overflow-hidden ring-2 ring-[color:var(--primary)]/20 ring-offset-2 ring-offset-[color:var(--background)]">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-current">
                    {post.author.name}
                  </p>
                  <p className="text-xs muted">{post.author.role}</p>
                  <div className="flex items-center gap-2 text-[11px] muted mt-0.5">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        calendar_today
                      </span>
                      {post.date}
                    </span>
                    <span className="h-0.5 w-0.5 rounded-full bg-current opacity-40" />
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        schedule
                      </span>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share actions */}
              <div className="sm:ml-auto flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex h-10 items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 transition-all text-xs font-medium cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">
                    {copied ? 'check' : 'link'}
                  </span>
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">
                    share
                  </span>
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">
                    bookmark
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Hero Image ─── */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative aspect-[16/7] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] group"
          >
            <img
              src={post.heroImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>
        </section>

        {/* ─── Article Body with Sidebar TOC ─── */}
        <div className="max-w-5xl mx-auto px-6 pb-12">
          <div className="flex gap-10">
            {/* Sticky TOC sidebar (desktop) */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] muted mb-4">
                    On this page
                  </p>
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                          activeSection === item.id
                            ? 'border-[color:var(--primary)] text-[color:var(--primary)] font-semibold'
                            : 'border-transparent muted hover:text-current hover:border-[color:var(--border)]'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Social share in sidebar */}
                  <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] muted mb-3">
                      Share article
                    </p>
                    <div className="flex gap-2">
                      {['share', 'bookmark', 'print'].map((icon) => (
                        <button
                          key={icon}
                          type="button"
                          className="w-9 h-9 rounded-lg border border-[color:var(--border)] flex items-center justify-center muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-base">
                            {icon}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </aside>

            {/* Article content */}
            <article className="flex-1 min-w-0" ref={articleRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none"
              >
                <p className="mb-6 text-lg sm:text-xl leading-relaxed text-current font-light first-letter:text-5xl first-letter:font-bold first-letter:text-[color:var(--primary)] first-letter:mr-1 first-letter:float-left first-letter:leading-[0.85]">
                  As we move deeper into the decade, the landscape of artificial
                  intelligence continues to shift at an unprecedented pace. From
                  large language models to specialized robotics, the integration
                  of AI into daily workflows is no longer a luxury but a
                  necessity for competitive industries.
                </p>

                <h2
                  id="specialized-models"
                  className="mt-10 mb-5 text-2xl sm:text-3xl font-extrabold text-current font-[Manrope] tracking-tight flex items-center gap-3"
                >
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-lg text-[color:var(--primary)]">
                      hub
                    </span>
                  </span>
                  The shift toward specialized models
                </h2>
                <p className="mb-5 text-base leading-relaxed text-current">
                  While the initial wave of generative AI was dominated by
                  general-purpose models, the industry is rapidly pivoting
                  toward domain-specific systems. A model trained exclusively on
                  healthcare data, for example, can often outperform general
                  models by a significant margin when evaluated on clinical
                  tasks.
                </p>

                {/* Enhanced blockquote */}
                <div className="my-8 relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--primary)] to-sky-400 rounded-full" />
                  <blockquote className="pl-6 py-4 bg-[color:var(--primary)]/[0.03] rounded-r-2xl border-r border-t border-b border-[color:var(--border)]/50">
                    <p className="text-lg sm:text-xl text-current font-medium italic leading-relaxed mb-3">
                      &quot;The future isn&apos;t about the largest model;
                      it&apos;s about the most relevant model for the specific
                      problem you are solving.&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-[color:var(--primary)]">
                          format_quote
                        </span>
                      </div>
                      <cite className="text-sm font-bold text-[color:var(--primary)] not-italic">
                        Dr. Elena Rodriguez, Chief AI Scientist
                      </cite>
                    </div>
                  </blockquote>
                </div>

                <h3
                  id="multi-modality"
                  className="mt-10 mb-4 text-xl sm:text-2xl font-extrabold text-current font-[Manrope] tracking-tight flex items-center gap-3"
                >
                  <span className="w-7 h-7 rounded-lg bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-base text-[color:var(--primary)]">
                      layers
                    </span>
                  </span>
                  Enhanced multi-modality
                </h3>
                <p className="mb-5 text-base leading-relaxed text-current">
                  Multi-modality is no longer a niche capability. Production
                  systems today routinely combine text, images, and sensor data
                  to make decisions that previously required multiple independent
                  tools stitched together by human operators.
                </p>

                {/* Info callout box */}
                <div className="my-6 flex gap-4 p-5 rounded-2xl border border-[color:var(--primary)]/20 bg-[color:var(--primary)]/[0.03]">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl text-[color:var(--primary)]">
                      lightbulb
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-current mb-1">
                      Key Insight
                    </p>
                    <p className="text-sm muted leading-relaxed">
                      For governments and institutions, multi-modal AI unlocks
                      new ways of monitoring infrastructure, improving citizen
                      services, and combating fraud — while also demanding
                      careful governance around how data is captured, combined,
                      and retained.
                    </p>
                  </div>
                </div>

                <h3
                  id="ethics-safety"
                  className="mt-10 mb-4 text-xl sm:text-2xl font-extrabold text-current font-[Manrope] tracking-tight flex items-center gap-3"
                >
                  <span className="w-7 h-7 rounded-lg bg-[color:var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-base text-[color:var(--primary)]">
                      shield
                    </span>
                  </span>
                  Ethical implications and safety
                </h3>
                <p className="mb-5 text-base leading-relaxed text-current">
                  As these tools become more powerful, the focus on safety and
                  alignment has never been more critical. Regulatory bodies
                  around the globe are introducing frameworks that demand
                  transparency, auditability, and clear lines of accountability
                  for AI systems.
                </p>
                <p className="mb-5 text-base leading-relaxed text-current">
                  For large-scale identity programs, this means designing
                  architectures where AI assists human operators rather than
                  autonomously making irreversible decisions about a
                  citizen&apos;s identity or access to services.
                </p>
              </motion.div>

              {/* ─── Tags ─── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex flex-wrap gap-2"
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="group rounded-full bg-[color:var(--card)] border border-[color:var(--border)] px-4 py-2 text-xs font-semibold muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 transition-all cursor-default inline-flex items-center gap-1.5"
                  >
                    <span className="text-[color:var(--primary)]/60 group-hover:text-[color:var(--primary)]">
                      #
                    </span>
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* ─── Author Card ─── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="size-16 sm:size-20 rounded-2xl overflow-hidden ring-2 ring-[color:var(--primary)]/15 ring-offset-2 ring-offset-[color:var(--card)] flex-shrink-0">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-lg font-bold text-current">
                      {post.author.name}
                    </p>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[color:var(--primary)]/8 text-[10px] font-bold text-[color:var(--primary)] uppercase tracking-wider">
                      <span className="material-symbols-outlined text-xs">
                        verified
                      </span>
                      Author
                    </span>
                  </div>
                  <p className="text-sm muted mb-3">{post.author.role}</p>
                  <p className="text-sm muted leading-relaxed">
                    Alex is a senior AI researcher with over 10 years of
                    experience in machine learning and generative models. He
                    writes about the intersection of AI and real-world
                    applications for enterprise and government systems.
                  </p>
                </div>
              </motion.div>
            </article>
          </div>
        </div>

        {/* ─── Related Articles ─── */}
        <section className="py-16 border-t border-[color:var(--border)] bg-[color:var(--card)]/30 relative overflow-hidden">
          {/* Decorative bg */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[color:var(--primary)] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <p className="section-label">Continue reading</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-current font-[Manrope]">
                  Related articles
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-[color:var(--primary)] text-sm font-semibold hover:gap-3 transition-all"
              >
                View all
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item, idx) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[color:var(--primary)]/5"
                >
                  <Link to={`/blog/${item.slug}`} className="block">
                    <div className="aspect-video overflow-hidden bg-slate-200/40 dark:bg-slate-800/60 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* Read time badge */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[color:var(--card)]/80 backdrop-blur-md text-[10px] font-medium muted">
                          <span className="material-symbols-outlined text-[10px]">
                            schedule
                          </span>
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--primary)]">
                        <span className="w-1 h-1 rounded-full bg-[color:var(--primary)]" />
                        {item.category}
                      </span>
                      <h3 className="mb-2 text-base md:text-lg font-bold text-current group-hover:text-[color:var(--primary)] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="muted text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Back to Blog CTA ─── */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 text-base font-semibold text-[color:var(--primary)] hover:gap-4 transition-all group"
              >
                <span className="w-10 h-10 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center group-hover:bg-[color:var(--primary)] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                </span>
                Back to all articles
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default BlogDetail;
