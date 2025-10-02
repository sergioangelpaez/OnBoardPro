import React from "react";
import Container from "./Container";
import { User } from "@/types/user";
import Divider from "./Divider";
import {
  BeakerIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { ProgressBar } from "./ProgressBar";
import { useState, useEffect } from "react";

interface UserBannerProps {
  user: User;
}

const UserBanner: React.FC<UserBannerProps> = ({ user }) => {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsStatsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  if (!user) return <div>No hay usuario</div>;
  return (
    <Container className="p-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 grid-rows-[1fr_auto] md:grid-rows-1 h-fit">
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
            <p className="text-lg text-text-secondary font-sans">Hola,</p>
            <p className="text-3xl text-brand font-semibold truncate leading-tight">
              {user.name}
            </p>
          </div>
          <Divider />
          <div className="flex gap-3 items-center">
            <p className="truncate text-text-secondary text-sm font-sans">
              Nivel {user.level}
            </p>
            <div className="flex-1">
              <ProgressBar progress={20} requiredXp={120} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col mt-5">
        <button
          className="flex items-center justify-center gap-1 md:hidden"
          onClick={() => setIsStatsOpen((prev) => !prev)}
        >
          {isStatsOpen ? (
            <>
              <p className="text-brand text-sm font-semibold">
                Ocultar estadísticas
              </p>
              <ChevronUpIcon className="size-4 text-brand" />
            </>
          ) : (
            <>
              <p className="text-brand text-sm font-semibold">
                Ver estadísticas
              </p>
              <ChevronDownIcon className="size-4 text-brand" />
            </>
          )}
        </button>

        <div
          className={`w-full ${
            isStatsOpen ? "grid" : "hidden"
          } md:grid flex flex-col gap-3 mt-3 transition-all duration-300 ease-in-out 
                overflow-hidden opacity-0 scale-y-95 animate-fadeIn`}
        >
          {isStatsOpen && <Divider />}

          <div className="md:grid grid-cols-3 grid">
            <div className="flex justify-center items-center flex-col col-start-1">
              <div className="flex justify-center items-end">
                <p className="text-brand text-3xl text-center font-semibold">
                  4.5
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-center font-sans">
                  Promedio
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col col-start-2">
              <div className="flex justify-center items-end">
                <p className="text-brand text-3xl text-center font-semibold">
                  3/7
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-center font-sans">
                  Misiones
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-end">
                <p className="text-brand text-3xl text-center font-semibold">
                  120
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-center font-sans">
                  Días de racha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserBanner;
