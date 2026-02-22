"use client";

import { useState } from "react";
import styles from "./price-filter.module.css";

interface PriceFilterProps {
  minPrice: string;
  maxPrice: string;
  setMinPrice: (value: string) => void;
  setMaxPrice: (value: string) => void;
}

export default function PriceFilter({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: PriceFilterProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.priceFilter}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="price-inputs">
        <span className={styles.filterLabel}>Price</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
          &#11166;
        </span>
      </button>

      <div
        id="price-inputs"
        className={styles.inputsWrapper}
        data-open={isOpen}>
        <div className={styles.priceInputs}>
          <div className={styles.inputWrapper}>
            <input
              type="number"
              placeholder="from"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className={styles.priceInput}
            />
            <span className={styles.currency}>$</span>
          </div>

          <span className={styles.priceSeparator}>—</span>

          <div className={styles.inputWrapper}>
            <input
              type="number"
              placeholder="to"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className={styles.priceInput}
            />
            <span className={styles.currency}>$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
