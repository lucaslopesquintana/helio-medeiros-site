import { useState } from 'react';
import { ArrowRight, Search, Clock, Calendar } from 'lucide-react';
import { ARTICLES } from '../data/legalContent';
import type { Article, ArticleCategory } from '../types';

interface ArticlesSectionProps {
  articles?: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection = ({ articles = ARTICLES, onSelectArticle }: ArticlesSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ArticleCategory[] = [
    'Todos',
    'Direito Processual Civil',
    'Provas',
    'Direito Municipal',
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ensaios" className="py-24 lg:py-32 bg-[#050B14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="reveal reveal-up flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/[0.08] gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-semibold block mb-2">
              PRODUÇÃO CIENTÍFICA & OPINIÃO JURÍDICA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              ENSAIOS & PARECERES DOGMÁTICOS
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
            Pesquisa pontual sobre a iniciativa probatória, preclusão, standards probatórios e as prerrogativas da Fazenda Pública.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="reveal reveal-up reveal-delay-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-display uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#E5C384] to-[#C5A568] text-[#050B14] font-bold shadow-md shadow-[#E5C384]/20'
                    : 'bg-[#0B162C]/70 text-slate-300 hover:text-white border border-white/10 hover:border-[#E5C384]/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por termo ou artigo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0B162C] border border-white/10 px-9 py-2 text-xs font-sans text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E5C384] transition-colors"
            />
          </div>

        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className={`reveal reveal-up reveal-delay-${(index % 3) + 1} luxury-card rounded-xs p-7 flex flex-col justify-between group cursor-pointer border border-[#E5C384]/20 hover:border-[#E5C384]/50 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] bg-[#E5C384]/10 px-2.5 py-1 border border-[#E5C384]/30 font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-[#E5C384]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-brand text-xl font-bold text-white group-hover:text-[#E5C384] transition-colors leading-snug mb-2">
                  {article.title}
                </h3>

                <p className="text-xs font-serif italic text-slate-400 mb-3 line-clamp-2">
                  {article.subtitle}
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3 mb-6">
                  {article.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {article.date}
                </span>

                <span className="inline-flex items-center gap-1 font-display uppercase tracking-wider text-[11px] text-[#E5C384] group-hover:translate-x-1 transition-transform font-bold">
                  <span>Ler & Citar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
