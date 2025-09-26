import Divider from "@/components/Divider";
import { AcademicCapIcon, BeakerIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import CourseCard from "@/components/CourseCard";
import Table from "@/components/Table";

const Dashboard = () => {
  return (
    <div className="flex justify-center w-full h-full p-5">
      <div className="grid grid-cols-3 grid-rows-[0.4fr_1fr] w-full max-w-app gap-5">
        {/** User Card */}
        <div className="col-start-1 row-start-1 flex items-center">
          <div className="grid grid-cols-[0.5fr_1fr] gap-5 w-full">
            <div className="rounded-full flex items-center justify-center text-white text-5xl w-30 h-30">
              <img src="/hornet.jpg" alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col justify-center gap-3 ">
              <div>
                <p className="text-text-secondary text-xl">Bienvenido,</p>
                <p className="text-3xl text-brand font-semibold">
                  Sergio Angel
                </p>
              </div>
              <Divider />
              <div className="flex gap-3">
                <AcademicCapIcon className="size-6" />
                <BeakerIcon className="size-6" />
                <BookOpenIcon className="size-6" />
              </div>
            </div>
          </div>
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
