import React from 'react';
import { ArrowLeft } from 'lucide-react';
interface NotFoundViewProps {
  onBackToHome: () => void;
}
export const NotFoundView: React.FC<NotFoundViewProps> = ({ onBackToHome }) => {
  return (
    <div id="not-found-view" className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4 bg-[#FAFAF7]">
      <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-12 rounded-3xl bg-[#F2F2EC] border border-[#E6E6DF]">
        <span className="font-mono text-xs uppercase tracking-widest text-[#6B6E66] px-3 py-1 rounded-full bg-[#FAFAF7] border border-[#D8D8CF]">
          404 — Page Not Found
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-[#1E201B]">
          Lost in the frame.
        </h1>
        <p className="text-xs sm:text-sm text-[#52574A] leading-relaxed">
          The requested route or story seems to have moved outside our current archive.
        </p>
        <button
          onClick={onBackToHome}
          className="px-8 py-3.5 rounded-full bg-[#1E201B] text-[#FAFAF7] text-xs uppercase tracking-widest font-semibold hover:bg-[#34382E] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Studio Home</span>
        </button>
      </div>
    </div>
  );
};