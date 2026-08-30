import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight,  MapPin, Grid, List } from 'lucide-react';
import { PROJECTS } from '../data/siteData';
import { Project } from '../types';
interface PortfolioViewProps {
  onBackToHome: () => void;
  onSelectProject: (project: Project) => void;
}
export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onBackToHome,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const categories = ['All', 'Editorial', 'Architecture', 'Fashion', 'Travel'];
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
  return (
    <div id="portfolio-page-view" className="pt-28 sm:pt-36 pb-20 md:pb-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back navigation & Page Header */}
        <div className="space-y-6 border-b border-[#E6E6DF] pb-10">
          <button
            id="portfolio-back-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#52574A] hover:text-[#1E201B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#52574A] font-semibold flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1E201B]"></span>
                Archive & Commissions
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#1E201B] tracking-tight">
                Selected Works
              </h1>
            </div>
            <p className="text-sm text-[#52574A] max-w-md font-light leading-relaxed">
              Explore our complete body of work spanning editorial publications, modernist architecture, haute couture lookbooks, and subarctic expeditions.
            </p>
          </div>
          {/* Filters & View Switcher Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#ECECE6]">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`filter-cat-${cat.toLowerCase()}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1E201B] text-[#FAFAF7] shadow-xs'
                        : 'bg-[#F2F2EC] text-[#52574A] hover:bg-[#EBEBE4] hover:text-[#1E201B] border border-[#E6E6DF]'
                    }`}
                  >
                    {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
                  </button>
                );
              })}
            </div>
            {/* Grid / List Mode Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[#F2F2EC] p-1 rounded-full border border-[#E6E6DF]">
              <button
                id="viewmode-grid-btn"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#FAFAF7] text-[#1E201B] shadow-xs' : 'text-[#6B6E66]'
                }`}
                aria-label="Grid layout"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                id="viewmode-list-btn"
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-[#FAFAF7] text-[#1E201B] shadow-xs' : 'text-[#6B6E66]'
                }`}
                aria-label="List layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Works Rendering */}
        {viewMode === 'grid' ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer flex flex-col space-y-4 rounded-3xl bg-[#F7F7F2] p-5 sm:p-6 border border-[#E6E6DF] hover:border-[#1E201B] transition-all duration-300"
                >
                  <div className="aspect-[16/11] overflow-hidden rounded-2xl bg-[#EBEBE4] relative">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAFAF7]/90 backdrop-blur-xs text-[10px] uppercase tracking-wider font-semibold text-[#1E201B]">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs text-[10px] tracking-wider text-white">
                      {project.year}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#6B6E66]">
                      <span>{project.client}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1E201B] group-hover:underline underline-offset-4 decoration-[#6B6E66]">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#52574A] font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-[#ECECE6]">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1E201B]">
                        View Photo Essay ({project.gallery.length} Plates)
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#EBEBE4] group-hover:bg-[#1E201B] group-hover:text-[#FAFAF7] text-[#1E201B] flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer p-6 rounded-2xl bg-[#F7F7F2] border border-[#E6E6DF] hover:border-[#1E201B] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-20 rounded-xl overflow-hidden bg-[#EBEBE4] flex-shrink-0">
                    <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#6B6E66] mb-1">
                      <span className="font-mono">0{idx + 1}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-[#1E201B] group-hover:underline underline-offset-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-[#52574A]">
                  <span className="hidden lg:inline">{project.client}</span>
                  <span>{project.location}</span>
                  <div className="w-9 h-9 rounded-full border border-[#D8D8CF] group-hover:bg-[#1E201B] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};