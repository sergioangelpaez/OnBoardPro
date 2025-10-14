"use client";

import React, { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import useUserStore from "@/stores/UserStore";
import SideMenu from "@/components/SideMenu";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((s) => s.user);
  const userRole = user?.role || "student";

  return (
    <div className="min-h-dvh w-full h-screen flex bg-primary">
      <div className="grid w-full h-full grid-cols-[auto_1fr] gap-3 p-3">
        {/* Sidebar */}
        <SideMenu role={userRole} />

        {/* Main content */}
        <div className="col-start-2 flex-1 rounded-2xl overflow-hidden">
          <ScrollArea className="h-screen w-full">
            <main className="bg-background text-foreground rounded-2xl h-screen">
              {children}
            </main>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
