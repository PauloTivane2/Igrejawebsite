import { apiClient } from "./api-client";

interface ContactEmailPayload {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

interface EmailResponse {
  message: string;
}

export const emailService = {
  sendContactEmail: (payload: ContactEmailPayload) =>
    apiClient.post<EmailResponse>("/api/contact", payload),
};
