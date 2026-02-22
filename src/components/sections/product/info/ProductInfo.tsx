"use client";

import { Button } from "@/components/ui/";
import { Heading, P } from "@/components/ui/";
import styles from "./product-info.module.css";
import { Product } from "@/types/product";
import { SafetyIcon } from "./safety";
import { FastShippingIcon } from "./fast-shipping";
import { ExchangeIcon } from "./exchange";
import { StarIcon } from "./star";
import Link from "next/link";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const hasDiscount =
    !!product.discountPercentage && product.discountPercentage > 0;
  const discountLabel = hasDiscount
    ? `-${Math.round(product.discountPercentage!)}%`
    : null;
  const originalPrice = hasDiscount
    ? Math.round((product.price * 100) / (100 - product.discountPercentage!))
    : null;

  const reviewsCount = product.reviews.length;
  const averageRating = product.rating;

  return (
    <div className={styles.infoColumn}>
      <div className={styles.breadcrumbs}>
        <Link href={`/catalog?category=${product.category.toLowerCase()}`}>
          <span>{product.category.replace("-", " ")}</span>
        </Link>
        <span className={styles.separator}> / </span>
        <span className={styles.breadcrumbsTitle}>{product.title}</span>
      </div>

      <div className={styles.ratingBlock}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => {
            const starValue = i + 1;
            const isFull = starValue <= Math.floor(averageRating);
            const isPartial =
              starValue === Math.ceil(averageRating) && averageRating % 1 > 0;
            const fillPercentage = isPartial
              ? Math.round((averageRating % 1) * 100)
              : 0;

            return (
              <StarIcon
                key={i}
                filled={isFull}
                fillPercentage={isPartial ? fillPercentage : undefined}
              />
            );
          })}
        </div>
        <span className={styles.rating}>{averageRating.toFixed(1)}</span>
        <span className={styles.reviewsCount}>
          ({reviewsCount} {reviewsCount === 1 ? "review" : "reviews"})
        </span>
      </div>

      <Heading level="h2" className={styles.title}>
        {product.title}
      </Heading>

      <div className={styles.priceBlock}>
        <span className={styles.price}>$ {product.price.toFixed(2)}</span>
        {originalPrice && (
          <span className={styles.originalPrice}>$ {originalPrice}</span>
        )}
        {hasDiscount && (
          <span className={styles.discountBadge}>{discountLabel} OFF</span>
        )}
      </div>

      <P className={styles.description}>{product.description}</P>

      <div className={styles.specs}>
        {product.brand && (
          <div className={styles.spec}>
            <span className={styles.specLabel}>Brand</span>
            <span>{product.brand}</span>
          </div>
        )}
        {product.stock !== undefined && (
          <div className={styles.spec}>
            <span className={styles.specLabel}>In stock</span>
            <span>{product.stock} pcs</span>
          </div>
        )}
      </div>

      <div className={styles.buttons}>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="outlined">Buy Now</Button>
      </div>

      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <FastShippingIcon />
          <span>{product.shippingInformation || "Fast delivery"}</span>
        </div>

        <div className={styles.benefit}>
          <SafetyIcon />
          <span>{product.warrantyInformation || "Warranty 2 years"}</span>
        </div>

        <div className={styles.benefit}>
          <ExchangeIcon />
          <span>{product.returnPolicy || "30 days return"}</span>
        </div>
      </div>
    </div>
  );
}
