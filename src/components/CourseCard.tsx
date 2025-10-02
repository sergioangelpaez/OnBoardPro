import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CourseCardProps {
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ className }) => {
  return (
    <div
      className={`bg-bg-main grid grid-rows-[1fr_auto] gap-5 rounded-lg p-2 ${className}`}
    >
      <div className="grid-cols-[1fr_auto] grid">
        <div className="flex flex-col gap-5">
          <img
            src="/reactbanner.jpg"
            alt=""
            className="object-cover rounded-lg w-20 h-20"
          />
          <p className="font-bold text-brand text-xl line-clamp-2">
            Course Title Name
          </p>
        </div>

        <div className="flex flex-col text-xs items-end">
          <div className="py-1 px-2 bg-accent/70 font-semibold w-fit rounded-lg">
            <p>Tag Name</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-xs">Participantes:</p>
          <div>
            <div className="flex -space-x-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="avatar3"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs">Progreso:</p>
          <CircularProgressbar
            value={75}
            styles={buildStyles({
              pathColor: "#22c55e",
              textColor: "#111",
              trailColor: "#e5e7eb",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
