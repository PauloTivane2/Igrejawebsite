import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageBanner } from "../components/PageBanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, Play, Camera, Video } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const fotos = [
  { src: "https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwd29yc2hpcCUyMGNvbmdyZWdhdGlvbnxlbnwxfHx8fDE3NzI2MzkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", cat: "Cultos", alt: "Culto de adoracao" },
  { src: "https://images.unsplash.com/photo-1506630391771-a4428d1e6bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHByYXlpbmclMjBsaWdodCUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzI2Mzc5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080", cat: "Cultos", alt: "Momento de oracao" },
  { src: "https://images.unsplash.com/photo-1709054754811-6c8d2d1ab015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHdvcnNoaXAlMjBzaW5naW5nfGVufDF8fHx8MTc3MjYzNzkzMnww&ixlib=rb-4.1.0&q=80&w=1080", cat: "Louvor", alt: "Ministerio de louvor" },
  { src: "https://images.unsplash.com/photo-1738744655193-706236bd4480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hyaXN0aWFuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc3MjYzOTAzMXww&ixlib=rb-4.1.0&q=80&w=1080", cat: "Congressos", alt: "Encontro da comunidade" },
  { src: "https://images.unsplash.com/photo-1624500055301-c62a900632f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nJTIwY2h1cmNofGVufDF8fHx8MTc3MjYzOTAzMHww&ixlib=rb-4.1.0&q=80&w=1080", cat: "Congressos", alt: "Pregacao" },
  { src: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwcHJheWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjYzOTAzNHww&ixlib=rb-4.1.0&q=80&w=1080", cat: "Cultos", alt: "Familia na igreja" },
  { src: "https://images.unsplash.com/photo-1709541658608-dfe38af68925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHN0YWluZWQlMjBnbGFzc3xlbnwxfHx8fDE3NzI2Mzc5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080", cat: "Louvor", alt: "Interior da igreja" },
  { src: "https://images.unsplash.com/photo-1580011480023-9547f4740585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcm9zcyUyMHNpbGhvdWV0dGUlMjBmYWl0aHxlbnwxfHx8fDE3NzI2Mzc5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080", cat: "Congressos", alt: "Cruz ao por do sol" },
  { src: "https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGUlMjBzdHVkeSUyMGRldm90aW9uYWx8ZW58MXx8fHwxNzcyNjM3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080", cat: "Infantil", alt: "Estudo biblico" },
];

const videos = [
  { title: "Culto de Celebracao — Domingo", cat: "Pregacoes", duration: "1:32:00", thumb: "https://images.unsplash.com/photo-1624500055301-c62a900632f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nJTIwY2h1cmNofGVufDF8fHx8MTc3MjYzOTAzMHww&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Louvor e Adoracao — Melhores Momentos", cat: "Louvores", duration: "45:00", thumb: "https://images.unsplash.com/photo-1709054754811-6c8d2d1ab015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHdvcnNoaXAlMjBzaW5naW5nfGVufDF8fHx8MTc3MjYzNzkzMnww&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Testemunho de Transformacao", cat: "Testemunhos", duration: "12:30", thumb: "https://images.unsplash.com/photo-1738744655193-706236bd4480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hyaXN0aWFuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc3MjYzOTAzMXww&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Palavra do Pastor — Serie Esperanca", cat: "Pregacoes", duration: "55:00", thumb: "https://images.unsplash.com/photo-1580011480023-9547f4740585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcm9zcyUyMHNpbGhvdWV0dGUlMjBmYWl0aHxlbnwxfHx8fDE3NzI2Mzc5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Congresso de Adoracao 2025 — Dia 1", cat: "Louvores", duration: "2:15:00", thumb: "https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwd29yc2hpcCUyMGNvbmdyZWdhdGlvbnxlbnwxfHx8fDE3NzI2MzkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Baptismo nas Aguas — Marco 2025", cat: "Testemunhos", duration: "28:00", thumb: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwcHJheWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjYzOTAzNHww&ixlib=rb-4.1.0&q=80&w=1080" },
];

const fotoCategorias = ["Todos", "Cultos", "Congressos", "Infantil", "Louvor"];

export default function Galeria() {
  const [tab, setTab] = useState<"fotos" | "videos">("fotos");
  const [fotoFilter, setFotoFilter] = useState("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const fotosFiltradas = fotoFilter === "Todos" ? fotos : fotos.filter((f) => f.cat === fotoFilter);

  return (
    <div>
      <PageBanner
        title="Galeria de Fotos e Videos"
        subtitle="Reviva os melhores momentos da nossa comunidade"
        image="https://images.unsplash.com/photo-1683090610858-52d299056590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb24lMjBtZWRpYXxlbnwxfHx8fDE3NzI2Mzc5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-church-neutral rounded-lg p-1">
              <button
                onClick={() => setTab("fotos")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md transition-all ${
                  tab === "fotos" ? "bg-church-primary text-white shadow-sm" : "text-church-text hover:bg-white"
                }`}
                style={{ fontWeight: 500, fontSize: "0.9rem" }}
              >
                <Camera className="w-4 h-4" /> Fotos
              </button>
              <button
                onClick={() => setTab("videos")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md transition-all ${
                  tab === "videos" ? "bg-church-primary text-white shadow-sm" : "text-church-text hover:bg-white"
                }`}
                style={{ fontWeight: 500, fontSize: "0.9rem" }}
              >
                <Video className="w-4 h-4" /> Vídeos
              </button>
            </div>
          </div>

          {tab === "fotos" && (
            <>
              {/* Filtros */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {fotoCategorias.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFotoFilter(c)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      fotoFilter === c
                        ? "bg-church-primary text-white"
                        : "bg-church-neutral text-church-text hover:bg-church-primary/10"
                    }`}
                    style={{ fontSize: "0.8rem", fontWeight: 500 }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {fotosFiltradas.map((foto, i) => (
                  <motion.div
                    key={foto.src + i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setLightbox(foto.src)}
                  >
                    <div className="relative">
                      <ImageWithFallback
                        src={foto.src}
                        alt={foto.alt}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-church-primary/0 group-hover:bg-church-primary/30 transition-colors duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {tab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-church-neutral rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
                  onClick={() => setVideoModal(v.title)}
                >
                  <div className="relative aspect-video">
                    <ImageWithFallback
                      src={v.thumb}
                      alt={v.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-church-primary ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded" style={{ fontSize: "0.7rem" }}>
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-church-secondary" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                      {v.cat}
                    </span>
                    <h3 style={{ fontWeight: 500, fontSize: "0.95rem", color: "#1E3A5F" }} className="mt-1">
                      {v.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-church-accent"
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            <ImageWithFallback
              src={lightbox}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setVideoModal(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-church-accent"
              onClick={() => setVideoModal(null)}
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl aspect-video bg-black rounded-lg flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 text-church-accent" />
                <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>{videoModal}</p>
                <p className="text-white/60 mt-2" style={{ fontSize: "0.85rem" }}>
                  O video sera reproduzido aqui
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}