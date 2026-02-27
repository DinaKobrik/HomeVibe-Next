"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import styles from "./header.module.css";
import Link from "next/link";
import { MenuIcon } from "./menu";
import { CartIcon } from "../../icons/cart";
import { Logo } from "@/components/logo/Logo";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const getCartCount = (): number => {
    const saved = localStorage.getItem("cart");
    if (!saved) return 0;

    try {
      const cart: unknown = JSON.parse(saved);
      if (!Array.isArray(cart)) return 0;

      return cart.reduce<number>((sum, item) => {
        if (
          item &&
          typeof item === "object" &&
          "quantity" in item &&
          typeof item.quantity === "number"
        ) {
          return sum + item.quantity;
        }
        return sum;
      }, 0);
    } catch {
      return 0;
    }
  };

  useEffect(() => {
    const updateCount = () => setCartCount(getCartCount());

    updateCount();

    window.addEventListener("storage", (e) => {
      if (e.key === "cart") updateCount();
    });

    window.addEventListener("cartUpdated", updateCount);

    window.addEventListener("focus", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cartUpdated", updateCount);
      window.removeEventListener("focus", updateCount);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
          <Link href="/cart" className={styles.cartButton}>
            <CartIcon />
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>

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
