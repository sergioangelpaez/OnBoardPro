import Divider from "@/components/Divider";
import { AcademicCapIcon, BeakerIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import CourseCard from "@/components/CourseCard";
import Table from "@/components/Table";
import Container from "@/components/Container";

const Dashboard = () => {
  return (
    <div className="flex justify-center w-full h-full p-5">
      <div className="grid grid-cols-3 grid-rows-[0.4fr_1fr] w-full max-w-app gap-5">
        {/** User Card */}
        <div className="col-start-1 col-end-3 row-start-1 flex flex-col items-center">
          <Divider text="Tu perfil" textAlign="left" className="w-full pb-3" />
          <Container className="w-full h-full p-2 grid grid-cols-2 gap-3">
            <div className="grid grid-cols-[auto_1fr] gap-5">
              <div className="rounded-full flex items-center justify-center text-white text-5xl w-30 h-30">
                <img
                  src="/hornet.jpg"
                  alt=""
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 ">
                <div>
                  <p className="text-text-secondary text-lg">Bienvenido,</p>
                  <p className="text-3xl text-brand font-semibold">
                    Sergio Angel
                  </p>
                </div>
                <Divider />
                <div className="flex gap-3">
                  <div className="flex gap-3 items-center w-full text-text-secondary text-sm">
                    Nivel: 13
                    <div
                      className="flex-1 h-2 rounded-full bg-gray-200"
                      title={`50%`}
                    >
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `50%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 gap-3 flex">
              <div className="grid gap-3 grid-cols-3">
                <div className="col-start-1 grid grid-rows-2">
                  <div className="flex items-center justify-center">
                    <p className="text-3xl font-semibold text-brand">4.5</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary text-center">
                      Promedio acumulado
                    </p>
                  </div>
                </div>
                <div className="col-start-2 grid grid-rows-2">
                  <div className="flex items-center justify-center">
                    <p className="text-3xl font-semibold text-brand">3/7</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary text-center">
                      Misiones completadas
                    </p>
                  </div>
                </div>
                <div className="col-start-3 grid grid-rows-2">
                  <div className="flex items-center justify-center">
                    <AcademicCapIcon className="size-10 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary text-center">
                      Logros desbloqueados
                    </p>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="row-start-2 bg-accent"></div>
            </div>
          </Container>
        </div>

        {/** Recent Courses */}
        <div className="col-start-1 grid grid-rows-[auto_1fr] h-full col-end-3 row-start-2">
          <div className="row-start-1 pb-3">
            <Divider text="Tus cursos recientes" textAlign="left" />
          </div>
          <div className="flex gap-3">
            <CourseCard
              courseName="Course Title"
              bannerRoute="/reactbanner.jpg"
            />
            <CourseCard
              courseName="Course Title"
              bannerRoute="/reactbanner.jpg"
            />
            <CourseCard
              courseName="Course Title"
              bannerRoute="/reactbanner.jpg"
            />
          </div>
        </div>

        {/** Weekly Leaderboard */}
        <div className="grid grid-rows-[auto_1fr] col-start-3 row-start-1 row-end-3 min-h-0">
          <div className="row-start-1">
            <Divider
              text="Clasificación semanal"
              textAlign="left"
              className="pb-3"
            />
          </div>
          <div className="row-start-2 min-h-0 overflow-y-auto">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
