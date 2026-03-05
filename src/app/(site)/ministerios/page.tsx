"use client";

import { motion } from "motion/react";
import { PageBanner } from "@/components/layout/PageBanner";
import { Music, Baby, Users, HandHeart, Heart, Globe, HandHelping, Monitor } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const ministerios = [
    {
        icon: Music,
        name: "Ministério de Louvor e Adoração",
        desc: "Responsável pela música e adoração nos cultos. A nossa equipa de músicos e cantores dedica-se a conduzir a igreja na presença de Deus através da adoração.",
        contact: "louvor@iited.org.mz",
    },
    {
        icon: Baby,
        name: "Ministério Infantil (Tenda Kids)",
        desc: "Cuidado e ensino bíblico para crianças dos 0 aos 12 anos. Através de actividades lúdicas e criativas, ensinamos os princípios do Reino de Deus aos mais pequenos.",
        contact: "kids@iited.org.mz",
    },
    {
        icon: Users,
        name: "Ministério de Jovens (Geração Activa)",
        desc: "Actividades e discipulado para jovens dos 13 aos 30 anos. Encontros semanais, retiros e projectos sociais que fortalecem a fé da nova geração.",
        contact: "jovens@iited.org.mz",
    },
    {
        icon: HandHeart,
        name: "Ministério de Intercessão",
        desc: "Grupo dedicado à oração e intercessão pela igreja, famílias e nações. Reuniões semanais de oração e vigílias mensais.",
        contact: "intercessao@iited.org.mz",
    },
    {
        icon: Heart,
        name: "Ministério de Casais",
        desc: "Fortalecimento e aconselhamento de casais. Encontros mensais, retiros e acompanhamento pastoral para casamentos saudáveis e abençoados.",
        contact: "casais@iited.org.mz",
    },
    {
        icon: Globe,
        name: "Ministério de Evangelismo",
        desc: "Alcance e missões evangelísticas em Maputo e noutras províncias. Acções de evangelismo, visitas hospitalares e campanhas missionárias.",
        contact: "evangelismo@iited.org.mz",
    },
    {
        icon: HandHelping,
        name: "Ministério de Acção Social",
        desc: "Assistência a necessitados através de doações de alimentos, roupa e apoio a famílias em situação de vulnerabilidade social na comunidade.",
        contact: "social@iited.org.mz",
    },
    {
        icon: Monitor,
        name: "Ministério de Multimédia",
        desc: "Transmissões em directo, produção de conteúdo digital e comunicação visual da igreja. Levando a Palavra de Deus através da tecnologia.",
        contact: "midia@iited.org.mz",
    },
];

export default function MinisteriosPage() {
    return (
        <div>
            <PageBanner
                title="Os Nossos Ministérios"
                subtitle="Cada ministério é uma expressão do amor de Deus em acção"
                image="https://images.unsplash.com/photo-1709054754811-6c8d2d1ab015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHdvcnNoaXAlMjBzaW5naW5nfGVufDF8fHx8MTc3MjYzNzkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
            />

            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {ministerios.map((m, i) => (
                            <motion.div
                                key={m.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="p-6 rounded-xl bg-church-neutral border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-lg bg-church-primary/10 flex items-center justify-center mb-4">
                                    <m.icon className="w-7 h-7 text-church-primary" />
                                </div>
                                <h3
                                    style={{ fontWeight: 600, fontSize: "1.05rem", color: "#1E3A5F" }}
                                    className="mb-2"
                                >
                                    {m.name}
                                </h3>
                                <p className="text-church-text flex-1 mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                                    {m.desc}
                                </p>
                                <p className="text-church-secondary" style={{ fontSize: "0.8rem" }}>
                                    {m.contact}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
