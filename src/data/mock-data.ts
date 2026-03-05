import type { AgendaEvent, CultoRegular } from "@/features/agenda/types";
import type { Ministerio } from "@/features/ministerios/types";
import type { GalleryItem, VideoItem } from "@/types/global";

export const cultosRegulares: CultoRegular[] = [
  { day: "Domingo", time: "09:00", name: "Culto da Manhã (Escola Dominical)", color: "bg-blue-50 border-blue-200" },
  { day: "Domingo", time: "17:00", name: "Culto da Tarde (Celebração)", color: "bg-purple-50 border-purple-200" },
  { day: "Quarta-feira", time: "18:30", name: "Culto de Ensino e Oração", color: "bg-green-50 border-green-200" },
  { day: "Sexta-feira", time: "18:30", name: "Culto de Jovens", color: "bg-orange-50 border-orange-200" },
];

export const eventosEspeciais: AgendaEvent[] = [
  { id: "1", name: "Congresso de Adoração 2026", date: "15-17 de Maio", description: "Três dias de adoração intensa e ministraçao da Palavra.", category: "conferencia", isHighlighted: true },
  { id: "2", name: "Vigília de Oração", date: "Última sexta de cada mês", description: "Uma noite inteira de busca pela presença de Deus.", category: "culto" },
  { id: "3", name: "Semana de Jejum e Oração", date: "1-7 de Junho", description: "Sete dias de consagração e intercessão pela igreja e nações.", category: "evento" },
  { id: "4", name: "Aniversário da Igreja", date: "12 de Agosto", description: "Celebração especial com convidados e programação festiva.", category: "evento", isHighlighted: true },
  { id: "5", name: "Retiro de Casais", date: "20-22 de Setembro", description: "Fim-de-semana de fortalecimento e renovação para casais.", category: "retiro" },
  { id: "6", name: "Conferência de Jovens", date: "10-12 de Outubro", description: "Impactando a nova geração com a Palavra de Deus.", category: "conferencia" },
];

export const ministeriosData: Ministerio[] = [
  {
    id: "louvor",
    icon: {} as React.ElementType,
    name: "Ministério de Louvor e Adoração",
    desc: "Responsável pela música e adoração nos cultos.",
    contact: "louvor@iited.org.mz",
  },
];

export const fotosGaleria: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?w=1080", cat: "Cultos", alt: "Culto de adoração" },
  { src: "https://images.unsplash.com/photo-1506630391771-a4428d1e6bcd?w=1080", cat: "Cultos", alt: "Momento de oração" },
  { src: "https://images.unsplash.com/photo-1709054754811-6c8d2d1ab015?w=1080", cat: "Louvor", alt: "Ministério de louvor" },
  { src: "https://images.unsplash.com/photo-1738744655193-706236bd4480?w=1080", cat: "Congressos", alt: "Encontro da comunidade" },
  { src: "https://images.unsplash.com/photo-1624500055301-c62a900632f3?w=1080", cat: "Congressos", alt: "Pregação" },
  { src: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?w=1080", cat: "Cultos", alt: "Família na igreja" },
];

export const videosGaleria: VideoItem[] = [
  {
    title: "Culto de Celebração — Domingo",
    cat: "Pregações",
    duration: "1:32:00",
    thumb: "https://images.unsplash.com/photo-1624500055301-c62a900632f3?w=1080",
  },
  {
    title: "Louvor e Adoração — Melhores Momentos",
    cat: "Louvores",
    duration: "45:00",
    thumb: "https://images.unsplash.com/photo-1709054754811-6c8d2d1ab015?w=1080",
  },
];
