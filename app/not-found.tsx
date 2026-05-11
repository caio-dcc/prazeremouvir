import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center max-w-xl mx-auto">
        <span className="eyebrow">404</span>
        <h1 className="h1 mt-3">Página não encontrada</h1>
        <p className="lead mt-4">A página que você procura não existe ou foi movida.</p>
        <Link href="/" className="btn-primary mt-8">Voltar para a página inicial</Link>
      </div>
    </section>
  );
}
