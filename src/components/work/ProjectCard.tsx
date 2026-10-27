'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tags = project.techTags || project.techStack || [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col justify-between p-5 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-400/80 hover:shadow-xl transition-all duration-300"
    >
      {/* Top Metadata Bar: Category Tag & Year */}
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-3">
          <span className="font-semibold text-neutral-800 tracking-wide text-[11px] sm:text-xs">
            {project.categoryTag || `0${index + 1} // ${project.platform}`}
          </span>
          <span className="text-neutral-500 font-mono text-[11px] sm:text-xs">{project.year}</span>
        </div>

        {/* Visual Presentation / Interactive Mockup with Local Assets */}
        <div className="relative my-3 sm:my-4 rounded-xl overflow-hidden bg-neutral-950 shadow-md group-hover:shadow-lg transition-shadow">
          <ProjectMockup project={project} isHovered={isHovered} />
        </div>

        {/* Project Title and Subtitle */}
        <div className="mt-4 sm:mt-5 space-y-1 sm:space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-black transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
              {project.categoryTag}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-neutral-700">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          {project.shortDescription || project.summary}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">
          {tags.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-neutral-200/80 text-neutral-700 border border-neutral-300/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer: Role Text & Explore Case Study */}
      <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-200/80 flex flex-row items-center justify-between gap-2">
        <span className="text-[11px] sm:text-xs font-mono text-neutral-600 truncate max-w-[62%]">
          {project.roleText || `Role: ${project.role}`}
        </span>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-black transition-all group-hover:scale-105 shadow-sm cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black shrink-0"
          aria-label={`Explore case study for ${project.title}`}
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
};
