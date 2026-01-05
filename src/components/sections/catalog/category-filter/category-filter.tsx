"use client";

import { useState } from "react";
import styles from "./category-filter.module.css";

const CATEGORIES = [
  { slug: "furniture", name: "Furniture" },
  { slug: "home-decoration", name: "Home Decoration" },
  { slug: "kitchen-accessories", name: "Kitchen Accessories" },
  { slug: "lighting", name: "Lighting" },
] as const;

interface CategoryFilterProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export function CategoryFilter({
  selectedCategories,
  setSelectedCategories,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  return (
    <div className={styles.filters}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="category-list">
        <span className={styles.filterLabel}>Categories</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
          &#11166;
        </span>
      </button>

      <div
        id="category-list"
        className={styles.categoryGroup}
        data-open={isOpen}>
        {CATEGORIES.map(({ slug, name }) => {
          const isActive = selectedCategories.includes(slug);

          return (
            <button
              key={slug}
              type="button"
              onClick={() => toggleCategory(slug)}
              className={`${styles.categoryItem} ${
                isActive ? styles.active : ""
              }`}>
              <span className={styles.checkbox}>
                {isActive && <span className={styles.checkmark}>✓</span>}
              </span>
              <span className={styles.categoryName}>{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
