"use client";

import UserBanner from "@/components/UserBanner";
import useUserStore from "@/stores/UserStore";

const Dashboard = () => {
  const user = useUserStore((s) => s.user);
  if (!user) return <div>No hay usuario</div>;
  return (
    <div className="w-full h-full grid grid-cols-[1fr_0.4fr]">
      <div className="col-start-1">
        <UserBanner user={user} />
      </div>
      <div className="col-start-2"></div>
    </div>
  );
};

export default Dashboard;
