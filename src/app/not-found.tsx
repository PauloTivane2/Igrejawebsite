import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-church-neutral px-4">
      <div className="text-center">
        <h1
          className="text-church-primary mb-2"
          style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "4rem" }}
        >
          404
        </h1>
        <p className="text-church-text mb-6" style={{ fontSize: "1.1rem" }}>
          Página não encontrada
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-church-primary text-white rounded-lg hover:bg-church-primary/90 transition-colors"
          style={{ fontWeight: 600 }}
        >
          <Home className="w-5 h-5" />
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
