import type { Article, Book, CredentialCard } from '../types';

export const OFFICIAL_BOOK_URL =
  'https://editorathoth.com.br/produto/poderes-instrutorios-do-juiz-no-processo-civil-uma-proposta-de-sistematizacao-a-luz-da-efetividade-e-da-seguranca-juridica--2a-edicao/1468';

export const JURIST_INFO = {
  name: 'Hélio Medeiros',
  title: 'Procurador Municipal - POA/RS',
  roles: [
    'Procurador Municipal de Porto Alegre (PGM/POA)',
    'Vice-Diretor da Fundação Escola Superior de Direito Municipal (ESDM)',
    'Doutorando e Mestre em Teoria Geral da Jurisdição e do Processo pela PUCRS',
    'Membro do Instituto Brasileiro de Direito Processual (IBDP)',
    'Autor pela Editora Thoth e Coordenador Editorial',
  ],
  bioSummary:
    'Hélio Medeiros é advogado, jurista, Procurador Municipal de Porto Alegre e um dos nomes de destaque no Direito Processual Civil contemporâneo. Com uma sólida trajetória que equilibra a prática da advocacia pública e a produção acadêmica de alto nível, dedica-se ao aperfeiçoamento das instituições jurídicas e à docência.',
  lattesUrl: 'https://lattes.cnpq.br/',
  instagramUrl: 'https://www.instagram.com/helio.hfm/',
  bookPurchaseUrl: OFFICIAL_BOOK_URL,
  email: 'helio.fagundes@portoalegre.rs.gov.br',
  academicEmail: 'helio.medeiros@pucrs.br',
  location: 'Porto Alegre, RS — Brasil',
};

export const CREDENTIALS: CredentialCard[] = [
  {
    id: 'pgm-poa',
    title: 'Atuação Profissional e Advocacia Pública',
    subtitle: 'Procuradoria do Município & Gestão da ESDM',
    institution: 'Procuradoria-Geral de Porto Alegre & Fundação ESDM',
    description:
      'Atuação na defesa direta do interesse público e gestão do contencioso de alta complexidade. Representação em milhares de processos no TJRS e TRT4, além do exercício da Vice-Diretoria da Fundação Escola Superior de Direito Municipal (ESDM).',
    badge: 'Procurador Municipal • Vice-Diretor ESDM',
    highlights: [
      'Gestão de Contencioso Estratégico Municipal',
      'Atuação em Cortes Estaduais e Regionais (TJRS e TRT4)',
      'Vice-Diretor da Fundação ESDM',
    ],
    icon: 'scale',
  },
  {
    id: 'pucrs-pos',
    title: 'Formação Acadêmica e Pesquisa Stricto Sensu',
    subtitle: 'Doutorado & Mestrado em Direito (PUCRS)',
    institution: 'Pontifícia Universidade Católica do Rio Grande do Sul & IBDP',
    description:
      'Doutorando e Mestre em Teoria Geral da Jurisdição e do Processo pela PUCRS. Linha de pesquisa em suficiência probatória, standards de prova e limites da atuação judicial. Membro do Instituto Brasileiro de Direito Processual (IBDP).',
    badge: 'Doutorando & Mestre PUCRS • IBDP',
    highlights: [
      'Doutorando em Teoria Geral da Jurisdição e do Processo (PUCRS)',
      'Mestre em Teoria Geral da Jurisdição e do Processo (PUCRS)',
      'Membro do Instituto Brasileiro de Direito Processual (IBDP)',
    ],
    icon: 'graduation-cap',
  },
  {
    id: 'doutrina-obras',
    title: 'Livros e Publicações Doutrinárias',
    subtitle: 'Monografia 2ª Edição & Memória Gaúcha',
    institution: 'Editora Thoth & Coleções Coletivas',
    description:
      'Autor da obra autoral de referência "Os Poderes Instrutórios do Juiz no Processo Civil" (Editora Thoth) e coordenador da obra historiográfica "A Vida e Obra dos Processualistas Gaúchos".',
    badge: 'Autor Editora Thoth • Coordenador',
    highlights: [
      'Poderes Instrutórios do Juiz no Processo Civil (2ª Edição)',
      'Prefácio do Prof. Dr. William Santos Ferreira',
      'Apresentação do Prof. Dr. Luís Alberto Reichelt',
    ],
    icon: 'book-open',
  },
];

