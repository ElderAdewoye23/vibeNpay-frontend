import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileNav from "@/components/dashboard/MobileNav";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
         {/* Desktop Layout */}
        
        
        <div className=" hidden lg:block ">
          <DashboardNavbar />
          <div className="flex">
            {/* sidebar */}
            <div >
            <DashboardSidebar />
          </div>
<main className="flex-1">
 {children}
        </main>
          </div>
        </div>
        {/* Mobile Layout */}

        <div className="lg:hidden flex flex-col min-h-screen">
           <DashboardNavbar />
            <main className="flex-1 overflow-y-auto pb-10">
          <div className="p-6">{children}</div>
        </main>
        <MobileNav />
        </div>
        
        
   </div>
  );
}