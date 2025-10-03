"use client";

import Container from "@/components/Container";
import UserBanner from "@/components/UserBanner";
import useUserStore from "@/stores/UserStore";
import CourseCard from "@/components/CourseCard";

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
        {/* User Section */}
        <section aria-labelledby="user-info">
          <h1 id="user-info" className="sr-only">
            Información del usuario
          </h1>
          <UserBanner user={user} />
        </section>

        {/* Recent Courses Section */}
        <section aria-labelledby="recent-courses">
          <Container className="p-3">
            <h2
              id="recent-courses"
              className="font-semibold text-lg text-brand font-heading mb-3"
            >
              Tus cursos recientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <CourseCard />
              <CourseCard />
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
