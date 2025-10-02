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
    <div className="flex gap-3 items-center">
      <div className="bg-bg-main h-2 rounded-md flex-1">
        <div className={`p-1 rounded-md bg-accent w-[${progress}%]`}></div>
      </div>
      <p className="text-sm text-text-secondary">{requiredXp}/200 XP</p>
    </div>
  );
};
