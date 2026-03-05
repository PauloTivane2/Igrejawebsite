export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="min-h-screen"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
            {children}
        </div>
    );
}
