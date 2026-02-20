import React from "react";
import { cn } from "@/lib/utils";
import styles from "./p.module.css";

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  color?: string;
}

export const P: React.FC<PProps> = ({
  children,
  color,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn(
        styles.text,
        color === "white" ? styles.white : styles.black,
        className,
      )}
      {...rest}>
      {children}
    </p>
  );
};
