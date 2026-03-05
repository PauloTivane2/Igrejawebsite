import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "I.I.T.E.D — Tenda do Encontro com Deus",
  description:
    "Igreja Internacional Tenda do Encontro com Deus — Um lugar de fé, esperança e transformação em Moçambique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
