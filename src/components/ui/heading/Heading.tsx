import React from "react";
import { cn } from "@/lib/utils";
import styles from "./heading.module.css";

export type HeadingLevel = "h1" | "h2" | "h3";
export type HeadingColor = "white" | "black";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  color?: HeadingColor;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = "h3",
  color = "black",
  children,
  className,
  ...rest
}) => {
  const classNames = cn(
    styles.base,
    styles[level],
    color === "white" ? styles.white : styles.black,
    className
  );

  if (level === "h1") {
    return (
      <h1 className={classNames} {...rest}>
        {children}
      </h1>
    );
  }

  if (level === "h2") {
    return (
      <h2 className={classNames} {...rest}>
        {children}
      </h2>
    );
  }

  return (
    <h3 className={classNames} {...rest}>
      {children}
    </h3>
  );
};
