'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolio';

export const TypographicPortal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineWrapperRef = useRef<HTMLDivElement>(null);
  const letterORef = useRef<HTMLSpanElement>(null);

  const [originPercent, setOriginPercent] = useState<{ x: number; y: number }>({ x: 50, y: 70 });
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking across the sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate transform origin of the letter 'O' relative to the headline wrapper
  const updateTransformOrigin = () => {
    if (!headlineWrapperRef.current || !letterORef.current) return;
    const wrapperRect = headlineWrapperRef.current.getBoundingClientRect();
    const oRect = letterORef.current.getBoundingClientRect();

    if (wrapperRect.width > 0 && wrapperRect.height > 0) {
      const oCenterX = oRect.left + oRect.width / 2;
      const oCenterY = oRect.top + oRect.height / 2;

      const relX = ((oCenterX - wrapperRect.left) / wrapperRect.width) * 100;
      const relY = ((oCenterY - wrapperRect.top) / wrapperRect.height) * 100;

      setOriginPercent({ x: relX, y: relY });
    }
  };

  useEffect(() => {
    updateTransformOrigin();
    window.addEventListener('resize', updateTransformOrigin);
    // Small timeout to guarantee layout computation after font render
    const t = setTimeout(updateTransformOrigin, 150);
    return () => {
      window.removeEventListener('resize', updateTransformOrigin);
      clearTimeout(t);
    };
  }, []);

  // Motion Transforms
  // Headline scale: starts at 1, rapidly zooms through the counter space
  const headlineScale = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [1, 1, prefersReducedMotion ? 1 : 32, prefersReducedMotion ? 1 : 40]);
  
  // Headline opacity: maintains full visibility then fades as camera emerges into white
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.7, 0.88, 1], [1, 1, 0.2, 0]);

  // Subtitle & telemetry fade out quickly as scroll begins
  const heroMetaOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroMetaY = useTransform(scrollYProgress, [0, 0.15], [0, -20]);

  // White portal flood aperture: radiating from within the O counter-space
  // Starts appearing around progress 0.35, expands to flood the viewport
  const whiteFloodOpacity = useTransform(
    scrollYProgress,
    prefersReducedMotion ? [0.2, 0.6] : [0.35, 0.75],
    [0, 1]
  );
  
  const whiteFloodScale = useTransform(
    scrollYProgress,
    prefersReducedMotion ? [0.2, 0.6] : [0.35, 0.85],
    [0.1, 12]
  );


  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[260vh] bg-transparent text-[#E2E8F0]"
    >
      {/* Sticky Fullscreen Frame with dynamic mobile viewport height */}
      <div className="sticky top-0 h-[100dvh] min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center bg-transparent">
        {/* Ambient Subtle Center Vignette / Star Depth */}
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.4)_75%)]"
          aria-hidden="true"
        />

        {/* Top spacer to balance HUD */}
        <div className="w-full pt-16 sm:pt-20 px-4 sm:px-6 max-w-7xl flex justify-between items-center z-10">
          <motion.div
            style={{ opacity: heroMetaOpacity, y: heroMetaY }}
            className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>PORTFOLIO // 2026</span>
          </motion.div>

          <motion.div
            style={{ opacity: heroMetaOpacity, y: heroMetaY }}
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500"
          >
            <span>DISCIPLINE:</span>
            <span className="text-neutral-300">SYSTEM DESIGN + FLUTTER</span>
          </motion.div>
        </div>

        {/* Center Typographic Composition with Volumetric Light-Source Architecture */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-2 sm:px-4 w-full max-w-6xl mx-auto select-none pointer-events-none">
          {/* Main Headline Scaled via Framer Motion with Origin centered on 'O' */}
          <motion.div
            ref={headlineWrapperRef}
            style={{
              scale: headlineScale,
              opacity: headlineOpacity,
              transformOrigin: `${originPercent.x}% ${originPercent.y}%`,
            }}
            className="w-full text-center will-change-transform"
          >
            {/* VOLUMETRIC LIGHT-SOURCE TYPOGRAPHY STACK: Emissive pure white light with mix-blend-mode: screen */}
            <div className="relative inline-block w-full">
              {/* Layer 1: Base Incandescent Core (Structural & Micro Edge Softening) */}
              <h1 className="relative z-10 text-6xl min-[380px]:text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.86] sm:leading-[0.9] text-white mix-blend-screen blur-[0.5px]">
                <span className="block mb-0.5 sm:mb-2 text-white">KAUSHIK</span>
                <span className="block mb-0.5 sm:mb-2 text-white">KALYAN</span>
                {/* The final word BOJJA containing the focal portal 'O' */}
                <span className="inline-flex justify-center items-center gap-[0.02em] text-white">
                  <span>B</span>
                  {/* The Signature Portal Anchor - Letter 'O' */}
                  <span
                    ref={letterORef}
                    id="portal-o"
                    className="relative inline-block text-white"
                  >
                    O
                    {/* Subtle pulsing aperture halo inside the O counter */}
                    <span
                      className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full pointer-events-none shadow-[0_0_24px_rgba(255,255,255,0.8)]"
                      aria-hidden="true"
                    />
                  </span>
                  <span>J</span>
                  <span>J</span>
                  <span>A</span>
                </span>
              </h1>

              {/* Layer 2: Micro Corona Bleed (blur-xs / 2px) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-11 pointer-events-none select-none text-6xl min-[380px]:text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.86] sm:leading-[0.9] text-white mix-blend-screen opacity-90 blur-xs"
              >
                <span className="block mb-0.5 sm:mb-2 text-white">KAUSHIK</span>
                <span className="block mb-0.5 sm:mb-2 text-white">KALYAN</span>
                <span className="inline-flex justify-center items-center gap-[0.02em] text-white">
                  <span>B</span>
                  <span>O</span>
                  <span>J</span>
                  <span>J</span>
                  <span>A</span>
                </span>
              </div>

              {/* Layer 3: Mid Volumetric Bloom (blur-md) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-12 pointer-events-none select-none text-6xl min-[380px]:text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.86] sm:leading-[0.9] text-white mix-blend-screen opacity-70 blur-md"
              >
                <span className="block mb-0.5 sm:mb-2 text-white">KAUSHIK</span>
                <span className="block mb-0.5 sm:mb-2 text-white">KALYAN</span>
                <span className="inline-flex justify-center items-center gap-[0.02em] text-white">
                  <span>B</span>
                  <span>O</span>
                  <span>J</span>
                  <span>J</span>
                  <span>A</span>
                </span>
              </div>

              {/* Layer 4: Deep Volumetric Aura (blur-xl) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-13 pointer-events-none select-none text-6xl min-[380px]:text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.86] sm:leading-[0.9] text-white mix-blend-screen opacity-45 blur-xl"
              >
                <span className="block mb-0.5 sm:mb-2 text-white">KAUSHIK</span>
                <span className="block mb-0.5 sm:mb-2 text-white">KALYAN</span>
                <span className="inline-flex justify-center items-center gap-[0.02em] text-white">
                  <span>B</span>
                  <span>O</span>
                  <span>J</span>
                  <span>J</span>
                  <span>A</span>
                </span>
              </div>

              {/* Layer 5: Diffuse Outer Cosmic Dispersion (blur-3xl) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-14 pointer-events-none select-none text-6xl min-[380px]:text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.86] sm:leading-[0.9] text-white mix-blend-screen opacity-25 blur-3xl"
              >
                <span className="block mb-0.5 sm:mb-2 text-white">KAUSHIK</span>
                <span className="block mb-0.5 sm:mb-2 text-white">KALYAN</span>
                <span className="inline-flex justify-center items-center gap-[0.02em] text-white">
                  <span>B</span>
                  <span>O</span>
                  <span>J</span>
                  <span>J</span>
                  <span>A</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Subtitle & Role Meta (Fades quickly on scroll) */}
          <motion.div
            style={{ opacity: heroMetaOpacity, y: heroMetaY }}
            className="mt-4 sm:mt-8 text-center space-y-1 sm:space-y-2 pointer-events-auto px-2"
          >
            <p className="text-sm sm:text-xl md:text-2xl font-light tracking-wide text-neutral-300">
              {PERSONAL_INFO.title}
            </p>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
              {PERSONAL_INFO.heroStatement}
            </p>
          </motion.div>
        </div>

        {/* White Portal Expansion Aperture */}
        {/* Originates precisely from the O coordinate and expands to flood screen into pure white */}
        <motion.div
          style={{
            opacity: whiteFloodOpacity,
            scale: whiteFloodScale,
            left: `${originPercent.x}%`,
            top: `${originPercent.y}%`,
          }}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white shadow-[0_0_120px_60px_rgba(255,255,255,0.95)] pointer-events-none will-change-transform"
          aria-hidden="true"
        />

        {/* Fullscreen pure white veil at end of scroll to guarantee seamless handoff */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.78, 0.95], [0, 1]),
          }}
          className="absolute inset-0 z-35 bg-white pointer-events-none"
          aria-hidden="true"
        />

        {/* Bottom Scroll Cue */}
        <motion.div
          style={{ opacity: heroMetaOpacity }}
          className="w-full pb-4 sm:pb-8 flex flex-col items-center justify-center gap-1.5 sm:gap-2 z-10 pointer-events-auto"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            Scroll to enter portal
          </span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-neutral-600 flex justify-center pt-1 sm:pt-1.5">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
