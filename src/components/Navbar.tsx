import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveView } from '../types';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (view: ActiveView) => {
    setIsMobileMenuOpen(false);
    if (view === 'contact') {
      onOpenContact();
    } else {
      setActiveView(view);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center text-[#111] bg-transparent">
        {/* Left side brand */}
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-serif text-lg tracking-widest uppercase">Lumière</span>
          <span className="hidden md:inline text-xs font-mono tracking-widest text-[#6B6E66] uppercase ml-2">
            [London, United Kingdom]— Photography Agency
          </span>
        </div>
        
        {/* Right side links - Desktop */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-[#6B6E66]">
          <button 
            onClick={() => handleNav('home')} 
            className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'home' ? 'text-[#111]' : ''}`}
          >
            Home
          </button>
          <span className="text-[#6B6E66]/50">|</span>
          <button 
            onClick={() => handleNav('about')} 
            className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'about' ? 'text-[#111]' : ''}`}
          >
            About Us
          </button>
          <span className="text-[#6B6E66]/50">|</span>
          <button 
            onClick={() => handleNav('portfolio')} 
            className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'portfolio' ? 'text-[#111]' : ''}`}
          >
            Portfolio
          </button>
          <span className="text-[#6B6E66]/50">|</span>
          <button 
            onClick={() => handleNav('contact')} 
            className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'contact' ? 'text-[#111]' : ''}`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#111]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          [ Menu ]
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#FAFAF7] flex flex-col justify-between"
          >
            <div className="py-6 px-6 flex justify-between items-center text-[#111]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-serif text-lg tracking-widest uppercase">Lumière</span>
              </div>
              <button 
                className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#111]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                [ Close ]
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-8">
              <button 
                onClick={() => handleNav('home')} 
                className={`text-4xl font-serif uppercase tracking-widest hover:opacity-50 transition-opacity ${activeView === 'home' ? 'text-[#111]' : 'text-[#6B6E66]'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className={`text-4xl font-serif uppercase tracking-widest hover:opacity-50 transition-opacity ${activeView === 'about' ? 'text-[#111]' : 'text-[#6B6E66]'}`}
              >
                About Us
              </button>
              <button 
                onClick={() => handleNav('portfolio')} 
                className={`text-4xl font-serif uppercase tracking-widest hover:opacity-50 transition-opacity ${activeView === 'portfolio' ? 'text-[#111]' : 'text-[#6B6E66]'}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                className={`text-4xl font-serif uppercase tracking-widest hover:opacity-50 transition-opacity ${activeView === 'contact' ? 'text-[#111]' : 'text-[#6B6E66]'}`}
              >
                Contact
              </button>
            </div>

            <div className="py-8 text-center text-xs font-mono tracking-widest text-[#6B6E66] uppercase">
              [London, United Kingdom]
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};