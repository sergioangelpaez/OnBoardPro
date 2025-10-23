"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { User } from "@/types/user";
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

export const columns: ColumnDef<User>[] = [
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
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Rol",
  },
  {
    accessorKey: "xp",
    header: "Experiencia",
  },
  {
    accessorKey: "level",
    header: "Nivel",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const [isDeletionDialogOpen, setIsDeletionDialogOpen] = useState(false);
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
      const [rol, setRole] = useState("Estudiante");

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
              <DropdownMenuItem>Editar</DropdownMenuItem>
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
                  <DialogTitle>Eliminar usuario</DialogTitle>
                  <DialogDescription>
                    ¿Estás seguro que quieres eliminar al usuario {user.email}?
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
                    <DialogTitle>Crear nuevo usuario</DialogTitle>
                    <DialogDescription>
                      Diligencia todos los campos para crear un nuevo usuario.
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
                          Rol: <span className="capitalize">{rol}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuRadioGroup
                          value={rol}
                          onValueChange={(value) => setRole(value)}
                          className="space-y-2"
                        >
                          {["estudiante", "instructor", "admin"].map((r) => (
                            <DropdownMenuRadioItem
                              key={r}
                              value={r}
                              className="text-sm hover:bg-accent capitalize focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:text-white"
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
                      onClick={() => setIsEditDialogOpen(false)}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit">Crear Usuario</Button>
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
