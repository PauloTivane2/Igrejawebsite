import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { BackToTop } from "@/components/shared/back-to-top";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
