import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
            <div className="text-center">
                <h1
                    className="text-[#1E3A5F] mb-2"
                    style={{
                        fontFamily: "var(--font-merriweather), serif",
                        fontWeight: 700,
                        fontSize: "4rem",
                    }}
                >
                    404
                </h1>
                <p className="text-[#333333] mb-6" style={{ fontSize: "1.1rem" }}>
                    Página não encontrada
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#1E3A5F]/90 transition-colors"
                    style={{ fontWeight: 600 }}
                >
                    <Home className="w-5 h-5" />
                    Voltar ao Início
                </Link>
            </div>
        </div>
    );
}
