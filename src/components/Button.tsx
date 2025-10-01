import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger";
}

const buttonVariants = {
  primary: "bg-brand text-white hover:bg-brand-hover active:bg-brand-active",
  secondary:
    "bg-accent text-white hover:bg-accent-hover active:bg-accent-active",
  outline:
    "border border-brand text-brand hover:bg-brand/20 active:bg-brand/40",
  danger: "bg-error text-white hover:bg-error-hover active:bg-error-active",
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  variant = "primary",
  disabled,
  className = "",
  ...rest
}) => {
  const isDisabled = disabled || loading;
  return (
    <button
      disabled={isDisabled}
      className={`rounded-sm cursor-pointer p-1 ${
        buttonVariants[variant] ?? buttonVariants.primary
      } ${className}`}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
