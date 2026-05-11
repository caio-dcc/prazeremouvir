import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Curiosidades — Blog sobre audição e aparelhos auditivos",
  description:
    "Artigos sobre audição, perda auditiva, aparelhos auditivos e qualidade de vida. Conteúdo informativo da Prazer em Ouvir.",
  alternates: { canonical: "/curiosidades" },
};

const breadcrumb = [
  { name: "Início", href: "/" },
  { name: "Curiosidades", href: "/curiosidades" },
];

export default function CuriosidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Curiosidades"
        title="Conteúdo para você cuidar bem da sua audição."
        lead="Dicas, curiosidades e informações relevantes sobre audição, aparelhos auditivos e qualidade de vida."
        breadcrumb={breadcrumb}
      />

      <section className="section">
        <div className="container-x">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/curiosidades/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.imagem}
                      alt={post.titulo}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                      {post.categoria}
                    </span>
                    <h2 className="h3 mt-2 group-hover:text-brand">{post.titulo}</h2>
                    <p className="mt-2 text-sm text-ink-soft line-clamp-3">{post.resumo}</p>
                    <time dateTime={post.dataISO} className="mt-4 block text-xs text-ink-muted">
                      {post.data}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BreadcrumbJsonLd items={breadcrumb} />
    </>
  );
}
