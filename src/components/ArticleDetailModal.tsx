import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Share2,   Quote, Check } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/siteData';
interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (a: Article) => void;
}
export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onSelectArticle,
}) => {
  const [copied, setCopied] = React.useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);
  if (!article) return null;
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const otherArticles = ARTICLES.filter((a) => a.id !== article.id);
  return (
    <AnimatePresence>
      <div id="article-detail-modal-overlay" className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-[#FAFAF7] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#E6E6DF] my-6"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#FAFAF7]/95 backdrop-blur-md px-6 py-4 border-b border-[#E6E6DF] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#52574A]">
              <span className="font-semibold text-[#1E201B]">{article.category}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full border border-[#D8D8CF] text-[#1E201B] hover:bg-[#EBEBE4] transition-colors cursor-pointer"
                title="Share essay"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                id="close-article-modal"
                onClick={onClose}
                className="p-2 rounded-full bg-[#1E201B] text-[#FAFAF7] hover:bg-[#34382E] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Article Reader Body */}
          <div className="p-6 sm:p-10 md:p-14 space-y-8">
            {/* Title & Metadata */}
            <div className="space-y-4 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-3 text-xs text-[#6B6E66]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E201B] tracking-tight leading-tight">
                {article.title}
              </h1>
              <p className="text-base text-[#52574A] font-light italic leading-relaxed">
                "{article.excerpt}"
              </p>
            </div>
            {/* Article Image Banner */}
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-[#EBEBE4] border border-[#E6E6DF]">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Formatted Content */}
            <div className="max-w-2xl mx-auto space-y-6 text-base sm:text-lg text-[#52574A] font-light leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              {/* Pull Quote */}
              {article.quote && (
                <div className="my-8 p-8 rounded-2xl bg-[#F2F2EC] border-l-4 border-[#1E201B] space-y-3">
                  <Quote className="w-6 h-6 text-[#52574A]" />
                  <blockquote className="font-serif text-xl sm:text-2xl font-normal text-[#1E201B] leading-relaxed">
                    “{article.quote.text}”
                  </blockquote>
                  <p className="text-xs uppercase tracking-wider text-[#6B6E66]">
                    — {article.quote.author}
                  </p>
                </div>
              )}
            </div>
            {/* Read Next Section */}
            <div className="pt-10 border-t border-[#ECECE6] space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#52574A] font-semibold block">
                Related Notes from the Field
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.map((other) => (
                  <div
                    key={other.id}
                    onClick={() => onSelectArticle(other)}
                    className="p-4 rounded-2xl bg-[#F2F2EC] border border-[#E6E6DF] hover:border-[#1E201B] transition-colors cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-[#6B6E66]">
                      {other.category} • {other.readTime}
                    </span>
                    <h4 className="font-serif text-lg font-normal text-[#1E201B] group-hover:underline underline-offset-4">
                      {other.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};