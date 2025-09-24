import React, { ReactNode } from "react";
import Header from "@/components/Header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-[100dvh]">
      <Header />
      <main className="h-full bg-bg-main">{children}</main>
    </div>
  );
};

export default DashboardLayout;