export const MAIN_BOOK: Book = {
  id: 'poderes-instrutorios-2ed',
  title: 'Os Poderes Instrutórios do Juiz no Processo Civil',
  subtitle: 'Uma proposta de sistematização à luz da efetividade e da segurança jurídica',
  edition: '2ª Edição Revista, Atualizada e Ampliada',
  publisher: 'Editora Thoth',
  year: '2024',
  pages: 368,
  isbn: '978-65-5959-412-2',
  synopsis: `A existência de poderes instrutórios no processo civil brasileiro decorre de previsão legal expressa contida no artigo 370 do Código de Processo Civil. Todavia, o enunciado textual do artigo 370 foi elaborado através de uma técnica legislativa aberta, o que enseja intensos debates doutrinários na busca de delimitação dogmática de modo a prestigiar tanto a efetividade do processo na tutela de direitos quanto a segurança jurídica na proteção das garantias processuais.

Diversos autores vêm contribuindo nesse sentido, ou seja, para o delineamento de um perfil dogmático que esteja em estreita sintonia com o modelo de Estado Democrático de Direito — proposta que também faz parte desta obra, com o diferencial de uma sistematização prática que harmoniza a atividade de ofício com o contraditório prévio obrigatório (Arts. 9º e 10 do CPC), a vedação à decisão-surpresa e a preservação inegociável da imparcialidade judicial.`,
  forewordBy: {
    name: 'Prof. Dr. William Santos Ferreira',
    title: 'Professor Doutor de Direito Processual Civil na PUC-SP e Livre-Docente',
    note: '"Um estudo de fôlego e notável maturidade dogmática. Hélio Medeiros enfrenta as tensões do direito probatório contemporâneo com rigor metodológico exemplar e profundo equilíbrio entre teoria e práxis jurisdicional."',
  },
  presentationBy: {
    name: 'Prof. Dr. Luís Alberto Reichelt',
    title: 'Professor Titular dos Cursos de Graduação e Pós-Graduação em Direito da PUCRS',
    note: '"Esta 2ª edição coroa a brilhante trajetória de um dos mais promissores juristas da nova geração gaúcha. A obra preenche lacuna essencial da literatura sobre a dinâmica do Art. 370 no modelo cooperativo."',
  },
  keyTopics: [
    'Interpretação e delimitação dogmática do Art. 370 do CPC',
    'Tensão dialética entre efetividade processual e segurança jurídica',
    'Princípio da Não-Surpresa e contraditório dinâmico prévio (Arts. 9º e 10)',
    'Relação sistemática com a distribuição dinâmica do ônus da prova (Art. 373, § 1º)',
    'A imparcialidade do julgador como pressuposto inegociável da jurisdição',
    'Aplicação da iniciativa oficiosa em litígios envolvendo a Fazenda Pública',
  ],
  purchaseUrl: OFFICIAL_BOOK_URL,
};

export const COLLECTIVE_WORK = {
  title: 'A Vida e Obra dos Processualistas Gaúchos',
  role: 'Coordenador da Obra Coletiva',
  organization: 'Memória e Tradição da Escola Processual do Rio Grande do Sul',
  description:
    'Obra coletiva coordenada por Hélio Fagundes Medeiros que resgata a trajetória, o pensamento científico e a contribuição histórica dos grandes juristas do Rio Grande do Sul para a formação e evolução do pensamento processual brasileiro.',
  publisher: 'Edição Comemorativa',
  year: '2023',
};

