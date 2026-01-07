"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./discount-filter.module.css";

interface DiscountFilterProps {
  hasDiscount: boolean;
  setHasDiscount: (value: boolean) => void;
}

export function DiscountFilter({
  hasDiscount,
  setHasDiscount,
}: DiscountFilterProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const saleParam = searchParams.get("sale");
    if (saleParam === "true") {
      setHasDiscount(true);
    }
  }, [searchParams, setHasDiscount]);

  return (
    <div className={styles.discountFilter}>
      <span className={styles.filterLabel}>With discount only</span>
      <div className={styles.switchWrapper}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={hasDiscount}
            onChange={(e) => setHasDiscount(e.target.checked)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
