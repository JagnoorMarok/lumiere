import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { ActiveView } from '../types';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 sm:px-12 flex justify-between items-center text-[#111] bg-transparent">
      {/* Left side brand */}
      <div 
        onClick={() => setActiveView('home')}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <Sparkles className="w-4 h-4" />
        <span className="font-serif text-lg tracking-widest uppercase">Lumière</span>
        <span className="hidden sm:inline text-xs font-mono tracking-widest text-[#6B6E66] uppercase ml-2">
          [London, United Kingdom]— Photography Agency
        </span>
      </div>

      {/* Right side links */}
      <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-[#6B6E66]">
        <button 
          onClick={() => setActiveView('home')} 
          className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'home' ? 'text-[#111]' : ''}`}
        >
          Home
        </button>
        <span className="text-[#6B6E66]/50">|</span>
        <button 
          onClick={() => setActiveView('about')} 
          className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'about' ? 'text-[#111]' : ''}`}
        >
          About Us
        </button>
        <span className="text-[#6B6E66]/50">|</span>
        <button 
          onClick={() => setActiveView('portfolio')} 
          className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'portfolio' ? 'text-[#111]' : ''}`}
        >
          Portfolio
        </button>
        <span className="text-[#6B6E66]/50">|</span>
        <button 
          onClick={() => setActiveView('contact')} 
          className={`hover:text-[#111] transition-colors cursor-pointer ${activeView === 'contact' ? 'text-[#111]' : ''}`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
