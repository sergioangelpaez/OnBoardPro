import useUserStore from "@/stores/UserStore";
import React from "react";

interface ProgressBarProps {
  xpBase?: number;
  multiplicador?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  xpBase = 100,
  multiplicador = 1.5,
}) => {
  const user = useUserStore((state) => state.user);

  const calcularXPParaNivel = (nivel: number) => {
    return Math.floor(xpBase * Math.pow(multiplicador, nivel - 1));
  };

  const obtenerNivelActual = (xp: number) => {
    if (xp < xpBase) return 1;
    return Math.floor(Math.log(xp / xpBase) / Math.log(multiplicador)) + 1;
  };

  const userXp = user?.xp || 0;
  const nivelActual = obtenerNivelActual(userXp);
  const xpParaNivelActual = calcularXPParaNivel(nivelActual);
  const xpParaSiguienteNivel = calcularXPParaNivel(nivelActual + 1);

  let progreso = 0;

  if (userXp < xpBase) {
    progreso = (userXp / xpBase) * 100;
  } else {
    progreso =
      ((userXp - xpParaNivelActual) /
        (xpParaSiguienteNivel - xpParaNivelActual)) *
      100;
  }

  progreso = Math.min(100, Math.max(0, progreso));

  return (
    <div className="flex gap-3 items-center">
      <div className="bg-border h-2 rounded-md flex-1">
        <div
          className="p-1 rounded-md bg-accent"
          style={{ width: `${progreso}%` }}
        ></div>
      </div>
      <p className="text-sm text-text-secondary">
        {userXp}/{xpParaSiguienteNivel} XP
      </p>
    </div>
  );
};
