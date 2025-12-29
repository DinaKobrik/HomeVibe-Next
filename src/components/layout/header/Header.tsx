"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./header.module.css";
import Link from "next/link";
import { MenuIcon } from "./menu";
import { CartIcon } from "./cart";
import { LogoIcon } from "@/components/logo/logo";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={cn("container mx-auto", styles.container)}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoIcon}>
            <LogoIcon />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTextBold}>Home</span>Vibe
          </div>
        </Link>

        <nav className={cn(styles.nav, isMobileMenuOpen && styles.navOpen)}>
          <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
            Bedroom
          </Link>
          <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
            Linving room
          </Link>
          <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
            Kitchen
          </Link>
          <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
            Bathroom
          </Link>
          <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
            Sale
          </Link>
        </nav>

        <div className={styles.rightActions}>
          <button className={styles.cartButton} aria-label="Корзина">
            <CartIcon />
            <span className={styles.cartBadge}>3</span>
          </button>

          <button
            className={styles.menuButton}
            onClick={toggleMobileMenu}
            aria-label="Меню"
            aria-expanded={isMobileMenuOpen}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
