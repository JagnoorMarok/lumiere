import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/siteData';

interface FaqSectionProps {
  onOpenContact: () => void;
}

const FaqItem = ({ item, isOpen, onClick }: { item: typeof FAQS[0], isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-[#E5E5DF]">
      <button 
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-serif text-lg md:text-xl text-[#111] pr-8 group-hover:opacity-70 transition-opacity">
          {item.question}
        </span>
        <span className="text-[#6B6E66] font-mono text-lg flex-shrink-0 relative w-4 h-4 flex items-center justify-center">
          <motion.span 
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute"
          >
            +
          </motion.span>
          <motion.span 
            initial={false}
            animate={{ rotate: isOpen ? 0 : -180, opacity: isOpen ? 1 : 0 }}
            className="absolute"
          >
            -
          </motion.span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12 text-[#6B6E66] font-sans text-sm leading-relaxed max-w-3xl">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="relative z-10 bg-[#FAFAF7] pt-40 md:pt-64 pb-24 md:pb-40">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 md:mb-32">
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#111] mb-6 tracking-tight">
          Everything you might be wondering
        </h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6E66] max-w-md mx-auto leading-relaxed font-sans">
          From planning your project to the final delivery, here are some of the questions we are most often asked about our work.
        </p>
      </div>

      {/* Accordion Layout */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <div className="border-t border-[#E5E5DF]">
          {FAQS.slice(0, 4).map((faq) => (
            <FaqItem 
              key={faq.id} 
              item={faq} 
              isOpen={openId === faq.id}
              onClick={() => toggleItem(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
