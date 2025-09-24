"use client";

import React, { ButtonHTMLAttributes } from "react";

interface ThirdPartyLoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  linkTo: string;
  text: string;
  logoRoute: string;
}

const ThirdPartyLoginButton: React.FC<ThirdPartyLoginButtonProps> = ({
  loading = false,
  disabled,
  className = "",
  text,
  logoRoute,
  linkTo,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <button
      disabled={isDisabled}
      onClick={handleRedirect}
      {...rest}
      className={`hover:bg-black/10 active:bg-black/20 flex items-center rounded-sm p-3 cursor-pointer border-1 gap-5 border-border w-full text-md ${className}`}
    >
      <img src={logoRoute} alt="" className="w-8 h-8" />
      <p className="truncate">{text}</p>
    </button>
  );
};

export default ThirdPartyLoginButton;
