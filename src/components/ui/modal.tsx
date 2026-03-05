'use client';

export function Modal({ open, children }: { open: boolean; children: React.ReactNode }) {
  if (!open) return null;
  return <div className="fixed inset-0 bg-black/40 flex items-center justify-center">{children}</div>;
}
