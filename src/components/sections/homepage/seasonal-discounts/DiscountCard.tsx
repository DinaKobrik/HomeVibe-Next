import React from "react";
import Image from "next/image";
import { Heading, Button, Badge } from "@/components/ui/";
import styles from "./discount-card.module.css";

export interface DiscountCardProps {
  title: string;
  badge: string;
  buttonUrl: string;
  imageUrl: string;
  alt: string;
}

export const DiscountCard: React.FC<DiscountCardProps> = ({
  title,
  badge,
  buttonUrl,
  imageUrl,
  alt,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Badge>{badge}</Badge>
        <Heading level="h2" className={styles.cardTitle}>
          {title}
        </Heading>
        <Button href={buttonUrl} variant="secondary" className={styles.button}>
          SHOW MORE
        </Button>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={alt} fill className={styles.image} />
      </div>
    </div>
  );
};
