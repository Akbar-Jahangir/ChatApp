import React from "react";

export interface ButtonProps {
  icon?: React.ReactNode;
  iconClass?: string;
  labelText?: string;
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
