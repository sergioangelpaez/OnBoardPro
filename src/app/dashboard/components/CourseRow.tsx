import React from "react";
import { DocumentTextIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CourseRowProps {
  className?: string;
}

const CourseRow: React.FC<CourseRowProps> = ({ className }) => {
  return (
    <article
      className={`border border-border/50 hover:shadow-md transition rounded-lg p-2 ${className} overflow-x-hidden`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-3">
        <div className="flex items-center">
          <img
            src="/reactbanner.jpg"
            alt="Instructor Name"
            className="w-12 h-12 min-w-12 object-cover rounded-lg"
            title="Instructor Name"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-lg text-brand font-semibold truncate">
            UI/UX Design Crash Course
          </p>
          <div className="flex gap-1 items-center text-sm text-text-secondary truncate">
            <div className="flex items-center gap-1">
              <DocumentTextIcon className="size-4" />
              <p>2 misiones</p>
            </div>
            <p>‧</p>
            <div className="flex items-center gap-1">
              <PlayCircleIcon className="size-4" />
              <p>2 actividades</p>
            </div>
            <p>‧</p>
            <div className="flex items-center gap-1">
              <p>75%</p>
              <div className="w-3 h-3" aria-hidden="true">
                <CircularProgressbar
                  value={75}
                  styles={buildStyles({
                    pathColor: "#22c55e",
                    trailColor: "#e5e7eb",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseRow;
