'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { X, CheckCircle2, Cpu, Layers, Image as ImageIcon, Compass } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

interface ProjectModalContentProps {
  project: Project;
  onClose: () => void;
}

const ProjectModalContent: React.FC<ProjectModalContentProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'screenshots' | 'wireframes'>('screenshots');
  const [selectedAssetIndex, setSelectedAssetIndex] = useState<number>(0);

  const currentAssets =
    activeTab === 'screenshots'
      ? project.screenshots
      : (project.wireframes && project.wireframes.length > 0 ? project.wireframes : project.screenshots);

  const activeAssetSrc = currentAssets[selectedAssetIndex] || currentAssets[0];

  const technicalBullets = project.technicalInnovations || project.highlightPoints || [];
  const toolsBadges = project.toolsBadges || project.techStack || [];
  const architecturalText = project.architecturalExecution || project.description;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Window Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 text-neutral-100 my-2 sm:my-8 max-h-[95vh] sm:max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-800 bg-neutral-950/90 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-neutral-800 text-neutral-200 border border-neutral-700 tracking-wide">
              {project.modalHeader || `CASE STUDY // ${project.categoryTag}`}
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              [ Year {project.year} ]
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto custom-scrollbar">
          {/* Project Title and Role Banner */}
          <div>
            <h2 id="modal-title" className="text-xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-lg text-neutral-300 mt-1 font-medium">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-3 text-[11px] sm:text-xs font-mono text-neutral-400">
              <span className="text-neutral-200">{project.roleText || `Role: ${project.role}`}</span>
              <span>•</span>
              <span>Status: <strong className="text-emerald-400">Production Verified</strong></span>
            </div>
          </div>

          {/* Verified Metrics Row (3-Column Architecture) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 shadow-inner">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center p-1.5 sm:p-2 rounded-lg bg-neutral-900/50 border border-neutral-800/60">
                  <div className="text-[9px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{m.label}</div>
                  <div className="text-xs sm:text-lg font-bold text-white mt-0.5 sm:mt-1 truncate">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* LOCAL LAYOUT ASSETS GALLERY: Screenshots & Wireframes */}
          <div className="space-y-3 sm:space-y-4 rounded-xl sm:rounded-2xl bg-neutral-950 border border-neutral-800 p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-neutral-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Layout Asset Viewer
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                  Local High-Fidelity
                </span>
              </div>

              {/* Tab Switcher: Screenshots vs Wireframes */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-900 border border-neutral-800 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveTab('screenshots');
                    setSelectedAssetIndex(0);
                  }}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                    activeTab === 'screenshots'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Screenshots ({project.screenshots.length})</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('wireframes');
                    setSelectedAssetIndex(0);
                  }}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                    activeTab === 'wireframes'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Wireframes ({project.wireframes ? project.wireframes.length : 0})</span>
                </button>
              </div>
            </div>

            {/* Asset Hero Stage */}
            <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-2 sm:p-3">
              {activeAssetSrc ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={activeAssetSrc}
                    alt={`${project.title} ${activeTab} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 850px"
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="text-neutral-500 font-mono text-xs">No preview available</div>
              )}
            </div>

            {/* Asset Thumbnails Selector */}
            {currentAssets.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
                {currentAssets.map((asset, i) => (
                  <button
                    key={asset + i}
                    onClick={() => setSelectedAssetIndex(i)}
                    className={`relative w-16 h-24 sm:w-20 sm:h-28 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer bg-neutral-900 ${
                      selectedAssetIndex === i
                        ? 'border-white scale-105 shadow-md'
                        : 'border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600'
                    }`}
                    aria-label={`View asset ${i + 1}`}
                  >
                    <Image
                      src={asset}
                      alt={`Asset thumb ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Architectural Execution Section */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 uppercase font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-400" />
              Architectural Execution
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-normal">
              {architecturalText}
            </p>
          </div>

          {/* Technical Innovations Bullets */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 uppercase font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neutral-400" />
              Key Technical Innovations
            </h3>
            <ul className="space-y-3">
              {technicalBullets.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies & Tools Badges */}
          <div className="space-y-3 pt-3 border-t border-neutral-800">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
              Technologies & Tools Badges
            </span>
            <div className="flex flex-wrap gap-2">
              {toolsBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-800 text-neutral-200 border border-neutral-700/80 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <ProjectModalContent key={project.id} project={project} onClose={onClose} />
    </AnimatePresence>
  );
};
