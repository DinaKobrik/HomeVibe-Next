"use client";
import React from "react";
import Image from "next/image";
import { Heading, P, Button, Badge } from "@/components/ui/";
import styles from "./hero-banner.module.css";

export const HeroBanner: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge>FRESH ARRIVAL</Badge>
          <Heading level="h1">Beauty In Simplicity</Heading>
          <P className={styles.description}>
            Blends everyday usefulness with refined style — timeless,
            handcrafted vibe.
          </P>
          <div className={styles.button}>
            <Button href="/catalog" variant="primary">
              BROWSE
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero-banner.jpg"
            alt="Stylish interior with modern furniture"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
};
