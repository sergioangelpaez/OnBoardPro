"use client";

import React from "react";
import useUserStore from "@/stores/UserStore";
import { Button } from "@/components/ui/button";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { User } from "@/types/user";

export default function UsersPage() {
  const user = useUserStore((s) => s.user);
  const data: User[] = [
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "aergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
    {
      id: 123,
      name: "Sergio",
      email: "sergio@correo.com",
      role: "student",
      xp: 123,
      level: 20,
    },
  ];

  if (!user) {
    return <div className="p-6 text-gray-400">Cargando usuario...</div>;
  }

  if (user.role !== "admin") {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">
            No estás autorizado para ver esta página
          </h2>
          <p className="text-gray-500 mt-2">
            Contacta con un administrador si crees que esto es un error.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2 text-brand">
        Gestión de usuarios
      </h1>
      <p className="text-gray-600 mb-6">
        Aquí puedes crear, editar o eliminar usuarios del sistema.
      </p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
