import React, { useState, useEffect } from 'react';
import { ActiveView, Project, Article } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudioSection } from './components/StudioSection';
import { FeaturedWorksSection } from './components/FeaturedWorksSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JournalSection } from './components/JournalSection';
import { FaqSection } from './components/FaqSection';
import { StoryCTA } from './components/StoryCTA';
import { Footer } from './components/Footer';
import { AboutView } from './components/AboutView';
import { PortfolioView } from './components/PortfolioView';
import { CollectionView } from './components/CollectionView';
import { ContactView } from './components/ContactView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { LegalModal } from './components/LegalModal';
import { NotFoundView } from './components/NotFoundView';

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [show404, setShow404] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, show404]);

  const handleNavChange = (view: ActiveView) => {
    setShow404(false);
    setActiveView(view);
  };

  const handleOpenContact = (service?: string) => {
    setShow404(false);
    setPreselectedService(service);
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpen404 = () => {
    setShow404(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#1E201B] font-sans antialiased selection:bg-[#1E201B] selection:text-[#FAFAF7]">
      {/* Fixed Navigation Bar */}
      <Navbar
        activeView={show404 ? 'home' : activeView}
        setActiveView={handleNavChange}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main View Switching */}
      <main className="flex-grow">
        {show404 ? (
          <NotFoundView onBackToHome={() => handleNavChange('home')} />
        ) : activeView === 'about' ? (
          <AboutView
            onBackToHome={() => handleNavChange('home')}
            onOpenContact={() => handleOpenContact()}
          />
        ) : activeView === 'portfolio' ? (
          <PortfolioView
            onBackToHome={() => handleNavChange('home')}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        ) : activeView === 'collection' ? (
          <CollectionView
            onBackToHome={() => handleNavChange('home')}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        ) : activeView === 'contact' ? (
          <ContactView
            onBackToHome={() => handleNavChange('home')}
            preselectedService={preselectedService}
          />
        ) : (
          /* Homepage Layout with All 6 Rich Sections */
          <>
            <HeroSection
              onOpenContact={() => handleOpenContact()}
              onSelectProject={(proj) => setSelectedProject(proj)}
              onExplorePortfolio={() => handleNavChange('portfolio')}
            />

            <StudioSection
              onLearnMoreAbout={() => handleNavChange('about')}
            />

            <FeaturedWorksSection
              onSelectProject={(proj) => setSelectedProject(proj)}
              onViewAllPortfolio={() => handleNavChange('portfolio')}
            />

            <ServicesSection
              onOpenContactWithService={(srv) => handleOpenContact(srv)}
            />

            <TestimonialsSection />

            <JournalSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onViewAllArticles={() => handleNavChange('collection')}
            />

            <FaqSection
              onOpenContact={() => handleOpenContact()}
            />

            <StoryCTA 
              onOpenContact={() => handleOpenContact()}
            />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveView={handleNavChange}
        onOpenContact={() => handleOpenContact()}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpen404={handleOpen404}
      />

      {/* Modals & Dialogs */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenContact={() => handleOpenContact(selectedProject?.title)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
