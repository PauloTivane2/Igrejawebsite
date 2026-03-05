export interface AgendaEvent {
    id: string;
    name: string;
    date: string;
    time?: string;
    day?: string;
    description: string;
    type: "regular" | "special";
    color?: string;
}
