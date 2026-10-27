'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SeamlessWhiteDismissalProps {
  children: React.ReactNode;
}

export const SeamlessWhiteDismissal: React.FC<SeamlessWhiteDismissalProps> = ({ children }) => {
  const exitStageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking across the dedicated exit dismissal zone AFTER the content has been read
  const { scrollYProgress } = useScroll({
    target: exitStageRef,
    offset: ['start end', 'end start'],
  });

  // Calculate the bottom-to-top wipe percentage smoothly as user scrolls past the content
  const wipeProgress = useTransform(scrollYProgress, [0.05, 0.85], [0, 100]);

  // Dynamic CSS linear gradient mask wiping the white curtain vertically from bottom to top
  const maskImage = useTransform(wipeProgress, (val) => {
    if (prefersReducedMotion) {
      return 'none';
    }
    const transparentStop = Math.max(0, Math.min(100, val));
    const opaqueStop = Math.min(100, val + 25);
    return `linear-gradient(to top, transparent 0%, transparent ${transparentStop}%, black ${opaqueStop}%, black 100%)`;
  });

  return (
    <div className="relative w-full z-10">
      {/* 
        Solid White Content Surface:
        Holds Selected Work and About section.
        Always 100% solid white and unmasked so the visitor can comfortably read
        all text, philosophies, and skill matrices without premature disappearance.
      */}
      <div className="relative w-full bg-[#FFFFFF] text-neutral-900">
        {children}
      </div>

      {/* 
        DEDICATED SEAMLESS DISMISSAL STAGE:
        Positioned below the About section before the Cosmic Footer.
        Utilizes a scroll-linked Framer Motion CSS linear gradient mask
        on the solid white curtain to smoothly dissolve/wipe away vertically
        from bottom to top, gracefully revealing the persistent deep space
        background (stars, shifting nebulae, passing meteoroids) directly underneath it.
      */}
      <div
        ref={exitStageRef}
        className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage,
          }}
          className="absolute inset-0 w-full h-full bg-[#FFFFFF]"
        />
      </div>
    </div>
  );
};
