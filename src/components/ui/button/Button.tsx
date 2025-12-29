import React from "react";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outlined";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={cn(
        styles.btn,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
          [styles.outlined]: variant === "outlined",
        },
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  );
};
