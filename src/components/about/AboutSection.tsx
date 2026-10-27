'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILL_DOMAINS, EDUCATION_HISTORY } from '@/data/portfolio';
import {
  Palette,
  Smartphone,
  Terminal,
  Check,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
  Award,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-20 w-full text-neutral-900 py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* ========================================================= */}
        {/* SECTION HEADER: Editorial Title + Meta Pill Badges        */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-neutral-200">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
              <span>[ Philosophy, Background & Discipline ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              About Kaushik
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Hybrid UI/UX Designer and Mobile Developer specializing in bridging the gap between high-fidelity layouts and responsive digital products.
            </p>
          </div>

          {/* Quick Context Pills */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-700 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-xs font-medium shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            {PERSONAL_INFO.phone && (
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* NARRATIVE & CORE PHILOSOPHY                              */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-snug tracking-tight">
              &ldquo;Experience executing an end-to-end design process: translating initial low-fidelity wireframes into high-fidelity Figma components, interactive prototypes, and production-grade frontend structures.&rdquo;
            </p>
            <p>
              Adept at eliminating the designer-developer divide by applying strong <strong>user empathy</strong>, rigorous <strong>information architecture</strong>, and structured <strong>design token systems</strong> to cross-platform mobile experiences.
            </p>
            <p className="text-neutral-600">
              By working fluidly across both design canvases and Flutter codebases, every component is engineered with real rendering budgets, responsive touch-target ergonomics, and 60fps interaction physics in mind from day zero.
            </p>

            {/* Fast Academic & Technical Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <span className="text-[11px] font-mono text-neutral-500 block uppercase">B.Sc. CS</span>
                <span className="text-lg font-bold text-neutral-900">83.7%</span>
                <span className="text-[10px] text-neutral-500 block">Utkal Univ.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <span className="text-[11px] font-mono text-neutral-500 block uppercase">Degree</span>
                <span className="text-lg font-bold text-neutral-900">MCA</span>
                <span className="text-[10px] text-neutral-500 block">BPUT (Present)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <span className="text-[11px] font-mono text-neutral-500 block uppercase">Fidelity</span>
                <span className="text-lg font-bold text-neutral-900">1:1 Tokens</span>
                <span className="text-[10px] text-neutral-500 block">Figma to Code</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <span className="text-[11px] font-mono text-neutral-500 block uppercase">Standard</span>
                <span className="text-lg font-bold text-neutral-900">60 FPS</span>
                <span className="text-[10px] text-neutral-500 block">Native Fluidity</span>
              </div>
            </div>
          </div>

          {/* Side Highlight Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-neutral-900 text-white shadow-xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-violet-500/20 via-transparent to-transparent pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 text-white">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  The Designer-Developer Bridge
                </h3>
                <span className="text-xs font-mono text-neutral-400">
                  Cross-Platform Specialization
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Most design compromises occur during handoff. By executing both Figma systems and Flutter architectures, state machines, animation curves, and layout constraints are designed and verified directly in sync.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Location</span>
                <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Education</span>
                <span className="text-white font-medium">MCA Candidate, BPUT</span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Availability</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open for Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3-PILLAR SKILL ARCHITECTURE (Direct from Resume)          */}
        {/* ========================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                <span>[ Technical & Design Pillars ]</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                Core Competencies & Stack
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
              Structured across design systems, cross-platform client development, and modular architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_DOMAINS.map((domain, idx) => {
              const icons = [
                <Palette key="0" className="w-5 h-5 text-indigo-600" />,
                <Smartphone key="1" className="w-5 h-5 text-emerald-600" />,
                <Terminal key="2" className="w-5 h-5 text-violet-600" />,
              ];

              return (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  className="p-7 rounded-3xl bg-[#FAFAFA] border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-white border border-neutral-200 shadow-xs">
                        {icons[idx % icons.length]}
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        // 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 tracking-tight">
                        {domain.title}
                      </h4>
                      <p className="text-xs font-mono text-neutral-500 mt-0.5">
                        {domain.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-3 border-t border-neutral-200/80">
                      {domain.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/60 text-[11px] font-mono text-neutral-400 uppercase">
                    Verified Competency
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* EDUCATION JOURNEY TIMELINE (Direct from Resume)           */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                <span>[ Academic Journey ]</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                Education & Qualifications
              </h3>
            </div>
            <span className="text-xs sm:text-sm text-neutral-500">
              Computer Science & Applications Foundation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_HISTORY.map((edu, idx) => (
              <motion.div
                key={edu.degree + edu.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-xs hover:border-neutral-300 transition-all space-y-4 relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-neutral-500 block uppercase">
                        {edu.period}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {edu.degree}
                      </h4>
                    </div>
                  </div>

                  {edu.score && (
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold whitespace-nowrap">
                      {edu.score}
                    </span>
                  )}
                  {edu.period.includes('Present') && (
                    <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                      In Progress
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 pt-2">
                  <p className="text-sm font-semibold text-neutral-800">
                    {edu.institution}
                  </p>
                  {edu.affiliation && (
                    <p className="text-xs text-neutral-500 font-mono">
                      Affiliation: {edu.affiliation}
                    </p>
                  )}
                  {edu.details && (
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTION CALL-TO-ACTION                                */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-100 border border-neutral-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-neutral-900">
              Want to see this design philosophy in production?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Explore the interactive case studies above or connect directly for opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs sm:text-sm font-medium transition-colors shadow-xs inline-flex items-center gap-2"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-2.5 rounded-full bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs sm:text-sm font-medium transition-colors shadow-xs inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
