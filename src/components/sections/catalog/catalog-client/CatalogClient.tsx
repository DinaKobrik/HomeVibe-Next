"use client";

import { useState, useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ui/";
import {
  CategoryFilter,
  PriceFilter,
  DiscountFilter,
  SortFilter,
} from "@/components/sections/catalog";
import { FiltersIcon } from "./filters";
import styles from "./catalog-client.module.css";
import Pagination from "@/components/ui/pagination/pagination";
import { Product } from "@/types/product";

type SortOption = "price-asc" | "price-desc" | "rating" | "discount" | null;

interface CatalogClientProps {
  initialProducts: Product[];
}

export default function CatalogClient({ initialProducts }: CatalogClientProps) {
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [hasDiscount, setHasDiscount] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  useLayoutEffect(() => {
    const category = searchParams.get("category");
    const sale = searchParams.get("sale");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    setHasDiscount(false);
    setSortBy(null);

    if (category) {
      setSelectedCategories([category]);
    }

    if (sale === "true") {
      setHasDiscount(true);
    }
  }, [searchParams]);

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

  const totalItems = filteredProducts.length;
  const itemsPerPage = 6;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

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
          }`}>
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

      <p className={styles.count}>
        {totalItems === 0
          ? "No products found"
          : `${startItem}–${endItem} of ${totalItems} products`}
      </p>

      <div className={styles.gridSort}>
        <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className={styles.grid}>
        <Pagination
          className={styles.pagination}
          items={filteredProducts}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          renderItems={(currentItems) => (
            <>
              {currentItems.length === 0 ? (
                <p className={styles.empty}>No products found</p>
              ) : (
                currentItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </>
          )}
        />
      </div>
    </section>
  );
}
