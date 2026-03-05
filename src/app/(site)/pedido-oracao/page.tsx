"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { PageBanner } from "@/components/shared/page-banner";
import { Send, CheckCircle, HandHeart } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
  pedido: string;
  confidencial: boolean;
}

export default function PedidoOracaoPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    setSubmitted(true);
    toast.success("Pedido de oracao enviado com sucesso! A nossa equipa ira orar por si.");
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <PageBanner
        title="Envie o seu Pedido de Oracao"
        subtitle="Estamos aqui para orar por si"
        image="https://images.unsplash.com/photo-1506630391771-a4428d1e6bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHByYXlpbmclMjBsaWdodCUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzI2Mzc5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-church-primary/10 flex items-center justify-center">
                <HandHeart className="w-7 h-7 text-church-primary" />
              </div>
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-church-text italic max-w-xl mx-auto"
              style={{ fontFamily: "Merriweather, serif", lineHeight: 1.8 }}
            >
              "Nao enfrente as suas batalhas sozinho. A nossa equipa de intercessao esta aqui para orar por si."
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 style={{ fontWeight: 600, fontSize: "1.25rem", color: "#1E3A5F" }} className="mb-2">
                Pedido Enviado com Sucesso!
              </h3>
              <p className="text-church-text">
                Recebemos o seu pedido de oracao. A nossa equipa de intercessao ira orar por si com todo o carinho.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-church-neutral rounded-xl p-6 md:p-8 space-y-6"
            >
              <motion.div variants={fadeUp} custom={0}>
                <label htmlFor="nome" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  Nome completo *
                </label>
                <input
                  id="nome"
                  {...register("nome", { required: "Nome e obrigatorio" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                  placeholder="O seu nome completo"
                />
                {errors.nome && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.nome.message}</span>}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} custom={1}>
                  <label htmlFor="email" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: "E-mail e obrigatorio", pattern: { value: /^\S+@\S+$/i, message: "E-mail invalido" } })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                    placeholder="seu@email.com"
                  />
                  {errors.email && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.email.message}</span>}
                </motion.div>
                <motion.div variants={fadeUp} custom={2}>
                  <label htmlFor="telefone" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="telefone"
                    {...register("telefone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                    placeholder="+258 84 000 0000"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={3}>
                <label htmlFor="tipo" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  Tipo de pedido
                </label>
                <select
                  id="tipo"
                  {...register("tipo")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                >
                  <option value="">Seleccione uma categoria</option>
                  <option value="saude">Saude</option>
                  <option value="familia">Familia</option>
                  <option value="financas">Financas</option>
                  <option value="relacionamento">Relacionamento</option>
                  <option value="outro">Outro</option>
                </select>
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <label htmlFor="pedido" className="block mb-1.5 text-church-text" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  O seu pedido de oracao *
                </label>
                <textarea
                  id="pedido"
                  rows={5}
                  {...register("pedido", { required: "Pedido e obrigatorio" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition resize-none"
                  placeholder="Partilhe o seu pedido de oracao..."
                />
                {errors.pedido && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.pedido.message}</span>}
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="flex items-start gap-3">
                <input
                  id="confidencial"
                  type="checkbox"
                  {...register("confidencial")}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-church-primary focus:ring-church-secondary"
                />
                <label htmlFor="confidencial" className="text-church-text" style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                  Desejo que o meu pedido seja confidencial
                </label>
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-church-primary text-white rounded-lg hover:bg-church-primary/90 transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  <Send className="w-5 h-5" />
                  Enviar Pedido
                </button>
              </motion.div>
            </motion.form>
          )}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10 text-church-accent italic"
            style={{ fontFamily: "Merriweather, serif", fontSize: "0.9rem" }}
          >
            "Confessai as vossas ofensas uns aos outros e orai uns pelos outros para serdes curados." — Tiago 5:16
          </motion.p>
        </div>
      </section>
    </div>
  );
}
