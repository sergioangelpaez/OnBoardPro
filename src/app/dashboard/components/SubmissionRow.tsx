import React from "react";
import Button from "@/components/Button";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface SubmissionRowProps {
  className?: string;
}

const SubmissionRow: React.FC<SubmissionRowProps> = ({ className }) => {
  return (
    <article
      className={`border border-border/50 hover:shadow-md transition rounded-lg p-2 grid grid-cols-[1fr_auto] items-center gap-4 ${className}`}
    >
      {/* Left side: Image + Info */}
      <div className="flex items-center gap-3 overflow-hidden">
        <img
          src="/reactbanner.jpg"
          alt="Instructor Name"
          title="Instructor Name"
          className="w-12 h-12 min-w-12 object-cover rounded-lg"
        />

        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-lg text-brand font-semibold truncate">
            UI/UX Design Crash Course
          </p>
          <div className="flex gap-1 items-center text-sm text-text-secondary truncate">
            <span>Submission Name</span>
            <span>‧</span>
            <span className="text-error">Jul 27</span>
          </div>
        </div>
      </div>

      {/* Right side: Action */}
      <Button
        variant="outline"
        loading={false}
        className="flex gap-1 items-center"
      >
        <span>Enviar</span>
        <ChevronRightIcon className="size-4" />
      </Button>
    </article>
  );
};

export default SubmissionRow;
