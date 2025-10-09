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
    <div className={`rounded-xl bg-card-bg shadow-lg ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
