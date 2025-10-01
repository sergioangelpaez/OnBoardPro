import React from "react";
import Container from "./Container";
import Divider from "./Divider";
import Button from "./Button";
import FloatingInput from "./FloatingInput";
import { useState } from "react";

interface ForgotPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  open,
  onClose,
}) => {
  const [step, setStep] = useState<"form" | "sent">("form");

  const handleRecoverPassword = () => {
    if (step == "form") {
      setStep("sent");
    } else {
      setStep("form");
      onClose();
    }
  };

  if (!open) return null;
  return (
    <>
      <div className="absolute inset-0 bg-black/50 z-0 flex items-center justify-center">
        <Container className="p-5 w-1/4 z-10 flex gap-3 flex-col">
          <h1 className="text-brand font-bold text-2xl">
            Restablece tu contraseña
          </h1>
          <Divider />
          {step === "form" ? (
            <form onSubmit={handleRecoverPassword}>
              <div>
                <p className="text-text-secondary">
                  Ingresa tu correo electrónico y te enviaremos instrucciones
                  para reestablecer tu contraseña.
                </p>
                <div className="flex flex-col py-3 gap-3">
                  <FloatingInput
                    id="recoveryEmail"
                    label="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-5">
                <Button
                  variant="outline"
                  loading={false}
                  className="w-30 p-1"
                  onClick={onClose}
                >
                  <p>Cancelar</p>
                </Button>
                <Button variant="primary" loading={false} className="w-30">
                  <p>Enviar</p>
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex gap-3 flex-col">
              <p>
                Si el correo que ingresaste se encuentra registrado en nuestro
                sistema, te enviaremos un correo con instrucciones para
                restablecer tu contraseña.
              </p>
              <div className="flex justify-end gap-5">
                <Button
                  variant="primary"
                  loading={false}
                  className="w-30 p-1"
                  onClick={handleRecoverPassword}
                >
                  <p>Aceptar</p>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
