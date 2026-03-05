export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-church-neutral" style={{ fontFamily: "Inter, sans-serif" }}>
      {children}
    </div>
  );
}
