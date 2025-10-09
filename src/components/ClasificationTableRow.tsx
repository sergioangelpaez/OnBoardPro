import React from "react";
import { User } from "@/types/user";

interface ClasificationTableRowProps {
  user?: User;
  place: number;
}

const ClasificationTableRow: React.FC<ClasificationTableRowProps> = ({
  user,
  place,
}) => {
  const placesStyles: Record<number, string> = {
    1: "bg-brand/25",
    2: "bg-brand/15",
    3: "bg-brand/10",
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 w-full ${placesStyles[place]} rounded-lg p-1 px-2`}
    >
      <div className="flex items-center gap-2">
        <div>{place}</div>
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <img
            src="/hornet.jpg"
            alt="Maren Maureen"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-brand">Maren Maureen</p>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <p>@mmaureen</p>
              <span>‧</span>
              <p className="">Nivel 15</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-brand font-semibold">
        <p>123 XP</p>
      </div>
    </div>
  );
};

export default ClasificationTableRow;
