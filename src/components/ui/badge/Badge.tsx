import React from "react";
import { cn } from "@/lib/utils";
import styles from "./badge.module.css";

export type BadgeColor = "black" | "white";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  color = "black",
  children,
  className,
  ...rest
}) => {
  return (
    <span
      className={cn(
        styles.badge,
        color === "white" ? styles.white : styles.black,
        className
      )}
      {...rest}>
      {children}
    </span>
  );
};
