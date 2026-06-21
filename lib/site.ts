export const SITE = {
  name: "Prazer em Ouvir",
  legalName: "Prazer em Ouvir — Centro Auditivo",
  tagline: "Reabilitação auditiva com atendimento humanizado",
  description:
    "Centro auditivo na Tijuca, Rio de Janeiro. Aparelhos auditivos das melhores marcas, atendimento domiciliar, adaptação personalizada e consulta gratuita.",
  url: "https://www.prazeremouvir.com.br",
  locale: "pt-BR",
  email: "contato@prazeremouvir.com.br",
  phones: [
    { label: "WhatsApp", number: "(21) 99671-7847", href: "tel:+5521996717847", whatsapp: true },
    { label: "Telefone", number: "(21) 3577-0918", href: "tel:+552135770918" },
    { label: "Telefone", number: "(21) 3577-0923", href: "tel:+552135770923" },
    { label: "Telefone", number: "(21) 2196-0362", href: "tel:+552121960362" },
  ],
  address: {
    street: "Rua Conde de Bonfim, 229 — Loja 1",
    complement: "Shopping 229 — Próximo ao metrô Saens Peña",
    neighborhood: "Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
    postalCode: "20520-051",
    country: "BR",
    latitude: -22.9242,
    longitude: -43.2316,
  },
  hours: [
    { day: "Segunda a Sexta", time: "09:00 — 18:00" },
    { day: "Sábado", time: "09:00 — 13:00" },
  ],
  social: {
    facebook: "https://www.facebook.com/prazeremouvir",
    instagram: "https://www.instagram.com/prazeremouvir",
  },
  whatsapp: {
    number: "5521996717847",
    defaultMessage:
      "Olá! Vim pelo site da Prazer em Ouvir e gostaria de agendar minha consulta gratuita.",
  },
};

export const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "A Empresa" },
  { href: "/servicos", label: "Serviços" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
];

export const DIFERENCIAIS = [
  {
    title: "Atendimento humanizado",
    body: "Escuta atenta e cuidado em cada etapa: da avaliação à adaptação do seu aparelho auditivo.",
    icon: "heart",
  },
  {
    title: "Atendimento domiciliar",
    body: "Vamos até você. Para pacientes com limitações de mobilidade, levamos todo o cuidado em casa.",
    icon: "home",
  },
  {
    title: "Adaptação personalizada",
    body: "Ajuste fino dos aparelhos auditivos ao seu perfil auditivo, rotina e ambientes do dia a dia.",
    icon: "sliders",
  },
  {
    title: "Melhores marcas do mercado",
    body: "Trabalhamos com Phonak, Rexton, Signia e Power One — tecnologia comprovada e confiável.",
    icon: "shield",
  },
  {
    title: "Preço que cabe no bolso",
    body: "Opções para diferentes orçamentos sem abrir mão da qualidade e do acompanhamento.",
    icon: "tag",
  },
  {
    title: "Diversas formas de pagamento",
    body: "Parcelamos no cartão e oferecemos condições especiais para facilitar o seu acesso à audição.",
    icon: "card",
  },
];

export const PROCESSO = [
  {
    step: "01",
    title: "Sente dificuldade em conversas em grupo?",
    body: "Se você pede para repetirem ou perde palavras em ambientes com mais pessoas, é hora de avaliar sua audição.",
  },
  {
    step: "02",
    title: "Aumenta muito o volume da TV?",
    body: "Quando familiares reclamam do volume alto, o seu sistema auditivo pode estar pedindo ajuda.",
  },
  {
    step: "03",
    title: "Agende uma consulta sem compromisso",
    body: "Avaliação audiológica gratuita com fonoaudiólogo especializado, presencial ou em domicílio.",
  },
  {
    step: "04",
    title: "Faça um teste presencial",
    body: "Experimente o aparelho indicado para o seu perfil e sinta a diferença antes de decidir.",
  },
];

