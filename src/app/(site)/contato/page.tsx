"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { PageBanner } from "@/components/shared/PageBanner";
import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Instagram, Youtube, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const contatoInfo = [
  { icon: MapPin, label: "Endereco", value: "Av. Julius Nyerere, 1250 — Sommerschield, Maputo", color: "bg-blue-50 text-blue-600" },
  { icon: Phone, label: "Telefone", value: "+258 21 491 000", color: "bg-green-50 text-green-600" },
  { icon: MessageCircle, label: "WhatsApp", value: "+258 84 123 4567", color: "bg-emerald-50 text-emerald-600" },
  { icon: Mail, label: "E-mail", value: "contato@iited.org.mz", color: "bg-purple-50 text-purple-600" },
  { icon: Clock, label: "Horario", value: "Seg a Sex — 08:00 as 17:00", color: "bg-orange-50 text-orange-600" },
];

interface FormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    setSubmitted(true);
    toast.success("Mensagem enviada com sucesso!");
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <PageBanner
        title="Entre em Contacto"
        subtitle="Estamos prontos para ajuda-lo"
        image="https://images.unsplash.com/photo-1709541658608-dfe38af68925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHN0YWluZWQlMjBnbGFzc3xlbnwxfHx8fDE3NzI2Mzc5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Info Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {contatoInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-5 rounded-xl bg-church-neutral border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full ${c.color} flex items-center justify-center mx-auto mb-3`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "#1E3A5F" }} className="mb-1">{c.label}</p>
                <p className="text-church-text" style={{ fontSize: "0.8rem" }}>{c.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <div className="text-center mb-16">
            <h3
              className="mb-4"
              style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1.25rem", color: "#1E3A5F" }}
            >
              Redes Sociais
            </h3>
            <div className="flex justify-center gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-church-primary text-white flex items-center justify-center hover:bg-church-secondary transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-xl overflow-hidden shadow-lg h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2!2d32.5732!3d-25.9692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzA5LjEiUyAzMsKwMzQnMjMuNSJF!5e0!3m2!1spt-BR!2smz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizacao da I.I.T.E.D — Maputo, Mocambique"
              />
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h3
                variants={fadeUp}
                custom={0}
                className="mb-6"
                style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "1.25rem", color: "#1E3A5F" }}
              >
                Envie uma Mensagem
              </motion.h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p style={{ fontWeight: 600, color: "#1E3A5F" }}>Mensagem enviada!</p>
                  <p className="text-church-text mt-1" style={{ fontSize: "0.9rem" }}>
                    Entraremos em contacto em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <motion.div variants={fadeUp} custom={1}>
                    <input
                      {...register("nome", { required: "Nome e obrigatorio" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-church-neutral focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                      placeholder="O seu nome"
                    />
                    {errors.nome && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.nome.message}</span>}
                  </motion.div>
                  <motion.div variants={fadeUp} custom={2}>
                    <input
                      type="email"
                      {...register("email", { required: "E-mail e obrigatorio" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-church-neutral focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                      placeholder="O seu e-mail"
                    />
                    {errors.email && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.email.message}</span>}
                  </motion.div>
                  <motion.div variants={fadeUp} custom={3}>
                    <input
                      {...register("assunto", { required: "Assunto e obrigatorio" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-church-neutral focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition"
                      placeholder="Assunto"
                    />
                    {errors.assunto && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.assunto.message}</span>}
                  </motion.div>
                  <motion.div variants={fadeUp} custom={4}>
                    <textarea
                      rows={5}
                      {...register("mensagem", { required: "Mensagem e obrigatoria" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-church-neutral focus:outline-none focus:ring-2 focus:ring-church-secondary/50 focus:border-church-secondary transition resize-none"
                      placeholder="A sua mensagem"
                    />
                    {errors.mensagem && <span className="text-red-500 mt-1 block" style={{ fontSize: "0.8rem" }}>{errors.mensagem.message}</span>}
                  </motion.div>
                  <motion.div variants={fadeUp} custom={5}>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-church-primary text-white rounded-lg hover:bg-church-primary/90 transition-colors"
                      style={{ fontWeight: 600 }}
                    >
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
