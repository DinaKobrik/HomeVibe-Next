"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ui/";
import { SortFilter } from "@/components/sections/catalog";
import styles from "./catalog-client.module.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  reviews: { rating: number }[];
  thumbnail: string;
  category: string;
}

type SortOption = "price-asc" | "price-desc" | "rating" | "discount" | null;

interface CatalogClientProps {
  initialProducts: Product[];
}

export function CatalogClient({ initialProducts }: CatalogClientProps) {
  const [sortBy, setSortBy] = useState<SortOption>(null);

  const getFinalPrice = (product: Product): number => {
    return product.discountPercentage
      ? product.price * (1 - product.discountPercentage / 100)
      : product.price;
  };

  const sortedProducts = [...initialProducts];

  if (sortBy) {
    sortedProducts.sort((a, b) => {
      const aFinalPrice = getFinalPrice(a);
      const bFinalPrice = getFinalPrice(b);

      switch (sortBy) {
        case "price-asc":
          return aFinalPrice - bFinalPrice;
        case "price-desc":
          return bFinalPrice - aFinalPrice;
        case "rating":
          return b.rating - a.rating;
        case "discount":
          const aDiscount = a.discountPercentage || 0;
          const bDiscount = b.discountPercentage || 0;
          return bDiscount - aDiscount;
        default:
          return 0;
      }
    });
  }

  const productCount = sortedProducts.length;

  return (
    <section className={styles.container}>
      <div></div>
      <div>
        <div className={styles.gridSort}>
          <p className={styles.count}>{productCount} products</p>
          <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className={styles.grid}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
