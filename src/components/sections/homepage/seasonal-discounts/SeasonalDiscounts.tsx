import React from "react";
import { DiscountCard } from "./DiscountCard";
import styles from "./seasonal-discounts.module.css";

const cardsData = [
  {
    badge: "NEW COLLECTION",
    title: "Decor & Plants",
    buttonUrl: "/catalog?category=home-decoration",
    imageUrl: "/images/seasonal-discounts/decor.png",
    alt: "Decor & Wellness",
  },
  {
    badge: "NEW COLLECTION",
    title: "Kitchen & Dining",
    buttonUrl: "/catalog?category=kitchen-accessories",
    imageUrl: "/images/seasonal-discounts/kitchen.png",
    alt: "Kitchen & Dining",
  },
  {
    badge: "NEW COLLECTION",
    title: "Furniture",
    buttonUrl: "/catalog?category=furniture",
    imageUrl: "/images/seasonal-discounts/furniture.png",
    alt: "Furniture",
  },
];

export const SeasonalDiscounts: React.FC = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Place seasonal & targeted discount benefits here
      </h3>
      <div className={styles.cards}>
        {cardsData.map((card, index) => (
          <DiscountCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
