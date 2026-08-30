import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SITE_INFO, TEAM_MEMBERS, GEAR_ITEMS } from '../data/siteData';

interface AboutViewProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome, onOpenContact }) => {
  return (
    <div id="about-page-view" className="pt-32 sm:pt-40 pb-20 md:pb-32 bg-[#FAFAF7] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-32">
        
        {/* Back navigation & Page header */}
        <div className="space-y-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6B6E66] hover:text-[#111] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Index</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-[#111] tracking-tight leading-[1.1] mb-6">
                A studio built for <span className="italic text-[#6B6E66]">slow looking.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 border-l border-[#111]/10 pl-8 space-y-6">
              <div className="flex flex-col gap-2 text-[10px] text-[#111] uppercase tracking-[0.2em] font-semibold">
                <span>{SITE_INFO.location}</span>
                <span className="text-[#6B6E66]">{SITE_INFO.established}</span>
              </div>
              <p className="text-sm text-[#52574A] font-light leading-relaxed">
                Two spaces, one programme. We represent artists and craft cinematic campaigns across photography, sculpture, and new media.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Manifesto / Section 03 */}
        <div className="border-t border-[#111]/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6E66] font-semibold block">
                The Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#111] tracking-tight">
                Devoted to the poetry of light
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8 text-base md:text-xl text-[#111] font-light leading-relaxed max-w-2xl">
              <p>
                Founded in Paris in 2014 and expanded to London, Lumière is a collective of photographers, art directors, and retouchers united by a single obsession: the pursuit of light in its most evocative forms.
              </p>
              <p className="text-[#6B6E66]">
                We believe every image is a conversation between atmosphere and intention. Our work has appeared in <span className="italic font-serif text-[#111]">Vogue</span>, <span className="italic font-serif text-[#111]">Kinfolk</span>, and <span className="italic font-serif text-[#111]">The Gentlewoman</span>, and we’ve crafted campaigns for brands who understand that beauty is a form of meaning.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Editorial Typography */}
        <div className="border-t border-[#111]/10 pt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
          {SITE_INFO.stats.map((stat, idx) => (
            <div key={stat.label} className="space-y-4">
              <span className="font-serif text-5xl md:text-7xl font-normal text-[#111] block tracking-tight">
                {stat.value}<span className="text-[#6B6E66]">{stat.suffix}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#111] font-semibold block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Gear & Tools - Minimalist List */}
        <div className="border-t border-[#111]/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6E66] font-semibold block">
                Technical Rig
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#111]">
                Instruments
              </h2>
              <p className="text-sm text-[#52574A] font-light max-w-xs">
                Selected tools calibrated for optical purity and authentic color profiles.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              {GEAR_ITEMS.map((gear) => (
                <div
                  key={gear.id}
                  className="py-6 border-b border-[#111]/10 first:pt-0 last:border-0 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6E66] w-24">
                      {gear.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#111]">
                      {gear.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#52574A] font-light md:text-right max-w-sm">
                    {gear.specs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="border-t border-[#111]/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6E66] font-semibold block">
                Collective
              </span>
              <h2 className="font-serif text-4xl font-normal text-[#111]">
                Who runs the place
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group space-y-6">
                <div className="aspect-[3/4] overflow-hidden bg-[#EBEBE4]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#111]">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-between border-b border-[#111] pb-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B6E66]">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-[#52574A] font-light pt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="py-24 border-t border-[#111]/10 flex flex-col items-center text-center space-y-8">
          <h3 className="font-serif text-4xl sm:text-6xl font-normal text-[#111]">
            Commission our team
          </h3>
          <p className="text-sm text-[#52574A] font-light max-w-md mx-auto">
            We take on a limited number of editorial and commercial projects each season. Let’s discuss your vision.
          </p>
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#111] text-[#FAFAF7] text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-[#111]/80 transition-colors cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
