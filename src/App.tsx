import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BentoGrid } from './components/BentoGrid';
import { BookShowcase } from './components/BookShowcase';
import { ArticlesSection } from './components/ArticlesSection';
import { ArticleModal } from './components/ArticleModal';
import { Footer } from './components/Footer';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AuthorDashboard } from './components/AuthorDashboard';
import { ARTICLES } from './data/legalContent';
import { useScrollReveal } from './hooks/useScrollReveal';
import type { Article } from './types';

export function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Activate Reveal-on-Scroll animations
  useScrollReveal();

  // Authentication & View State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('helio_medeiros_auth') === 'true';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'public' | 'dashboard'>('public');

  // Articles State (loaded from localStorage with fallback to default ARTICLES)
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('helio_medeiros_articles');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading articles from localStorage', e);
    }
    return ARTICLES;
  });

  // Save articles to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('helio_medeiros_articles', JSON.stringify(articles));
    } catch (e) {
      console.error('Error saving articles to localStorage', e);
    }
  }, [articles]);

  // Reading progress scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('helio_medeiros_auth');
    setCurrentView('public');
  };

  const handleAddArticle = (newArt: Article) => {
    setArticles((prev) => [newArt, ...prev]);
  };

  const handleUpdateArticle = (updatedArt: Article) => {
    setArticles((prev) => prev.map((art) => (art.id === updatedArt.id ? updatedArt : art)));
  };

  const handleDeleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((art) => art.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans selection:bg-[#E5C384]/25 selection:text-[#E5C384]">
      
      {/* Top Reading Progress Bar (only on public view) */}
      {currentView === 'public' && (
        <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-white/5 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-[#E5C384] to-[#F3DAA2] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* RENDER VIEW: Public Site vs Author Dashboard */}
      {currentView === 'dashboard' ? (
        <AuthorDashboard
          articles={articles}
          onAddArticle={handleAddArticle}
          onUpdateArticle={handleUpdateArticle}
          onDeleteArticle={handleDeleteArticle}
          onPreviewArticle={(art) => setSelectedArticle(art)}
          onBackToSite={() => setCurrentView('public')}
          onLogout={handleLogout}
        />
      ) : (
        <>
          {/* Fixed Glassmorphism Header */}
          <Header />

          {/* Main Content Sections */}
          <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Conheça Hélio Medeiros (Apresentação Completa com Foto 2) */}
            <AboutSection />

            {/* 3. O Método / Dogmática Processual & Citação */}
            <BentoGrid />

            {/* 4. A Obra 2ª Edição (Editora Thoth) com Fotos Oficiais */}
            <BookShowcase />

            {/* 5. Ensaios Jurídicos com Filtros & Leitor Imersivo ABNT */}
            <ArticlesSection
              articles={articles}
              onSelectArticle={setSelectedArticle}
            />
          </main>

          {/* Institutional Footer */}
          <Footer
            onOpenLogin={() => {
              if (isAuthenticated) {
                setCurrentView('dashboard');
              } else {
                setIsLoginModalOpen(true);
              }
            }}
          />
        </>
      )}

      {/* Immersive Legal Review Modal (used by both public site & dashboard preview) */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}

export default App;
