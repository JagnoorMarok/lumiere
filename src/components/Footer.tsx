import React from 'react';
import { ActiveView } from '../types';
import { SITE_INFO, PROJECTS } from '../data/siteData';
import { motion } from 'motion/react';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
  onOpenContact: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpen404: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  setActiveView, 
  onOpenContact,
  onOpenLegal,
  onOpen404
}) => {
  const maskImage = PROJECTS[0].gallery[0].url;

  return (
    <footer className="relative z-20 bg-[#2C2C2C] text-[#FAFAF7] overflow-hidden flex flex-col font-mono selection:bg-[#FAFAF7] selection:text-[#111]">
      
      {/* Top: Socials Row */}
      <div className="w-full px-6 sm:px-12 py-8 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-4 text-xs md:text-sm text-[#A1A19A] hover:[&>a]:text-white [&>a]:transition-colors">
          <a href="#" target="_blank" rel="noreferrer">[LinkedIn]</a>
          <a href="#" target="_blank" rel="noreferrer">[X (Twitter)]</a>
          <a href="#" target="_blank" rel="noreferrer">[Instagram]</a>
          <a href="#" target="_blank" rel="noreferrer">[Pinterest]</a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 pt-24 pb-8 flex flex-col justify-between flex-grow">
        
        {/* Middle: 3 Columns */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-12 sm:gap-4 mb-24 md:mb-32 text-xs md:text-sm text-[#A1A19A]">
          
          {/* Left Column: Pages */}
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[#FAFAF7] mb-2 text-sm md:text-base">[Pages]</span>
            <button onClick={() => setActiveView('home')} className="hover:text-white transition-colors text-left underline decoration-white/20 underline-offset-4 hover:decoration-white">Home</button>
            <button onClick={() => setActiveView('collection')} className="hover:text-white transition-colors text-left underline decoration-white/20 underline-offset-4 hover:decoration-white">Blog</button>
            <button onClick={onOpen404} className="hover:text-white transition-colors text-left underline decoration-white/20 underline-offset-4 hover:decoration-white">404</button>
          </div>
          
          {/* Center Column: Company */}
          <div className="flex flex-col gap-2 sm:items-center sm:text-center text-left">
            <span className="text-[#FAFAF7] mb-2 text-sm md:text-base">[Company]</span>
            <button onClick={() => setActiveView('about')} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">About Us</button>
            <button onClick={() => setActiveView('portfolio')} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">Portfolio</button>
            <button onClick={onOpenContact} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">Contact</button>
          </div>
          
          {/* Right Column: Legal */}
          <div className="flex flex-col gap-2 sm:items-end sm:text-right text-left">
            <span className="text-[#FAFAF7] mb-2 text-sm md:text-base">[Legal]</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">privacy policy</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">terms and conditions</button>
          </div>
          
        </div>

        {/* Huge Photographic Wordmark */}
        <div className="w-full flex items-center justify-center pb-12 pointer-events-none select-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center font-serif text-[22vw] leading-[0.75] tracking-tighter"
            style={{
              backgroundImage: `url(${maskImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            LUMIÈRE
          </motion.h1>
        </div>

      </div>

      {/* Bottom: Copyright */}
      <div className="w-full border-t border-white/10 px-6 sm:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-[#A1A19A]">
        <p>
          &copy; 2023-2026 LUMIÈRE. All rights reserved.
        </p>
        <p>
          Made by LUMIÈRE with React
        </p>
      </div>

    </footer>
  );
};
