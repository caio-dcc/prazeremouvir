import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contato — Fale com a Prazer em Ouvir",
  description:
    "Fale com a Prazer em Ouvir: WhatsApp, telefone e e-mail. Estamos na Tijuca, próximo ao metrô Saens Peña. Atendemos também em domicílio.",
  alternates: { canonical: "/contato" },
};

const breadcrumb = [
  { name: "Início", href: "/" },
  { name: "Contato", href: "/contato" },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre a sua audição."
        lead="Estamos prontos para agendar sua consulta gratuita. Atendemos no consultório da Tijuca e também em domicílio."
        breadcrumb={breadcrumb}
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info cards */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-ink/10 p-6">
              <div className="flex items-center gap-3">
                <Icon name="phone" className="h-6 w-6 text-brand" />
                <h2 className="h3">Telefones</h2>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {SITE.phones.map((p) => (
                  <li key={p.number}>
                    <a href={p.href} className="hover:text-brand">
                      <strong className="text-ink">{p.label}:</strong> {p.number}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-5 w-full"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-ink/10 p-6">
              <div className="flex items-center gap-3">
                <Icon name="map" className="h-6 w-6 text-brand" />
                <h2 className="h3">Endereço</h2>
              </div>
              <address className="mt-4 not-italic text-sm text-ink-soft leading-relaxed">
                {SITE.address.street}<br />
                {SITE.address.complement}<br />
                {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Conde+de+Bonfim+229+Tijuca+Rio+de+Janeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-5 w-full"
              >
                Ver no Google Maps
              </a>
            </div>

            <div className="rounded-2xl border border-ink/10 p-6">
              <div className="flex items-center gap-3">
                <Icon name="calendar" className="h-6 w-6 text-brand" />
                <h2 className="h3">Horário de atendimento</h2>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                {SITE.hours.map((h) => (
                  <li key={h.day}>
                    <strong className="text-ink">{h.day}:</strong> {h.time}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-muted">
                E-mail: <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">{SITE.email}</a>
              </p>
            </div>
          </div>

          {/* Form + map */}
          <div className="space-y-8">
            <form
              action={`mailto:${SITE.email}`}
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-ink/10 bg-white p-8 shadow-card"
            >
              <h2 className="h3">Envie sua mensagem</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Ao preencher os campos abaixo e enviar, seu aplicativo de e-mail padrão será aberto para concluir o envio. Para um atendimento mais ágil, prefira nos chamar no WhatsApp.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Nome</span>
                  <input
                    name="nome"
                    type="text"
                    required
                    placeholder="Ex: Maria da Silva"
                    className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Telefone</span>
                  <input
                    name="telefone"
                    type="tel"
                    required
                    placeholder="(21) 90000-0000"
                    className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">E-mail</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Mensagem</span>
                  <textarea
                    name="mensagem"
                    rows={5}
                    required
                    placeholder="Escreva sua dúvida, solicitação ou mensagem aqui..."
                    className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                  />
                </label>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Enviar mensagem
              </button>
              <p className="mt-3 text-xs text-ink-muted">
                Ao enviar você concorda em ser contatado pela equipe da Prazer em Ouvir.
              </p>
            </form>


          </div>
        </div>
      </section>

      <BreadcrumbJsonLd items={breadcrumb} />
    </>
  );
}
