"use client";

import useUserStore from "@/stores/UserStore";
import AllCourses from "./components/AllCourses";
import RecentCourses from "./components/RecentCourses";
import UserBanner from "./components/UserBanner";
import UpcomingSubmissions from "./components/UpcomingSubmissions";
import UserProfileCard from "@/components/UserProfileCard";
import ClasificationTable from "@/components/ClasificationTable";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const user = useUserStore((s) => s.user);
  const router = useRouter();

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
        <main className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-3">
          <div className="flex flex-col gap-3">
            {/* User Banner */}
            <UserBanner user={user} />

            {/* Recent Courses Section */}
            <RecentCourses />

            {/** All Courses Section */}
            <div className="grid md:grid-cols-2 gap-3">
              <AllCourses />
              <UpcomingSubmissions />
            </div>
          </div>
          <div>
            <UserProfileCard user={user} />
            <ClasificationTable />
          </div>
        </main>
      );
    case "admin":
      return <p>Hola, {user.role}</p>;
    case "teacher":
      return <p>Hola, {user.role}</p>;
    default:
      router.push("/");
  }
};

export default Dashboard;
