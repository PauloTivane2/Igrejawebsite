"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Lock,
  Camera,
  Video,
  Calendar,
  HandHeart,
  Megaphone,
  Edit,
  Eye,
  LogOut,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const pedidosOracao = [
  { id: 1, nome: "Maria C.", tipo: "Saúde", data: "02/03/2026", status: "Novo", resumo: "Pedido de cura para o meu filho..." },
  { id: 2, nome: "José M.", tipo: "Família", data: "01/03/2026", status: "Em oração", resumo: "Restauração do meu casamento..." },
  { id: 3, nome: "Ana L.", tipo: "Finanças", data: "28/02/2026", status: "Respondido", resumo: "Provisão para necessidades..." },
  { id: 4, nome: "Carlos N.", tipo: "Saúde", data: "27/02/2026", status: "Novo", resumo: "Cirurgia marcada para próxima semana..." },
  { id: 5, nome: "Beatriz S.", tipo: "Relacionamento", data: "26/02/2026", status: "Em oração", resumo: "Reconciliação familiar..." },
];

const dashboardCards = [
  { icon: Camera, label: "Gerir Fotos", count: "48 fotos", color: "bg-blue-50 text-blue-600" },
  { icon: Video, label: "Gerir Vídeos", count: "12 vídeos", color: "bg-purple-50 text-purple-600" },
  { icon: Calendar, label: "Gerir Agenda", count: "8 eventos", color: "bg-green-50 text-green-600" },
  { icon: HandHeart, label: "Pedidos de Oração", count: "5 novos", color: "bg-orange-50 text-orange-600" },
  { icon: Megaphone, label: "Gerir Avisos", count: "3 activos", color: "bg-red-50 text-red-600" },
  { icon: Edit, label: "Editar Informações", count: "Institucional", color: "bg-teal-50 text-teal-600" },
];

const statusColor: Record<string, string> = {
  Novo: "bg-blue-100 text-blue-700",
  "Em oração": "bg-yellow-100 text-yellow-700",
  Respondido: "bg-green-100 text-green-700",
};

const statusIcon: Record<string, typeof AlertCircle> = {
  Novo: AlertCircle,
  "Em oração": Clock,
  Respondido: CheckCircle,
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-church-neutral px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-church-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-church-primary" />
            </div>
            <h1
              style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "1.5rem", color: "#1E3A5F" }}
            >
              Área Administrativa
            </h1>
            <p className="text-church-text mt-2" style={{ fontSize: "0.9rem" }}>
              Acesso restrito à liderança da I.I.T.E.D
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="admin-email" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                E-mail
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-church-neutral focus:outline-none focus:ring-2 focus:ring-church-secondary/50 transition"
                placeholder="admin@iited.org.mz"
                required
              />
            </div>
            <div>
              <label htmlFor="admin-pass" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                Senha
              </label>
              <input
                id="admin-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-church-neutral focus:outline-none focus:ring-2 focus:ring-church-secondary/50 transition"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-church-primary text-white rounded-lg hover:bg-church-primary/90 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Entrar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-church-neutral min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "1.5rem", color: "#1E3A5F" }}>
              Painel Administrativo
            </h1>
            <p className="text-church-text" style={{ fontSize: "0.9rem" }}>
              Bem-vindo de volta, Administrador
            </p>
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 text-church-text hover:text-red-500 transition-colors border border-gray-200 rounded-lg bg-white"
            style={{ fontSize: "0.875rem" }}
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {dashboardCards.map((c, i) => (
            <motion.div
              key={c.label}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${c.color} flex items-center justify-center`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1E3A5F" }}>{c.label}</p>
                  <p className="text-church-text" style={{ fontSize: "0.8rem" }}>{c.count}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pedidos de Oração */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 style={{ fontWeight: 600, fontSize: "1.1rem", color: "#1E3A5F" }}>
              Pedidos de Oração
            </h2>
            <span className="px-3 py-1 bg-church-primary/10 text-church-primary rounded-full" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
              {pedidosOracao.filter((p) => p.status === "Novo").length} novos
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-church-neutral">
                  <th className="px-5 py-3 text-left text-church-text" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Nome</th>
                  <th className="px-5 py-3 text-left text-church-text" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Tipo</th>
                  <th className="px-5 py-3 text-left text-church-text" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Data</th>
                  <th className="px-5 py-3 text-left text-church-text" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Resumo</th>
                  <th className="px-5 py-3 text-left text-church-text" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Status</th>
                  <th className="px-5 py-3 text-left text-church-text" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Acções</th>
                </tr>
              </thead>
              <tbody>
                {pedidosOracao.map((p) => {
                  const StatusIcon = statusIcon[p.status];
                  return (
                    <tr key={p.id} className="border-t border-gray-50 hover:bg-church-neutral/50">
                      <td className="px-5 py-3" style={{ fontSize: "0.85rem", fontWeight: 500 }}>{p.nome}</td>
                      <td className="px-5 py-3 text-church-text" style={{ fontSize: "0.85rem" }}>{p.tipo}</td>
                      <td className="px-5 py-3 text-church-text" style={{ fontSize: "0.85rem" }}>{p.data}</td>
                      <td className="px-5 py-3 text-church-text max-w-[200px] truncate" style={{ fontSize: "0.85rem" }}>{p.resumo}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${statusColor[p.status]}`} style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                          <StatusIcon className="w-3 h-3" />
                          {p.status}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <button className="text-church-secondary hover:text-church-primary transition-colors" aria-label="Ver detalhes">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
