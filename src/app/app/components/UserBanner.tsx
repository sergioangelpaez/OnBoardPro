import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import { User } from "@/types/user";
import Divider from "@/components/Divider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { ProgressBar } from "@/components/ProgressBar";

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
  }, []);

  if (!user) return <div>No hay usuario</div>;

  return (
    <section aria-labelledby="user-info">
      <h1 id="user-info" className="sr-only">
        Información del usuario
      </h1>

      <Container
        aria-labelledby="user-banner-title"
        className="p-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 grid-rows-[1fr_auto] md:grid-rows-1 h-fit bg-white"
      >
        {/* Avatar + User Info */}
        <div className="grid grid-cols-[auto_1fr] gap-5 col-span-2 md:col-span-1">
          <div>
            <img
              src="/hornet.jpg"
              alt={`Avatar de ${user.firstname}`}
              className="w-25 h-25 min-w-25 min-h-25 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div>
              <p className="text-lg text-text-secondary font-sans">Hola,</p>
              <h2
                id="user-banner-title"
                className="text-primary truncate leading-tight text-3xl"
              >
                {user.fisrtname}
              </h2>
            </div>
            <Divider />
            <div className="flex gap-3 items-center">
              <p className="truncate text-text-secondary text-sm font-sans">
                Nivel {user.level}
              </p>
              <div className="flex-1">
                <ProgressBar progress={50} requiredXp={120} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <aside className="flex items-center flex-col mt-5">
          <button
            className="flex items-center justify-center gap-1 md:hidden"
            onClick={() => setIsStatsOpen((prev) => !prev)}
            aria-expanded={isStatsOpen}
            aria-controls="user-stats"
          >
            {isStatsOpen ? (
              <>
                <span className="text-brand text-sm font-semibold">
                  Ocultar estadísticas
                </span>
                <ChevronUpIcon className="size-4 text-brand" />
              </>
            ) : (
              <>
                <span className="text-brand text-sm font-semibold">
                  Ver estadísticas
                </span>
                <ChevronDownIcon className="size-4 text-brand" />
              </>
            )}
          </button>

          <div
            id="user-stats"
            className={`w-full ${
              isStatsOpen ? "grid" : "hidden"
            } md:grid flex flex-col gap-3 mt-3 transition-all duration-300 ease-in-out 
                  overflow-hidden opacity-0 scale-y-95 animate-fadeIn`}
          >
            {isStatsOpen && <Divider />}

            <div className="grid grid-cols-3">
              {/* Promedio */}
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-brand text-center font-semibold">4.5</h3>
                <p className="text-text-secondary text-center font-sans">
                  Promedio
                </p>
              </div>

              {/* Misiones */}
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-brand text-center font-semibold">3/7</h3>
                <p className="text-text-secondary text-center font-sans">
                  Misiones
                </p>
              </div>

              {/* Días de racha */}
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-brand text-center font-semibold">120</h3>
                <p className="text-text-secondary text-center font-sans">
                  Días de racha
                </p>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
};

export default UserBanner;
