import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

const navItems = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/services', label: 'Services', icon: 'design_services' },
  { to: '/products', label: 'Products', icon: 'inventory_2' },
  { to: '/about', label: 'About', icon: 'info' },
  { to: '/contact', label: 'Contact', icon: 'mail' },
];

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { label: 'National ID Systems', to: '/services' },
      { label: 'MOSIP Deployment', to: '/services' },
      { label: 'Device Management (DMS)', to: '/services' },
      { label: 'Secure Biometric (SBI)', to: '/services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Iris Scanners', to: '/products' },
      { label: 'Fingerprint Scanners', to: '/products' },
      { label: 'Face Camera SBI', to: '/products' },
      { label: 'MOSIP Kits', to: '/products' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: '/services' },
      { label: 'MOSIP Guides', to: '/services' },
      { label: 'Training Programs', to: '/services' },
      { label: 'Support', to: '/contact' },
    ],
  },
];

export function MainLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Scroll detection for navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = stored === 'dark' || (!stored && prefersDark);
    if (startDark) {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-grid" />

      {/* Subtle ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[color:var(--primary)] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[color:var(--primary)] opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow w-full">
        {/* ─── Navbar ─── */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'py-3 bg-[color-mix(in_oklab,var(--card)_90%,transparent)]'
              : 'py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              className={`glass-nav rounded-2xl px-5 py-2.5 flex items-center justify-between transition-shadow duration-300 ${
                scrolled ? 'shadow-lg' : 'shadow-sm'
              }`}
            >
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-[color:var(--primary)] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-white text-xl">fingerprint</span>
                </div>
                <span className="font-bold text-lg tracking-tight text-current font-[Manrope]">Techforth</span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'text-[color:var(--primary)] bg-[color:var(--primary)]/8'
                          : 'muted hover:text-current hover:bg-[color:var(--muted)]/50'
                      }`
                    }
                    end={item.to === '/'}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2 rounded-xl muted hover:text-current hover:bg-[color:var(--muted)]/50 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isDark ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden p-2 rounded-xl muted hover:text-current hover:bg-[color:var(--muted)]/50 transition-all"
                  type="button"
                  aria-label="Open menu"
                >
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* ─── Mobile Drawer ─── */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[60]">
            {/* Overlay */}
            <div
              className="absolute inset-0 mobile-overlay animate-fade-in"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-[color:var(--card)] border-l border-[color:var(--border)] shadow-2xl animate-slide-in-right flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-[color:var(--border)]">
                <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--primary)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">fingerprint</span>
                  </div>
                  <span className="font-bold text-current font-[Manrope]">Techforth</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl muted hover:text-current hover:bg-[color:var(--muted)]/50 transition-all"
                  type="button"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-[color:var(--primary)] bg-[color:var(--primary)]/8'
                          : 'muted hover:text-current hover:bg-[color:var(--muted)]/50'
                      }`
                    }
                    end={item.to === '/'}
                  >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="p-4 border-t border-[color:var(--border)] space-y-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium muted hover:text-current hover:bg-[color:var(--muted)]/50 transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isDark ? 'light_mode' : 'dark_mode'}
                  </span>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── Page Content ─── */}
        <div className="max-w-[1400px] mx-auto w-full">
          {children}
        </div>

        {/* ─── Footer ─── */}
        <footer className="border-t border-[color:var(--border)] mt-auto">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Main footer grid */}
            <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
              {/* Brand */}
              <div className="col-span-2">
                <Link to="/" className="flex items-center gap-2.5 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[color:var(--primary)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">fingerprint</span>
                  </div>
                  <span className="font-bold text-lg tracking-tight text-current font-[Manrope]">Techforth</span>
                </Link>
                <p className="muted text-sm leading-relaxed max-w-xs mb-6">
                  Techforth Solutions PLC designs and implements secure, scalable, and inclusive digital identity systems. 
                  MOSIP-compliant solutions for governments and institutions worldwide.
                </p>
                <div className="flex gap-3">
                  {['fingerprint', 'badge', 'security'].map((icon) => (
                    <div
                      key={icon}
                      className="w-9 h-9 rounded-lg border border-[color:var(--border)] flex items-center justify-center muted hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              {footerLinks.map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-bold text-current mb-4 tracking-wide">{col.title}</h4>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm muted hover:text-[color:var(--primary)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[color:var(--border)] py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs muted">
                &copy; {new Date().getFullYear()} Techforth Solutions PLC. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs muted">
                <a href="#" className="hover:text-[color:var(--primary)] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[color:var(--primary)] transition-colors">Terms</a>
                <a href="#" className="hover:text-[color:var(--primary)] transition-colors">MOSIP Compliance</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}