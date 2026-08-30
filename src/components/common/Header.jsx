import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header({ onOpenTelegram }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ALL APPS', path: '/apps' },
    { name: 'NEW APPS', path: '/new-apps' },
    { name: 'HOW TO PLAY', path: '/how-to-play' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-gold/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1">
            {/* Custom Logo Mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-bright via-gold to-gold-dark p-0.5 shadow-gold-sm group-hover:shadow-gold-md transition-all">
              <div className="w-full h-full bg-bg-secondary rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-lg text-gold group-hover:scale-110 transition-transform">A</span>
              </div>
            </div>

            {/* Custom Text Logo */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  ALLY<span className="text-gold">ONO</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-gold/15 text-gold border border-gold/30">
                  APP
                </span>
              </div>
              <span className="text-[11px] font-semibold text-muted tracking-widest uppercase -mt-0.5">
                APP DIRECTORY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-xs xl:text-sm font-bold tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'text-gold bg-gold/10 border-b-2 border-gold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button: Join Community / Telegram */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTelegram}
              type="button"
              id="header-telegram-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-bold text-xs xl:text-sm tracking-wider uppercase shadow-gold-sm hover:shadow-gold-md active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>JOIN TELEGRAM</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTelegram}
              type="button"
              className="p-2 text-gold border border-gold/40 rounded-lg hover:bg-gold/10"
              aria-label="Telegram Community"
            >
              <Send className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-bg-secondary border-b border-gold/30 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'text-gold bg-gold/15 border-l-4 border-gold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTelegram();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient text-black font-bold text-sm tracking-wide shadow-gold-sm active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>JOIN TELEGRAM CHANNEL</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
