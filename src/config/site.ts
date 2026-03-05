export const siteConfig = {
  name: "I.I.T.E.D",
  fullName: "Igreja Internacional Tenda do Encontro com Deus",
  description:
    "Um lugar de fé, esperança e transformação em Moçambique.",
  verse: '"O Senhor é o meu pastor; nada me faltará." — Salmo 23:1',
  address: "Av. Julius Nyerere, 1250 — Sommerschield, Maputo",
  phone: "+258 21 491 000",
  whatsapp: "+258 84 123 4567",
  whatsappUrl: "https://wa.me/258841234567",
  email: "contato@iited.org.mz",
  hours: "Seg a Sex — 08:00 às 17:00",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iited.org.mz",
} as const;
