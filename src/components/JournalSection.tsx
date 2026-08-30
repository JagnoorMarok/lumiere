import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ARTICLES } from '../data/siteData';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';

interface JournalSectionProps {
  onSelectArticle: (article: Article) => void;
  onViewAllArticles: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onSelectArticle,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"]
  });

  // Fanning out transforms
  const leftX = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const commonY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const commonOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} id="journal-section" className="relative z-10 bg-[#FAFAF7] pt-40 md:pt-64 pb-24 md:pb-40">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 md:mb-40">
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#111] mb-6 tracking-tight">
          Notes from behind the lens
        </h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6E66] max-w-lg mx-auto leading-relaxed font-sans">
          A collection of stories, observations, and insights—from creative process and lighting techniques to travel diaries and the moments that shape every photograph.
        </p>
      </div>

      {/* Spacious Grid of Editorial Cards */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {ARTICLES.map((article, index) => {
            // Determine X transform based on index
            const xTransform = isMobile ? 0 : index === 0 ? leftX : index === 2 ? rightX : 0;

            return (
              <motion.article
                key={article.id}
                style={{
                  x: xTransform,
                  y: commonY,
                  opacity: commonOpacity,
                }}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer flex flex-col bg-[#FAFAF7] border border-[#E5E5DF] p-4 md:p-6 transition-colors duration-500 hover:bg-white"
              >
              {/* Rectangular Image */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#E5E5DF]">
                <img 
                  src={article.coverImage} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Metadata */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#6B6E66]">
                  {article.category} / 0{index + 3}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6B6E66] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl text-[#111] leading-snug">
                {article.title}
              </h3>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
