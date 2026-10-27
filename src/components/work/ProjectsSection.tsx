'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolio';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative z-20 w-full text-neutral-900 py-24 sm:py-32 px-4 sm:px-8 lg:px-12 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-neutral-200">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span>[ 01 — 02 ] Curated Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              Selected Work
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Bridging architectural Figma design systems with fluid, production-grade Flutter applications. Designed for real-world ergonomics and 60fps performance.
          </p>
        </div>

        {/* Two-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
