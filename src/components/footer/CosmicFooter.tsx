'use client';

import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio';
import { ArrowUp, Mail } from 'lucide-react';

export const CosmicFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'mail':
        return <Mail className="w-4 h-4" />;
      case 'github':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-transparent text-[#E2E8F0] min-h-[90vh] sm:min-h-screen flex flex-col justify-between overflow-hidden pt-16 sm:pt-20 pb-10 sm:pb-12 px-3 sm:px-8 lg:px-12 z-20"
    >
      {/* Subtle radial cosmic glow centered behind footer */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_0%,rgba(0,0,0,0.5)_80%)]"
        aria-hidden="true"
      />

      {/* Main Closing Section Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto text-center space-y-8 sm:space-y-16">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono tracking-wider text-neutral-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
          <span>CURRENT STATUS // READY FOR TRANSMISSION</span>
        </div>

        {/* Editorial Closing Statement */}
        <p className="max-w-2xl mx-auto text-lg sm:text-2xl md:text-3xl font-light tracking-wide text-neutral-200 leading-relaxed px-2">
          {PERSONAL_INFO.closingStatement}
        </p>

        {/* PRIMARY CTA: VOLUMETRIC LIGHT-SOURCE TYPOGRAPHY "LET'S WORK TOGETHER" */}
        <div className="relative inline-block group my-4 sm:my-6 max-w-full">
          {/* Shifting Vibrant Gradient Aura behind CTA */}
          <div
            className="absolute -inset-3 sm:-inset-6 rounded-3xl cta-gradient-glow pointer-events-none"
            aria-hidden="true"
          />

          {/* Actionable Button / Link */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="relative z-10 inline-block px-4 min-[400px]:px-8 sm:px-14 py-5 sm:py-8 rounded-2xl bg-black/85 hover:bg-neutral-950/90 border border-white/20 hover:border-white/60 transition-all duration-300 shadow-2xl outline-none focus-visible:ring-4 focus-visible:ring-white/50 max-w-full"
            aria-label="Send email to collaborate with Kaushik Kalyan Bojja"
          >
            {/* VOLUMETRIC LIGHT-SOURCE STACK: Emissive pure white light with mix-blend-mode: screen */}
            <div className="relative inline-block max-w-full">
              {/* Layer 1: Incandescent Core & Micro Edge Softening */}
              <span className="relative z-10 text-2xl min-[360px]:text-[6.8vw] min-[480px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mix-blend-screen blur-[0.5px] block leading-tight whitespace-nowrap">
                LET&apos;S WORK TOGETHER
              </span>

              {/* Layer 2: Micro Corona Bleed (blur-xs / 2px) */}
              <span
                aria-hidden="true"
                className="absolute inset-0 z-11 pointer-events-none select-none text-2xl min-[360px]:text-[6.8vw] min-[480px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mix-blend-screen opacity-90 blur-xs block leading-tight whitespace-nowrap"
              >
                LET&apos;S WORK TOGETHER
              </span>

              {/* Layer 3: Mid Volumetric Bloom (blur-md) */}
              <span
                aria-hidden="true"
                className="absolute inset-0 z-12 pointer-events-none select-none text-2xl min-[360px]:text-[6.8vw] min-[480px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mix-blend-screen opacity-70 blur-md group-hover:opacity-90 group-hover:blur-lg transition-all duration-300 block leading-tight whitespace-nowrap"
              >
                LET&apos;S WORK TOGETHER
              </span>

              {/* Layer 4: Deep Volumetric Aura (blur-xl) */}
              <span
                aria-hidden="true"
                className="absolute inset-0 z-13 pointer-events-none select-none text-2xl min-[360px]:text-[6.8vw] min-[480px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mix-blend-screen opacity-45 blur-xl group-hover:opacity-75 group-hover:scale-105 transition-all duration-300 block leading-tight whitespace-nowrap"
              >
                LET&apos;S WORK TOGETHER
              </span>

              {/* Layer 5: Diffuse Outer Dispersion (blur-3xl) */}
              <span
                aria-hidden="true"
                className="absolute inset-0 z-14 pointer-events-none select-none text-2xl min-[360px]:text-[6.8vw] min-[480px]:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mix-blend-screen opacity-25 blur-3xl group-hover:opacity-50 transition-all duration-300 block leading-tight whitespace-nowrap"
              >
                LET&apos;S WORK TOGETHER
              </span>
            </div>

            <span className="block mt-3 sm:mt-4 text-[10px] min-[380px]:text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest text-neutral-400 group-hover:text-cyan-300 transition-colors truncate max-w-full">
              [ TRANSMIT INQUIRY → {PERSONAL_INFO.email} ]
            </span>
          </a>
        </div>

        {/* Secondary Social / Professional Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-8 pt-4 sm:pt-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.iconName !== 'mail' ? '_blank' : undefined}
              rel={link.iconName !== 'mail' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-xs sm:text-sm font-mono text-neutral-300 hover:text-white transition-all shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {renderSocialIcon(link.iconName)}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Legal & Back to Top Telemetry Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-10 sm:pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-neutral-500">

        <div>
          <span>© 2026 {PERSONAL_INFO.name}. Designed & Built with Next.js, Tailwind & Flutter spirit.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-neutral-600">
            COORDS: 0.00, 0.00 // DEEP SPACE
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Scroll back to top of page"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
