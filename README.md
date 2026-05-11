# Prazer em Ouvir — Site institucional

Site institucional do centro auditivo **Prazer em Ouvir** (Tijuca / Rio de Janeiro), construído em **Next.js 16** com App Router, Tailwind CSS e foco em **SEO técnico**.

> Reabilitação auditiva com atendimento humanizado, presencial e domiciliar.

---

## 📐 Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router · Turbopack) |
| UI | React 19 · Tailwind CSS 3.4 |
| Tipagem | TypeScript 5.7 |
| Fontes | `next/font` — Inter + Fraunces |
| Imagens | `next/image` (Unsplash + placeholders) |
| Open Graph | Geração dinâmica via `next/og` (Edge runtime) |
| Deploy sugerido | [Vercel](https://vercel.com) |

---

## 🗂 Estrutura do projeto

```
site/
├── app/
│   ├── layout.tsx                ← Metadata global, JSON-LD Organization, Header/Footer
│   ├── page.tsx                  ← Home (hero, diferenciais, missão, processo, depoimentos, blog, CTA)
│   ├── sobre/page.tsx            ← A Empresa
│   ├── servicos/page.tsx         ← Serviços
│   ├── produtos/page.tsx         ← Catálogo agrupado por categoria
│   ├── curiosidades/
│   │   ├── page.tsx              ← Listagem do blog
│   │   └── [slug]/page.tsx       ← Post (SSG + JSON-LD Article)
│   ├── contato/page.tsx          ← Formulário + mapa
│   ├── sitemap.ts                ← /sitemap.xml dinâmico
│   ├── robots.ts                 ← /robots.txt
│   ├── manifest.ts               ← PWA manifest
│   ├── opengraph-image.tsx       ← OG image dinâmica (1200×630)
│   ├── favicon.svg
│   ├── not-found.tsx             ← Página 404
│   └── globals.css
├── components/
│   ├── Header.tsx                ← Header sticky com nav mobile
│   ├── Footer.tsx                ← Footer + marquee
│   ├── WhatsAppFloat.tsx         ← Botão flutuante de WhatsApp
│   ├── Logo.tsx
│   ├── Icon.tsx                  ← Ícones SVG inline
│   ├── PageHero.tsx              ← Hero reutilizável com breadcrumb
│   ├── Section.tsx               ← SectionHeader reutilizável
│   └── JsonLd.tsx                ← Organization, Breadcrumb, Product, Article, FAQ
├── lib/
│   └── site.ts                   ← Conteúdo (NAV, contatos, produtos, posts, depoimentos)
├── public/                       ← Assets estáticos (adicionar logo e og.jpg)
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Como rodar localmente

Pré-requisitos: **Node.js 20+** e **npm 10+**.

```bash
# instalar dependências
npm install

# iniciar em modo desenvolvimento (http://localhost:3000)
npm run dev

# build de produção
npm run build

# servir o build
npm start

# lint
npm run lint
```

---

## 🔍 SEO implementado

O projeto foi construído com SEO técnico como prioridade. Tudo que está abaixo já está pronto e validado em build.

### 1. Metadata API por rota

Cada página define `title`, `description`, `canonical`, `openGraph` e `twitter` próprios usando `export const metadata`. Templates de título globais (`%s · Prazer em Ouvir`) configurados em [`app/layout.tsx`](app/layout.tsx).

### 2. Dados estruturados (JSON-LD)

| Tipo | Onde |
| --- | --- |
| `MedicalBusiness` + `LocalBusiness` + `HealthAndBeautyBusiness` | Em todas as páginas (via layout) — inclui endereço, geo, horários, telefones, ofertas |
| `BreadcrumbList` | Todas as páginas internas |
| `Product` | Cada produto na página `/produtos` |
| `Article` | Cada post de blog em `/curiosidades/[slug]` |
| `FAQPage` | Home (5 perguntas frequentes) |

Os schemas vivem em [`components/JsonLd.tsx`](components/JsonLd.tsx) e são alimentados pelos dados de [`lib/site.ts`](lib/site.ts).

### 3. Arquivos de descoberta

- **`/sitemap.xml`** gerado por [`app/sitemap.ts`](app/sitemap.ts) com todas as rotas + posts e prioridades.
- **`/robots.txt`** gerado por [`app/robots.ts`](app/robots.ts) referenciando o sitemap.
- **`/manifest.webmanifest`** gerado por [`app/manifest.ts`](app/manifest.ts) para PWA.

### 4. Open Graph dinâmico

[`app/opengraph-image.tsx`](app/opengraph-image.tsx) gera dinamicamente uma imagem 1200×630 no padrão da marca via `next/og` (Edge runtime). Nenhum arquivo estático precisa ser mantido.

### 5. HTML semântico e acessibilidade

- `lang="pt-BR"` no `<html>`
- Hierarquia consistente de headings (um `<h1>` por página)
- `<main>` com skip link “Pular para o conteúdo”
- `<nav aria-label="...">`, `<article>`, `<address>`, `<time dateTime="...">`
- Breadcrumbs visuais sincronizados com JSON-LD `BreadcrumbList`
- Alt text descritivo em todas as imagens
- `prefers-reduced-motion` respeitado

### 6. Performance

- `next/image` com `priority` no LCP e `sizes` corretos
- `next/font` com `display: swap` (sem CLS)
- 14 rotas pré-renderizadas como HTML estático
- `compress: true` e `poweredByHeader: false`

---

## 🎨 Identidade visual

| Token | Valor |
| --- | --- |
| `brand` | `#E30613` (vermelho da marca) |
| `brand-dark` | `#B0040F` |
| `brand-light` | `#FCE6E8` |
| `ink` | `#111827` |
| `surface-soft` | `#F8FAFC` |
| `surface-warm` | `#FFF7F7` |

Tipografia: **Fraunces** (serif, títulos) + **Inter** (sans, corpo).

Todos os tokens vivem em [`tailwind.config.ts`](tailwind.config.ts) e podem ser ajustados em um único lugar.

---

## 📞 Conteúdo da empresa

Todos os dados sensíveis ao negócio ficam centralizados em [`lib/site.ts`](lib/site.ts):

- `SITE` — nome, slogan, descrição, URL, e-mail, telefones, endereço, geo, horários, redes sociais, WhatsApp
- `NAV` — itens do menu
- `DIFERENCIAIS` — 6 cards
- `PROCESSO` — 4 etapas
- `DEPOIMENTOS` — 3 testemunhos
- `PRODUTOS` — 6 produtos com slug, nome, marca, categoria, descrição, características e imagem
- `MARCAS` — Phonak, Rexton, Signia, Power One
- `POSTS` — 3 posts de blog com conteúdo completo em [`app/curiosidades/[slug]/page.tsx`](<app/curiosidades/[slug]/page.tsx>)

> Para adicionar um produto ou post novo, basta inserir um item nessas listas — todas as páginas, sitemap e structured data são atualizadas automaticamente.

---

## 🛠 Personalização rápida

| Quero alterar… | Edite… |
| --- | --- |
| Telefones, endereço, e-mail | `lib/site.ts` → `SITE` |
| Itens do menu | `lib/site.ts` → `NAV` |
| Produtos | `lib/site.ts` → `PRODUTOS` |
| Posts do blog (conteúdo) | `app/curiosidades/[slug]/page.tsx` → `CONTEUDO` |
| Cores da marca | `tailwind.config.ts` → `colors.brand` |
| Domínio canônico / OG | `lib/site.ts` → `SITE.url` |
| Logo e favicon | `app/favicon.svg` e `components/Logo.tsx` |

---

## 🚢 Deploy

### Vercel (recomendado)

1. Conecte o repositório na Vercel.
2. Build command: `next build` (detectado automaticamente).
3. Output: `.next` (gerenciado pela Vercel).
4. Defina o domínio final em `SITE.url` antes do deploy.

### Outras plataformas

Funciona em qualquer host com suporte a Node.js 20+:

```bash
npm run build
npm start
```

---

## ✅ Checklist antes de ir ao ar

- [ ] Atualizar `SITE.url` em `lib/site.ts` com o domínio definitivo
- [ ] Substituir o `favicon.svg` pela versão final do logotipo
- [ ] Adicionar logo PNG em `public/logo.png` (referenciado por JSON-LD)
- [ ] Adicionar imagens reais dos produtos em `public/` ou CDN
- [ ] Configurar `verification.google` em `app/layout.tsx` com o código do Search Console
- [ ] Conectar o formulário de contato a um serviço (Resend, Formspree, etc.)
- [ ] Validar JSON-LD em [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Validar acessibilidade com Lighthouse

---

## 📄 Licença

Projeto proprietário — © Prazer em Ouvir / desenvolvido por Caio Marques.
