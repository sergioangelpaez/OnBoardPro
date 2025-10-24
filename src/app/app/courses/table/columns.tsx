"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Course } from "@/types/course";
import { MoreHorizontal } from "lucide-react";

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

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { UserIcon } from "lucide-react";

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "instructor",
    header: "Instructor",
  },
  {
    accessorKey: "activities",
    header: "Actividades",
  },
  {
    accessorKey: "submissions",
    header: "Misiones",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original;
      const [isDeletionDialogOpen, setIsDeletionDialogOpen] = useState(false);
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
      const [status, setStatus] = useState("active");

      const handleUserDeletion = () => {
        setIsDeletionDialogOpen(false);
        window.location.reload();
      };

      const handleUserEdit = () => {
        setIsEditDialogOpen(false);
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

          {isDeletionDialogOpen && (
            <Dialog
              open={isDeletionDialogOpen}
              onOpenChange={setIsDeletionDialogOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Eliminar curso</DialogTitle>
                  <DialogDescription>
                    ¿Estás seguro que quieres eliminar el curso "{course.name}"?
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

          {isEditDialogOpen && (
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent>
                <form onSubmit={handleUserEdit} className="flex flex-col gap-3">
                  <DialogHeader>
                    <DialogTitle>Editar curso</DialogTitle>
                    <DialogDescription>
                      Ingresa la información nueva del curso. Lo que no
                      necesites cambiar, déjalo como está.
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
                      id="newUserNamens"
                      type="text"
                      required
                      placeholder="Sergio Angel"
                      value={course.name}
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
                          onValueChange={(value) => setStatus(value)}
                          className="space-y-2"
                        >
                          {["active", "archived", "closed"].map((c) => (
                            <DropdownMenuRadioItem
                              key={c}
                              value={c}
                              className="text-sm hover:bg-accent capitalize focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:text-white"
                            >
                              {c}
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
    },
  },
];
