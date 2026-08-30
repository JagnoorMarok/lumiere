import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { PROJECTS } from '../data/siteData';
import { Project } from '../types';

interface FeaturedWorksSectionProps {
  onSelectProject: (project: Project) => void;
  onViewAllPortfolio: () => void;
}

// A sub-component for each pinned panel to handle its specific scroll transform
const StoryPanel: React.FC<{
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  onSelectProject: (project: Project) => void;
}> = ({
  project,
  index,
  total,
  scrollYProgress,
  onSelectProject,
}) => {
  // Determine the scroll range for this specific panel to slide in
  const start = (index - 1) / (total - 1);
  const end = index / (total - 1);

  // The panel slides from 100% (below the view) to 0% (fully visible)
  const y = useTransform(scrollYProgress, [start, end], ['100%', '0%']);

  return (
    <motion.div
      style={{
        y: index === 0 ? '0%' : y,
        zIndex: index,
      }}
      className="absolute top-0 left-0 w-full h-full bg-[#FAFAF7] overflow-hidden cursor-pointer group"
      onClick={() => onSelectProject(project)}
    >
      <div className="w-full h-full relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
        {/* Subtle gradient for metadata readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Small Metadata Area */}
        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 flex flex-col gap-1.5 z-10">
          <h3 className="text-white text-xl sm:text-2xl font-serif font-light mb-1">
            {project.title}
          </h3>
          <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-sans">
            {project.client}
          </span>
          <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-sans">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedWorksSection: React.FC<FeaturedWorksSectionProps> = ({
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress of the entire tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const featuredStories = PROJECTS; // Currently 4 projects

  return (
    <section id="featured-works-section" className="relative z-10 bg-[#FAFAF7] pt-24 md:pt-40">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
        <h2 className="font-serif text-5xl md:text-7xl font-normal text-[#111] mb-6 tracking-tight">
          Featured Stories
        </h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6E66] max-w-sm mx-auto leading-relaxed font-sans">
          A curated selection of visual narratives.<br/>
          Each frame a study in light and atmosphere.
        </p>
      </div>

      {/* Pinned Scroll Sequence Container */}
      <div
        ref={containerRef}
        className="relative w-full px-4 sm:px-8 lg:px-12 pb-24 md:pb-40"
        style={{ height: `${featuredStories.length * 100}vh` }}
      >
        {/* The Sticky Viewport */}
        <div className="sticky top-[5vh] w-full h-[90vh] overflow-hidden bg-[#FAFAF7]">
          {featuredStories.map((project, index) => (
            <StoryPanel
              key={project.id}
              project={project}
              index={index}
              total={featuredStories.length}
              scrollYProgress={scrollYProgress}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
