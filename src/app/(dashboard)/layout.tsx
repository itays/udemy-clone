import { Sidebar } from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Sidebar />
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
}
