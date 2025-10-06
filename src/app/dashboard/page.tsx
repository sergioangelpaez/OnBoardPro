"use client";

import useUserStore from "@/stores/UserStore";
import AllCourses from "./components/AllCourses";
import RecentCourses from "./components/RecentCourses";
import UserBanner from "./components/UserBanner";

const Dashboard = () => {
  const user = useUserStore((s) => s.user);

  if (!user) {
    return (
      <main className="w-full h-full flex items-center justify-center">
        <p role="alert" className="text-text-secondary">
          No hay usuario
        </p>
      </main>
    );
  }

  return (
    <main className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_0.4fr]">
      <div className="flex flex-col gap-3">
        {/* User Banner */}
        <UserBanner user={user} />

        {/* Recent Courses Section */}
        <RecentCourses />

        {/** All Courses Section */}
        <AllCourses />
      </div>
    </main>
  );
};

export default Dashboard;
