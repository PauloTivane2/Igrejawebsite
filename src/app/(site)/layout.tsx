import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/common/BackToTop";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-16 lg:pt-20">
                {children}
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
