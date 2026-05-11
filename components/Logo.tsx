export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-serif text-xl font-semibold tracking-tight ${className}`}
      aria-label="Prazer em Ouvir"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
        <path
          d="M11 21c-2-1-3-3-3-6 0-4 3-7 7-7s7 3 7 7-2 5-4 5c-1 0-2-1-2-2v-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="leading-none">
        Prazer em <span className="text-brand">Ouvir</span>
      </span>
    </span>
  );
}
