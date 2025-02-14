import React from "react";

export interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?:()=> void
}
