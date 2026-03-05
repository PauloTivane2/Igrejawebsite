import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "sonner";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-merriweather",
});

export const metadata: Metadata = {
    title: {
        default: "I.I.T.E.D — Igreja Internacional Tenda do Encontro com Deus",
        template: "%s | I.I.T.E.D",
    },
    description:
        "Site oficial da Igreja Internacional Tenda do Encontro com Deus — Um lugar de fé, esperança e transformação em Moçambique.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
                <Providers>
                    {children}
                    <Toaster position="top-right" richColors />
                </Providers>
            </body>
        </html>
    );
}
