"use client";

import React, { useState } from "react";
import useUserStore from "@/stores/UserStore";
import { DataTable } from "./table/data-table";
import { Activity } from "@/types/activity";
import { columns } from "./table/columns";
import Link from "next/link";

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

import { toast } from "sonner";
import { PlusCircleIcon } from "lucide-react";
import { testActivities } from "@/lib/testdata";

export default function Activities() {
  const user = useUserStore((s) => s.user);
  const data: Activity[] = testActivities;

  const [isAddActivityDialogOpen, setIsAddActivityDialogOpen] = useState(false);

  // Form fields for new activity
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [xp, setXp] = useState<number>(0);
  const [assignedTo, setAssignedTo] = useState<Activity["assignedTo"]>([]);

  const [activities, setActivities] = useState<Activity[]>([]);

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
      <h1 className="text-3xl font-bold mb-2 text-brand">
        Gestión de actividades
      </h1>
      <p className="text-gray-600">
        Aquí puedes crear, editar o eliminar actividades de un curso. Consulta
        los tipos de archivos permitidos{" "}
        <Link href="#" className="underline">
          aquí.
        </Link>
      </p>

      <DataTable
        columns={columns}
        data={data}
        setIsUserDialogOpen={setIsAddActivityDialogOpen}
      />

      {isAddActivityDialogOpen && (
        <Dialog
          open={isAddActivityDialogOpen}
          onOpenChange={setIsAddActivityDialogOpen}
        >
          <DialogContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newActivity: Activity = {
                  id: Date.now().toString(),
                  name,
                  description,
                  attachment: attachment ? URL.createObjectURL(attachment) : "",
                  xp,
                  assignedTo,
                  achievements: [],
                };
                handleAddActivity(newActivity);
                setIsAddActivityDialogOpen(false);
                toast.success(`Actividad "${name}" creada correctamente`);
                // Limpiar formulario
                setName("");
                setDescription("");
                setAttachment(null);
                setXp(0);
                setAssignedTo([]);
              }}
              className="flex flex-col gap-3"
            >
              <DialogHeader>
                <DialogTitle>Crear nueva actividad</DialogTitle>
                <DialogDescription>
                  Diligencia todos los campos para crear una nueva actividad.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2 pt-2">
                <label className="text-sm text-muted-foreground">Nombre</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nombre de la actividad"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Descripción
                </label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descripción de la actividad"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Archivo</label>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                />
                {attachment && (
                  <span className="text-sm text-gray-500">
                    Archivo seleccionado: {attachment.name}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">XP</label>
                <Input
                  type="number"
                  value={xp}
                  onChange={(e) => setXp(Number(e.target.value))}
                  placeholder="Cantidad de XP"
                />
              </div>

              <DialogFooter className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsAddActivityDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Crear Actividad</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
