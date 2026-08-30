import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div id="legal-modal-overlay" className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FAFAF7] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#E6E6DF] my-8"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#FAFAF7]/95 backdrop-blur-md px-6 py-4 border-b border-[#E6E6DF] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#52574A] font-semibold">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <span>{isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}</span>
            </div>

            <button
              id="close-legal-modal"
              onClick={onClose}
              className="p-2 rounded-full bg-[#1E201B] text-[#FAFAF7] hover:bg-[#34382E] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 space-y-6 text-sm text-[#52574A] font-light leading-relaxed">
            <div className="space-y-2 border-b border-[#ECECE6] pb-6">
              <span className="text-xs font-mono text-[#6B6E66]">Effective: January 2026</span>
              <h2 className="font-serif text-3xl font-normal text-[#1E201B]">
                {isPrivacy ? 'Studio Privacy & Data Policy' : 'Commercial Terms & Licensing'}
              </h2>
            </div>

            {isPrivacy ? (
              <div className="space-y-4">
                <p>
                  At {SITE_INFO.name}, we value the privacy of our clients, collaborators, and visitors. This Privacy Policy outlines how we collect, handle, and protect personal and commercial information submitted through our online inquiry forms.
                </p>
                <h3 className="font-serif text-xl font-normal text-[#1E201B] pt-2">
                  1. Information We Collect
                </h3>
                <p>
                  We collect information you explicitly provide when booking a consultation or subscribing to The Lumière Dispatch, including your name, email address, production details, and budget specifications.
                </p>
                <h3 className="font-serif text-xl font-normal text-[#1E201B] pt-2">
                  2. Use of Information
                </h3>
                <p>
                  Submitted project details are used strictly for project assessment, treatment drafting, scheduling, and direct client communications. We do not sell or transfer your data to third parties.
                </p>
                <h3 className="font-serif text-xl font-normal text-[#1E201B] pt-2">
                  3. Contact & Inquiries
                </h3>
                <p>
                  For any privacy inquiries or data requests, contact our data protection team directly at <span className="font-medium text-[#1E201B]">{SITE_INFO.contact.email}</span>.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  These terms govern all commissions, photographic productions, licensing agreements, and editorial assignments undertaken by {SITE_INFO.name}.
                </p>
                <h3 className="font-serif text-xl font-normal text-[#1E201B] pt-2">
                  1. Copyright and Authorship
                </h3>
                <p>
                  All photographic works, contact sheets, raw captures, and derivative masters created by {SITE_INFO.name} remain the exclusive intellectual property of the studio until licensed according to written master agreements.
                </p>
                <h3 className="font-serif text-xl font-normal text-[#1E201B] pt-2">
                  2. Licensing & Usage
                </h3>
                <p>
                  Usage licenses are tailored to each campaign’s distribution media (digital, print, broadcast, billboard) and territory. Usage rights are granted upon receipt of agreed production fees.
                </p>
                <h3 className="font-serif text-xl font-normal text-[#1E201B] pt-2">
                  3. Commission Terms & Cancellation
                </h3>
                <p>
                  A 50% production deposit is required to reserve shoot dates and initiate location permits. Cancellations within 14 days of shooting are subject to standard studio pre-production recoupment.
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-[#ECECE6]">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#1E201B] text-[#FAFAF7] text-xs uppercase tracking-wider font-semibold hover:bg-[#34382E] transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
