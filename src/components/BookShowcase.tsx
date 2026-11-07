import { useState } from 'react';
import { CheckCircle2, Star, ExternalLink, ShieldCheck, Truck, BookOpen, Sparkles, Layers, Eye } from 'lucide-react';
import { MAIN_BOOK, COLLECTIVE_WORK } from '../data/legalContent';
import book3dImg from '../assets/livro-3d.jpg';
import bookCoverImg from '../assets/livro-capa.jpg';

export const BookShowcase = () => {
  const [activeImage, setActiveImage] = useState<'3d' | 'capa'>('3d');

  const insideTopics = [
    {
      title: 'Interpretação e Alcance do Artigo 370 do CPC',
      desc: 'Delimitação das balizas teleológicas e funcionais da iniciativa probatória ex officio.',
    },
    {
      title: 'Vedação Taxativa a Decisões-Surpresa (Arts. 9º e 10)',
      desc: 'Aplicação inderrogável do contraditório substancial prévio e dever de prevenção do juiz.',
    },
    {
      title: 'Relação com a Distribuição Dinâmica do Ônus (Art. 373)',
      desc: 'Compatibilização entre a iniciativa de ofício e a teoria das cargas probatórias dinâmicas.',
    },
    {
      title: 'Preservação Inegociável da Imparcialidade Judicial',
      desc: 'A equidistância como pressuposto de validade republicana da cognição jurisdicional.',
    },
    {
      title: 'Instrução Probatória e a Fazenda Pública em Juízo',
      desc: 'Peculiaridades probatórias nas demandas de alto impacto orçamentário e interesse municipal.',
    },
    {
      title: 'Prefácio e Apresentação de Grandes Mestres Nacionais',
      desc: 'Textos exclusivos do Prof. Dr. William Santos Ferreira e do Prof. Dr. Luís Alberto Reichelt.',
    },
  ];

  const testimonials = [
    {
      name: MAIN_BOOK.forewordBy.name,
      role: MAIN_BOOK.forewordBy.title,
      badge: 'PREFÁCIO DA OBRA',
      quote: MAIN_BOOK.forewordBy.note,
    },
    {
      name: MAIN_BOOK.presentationBy.name,
      role: MAIN_BOOK.presentationBy.title,
      badge: 'APRESENTAÇÃO',
      quote: MAIN_BOOK.presentationBy.note,
    },
    {
      name: 'Editora Thoth',
      role: 'Selo Editorial de Referência Jurídica',
      badge: 'CHANCELA EDITORIAL',
      quote:
        '"Obra de referência nacional adotada nos principais programas de pós-graduação e reiteradamente citada pela jurisprudência das Cortes pátrias."',
    },
  ];

  return (
    <section id="obra" className="py-24 lg:py-32 bg-[#050B14] relative border-t border-white/[0.06]">
      
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#E5C384]/5 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* =================================================================
            PARTE 1: O QUE VOCÊ ENCONTRA NA OBRA ("WHAT'S INSIDE")
           ================================================================= */}
        <div className="reveal reveal-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-semibold block mb-2">
            CONTEÚDO PROGRAMÁTICO DA 2ª EDIÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            O QUE VOCÊ ENCONTRA NESTA MONOGRAFIA
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Uma investigação analítica minuciosa que responde aos maiores desafios da prática forense sobre a prova e a postura do magistrado.
          </p>
        </div>

        {/* 6 What's Inside Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {insideTopics.map((topic, i) => (
            <div
              key={i}
              className={`reveal reveal-up reveal-delay-${(i % 3) + 1} luxury-card p-6 rounded-xs flex items-start gap-4`}
            >
              <div className="w-8 h-8 rounded-full bg-[#E5C384]/10 border border-[#E5C384]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#E5C384]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm uppercase text-white tracking-wide mb-1.5">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =================================================================
            PARTE 2: TESTEMUNHOS / AVALIAÇÕES ("REAL ACADEMICS. REAL IMPACT.")
           ================================================================= */}
        <div className="reveal reveal-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-semibold block mb-2">
            RECONHECIMENTO & CHANCELA CIENTÍFICA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            AVALIAÇÃO DE GRANDES PROCESSUALISTAS
          </h2>
        </div>

        {/* 3 Luxury Testimonial Cards with 5 Gold Stars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-up reveal-delay-${i + 1} luxury-card p-8 rounded-xs flex flex-col justify-between border border-[#E5C384]/25 hover:border-[#E5C384]/50 transition-all`}
            >
              <div>
                {/* Author badge & 5 stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-display uppercase tracking-widest text-[#E5C384] bg-[#E5C384]/10 px-2.5 py-1 border border-[#E5C384]/30">
                    {t.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[#E5C384]">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#E5C384]" />
                    ))}
                  </div>
                </div>

                <p className="font-serif italic text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-light">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-brand font-bold text-base text-white">
                  {t.name}
                </div>
                <div className="text-[11px] font-display text-slate-400 mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =================================================================
            PARTE 3: INSTITUTIONAL BADGES ("AS SEEN IN")
           ================================================================= */}
        <div className="reveal reveal-up py-8 border-y border-white/10 mb-24">
          <div className="text-center mb-6">
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-slate-400">
              VÍNCULOS INSTITUCIONAIS & DIFUSÃO CIENTÍFICA
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs sm:text-sm font-brand font-semibold text-slate-400 tracking-widest uppercase">
            <span className="hover:text-[#E5C384] transition-colors">PGM PORTO ALEGRE</span>
            <span className="text-[#E5C384]/40">•</span>
            <span className="hover:text-[#E5C384] transition-colors">PUCRS DIREITO</span>
            <span className="text-[#E5C384]/40">•</span>
            <span className="hover:text-[#E5C384] transition-colors">EDITORA THOTH</span>
            <span className="text-[#E5C384]/40">•</span>
            <span className="hover:text-[#E5C384] transition-colors">ESCOLA PROCESSUAL GAÚCHA</span>
            <span className="text-[#E5C384]/40">•</span>
            <span className="hover:text-[#E5C384] transition-colors">IBDP</span>
          </div>
        </div>

        {/* =================================================================
            PARTE 4: SHOWCASE COM A FOTO REAL DO LIVRO & FINAL CTA
            ("YOUR FREEDOM IS ONE DECISION AWAY" EQUIVALENT)
           ================================================================= */}
        <div className="reveal reveal-scale luxury-card rounded-xs p-8 sm:p-14 border border-[#E5C384]/35 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Official Real Book Mockup & Cover Selector */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* Image Switcher Toggle */}
              <div className="inline-flex items-center gap-2 p-1 bg-[#050B14] border border-[#E5C384]/30 mb-5">
                <button
                  onClick={() => setActiveImage('3d')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-display uppercase tracking-wider transition-all cursor-pointer ${
                    activeImage === '3d'
                      ? 'bg-[#E5C384] text-[#050B14] font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>Perspectiva 3D</span>
                </button>
                <button
                  onClick={() => setActiveImage('capa')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-display uppercase tracking-wider transition-all cursor-pointer ${
                    activeImage === 'capa'
                      ? 'bg-[#E5C384] text-[#050B14] font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Capa Frontal</span>
                </button>
              </div>

              {/* Real Book Image Frame */}
              <div className="relative group max-w-xs sm:max-w-sm rounded-xs overflow-hidden border border-[#E5C384]/40 p-2 bg-gradient-to-b from-[#101D38] to-[#070F1E] shadow-2xl shadow-black/80">
                <div className="relative overflow-hidden rounded-xs bg-[#FAF9F5]">
                  <img
                    src={activeImage === '3d' ? book3dImg : bookCoverImg}
                    alt="Poderes Instrutórios do Juiz no Processo Civil - 2ª Edição - Hélio Fagundes Medeiros"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="text-center mt-4 space-y-1">
                <div className="text-xs font-brand text-[#E5C384] font-semibold tracking-wider">
                  EDITORA THOTH • 2ª EDIÇÃO
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {activeImage === '3d' ? 'Foto Oficial do Mockup Físico' : 'Arte Oficial da Capa'}
                </div>
              </div>

            </div>

            {/* Right Column: High-Ticket Conversion Copy & Direct Action */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5C384]/15 border border-[#E5C384]/30 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#E5C384]" />
                <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-bold">
                  2ª EDIÇÃO REVISTA, ATUALIZADA E AMPLIADA
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
                SUA BIBLIOTECA JURÍDICA MERECE ESTA 2ª EDIÇÃO
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Compreenda a fundo a dinâmica da atividade probatória de ofício no Código de Processo Civil, com critérios objetivos para afastar decisões-surpresa e fundamentar petições e decisões com excelência dogmática.
              </p>

              {/* Big CTA Button */}
              <div className="pt-2 space-y-4">
                <a
                  href={MAIN_BOOK.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#E5C384] via-[#F3DAA2] to-[#C5A568] hover:from-[#F3DAA2] hover:to-[#E5C384] text-[#050B14] font-display font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-[#E5C384]/20 hover:shadow-[#E5C384]/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <BookOpen className="w-4 h-4 text-[#050B14]" />
                  <span>ADQUIRIR AGORA NA EDITORA THOTH</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* 3 Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E5C384]" />
                    <span>Compra 100% Segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#E5C384]" />
                    <span>Envio para Todo o Brasil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#E5C384]" />
                    <span>Exemplar Físico & E-Book</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Collective Work Banner */}
        <div className="reveal reveal-up reveal-delay-2 mt-12 p-8 rounded-xs luxury-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-bold">
              COORDENAÇÃO DE OBRA COLETIVA • ESCOLA PROCESSUAL GAÚCHA
            </span>
            <h4 className="font-brand text-2xl text-white">
              {COLLECTIVE_WORK.title}
            </h4>
            <p className="text-xs text-slate-400 font-light max-w-2xl leading-relaxed">
              {COLLECTIVE_WORK.description}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#050B14] border border-[#E5C384]/30 text-xs font-mono text-[#E5C384]">
              Coordenador Integrante
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
