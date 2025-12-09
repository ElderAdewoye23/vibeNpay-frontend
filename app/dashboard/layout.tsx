"use client";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileNav from "@/components/dashboard/MobileNav";
import { ThemeProvider } from "next-themes";
import { useAuthStore } from "../../store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isAuthenticated, router]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div>
        {/* Desktop Layout */}

        <div className=" hidden lg:block ">
          <DashboardNavbar />
          <div className="flex pt-16">
            {/* sidebar */}
            <div>
              <DashboardSidebar />
            </div>
            <main className="flex-1  ml-60 overflow-y-auto h-[calc(100vh-4rem)]">
             <div className="">
               {children}
             </div>
              </main>
          </div>
        </div>
        {/* Mobile Layout */}

        <div className="lg:hidden flex flex-col min-h-screen">
          <DashboardNavbar />
          <main className="flex-1 overflow-y-auto pt-16 pb-10">
            <div className="">{children}</div>
          </main>
          <MobileNav />
        </div>
      </div>
    </ThemeProvider>
  );
}
