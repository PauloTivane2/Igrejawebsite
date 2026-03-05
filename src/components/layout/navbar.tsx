'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Church } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Ministérios", path: "/ministerios" },
  { name: "Agenda", path: "/agenda" },
  { name: "Galeria", path: "/galeria" },
  { name: "Contato", path: "/contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Church className="w-8 h-8 text-church-primary" />
            <div className="flex flex-col">
              <span
                className="text-church-primary tracking-tight"
                style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}
              >
                I.I.T.E.D
              </span>
              <span className="text-[10px] text-church-secondary hidden sm:block" style={{ lineHeight: 1.2 }}>
                Tenda do Encontro com Deus
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === link.path
                    ? "text-church-primary bg-church-primary/10"
                    : "text-church-text hover:text-church-primary hover:bg-church-primary/5"
                }`}
                style={{ fontSize: "0.875rem" }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/pedido-oracao"
              className="ml-2 px-4 py-2 bg-church-accent text-white rounded-md hover:bg-church-accent/90 transition-colors"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              Pedido de Oração
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-church-primary rounded-md hover:bg-church-primary/10"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-3 rounded-md transition-colors ${
                    pathname === link.path
                      ? "text-church-primary bg-church-primary/10"
                      : "text-church-text hover:text-church-primary hover:bg-church-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/pedido-oracao"
                className="block px-4 py-3 mt-2 bg-church-accent text-white rounded-md text-center"
                style={{ fontWeight: 600 }}
              >
                Pedido de Oração
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
