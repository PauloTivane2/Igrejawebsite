import { motion } from "motion/react";
import { PageBanner } from "../components/PageBanner";
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
    name: "Ministerio de Louvor e Adoracao",
    desc: "Responsavel pela musica e adoracao nos cultos. A nossa equipa de musicos e cantores dedica-se a conduzir a igreja na presenca de Deus atraves da adoracao.",
    contact: "louvor@iited.org.mz",
  },
  {
    icon: Baby,
    name: "Ministerio Infantil (Tenda Kids)",
    desc: "Cuidado e ensino biblico para criancas dos 0 aos 12 anos. Atraves de actividades ludicas e criativas, ensinamos os principios do Reino de Deus aos mais pequenos.",
    contact: "kids@iited.org.mz",
  },
  {
    icon: Users,
    name: "Ministerio de Jovens (Geracao Activa)",
    desc: "Actividades e discipulado para jovens dos 13 aos 30 anos. Encontros semanais, retiros e projectos sociais que fortalecem a fe da nova geracao.",
    contact: "jovens@iited.org.mz",
  },
  {
    icon: HandHeart,
    name: "Ministerio de Intercessao",
    desc: "Grupo dedicado a oracao e intercessao pela igreja, familias e nacoes. Reunioes semanais de oracao e vigilias mensais.",
    contact: "intercessao@iited.org.mz",
  },
  {
    icon: Heart,
    name: "Ministerio de Casais",
    desc: "Fortalecimento e aconselhamento de casais. Encontros mensais, retiros e acompanhamento pastoral para casamentos saudaveis e abencoados.",
    contact: "casais@iited.org.mz",
  },
  {
    icon: Globe,
    name: "Ministerio de Evangelismo",
    desc: "Alcance e missoes evangelisticas em Maputo e noutras provincias. Accoes de evangelismo, visitas hospitalares e campanhas missionarias.",
    contact: "evangelismo@iited.org.mz",
  },
  {
    icon: HandHelping,
    name: "Ministerio de Accao Social",
    desc: "Assistencia a necessitados atraves de doacoes de alimentos, roupa e apoio a familias em situacao de vulnerabilidade social na comunidade.",
    contact: "social@iited.org.mz",
  },
  {
    icon: Monitor,
    name: "Ministerio de Multimedia",
    desc: "Transmissoes em directo, producao de conteudo digital e comunicacao visual da igreja. Levando a Palavra de Deus atraves da tecnologia.",
    contact: "midia@iited.org.mz",
  },
];

export default function Ministerios() {
  return (
    <div>
      <PageBanner
        title="Os Nossos Ministerios"
        subtitle="Cada ministerio e uma expressao do amor de Deus em accao"
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
