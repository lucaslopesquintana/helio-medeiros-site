import { Scale, ShieldCheck, Target, Building2, Users, Award, Quote } from 'lucide-react';

export const BentoGrid = () => {
  const pillars = [
    {
      icon: <Scale className="w-6 h-6 text-[#E5C384]" />,
      title: 'ARTIGO 370 DO CPC',
      desc: 'Superação do falso dilema entre a inércia privatística e o autoritarismo judicial na instrução probatória.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E5C384]" />,
      title: 'VEDAÇÃO À SURPRESA',
      desc: 'Contraditório substancial prévio obrigatório (Arts. 9º e 10 do CPC) para qualquer determinação probatória ex officio.',
    },
    {
      icon: <Target className="w-6 h-6 text-[#E5C384]" />,
      title: 'STANDARDS PROBATÓRIOS',
      desc: 'Racionalidade e controle intersubjetivo na valoração da prova e na motivação analítica das decisões.',
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#E5C384]" />,
      title: 'FAZENDA PÚBLICA',
      desc: 'Prerrogativas processuais legítimas e a salvaguarda do patrimônio coletivo nas demandas municipais.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#E5C384]" />,
      title: 'MODELO COOPERATIVO',
      desc: 'Dever de colaboração recíproca entre partes e magistrado na construção do provimento (Art. 6º do CPC).',
    },
    {
      icon: <Award className="w-6 h-6 text-[#E5C384]" />,
      title: 'ESCOLA GAÚCHA',
      desc: 'Preservação histórica e rigor dogmático herdados dos insignes processualistas do Rio Grande do Sul.',
    },
  ];

  return (
    <section id="metodo" className="py-24 lg:py-32 bg-[#050B14] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading (Matches reference image "AUTOMATE. SCALE. BE FREE.") */}
        <div className="reveal reveal-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#E5C384] font-semibold block mb-2">
            MÉTODO & DOGMÁTICA PROCESSUAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            EFETIVIDADE. COOPERAÇÃO. SEGURANÇA.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Uma proposta sistemática que harmoniza a atividade probatória de ofício do juiz com a intangibilidade das garantias fundamentais das partes no Estado Democrático de Direito.
          </p>
        </div>

        {/* 6 Luxury Square Feature Cards (Exactly matching reference image) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`reveal reveal-up reveal-delay-${(idx % 6) + 1} luxury-card p-6 rounded-xs flex flex-col items-center text-center group cursor-default`}
            >
              <div className="w-12 h-12 rounded-xs bg-[#0F203A] border border-[#E5C384]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#E5C384] transition-colors mb-2">
                {pillar.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote & Big Metrics Banner (Matches the prominent banner in reference) */}
        <div className="reveal reveal-up reveal-delay-2 luxury-card rounded-xs p-8 sm:p-12 border border-[#E5C384]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Statement & Author Signature */}
            <div className="lg:col-span-6 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <Quote className="w-8 h-8 text-[#E5C384] opacity-80" />
              <p className="text-base sm:text-lg text-slate-200 font-serif italic leading-relaxed">
                "A existência de poderes instrutórios no Artigo 370 do CPC não autoriza o protagonismo voluntarista do julgador: a iniciativa de ofício é instrumento de cooperação e integridade, jamais de surpresa processual."
              </p>
              <div className="pt-2">
                <span className="font-script text-[#E5C384] text-3xl block">
                  Hélio Medeiros
                </span>
                <span className="text-[11px] font-display uppercase tracking-widest text-[#E5C384] block -mt-1 font-medium">
                  Procurador Municipal - POA/RS
                </span>
              </div>
            </div>

            {/* Right: Big Impact Numbers (Matches "$1M+ | 10-15x | 1000+") */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#E5C384] tracking-tight">
                  2ª Ed.
                </div>
                <div className="text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mt-1">
                  Obra Monográfica
                </div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">
                  Revista e Atualizada
                </div>
              </div>

              <div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#E5C384] tracking-tight">
                  Art. 370
                </div>
                <div className="text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mt-1">
                  Exegese Sistêmica
                </div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">
                  Poderes do Juiz
                </div>
              </div>

              <div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#E5C384] tracking-tight">
                  15+ Anos
                </div>
                <div className="text-xs font-display uppercase tracking-wider text-slate-300 font-semibold mt-1">
                  Dedicação Jurídica
                </div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">
                  PGM Porto Alegre & PUCRS
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
