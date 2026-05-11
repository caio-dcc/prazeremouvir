import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.resumo,
    alternates: { canonical: `/curiosidades/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.titulo,
      description: post.resumo,
      images: [post.imagem],
      publishedTime: post.dataISO,
    },
  };
}

const CONTEUDO: Record<string, { intro: string; secoes: { titulo: string; paragrafos: string[] }[] }> = {
  "quem-deve-usar-aparelhos-auditivos": {
    intro:
      "A perda auditiva costuma ser gradual. Muitas vezes, quem convive com a pessoa percebe antes dela própria. Saber identificar os primeiros sinais é o começo de uma vida com mais qualidade.",
    secoes: [
      {
        titulo: "Quem deve usar aparelhos auditivos?",
        paragrafos: [
          "Todas as pessoas que têm algum grau de perda auditiva e que podem ser reabilitadas com tratamento médico ou cirúrgico, ou ainda por aparelhos auditivos. A indicação é sempre individual e parte de uma avaliação audiológica completa.",
          "O uso precoce de aparelhos auditivos preserva o reconhecimento de fala, reduz o esforço cognitivo no dia a dia e diminui o risco de isolamento social.",
        ],
      },
      {
        titulo: "Sinais que merecem atenção",
        paragrafos: [
          "Dificuldade em entender conversas em grupo, necessidade frequente de aumentar o volume da TV, sensação de que as pessoas estão falando baixo e zumbido constante no ouvido são alguns dos sinais mais comuns.",
          "Ao identificar qualquer um desses sinais, agende uma avaliação audiológica. A consulta na Prazer em Ouvir é gratuita e sem compromisso.",
        ],
      },
    ],
  },
  "historia-dos-aparelhos-auditivos": {
    intro:
      "Dos primeiros instrumentos acústicos do século XVIII aos modernos dispositivos digitais e recarregáveis, a história dos aparelhos auditivos acompanha a evolução da nossa relação com o som.",
    secoes: [
      {
        titulo: "Dos primeiros instrumentos aos dias atuais",
        paragrafos: [
          "Os primeiros aparelhos auditivos surgiram há mais de 100 anos, em formato de cornetas acústicas. Com o passar do tempo, a tecnologia evoluiu para válvulas, transistores e, por fim, circuitos digitais.",
          "Hoje, os aparelhos auditivos modernos são minúsculos, com programas automáticos por ambiente, conexão Bluetooth e bateria recarregável de longa duração.",
        ],
      },
      {
        titulo: "Tecnologia a serviço da qualidade de vida",
        paragrafos: [
          "Mais do que amplificar sons, os aparelhos modernos analisam o ambiente e ajustam o processamento sonoro em tempo real, valorizando a fala e atenuando ruídos.",
          "Na Prazer em Ouvir você encontra modelos das marcas Phonak, Rexton e Signia — tudo com adaptação personalizada e acompanhamento contínuo.",
        ],
      },
    ],
  },
  audicao: {
    intro:
      "A audição é um dos sentidos mais importantes do ser humano. Tem um papel fundamental no desenvolvimento, na comunicação e no nosso bem-estar emocional.",
    secoes: [
      {
        titulo: "Como funciona a nossa audição",
        paragrafos: [
          "O som chega ao ouvido externo, vibra o tímpano, é transmitido pelos ossículos do ouvido médio e convertido em impulsos elétricos pela cóclea, que então são enviados ao cérebro pelo nervo auditivo.",
          "É no cérebro que o som ganha significado: música, palavras, alertas e emoções. Por isso, perder a audição afeta muito mais do que o ouvir — afeta a forma como nos relacionamos com o mundo.",
        ],
      },
      {
        titulo: "Cuidar da audição é cuidar da sua vida",
        paragrafos: [
          "Faça avaliações audiológicas periódicas, evite exposição prolongada a sons muito altos, use protetores auriculares em ambientes ruidosos e busque ajuda profissional aos primeiros sinais de mudança.",
          "Quanto mais cedo o diagnóstico, melhores os resultados da reabilitação auditiva. Agende sua consulta gratuita com a Prazer em Ouvir.",
        ],
      },
    ],
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const conteudo = CONTEUDO[slug];

  const breadcrumb = [
    { name: "Início", href: "/" },
    { name: "Curiosidades", href: "/curiosidades" },
    { name: post.titulo, href: `/curiosidades/${post.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={post.categoria}
        title={post.titulo}
        lead={post.resumo}
        breadcrumb={breadcrumb}
      />

      <article className="section">
        <div className="container-x max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={post.imagem}
              alt={post.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <time dateTime={post.dataISO} className="mt-6 block text-sm text-ink-muted">
            Publicado em {post.data}
          </time>

          <div className="prose-pem mt-6 space-y-6 text-ink-soft leading-relaxed">
            <p className="text-lg">{conteudo.intro}</p>
            {conteudo.secoes.map((s) => (
              <section key={s.titulo}>
                <h2 className="font-serif text-2xl text-ink mt-8 mb-3">{s.titulo}</h2>
                {s.paragrafos.map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-light p-8 text-center">
            <h2 className="h3">Quer cuidar da sua audição?</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Agende uma avaliação audiológica gratuita com a equipe da Prazer em Ouvir.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
            >
              Agendar consulta gratuita
            </a>
          </div>

          <div className="mt-12">
            <Link href="/curiosidades" className="text-sm font-semibold text-brand hover:underline">
              ← Voltar para Curiosidades
            </Link>
          </div>
        </div>
      </article>

      <ArticleJsonLd
        title={post.titulo}
        description={post.resumo}
        image={post.imagem}
        datePublished={post.dataISO}
        slug={post.slug}
      />
      <BreadcrumbJsonLd items={breadcrumb} />
    </>
  );
}
