import { MapPin, ArrowUp, ArrowUpRight, Lock } from 'lucide-react';
import { JURIST_INFO, OFFICIAL_BOOK_URL } from '../data/legalContent';

interface FooterProps {
  onOpenLogin?: () => void;
}

export const Footer = ({ onOpenLogin }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#03070E] text-slate-400 border-t border-[#E5C384]/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Identity & Stance (Sem o ícone da balança) */}
          <div className="reveal reveal-up lg:col-span-5 space-y-4">
            <div>
              <span className="font-brand text-xl sm:text-2xl font-bold text-white tracking-wider block">
                {JURIST_INFO.name}
              </span>
              <span className="text-[11px] font-display uppercase tracking-widest text-[#E5C384] block font-semibold mt-1">
                Procurador Municipal - POA/RS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-md pt-2">
              Pesquisa acadêmica e atuação jurídica dedicadas ao estudo dogmático dos poderes instrutórios do juiz, garantias processuais e tutela do interesse público em Porto Alegre.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#E5C384]" />
              <span>{JURIST_INFO.location}</span>
            </div>
          </div>

          {/* Institutional Affiliations */}
          <div className="reveal reveal-up reveal-delay-1 lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-bold border-b border-white/[0.08] pb-2">
              VÍNCULOS INSTITUCIONAIS
            </h4>
            
            <div className="space-y-4 text-xs font-light">
              <div>
                <div className="text-white font-medium">Procuradoria-Geral do Município de Porto Alegre</div>
                <div className="text-slate-400 text-[11px] mt-0.5">PGM/POA — Contencioso Estratégico Municipal</div>
                <a
                  href="mailto:helio.fagundes@portoalegre.rs.gov.br"
                  className="font-mono text-[#E5C384] text-[11px] hover:underline block mt-1"
                >
                  helio.fagundes@portoalegre.rs.gov.br
                </a>
              </div>

              <div>
                <div className="text-white font-medium">Fundação Escola Superior de Direito Municipal (ESDM)</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Vice-Diretoria</div>
              </div>

              <div>
                <div className="text-white font-medium">Pontifícia Universidade Católica do RS (PUCRS)</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Escola de Direito — Programa de Pós-Graduação em Direito (PPGD)</div>
                <a
                  href="mailto:helio.medeiros@pucrs.br"
                  className="font-mono text-[#E5C384] text-[11px] hover:underline block mt-1"
                >
                  helio.medeiros@pucrs.br
                </a>
              </div>
            </div>
          </div>

          {/* Academic & Editorial Portals */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-bold border-b border-white/[0.08] pb-2">
              PORTAIS & OBRAS
            </h4>

            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={OFFICIAL_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1 text-slate-300 hover:text-[#E5C384] transition-colors"
                >
                  <span>Editora Thoth (2ª Edição)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C384]" />
                </a>
              </li>
              <li>
                <a
                  href="https://lattes.cnpq.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1 text-slate-300 hover:text-[#E5C384] transition-colors"
                >
                  <span>Currículo Lattes (CNPq)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/helio.hfm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1 text-slate-300 hover:text-[#E5C384] transition-colors"
                >
                  <span>Instagram (@helio.hfm)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://prefeitura.poa.br/pgm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1 text-slate-300 hover:text-[#E5C384] transition-colors"
                >
                  <span>PGM Porto Alegre</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              {onOpenLogin && (
                <li>
                  <button
                    onClick={onOpenLogin}
                    className="flex items-center justify-between w-full py-1 text-slate-400 hover:text-[#E5C384] transition-colors cursor-pointer text-left font-mono"
                  >
                    <span>Área Restrita do Autor</span>
                    <Lock className="w-3 h-3 text-[#E5C384]" />
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Legal Colophon & Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Hélio Medeiros. Porto Alegre, RS — Brasil.
          </div>

          <div className="flex items-center gap-6">
            <span>DIREITO PROCESSUAL CIVIL • ADVOCACIA PÚBLICA</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#E5C384] hover:text-white transition-colors cursor-pointer"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
