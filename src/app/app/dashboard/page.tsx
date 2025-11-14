"use client";

import { useEffect, useState } from "react";
import AllCourses from "../components/AllCourses";
import RecentCourses from "../components/RecentCourses";
import UserBanner from "../components/UserBanner";
import UpcomingSubmissions from "../components/UpcomingSubmissions";
import ClasificationTable from "@/components/ClasificationTable";
import useUserStore from "@/stores/UserStore";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    useUserStore.getState().loadUserFromStorage();
  }, []);

  if (!mounted) {
    return null;
  }

  if (!user) {
    return (
      <main className="w-full h-full flex items-center justify-center">
        <p role="alert" className="text-text-secondary">
          No hay usuario
        </p>
      </main>
    );
  }

  switch (user.role) {
    case "student":
      return (
        <main className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-3 p-3">
          <div className="flex flex-col gap-3">
            <UserBanner user={user} />
            <RecentCourses />
            <div className="grid md:grid-cols-2 gap-3">
              <AllCourses />
              <UpcomingSubmissions />
            </div>
          </div>
          <div>
            <ClasificationTable />
          </div>
        </main>
      );
    case "admin":
      return (
        <main className="p-3">
          <h1>Hola, admin</h1>
        </main>
      );
    case "instructor":
      return <p>Hola, {user.role}</p>;
    default:
      return null;
  }
};

export default Dashboard;
