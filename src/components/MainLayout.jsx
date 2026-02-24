import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function MainLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = stored === 'dark' || (!stored && prefersDark);
    if (startDark) {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
    return () => {};
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    if (next) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-display">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-grid-pattern bg-grid" />

      <div className="relative z-10 flex flex-col flex-grow w-full max-w-[1440px] mx-auto">
        {/* Navbar (from NexGen landing) */}
        <div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">
          <nav className="glass-nav rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl">
            <Link to="/" className="flex items-center gap-2 mr-4">
              <span className="material-symbols-outlined text-primary text-3xl">token</span>
              <span className="font-bold text-lg tracking-tight text-current">NexGen</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'text-sm font-medium transition-colors',
                      isActive ? 'text-current' : 'muted hover:text-current',
                    ].join(' ')
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="ml-4 pl-6 border-l border-white/10 hidden sm:flex items-center gap-3">
              <Link
                to="/contact"
                className="bg-[color:var(--primary)] hover:opacity-95 text-[color:var(--primary-foreground)] text-sm font-bold py-2 px-5 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.12)]"
              >
                Get Started
              </Link>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-2 p-2 rounded-full text-current hover:bg-white/5 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
              </button>
            </div>

            {/* Mobile Menu Icon (non-functional placeholder) */}
            <button className="md:hidden text-current" type="button">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </nav>
        </div>

        {/* Page content slot */}
        {children}
      </div>
    </div>
  );
}

