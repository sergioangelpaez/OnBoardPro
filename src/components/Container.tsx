import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-card-bg rounded-sm shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Container;
