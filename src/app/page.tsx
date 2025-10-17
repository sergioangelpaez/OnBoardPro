"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleLoginRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/app/dashboard");
  };

  return (
    <div
      className="relative flex items-center md:px-20 px-5 w-full h-[100dvh] bg-cover bg-center text-foreground"
      style={{ backgroundImage: "url('/ucentralbg.jpg')" }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Card principal */}
      <Card className="relative z-10 w-full backdrop-blur-lg bg-card shadow-xl">
        <CardHeader>
          <span className="text-muted-foreground text-sm">Ingresa a</span>
          <CardTitle className="text-primary text-4xl font-bold">
            Onboard Pro
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <form onSubmit={handleLoginRequest} className="flex flex-col gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-sm text-muted-foreground"
              >
                Contraseña
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full">
              Ingresar
            </Button>
          </form>

          <div className="py-5">
            <Separator />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <img src="/google-g-logo.png" alt="Google" className="h-5 w-5" />
              <span>Ingresa con Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <img src="/ms-logo.png" alt="Microsoft" className="h-5 w-5" />
              <span>Ingresa con Microsoft</span>
            </Button>
          </div>

          <div className="py-5">
            <Separator />
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-sm text-muted-foreground hover:text-primary hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </CardFooter>
      </Card>

      {/* Modal de recuperar contraseña */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recuperar contraseña</DialogTitle>
            <DialogDescription>
              Ingresa tu correo y te enviaremos un enlace para restablecer tu
              contraseña.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2 pt-2">
            <label
              htmlFor="resetEmail"
              className="text-sm text-muted-foreground"
            >
              Correo electrónico
            </label>
            <Input
              id="resetEmail"
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <DialogFooter className="pt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button>Enviar enlace</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