export const DEPOIMENTOS = [
  {
    autor: "Sra. Marlene Bento Eubank",
    texto:
      "Sou muito grata pela dedicação da equipe Prazer em Ouvir. Minha vida ganhou um novo sentido após o uso dos meus aparelhos, e também todo o acompanhamento dos fonoaudiólogos.",
  },
  {
    autor: "Sra. Lucy de Oliveira Ribeiro",
    texto:
      "Não troco a Prazer em Ouvir por nada. Depois que conheci o trabalho de vocês, ganhei qualidade de vida!",
  },
  {
    autor: "Sra. Naisy Regina Goulart",
    texto:
      "O carinho e a atenção que a Prazer em Ouvir dedica a nós, pacientes, não tem preço!",
  },
];

export type Produto = {
  slug: string;
  nome: string;
  marca?: string;
  categoria: "Aparelho Auditivo" | "Acessório" | "Bateria" | "Proteção";
  descricao: string;
  caracteristicas: string[];
  imagem: string;
};

export const PRODUTOS: Produto[] = [
  {
    slug: "rexton-rose",
    nome: "Rexton Rose",
    marca: "Rexton",
    categoria: "Aparelho Auditivo",
    descricao:
      "Aparelho auditivo com tecnologia digital de última geração e programas automáticos que se ajustam aos ambientes.",
    caracteristicas: [
      "Programas automáticos por ambiente",
      "Gerador de ruído para tratamento de zumbido",
      "Proteção contra suor e altas temperaturas",
      "Design minimalista e discreto",
    ],
    imagem:
      "/images/rexton-rose.png",
  },
  {
    slug: "perfect-dry-lux",
    nome: "Perfect Dry Lux",
    marca: "Signia",
    categoria: "Acessório",
    descricao:
      "Desumidificador elétrico que remove umidade e desinfeta seus aparelhos auditivos, prolongando sua vida útil.",
    caracteristicas: [
      "Sistema patenteado de ar quente pulsado",
      "Controle eletrônico de temperatura (máx. 45 °C)",
      "Leve, discreto e silencioso",
      "Reduz o risco de contaminação viral e bacteriana",
    ],
    imagem:
      "/images/img-1.jpg",
  },
  {
    slug: "desumidificador-prazer-em-ouvir",
    nome: "Desumidificador Prazer em Ouvir",
    categoria: "Acessório",
    descricao:
      "Solução simples e eficaz para retirar a umidade dos aparelhos auditivos diariamente, prolongando sua durabilidade.",
    caracteristicas: [
      "Uso diário recomendado",
      "Aumenta a durabilidade do aparelho",
      "Prático e econômico",
    ],
    imagem:
      "/images/img-2.jpg",
  },
  {
    slug: "protetores-auriculares",
    nome: "Protetores Auriculares Personalizados",
    categoria: "Proteção",
    descricao:
      "Protetores feitos sob medida em silicone antialérgico. Ideais para natação, pós-cirúrgico e proteção profissional.",
    caracteristicas: [
      "Feitos sob medida para você",
      "Silicone antialérgico",
      "Flutua na água",
      "Prazo de entrega: 5 dias úteis",
    ],
    imagem:
      "/images/img-3.jpg",
  },
  {
    slug: "filtro-cerustop",
    nome: "Filtro Cerustop",
    categoria: "Proteção",
    descricao:
      "Pequeno filtro que protege o receptor do aparelho contra cera e impurezas, evitando entupimentos e mau funcionamento.",
    caracteristicas: [
      "Proteção contra cerúmen",
      "Substituição simples e rápida",
      "Compatível com diversos modelos",
    ],
    imagem:
      "/images/img-4.jpg",
  },
  {
    slug: "baterias-power-one",
    nome: "Baterias Auditivas Power One",
    marca: "Power One",
    categoria: "Bateria",
    descricao:
      "Baterias alemãs livres de mercúrio, com certificação ISO 50001. Maior segurança e durabilidade para o seu aparelho.",
    caracteristicas: [
      "Origem alemã (VARTA Microbatteries)",
      "Livres de mercúrio",
      "Certificação ISO 50001",
      "Alta durabilidade",
    ],
    imagem:
      "/images/power-one.png",
  },
];

export const MARCAS = ["Phonak", "Rexton", "Signia", "Power One"];

