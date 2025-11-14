import React from "react";
import Container from "@/components/Container";
import { User } from "@/types/user";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Divider from "@/components/Divider";
import { ProgressBar } from "@/components/ProgressBar";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface UserBannerProps {
  user: User;
}

const UserBanner: React.FC<UserBannerProps> = ({ user }) => {
  if (!user) return <div>No hay usuario</div>;

  return (
    <section aria-labelledby="user-info">
      <h1 id="user-info" className="sr-only">
        Información del usuario
      </h1>

      <Container
        aria-labelledby="user-banner-title"
        className="p-3 grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-3 grid-rows-[1fr_auto] md:grid-rows-1 h-fit bg-white"
      >
        {/* Avatar + User Info */}
        <div className="grid grid-cols-[auto_1fr] gap-5 col-span-2 md:col-span-1">
          <div>
            <img
              src="/hornet.jpg"
              alt={`Avatar de ${user.fisrtname}`}
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
                <ProgressBar />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <aside className="flex items-center justify-center flex-col mt-5 md:mt-0">
          {/* Mobile Collapsible */}
          <div className="md:hidden w-full">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-center gap-1 w-full py-2">
                <span className="text-brand text-sm font-semibold">
                  Ver estadísticas
                </span>
                <ChevronDownIcon className="size-4 text-brand" />
              </CollapsibleTrigger>
              <CollapsibleContent className="w-full mt-3">
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                  {/* Promedio */}
                  <div className="flex justify-center items-center flex-col">
                    <h3 className="text-primary text-2xl font-semibold">4.5</h3>
                    <p className="text-text-secondary text-center font-sans">
                      Promedio
                    </p>
                  </div>

                  {/* Misiones */}
                  <div className="flex justify-center items-center flex-col">
                    <h3 className="text-primary text-2xl font-semibold">3/7</h3>
                    <p className="text-text-secondary text-center font-sans">
                      Misiones
                    </p>
                  </div>

                  {/* Días de racha */}
                  <div className="flex justify-center items-center flex-col">
                    <h3 className="text-primary text-2xl font-semibold">120</h3>
                    <p className="text-text-secondary text-center line-clamp-1 truncate">
                      Días de racha
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Desktop Stats Always Visible */}
          <div className="hidden md:flex w-full flex-col mt-3 gap-3">
            <div className="grid grid-cols-3 gap-3">
              {/* Promedio */}
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-primary text-2xl font-semibold">4.5</h3>
                <p className="text-text-secondary text-center font-sans">
                  Promedio
                </p>
              </div>

              {/* Misiones */}
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-primary text-2xl font-semibold">3/7</h3>
                <p className="text-text-secondary text-center font-sans">
                  Misiones
                </p>
              </div>

              {/* Días de racha */}
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-primary text-2xl font-semibold">120</h3>
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
