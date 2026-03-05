"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
    Heart,
    Sparkles,
    Star,
    Music,
    Users,
    BookOpen,
    HandHeart,
    Calendar,
    MapPin,
    Facebook,
    Instagram,
    Youtube,
    Phone,
    ArrowRight,
    Clock,
} from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwd29yc2hpcCUyMGNvbmdyZWdhdGlvbnxlbnwxfHx8fDE3NzI2MzkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const PRAYING_IMG = "https://images.unsplash.com/photo-1506630391771-a4428d1e6bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHByYXlpbmclMjBsaWdodCUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzI2Mzc5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CHOIR_IMG = "https://images.unsplash.com/photo-1709054754811-6c8d2d1ab015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHdvcnNoaXAlMjBzaW5naW5nfGVufDF8fHx8MTc3MjYzNzkzMnww&ixlib=rb-4.1.0&q=80&w=1080";
const YOUTH_IMG = "https://images.unsplash.com/photo-1738744655193-706236bd4480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hyaXN0aWFuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc3MjYzOTAzMXww&ixlib=rb-4.1.0&q=80&w=1080";
const COMMUNITY_IMG = "https://images.unsplash.com/photo-1624500055301-c62a900632f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nJTIwY2h1cmNofGVufDF8fHx8MTc3MjYzOTAzMHww&ixlib=rb-4.1.0&q=80&w=1080";
const FAMILY_IMG = "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwcHJheWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjYzOTAzNHww&ixlib=rb-4.1.0&q=80&w=1080";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const pillars = [
    { icon: Heart, title: "Fé", desc: "Cremos no poder transformador da Palavra de Deus e na obra redentora de Jesus Cristo para cada vida." },
    { icon: Sparkles, title: "Esperança", desc: "Cultivamos a esperança que nos sustenta em todas as estações, olhando para o futuro com confiança." },
    { icon: Star, title: "Amor", desc: "Praticamos o amor ao próximo como base de tudo o que somos e fazemos enquanto comunidade." },
];

const cultos = [
    { day: "Domingo", time: "09:00", name: "Escola Dominical", icon: BookOpen },
    { day: "Quarta-feira", time: "18:30", name: "Culto de Ensino e Oração", icon: HandHeart },
    { day: "Sexta-feira", time: "18:30", name: "Culto de Jovens", icon: Users },
];

const ministerios = [
    { icon: Music, name: "Louvor e Adoração", desc: "A nossa equipa de músicos conduz a igreja na presença de Deus." },
    { icon: Users, name: "Geração Activa", desc: "Actividades e discipulado para os nossos jovens." },
    { icon: BookOpen, name: "Tenda Kids", desc: "Cuidado e ensino bíblico para as crianças." },
    { icon: HandHeart, name: "Acção Social", desc: "Apoio à comunidade local e famílias necessitadas." },
];

