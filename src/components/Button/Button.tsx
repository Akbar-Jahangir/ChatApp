import React from "react";
import { ButtonProps } from "./button.interface";

export const Button: React.FC<ButtonProps> = ({

  icon,
  iconClass,
  labelText,
  className,
  type = "button",
  onClick
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && <div className={iconClass}>{icon}</div>}
      <p>{labelText}</p>
    </button>
  );
};
