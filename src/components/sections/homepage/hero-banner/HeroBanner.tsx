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
          <Badge>NEW COLLECTION</Badge>
          <Heading level="h1">The Beauty Of Design</Heading>
          <P className={styles.description}>
            Both functional and decorative, which feels artisan-made but has a
            contemporary look.
          </P>
          <div className={styles.button}>
            <Button variant="primary">EXPLORE</Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/hero-banner.jpg"
            alt="Стильный интерьер с современной мебелью"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
};
