export interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}
