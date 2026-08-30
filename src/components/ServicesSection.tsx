import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesSectionProps {
  onOpenContactWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContactWithService,
}) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === hoveredServiceId) || SERVICES[0];

  return (
    <section id="services-section" className="relative z-10 bg-[#FAFAF7] pt-24 md:pt-40 pb-24 md:pb-40 border-t border-[#E5E5DF]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Editorial Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[80px] leading-[1] font-normal text-[#111] tracking-tighter mb-8">
            Our Expertise
          </h2>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6E66] max-w-xl leading-relaxed font-sans">
            From editorial campaigns to intimate portraits, every project is approached with a careful balance of storytelling, atmosphere, and technical precision.
          </p>
        </div>

        {/* Split Layout: Image on Left (sticky), List on Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
          
          {/* Sticky Image Column */}
          <div className="w-full lg:w-1/3 sticky top-32 hidden lg:block h-[60vh]">
            <div className="w-full h-full relative overflow-hidden bg-[#E5E5DF]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Typography List Column */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="border-t border-[#E5E5DF]">
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                  className="group relative border-b border-[#E5E5DF] py-12 md:py-16 transition-colors duration-500 hover:bg-white"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 px-4 md:px-8">
                    
                    {/* Index & Title */}
                    <div className="md:w-1/2 flex flex-col gap-4">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#6B6E66]">
                        0{index + 1} / {service.category}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#111] leading-tight transition-transform duration-500 group-hover:translate-x-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description & Deliverables */}
                    <div className="md:w-1/2 flex flex-col gap-8">
                      <p className="text-sm md:text-base text-[#444] font-serif leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-col gap-2">
                        {service.deliverables.map((item) => (
                          <span key={item} className="text-[10px] uppercase tracking-widest font-mono text-[#6B6E66]">
                            — {item}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Image Reveal (shows only on mobile) */}
                      <div className="w-full aspect-[4/3] mt-4 lg:hidden overflow-hidden bg-[#E5E5DF]">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                        />
                      </div>

                      <button
                        onClick={() => onOpenContactWithService(service.title)}
                        className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-[0.2em] font-mono text-[#111] hover:text-[#6B6E66] transition-colors self-start"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
