import React, { ReactNode } from "react";
import Header from "@/components/Header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
