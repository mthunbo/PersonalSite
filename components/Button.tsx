import React from "react";
import { button } from "./button.styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "project" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};
