"use client";
import React from "react";
import Image from "next/image";
import styles from "./partners.module.css";

const partnersLogos = [
  {
    src: "/images/partners/ph.png",
    alt: "PH",
  },
  {
    src: "/images/partners/mia.png",
    alt: "MiaStudio",
  },
  {
    src: "/images/partners/comfortsk.png",
    alt: "Comfortsk",
  },
  {
    src: "/images/partners/frame.png",
    alt: "FrameVibe",
  },
  {
    src: "/images/partners/nest.png",
    alt: "NestForm",
  },
  {
    src: "/images/partners/loom.png",
    alt: "LoomSpace",
  },
];

export default function Partners() {
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
}
