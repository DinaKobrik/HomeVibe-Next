"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./header.module.css";
import Link from "next/link";
import { MenuIcon } from "./menu";
import { CartIcon } from "../../icons/cart";
import { Logo } from "@/components/logo/Logo";

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
        <Logo />

        <nav className={cn(styles.nav, isMobileMenuOpen && styles.navOpen)}>
          <Link
            href="/catalog?category=furniture"
            replace
            className={styles.navLink}
            onClick={closeMobileMenu}>
            Furniture
          </Link>

          <Link
            href="/catalog?category=kitchen-accessories"
            replace
            className={styles.navLink}
            onClick={closeMobileMenu}>
            Kitchen
          </Link>

          <Link
            href="/catalog?category=home-decoration"
            replace
            className={styles.navLink}
            onClick={closeMobileMenu}>
            Decor
          </Link>

          <Link
            href="/catalog?sale=true"
            replace
            className={styles.navLink}
            onClick={closeMobileMenu}>
            Sale
          </Link>

          <Link
            href="/about"
            className={styles.navLink}
            onClick={closeMobileMenu}>
            About
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
