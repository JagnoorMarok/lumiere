import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroSectionProps {
  onScrollClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="sticky top-0 w-full h-screen bg-white overflow-hidden z-0">

      {/* Layer 1: The Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.div
          style={{ y, scale: 1.1 }}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Forest with glowing light"
            className="w-full h-full object-cover filter contrast-125 brightness-75"
          />
        </motion.div>

        {/* Gradient Overlay for Text Readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Bottom Left Text */}
        <div className="absolute bottom-16 sm:bottom-12 left-6 sm:left-12 max-w-lg z-20 pr-6">
          <p className="font-mono text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-md">
            We craft cinematic imagery for brands, artists, <br className="hidden sm:block" />
            and visionaries—turning every frame into a <br className="hidden sm:block" />
            story worth remembering.
          </p>
        </div>

        {/* Made In Framer Badge removed */}
      </div>

      {/* Layer 2: White Cutout Overlay using mix-blend-screen */}
      {/* Container height dictates where the image is revealed. */}
      <div className="absolute top-0 left-0 w-full h-auto sm:h-[42vh] bg-white mix-blend-screen overflow-hidden z-10 pointer-events-none flex flex-col justify-start">
        <h1 className="w-full text-center text-black font-serif text-[28vw] sm:text-[27vw] leading-[0.8] tracking-tighter whitespace-nowrap select-none pt-[50px] sm:pt-[56px] -ml-2 -mb-4 sm:mb-0">
          LUMIÈRE
        </h1>
      </div>

    </section>
  );
};
