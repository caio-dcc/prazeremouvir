import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2 mt-3">{title}</h2>
      {lead && <p className="lead mt-4">{lead}</p>}
    </div>
  );
}
