"use client";

import React, { useState } from "react";
import useUserStore from "@/stores/UserStore";
import { DataTable } from "./table/data-table";
import { Course } from "@/types/course";
import { columns } from "./table/columns";

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

import { UserIcon, BookLockIcon, PlusCircleIcon } from "lucide-react";
import { DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu";
import { testCourses } from "@/lib/testdata";

type Activity = {
  name: string;
};

export default function Courses() {
  const user = useUserStore((s) => s.user);
  const data: Course[] = testCourses;

  const [isAddUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [status, setStatus] = useState<"Publicado" | "Privado" | "Borrador">(
    "Borrador"
  );
  const [instructor, setInstructor] = useState<string>("Sergio Angel");
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleNewUserRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Curso creado con ${activities.length} actividad(es)`);
  };

  const handleAddActivity = (newActivity: Activity) => {
    setActivities((prev) => [...prev, newActivity]);
  };

  if (!user) {
    return <div className="p-6 text-gray-400">Cargando usuario...</div>;
  }

  if (user.role !== "admin") {
    return (
      <div className="flex h-full items-center justify-center p-6">
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
                  htmlFor="courseName"
                  className="text-sm text-muted-foreground"
                >
                  Nombre del curso
                </label>
                <Input
                  id="courseName"
                  type="text"
                  required
                  placeholder="Nombre del curso"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="courseStatus"
                    className="text-sm block text-muted-foreground"
                  >
                    Estado:
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        <BookLockIcon className="w-4 h-4" />
                        <span className="capitalize">{status}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup
                        value={status}
                        onValueChange={(value) =>
                          setStatus(
                            value as "Publicado" | "Privado" | "Borrador"
                          )
                        }
                        className="space-y-2"
                      >
                        {["Publicado", "Privado", "Borrador"].map((r) => (
                          <DropdownMenuRadioItem
                            key={r}
                            value={r}
                            className="text-sm capitalize"
                          >
                            {r}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="courseInstructor"
                    className="text-sm block text-muted-foreground"
                  >
                    Instructor:
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        <UserIcon className="w-4 h-4" />
                        <span className="capitalize">{instructor}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup
                        value={instructor}
                        onValueChange={(value) => setInstructor(value)}
                        className="space-y-2"
                      >
                        {["Sergio Angel", "Brayan Miranda"].map((r) => (
                          <DropdownMenuRadioItem
                            key={r}
                            value={r}
                            className="text-sm capitalize"
                          >
                            {r}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="space-y-2 mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm block w-fit">
                    Actividades ({activities.length})
                  </span>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => handleAddActivity({ name: "Test step" })}
                  >
                    <PlusCircleIcon className="w-4 h-4" />
                    Nueva actividad
                  </Button>
                </div>

                <div className="border border-border rounded-sm p-2">
                  {activities.length === 0 ? (
                    <span className="text-muted-foreground text-sm">
                      No has agregado ninguna actividad.
                    </span>
                  ) : (
                    <div className="bg-accent p-2">
                      <ul>
                        {activities.map((activity) => (
                          <li key={activity.name}>{activity.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <DialogFooter className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsUserDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Crear Curso</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
