import Link from "next/link";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumb?: { name: string; href: string }[];
}) {
  return (
    <section className="bg-gradient-to-br from-brand to-brand-dark text-white">
      <div className="container-x py-16 lg:py-24">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-white">{b.name}</span>
                  ) : (
                    <Link href={b.href} className="hover:text-white">{b.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">{eyebrow}</span>}
        <h1 className="h1 mt-4 max-w-3xl">{title}</h1>
        {lead && <p className="lead mt-5 max-w-2xl text-white/90">{lead}</p>}
      </div>
    </section>
  );
}
