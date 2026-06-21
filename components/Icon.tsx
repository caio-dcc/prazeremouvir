type IconName = "heart" | "home" | "sliders" | "shield" | "tag" | "card" | "ear" | "check" | "star" | "phone" | "calendar" | "map" | "mail";

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "heart":
      return <svg {...common}><path d="M20.84 4.6a5.5 5.5 0 0 0-7.78 0L12 5.66l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.85a5.5 5.5 0 0 0 0-7.78Z"/></svg>;
    case "home":
      return <svg {...common}><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></svg>;
    case "sliders":
      return <svg {...common}><path d="M4 6h13M4 12h8M4 18h16"/><circle cx="19" cy="6" r="2"/><circle cx="14" cy="12" r="2"/><circle cx="8" cy="18" r="2"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "tag":
      return <svg {...common}><path d="M20 12 12 4H4v8l8 8 8-8Z"/><circle cx="8" cy="8" r="1.5"/></svg>;
    case "card":
      return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>;
    case "ear":
      return <svg {...common}><path d="M8 18c-2-1-3-3-3-6 0-4 3-7 7-7s7 3 7 7-2 5-4 5c-1 0-2-1-2-2v-3"/></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 5 5 9-11"/></svg>;
    case "star":
      return <svg {...common} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .5-5.5 4.5L18 21l-6-3.5L6 21l1.5-7L2 9.5 9 9l3-7Z"/></svg>;
    case "phone":
      return <svg {...common}><path d="M22 16.9V20a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3.1a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.8 2 2 0 0 1-.5 2L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
    case "map":
      return <svg {...common}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "mail":
      return <svg {...common}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
  }
}
