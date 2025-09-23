import React, { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <div className={`bg-card-bg rounded-sm shadow-lg ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
