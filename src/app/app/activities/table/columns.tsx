"use client";

import { toast } from "sonner";
import { useState } from "react";
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

import { Activity } from "@/types/activity";

function ActionsCell({ activity }: { activity: Activity }) {
  const [isDeletionDialogOpen, setIsDeletionDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleActivityDeletion = () => {
    setIsDeletionDialogOpen(false);
    toast.success(`Actividad "${activity.name}" eliminada correctamente`, {
      description: "Esta acción no se puede deshacer",
    });
  };

  const handleActivityEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditDialogOpen(false);
    toast.success(`Actividad "${activity.name}" actualizada correctamente`);
  };

  const handleCopyId = async () => {
    await navigator.clipboard.writeText(activity.id);
    toast.success(`ID "${activity.id}" copiado al portapapeles`);
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
          <DropdownMenuItem onClick={handleCopyId}>Copiar ID</DropdownMenuItem>
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
              <DialogTitle>Eliminar actividad</DialogTitle>
              <DialogDescription>
                {`¿Estás seguro que quieres eliminar la actividad "${activity.name}"?`}
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
                onClick={handleActivityDeletion}
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
            <form onSubmit={handleActivityEdit} className="flex flex-col gap-3">
              <DialogHeader>
                <DialogTitle>Editar actividad</DialogTitle>
                <DialogDescription>
                  Ingresa la información nueva de la actividad. Lo que no
                  necesites cambiar, déjalo como está.
                </DialogDescription>
              </DialogHeader>

              {/* Nombre */}
              <div className="space-y-2 pt-2">
                <label
                  htmlFor="activityName"
                  className="text-sm text-muted-foreground"
                >
                  Nombre
                </label>
                <Input
                  id="activityName"
                  type="text"
                  required
                  placeholder={activity.name}
                  defaultValue={activity.name}
                />
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <label
                  htmlFor="activityDescription"
                  className="text-sm text-muted-foreground"
                >
                  Descripción
                </label>
                <Input
                  id="activityDescription"
                  type="text"
                  placeholder={activity.description}
                  defaultValue={activity.description}
                />
              </div>

              {/* Attachment */}
              <div className="space-y-2">
                <label
                  htmlFor="activityAttachment"
                  className="text-sm text-muted-foreground"
                >
                  Archivo
                </label>
                <Input
                  id="activityAttachment"
                  type="text"
                  placeholder={activity.attachment}
                  defaultValue={activity.attachment}
                />
              </div>

              {/* XP */}
              <div className="space-y-2">
                <label
                  htmlFor="activityXp"
                  className="text-sm text-muted-foreground"
                >
                  Experiencia
                </label>
                <Input
                  id="activityXp"
                  type="number"
                  placeholder={activity.xp.toString()}
                  defaultValue={activity.xp}
                />
              </div>

              {/* AssignedTo */}
              <div className="space-y-2">
                <label
                  htmlFor="activityAssigned"
                  className="text-sm text-muted-foreground"
                >
                  Asignada a
                </label>
                <Input
                  id="activityAssigned"
                  type="text"
                  placeholder={activity.assignedTo
                    .map((c) => c.name)
                    .join(", ")}
                  defaultValue={activity.assignedTo
                    .map((c) => c.name)
                    .join(", ")}
                />
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <label
                  htmlFor="activityAchievements"
                  className="text-sm text-muted-foreground"
                >
                  Logros
                </label>
                <Input
                  id="activityAchievements"
                  type="text"
                  placeholder={
                    activity.achievements?.map((a) => a.name).join(", ") || ""
                  }
                  defaultValue={
                    activity.achievements?.map((a) => a.name).join(", ") || ""
                  }
                />
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

export const columns: ColumnDef<Activity>[] = [
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
  { accessorKey: "description", header: "Descripción" },
  { accessorKey: "attachment", header: "Archivo" },
  {
    accessorKey: "assignedTo",
    header: "Asignada A",
    cell: ({ row }) => row.original.assignedTo.map((c) => c.name).join(", "),
  },
  { accessorKey: "xp", header: "Experiencia" },
  {
    accessorKey: "achievements",
    header: "Logros",
    cell: ({ row }) =>
      row.original.achievements?.map((a) => a.name).join(", ") || "-",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCell activity={row.original} />,
  },
];
