export interface AgendaEvent {
  id: string;
  name: string;
  date: string;
  time?: string;
  description: string;
  category: "culto" | "evento" | "retiro" | "conferencia";
  isHighlighted?: boolean;
}

export interface CultoRegular {
  day: string;
  time: string;
  name: string;
  color: string;
}
