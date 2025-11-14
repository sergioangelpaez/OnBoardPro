import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UserIcon, FolderIcon } from "@heroicons/react/24/outline";

interface CourseCardProps {
  className?: string;
  progress?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  className,
  progress = 75,
}) => {
  return (
    <article
      className={`border border-border/50 hover:shadow-md transition rounded-lg p-4 grid grid-rows-[1fr_auto] gap-3 ${className}`}
    >
      {/* Header */}
      <header className="grid grid-cols-[1fr_auto] gap-3">
        <img
          src="/reactbanner.jpg"
          alt="Banner del curso React"
          className="object-cover rounded-lg w-16 h-16"
        />
        <p className="py-0.5 px-2 bg-accent/20 text-accent h-fit text-xs font-medium w-fit rounded-md">
          Tag Name
        </p>
      </header>

      {/* Course Title */}
      <h3 className="text-brand line-clamp-2 font-semibold mt-2">
        Course Title Name
      </h3>

      {/* Participants & Progress */}
      <section
        aria-labelledby="participants-progress"
        className="flex justify-between items-center mt-2"
      >
        {/* Participants */}
        <div className="flex flex-col gap-1">
          <p id="participants-progress" className="text-sm font-medium">
            Participantes
          </p>
          <div className="flex -space-x-3">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Participante 1"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Participante 2"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Participante 3"
            />
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-xs font-medium border-2 border-white text-gray-600"
              aria-label="+3 participantes más"
            >
              +3
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-1 items-end">
          <p className="text-sm font-medium">Progreso</p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <CircularProgressbar
                value={progress}
                styles={buildStyles({
                  pathColor: "#22c55e",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
            <p className="text-sm font-medium">{progress}%</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center pt-2 border-t border-border mt-3">
        <div className="flex items-center gap-2 text-text-secondary">
          <UserIcon className="w-4 h-4" aria-hidden="true" />
          <p className="text-xs">Instructor</p>
        </div>
        <div className="flex items-center gap-1 text-text-secondary">
          <FolderIcon className="w-4 h-4" aria-hidden="true" />
          <p className="text-xs">2 misiones</p>
        </div>
      </footer>
    </article>
  );
};

export default CourseCard;
