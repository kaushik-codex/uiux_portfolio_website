'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_DOMAINS } from '@/data/portfolio';
import { Palette, Smartphone, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-20 w-full text-neutral-900 py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
              <span>[ Philosophy & Discipline ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              About Kaushik
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Eliminating the designer-developer divide by engineering cross-platform interfaces with both visual empathy and architectural rigor.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl font-medium text-neutral-900 leading-snug">
              Most digital products suffer when beautiful Figma prototypes encounter the compromises of production code.
            </p>
            <p>
              As a hybrid <strong>UI/UX Designer & Flutter Developer</strong>, I operate across both dimensions. I design design systems with deep awareness of widget constraints, state trees, and rendering budgets — and I write Flutter code with pixel-level respect for typographic cadence, spring physics, and micro-interactions.
            </p>
            <p className="text-neutral-600">
              Whether building custom canvas visualizers, architecting BLoC/Riverpod state pipelines, or formalizing multi-brand design tokens, the focus is always on creating seamless, accessible, 60fps experiences that feel intuitive from the first touch.
            </p>

            {/* Fast Stats / Principles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200 text-left">
              <div>
                <span className="text-xs font-mono text-neutral-500 block uppercase">Standard</span>
                <span className="text-lg font-bold text-neutral-900">60 FPS Native</span>
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block uppercase">Fidelity</span>
                <span className="text-lg font-bold text-neutral-900">1:1 Token Parity</span>
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block uppercase">Focus</span>
                <span className="text-lg font-bold text-neutral-900">WCAG AA/AAA</span>
              </div>
            </div>
          </div>

          {/* Dual Core Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {SKILL_DOMAINS.map((domain, idx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-neutral-200 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-900 text-white">
                    {idx === 0 ? <Palette className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {domain.title}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">
                      Core Discipline // 0{idx + 1}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 border-t border-neutral-200/80">
                  {domain.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
