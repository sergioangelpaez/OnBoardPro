"use client";

import Container from "@/components/Container";
import UserBanner from "@/components/UserBanner";
import useUserStore from "@/stores/UserStore";
import { Nunito } from "next/font/google";
import CourseCard from "@/components/CourseCard";

const Dashboard = () => {
  const user = useUserStore((s) => s.user);
  if (!user) return <div>No hay usuario</div>;
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_0.4fr]">
      <div className="flex flex-col gap-5">
        <UserBanner user={user} />
        <Container className="p-3">
          <p className={`font-semibold text-lg text-brand font-heading mb-3`}>
            Tus cursos recientes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <CourseCard />
            <CourseCard />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
