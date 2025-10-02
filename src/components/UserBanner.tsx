import React from "react";
import Container from "./Container";
import { User } from "@/types/user";
import Divider from "./Divider";
import {
  BeakerIcon,
  BookOpenIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { ProgressBar } from "./ProgressBar";

interface UserBannerProps {
  user: User;
}

const UserBanner: React.FC<UserBannerProps> = ({ user }) => {
  if (!user) return <div>No hay usuario</div>;
  return (
    <Container className="rounded-xl p-3 grid grid-cols-1 md:grid-cols-2 gap-3 grid-rows-[1fr_auto] md:grid-rows-1">
      <div className="grid grid-cols-[auto_1fr] gap-5 col-start-1 col-end-3 md:col-start-1 md:col-end-2">
        <div className="flex col-start-1">
          <img
            src={user.avatar || "/hornet.jpg"}
            alt=""
            className="w-25 h-25 min-w-25 min-h-25 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 col-start-2">
          <div>
            <p className="text-lg text-text-secondary">Hola,</p>
            <p className="text-3xl text-brand font-semibold truncate leading-tight">
              {user.name}
            </p>
          </div>
          <Divider />
          <div className="flex gap-3 items-center">
            <p className="truncate text-text-secondary text-sm">
              Nivel {user.level}
            </p>
            <div className="flex-1">
              <ProgressBar progress={20} requiredXp={120} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col mt-3">
        <div className="flex items-center justify-center gap-1">
          <p className="text-brand text-sm font-semibold">Ver estadísticas</p>
          <ChevronDownIcon className="size-4 text-brand" />
        </div>

        <div className="w-full hidden">
          <Divider />
          <div className="md:grid grid-cols-3 grid">
            <div className="flex justify-center items-center flex-col col-start-1">
              <div className="flex justify-center items-end">
                <p className="text-brand text-3xl text-center font-semibold">
                  4.5
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-center">Promedio</p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col col-start-2">
              <div className="flex justify-center items-end">
                <p className="text-brand text-3xl text-center font-semibold">
                  3/7
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-center">Misiones</p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-end">
                <p className="text-brand text-3xl text-center font-semibold">
                  120
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-center">Días de racha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserBanner;
