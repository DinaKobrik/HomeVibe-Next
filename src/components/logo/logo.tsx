"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./logo.module.css";
import { LogoIcon } from "./logoIcon";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn(styles.logo, className)}>
      <div className={styles.logoIcon}>
        <LogoIcon />
      </div>
      <div className={styles.logoText}>
        <span className={styles.logoTextBold}>Home</span>Vibe
      </div>
    </Link>
  );
};
