"use client";

import { useState, useEffect, useRef } from "react";
import { ProductCard } from "@/components/ui/";
import {
  CategoryFilter,
  PriceFilter,
  DiscountFilter,
  SortFilter,
} from "@/components/sections/catalog";
import { FiltersIcon } from "./filters";
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [hasDiscount, setHasDiscount] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setFiltersOpen(false);
      }
    };

    if (filtersOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filtersOpen]);

  const currentPrice = (product: Product): number => product.price;

  let filteredProducts = initialProducts.filter((product) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    )
      return false;

    const price = currentPrice(product);

    if (minPrice && price < Number(minPrice)) return false;
    if (maxPrice && price > Number(maxPrice)) return false;

    if (hasDiscount && !product.discountPercentage) return false;

    return true;
  });

  if (sortBy) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const aPrice = currentPrice(a);
      const bPrice = currentPrice(b);

      switch (sortBy) {
        case "price-asc":
          return aPrice - bPrice;
        case "price-desc":
          return bPrice - aPrice;
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

  const activeCount = filteredProducts.length;

  return (
    <section className={styles.container}>
      <div className={styles.emptyItem}></div>

      <div className={styles.filtersWrapper}>
        <button
          className={styles.mobileFilterToggle}
          onClick={() => setFiltersOpen(!filtersOpen)}>
          <FiltersIcon />
          <span className={styles.filtersText}>Filters</span>
        </button>

        <div
          className={`${styles.filters} ${
            filtersOpen ? styles.filtersOpen : ""
          }`}
          ref={filtersRef}>
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          <DiscountFilter
            hasDiscount={hasDiscount}
            setHasDiscount={setHasDiscount}
          />
        </div>
      </div>

      <p className={styles.count}>{activeCount} products</p>

      <div className={styles.gridSort}>
        <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className={styles.grid}>
        {filteredProducts.length === 0 ? (
          <p className={styles.empty}>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
