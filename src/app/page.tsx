"use client";

import FloatingInput from "@/components/FloatingInput";
import Button from "@/components/Button";
import ThirdPartyLoginButton from "@/components/ThirdPartyLoginButton";
import Container from "@/components/Container";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import { useState } from "react";
import Divider from "@/components/Divider";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleLoginRequest = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="relative w-full h-[100dvh] bg-cover bg-center text-text-main"
      style={{ backgroundImage: "url('/ucentralbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="flex items-center h-full z-10 p-10">
        <Container className="relative p-8 w-full sm:w-[350px] ">
          <div className="border-border border-b-1 pb-5">
            <span className="text-text-secondary">Ingresa a</span>
            <h1 className="text-brand text-4xl font-bold">Onboard Pro</h1>
          </div>
          <form action={handleLoginRequest}>
            <div className="flex flex-col py-5 gap-3">
              <FloatingInput
                id="email"
                label="Correo electrónico"
                type="email"
                required
              />
              <FloatingInput
                id="password"
                label="Contraseña"
                type="password"
                required
              />
              <Button
                type="submit"
                loading={false}
                variant="primary"
                className="p-2"
              >
                <span>Ingresar</span>
              </Button>
            </div>
          </form>
          <Divider text="O" />
          <div className="py-5 gap-3 flex flex-col">
            <ThirdPartyLoginButton
              disabled={false}
              linkTo=""
              text="Ingresa con Google"
              logoRoute="/google-g-logo.png"
              aria-label="Login con Google"
            />
            <ThirdPartyLoginButton
              disabled={false}
              linkTo=""
              text="Ingresa con Microsoft"
              logoRoute="/ms-logo.png"
              aria-label="Login con Microsoft"
            />
          </div>
          <Divider />
          <footer className="py-1">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm cursor-pointer hover:underline hover:text-brand"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </footer>
        </Container>
        <ForgotPasswordModal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Login;
