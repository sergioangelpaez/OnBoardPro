import React from "react";
import Container from "./Container";
import { User } from "@/types/user";
import Divider from "./Divider";
import { BeakerIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { ProgressBar } from "./ProgressBar";

interface UserBannerProps {
  user: User;
}

const UserBanner: React.FC<UserBannerProps> = ({ user }) => {
  if (!user) return <div>No hay usuario</div>;
  return (
    <Container className="rounded-xl p-3 grid grid-cols-2">
      <div className="grid grid-cols-[auto_1fr] gap-5">
        <div className="flex col-start-1">
          <img
            src={user.avatar || "/hornet.jpg"}
            alt=""
            className="w-25 h-25 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div>
            <p className="text-lg text-text-secondary">Hola,</p>
            <p className="text-3xl text-brand font-semibold truncate leading-tight">
              {user.name}
            </p>
          </div>
          <Divider />
          <div className="flex gap-3 items-center">
            <p className="truncate text-text-secondary text-sm">
              Nivel: {user.level}
            </p>
            <div className="flex-1">
              <ProgressBar progress={0.6} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default UserBanner;
