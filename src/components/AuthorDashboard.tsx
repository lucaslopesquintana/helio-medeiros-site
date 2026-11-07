import React, { useState } from 'react';
import { 
  FileText, 
  PenTool, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  Copy, 
  Check, 
  LogOut, 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Clock, 
  Search,
  CheckCircle2
} from 'lucide-react';
import type { Article, ArticleCategory } from '../types';

interface AuthorDashboardProps {
  articles: Article[];
  onAddArticle: (article: Article) => void;
  onUpdateArticle: (article: Article) => void;
  onDeleteArticle: (id: string) => void;
  onPreviewArticle: (article: Article) => void;
  onBackToSite: () => void;
  onLogout: () => void;
}

export const AuthorDashboard: React.FC<AuthorDashboardProps> = ({
  articles,
  onAddArticle,
  onUpdateArticle,
  onDeleteArticle,
  onPreviewArticle,
  onBackToSite,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'editor'>('list');
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<ArticleCategory>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Editor form state
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<'Direito Processual Civil' | 'Provas' | 'Direito Municipal'>('Direito Processual Civil');
  const [readTime, setReadTime] = useState('8 min de leitura');
  const [tagsInput, setTagsInput] = useState('');
  const [abstract, setAbstract] = useState('');
  const [intro, setIntro] = useState('');
  const [sections, setSections] = useState<{ heading: string; text: string }[]>([
    { heading: '1. Delimitação Dogmática', text: '' },
    { heading: '2. Aplicação Prática e Jurisprudencial', text: '' },
  ]);
  const [conclusion, setConclusion] = useState('');
  const [footnotesInput, setFootnotesInput] = useState('');
  const [abntCitation, setAbntCitation] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Reset or fill editor
  const handleOpenNewEditor = () => {
    setEditingArticleId(null);
    setTitle('');
    setSubtitle('');
    setCategory('Direito Processual Civil');
    setReadTime('8 min de leitura');
    setTagsInput('');
    setAbstract('');
    setIntro('');
    setSections([
      { heading: '1. Delimitação Dogmática', text: '' },
      { heading: '2. Aplicação Prática e Jurisprudencial', text: '' },
    ]);
    setConclusion('');
    setFootnotesInput('');
    setAbntCitation('');
    setActiveTab('editor');
  };

  const handleOpenEditEditor = (article: Article) => {
    setEditingArticleId(article.id);
    setTitle(article.title);
    setSubtitle(article.subtitle);
    setCategory(article.category);
    setReadTime(article.readTime);
    setTagsInput(article.tags.join(', '));
    setAbstract(article.abstract);
    setIntro(article.fullContent.intro);
    setSections(
      article.fullContent.sections.map((s) => ({
        heading: s.heading,
        text: s.paragraphs.join('\n\n'),
      }))
    );
    setConclusion(article.fullContent.conclusion);
    setFootnotesInput(article.fullContent.footnotes ? article.fullContent.footnotes.join('\n') : '');
    setAbntCitation(article.abntCitation);
    setActiveTab('editor');
  };

  // Auto-generate ABNT citation
  const generateAbnt = (t: string, s: string) => {
    const year = new Date().getFullYear();
    const cleanTitle = t.trim() || 'Título do Artigo';
    const cleanSubtitle = s.trim() ? `: ${s.trim()}` : '';
    return `MEDEIROS, Hélio. ${cleanTitle}${cleanSubtitle}. Revista Eletrônica de Direito Processual, Porto Alegre, v. 20, p. 1-25, ${year}.`;
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!editingArticleId || !abntCitation) {
      setAbntCitation(generateAbnt(newTitle, subtitle));
    }
  };

  const handleSubtitleChange = (newSubtitle: string) => {
    setSubtitle(newSubtitle);
    if (!editingArticleId || !abntCitation) {
      setAbntCitation(generateAbnt(title, newSubtitle));
    }
  };

  const handleAddSection = () => {
    setSections([...sections, { heading: `${sections.length + 1}. Nova Seção Dogmática`, text: '' }]);
  };

  const handleRemoveSection = (idx: number) => {
    setSections(sections.filter((_, i) => i !== idx));
  };

  const handleSectionHeadingChange = (idx: number, val: string) => {
    const updated = [...sections];
    updated[idx].heading = val;
    setSections(updated);
  };

  const handleSectionTextChange = (idx: number, val: string) => {
    const updated = [...sections];
    updated[idx].text = val;
    setSections(updated);
  };

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !abstract.trim()) {
      alert('Por favor, preencha ao menos o título e o resumo doutrinário.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const formattedSections = sections.map((s) => ({
      heading: s.heading.trim(),
      paragraphs: s.text
        .split('\n\n')
        .map((p) => p.trim())
        .filter(Boolean),
    }));

    const footnotes = footnotesInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const now = new Date();
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const formattedDate = `${months[now.getMonth()]} de ${now.getFullYear()}`;

    const citation = abntCitation.trim() || generateAbnt(title, subtitle);

    if (editingArticleId) {
      const updated: Article = {
        id: editingArticleId,
        title,
        subtitle,
        category,
        date: formattedDate,
        readTime: readTime.trim() || '8 min de leitura',
        tags: tags.length ? tags : ['Processo Civil', 'Doutrina'],
        abstract,
        fullContent: {
          intro: intro.trim() || abstract,
          sections: formattedSections.length ? formattedSections : [{ heading: '1. Desenvolvimento', paragraphs: [abstract] }],
          conclusion: conclusion.trim() || 'Ensaio publicado para fomento do debate processual contemporâneo.',
          footnotes: footnotes.length ? footnotes : undefined,
        },
        abntCitation: citation,
      };

      onUpdateArticle(updated);
      showToast('Artigo atualizado com sucesso!');
    } else {
      const newArticle: Article = {
        id: `art-${Date.now()}`,
        title,
        subtitle,
        category,
        date: formattedDate,
        readTime: readTime.trim() || '8 min de leitura',
        tags: tags.length ? tags : ['Processo Civil', 'Doutrina'],
        abstract,
        fullContent: {
          intro: intro.trim() || abstract,
          sections: formattedSections.length ? formattedSections : [{ heading: '1. Desenvolvimento', paragraphs: [abstract] }],
          conclusion: conclusion.trim() || 'Ensaio publicado para fomento do debate processual contemporâneo.',
          footnotes: footnotes.length ? footnotes : undefined,
        },
        abntCitation: citation,
      };

      onAddArticle(newArticle);
      showToast('Novo artigo publicado com sucesso!');
    }

    setActiveTab('list');
  };

  const handleCopyCitation = (art: Article) => {
    navigator.clipboard.writeText(art.abntCitation);
    setCopiedId(art.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedFilterCategory === 'Todos' || art.category === selectedFilterCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 bg-[#0B1D38] border border-[#E5C384] text-white text-xs font-display flex items-center gap-2.5 shadow-2xl animate-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#E5C384]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="border-b border-[#E5C384]/20 bg-[#070F1E] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#0F203A] border border-[#E5C384]/40 flex items-center justify-center text-[#E5C384]">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <div className="font-brand text-lg font-bold text-white tracking-wide">
                Painel do Autor • Hélio Medeiros
              </div>
              <div className="text-[10px] font-display uppercase tracking-widest text-[#E5C384]">
                Procurador Municipal - POA/RS • Gestão Editorial
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 hover:border-[#E5C384] text-slate-300 hover:text-white text-xs font-display uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E5C384]" />
              <span>Ver Site Público</span>
            </button>

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 text-xs font-display uppercase tracking-wider transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Navigation Tabs & Overview Metrics */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('list')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-display uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'list'
                  ? 'bg-gradient-to-r from-[#E5C384] to-[#C5A568] text-[#050B14] font-bold shadow-md shadow-[#E5C384]/20'
                  : 'bg-[#0A1424] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Artigos Publicados ({articles.length})</span>
            </button>

            <button
              onClick={handleOpenNewEditor}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-display uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'editor' && !editingArticleId
                  ? 'bg-gradient-to-r from-[#E5C384] to-[#C5A568] text-[#050B14] font-bold shadow-md shadow-[#E5C384]/20'
                  : 'bg-[#0A1424] text-[#E5C384] hover:bg-[#E5C384]/10 border border-[#E5C384]/30'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Escrever Novo Artigo</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500">Total:</span>{' '}
              <strong className="text-[#E5C384] font-bold text-sm">{articles.length} Artigos</strong>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div>
              <span className="text-slate-500">Indexação:</span>{' '}
              <strong className="text-white">ABNT NBR 6023</strong>
            </div>
          </div>

        </div>

        {/* TAB 1: LISTA E ACOMPANHAMENTO DOS ARTIGOS */}
        {activeTab === 'list' && (
          <div className="space-y-6">
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#0A1424] border border-white/10 rounded-xs">
              <div className="flex flex-wrap items-center gap-2">
                {(['Todos', 'Direito Processual Civil', 'Provas', 'Direito Municipal'] as ArticleCategory[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilterCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-display uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedFilterCategory === cat
                        ? 'bg-[#E5C384] text-[#050B14] font-bold'
                        : 'text-slate-400 hover:text-white bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar ensaio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#050B14] border border-white/10 pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#E5C384]"
                />
              </div>
            </div>

            {/* Articles Table/List */}
            <div className="space-y-4">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  className="luxury-card p-6 rounded-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-white/10 hover:border-[#E5C384]/40 transition-all"
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-slate-400">
                      <span className="px-2 py-0.5 bg-[#E5C384]/10 text-[#E5C384] border border-[#E5C384]/30 font-semibold uppercase">
                        {art.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="font-brand font-bold text-lg sm:text-xl text-white">
                      {art.title}
                    </h3>

                    {art.subtitle && (
                      <p className="text-xs font-serif italic text-slate-400">
                        {art.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-300 font-light line-clamp-2">
                      {art.abstract}
                    </p>

                    <div className="pt-2 text-[11px] font-mono text-slate-500 bg-[#050B14] p-2 border border-white/5 truncate select-all">
                      {art.abntCitation}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => onPreviewArticle(art)}
                      className="p-2 bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                      title="Visualizar como Leitor"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleCopyCitation(art)}
                      className="p-2 bg-white/5 hover:bg-white/15 border border-white/10 text-[#E5C384] text-xs font-mono transition-colors cursor-pointer"
                      title="Copiar Citação ABNT"
                    >
                      {copiedId === art.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => handleOpenEditEditor(art)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#E5C384]/15 hover:bg-[#E5C384]/30 border border-[#E5C384]/40 text-[#E5C384] text-xs font-display uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Editar</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Deseja realmente excluir o artigo "${art.title}"?`)) {
                          onDeleteArticle(art.id);
                          showToast('Artigo excluído do repositório.');
                        }
                      }}
                      className="p-2 bg-red-950/30 hover:bg-red-900/50 border border-red-500/30 text-red-400 hover:text-red-200 text-xs transition-colors cursor-pointer"
                      title="Excluir Artigo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {filteredArticles.length === 0 && (
                <div className="text-center py-16 bg-[#0A1424] border border-white/10 p-8">
                  <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <div className="font-brand text-lg text-white">Nenhum ensaio localizado</div>
                  <div className="text-xs text-slate-400 mt-1">Tente ajustar a busca ou categoria.</div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: EDITOR DE ENSAIO JURÍDICO */}
        {activeTab === 'editor' && (
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-brand text-2xl font-bold text-white tracking-wide">
                  {editingArticleId ? 'Editar Ensaio Jurídico' : 'Redigir Novo Ensaio Doutrinário'}
                </h2>
                <p className="text-xs font-display uppercase tracking-widest text-[#E5C384] mt-0.5">
                  Ambiente de Escrita & Publicação Direta
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className="text-xs font-display uppercase tracking-wider text-slate-400 hover:text-white px-3 py-1.5 border border-white/10 hover:border-white/30 cursor-pointer"
              >
                Cancelar & Voltar
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="space-y-6 bg-[#0A1424] p-8 border border-[#E5C384]/30 rounded-xs shadow-2xl">
              
              {/* Título & Subtítulo */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-[#E5C384] font-bold mb-1.5">
                    Título do Artigo *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Ex: A Vedação à Decisão-Surpresa e os Poderes Instrutórios no Art. 370 do CPC"
                    className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-white text-sm p-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Subtítulo / Linha Fina
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => handleSubtitleChange(e.target.value)}
                    placeholder="Ex: Análise sistemática das garantias do contraditório substancial no processo civil contemporâneo"
                    className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Categoria, Tempo de Leitura & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Categoria Doutrinária *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-white text-xs p-3 outline-none"
                  >
                    <option value="Direito Processual Civil">Direito Processual Civil</option>
                    <option value="Provas">Provas</option>
                    <option value="Direito Municipal">Direito Municipal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Tempo Estimado de Leitura
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="Ex: 8 min de leitura"
                    className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Tags (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="Art. 370 CPC, Provas, Cooperação"
                    className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none"
                  />
                </div>
              </div>

              {/* Resumo Doutrinário / Ementa */}
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-[#E5C384] font-bold mb-1.5">
                  Resumo Doutrinário / Ementa *
                </label>
                <textarea
                  rows={3}
                  required
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  placeholder="Síntese dogmática e propositiva do ensaio para indexação e leitura rápida..."
                  className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none"
                />
              </div>

              {/* Introdução */}
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                  Introdução do Ensaio
                </label>
                <textarea
                  rows={3}
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  placeholder="Contextualização fática e doutrinária inicial..."
                  className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none"
                />
              </div>

              {/* Seções Dinâmicas */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-display uppercase tracking-wider text-[#E5C384] font-bold">
                    Seções do Artigo ({sections.length})
                  </span>
                  <button
                    type="button"
                    onClick={handleAddSection}
                    className="inline-flex items-center gap-1 text-[11px] font-display uppercase tracking-wider text-[#E5C384] hover:text-white px-2 py-1 bg-white/5 border border-[#E5C384]/30 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar Seção</span>
                  </button>
                </div>

                {sections.map((sec, idx) => (
                  <div key={idx} className="p-4 bg-[#050B14] border border-white/10 rounded-xs space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) => handleSectionHeadingChange(idx, e.target.value)}
                        placeholder="Título da Seção (ex: 1. O Princípio da Não-Surpresa)"
                        className="w-full bg-transparent border-b border-white/10 text-white font-brand text-sm py-1 outline-none focus:border-[#E5C384]"
                      />
                      {sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveSection(idx)}
                          className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                          title="Remover seção"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <textarea
                      rows={4}
                      value={sec.text}
                      onChange={(e) => handleSectionTextChange(idx, e.target.value)}
                      placeholder="Texto da seção. Separe parágrafos com duas quebras de linha..."
                      className="w-full bg-[#0A1424] border border-white/10 p-2.5 text-xs text-slate-300 outline-none focus:border-[#E5C384]"
                    />
                  </div>
                ))}
              </div>

              {/* Considerações Finais */}
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                  Considerações Finais
                </label>
                <textarea
                  rows={2}
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  placeholder="Conclusão sintética da tese abordada..."
                  className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none"
                />
              </div>

              {/* Notas de Rodapé */}
              <div>
                <label className="block text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                  Notas de Rodapé & Legislação (uma por linha)
                </label>
                <textarea
                  rows={2}
                  value={footnotesInput}
                  onChange={(e) => setFootnotesInput(e.target.value)}
                  placeholder="Art. 370 do CPC/2015.&#10;MEDEIROS, Hélio. Os Poderes Instrutórios do Juiz no Processo Civil. 2. ed. Thoth, 2024."
                  className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-slate-200 text-xs p-3 outline-none font-mono"
                />
              </div>

              {/* Gerador de Citação ABNT */}
              <div className="p-4 bg-[#050B14] border border-[#E5C384]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-display uppercase tracking-widest text-[#E5C384] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Citação Bibliográfica Automática (ABNT NBR 6023)
                  </span>
                  <button
                    type="button"
                    onClick={() => setAbntCitation(generateAbnt(title, subtitle))}
                    className="text-[10px] font-display uppercase tracking-wider text-slate-400 hover:text-[#E5C384] underline cursor-pointer"
                  >
                    Regenerar Padrão
                  </button>
                </div>
                <input
                  type="text"
                  value={abntCitation}
                  onChange={(e) => setAbntCitation(e.target.value)}
                  placeholder="MEDEIROS, Hélio. Título do Artigo..."
                  className="w-full bg-[#0A1424] border border-white/10 text-[#E5C384] font-mono text-xs p-2.5 outline-none select-all"
                />
              </div>

              {/* Botões de Ação */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="px-5 py-3 border border-white/15 text-slate-400 hover:text-white text-xs font-display uppercase tracking-wider cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-[#E5C384] via-[#F3DAA2] to-[#C5A568] hover:from-[#F3DAA2] hover:to-[#E5C384] text-[#050B14] font-display font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E5C384]/20 cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  {editingArticleId ? 'Salvar Alterações do Artigo' : 'Publicar Artigo Imediatamente'}
                </button>
              </div>

            </form>

          </div>
        )}

      </main>

    </div>
  );
};
