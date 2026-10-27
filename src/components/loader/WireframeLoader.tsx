'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WireframeLoaderProps {
  onComplete: () => void;
}

export const WireframeLoader: React.FC<WireframeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const skipTimer = setTimeout(() => {
        setProgress(100);
        setIsDismissed(true);
        onComplete();
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    // Check if user already saw the loader in this session
    const hasSeenLoader = sessionStorage.getItem('kaushik_portfolio_intro_seen');
    const duration = hasSeenLoader ? 1200 : 2400; // Accelerated on repeat visits
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          sessionStorage.setItem('kaushik_portfolio_intro_seen', 'true');
          setTimeout(() => {
            setIsDismissed(true);
            setTimeout(onComplete, 400);
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        setProgress(100);
        setIsDismissed(true);
        sessionStorage.setItem('kaushik_portfolio_intro_seen', 'true');
        setTimeout(onComplete, 200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsDismissed(true);
    sessionStorage.setItem('kaushik_portfolio_intro_seen', 'true');
    setTimeout(onComplete, 200);
  };

  // Phase computation
  // Phase 1: 0 - 30% (Structural wireframe)
  // Phase 2: 31 - 70% (Mid-fidelity transformation)
  // Phase 3: 71 - 100% (High-fidelity reveal)
  const isPhase1 = progress <= 30;
  const isPhase2 = progress > 30 && progress <= 70;
  const isPhase3 = progress > 70;

  // Normalized phase 3 reveal progress
  const phase3Progress = !isPhase3 ? 0 : Math.min((progress - 70) / 30, 1);

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white overflow-hidden select-none"
          role="status"
          aria-live="polite"
          aria-label={`Initializing portfolio interface: ${Math.floor(progress)}% complete`}
        >
          {/* Blueprint Grid Background - fades out as fidelity increases */}
          <div
            className="absolute inset-0 blueprint-grid transition-opacity duration-700 pointer-events-none"
            style={{ opacity: 1 - phase3Progress * 0.85 }}
          />

          {/* Top Architectural Telemetry Bar */}
          <div className="relative z-10 w-full px-6 py-4 flex items-center justify-between border-b border-white/10 text-[11px] font-mono tracking-wider text-neutral-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className={`inline-block w-2 h-2 rounded-full ${isPhase3 ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500'}`} />
                {isPhase1 && 'SYS_INIT // BLUEPRINT_V1.0'}
                {isPhase2 && 'SYS_RENDER // MID_FIDELITY'}
                {isPhase3 && 'SYS_ACTIVE // HIGH_FIDELITY'}
              </span>
              <span className="hidden sm:inline-block text-neutral-600">|</span>
              <span className="hidden sm:inline-block text-neutral-500">
                FRAME: {Math.floor(progress * 1.8)} / 180
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-500">
                PHASE {isPhase1 ? '1/3' : isPhase2 ? '2/3' : '3/3'}
              </span>
              <button
                onClick={handleSkip}
                className="px-2.5 py-1 rounded border border-white/20 hover:border-white/50 text-[10px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Skip introductory animation"
              >
                SKIP [ESC]
              </button>
            </div>
          </div>

          {/* Central Architectural Wireframe transforming to High-Fidelity Hero */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 max-w-5xl mx-auto w-full">
            {/* Architectural Frame Bounding Box with Corner Registration Crosses */}
            <div
              className={`relative w-full p-8 md:p-12 transition-all duration-500 ${
                isPhase1
                  ? 'border border-dashed border-neutral-700 bg-neutral-950/40 rounded-none'
                  : isPhase2
                  ? 'border border-neutral-800 bg-neutral-900/30 rounded-xl shadow-lg'
                  : 'border border-white/15 bg-neutral-900/40 rounded-2xl backdrop-blur-md shadow-2xl'
              }`}
            >
              {/* Corner Registration Crosshairs in Phase 1 & 2 */}
              <div
                className="absolute top-2 left-2 font-mono text-[10px] text-neutral-500 transition-opacity duration-500"
                style={{ opacity: 1 - phase3Progress }}
              >
                ┌ COORD: [0, 0]
              </div>
              <div
                className="absolute top-2 right-2 font-mono text-[10px] text-neutral-500 transition-opacity duration-500"
                style={{ opacity: 1 - phase3Progress }}
              >
                COORD: [100, 0] ┐
              </div>
              <div
                className="absolute bottom-2 left-2 font-mono text-[10px] text-neutral-500 transition-opacity duration-500"
                style={{ opacity: 1 - phase3Progress }}
              >
                └ COORD: [0, 100]
              </div>
              <div
                className="absolute bottom-2 right-2 font-mono text-[10px] text-neutral-500 transition-opacity duration-500"
                style={{ opacity: 1 - phase3Progress }}
              >
                COORD: [100, 100] ┘
              </div>

              {/* Wireframe Tag Line / Real Tag Line */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {isPhase1 ? (
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 animate-pulse rounded" />
                    <span className="font-mono text-[10px] text-neutral-500 tracking-widest">[IDENTITY_META]</span>
                    <div className="w-24 h-2 bg-neutral-800 animate-pulse rounded" />
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest text-neutral-400 bg-neutral-800/60 border border-neutral-700/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    PORTFOLIO // 2025 EDITION
                  </motion.div>
                )}
              </div>

              {/* Central Title: Wireframe Bars -> Pure Inter Bold Headline */}
              <div className="text-center my-4">
                {isPhase1 ? (
                  <div className="space-y-3 flex flex-col items-center">
                    <div className="w-3/4 max-w-lg h-9 bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                      <span className="font-mono text-[11px] text-neutral-500 tracking-wider">
                        [STR_BOX: PRIMARY_HEADLINE_TEXT]
                      </span>
                    </div>
                    <div className="w-1/2 max-w-sm h-6 bg-neutral-800/80 border border-neutral-700/80 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-neutral-600">
                        [STR_BOX: SUBTITLE_TEXT]
                      </span>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <h1
                      className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight transition-colors duration-700 ${
                        isPhase3 ? 'text-[#E2E8F0] silver-text' : 'text-neutral-300'
                      }`}
                    >
                      KAUSHIK KALYAN BOJJA
                    </h1>
                    <p
                      className={`text-sm sm:text-lg md:text-xl font-medium tracking-wide transition-colors duration-500 ${
                        isPhase3 ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      UI/UX Designer & Flutter Developer
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Wireframe Mockup Slots / Cards transitioning into Refined UI */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10">
                {[
                  { label: 'WORK_01', title: 'FinPulse' },
                  { label: 'WORK_02', title: 'Aether' },
                  { label: 'WORK_03', title: 'Lumina' },
                  { label: 'WORK_04', title: 'OmniRoute' },
                ].map((card, idx) => (
                  <div
                    key={card.label}
                    className={`p-3 relative overflow-hidden transition-all duration-500 ${
                      isPhase1
                        ? 'border border-dashed border-neutral-700 bg-neutral-900/20'
                        : isPhase2
                        ? 'border border-neutral-800 bg-neutral-900/60 rounded-lg'
                        : 'border border-white/10 bg-neutral-900/80 rounded-xl hover:border-white/30'
                    }`}
                  >
                    {/* Wireframe Diagonal X placeholder in Phase 1 */}
                    {isPhase1 ? (
                      <div className="h-14 sm:h-16 relative flex items-center justify-center border border-neutral-800 bg-neutral-950/60">
                        <svg className="absolute inset-0 w-full h-full text-neutral-800" preserveAspectRatio="none">
                          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                        </svg>
                        <span className="relative z-10 font-mono text-[9px] text-neutral-500">
                          {card.label}
                        </span>
                      </div>
                    ) : (
                      <div className="h-14 sm:h-16 rounded flex flex-col justify-end p-2 bg-gradient-to-t from-black/80 to-neutral-900/40">
                        <span className="text-[10px] font-mono text-neutral-500">0{idx + 1}</span>
                        <span className="text-xs font-semibold text-neutral-200 truncate">{card.title}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Progress Counter & Metric Telemetry */}
          <div className="relative z-10 w-full px-6 py-6 border-t border-white/10 bg-black/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Progress Gauge */}
              <div className="w-full sm:w-2/3 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">
                    TRANSFORMATION PROGRESS
                  </span>
                  <span className="text-white font-semibold tabular-nums text-sm">
                    {Math.floor(progress)}%
                  </span>
                </div>
                {/* Thin technical progress bar */}
                <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neutral-600 via-neutral-300 to-white"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Technical Status indicators */}
              <div className="flex items-center gap-6 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">TOKENS:</span>
                  <span className="text-neutral-300">{Math.floor(progress * 1.4)}/140</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">CANVAS:</span>
                  <span className={progress > 60 ? 'text-emerald-400' : 'text-neutral-500'}>
                    {progress > 60 ? 'ARMED' : 'CALIBRATING'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
