"use client";

import { motion } from "motion/react";
import { PageBanner } from "@/components/shared/page-banner";
import { Calendar, Clock, Star, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const cultosRegulares = [
  { day: "Domingo", time: "09:00", name: "Culto da Manha (Escola Dominical)", color: "bg-blue-50 border-blue-200" },
  { day: "Domingo", time: "17:00", name: "Culto da Tarde (Celebracao)", color: "bg-purple-50 border-purple-200" },
  { day: "Quarta-feira", time: "18:30", name: "Culto de Ensino e Oracao", color: "bg-green-50 border-green-200" },
  { day: "Sexta-feira", time: "18:30", name: "Culto de Jovens", color: "bg-orange-50 border-orange-200" },
];

const eventosEspeciais = [
  { name: "Congresso de Adoracao 2026", date: "15-17 de Maio", desc: "Tres dias de adoracao intensa e ministracao da Palavra." },
  { name: "Vigilia de Oracao", date: "Ultima sexta de cada mes", desc: "Uma noite inteira de busca pela presenca de Deus." },
  { name: "Semana de Jejum e Oracao", date: "1-7 de Junho", desc: "Sete dias de consagracao e intercessao pela igreja e nacoes." },
  { name: "Aniversario da Igreja", date: "12 de Agosto", desc: "Celebracao especial com convidados e programacao festiva." },
  { name: "Retiro de Casais", date: "20-22 de Setembro", desc: "Fim-de-semana de fortalecimento e renovacao para casais." },
  { name: "Conferencia de Jovens", date: "10-12 de Outubro", desc: "Impactando a nova geracao com a Palavra de Deus." },
];

export default function AgendaPage() {
  return (
    <div>
      <PageBanner
        title="Cultos e Agenda"
        subtitle="Venha participar dos nossos cultos e eventos"
        image="https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGUlMjBzdHVkeSUyMGRldm90aW9uYWx8ZW58MXx8fHwxNzcyNjM3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Cultos Regulares */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
            style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1E3A5F" }}
          >
            Cultos Regulares
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cultosRegulares.map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`p-6 rounded-xl border ${c.color} hover:shadow-md transition-shadow`}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1.05rem", color: "#1E3A5F" }} className="mb-3">
                  {c.name}
                </h3>
                <div className="flex items-center gap-4 text-church-text" style={{ fontSize: "0.9rem" }}>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-church-accent" />
                    {c.day}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-church-accent" />
                    {c.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Especiais */}
      <section className="py-16 lg:py-24 bg-church-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
            style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1E3A5F" }}
          >
            Eventos Especiais
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosEspeciais.map((e, i) => (
              <motion.div
                key={e.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative"
              >
                <span className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-church-accent/10 text-church-accent rounded-full" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                  <Star className="w-3 h-3" /> Especial
                </span>
                <h3 style={{ fontWeight: 600, fontSize: "1.05rem", color: "#1E3A5F" }} className="mb-2 pr-20">
                  {e.name}
                </h3>
                <p className="flex items-center gap-1.5 text-church-secondary mb-3" style={{ fontSize: "0.85rem" }}>
                  <Calendar className="w-4 h-4" />
                  {e.date}
                </p>
                <p className="text-church-text" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {e.desc}
                </p>
                <button
                  className="mt-4 inline-flex items-center gap-1 text-church-secondary hover:text-church-primary transition-colors"
                  style={{ fontSize: "0.8rem", fontWeight: 600 }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Adicionar ao Google Calendar
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
