'use client';

import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '@/data/portfolio';
import { Mail } from 'lucide-react';

export const GlassHud: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      // Detect active section
      const sections = ['contact', 'about', 'work', 'hero'];
      for (const sectionId of sections) {
        if (sectionId === 'hero' && scrollPos < 400) {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-2.5 sm:px-4 pointer-events-none">
      <nav
        aria-label="Main Portfolio Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-6 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full transition-all duration-300 max-w-full ${
          isScrolled
            ? 'glass-hud shadow-2xl scale-[0.98]'
            : 'bg-black/75 backdrop-blur-md border border-white/10 shadow-lg'
        }`}
      >
        {/* Brand Identity / Home Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-1.5 sm:gap-2 group text-xs font-mono font-medium tracking-wider text-neutral-300 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <span className="w-2 h-2 rounded-full bg-white/70 group-hover:bg-white group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="font-bold tracking-normal text-xs sm:text-sm text-neutral-100">
            KB
          </span>
          <span className="text-[10px] text-neutral-500 uppercase hidden md:inline">
            {'// UI/UX & Flutter'}
          </span>
        </a>

        {/* Navigation Anchors */}
        <ul className="flex items-center gap-0.5 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const sectionKey = item.href.replace('#', '');
            const isActive = activeSection === sectionKey;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/5'
                  }`}
                >
                  {item.label === 'Selected Work' ? (
                    <>
                      <span className="hidden sm:inline">Selected </span>Work
                    </>
                  ) : (
                    item.label
                  )}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Production Utilities HUD: Email, LinkedIn, GitHub */}
        <div className="flex items-center gap-1 sm:gap-2 pl-1.5 sm:pl-3 border-l border-white/15">
          {/* Email Link */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            title={`Email: ${PERSONAL_INFO.email}`}
            aria-label="Email Kaushik Kalyan Bojja"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn Navigation Target */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* GitHub Repository Gateway */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            title="GitHub Repository"
            aria-label="GitHub Profile"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>

        {/* Availability Micro-badge */}
        <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10 text-[11px] font-mono text-neutral-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-neutral-300 font-medium">OPEN FOR WORK</span>
        </div>
      </nav>
    </header>
  );
};
