"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { header } from "@/components/layout/header";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Target, Eye, BookOpen, Heart, Shield, Users, Globe } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6 },
    }),
};

const valores = [
    { icon: BookOpen, text: "Fé em Jesus Cristo" },
    { icon: Heart, text: "Amor ao próximo" },
    { icon: Shield, text: "Santidade e integridade" },
    { icon: Users, text: "Discipulado e crescimento espiritual" },
    { icon: Globe, text: "Serviço e missão" },
];

const lideres = [
    {
        name: "Pr. Samuel Macamo",
        role: "Pastor Presidente",
        img: "https://images.unsplash.com/photo-1624500055301-c62a900632f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nJTIwY2h1cmNofGVufDF8fHx8MTc3MjYzOTAzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        name: "Pra. Graça Macamo",
        role: "Pastora Auxiliar",
        img: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwcHJheWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjYzOTAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        name: "Dc. Tomás Cossa",
        role: "Diácono",
        img: "https://images.unsplash.com/photo-1738744655193-706236bd4480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hyaXN0aWFuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc3MjYzOTAzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

export default function QuemSomosPage() {
    return (
        <div>
            <header
                title="Quem Somos"
                subtitle="Conheça a nossa história, missão e valores"
                image="https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwd29yc2hpcCUyMGNvbmdyZWdhdGlvbnxlbnwxfHx8fDE3NzI2MzkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />

            {/* Nossa História */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.h2
                                variants={fadeUp}
                                custom={0}
                                style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1E3A5F" }}
                                className="mb-6"
                            >
                                A Nossa História
                            </motion.h2>
                            <motion.div variants={fadeUp} custom={1} className="space-y-4 text-church-text" style={{ lineHeight: 1.8 }}>
                                <p>
                                    A Igreja Internacional Tenda do Encontro com Deus (I.I.T.E.D) nasceu em 2005 na cidade de Maputo,
                                    fruto de um chamado divino para estabelecer um lugar de encontro genuíno entre Deus e o Seu povo.
                                    O que começou como um pequeno grupo de oração na casa do Pastor Samuel Macamo, rapidamente se
                                    transformou numa comunidade vibrante de fé.
                                </p>
                                <p>
                                    Ao longo de quase duas décadas, temos sido testemunhas de incontáveis milagres, restaurações e
                                    transformações de vidas em Moçambique e além-fronteiras. A nossa igreja cresceu não apenas em
                                    números, mas especialmente em maturidade espiritual e compromisso com o Reino de Deus.
                                </p>
                                <p>
                                    Hoje, somos uma comunidade multicultural e multigeracional presente em Maputo, comprometida com a
                                    pregação fiel da Palavra de Deus, a adoração genuína e o serviço ao próximo. Continuamos firmes
                                    no propósito de ser uma verdadeira &quot;Tenda do Encontro&quot; — onde cada pessoa pode experimentar a
                                    presença transformadora de Deus.
                                </p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={2}
                            className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1580011480023-9547f4740585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcm9zcyUyMHNpbGhvdWV0dGUlMjBmYWl0aHxlbnwxfHx8fDE3NzI2Mzc5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Cruz ao pôr do sol representando a nossa fé"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Missão e Visão */}
            <section className="py-16 lg:py-24 bg-church-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="w-14 h-14 rounded-full bg-church-primary/10 flex items-center justify-center mb-4">
                                <Target className="w-7 h-7 text-church-primary" />
                            </div>
                            <h3
                                style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "1.25rem", color: "#1E3A5F" }}
                                className="mb-3"
                            >
                                A Nossa Missão
                            </h3>
                            <p className="text-church-text" style={{ lineHeight: 1.8 }}>
                                Levar o Evangelho de Jesus Cristo a Moçambique e a todas as nações, fazendo discípulos, edificando
                                vidas e promovendo a transformação espiritual e social das comunidades onde estamos inseridos,
                                através do amor, da fé e do serviço cristão.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="w-14 h-14 rounded-full bg-church-accent/10 flex items-center justify-center mb-4">
                                <Eye className="w-7 h-7 text-church-accent" />
                            </div>
                            <h3
                                style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "1.25rem", color: "#1E3A5F" }}
                                className="mb-3"
                            >
                                A Nossa Visão
                            </h3>
                            <p className="text-church-text" style={{ lineHeight: 1.8 }}>
                                Ser uma igreja de referência em adoração genuína, ensino bíblico sólido e impacto social em
                                Moçambique e na África Austral, formando discípulos comprometidos com o Reino de Deus que influenciem
                                positivamente as suas famílias, comunidades e nações para a glória de Cristo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center mb-12"
                        style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1E3A5F" }}
                    >
                        Os Nossos Valores
                    </motion.h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {valores.map((v, i) => (
                            <motion.div
                                key={v.text}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="flex items-center gap-4 p-4 bg-church-neutral rounded-lg"
                            >
                                <div className="w-10 h-10 rounded-full bg-church-primary/10 flex items-center justify-center shrink-0">
                                    <v.icon className="w-5 h-5 text-church-primary" />
                                </div>
                                <span className="text-church-text" style={{ fontSize: "1rem", fontWeight: 500 }}>
                                    {v.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Liderança */}
            <section className="py-16 lg:py-24 bg-church-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-12"
                        style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1E3A5F" }}
                    >
                        A Nossa Liderança
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lideres.map((l, i) => (
                            <motion.div
                                key={l.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={l.img}
                                        alt={l.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 style={{ fontWeight: 600, fontSize: "1.1rem", color: "#1E3A5F" }}>{l.name}</h3>
                                    <p className="text-church-secondary" style={{ fontSize: "0.875rem" }}>{l.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
