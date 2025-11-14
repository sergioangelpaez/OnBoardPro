"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, UserIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { Course } from "@/types/course";

// Componente independiente para la celda de acciones
function ActionsCell({ course }: { course: Course }) {
  const [isDeletionDialogOpen, setIsDeletionDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [status, setStatus] = useState<"active" | "archived" | "closed">(
    "active"
  );

  const handleUserDeletion = () => {
    setIsDeletionDialogOpen(false);
    window.location.reload();
  };

  const handleUserEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditDialogOpen(false);
    // Lógica de edición aquí
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem>Copiar ID</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDeletionDialogOpen(true)}>
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialogo de eliminación */}
      {isDeletionDialogOpen && (
        <Dialog
          open={isDeletionDialogOpen}
          onOpenChange={setIsDeletionDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Eliminar curso</DialogTitle>
              <DialogDescription>
                {`¿Estás seguro que quieres eliminar el curso "${course.name}"?`}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="pt-4">
              <Button
                variant="outline"
                onClick={() => setIsDeletionDialogOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                onClick={handleUserDeletion}
                variant="destructive"
              >
                Eliminar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Dialogo de edición */}
      {isEditDialogOpen && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <form onSubmit={handleUserEdit} className="flex flex-col gap-3">
              <DialogHeader>
                <DialogTitle>Editar curso</DialogTitle>
                <DialogDescription>
                  Ingresa la información nueva del curso. Lo que no necesites
                  cambiar, déjalo como está.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2 pt-2">
                <label
                  htmlFor="newCourseName"
                  className="text-sm text-muted-foreground"
                >
                  Nombre del curso
                </label>
                <Input
                  id="newCourseName"
                  type="text"
                  required
                  placeholder={course.name}
                  defaultValue={course.name}
                />
              </div>

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
                      <UserIcon className="w-4 h-4" />
                      Estado: <span className="capitalize">{status}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup
                      value={status}
                      onValueChange={(value) =>
                        setStatus(value as "active" | "archived" | "closed")
                      }
                      className="space-y-2"
                    >
                      {["active", "archived", "closed"].map((s) => (
                        <DropdownMenuRadioItem
                          key={s}
                          value={s}
                          className="text-sm capitalize"
                        >
                          {s}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <DialogFooter className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Confirmar cambios</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

// Definición de columnas
export const columns: ColumnDef<Course>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nombre
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  { accessorKey: "status", header: "Estado" },
  { accessorKey: "instructor", header: "Instructor" },
  { accessorKey: "activities", header: "Actividades" },
  { accessorKey: "submissions", header: "Misiones" },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCell course={row.original} />,
  },
];
