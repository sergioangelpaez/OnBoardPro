"use client";

import React, { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import useUserStore from "@/stores/UserStore";
import SideMenu from "@/components/SideMenu";

const HEADER_HEIGHT = 56; // matches the mobile navbar height (py-3 + text size)

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((s) => s.user);
  const userRole = user?.role || "student";

  return (
    <div className="max-h-screen w-full flex bg-primary">
      {/* === Sidebar / Drawer (handles both mobile + desktop) === */}
      <SideMenu role={userRole} />

      {/* === Main Content === */}
      <div className="flex-1 flex flex-col bg-background text-foreground md:rounded-2xl md:m-3 overflow-hidden">
        <ScrollArea className="flex-1 w-full overflow-y-auto">
          <main
            className="
    min-h-dvh
    pt-24 p-6 md:pt-6
  "
          >
            {children}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DashboardLayout;
