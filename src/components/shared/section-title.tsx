'use client';

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-church-primary">{title}</h2>
      {subtitle ? <p className="text-church-text mt-2">{subtitle}</p> : null}
    </div>
  );
}
