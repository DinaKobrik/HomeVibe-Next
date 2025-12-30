import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outlined";
export type ButtonAs = "button" | "link";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  children,
  className,
  disabled,
  ...rest
}) => {
  const classNames = cn(
    styles.btn,
    {
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.outlined]: variant === "outlined",
    },
    disabled && styles.disabled,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
