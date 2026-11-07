import { useState, useEffect } from 'react';
import { X, Copy, Check, Quote, FileText } from 'lucide-react';
import type { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal = ({ article, onClose }: ArticleModalProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(article.abntCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-opacity">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Reader Dossier Card */}
      <div 
        className="relative w-full max-w-4xl bg-[#091322] text-slate-200 border border-[#E5C384]/30 shadow-2xl overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-8 py-4 bg-[#050B14] text-white border-b border-[#E5C384]/20 shrink-0">
          <div className="flex items-center gap-2.5 text-xs font-display uppercase tracking-widest text-[#E5C384] font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>Caderno de Doutrina • {article.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reader Article Body */}
        <div className="overflow-y-auto px-8 sm:px-14 py-10 space-y-8">
          
          {/* Article Header */}
          <div className="border-b border-white/10 pb-8 space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span>{article.date}</span>
              <span>•</span>
              <span>Leitura de {article.readTime}</span>
              <span>•</span>
              <span className="text-[#E5C384] font-semibold">{article.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-brand font-bold text-white leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-slate-300 font-light leading-relaxed">
              {article.subtitle}
            </p>

            <div className="pt-3 text-xs font-mono text-slate-400">
              Autor: <strong className="text-white">Hélio Fagundes Medeiros</strong> — Procurador do Município de Porto Alegre e Pesquisador PUCRS
            </div>
          </div>

          {/* Formal ABNT Citation Box */}
          <div className="bg-[#050B14] border border-[#E5C384]/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-display uppercase tracking-widest text-[#E5C384] font-bold flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" />
                Referência Bibliográfica (Padrão ABNT NBR 6023)
              </span>

              <button
                onClick={handleCopyCitation}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E5C384] text-[#050B14] text-xs font-display uppercase tracking-wider font-bold transition-all hover:bg-[#F3DAA2] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar ABNT</span>
                  </>
                )}
              </button>
            </div>

            <p className="font-mono text-xs text-slate-300 leading-relaxed select-all">
              {article.abntCitation}
            </p>
          </div>

          {/* Abstract / Ementa */}
          <div className="bg-white/[0.03] border-l-3 border-[#E5C384] p-6 border-y border-r border-white/10">
            <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] block mb-2 font-bold">
              Resumo do Ensaio
            </span>
            <p className="text-sm sm:text-base italic font-serif text-slate-300 leading-relaxed font-light">
              "{article.abstract}"
            </p>
          </div>

          {/* Essay Body with Genuine Drop Cap */}
          <div className="prose prose-invert max-w-none text-slate-300 font-sans leading-relaxed text-base sm:text-[17px] space-y-6">
            
            <p className="first-letter:text-6xl first-letter:font-brand first-letter:text-[#E5C384] first-letter:float-left first-letter:mr-3 first-letter:leading-none text-slate-200 leading-relaxed font-light">
              {article.fullContent.intro}
            </p>

            {article.fullContent.sections.map((section, idx) => (
              <div key={idx} className="pt-4 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-brand font-bold text-white tracking-wide border-b border-white/10 pb-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-slate-300 font-light">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div className="pt-4 space-y-2">
              <h2 className="text-2xl font-brand font-bold text-white tracking-wide">
                Considerações Finais
              </h2>
              <p className="bg-[#050B14] p-5 border border-[#E5C384]/20 italic font-serif text-slate-300 leading-relaxed font-light">
                {article.fullContent.conclusion}
              </p>
            </div>

            {article.fullContent.footnotes && article.fullContent.footnotes.length > 0 && (
              <div className="mt-12 pt-6 border-t border-white/10 text-xs text-slate-400 font-mono space-y-2">
                <div className="text-[10px] font-bold text-[#E5C384] uppercase tracking-widest mb-2">
                  Notas de Rodapé & Legislação Aplicável
                </div>
                {article.fullContent.footnotes.map((fn, fIdx) => (
                  <div key={fIdx} className="flex gap-2">
                    <span className="text-[#E5C384] font-bold">[{fIdx + 1}]</span>
                    <span>{fn}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-8 py-4 bg-[#050B14] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <div>Hélio Fagundes Medeiros • Produção Acadêmica</div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-[#E5C384] text-slate-300 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copiada!' : 'Copiar ABNT'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#E5C384] text-[#050B14] font-display font-bold uppercase tracking-wider text-xs hover:bg-[#F3DAA2] transition-colors cursor-pointer"
            >
              Concluir Leitura
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
