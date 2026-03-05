interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className="text-church-primary mb-4"
        style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-church-text max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
