"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`;

  return (
    <>
      <div className="bg-brand text-white text-xs">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium hover:underline"
          >
            <span aria-hidden>📞</span> WhatsApp: {SITE.phones[0].number}
          </a>
          <a href={`mailto:${SITE.email}`} className="hidden sm:inline hover:underline">
            {SITE.email}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="Página inicial">
            <Logo />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-ink-soft">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-5 text-xs">
              Agende consulta grátis
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav aria-label="Navegação mobile" className="lg:hidden border-t border-ink/5">
            <ul className="container-x py-4 space-y-2 text-sm font-medium">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-xs">
                  Agende consulta grátis
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
