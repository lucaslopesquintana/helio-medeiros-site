import { ArrowRight, Lock, Building2, GraduationCap, BookOpen } from 'lucide-react';
import { OFFICIAL_BOOK_URL } from '../data/legalContent';
import helioHeroImg from '../assets/helio-hero.jpg';

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-[#050B14] overflow-hidden">
      
      {/* Warm ambient studio lighting in background */}
      <div className="pointer-events-none absolute top-16 right-10 w-[550px] h-[550px] rounded-full bg-[#E5C384]/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-40 left-0 w-[450px] h-[450px] rounded-full bg-[#102342]/30 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small Gold Category Badge */}
            <div className="reveal reveal-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1C33] border border-[#E5C384]/30 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C384]" />
              <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-semibold">
                PODERES INSTRUTÓRIOS • 2ª EDIÇÃO
              </span>
            </div>

            {/* Giant Title with Script Accent */}
            <h1 className="reveal reveal-up reveal-delay-1 font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight uppercase">
              A CONFLUÊNCIA ENTRE A EFETIVIDADE PROCESSUAL E A{' '}
              <span className="font-script text-[#E5C384] text-5xl sm:text-6xl lg:text-7xl lowercase block font-normal tracking-normal py-1">
                Segurança Jurídica
              </span>
            </h1>

            {/* Subtitle */}
            <p className="reveal reveal-up reveal-delay-2 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Produção acadêmica, doutrina e atuação contenciosa dedicadas ao estudo sistemático do Art. 370 do CPC, ao contraditório substancial prévio e à defesa técnica do interesse público na Procuradoria Municipal de Porto Alegre.
            </p>

            {/* Primary Action Button & Subtext */}
            <div className="reveal reveal-up reveal-delay-3 pt-2 space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={OFFICIAL_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E5C384] via-[#F3DAA2] to-[#C5A568] hover:from-[#F3DAA2] hover:to-[#E5C384] text-[#050B14] font-display font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E5C384]/20 hover:shadow-[#E5C384]/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>ADQUIRIR LIVRO — 2ª EDIÇÃO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#apresentacao"
                  className="inline-flex items-center gap-2.5 px-6 py-4 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#E5C384]/40 text-slate-200 text-xs font-display uppercase tracking-widest transition-all duration-300"
                >
                  <span>CONHECER A TRAJETÓRIA</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <Lock className="w-3 h-3 text-[#E5C384]" />
                <span>EDITORA THOTH • DISPONÍVEL EM FORMATO IMPRESSO E E-BOOK</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Photographic Portrait of Hélio Fagundes Medeiros */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal reveal-scale reveal-delay-2">
            <div className="relative w-full max-w-md">
              
              {/* Warm decorative gold corner highlights */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#E5C384]/40 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#E5C384]/40 pointer-events-none" />

              {/* Main Portrait Frame (Enquadramento ajustado removendo 50% do espaço vazio no topo) */}
              <div className="relative rounded-xs luxury-card p-2 sm:p-2.5">
                <div className="relative overflow-hidden rounded-xs border border-[#E5C384]/30 shadow-2xl shadow-black/90 aspect-[4/5] bg-[#070F1E]">
                  <img
                    src={helioHeroImg}
                    alt="Hélio Medeiros - Procurador Municipal - POA/RS"
                    className="w-full h-full object-cover scale-[1.28] origin-[50%_28%] transition-transform duration-700"
                  />
                  {/* Subtle vignette lighting gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Name and Title Plate */}
                  <div className="absolute bottom-3.5 left-3 right-3 text-center z-10">
                    <span className="font-brand text-base sm:text-lg text-white font-bold block leading-tight drop-shadow-lg">
                      Hélio Medeiros
                    </span>
                    <span className="text-[10px] font-display uppercase tracking-wider text-[#E5C384] font-medium block mt-0.5 drop-shadow-md">
                      Procurador Municipal - POA/RS
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Hero 3-Item Feature Bar */}
        <div className="pt-10 border-t border-[#E5C384]/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
          
          <div className="reveal reveal-up flex items-center gap-4 p-4 rounded-xs bg-[#0A1424]/60 border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center text-[#E5C384] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-display uppercase tracking-widest text-[#E5C384] font-bold">
                ADVOCACIA PÚBLICA
              </div>
              <div className="text-xs text-slate-400 font-light mt-0.5">
                Defesa estratégica do interesse público em Porto Alegre
              </div>
            </div>
          </div>

          <div className="reveal reveal-up reveal-delay-2 flex items-center gap-4 p-4 rounded-xs bg-[#0A1424]/60 border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center text-[#E5C384] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-display uppercase tracking-widest text-[#E5C384] font-bold">
                CÁTEDRA & PESQUISA PUCRS
              </div>
              <div className="text-xs text-slate-400 font-light mt-0.5">
                Doutorando e Mestre em Direito Processual Civil
              </div>
            </div>
          </div>

          <div className="reveal reveal-up reveal-delay-3 flex items-center gap-4 p-4 rounded-xs bg-[#0A1424]/60 border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center text-[#E5C384] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-display uppercase tracking-widest text-[#E5C384] font-bold">
                DOUTRINA DE REFERÊNCIA
              </div>
              <div className="text-xs text-slate-400 font-light mt-0.5">
                Autor de monografia em 2ª Edição (Editora Thoth)
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
