import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  const href = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card hover:bg-[#1ebe5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 2.43 17.5L1 23l5.66-1.48A10 10 0 1 0 19.05 4.91Zm-7.05 16.18a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-3.36.88.9-3.27-.2-.34A8.2 8.2 0 1 1 12 21.09Zm4.7-6.13c-.26-.13-1.52-.75-1.76-.84s-.4-.13-.58.13-.66.84-.8 1.02-.3.19-.55.06a6.7 6.7 0 0 1-1.96-1.21 7.4 7.4 0 0 1-1.36-1.69c-.14-.25 0-.38.11-.51.12-.12.26-.3.39-.45s.17-.25.26-.42a.46.46 0 0 0 0-.45c-.06-.13-.58-1.4-.8-1.91s-.42-.43-.58-.44h-.5a.94.94 0 0 0-.68.32 2.86 2.86 0 0 0-.89 2.12 4.95 4.95 0 0 0 1.04 2.65 11.34 11.34 0 0 0 4.34 3.84c.6.26 1.08.42 1.45.54a3.5 3.5 0 0 0 1.6.1 2.62 2.62 0 0 0 1.72-1.21 2.13 2.13 0 0 0 .15-1.21c-.06-.1-.23-.16-.49-.29Z"/>
      </svg>
    </a>
  );
}
