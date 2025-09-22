import React from "react";

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  id,
  label,
  type = "text",
  required = false,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        placeholder=" "
        required={required}
        className="peer w-full border border-border rounded-sm p-2 bg-bg-main hover:border-brand-hover focus:outline-none focus:border-brand-hover"
      />
      <label
        htmlFor={id}
        className="cursor-text absolute left-2 top-2 text-gray-500 text-sm bg-bg-main px-1 transition-all duration-200 
             peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
             peer-focus:top-[-0.6rem] peer-focus:text-sm peer-focus:text-brand-hover
             peer-valid:top-[-0.6rem] peer-valid:text-sm peer-valid:text-brand-hover"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
