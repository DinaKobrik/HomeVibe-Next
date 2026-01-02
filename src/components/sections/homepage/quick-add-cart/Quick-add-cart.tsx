import React from "react";
import { Heading, Button, P } from "@/components/ui/";
import Image from "next/image";
import styles from "./quick-add-cart.module.css";

const products = [
  {
    title: "Amber Comfort Sofa",
    description:
      "This single-seat sofa with a modern design and an orange velvet cover brings a combination of comfort and elegance to your living space. With a soft seat and wide armrests, it is an ideal choice for relaxation and stylish minimal decor",
    price: "$120",
    image: "/images/seasonal-discounts/decor.png",
    wrapperClass: styles.wrapperRight,
    layoutClass: styles.layoutLeft,
  },
  {
    title: "Cozy Elegance Set",
    description:
      "This modern sectional sofa set, featuring a sleek gray fabric with warm-toned cushions, offers both style and comfort. Paired with a unique wooden coffee table and a lush green plant, it creates a cozy yet sophisticated atmosphere for any living space.",
    price: "$240",
    image: "/images/seasonal-discounts/kitchen.png",
    wrapperClass: styles.wrapperCenter,
    layoutClass: styles.layoutRight,
  },
  {
    title: "Peach Haven",
    description:
      "Peach Haven combines modern design with ultimate comfort, offering a soothing and stylish addition to any space. Its soft peach color and plush cushions create a welcoming atmosphere, perfect for relaxation and unwinding",
    price: "$180",
    image: "/images/seasonal-discounts/furniture.png",
    wrapperClass: styles.wrapperLeft,
    layoutClass: styles.layoutLeft,
  },
];

export const QuickAddCart: React.FC = () => {
  return (
    <section>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div
            key={index}
            className={`${styles.cardWrapper} ${product.wrapperClass}`}>
            <div className={`${styles.card} ${product.layoutClass}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.image}
                  priority
                />
              </div>
              <div className={styles.content}>
                <div>
                  <Heading level="h2" className={styles.productTitle}>
                    {product.title}
                  </Heading>
                  <P>{product.description}</P>
                </div>
                <div className={styles.bottom}>
                  <Button href="/" variant="primary">
                    Add
                  </Button>
                  <span className={styles.price}>{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
