"use client";

import React from "react";
import useUserStore from "@/stores/UserStore";
import { DataTable } from "./table/data-table";
import { Course } from "@/types/course";
import { columns } from "./table/columns";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserIcon } from "lucide-react";
import { DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu";

export default function Courses() {
  const user = useUserStore((s) => s.user);
  const data: Course[] = [
    {
      id: "ABC123",
      name: "Test course name",
      status: "active",
      instructor: "Sergio Angel",
      activities: 2,
      submissions: 3,
    },
    {
      id: "ABC123",
      name: "Another course",
      status: "active",
      instructor: "Sergio Angel",
      activities: 2,
      submissions: 3,
    },
  ];

  const [isAddUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const handleNewUserRequest = (e: React.FormEvent<HTMLFormElement>) => {
    alert(e.timeStamp);
  };

  const [status, setStatus] = useState("active");

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
    <div className="overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-2 text-brand">Gestión de cursos</h1>
      <p className="text-gray-600">
        Aquí puedes crear, editar o eliminar cursos del sistema.
      </p>
      <DataTable
        columns={columns}
        data={data}
        setIsUserDialogOpen={setIsUserDialogOpen}
      />
      {isAddUserDialogOpen && (
        <Dialog open={isAddUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
          <DialogContent>
            <form
              onSubmit={handleNewUserRequest}
              className="flex flex-col gap-3"
            >
              <DialogHeader>
                <DialogTitle>Crear nuevo curso</DialogTitle>
                <DialogDescription>
                  Diligencia todos los campos para crear un nuevo curso.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2 pt-2">
                <label
                  htmlFor="newUserNames"
                  className="text-sm text-muted-foreground"
                >
                  Nombres
                </label>
                <Input
                  id="newUserNames"
                  type="text"
                  required
                  placeholder="Sergio Angel"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="newUserLastNames"
                  className="text-sm text-muted-foreground"
                >
                  Apellidos
                </label>
                <Input
                  id="newUserLastNames"
                  type="text"
                  placeholder="Angel Paez"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="newUserEmail"
                  className="text-sm text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="newUserEmail"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="newUserPassword"
                  className="text-sm text-muted-foreground"
                >
                  Password
                </label>
                <Input
                  id="newUserPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="newUserRole"
                  className="text-sm block text-muted-foreground"
                >
                  Rol:
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      <UserIcon className="w-4 h-4" />
                      Estado: <span className="capitalize">{status}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup
                      value={status}
                      onValueChange={(value) => setStatus(status)}
                      className="space-y-2"
                    >
                      {["active", "archived", "closed"].map((r) => (
                        <DropdownMenuRadioItem
                          key={r}
                          value={r}
                          className="text-sm hover:bg-accent capitalize focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:text-white"
                        >
                          {r}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <DialogFooter className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsUserDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Crear Usuario</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
