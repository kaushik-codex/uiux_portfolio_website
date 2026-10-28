'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectMockupProps {
  project: Project;
  isHovered?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project, isHovered = false }) => {
  const hoverClass = isHovered ? 'shadow-2xl scale-[1.01]' : '';

  if (project.id === 'recraft-ai' || project.mockupType === 'recraft') {
    return (
      <div
        className={`relative w-full h-72 sm:h-80 bg-[#0A1A10] rounded-xl overflow-hidden border border-emerald-600/30 flex items-center justify-center transition-all duration-300 group/mockup ${hoverClass}`}
      >
        {/* Subtle radial emerald background glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,128,61,0.25)_0%,transparent_75%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Dual Phone Showcase Layout */}
        <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 px-4 py-4 w-full h-full">
          {/* Phone Frame 1: Detection View */}
          <div className="relative w-32 sm:w-40 h-[92%] rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/40 bg-black flex-shrink-0 transform group-hover/mockup:-translate-y-1 transition-transform duration-300">
            <Image
              src="/projects/recraft-ai/recraft-detection.jpg"
              alt="ReCraft AI Object Detection Screen"
              fill
              sizes="(max-width: 640px) 130px, 160px"
              className="object-cover object-top"
              priority
            />
            {/* Live Tag Pill Badge */}
            <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-emerald-500/50 text-[9px] font-mono text-emerald-300 text-center">
              99.9% AI Confidence
            </div>
          </div>

          {/* Phone Frame 2: Upcycling Ideas Feed */}
          <div className="relative w-36 sm:w-44 h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/50 bg-black flex-shrink-0 transform translate-y-2 group-hover/mockup:translate-y-0 transition-transform duration-300">
            <Image
              src="/projects/recraft-ai/recraft-ideas.jpg"
              alt="ReCraft AI Upcycling Ideas Feed"
              fill
              sizes="(max-width: 640px) 140px, 180px"
              className="object-cover object-top"
            />
            {/* Steps Indicator Badge */}
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold">
              4-Step Upcycling
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-4 text-[10px] font-mono text-emerald-400">
          <span>ON-DEVICE IMAGE ML</span>
          <span>FLUTTER 3.x</span>
        </div>
      </div>
    );
  }

  // Gourmet Project Showcase
  return (
    <div
      className={`relative w-full h-72 sm:h-80 bg-[#0B132B] rounded-xl overflow-hidden border border-orange-500/30 flex items-center justify-center transition-all duration-300 group/mockup ${hoverClass}`}
    >
      {/* Subtle radial warm orange background glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22)_0%,transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Triple / Dual Phone Showcase Layout using Real Screenshots */}
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 py-4 w-full h-full">
        {/* Phone Frame 1: Frictionless Auth View */}
        <div className="hidden sm:block relative w-28 md:w-32 h-[88%] rounded-2xl overflow-hidden shadow-xl border border-orange-500/30 bg-black flex-shrink-0 transform -rotate-2 group-hover/mockup:rotate-0 group-hover/mockup:-translate-y-1 transition-all duration-300">
          <Image
            src="/projects/gourmet/gourmet-auth.jpg"
            alt="Gourmet Minimal Auth Interface"
            fill
            sizes="130px"
            className="object-cover object-top"
          />
          <div className="absolute bottom-2 left-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-orange-500/40 text-[8px] font-mono text-orange-300 text-center truncate">
            Inline Eye Toggle
          </div>
        </div>

        {/* Phone Frame 2: Primary Gourmet Discovery Feed */}
        <div className="relative w-32 sm:w-36 md:w-40 h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/60 bg-black flex-shrink-0 z-10 transform group-hover/mockup:scale-105 transition-all duration-300">
          <Image
            src="/projects/gourmet/gourmet-home.jpg"
            alt="Gourmet Mobile Discovery Feed"
            fill
            sizes="(max-width: 640px) 140px, 180px"
            className="object-cover object-top"
            priority
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-orange-600 text-white text-[9px] font-bold shadow-md">
            Popular Foods
          </div>
        </div>

        {/* Phone Frame 3: Profile Dashboard */}
        <div className="relative w-28 sm:w-32 md:w-36 h-[90%] rounded-2xl overflow-hidden shadow-xl border border-orange-500/40 bg-black flex-shrink-0 transform translate-y-2 rotate-2 sm:rotate-1 group-hover/mockup:translate-y-0 group-hover/mockup:rotate-0 transition-all duration-300">
          <Image
            src="/projects/gourmet/gourmet-profile.jpg"
            alt="Gourmet User Profile Dashboard"
            fill
            sizes="(max-width: 640px) 120px, 150px"
            className="object-cover object-top"
          />
          <div className="absolute bottom-2 left-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-orange-500/40 text-[8px] font-mono text-orange-300 text-center truncate">
            Profile Dashboard
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-4 text-[10px] font-mono text-orange-400">
        <span>HORIZONTAL THUMB FILTERS</span>
        <span>VISUAL CARD-FIRST</span>
      </div>
    </div>
  );
};
