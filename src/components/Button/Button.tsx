import React from "react";
import { ButtonProps } from "./button.interface";

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
