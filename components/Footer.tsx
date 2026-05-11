import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="bg-brand">
        <div className="marquee py-3 text-sm font-semibold tracking-widest">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="px-8">
                ✦ OUVIR BEM É VIVER MELHOR ✦ ATENDIMENTO HUMANIZADO ✦ TIJUCA — RIO DE JANEIRO
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-white" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Centro auditivo na Tijuca. Atendimento humanizado, presencial e domiciliar, com as melhores marcas
            de aparelhos auditivos do mercado.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Prazer em Ouvir"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-brand hover:text-brand"
            >
              <span aria-hidden>f</span>
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Prazer em Ouvir"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-brand hover:text-brand"
            >
              <span aria-hidden>◎</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/90">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-brand">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/90">Fale conosco</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SITE.phones.map((p) => (
              <li key={p.number}>
                <a href={p.href} className="hover:text-brand">
                  {p.label}: {p.number}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brand">{SITE.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/90">Visite-nos</h3>
          <address className="mt-4 not-italic text-sm text-white/70 leading-relaxed">
            {SITE.address.street}<br />
            {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}<br />
            {SITE.address.complement}
          </address>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/90">Horário</h3>
          <ul className="mt-3 text-sm text-white/70 space-y-1">
            {SITE.hours.map((h) => (
              <li key={h.day}>
                <span className="text-white/90">{h.day}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {SITE.legalName}. Todos os direitos reservados.</span>
          <span>CNPJ disponível mediante solicitação · Tijuca, Rio de Janeiro</span>
        </div>
      </div>
    </footer>
  );
}
