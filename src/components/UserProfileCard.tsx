import React from "react";
import { User } from "@/types/user";

interface UserBannerProps {
  user: User;
}

const UserProfileCard: React.FC<UserBannerProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-[1fr_auto] py-3 gap-3 px-5">
      <div className="flex items-end justify-center flex-col">
        <p className="text-brand font-semibold text-lg">Sergio Perez</p>
        <p className="text-sm text-text-secondary">@sergioperez</p>
      </div>
      <div>
        <img
          src={user.avatar || "/hornet.jpg"}
          alt={`Avatar de ${user.name}`}
          className="w-12 h-12 min-w-12 min-h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default UserProfileCard;
