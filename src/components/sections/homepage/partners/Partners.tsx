"use client";
import React from "react";
import Image from "next/image";
import styles from "./partners.module.css";

const partnersLogos = [
  {
    src: "/images/partners/mia.png",
    alt: "Harmony Home",
  },
  {
    src: "/images/partners/mia.png",
    alt: "Harmony Home",
  },
  {
    src: "/images/partners/mia.png",
    alt: "Harmony Home",
  },
  {
    src: "/images/partners/mia.png",
    alt: "Harmony Home",
  },
  {
    src: "/images/partners/mia.png",
    alt: "Harmony Home",
  },
  {
    src: "/images/partners/mia.png",
    alt: "Harmony Home",
  },
];

export const Partners: React.FC = () => {
  return (
    <section>
      <div className={styles.grid}>
        {partnersLogos.map((logo, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={80}
              className={styles.logo}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};
