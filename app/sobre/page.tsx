import Image from "next/image";
import type { Metadata } from "next";
import { DIFERENCIAIS, SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "A Empresa — Centro Auditivo na Tijuca",
  description:
    "Conheça a Prazer em Ouvir: centro auditivo no coração da Tijuca, Rio de Janeiro. Atendimento humanizado, missão, valores e diferenciais.",
  alternates: { canonical: "/sobre" },
};

const breadcrumb = [
  { name: "Início", href: "/" },
  { name: "A Empresa", href: "/sobre" },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="A Empresa"
        title="Mais que um nome, um compromisso com a sua audição."
        lead="Há mais de 15 anos no coração da Tijuca, ajudando pessoas a recuperarem os sons que amam — com tecnologia, escuta atenta e cuidado humano."
        breadcrumb={breadcrumb}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe da Prazer em Ouvir em atendimento"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
          <div>
            <span className="eyebrow">Nossa história</span>
            <h2 className="h2 mt-3">Audição é qualidade de vida</h2>
            <div className="lead mt-5 space-y-4">
              <p>
                Nosso objetivo é que você recupere os sons saudáveis e o prazer do convívio com quem você ama.
                Oferecemos atendimento humanizado e também domiciliar, pensando em pacientes com limitações
                ou que preferem o conforto do lar.
              </p>
              <p>
                Trabalhamos com as melhores marcas do mercado e oferecemos diversas formas de pagamento.
                Saiba que a perda auditiva é um processo progressivo — por isso a avaliação precoce faz tanta
                diferença. A consulta é gratuita e sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-soft">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-card">
            <span className="eyebrow">Missão</span>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">
              “Proporcionar o Prazer em Ouvir os sons que você ama, melhorando sua qualidade de vida através
              da reabilitação auditiva.”
            </p>
          </div>
          <div className="rounded-3xl bg-white p-10 shadow-card">
            <span className="eyebrow">Valores</span>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              {[
                "Respeito e empatia em cada atendimento",
                "Tecnologia auditiva de ponta",
                "Acompanhamento contínuo do paciente",
                "Transparência em preço e processo",
                "Compromisso com qualidade de vida",
              ].map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="h2 mt-3 max-w-2xl">Por que pacientes do Rio escolhem a Prazer em Ouvir</h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFERENCIAIS.map((d) => (
              <li key={d.title} className="rounded-2xl border border-ink/10 p-6">
                <Icon name={d.icon as never} className="h-8 w-8 text-brand" />
                <h3 className="h3 mt-4">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BreadcrumbJsonLd items={breadcrumb} />
    </>
  );
}
