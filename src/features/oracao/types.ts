export interface PedidoOracaoFormData {
  nome: string;
  email: string;
  telefone?: string;
  tipo: string;
  pedido: string;
  confidencial: boolean;
}

export interface PedidoOracao {
  id: number;
  nome: string;
  tipo: string;
  data: string;
  status: "Novo" | "Em oracao" | "Respondido";
  resumo: string;
}
