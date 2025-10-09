"use client";

import React, { ReactNode } from "react";
import SideMenu from "@/components/SideMenu";
import { routesByRole, footerRoutes } from "@/lib/routes";
import useUserStore from "@/stores/UserStore";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((s) => s.user);
  const userRole = user?.role || "student";

  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center from-brand/70 to-blue-800/70 md:from-brand md:to-blue-800">
      <div className="grid min-h-screen grid-cols-[auto_1fr] w-full max-w-app py-3">
        <div>
          <SideMenu />
        </div>

        <div className="col-start-2 p-0 md:px-2">
          <main className="md:bg-bg-main md:rounded-3xl h-full overflow-hidden p-2">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
