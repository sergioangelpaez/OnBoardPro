"use client";

import { toast } from "sonner";
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

import { User } from "@/types/user";

// Componente separado para la celda de acciones
function UserActionsCell({ user }: { user: User }) {
  const [isDeletionDialogOpen, setIsDeletionDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [role, setRole] = useState<"estudiante" | "instructor" | "admin">(
    "estudiante"
  );

  const handleUserDeletion = () => {
    setIsDeletionDialogOpen(false);
    toast.success(`Usuario "${user.email}" eliminado correctamente`, {
      description: "Esta acción no se puede deshacer",
    });
  };

  const handleUserEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditDialogOpen(false);
    toast.success(`Usuario "${user.email}" actualizado correctamente`);
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
          <DropdownMenuItem
            onClick={async () => {
              await navigator.clipboard.writeText(user.id);
              toast.success(`ID "${user.id}" copiado al portapapeles`);
            }}
          >
            Copiar ID
          </DropdownMenuItem>
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
              <DialogTitle>Eliminar usuario</DialogTitle>
              <DialogDescription>
                {`¿Estás seguro que quieres eliminar al usuario ${user.email}?`}
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
                <DialogTitle>Editar usuario</DialogTitle>
                <DialogDescription>
                  Ingresa la información nueva del usuario. Lo que no necesites
                  cambiar, déjalo como está.
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
                  placeholder={user.name}
                  defaultValue={user.name}
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
                  placeholder={user.email}
                  required
                  defaultValue={user.email}
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
                      Rol: <span className="capitalize">{role}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup
                      value={role}
                      onValueChange={(value) =>
                        setRole(value as "estudiante" | "instructor" | "admin")
                      }
                      className="space-y-2"
                    >
                      {["estudiante", "instructor", "admin"].map((r) => (
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

// Columnas
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
  { accessorKey: "name", header: "Nombre" },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  { accessorKey: "role", header: "Rol" },
  { accessorKey: "xp", header: "XP" },
  { accessorKey: "level", header: "Nivel" },
  {
    id: "actions",
    cell: ({ row }) => <UserActionsCell user={row.original} />,
  },
];
