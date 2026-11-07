import { Building2, GraduationCap, BookOpen, Check, ExternalLink } from 'lucide-react';
import { OFFICIAL_BOOK_URL } from '../data/legalContent';
import helioApresentacaoImg from '../assets/helio-apresentacao.jpg';

export const AboutSection = () => {
  return (
    <section id="apresentacao" className="py-24 lg:py-32 bg-[#050B14] relative border-t border-white/[0.06] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#E5C384]/5 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="reveal reveal-up text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-semibold block mb-2">
            TRAJETÓRIA & PROPÓSITO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            CONHEÇA HÉLIO MEDEIROS
          </h2>
          <div className="w-12 h-[1.5px] bg-[#E5C384] mx-auto my-4" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Advogado, jurista, <strong className="text-white font-medium">Procurador Municipal - POA/RS</strong> e um dos nomes de destaque no Direito Processual Civil contemporâneo.
          </p>
        </div>

        {/* Presentation Layout: Full-length photo + In-depth Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Full-length Seated Photo (Second Photo) */}
          <div className="lg:col-span-5 flex justify-center reveal reveal-scale">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#E5C384]/40 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#E5C384]/40 pointer-events-none" />

              <div className="relative rounded-xs luxury-card p-2.5">
                <div className="relative overflow-hidden rounded-xs border border-[#E5C384]/30 shadow-2xl shadow-black/90 aspect-[3/4.2] bg-[#070F1E]">
                  <img
                    src={helioApresentacaoImg}
                    alt="Hélio Fagundes Medeiros - Retrato Oficial"
                    className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                    <span className="font-brand text-lg text-white font-bold block">
                      Hélio Medeiros
                    </span>
                    <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-medium">
                      Procurador Municipal - POA/RS
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 reveal reveal-up reveal-delay-1">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5C384]/10 border border-[#E5C384]/30 text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-bold">
              PRÁXIS FORENSE & PESQUISA DE ALTO NÍVEL
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight leading-snug">
              O EQUILÍBRIO ENTRE A ADVOCACIA PÚBLICA E A PRODUÇÃO CIENTÍFICA
            </h3>

            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              <p>
                Hélio Medeiros é advogado, jurista, Procurador Municipal de Porto Alegre e um dos nomes de destaque no Direito Processual Civil contemporâneo. Com uma sólida trajetória que equilibra a prática da advocacia pública e a produção acadêmica de alto nível, Hélio dedica-se ao aperfeiçoamento das instituições jurídicas e à docência.
              </p>
              <p>
                Sua atuação é pautada pela busca de um processo civil mais justo, efetivo e seguro, combinando anos de experiência nos tribunais com uma profunda investigação científica em teoria geral do processo e direito probatório.
              </p>
            </div>

            {/* Quick credentials strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 bg-[#0B162C]/60 border border-white/[0.08] rounded-xs">
                <span className="text-[10px] font-mono uppercase text-[#E5C384] block">Cargo</span>
                <span className="text-white font-semibold">Procurador de POA</span>
              </div>
              <div className="p-3 bg-[#0B162C]/60 border border-white/[0.08] rounded-xs">
                <span className="text-[10px] font-mono uppercase text-[#E5C384] block">Liderança</span>
                <span className="text-white font-semibold">Vice-Diretor ESDM</span>
              </div>
              <div className="p-3 bg-[#0B162C]/60 border border-white/[0.08] rounded-xs col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono uppercase text-[#E5C384] block">Filiação</span>
                <span className="text-white font-semibold">Membro do IBDP</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Detailed Cards: Atuação Pública, Formação & Livros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Atuação Profissional e Advocacia Pública */}
          <div className="reveal reveal-up reveal-delay-1 luxury-card p-8 rounded-xs flex flex-col justify-between border border-[#E5C384]/25 hover:border-[#E5C384]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center text-[#E5C384] mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-bold block mb-1">
                CONTENCIOSO ESTRATÉGICO
              </span>

              <h4 className="font-brand font-bold text-xl text-white mb-4">
                Atuação Profissional e Advocacia Pública
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  Como Procurador do Município de Porto Alegre (RS), atua diretamente na defesa do interesse público e na gestão do contencioso judicial de alta complexidade.
                </p>
                <p>
                  Sua experiência prática é vasta, somando a representação e o acompanhamento de milhares de processos judiciais nos âmbitos estadual e federal, com forte presença no <strong>Tribunal de Justiça do Rio Grande do Sul (TJRS)</strong> e no <strong>Tribunal Regional do Trabalho da 4ª Região (TRT4)</strong>.
                </p>
                <p>
                  Exerce papel liderante na governança da advocacia pública como <strong>Vice-Diretor da Fundação Escola Superior de Direito Municipal (ESDM)</strong>, instituição fundamental para a capacitação e o debate jurídico sobre o municipalismo e o Direito Público.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-[#E5C384]">
              PGM Porto Alegre • Fundação ESDM
            </div>
          </div>

          {/* Card 2: Formação Acadêmica e Pesquisa */}
          <div className="reveal reveal-up reveal-delay-2 luxury-card p-8 rounded-xs flex flex-col justify-between border border-[#E5C384]/25 hover:border-[#E5C384]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center text-[#E5C384] mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-bold block mb-1">
                EXCELÊNCIA ACADÊMICA
              </span>

              <h4 className="font-brand font-bold text-xl text-white mb-4">
                Formação Acadêmica e Pesquisa Stricto Sensu
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  A sólida atuação prática de Hélio é respaldada por uma bagagem acadêmica de excelência construída na Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS):
                </p>
                
                <ul className="space-y-2 py-1 text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#E5C384] shrink-0 mt-0.5" />
                    <span><strong>Doutorando</strong> em Teoria Geral da Jurisdição e do Processo (PUCRS).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#E5C384] shrink-0 mt-0.5" />
                    <span><strong>Mestre</strong> em Teoria Geral da Jurisdição e do Processo (PUCRS).</span>
                  </li>
                </ul>

                <p>
                  Sua linha de pesquisa atual concentra-se em temas de vanguarda do direito processual, com especial enfoque em <strong>suficiência probatória, standards de prova e os limites da atuação judicial</strong>, buscando soluções teóricas que impactem positivamente a segurança jurídica do cidadão.
                </p>
                <p>
                  É membro ativo do prestigiado <strong>Instituto Brasileiro de Direito Processual (IBDP)</strong>.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-[#E5C384]">
              PUCRS • Escola de Direito • IBDP
            </div>
          </div>

          {/* Card 3: Livros e Publicações */}
          <div className="reveal reveal-up reveal-delay-3 luxury-card p-8 rounded-xs flex flex-col justify-between border border-[#E5C384]/25 hover:border-[#E5C384]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center text-[#E5C384] mb-6">
                <BookOpen className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-display uppercase tracking-widest text-[#E5C384] font-bold block mb-1">
                LITERATURA JURÍDICA NACIONAL
              </span>

              <h4 className="font-brand font-bold text-xl text-white mb-4">
                Livros e Contribuições Editoriais
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  Como autor e pesquisador, contribui ativamente para a literatura jurídica nacional. Entre suas principais contribuições destacam-se:
                </p>

                <div className="p-3 bg-[#050B14]/80 border border-[#E5C384]/30 rounded-xs space-y-1">
                  <div className="font-brand font-bold text-white text-xs uppercase">
                    • "Os Poderes Instrutórios do Juiz no Processo Civil"
                  </div>
                  <div className="text-[11px] text-[#E5C384]">
                    2ª Edição • Editora Thoth
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Obra autoral que analisa de forma crítica e propositiva o papel do magistrado na produção de provas à luz da efetividade e da segurança jurídica.
                  </p>
                </div>

                <div className="p-3 bg-[#050B14]/80 border border-white/10 rounded-xs space-y-1">
                  <div className="font-brand font-bold text-white text-xs uppercase">
                    • "A Vida e Obra dos Processualistas Gaúchos"
                  </div>
                  <div className="text-[11px] text-[#E5C384]">
                    Coordenador da Obra Coletiva
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Obra coletiva que resgata e homenageia a forte tradição do Rio Grande do Sul na formação do pensamento processual brasileiro.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={OFFICIAL_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-[#E5C384] hover:text-white transition-colors font-bold"
              >
                <span>Ver obra na Editora Thoth</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
