import React from "react";
import Image from "next/image";
import { Heading, Button, Badge } from "@/components/ui/";
import styles from "./promo-banner.module.css";

const backgroundImage = "/images/hero-banner.jpg";

export const PromoBanner: React.FC = () => {
  return (
    <section className={styles.section}>
      <Image
        src={backgroundImage}
        alt="New furniture arrivals on sale"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlayWrapper}>
        <div className={styles.overlay}>
          <Badge color="white">NEW ARRIVALS</Badge>
          <Heading level="h2" color="white">
            New furniture arrivals on sale
          </Heading>
          <Button
            href="/catalog?category=furniture"
            variant="primary"
            className={styles.btn}>
            EXPLORE
          </Button>
        </div>
      </div>
    </section>
  );
};
