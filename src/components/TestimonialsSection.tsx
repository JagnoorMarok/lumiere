import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, PROJECTS } from '../data/siteData';

// We'll pair testimonials with project cover images for the visual backgrounds
const SLIDES = TESTIMONIALS.map((t, index) => ({
  testimonial: t,
  image: PROJECTS[index % PROJECTS.length].coverImage,
}));

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Dependency ensures timer resets if user manually clicks

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
    }),
  };

  return (
    <section className="relative z-10 bg-[#FAFAF7] pt-24 md:pt-40">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#111] mb-6 tracking-tight">
          Words from those we've collaborated with.
        </h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6E66] max-w-md mx-auto leading-relaxed font-sans">
          Every project is built on trust, creativity, and shared vision.
        </p>
      </div>

      {/* Auto-playing Carousel */}
      <div className="relative w-full px-4 sm:px-8 lg:px-12 pb-24 md:pb-40">
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-[#FAFAF7] group">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#FAFAF7]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={SLIDES[currentSlide].image}
                  alt={`Atmospheric background for ${SLIDES[currentSlide].testimonial.author}`}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay to ensure card pops */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Floating Editorial Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 bg-white p-8 md:p-12 w-[90%] max-w-sm md:max-w-md shadow-2xl flex flex-col items-center text-center"
              >
                {/* Tiny metadata */}
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#6B6E66] mb-6">
                  Client / {SLIDES[currentSlide].testimonial.year}
                </span>

                {/* Name */}
                <h3 className="font-serif text-xl text-[#111] mb-6">
                  {SLIDES[currentSlide].testimonial.author}
                </h3>

                {/* Testimonial Quote */}
                <p className="font-serif text-sm md:text-base leading-relaxed text-[#444] italic mb-8">
                  "{SLIDES[currentSlide].testimonial.quote}"
                </p>

                {/* Sub-info */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#111]">
                    {SLIDES[currentSlide].testimonial.role}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#6B6E66] mt-1">
                    {SLIDES[currentSlide].testimonial.company}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Navigation Controls */}
          {/* They reveal/become solid on hover for a cleaner look */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer mix-blend-difference"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8 font-light" strokeWidth={1} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer mix-blend-difference"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8 font-light" strokeWidth={1} />
          </button>
          
          {/* Subtle Progress Indicators (Optional but elegant) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group py-2"
              >
                <div 
                  className={`h-[1px] w-8 transition-all duration-500 ${
                    currentSlide === idx ? 'bg-white' : 'bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
