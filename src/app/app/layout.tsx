"use client";

import React, { ReactNode, useEffect, useState } from "react";
import useUserStore from "@/stores/UserStore";
import SideMenu from "@/components/SideMenu";
import { Toaster } from "sonner";

const HEADER_HEIGHT = 56;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((s) => s.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    useUserStore.getState().loadUserFromStorage();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-h-screen w-full flex bg-primary">
      <SideMenu role={user?.role} />

      <div className="flex-1 flex flex-col bg-background text-foreground md:rounded-2xl md:m-3 overflow-hidden">
        <main className="min-h-dvh p-6 pt-20 md:p-6">{children}</main>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default DashboardLayout;
