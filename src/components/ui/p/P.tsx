import React from "react";
import { cn } from "@/lib/utils";
import styles from "./p.module.css";

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const P: React.FC<PProps> = ({ children, className, ...rest }) => {
  return (
    <p className={cn(styles.text, className)} {...rest}>
      {children}
    </p>
  );
};
