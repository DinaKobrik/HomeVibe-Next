"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./sort-filter.module.css";

type SortOption = "price-asc" | "price-desc" | "rating" | "discount" | null;

interface SortFilterProps {
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
}

const SORT_OPTIONS = [
  { value: null, label: "default" },
  { value: "price-asc", label: "price: Low to High" },
  { value: "price-desc", label: "price: High to Low" },
  { value: "rating", label: "rating" },
  { value: "discount", label: "discount" },
] as const;

export default function SortFilter({ sortBy, setSortBy }: SortFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || "Default";

  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortFilter} ref={containerRef}>
        <span className={styles.filterLabel}>Sort by</span>

        <div className={styles.customSelect}>
          <button
            type="button"
            className={`${styles.selectTrigger} ${
              isOpen ? styles.triggerOpen : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.selectedText}>{currentLabel}</span>
            <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
              &#11166;
            </span>
          </button>

          <ul
            className={`${styles.optionsList} ${isOpen ? styles.visible : ""}`}>
            {SORT_OPTIONS.map(({ value, label }, index) => (
              <li key={value ?? "default"}>
                <button
                  type="button"
                  className={`${styles.option} ${
                    index === SORT_OPTIONS.length - 1 ? styles.lastOption : ""
                  }`}
                  onClick={() => {
                    setSortBy(value);
                    setIsOpen(false);
                  }}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
