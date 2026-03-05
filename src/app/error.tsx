"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
            <div className="text-center">
                <h1
                    className="text-[#1E3A5F] mb-2"
                    style={{
                        fontFamily: "var(--font-merriweather), serif",
                        fontWeight: 700,
                        fontSize: "2rem",
                    }}
                >
                    Algo deu errado
                </h1>
                <p className="text-[#333333] mb-6" style={{ fontSize: "1rem" }}>
                    {error.message || "Ocorreu um erro inesperado."}
                </p>
                <button
                    onClick={() => reset()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#1E3A5F]/90 transition-colors"
                    style={{ fontWeight: 600 }}
                >
                    Tentar Novamente
                </button>
            </div>
        </div>
    );
}
