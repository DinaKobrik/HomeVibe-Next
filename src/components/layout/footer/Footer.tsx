import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo/Logo";
import styles from "./footer.module.css";
import { cn } from "@/lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Logo className="logo" />
          <div className={cn(styles.column, styles.address)}>
            <address>
              123 Furniture Street
              <br />
              Design City, DC 10001
              <br />
              United States
            </address>
          </div>

          <div className={cn(styles.column, styles.catalog)}>
            <h3 className={styles.subtitle}>Home Decor Products</h3>
            <ul className={styles.list}>
              <li>
                <Link href="/catalog?category=furniture">Furniture</Link>
              </li>
              <li>
                <Link href="/catalog?category=kitchen-accessories">
                  Kitchen
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=home-decoration">Decor</Link>
              </li>
              <li>
                <Link href="/catalog?sale=true">Sale</Link>
              </li>
            </ul>
          </div>

          <div className={cn(styles.column, styles.quickMenu)}>
            <h3 className={styles.subtitle}>Quick Access Menu</h3>
            <ul className={styles.list}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Our Services</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className={cn(styles.column, styles.contacts)}>
            <h3 className={styles.subtitle}>Contact Information</h3>
            <ul className={styles.contactList}>
              <li>
                Office or Store Address:{" "}
                <address>
                  123 Furniture Street
                  <br />
                  Design City, DC 10001
                  <br />
                  United States
                </address>
              </li>
              <li>
                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:hello@furniture.com">hello@furniture.com</a>
              </li>
              <li>
                Mon–Fri: 9:00 – 18:00
                <br />
                Sat–Sun: 10:00 – 16:00
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/images/sofa.png"
          alt="Sofa"
          width={320}
          height={180}
          className={styles.decoration}
          aria-hidden="true"
        />
      </div>
    </footer>
  );
};
