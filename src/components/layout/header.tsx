import Image from "next/image";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    image: string;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
    return (
        <section className="relative h-64 md:h-80 overflow-hidden">
            <ImageWithFallback
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h1
                    className="text-white mb-2"
                    style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/80 max-w-xl" style={{ fontSize: "1rem" }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
