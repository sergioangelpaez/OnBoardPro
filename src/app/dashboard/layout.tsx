import React, { ReactNode } from "react";
import SideMenu from "@/components/SideMenu";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center from-brand to-blue-800">
      <div className="grid min-h-screen grid-cols-[auto_1fr] w-full max-w-app">
        <div className="col-start-1">
          <SideMenu />
        </div>
        <div className="col-start-2 p-3">
          <main className="bg-card-bg rounded-3xl h-full overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
