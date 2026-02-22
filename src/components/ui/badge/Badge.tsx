import React from "react";
import { cn } from "@/lib/utils";
import styles from "./badge.module.css";

export type BadgeColor = "black" | "white";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  children: React.ReactNode;
}

export default function Badge({
  color = "black",
  children,
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        styles.badge,
        color === "white" ? styles.white : styles.black,
        className,
      )}
      {...rest}>
      {children}
    </span>
  );
}
