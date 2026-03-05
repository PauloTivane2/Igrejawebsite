import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'I.I.T.E.D - Tenda do Encontro com Deus',
  description: 'Site institucional da Igreja I.I.T.E.D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
