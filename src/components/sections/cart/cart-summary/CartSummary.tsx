"use client";

import { Button } from "@/components/ui";
import styles from "./cart-summary.module.css";

interface CartSummaryProps {
  itemCount: number;
  subtotal: number;
}

export default function CartSummary({ itemCount, subtotal }: CartSummaryProps) {
  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Order Summary</h2>

      <div className={styles.row}>
        <span>Items ({itemCount})</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <div className={styles.total}>
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Button variant="primary" className={styles.checkout}>
        Proceed to Checkout
      </Button>
    </div>
  );
}
