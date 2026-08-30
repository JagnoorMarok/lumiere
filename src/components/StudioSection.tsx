import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface StudioSectionProps {
  onLearnMoreAbout: () => void;
}

const AnimatedNumber = ({ value }: { value: string | number }) => {
  const numValue = typeof value === 'number' ? value : parseInt(value.replace(/[^0-9]/g, ''), 10);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.floor(v).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, numValue]);

  return <span ref={ref}>0</span>;
};

export const StudioSection: React.FC<StudioSectionProps> = () => {
  return (
    <section id="studio-section" className="relative z-10 py-24 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-16 md:mb-24 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#6B6E66]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Studio — 01</span>
        </motion.div>

        {/* Core Philosophy Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-2xl sm:text-3xl md:text-[40px] font-normal leading-[1.6] tracking-tight text-[#6B6E66] mb-24 md:mb-40 max-w-4xl"
        >
          We believe every image is a conversation between atmosphere and intention. Our work has appeared in Vogue, Kinfolk, and The Gentlewoman, and we've crafted campaigns for brands who understand that beauty is a form of meaning.
        </motion.h2>

        {/* Key Metrics Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-12">
          {SITE_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="flex flex-col items-center space-y-4"
            >
              <span className="font-serif text-6xl md:text-7xl font-bold tracking-tight text-[#333] flex items-center">
                <span className="font-light text-[#9C9E97] text-5xl md:text-6xl mr-1">+</span>
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B6E66] block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

