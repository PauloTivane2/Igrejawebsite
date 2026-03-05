'use client';

import Link from "next/link";
import { Church, Facebook, Instagram, Youtube, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-church-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="w-7 h-7 text-church-accent" />
              <span
                className="text-white"
                style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1.1rem" }}
              >
                I.I.T.E.D
              </span>
            </div>
            <p className="text-gray-400 mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              Igreja Internacional Tenda do Encontro com Deus — Um lugar de fé,
              esperança e transformação em Moçambique.
            </p>
            <p
              className="text-church-accent/80 italic"
              style={{ fontFamily: "Merriweather, serif", fontSize: "0.8rem" }}
            >
              "O Senhor é o meu pastor; nada me faltará."
              <br />— Salmo 23:1
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1rem" }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Início", path: "/" },
                { name: "Quem Somos", path: "/quem-somos" },
                { name: "Agenda", path: "/agenda" },
                { name: "Galeria", path: "/galeria" },
                { name: "Pedido de Oração", path: "/pedido-oracao" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-church-accent transition-colors"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministérios */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1rem" }}
            >
              Ministérios
            </h4>
            <ul className="space-y-2">
              {[
                "Louvor e Adoração",
                "Tenda Kids",
                "Geração Ativa",
                "Intercessão",
                "Casais",
                "Evangelismo",
              ].map((m) => (
                <li key={m}>
                  <Link
                    href="/ministerios"
                    className="text-gray-400 hover:text-church-accent transition-colors"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {m}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1rem" }}
            >
              Contato
            </h4>
            <ul className="space-y-3 text-gray-400" style={{ fontSize: "0.875rem" }}>
              <li>Av. Julius Nyerere, 1250 — Sommerschield, Maputo</li>
              <li>Tel: +258 21 491 000</li>
              <li>contato@iited.org.mz</li>
              <li>Seg a Sex — 08:00 às 17:00</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/258841234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-accent transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500" style={{ fontSize: "0.8rem" }}>
            &copy; 2025 I.I.T.E.D — Igreja Internacional Tenda do Encontro com Deus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}