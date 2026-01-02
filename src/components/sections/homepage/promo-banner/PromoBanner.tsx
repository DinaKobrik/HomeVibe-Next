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
        alt="Промо фон"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlayWrapper}>
        <div className={styles.overlay}>
          <Badge color="white">NEW ARRIVALS</Badge>
          <Heading level="h2" color="white">
            Everything you need for your living room
          </Heading>
          <Button
            href="/catalog/living-room"
            variant="primary"
            className={styles.btn}>
            PURCHASE
          </Button>
        </div>
      </div>
    </section>
  );
};