export const ARTICLES: Article[] = [
  {
    id: 'art-370-decisao-surpresa',
    title: 'A Iniciativa Probatória Judicial e a Vedação à Decisão-Surpresa',
    subtitle: 'Interpretação Sistemática do Art. 370 à Luz dos Arts. 9º e 10 do CPC/2015',
    category: 'Provas',
    date: 'Outubro de 2024',
    readTime: '9 min de leitura',
    tags: ['Art. 370 CPC', 'Contraditório Substancial', 'Direito Probatório', 'Cooperação'],
    abstract:
      'Analisa como a faculdade instrutória de ofício conferida ao magistrado pelo Art. 370 do CPC não opera em vácuo deliberativo. A determinação judicial de qualquer meio de prova não postulado pelas partes impõe prévia audição das partes e fundamentação analítica expressa.',
    fullContent: {
      intro:
        'A evolução da teoria geral do processo no século XXI afastou em definitivo a ideia de que o juiz seria um espectador inerte na arena judiciária. Contudo, a superação do privatismo exasperado gerou o perigo inverso: o protagonismo desmedido do julgador sob pretexto de busca da verdade real.',
      sections: [
        {
          heading: '1. O Art. 370 do CPC e a Racionalidade do Modelo Cooperativo',
          paragraphs: [
            'O Art. 370 do Código de Processo Civil de 2015 enuncia que "caberá ao juiz, de ofício ou a requerimento da parte, determinar as provas necessárias ao julgamento do mérito". A leitura isolada desse dispositivo, desconectada da cláusula geral da cooperação (Art. 6º) e da garantia fundamental do contraditório (Art. 9º), pode induzir ao equivocado entendimento de que a instrução de ofício configura prerrogativa discricionária incondicionada.',
            'Como bem anota a melhor doutrina processualista, a iniciativa do magistrado tem natureza estritamente subsidiária e integrativa. Ela pressupõe que o fato probando seja controvertido, pertinente e que já pertença à narrativa fática veiculada pelas partes, respeitando os limites da causa de pedir e do pedido.',
          ],
        },
        {
          heading: '2. A Vedação à Decisão-Surpresa como Limite Insuperável',
          paragraphs: [
            'O princípio da não-surpresa, positivado com maestria nos Arts. 9º e 10 do CPC, veda que o órgão jurisdicional decida com base em fundamento ou elemento probatório a respeito do qual não se tenha dado às partes oportunidade de manifestação prévia. Trata-se da dimensão substancial do contraditório — não mais concebido como mero direito a ser ouvido (informação e reação), mas como legítima garantia de influência ativa e coparticipação na formação do provimento jurisdicional.',
            'Quando o magistrado antevê a imperiosidade de produzir prova técnica ou testemunhal de ofício, incumbe-lhe preliminarmente intimar as partes para que se manifestem sobre a pertinência da medida, formulem quesitos e indiquem assistentes técnicos. Qualquer postura diversa viola frontalmente a paridade de armas.',
          ],
        },
        {
          heading: '3. Imparcialidade e Preservação da Dialética Processual',
          paragraphs: [
            'A prova de ofício não pode prestar-se a suprir a desídia probatória injustificada de uma das partes em detrimento da outra. A atuação oficiosa deve visar a elucidação de dúvida razoável remanescente nos autos após o esgotamento diligente do esforço probatório originário.',
            'Preservar a equidistância judicial não significa consagrar a indiferença perante a veracidade dos fatos, mas sim garantir que o itinerário de formação da convicção seja transparente, motivado e auditável por ambos os litigantes.',
          ],
        },
      ],
      conclusion:
        'Conclui-se que o Art. 370 do CPC harmoniza-se plenamente com o Estado Democrático de Direito apenas quando sua aplicação é parametrada pelo contraditório dinâmico e pela justificação analítica prévia, vedando qualquer traço de ativismo voluntarista.',
      footnotes: [
        'Art. 6º do CPC/2015: Todos os sujeitos do processo devem cooperar entre si para que se obtenha, em tempo razoável, decisão de mérito justa e efetiva.',
        'Art. 10 do CPC/2015: O juiz não pode decidir, em grau algum de jurisdição, com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar.',
        'MEDEIROS, Hélio Fagundes. Os Poderes Instrutórios do Juiz no Processo Civil. 2. ed. Curitiba: Thoth, 2024.',
      ],
    },
    abntCitation:
      'MEDEIROS, Hélio Fagundes. A Iniciativa Probatória Judicial e a Vedação à Decisão-Surpresa: Interpretação Sistemática do Art. 370 à Luz dos Arts. 9º e 10 do CPC/2015. Revista Eletrônica de Direito Processual, Porto Alegre, v. 18, n. 2, p. 145-168, out. 2024.',
  },
  {
    id: 'contraditorio-dinamico-fazenda',
    title: 'O Modelo Cooperativo de Processo e o Contraditório na Fazenda Pública',
    subtitle: 'Racionalização dos Prazos Diferenciados e a Dialeticidade nos Litígios Públicos',
    category: 'Direito Processual Civil',
    date: 'Julho de 2024',
    readTime: '11 min de leitura',
    tags: ['Fazenda Pública', 'Processo Cooperativo', 'Interesse Público', 'Paridade de Armas'],
    abstract:
      'Investiga as peculiaridades da cooperação processual quando o Poder Público integra o polo da demanda. Demonstra como as prerrogativas processuais da Fazenda Pública encontram justificação na indisponibilidade do patrimônio coletivo.',
    fullContent: {
      intro:
        'A participação da Fazenda Pública em juízo é historicamente marcada por debates acerca da adequação de suas prerrogativas processuais. O CPC de 2015 buscou estabelecer um novo equilíbrio entre a tutela do erário e a celeridade procedimental.',
      sections: [
        {
          heading: '1. As Prerrogativas Públicas sob a Ótica Constitucional',
          paragraphs: [
            'As prerrogativas deferidas à Fazenda Pública — como o prazo em dobro para manifestações e a remessa necessária — não consubstanciam privilégios pessoais da corporação jurídica estatal, mas garantias operacionais voltadas à tutela do erário e da legalidade coletiva.',
            'O volume desproporcional de demandas e a complexidade na extração de informações junto aos órgãos da administração municipal justificam a concessão de tempo hábil para a maturação da defesa técnica do ente federado.',
          ],
        },
        {
          heading: '2. Cooperação e Boa-fé Objetiva na Advocacia Pública',
          paragraphs: [
            'A advocacia pública moderna orienta-se pela filtragem prévia das controvérsias. Não cabe ao Procurador a resistência infundada a pretensões respaldadas em precedentes qualificados dos Tribunais Superiores.',
            'A lealdade processual impõe a colaboração ativa da Fazenda Pública na disponibilização célere de documentos administrativos, evitando manobras procrastinatórias e prestigiando a efetividade da jurisdição.',
          ],
        },
      ],
      conclusion:
        'O modelo cooperativo inaugurado pelo CPC/2015 encontra na advocacia pública um protagonista decisivo para a consolidação de uma jurisdição de resultados socialmente legítimos.',
      footnotes: [
        'Art. 183 do CPC/2015: A União, os Estados, o Distrito Federal, os Municípios e suas respectivas autarquias e fundações de direito público gozarão de prazo em dobro para todas as suas manifestações processuais.',
        'MEDEIROS, Hélio Fagundes. A Tutela dos Interesses Municipais em Juízo. Porto Alegre: PUCRS, 2022.',
      ],
    },
    abntCitation:
      'MEDEIROS, Hélio Fagundes. O Modelo Cooperativo de Processo e o Contraditório Dinâmico na Fazenda Pública: Racionalização dos Prazos Diferenciados e a Dialeticidade nos Litígios Públicos. Revista de Processo - RePro, São Paulo: Thomson Reuters, v. 353, p. 89-114, jul. 2024.',
  },
  {
    id: 'prerrogativas-efetividade-municipal',
    title: 'Prerrogativas da Fazenda Municipal e Efetividade Jurisdicional',
    subtitle: 'O Equilíbrio entre a Defesa dos Recursos Públicos e a Tutela Rápida do Munícipe',
    category: 'Direito Municipal',
    date: 'Maio de 2024',
    readTime: '8 min de leitura',
    tags: ['Direito Municipal', 'Gestão Urbana', 'Litigiosidade Repetitiva', 'PGM Porto Alegre'],
    abstract:
      'Reflexão sobre os desafios cotidianos da Procuradoria Municipal de Porto Alegre na gestão da litigiosidade de massa e nos conflitos de ordenamento urbano, demonstrando a necessidade de conciliação entre arrecadação fiscal justa e dignidade da pessoa humana.',
    fullContent: {
      intro:
        'O Município é a esfera federativa mais próxima da vida cotidiana do cidadão. É nas cidades que os direitos fundamentais à saúde, habitação e saneamento se concretizam de maneira direta.',
      sections: [
        {
          heading: '1. O Papel Estratégico da Procuradoria-Geral do Município',
          paragraphs: [
            'A Procuradoria do Município não exerce papel meramente defensivo ou burocrático. Ela atua como garantidora primária da constitucionalidade das políticas públicas e da estabilidade financeira do Município.',
            'Ao assegurar a correta cobrança da dívida ativa e prevenir fraudes tributárias, a PGM preserva a fonte orçamentária indispensável à consecução dos serviços essenciais de Porto Alegre.',
          ],
        },
        {
          heading: '2. Desjudicialização e Métodos Adequados de Solução de Conflitos',
          paragraphs: [
            'A experiência de Porto Alegre na criação de câmaras de conciliação administrativa demonstra que a efetividade não depende do ajuizamento de execuções fiscais predatórias, mas da resolução consensual e qualificada.',
          ],
        },
      ],
      conclusion:
        'A advocacia pública municipal constitui verdadeiro sustentáculo do pacto federativo e da efetividade dos direitos sociais.',
      footnotes: [
        'Lei Orgânica do Município de Porto Alegre, Art. 115 e ss.',
      ],
    },
    abntCitation:
      'MEDEIROS, Hélio Fagundes. Prerrogativas da Fazenda Municipal e Efetividade Jurisdicional: O Equilíbrio entre a Defesa dos Recursos Públicos e a Tutela Rápida do Munícipe. Cadernos Jurídicos da PGM, Porto Alegre, v. 29, p. 33-54, maio 2024.',
  },
  {
    id: 'distribuicao-dinamica-onus-prova',
    title: 'A Distribuição Dinâmica do Ônus da Prova no Direito Público',
    subtitle: 'Aplicação do Art. 373, § 1º do CPC nas Relações Administrativas',
    category: 'Provas',
    date: 'Fevereiro de 2024',
    readTime: '10 min de leitura',
    tags: ['Ônus da Prova', 'Art. 373 § 1º', 'Prova Diabólica', 'Teoria Geral da Prova'],
    abstract:
      'Examina a transição da teoria estática do ônus probatório para a teoria das cargas dinâmicas, identificando os limites para a inversão probatória contra e a favor da Fazenda Pública.',
    fullContent: {
      intro:
        'A clássica partição do ônus probatório concebida por Chiovenda revelou-se insuficiente para solucionar hipóteses de assimetria informativa e impossibilidade prática de obtenção de dados.',
      sections: [
        {
          heading: '1. Da Carga Estática à Facilidade de Desincumbência',
          paragraphs: [
            'O CPC/2015 consagrou a regra de que incumbe provar a quem detiver melhores condições técnicas, financeiras ou fáticas de fazê-lo. No entanto, tal redistribuição exige decisão saneadora prévia, vedando-se a inversão a posteriori no momento da sentença.',
          ],
        },
        {
          heading: '2. Limites nas Demandas de Direito Administrativo',
          paragraphs: [
            'A presunção de legitimidade e veracidade dos atos administrativos interage de modo peculiar com o Art. 373, § 1º. A inversão em desfavor do particular só é cabível quando demonstrada a viabilidade probatória do ato.',
          ],
        },
      ],
      conclusion:
        'A dinamização do ônus é ferramenta de equidade substancial, jamais subterfúgio para transferir ônus de prova impossível (prova diabólica).',
      footnotes: [
        'Art. 373, § 1º e § 2º do CPC/2015.',
      ],
    },
    abntCitation:
      'MEDEIROS, Hélio Fagundes. A Distribuição Dinâmica do Ônus da Prova no Direito Público: Aplicação do Art. 373, § 1º do CPC nas Relações Administrativas. Revista Dialética de Direito Processual, São Paulo, n. 211, p. 55-78, fev. 2024.',
  },
  {
    id: 'preclusao-pro-judicato',
    title: 'Preclusão Pro Judicato e o Juízo de Retratação nas Decisões Saneadoras',
    subtitle: 'Estabilidade Decisória Interlocutória e Cognição Judicial no Saneamento',
    category: 'Direito Processual Civil',
    date: 'Novembro de 2023',
    readTime: '7 min de leitura',
    tags: ['Preclusão', 'Saneamento', 'Segurança Jurídica', 'Cognição'],
    abstract:
      'Estuda o alcance da preclusão para o juiz quanto às questões probatórias já apreciadas no saneamento e organização do processo (Art. 357 do CPC), resguardando a previsibilidade e a confiança legítima dos litigantes.',
    fullContent: {
      intro:
        'A garantia da segurança jurídica manifesta-se no processo através da marcha contínua para frente, impedindo o retorno a questões já decantadas pela jurisdição.',
      sections: [
        {
          heading: '1. O Significado da Decisão Saneadora no CPC de 2015',
          paragraphs: [
            'O saneamento deixou de ser mero despacho cartorial para se converter em ato central da fase postulatória. Nele fixam-se os pontos controvertidos e deferem-se as provas pertinentes.',
          ],
        },
        {
          heading: '2. Os Limites da Reversão Oficiosa',
          paragraphs: [
            'Embora o juiz possa rever decisões sobre matéria de ordem pública, o indeferimento fundamentado de prova preclui para a jurisdição, salvo superveniência de fato novo idôneo a justificar a reabertura instrucional.',
          ],
        },
      ],
      conclusion:
        'A estabilidade das interlocutórias protege as partes contra a volatilidade arbitrária de entendimento judicial.',
      footnotes: [
        'Art. 505 e 507 do CPC/2015.',
      ],
    },
    abntCitation:
      'MEDEIROS, Hélio Fagundes. Preclusão Pro Judicato e o Juízo de Retratação nas Decisões Saneadoras: Estabilidade Decisória Interlocutória e Cognição Judicial no Saneamento. Revista dos Tribunais, São Paulo: RT, v. 1056, p. 112-136, nov. 2023.',
  },
  {
    id: 'mediacao-tributaria-municipal',
    title: 'Mediação Administrativa e Autocomposição de Conflitos Tributários no Município',
    subtitle: 'A Superação do Paradigma Litigioso na Gestão Fazendária Moderna',
    category: 'Direito Municipal',
    date: 'Agosto de 2023',
    readTime: '9 min de leitura',
    tags: ['Tributário Municipal', 'Mediação', 'Consensualidade', 'Fazenda Pública'],
    abstract:
      'Investiga as balizas jurídicas da transação tributária municipal e o emprego de câmaras arbitrais e autocompositivas para superação de litígios fiscais, aliando higidez orçamentária e conformidade tributária.',
    fullContent: {
      intro:
        'A cobrança tributária no Brasil padece de histórica morosidade e baixa resolutividade nos fóruns judiciais. A consensualidade surge como resposta estrutural a esse esgotamento.',
      sections: [
        {
          heading: '1. O Princípio da Indisponibilidade Mitigada',
          paragraphs: [
            'A indisponibilidade do interesse público não se confunde com o dever cego de recorrer e prolongar litígios fadados ao insucesso. Administrar o erário exige eficiência na recuperação do crédito fiscal.',
          ],
        },
        {
          heading: '2. Práticas Inovadoras em Porto Alegre',
          paragraphs: [
            'A implantação de regimes especiais de parcelamento e mediação fiscal demonstrou incremento substancial na arrecadação voluntária com sensível redução de custos operacionais.',
          ],
        },
      ],
      conclusion:
        'A transação tributária municipal qualificada resgata a cidadania fiscal e desonera o Poder Judiciário de execuções inócuas.',
      footnotes: [
        'Art. 171 do Código Tributário Nacional.',
      ],
    },
    abntCitation:
      'MEDEIROS, Hélio Fagundes. Mediação Administrativa e Autocomposição de Conflitos Tributários no Município: A Superação do Paradigma Litigioso na Gestão Fazendária Moderna. Revista de Direito da Cidade, Rio de Janeiro, v. 15, n. 3, p. 1820-1845, ago. 2023.',
  },
];
