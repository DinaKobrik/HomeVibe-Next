import React from "react";
import { DeliveryIcon } from "./delivery";
import { TimeIcon } from "./time";
import { WalletIcon } from "./wallet";
import { P } from "@/components/ui/";
import styles from "./advantages.module.css";

const advantagesData = [
  {
    Icon: TimeIcon,
    subtitle: "Long-life-objects",
    text: "These items offer exceptional quality, resilience, and lasting performance.",
  },
  {
    Icon: DeliveryIcon,
    subtitle: "Fast Shipping",
    text: "Shop with confidence and enjoy hassle-free, quick shipping every time!",
  },
  {
    Icon: WalletIcon,
    subtitle: "10% cashback",
    text: "No hidden fees—just straightforward cashback on every eligible purchase.",
  },
];

export const Advantages: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {advantagesData.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.iconWrapper}>
              <item.Icon />
            </div>
            <h3 className={styles.subtitle}>{item.subtitle}</h3>
            <P className={styles.text}>{item.text}</P>
          </div>
        ))}
      </div>
    </section>
  );
};
