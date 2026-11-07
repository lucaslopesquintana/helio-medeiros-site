import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_BOOK_URL } from '../data/legalContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'APRESENTAÇÃO', href: '#apresentacao' },
    { label: 'O MÉTODO', href: '#metodo' },
    { label: 'A OBRA', href: '#obra' },
    { label: 'ENSAIOS', href: '#ensaios' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050B14]/92 backdrop-blur-md border-b border-[#E5C384]/20 py-4 shadow-2xl shadow-black/80'
          : 'bg-transparent border-b border-white/[0.06] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Clean Luxury Typography Logo */}
          <a href="#inicio" className="flex flex-col group">
            <span className="font-brand text-lg sm:text-xl font-bold tracking-[0.16em] text-[#E5C384] uppercase leading-tight group-hover:text-white transition-colors">
              HÉLIO MEDEIROS
            </span>
            <span className="text-[10px] font-display uppercase tracking-[0.2em] text-slate-400 font-medium mt-0.5">
              Procurador Municipal - POA/RS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-display uppercase tracking-[0.18em] font-medium text-slate-300 hover:text-[#E5C384] transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5C384] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button: Livro CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={OFFICIAL_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs text-xs font-display uppercase tracking-widest text-[#050B14] bg-[#E5C384] hover:bg-[#F3DAA2] font-bold shadow-lg shadow-[#E5C384]/15 hover:shadow-[#E5C384]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Adquirir Livro</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-[#E5C384]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050B14]/98 backdrop-blur-xl border-b border-[#E5C384]/20 px-6 py-8">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-display tracking-widest uppercase text-slate-200 hover:text-[#E5C384] border-b border-white/5 pb-2.5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={OFFICIAL_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xs text-xs font-display uppercase tracking-widest text-[#050B14] bg-[#E5C384] font-bold shadow-lg shadow-[#E5C384]/20"
              >
                <span>Adquirir Livro (2ª Edição)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
