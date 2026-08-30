import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ArrowRight, Calendar, MapPin, Tag, Share2, Layers, Check } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/siteData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  const [copied, setCopied] = React.useState(false);

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

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div id="project-detail-modal-overlay" className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-[#FAFAF7] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#E6E6DF] my-6"
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-20 bg-[#FAFAF7]/95 backdrop-blur-md px-6 py-4 border-b border-[#E6E6DF] flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#52574A]">
              <span className="font-semibold text-[#1E201B]">{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full border border-[#D8D8CF] text-[#1E201B] hover:bg-[#EBEBE4] transition-colors cursor-pointer"
                title="Copy link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                id="close-project-modal"
                onClick={onClose}
                className="p-2 rounded-full bg-[#1E201B] text-[#FAFAF7] hover:bg-[#34382E] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Project Content Container */}
          <div className="p-6 sm:p-10 md:p-14 space-y-12">
            {/* Title & Metadata Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#52574A]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
                <span>—</span>
                <span className="text-[#1E201B] font-medium">{project.client}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1E201B] tracking-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-[#52574A] font-light leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Metadata Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#ECECE6]">
                <div className="p-3.5 rounded-xl bg-[#F2F2EC] border border-[#E6E6DF]">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6E66] block">Client</span>
                  <span className="text-xs font-semibold text-[#1E201B]">{project.client}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F2F2EC] border border-[#E6E6DF]">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6E66] block">Year</span>
                  <span className="text-xs font-semibold text-[#1E201B]">{project.year}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F2F2EC] border border-[#E6E6DF]">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6E66] block">Location</span>
                  <span className="text-xs font-semibold text-[#1E201B]">{project.location}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F2F2EC] border border-[#E6E6DF]">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6E66] block">Discipline</span>
                  <span className="text-xs font-semibold text-[#1E201B]">{project.category}</span>
                </div>
              </div>
            </div>

            {/* Main Cover Display */}
            <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-[#EBEBE4] border border-[#E6E6DF]">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story & Context Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-[#ECECE6]">
              <div className="md:col-span-4 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#52574A] font-semibold block">
                  The Narrative
                </span>
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#6B6E66] block">Delivered Services</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <span key={s} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F2F2EC] text-[#52574A] border border-[#E6E6DF]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#52574A] font-light leading-relaxed">
                <p>{project.story}</p>
                <p>{project.details}</p>
              </div>
            </div>

            {/* Photo Essay Gallery Plates */}
            <div className="space-y-6 pt-6 border-t border-[#ECECE6]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#52574A] font-semibold">
                  Photo Plates & Archive ({project.gallery.length})
                </span>
                <span className="text-xs text-[#6B6E66]">High-resolution captures</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((plate, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl overflow-hidden border border-[#E6E6DF] bg-[#F2F2EC] space-y-2 p-3 ${
                      plate.aspect === 'landscape' ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl bg-[#EBEBE4]">
                      <img
                        src={plate.url}
                        alt={plate.caption || `Plate ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                        loading="lazy"
                      />
                    </div>
                    {plate.caption && (
                      <p className="text-[11px] text-[#6B6E66] italic px-1 pt-1">
                        Plate 0{idx + 1} — {plate.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Next / Previous Project Navigation */}
            <div className="pt-10 border-t border-[#ECECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#D8D8CF] text-xs uppercase tracking-wider font-semibold text-[#1E201B] hover:bg-[#EBEBE4] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev: {prevProject.title}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1E201B] text-[#FAFAF7] text-xs uppercase tracking-wider font-semibold hover:bg-[#34382E] transition-colors cursor-pointer"
              >
                Inquire for Similar Project
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#D8D8CF] text-xs uppercase tracking-wider font-semibold text-[#1E201B] hover:bg-[#EBEBE4] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
