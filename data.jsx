// data.jsx — Real ONGs from the Mapa Solidário JP outreach list.
// Source: ONGs_MapaSolidarioJP.pdf (2026-05).
//
// `short` descriptions are inferred from the org's public-facing name +
// category. They should be reviewed/replaced by the team with the
// official copy provided by each organization.

const ONGS = [
  // ---------------- Cultura ----------------
  {
    id: 'centro-cultural-piollin',
    name: 'Centro Cultural Piollin',
    causa: 'cultura',
    handle: 'centroculturalpiollin',
    phone: '(83) 92146-0123',
    short: 'Centro cultural histórico de João Pessoa, com oficinas de circo, teatro e formação artística aberta à comunidade.',
  },
  {
    id: 'arca-paraiba',
    name: 'ARCA — Associação Recreativa Cultural e Artística',
    causa: 'cultura',
    handle: 'arca.paraiba',
    phone: '(83) 98876-2052',
    short: 'Coletivo paraibano que promove ações culturais, artísticas e recreativas com foco em arte popular e formação.',
  },

  // ---------------- Idosos ----------------
  {
    id: 'vila-vicentina',
    name: 'Vila Vicentina Júlia Freire',
    causa: 'idosos',
    handle: 'vilavicentinajp',
    phone: '(83) 98612-0016',
    short: 'Lar tradicional de João Pessoa que acolhe idosas em situação de vulnerabilidade há mais de um século.',
  },
  {
    id: 'casa-da-divina',
    name: 'Casa da Divina Misericórdia',
    causa: 'idosos',
    handle: 'casadadivina',
    phone: '(83) 99974-7799',
    short: 'Instituição de longa permanência que oferece moradia e cuidados a idosos sem suporte familiar.',
  },
  {
    id: 'aspan',
    name: 'ASPAN — Associação Promocional do Ancião',
    causa: 'idosos',
    handle: 'aspanlardeidosos',
    phone: '(83) 98794-8792',
    short: 'Lar para idosos com atendimento integral em saúde, alimentação, convivência e atividades.',
  },
  {
    id: 'lar-da-providencia',
    name: 'Lar da Providência Carneiro da Cunha',
    causa: 'idosos',
    handle: 'lardaprovidenciajoaopessoa',
    phone: '(83) 3133-3072',
    short: 'Instituição centenária que abriga e cuida de idosos em João Pessoa.',
  },
  {
    id: 'abrigo-amem',
    name: 'Abrigo Amém',
    causa: 'idosos',
    handle: 'abrigoamem',
    phone: '(83) 3245-2761',
    short: 'Casa de acolhimento que oferece moradia e dignidade para pessoas idosas em vulnerabilidade.',
  },

  // ---------------- Causa Animal ----------------
  {
    id: 'patinhas-felizes',
    name: 'Missão Patinhas Felizes',
    causa: 'animais',
    handle: 'missaopatinhasfelizes',
    phone: '(83) 99853-6336',
    short: 'Grupo de resgate, castração e adoção responsável de cães e gatos em João Pessoa.',
  },
  {
    id: 'guajiru',
    name: 'Associação Guajiru',
    causa: 'animais',
    handle: 'associacaoguajiru',
    phone: '(83) 99608-5226',
    short: 'ONG paraibana de proteção animal que atua no resgate, cuidado e adoção.',
  },

  // ---------------- Saúde ----------------
  {
    id: 'rede-feminina',
    name: 'Rede Feminina de Combate ao Câncer',
    causa: 'saude',
    handle: 'redefemininajpa',
    phone: '(83) 3241-5373',
    short: 'Apoia mulheres em tratamento contra o câncer com acolhimento, transporte e doações.',
  },
  {
    id: 'aspador',
    name: 'ASPADOR — Associação Paraibana de Doenças Raras',
    causa: 'saude',
    handle: 'aspador_pb',
    phone: '(83) 99840-0009',
    short: 'Rede de apoio a famílias de pacientes com doenças raras na Paraíba.',
  },
  {
    id: 'aima',
    name: 'AIMA — Associação Integrada Mães de Autista',
    causa: 'saude',
    handle: 'aima_associacao',
    phone: '(83) 98613-5707',
    short: 'Acolhe mães e familiares de pessoas autistas com terapias, oficinas e apoio.',
  },

  // ---------------- Educação ----------------
  {
    id: 'olho-do-tempo',
    name: 'Olho do Tempo — Escola Viva',
    causa: 'educacao',
    handle: 'olhodotempo',
    phone: '(83) 98831-3421',
    short: 'Escola comunitária com proposta pedagógica viva, voltada à formação integral de crianças e adolescentes.',
  },
  {
    id: 'cenap',
    name: 'CENAP — Centro Nacional de Aprendizagem Profissional',
    causa: 'educacao',
    handle: 'cenap.jp',
    phone: '(83) 99657-0397',
    short: 'Oferece cursos profissionalizantes para jovens em situação de vulnerabilidade.',
  },

  // ---------------- Crianças ----------------
  {
    id: 'casa-pequeno-davi',
    name: 'Casa Pequeno Davi',
    causa: 'criancas',
    handle: 'casa.pequeno.davi',
    phone: '(83) 3241-5263',
    short: 'Acolhe crianças e adolescentes em contraturno escolar com educação, arte e proteção integral.',
  },
  {
    id: 'cendac',
    name: 'CENDAC — Centro de Apoio à Criança e ao Adolescente',
    causa: 'criancas',
    handle: 'cendacpb',
    phone: '(83) 3218-5086',
    short: 'Atende crianças e adolescentes com programas socioeducativos e proteção contra a violência.',
  },
  {
    id: 'donos-do-amanha',
    name: 'Associação Donos do Amanhã',
    causa: 'criancas',
    handle: 'donosdoamanhapb',
    phone: '(83) 99683-9992',
    short: 'Projeto social focado no desenvolvimento integral de crianças e jovens em vulnerabilidade.',
  },
  {
    id: 'casa-crianca-cancer',
    name: 'Casa da Criança com Câncer',
    causa: 'criancas',
    handle: 'casadacriancacomcancerpb',
    phone: '(83) 98821-5687',
    short: 'Casa de apoio que acolhe crianças em tratamento oncológico e suas famílias em João Pessoa.',
  },
  {
    id: 'aldeias-infantis',
    name: 'Aldeias Infantis SOS Brasil',
    causa: 'criancas',
    handle: 'aldeiasinfantis',
    phone: '(83) 3238-8383',
    short: 'Acolhe crianças e adolescentes sem cuidado familiar, com unidade ativa em João Pessoa.',
  },

  // ---------------- Meio Ambiente ----------------
  {
    id: 'movimento-esgotei',
    name: 'Movimento Esgotei',
    causa: 'meio-ambiente',
    handle: 'movimentoesgotei',
    phone: '(83) 99981-9317',
    short: 'Coletivo que luta por saneamento básico e despoluição dos corpos d\u2019água de João Pessoa.',
  },
  {
    id: 'sos-rio-cuia',
    name: 'Movimento SOS Rio Cuiá',
    causa: 'meio-ambiente',
    handle: 'movsosriocuia',
    phone: '(83) 98757-5250',
    short: 'Defende a recuperação e preservação do Rio Cuiá, em João Pessoa.',
  },
  {
    id: 'mares-sem-plastico',
    name: 'Mares sem Plástico',
    causa: 'meio-ambiente',
    handle: 'maressemplastico',
    email: 'maressemplastico@gmail.com',
    short: 'Mobiliza voluntários para limpeza de praias e redução do plástico em ambientes marinhos.',
  },
];

window.ONGS = ONGS;
