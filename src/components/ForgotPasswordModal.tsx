import React from "react";
import Container from "./Container";

interface ForgotPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className="absolute inset-0 bg-black/50 z-0">
      <div className="flex h-full w-full items-center justify-center">
        <Container className="p-5">
          <span>hola</span>
        </Container>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
