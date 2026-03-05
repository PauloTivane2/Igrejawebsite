import { apiRequest } from "./api";

interface EmailData {
    to: string;
    subject: string;
    body: string;
}

export async function sendEmail(data: EmailData) {
    // TODO: Implement actual email sending (e.g., via SendGrid, Resend, etc.)
    return apiRequest("/api/contact", {
        method: "POST",
        body: data,
    });
}