const galleryImages = [HERO_IMG, PRAYING_IMG, CHOIR_IMG, YOUTH_IMG, COMMUNITY_IMG, FAMILY_IMG];

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <Image
                    src={HERO_IMG}
                    alt="Congregação em momento de adoração"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl"
                    >
                        <motion.h1
                            variants={fadeUp}
                            custom={0}
                            className="text-white mb-4"
                            style={{
                                fontFamily: "var(--font-merriweather), serif",
                                fontWeight: 700,
                                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                                lineHeight: 1.2,
                            }}
                        >
                            Bem-vindo à Tenda do Encontro com Deus
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="text-white/90 mb-4"
                            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                        >
                            Um lugar de fé, esperança e transformação em Moçambique
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="text-church-accent/90 italic mb-8"
                            style={{ fontFamily: "var(--font-merriweather), serif", fontSize: "0.95rem" }}
                        >
                            &quot;Porque onde estiverem dois ou três reunidos em meu nome, ali estou no
                            meio deles.&quot; — Mateus 18:20
                        </motion.p>
                        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                            <Link
                                href="/quem-somos"
                                className="px-6 py-3 bg-church-accent text-white rounded-lg hover:bg-church-accent/90 transition-colors inline-flex items-center gap-2"
                                style={{ fontWeight: 600 }}
                            >
                                Saiba Mais <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/agenda"
                                className="px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-colors"
                                style={{ fontWeight: 600 }}
                            >
                                Próximos Eventos
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                        <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-church-primary/10 flex items-center justify-center">
                                <Heart className="w-8 h-8 text-church-primary" />
                            </div>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            style={{
                                fontFamily: "var(--font-merriweather), serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                color: "#1E3A5F",
                            }}
                            className="mb-4"
                        >
                            Seja muito bem-vindo!
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="max-w-2xl mx-auto text-church-text mb-12"
                            style={{ fontSize: "1rem", lineHeight: 1.8 }}
                        >
                            Na Tenda do Encontro com Deus, cada pessoa é especial. Somos uma
                            comunidade de fé enraizada em Moçambique, comprometida com os
                            princípios do Evangelho de Cristo. Acolhemos a todos com amor e
                            dedicação. Venha fazer parte desta família!
                        </motion.p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="p-8 rounded-xl bg-church-neutral border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-full bg-church-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <p.icon className="w-7 h-7 text-church-primary" />
                                </div>
                                <h3
                                    style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "1.25rem", color: "#1E3A5F" }}
                                    className="mb-2"
                                >
                                    {p.title}
                                </h3>
                                <p className="text-church-text" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Próximos Cultos */}
            <section className="py-16 lg:py-24 bg-church-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            style={{
                                fontFamily: "var(--font-merriweather), serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                color: "#1E3A5F",
                            }}
                            className="mb-2"
                        >
                            Próximos Cultos
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={1} className="text-church-text" style={{ fontSize: "1rem" }}>
                            Venha adorar connosco
                        </motion.p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cultos.map((c, i) => (
                            <motion.div
                                key={c.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-church-secondary/10 flex items-center justify-center">
                                        <c.icon className="w-6 h-6 text-church-secondary" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: "1rem", color: "#1E3A5F" }}>{c.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-church-text" style={{ fontSize: "0.875rem" }}>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-church-accent" />
                                        {c.day}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-church-accent" />
                                        {c.time}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/agenda"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-church-primary text-white rounded-lg hover:bg-church-primary/90 transition-colors"
                            style={{ fontWeight: 600 }}
                        >
                            Ver Agenda Completa <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ministérios em Destaque */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            style={{
                                fontFamily: "var(--font-merriweather), serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                color: "#1E3A5F",
                            }}
                            className="mb-2"
                        >
                            Ministérios em Destaque
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={1} className="text-church-text">
                            Conheça os nossos principais ministérios
                        </motion.p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ministerios.map((m, i) => (
                            <motion.div
                                key={m.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="p-6 rounded-xl bg-church-neutral border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-church-primary/10 flex items-center justify-center mb-4">
                                    <m.icon className="w-6 h-6 text-church-primary" />
                                </div>
                                <h3 style={{ fontWeight: 600, fontSize: "1rem", color: "#1E3A5F" }} className="mb-2">
                                    {m.name}
                                </h3>
                                <p className="text-church-text" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                                    {m.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/ministerios"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-church-primary text-church-primary rounded-lg hover:bg-church-primary hover:text-white transition-colors"
                            style={{ fontWeight: 600 }}
                        >
                            Conhecer Todos os Ministérios <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Galeria em Destaque */}
            <section className="py-16 lg:py-24 bg-church-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            style={{
                                fontFamily: "var(--font-merriweather), serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                color: "#1E3A5F",
                            }}
                            className="mb-2"
                        >
                            Galeria
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={1} className="text-church-text">
                            Momentos especiais da nossa comunidade
                        </motion.p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i * 0.5}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={img}
                                    alt={`Galeria da igreja - imagem ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-church-primary/0 group-hover:bg-church-primary/40 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/galeria"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-church-primary text-white rounded-lg hover:bg-church-primary/90 transition-colors"
                            style={{ fontWeight: 600 }}
                        >
                            Ver Galeria Completa <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pedido de Oração CTA */}
            <section className="relative py-20 overflow-hidden">
                <Image
                    src={PRAYING_IMG}
                    alt="Mãos em oração"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#1E3A5F]/80" />
                <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            className="text-white mb-4"
                            style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                        >
                            Precisa de oração?
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={1} className="text-white/90 mb-8" style={{ fontSize: "1.1rem" }}>
                            Estamos aqui por si. A nossa equipa de intercessão está pronta para
                            orar pelas suas necessidades.
                        </motion.p>
                        <motion.div variants={fadeUp} custom={2}>
                            <Link
                                href="/pedido-oracao"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-church-accent text-white rounded-lg hover:bg-church-accent/90 transition-colors"
                                style={{ fontWeight: 600, fontSize: "1.05rem" }}
                            >
                                Enviar Pedido de Oração <HandHeart className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Localização */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            style={{
                                fontFamily: "var(--font-merriweather), serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                color: "#1E3A5F",
                            }}
                            className="mb-2"
                        >
                            Localização
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={1} className="text-church-text flex items-center justify-center gap-2">
                            <MapPin className="w-5 h-5 text-church-accent" />
                            Av. Julius Nyerere, 1250 — Sommerschield, Maputo, Moçambique
                        </motion.p>
                    </motion.div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2!2d32.5732!3d-25.9692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzA5LjEiUyAzMsKwMzQnMjMuNSJF!5e0!3m2!1spt-BR!2smz!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da I.I.T.E.D — Maputo, Moçambique"
                        />
                    </div>
                </div>
            </section>

            {/* Redes Sociais */}
            <section className="py-12 bg-church-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="mb-6"
                        style={{
                            fontFamily: "var(--font-merriweather), serif",
                            fontWeight: 700,
                            fontSize: "1.5rem",
                            color: "#1E3A5F",
                        }}
                    >
                        Siga-nos nas Redes Sociais
                    </h2>
                    <div className="flex justify-center gap-4">
                        {[
                            { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "hover:bg-blue-600" },
                            { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:bg-pink-600" },
                            { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "hover:bg-red-600" },
                            { icon: Phone, label: "WhatsApp", href: "https://wa.me/258841234567", color: "hover:bg-green-600" },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 rounded-full bg-church-primary text-white flex items-center justify-center ${s.color} transition-colors`}
                                aria-label={s.label}
                            >
                                <s.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
