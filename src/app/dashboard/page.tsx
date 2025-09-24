import Divider from "@/components/Divider";
import { AcademicCapIcon, BeakerIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import CourseCard from "@/components/CourseCard";

const Dashboard = () => {
  return (
    <div className="flex justify-center w-full h-full p-5">
      <div className="p-5 grid grid-cols-3 grid-rows-2 h-full w-full max-w-app">
        {/** Cell: [0,0] */}
        <div className="col-start-1 row-start-1 flex items-center">
          <div className="grid grid-cols-[0.5fr_1fr] gap-5 w-full">
            <div className="rounded-full flex items-center justify-center text-white text-5xl bg-brand w-30 h-30">
              <p>S</p>
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

        {/** Cell: [1,0] */}
        <div className="col-start-1 col-end-3 row-start-2">
          <Divider text="Tus cursos recientes" textAlign="left" />
          <div className="flex gap-5 py-3 h-full">
            <CourseCard
              courseName="Test Course"
              bannerRoute="/reactbanner.jpg"
            />
            <CourseCard courseName="Test Course" bannerRoute="/jsbanner.png" />
            <CourseCard
              courseName="Test Course"
              bannerRoute="/nodebanner.jpg"
            />
          </div>
        </div>
        <div className="col-start-"></div>
      </div>
    </div>
  );
};

export default Dashboard;
