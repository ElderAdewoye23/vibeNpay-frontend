import DashboardNavbar from "@/components/dashboard/DashboardNavbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  `}
      >
        <DashboardNavbar />
        <main>
 {children}
        </main>
      </body>
    </html>
  );
}