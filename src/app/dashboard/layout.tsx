import React, { ReactNode } from "react";
import Header from "@/components/Header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-bg-main h-full overflow-hidden">{children}</main>
    </div>
  );
};

export default DashboardLayout;
