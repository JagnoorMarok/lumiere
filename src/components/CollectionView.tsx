import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../data/siteData';
import { Article } from '../types';

interface CollectionViewProps {
  onBackToHome: () => void;
  onSelectArticle: (article: Article) => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  onBackToHome,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['All', 'Creative Process', 'Behind the Scenes', 'Travel'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div id="collection-page-view" className="pt-32 sm:pt-40 pb-20 md:pb-32 bg-[#FAFAF7] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Back navigation & Header */}
        <div className="space-y-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6B6E66] hover:text-[#111] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back to Index</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-[#111] tracking-tight mb-6">
                Journal <span className="italic text-[#6B6E66]">&</span> Notes
              </h1>
              <p className="text-sm md:text-base text-[#52574A] font-light leading-relaxed">
                Essays, technical insights, and behind-the-scenes accounts on lighting, optics, and the art of the visual frame.
              </p>
            </div>
          </div>

          {/* Minimalist Category Filter */}
          <div className="flex flex-wrap items-center gap-6 pt-12 border-t border-[#111]/10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer relative pb-2 ${
                    isActive ? 'text-[#111] font-semibold' : 'text-[#6B6E66] hover:text-[#111]'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${ARTICLES.length})` : ''}
                  {isActive && (
                    <motion.div layoutId="category-indicator" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#111]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimalist Articles List (Rows instead of Grid for editorial feel) */}
        <motion.div layout className="flex flex-col border-t border-[#111]/10">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer py-10 md:py-16 border-b border-[#111]/10 flex flex-col md:flex-row gap-8 md:gap-16 items-center"
              >
                <div className="w-full md:w-2/5 aspect-[4/3] overflow-hidden bg-[#EBEBE4]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="w-full md:w-3/5 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#6B6E66]">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] leading-tight group-hover:italic transition-all duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-[#52574A] font-light leading-relaxed max-w-lg">
                    {article.excerpt}
                  </p>

                  <div className="pt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#111] font-semibold">
                    <span>Read Entry</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Newsletter Box (Minimalist) */}
        <div className="py-20 text-center max-w-2xl mx-auto space-y-8">
          <h3 className="font-serif text-4xl sm:text-5xl font-normal text-[#111]">
            The Dispatch
          </h3>
          <p className="text-sm text-[#52574A] font-light leading-relaxed">
            Curated essays on lighting, film recipes, and unreleased project previews sent quarterly. No spam.
          </p>

          {newsletterSubscribed ? (
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#111] font-semibold py-4 border-b border-[#111]">
              Thank you for subscribing.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0 border-b border-[#111]/30 focus-within:border-[#111] transition-colors pb-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-transparent text-[11px] uppercase tracking-widest text-[#111] placeholder-[#9C9E97] focus:outline-none"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111] hover:text-[#6B6E66] transition-colors cursor-pointer pl-4"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
