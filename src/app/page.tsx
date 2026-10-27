'use client';

import React, { useState } from 'react';
import { WireframeLoader } from '@/components/loader/WireframeLoader';
import { GlassHud } from '@/components/navigation/GlassHud';
import { CosmicEnvironment } from '@/components/canvas/CosmicEnvironment';
import { TypographicPortal } from '@/components/portal/TypographicPortal';
import { ProjectsSection } from '@/components/work/ProjectsSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SeamlessWhiteDismissal } from '@/components/transitions/SeamlessWhiteDismissal';
import { CosmicFooter } from '@/components/footer/CosmicFooter';

export default function HomePage() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <>
      {/* Introductory Wireframe Loader Sequence */}
      <WireframeLoader onComplete={() => setLoaderComplete(true)} />

      {/* 
        Living Persistent Cosmic Environment:
        Stars, shifting organic nebulae in violet/indigo/teal, and passing shooting meteoroids
        running continuously behind the entire layout.
      */}
      <CosmicEnvironment />

      {/* Main Experience Layout */}
      <div
        className={`relative min-h-screen bg-transparent z-10 transition-opacity duration-700 ${
          loaderComplete ? 'opacity-100' : 'opacity-95'
        }`}
      >
        {/* Floating Glass Navigation HUD */}
        <GlassHud />

        <main>
          {/* Experience II & Signature Interaction: Deep-Space Hero & Typographic Portal into White */}
          <TypographicPortal />

          {/* 
            Seamless Dismissal Transition:
            Wraps the high-fidelity white Case Studies & About sections.
            Utilizes a scroll-linked Framer Motion CSS linear gradient mask
            to smoothly dissolve/wipe away vertically from bottom to top,
            gracefully revealing the persistent deep space background underneath.
          */}
          <SeamlessWhiteDismissal>
            {/* Experience III: High-Fidelity Editorial Project Grid */}
            <ProjectsSection />

            {/* Genuine Narrative & Discipline Architecture */}
            <AboutSection />
          </SeamlessWhiteDismissal>
        </main>

        {/* Experience IV: Cosmic Finale & Contact (Sitting in the revealed Deep Space) */}
        <CosmicFooter />
      </div>
    </>
  );
}
