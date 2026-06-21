import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Serviços — Avaliação, adaptação e atendimento domiciliar",
  description:
    "Conheça os serviços da Prazer em Ouvir: avaliação audiológica, adaptação de aparelhos auditivos, atendimento domiciliar, manutenção e acompanhamento contínuo.",
  alternates: { canonical: "/servicos" },
};

const SERVICOS = [
  {
    icon: "ear" as const,
    titulo: "Avaliação audiológica gratuita",
    body: "Avaliação completa com fonoaudiólogo especializado para identificar o seu perfil auditivo. Primeira consulta sem compromisso.",
  },
  {
    icon: "sliders" as const,
    titulo: "Adaptação de aparelhos auditivos",
    body: "Programação e ajuste fino dos aparelhos auditivos para o seu perfil, sua rotina e os ambientes que você frequenta.",
  },
  {
    icon: "home" as const,
    titulo: "Atendimento domiciliar",
    body: "Para pacientes com mobilidade reduzida ou que preferem o conforto do lar, levamos todo o atendimento até você.",
  },
  {
    icon: "shield" as const,
    titulo: "Manutenção e limpeza",
    body: "Limpeza, troca de filtros, baterias e desumidificação para manter seus aparelhos funcionando como no primeiro dia.",
  },
  {
    icon: "heart" as const,
    titulo: "Acompanhamento contínuo",
    body: "Retornos periódicos para reajustes, evolução do paciente e suporte sempre que precisar.",
  },
  {
    icon: "check" as const,
    titulo: "Protetores auriculares sob medida",
    body: "Protetores em silicone antialérgico, feitos sob medida para natação, pós-cirúrgico e proteção profissional.",
  },
];

const breadcrumb = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
];

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Cuidado audiológico completo, do diagnóstico ao acompanhamento."
        lead="Atendemos no consultório da Tijuca ou em domicílio, em todo o Rio de Janeiro. Veja tudo o que oferecemos para você ouvir bem."
        breadcrumb={breadcrumb}
      />

      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((s) => (
            <article key={s.titulo} className="rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Icon name={s.icon} />
              </div>
              <h2 className="h3 mt-5">{s.titulo}</h2>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/img-servicos.jpg"
              alt="Fonoaudióloga adaptando aparelho auditivo em paciente"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
          <div>
            <span className="eyebrow !text-brand">Como funciona</span>
            <h2 className="h2 mt-3 text-white">Um caminho claro e sem pressão</h2>
            <ol className="mt-8 space-y-5">
              {[
                "Você agenda sua consulta gratuita pelo WhatsApp ou telefone.",
                "Realizamos a avaliação audiológica completa, presencial ou em domicílio.",
                "Apresentamos as melhores opções de aparelho para o seu perfil e orçamento.",
                "Você faz o teste presencial e adapta o aparelho com nosso acompanhamento.",
                "Mantemos contato para reajustes, manutenção e suporte sempre que precisar.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-white/80 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-ink hover:bg-white/90"
              >
                Agendar agora
              </a>
              <Link href="/produtos" className="btn border border-white/30 text-white hover:bg-white/10">
                Ver produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbJsonLd items={breadcrumb} />
    </>
  );
}
