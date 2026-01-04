"use client";

import { ProductCard } from "@/components/ui/";
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

interface CatalogClientProps {
  initialProducts: Product[];
}

export function CatalogClient({ initialProducts }: CatalogClientProps) {
  const productCount = initialProducts.length;

  return (
    <section className={styles.container}>
      <div></div>
      <div>
        <p className={styles.count}>{productCount} products</p>

        <div className={styles.grid}>
          {initialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
