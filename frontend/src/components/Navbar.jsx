import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Checker', href: '#checker' },
  { label: 'Datasets', href: '#datasets' },
  { label: 'Model', href: '#model' },
  { label: 'Performance', href: '#performance' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Theme toggler state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply theme class globally
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-sm shadow-slate-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm">
              <Shield className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-bold text-surface-900 font-display tracking-tight">
              Med<span className="text-primary-600">Truth</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 rounded-xl hover:bg-surface-50 transition-all duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}

            {/* Light/Dark Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-surface-600 hover:text-surface-900 hover:bg-surface-50 border-none bg-transparent cursor-pointer ml-2 flex items-center justify-center transition-all duration-200"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? (
                <Moon className="w-4.5 h-4.5 transition-transform hover:rotate-12 duration-200" />
              ) : (
                <Sun className="w-4.5 h-4.5 transition-transform hover:rotate-45 duration-200 text-amber-400" />
              )}
            </button>

            <a
              href="#checker"
              className="ml-3 px-4 py-2.5 text-xs font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 hover:shadow-md hover:shadow-primary-600/10 transition-all duration-200 no-underline"
            >
              Verify Claim
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Light/Dark Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-surface-600 hover:text-surface-900 border-none bg-transparent cursor-pointer flex items-center justify-center transition-all duration-200"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? (
                <Moon className="w-4.5 h-4.5" />
              ) : (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-surface-500 hover:text-surface-800 bg-transparent border-none cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4 border-t border-surface-200/50"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-surface-600 hover:text-surface-900 hover:bg-surface-50 rounded-lg no-underline"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
