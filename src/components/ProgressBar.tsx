import React from "react";

interface ProgressBarProps {
  requiredXp?: number;
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  requiredXp,
  progress,
}) => {
  return (
    <div className="bg-bg-main rounded-md w-full">
      <div className={`p-1 rounded-md bg-accent w-[${progress * 100}%]`}></div>
      <p>{requiredXp}</p>
    </div>
  );
};
