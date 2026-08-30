import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/siteData';

interface StoryCTAProps {
  onOpenContact: () => void;
}

export const StoryCTA: React.FC<StoryCTAProps> = ({ onOpenContact }) => {
  // Select 4 aesthetic images from the projects gallery
  const images = [
    PROJECTS[0].gallery[1].url, // portrait
    PROJECTS[1].gallery[2].url, // landscape
    PROJECTS[2].gallery[6].url, // square
    PROJECTS[3].gallery[7].url, // square/portrait
  ];

  return (
    <section className="relative z-10 bg-white py-32 md:py-64 overflow-hidden flex items-center justify-center min-h-[80vh]">
      
      {/* Background Image Fragments */}
      <div className="absolute inset-0 w-full h-full pointer-events-none max-w-7xl mx-auto">
        
        {/* Upper Left */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] w-24 md:w-32 aspect-[3/4] overflow-hidden"
        >
          <img src={images[0]} alt="fragment" className="w-full h-full object-cover" />
        </motion.div>

        {/* Upper Right (small) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="absolute top-[20%] right-[10%] md:top-[25%] md:right-[15%] w-16 md:w-20 aspect-square overflow-hidden"
        >
          <img src={images[1]} alt="fragment" className="w-full h-full object-cover" />
        </motion.div>

        {/* Lower Right */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute bottom-[10%] right-[5%] md:bottom-[15%] md:right-[12%] w-28 md:w-40 aspect-[4/5] overflow-hidden"
        >
          <img src={images[2]} alt="fragment" className="w-full h-full object-cover" />
        </motion.div>

        {/* Lower Left (very small horizontal) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="absolute bottom-[20%] left-[10%] md:bottom-[25%] md:left-[20%] w-20 md:w-28 aspect-[3/2] overflow-hidden"
        >
          <img src={images[3]} alt="fragment" className="w-full h-full object-cover" />
        </motion.div>

      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-[#111] font-normal tracking-tight mb-12"
        >
          Every story begins with a<br />conversation.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          onClick={onOpenContact}
          className="bg-[#111] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-mono hover:bg-[#333] transition-colors"
        >
          Get in touch
        </motion.button>
      </div>
      
    </section>
  );
};
