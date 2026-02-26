"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import styles from "./cart-items.module.css";
import { CartItem } from "@/types/cart";
import { CartProduct } from "@/types/cart";

interface CartItemsProps {
  cartItems: CartItem[];
  productsMap: Record<number, CartProduct>;
  loading: boolean;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

export default function CartItems({
  cartItems,
  productsMap,
  loading,
  updateQuantity,
  removeItem,
}: CartItemsProps) {
  if (loading) {
    return <div className={styles.loading}>Loading cart...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your cart is empty</h2>
        <Button href="/catalog">Start Shopping</Button>
      </div>
    );
  }

  return (
    <div className={styles.cartItems}>
      {cartItems.map((item) => {
        const product = productsMap[item.id];
        if (!product) return null;

        return (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemImage}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={70}
                height={70}
                className={styles.thumbnail}
              />
            </div>

            <div className={styles.itemInfo}>
              <h3 className={styles.itemTitle}>{product.title}</h3>
              <p className={styles.itemTotal}>
                ${(product.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className={styles.itemAction}>
              <button
                className={styles.removeIcon}
                onClick={() => removeItem(item.id)}>
                &#10006;
              </button>
              <div className={styles.quantity}>
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}>
                  &minus;
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <button
                className={styles.remove}
                onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
