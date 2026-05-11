import Image from "next/image";
import type { Metadata } from "next";
import { MARCAS, PRODUTOS, SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Produtos — Aparelhos auditivos e acessórios",
  description:
    "Aparelhos auditivos das marcas Phonak, Rexton e Signia, baterias Power One, desumidificadores, protetores auriculares e filtros. Confira os produtos da Prazer em Ouvir.",
  alternates: { canonical: "/produtos" },
};

const breadcrumb = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
];

export default function ProdutosPage() {
  const categorias = Array.from(new Set(PRODUTOS.map((p) => p.categoria)));

  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title="Aparelhos auditivos e acessórios para você ouvir bem."
        lead="Trabalhamos com as melhores marcas do mundo e com acessórios que prolongam a vida útil do seu aparelho. Tecnologia, conforto e durabilidade em um só lugar."
        breadcrumb={breadcrumb}
      />

      {/* Marcas */}
      <section className="border-b border-ink/10 bg-surface-soft py-10">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-ink-muted">
            Marcas com quem trabalhamos
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-ink">
            {MARCAS.map((m) => (
              <span key={m} className="font-serif text-2xl">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {categorias.map((cat) => (
        <section key={cat} className="section">
          <div className="container-x">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Categoria</span>
                <h2 className="h2 mt-3">{cat}</h2>
              </div>
            </div>
            <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PRODUTOS.filter((p) => p.categoria === cat).map((p) => (
                <li
                  key={p.slug}
                  id={p.slug}
                  className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:shadow-card scroll-mt-24"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
                    <Image
                      src={p.imagem}
                      alt={`${p.nome}${p.marca ? ` — ${p.marca}` : ""}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {p.marca && (
                      <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                        {p.marca}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="h3">{p.nome}</h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.descricao}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {p.caracteristicas.map((c) => (
                        <li key={c} className="flex gap-2">
                          <Icon name="check" className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
                          <span className="text-ink-soft">{c}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
                        `Olá! Tenho interesse no produto ${p.nome}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 btn-primary w-full"
                    >
                      Tenho interesse
                    </a>
                  </div>
                  <ProductJsonLd
                    name={p.nome}
                    description={p.descricao}
                    image={p.imagem}
                    brand={p.marca}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <BreadcrumbJsonLd items={breadcrumb} />
    </>
  );
}
