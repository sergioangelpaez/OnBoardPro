"use client";

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

import { AxiosError } from "axios";
import api from "@/lib/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/UserStore";

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useUserStore();

  // Manejo del login social desde query string
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) return;

    const verifySocialLogin = async () => {
      try {
        const { data } = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);
        router.push("/app/dashboard");
      } catch (err) {
        router.push("/?error=auth_failed");
      }
    };

    verifySocialLogin();
  }, [router, setUser]);

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  const handleMicrosoftLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/microsoft`;
  };

  const handleLoginRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data } = await api.post("/auth/localuser", { email, password });

      document.cookie = `token=${data.token}; Path=/; Secure; SameSite=Lax;`;
      setUser(data.userData);

      router.push("/app/dashboard");
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        switch (error.response.status) {
          case 400:
            setErrorMessage("Credenciales incorrectas.");
            break;
          case 401:
            setErrorMessage("Correo o contraseña incorrectos.");
            break;
          default:
            setErrorMessage("Error inesperado.");
        }
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Error de conexión.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative flex items-center md:px-20 px-5 w-full h-dvh bg-cover bg-center text-foreground"
      style={{ backgroundImage: "url('/ucentralbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />

      <Card className="relative z-10 w-full backdrop-blur-lg bg-card shadow-xl md:max-w-fit">
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Ingresar"}
            </Button>
          </form>

          {!!errorMessage && (
            <div className="pt-5 text-destructive text-sm">{errorMessage}</div>
          )}

          <div className="py-5">
            <Separator />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full flex items-center gap-2"
              disabled={isLoading}
            >
              <img src="/google-g-logo.png" alt="Google" className="h-5 w-5" />
              <span>Ingresa con Google</span>
            </Button>

            <Button
              onClick={handleMicrosoftLogin}
              variant="outline"
              className="w-full flex items-center gap-2"
              disabled={isLoading}
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
            disabled={isLoading}
          >
            ¿Olvidaste tu contraseña?
          </button>
        </CardFooter>
      </Card>

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
              disabled={isLoading}
            />
          </div>

          <DialogFooter className="pt-4">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button disabled={isLoading}>Enviar enlace</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
