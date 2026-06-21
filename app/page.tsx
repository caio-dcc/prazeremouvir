import Image from "next/image";
import Link from "next/link";
import { DEPOIMENTOS, DIFERENCIAIS, MARCAS, PROCESSO, PRODUTOS, SITE } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/Section";
import { FaqJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE.name} — Aparelhos auditivos na Tijuca, Rio de Janeiro`,
  description:
    "Centro auditivo na Tijuca (RJ). Aparelhos auditivos Phonak, Rexton e Signia, atendimento humanizado e domiciliar, adaptação personalizada e consulta gratuita.",
  alternates: { canonical: "/" },
};

const FAQS = [
  {
    q: "A consulta de avaliação auditiva é mesmo gratuita?",
    a: "Sim. A primeira avaliação com o fonoaudiólogo é totalmente gratuita e sem compromisso. Você descobre como anda a sua audição e recebe orientações personalizadas.",
  },
  {
    q: "Vocês fazem atendimento em casa?",
    a: "Sim. Para pacientes com mobilidade reduzida ou que preferem o conforto do lar, levamos a avaliação, adaptação e manutenção dos aparelhos auditivos até a sua residência.",
  },
  {
    q: "Quais marcas de aparelhos auditivos vocês trabalham?",
    a: "Trabalhamos com as principais marcas do mercado: Phonak, Rexton e Signia, além de acessórios Power One e linha própria.",
  },
  {
    q: "Existem aparelhos auditivos recarregáveis?",
    a: "Sim. Oferecemos modelos recarregáveis com bateria de longa duração, que dispensam a troca de pilhas e tornam o uso diário muito mais prático.",
  },
  {
    q: "Em quantas vezes posso parcelar?",
    a: "Oferecemos diversas formas de pagamento e parcelamento no cartão, com condições especiais para que o investimento caiba no seu orçamento.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <Image
            src="/images/img-hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container-x grid gap-10 py-20 lg:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <Icon name="ear" className="h-4 w-4" /> Centro Auditivo · Tijuca / RJ
            </span>
            <h1 className="h1 mt-5 max-w-2xl">
              Prazer em <span className="italic">Ouvir</span> os sons que você ama.
            </h1>
            <p className="lead mt-5 max-w-xl text-white/90">
              Reabilitação auditiva com atendimento humanizado, presencial e domiciliar.
              Aparelhos auditivos das melhores marcas, adaptação personalizada e consulta gratuita.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-brand hover:bg-white/90"
              >
                <Icon name="calendar" className="h-4 w-4" /> Agende sua consulta grátis
              </a>
              <a href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="btn border border-white/40 text-white hover:bg-white/10">
                Falar com especialista
              </a>
              <Link href="/contato" className="btn bg-white text-brand hover:bg-white/90">
                <Icon name="mail" className="h-4 w-4" /> Enviar E-mail de Contato
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-sm">
              {[
                { k: "+15 anos", v: "de experiência" },
                { k: "4 marcas", v: "premium" },
                { k: "100%", v: "humanizado" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur">
                  <dt className="font-serif text-2xl">{s.k}</dt>
                  <dd className="text-white/80 text-xs">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/pessoa-feliz.png"
                alt="Fonoaudióloga atendendo paciente em consulta auditiva"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-2xl bg-white p-4 text-ink shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Icon name="heart" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-muted">Consulta gratuita</p>
                  <p className="text-sm font-semibold">Sem compromisso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Nossos diferenciais"
            title={<>Cuidado audiológico do jeito que <span className="text-brand">você merece</span></>}
            lead="Há mais de 15 anos no coração da Tijuca, oferecendo soluções auditivas com tecnologia, escuta atenta e acompanhamento contínuo."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFERENCIAIS.map((d) => (
              <li key={d.title} className="group rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon name={d.icon as never} />
                </div>
                <h3 className="h3 mt-5">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOBRE / MISSÃO */}
      <section className="section bg-surface-soft">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/img-sobre-home.jpg"
                alt="Espaço de atendimento da Prazer em Ouvir na Tijuca"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden sm:flex h-28 w-28 items-center justify-center rounded-full bg-brand text-white text-center font-serif text-sm leading-tight shadow-card">
              + de 15<br />anos de<br />cuidado
            </div>
          </div>
          <div>
            <span className="eyebrow">A empresa</span>
            <h2 className="h2 mt-3">Prazer em Ouvir é mais que um nome — é o nosso compromisso.</h2>
            <p className="lead mt-5">
              Nosso objetivo é que você recupere os sons saudáveis e o prazer do convívio social que a vida lhe deve.
              Atendemos pacientes com e sem limitações, em consultório ou no conforto do lar.
            </p>
            <div className="mt-8 rounded-2xl border-l-4 border-brand bg-white p-6 shadow-card">
              <span className="eyebrow">Nossa missão</span>
              <p className="mt-2 font-serif text-xl text-ink">
                “Proporcionar o Prazer em Ouvir os sons que você ama, melhorando sua qualidade de vida através
                da reabilitação auditiva.”
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar avaliação</a>
              <Link href="/contato" className="btn-outline">Ver localização</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Processo de adaptação"
            title="Quatro passos para você ouvir bem de novo"
            lead="Um caminho leve, claro e sem pressão — do primeiro sinal até a adaptação completa do seu aparelho."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESSO.map((p) => (
              <li key={p.step} className="relative rounded-2xl border border-ink/10 bg-white p-6">
                <span className="font-serif text-5xl text-brand-light">{p.step}</span>
                <h3 className="h3 mt-2">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar consulta gratuita
            </a>
          </div>
        </div>
      </section>

      {/* APARELHOS / PRODUTOS DESTAQUE */}
      <section className="section bg-ink text-white">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow !text-brand">Aparelhos & acessórios</span>
              <h2 className="h2 mt-3 text-white">Tecnologia auditiva para cada estilo de vida</h2>
              <p className="lead mt-4 text-white/70">
                Modelos recarregáveis, discretos e com ajuste automático aos ambientes. Trabalhamos com as
                marcas mais respeitadas do mundo.
              </p>
            </div>
            <a href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="btn border border-white/30 text-white hover:bg-white hover:text-ink">
              Consultar modelos disponíveis
            </a>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUTOS.slice(0, 3).map((p) => (
              <li key={p.slug} className="group overflow-hidden rounded-2xl bg-white text-ink">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
                  <Image
                    src={p.imagem}
                    alt={`${p.nome}${p.marca ? ` — ${p.marca}` : ""}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {p.marca && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                      {p.marca}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand">{p.categoria}</span>
                  <h3 className="h3 mt-2">{p.nome}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">{p.descricao}</p>
                  <a href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">
                    Consultar preço →
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* Marcas */}
          <div className="mt-16 rounded-2xl border border-white/10 px-8 py-8">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50">Marcas com quem trabalhamos</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white/80">
              {MARCAS.map((m) => (
                <span key={m} className="font-serif text-2xl tracking-wide">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section bg-surface-warm">
        <div className="container-x">
          <SectionHeader
            eyebrow="Depoimentos"
            title="Histórias de quem voltou a ouvir bem"
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d) => (
              <li key={d.autor} className="relative rounded-2xl bg-white p-7 shadow-card">
                <span className="absolute -top-4 left-6 font-serif text-6xl leading-none text-brand">“</span>
                <div className="mt-4 flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                </div>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">{d.texto}</p>
                <p className="mt-5 text-sm font-semibold">{d.autor}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* CTA FINAL */}
      <section className="bg-brand text-white">
        <div className="container-x py-16 lg:py-20 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <h2 className="h2 text-white">Vamos cuidar da sua audição juntos?</h2>
            <p className="lead mt-4 text-white/90">
              Agende uma consulta sem compromisso. Atendemos na Tijuca e em domicílio em todo o Rio de Janeiro.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <a
              href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-brand hover:bg-white/90"
            >
              <Icon name="phone" className="h-4 w-4" /> WhatsApp · {SITE.phones[0].number}
            </a>
            <Link href="/contato" className="btn border border-white/40 text-white hover:bg-white/10">
              Formulário de contato
            </Link>
          </div>
        </div>
      </section>

      <FaqJsonLd faqs={FAQS} />
    </>
  );
}
