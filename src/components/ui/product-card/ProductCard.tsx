"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "./heart";
import { Star } from "./star";
import { Button } from "@/components/ui/";
import { CartIcon } from "@/components/icons/cart";
import styles from "./product-card.module.css";
import { Product } from "@/types/product";
interface CartItem {
  id: number;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (!saved) return;

    try {
      const cart: CartItem[] = JSON.parse(saved);
      const existing = cart.find((item) => item.id === product.id);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuantity(existing?.quantity ?? 0);
    } catch {}
  }, [product.id]);

  const updateCart = (newQuantity: number) => {
    const saved = localStorage.getItem("cart");
    let cart: CartItem[] = [];

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch {}
    }

    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (newQuantity <= 0) {
      if (existingIndex !== -1) {
        cart.splice(existingIndex, 1);
      }
    } else if (existingIndex !== -1) {
      cart[existingIndex] = { ...cart[existingIndex], quantity: newQuantity };
    } else {
      cart.push({ id: product.id, quantity: newQuantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setQuantity(newQuantity);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleIncrement = () => updateCart(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) {
      updateCart(quantity - 1);
    }
  };

  const hasDiscount =
    !!product.discountPercentage && product.discountPercentage > 0;
  const discountLabel = hasDiscount
    ? `-${Math.round(product.discountPercentage!)}%`
    : null;
  const originalPrice = hasDiscount
    ? Math.round((product.price * 100) / (100 - product.discountPercentage!))
    : null;

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className={styles.image}
            unoptimized
            priority={product.id <= 10}
          />

          {hasDiscount && (
            <div className={styles.discountBadge}>{discountLabel}</div>
          )}

          <div className={styles.favoriteWrapper}>
            <HeartIcon />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contentTop}>
            <span className={styles.category}>
              {product.category.replace("-", " ")}
            </span>
            <div className={styles.rating}>
              <Star />
              <span className={styles.ratingValue}>
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <h3 className={styles.title}>{product.title}</h3>

          <div className={styles.priceGroup}>
            <span className={styles.price}>$ {product.price.toFixed(2)}</span>
            {originalPrice && (
              <span className={styles.originalPrice}>$ {originalPrice}</span>
            )}
          </div>
        </div>
      </Link>

      {quantity === 0 ? (
        <Button
          variant="secondary"
          className={styles.addButton}
          onClick={() => updateCart(1)}>
          <CartIcon />
        </Button>
      ) : (
        <div className={styles.quantityControls}>
          <button className={styles.qtyBtn} onClick={handleDecrement}>
            &minus;
          </button>
          <span className={styles.qtyDisplay}>{quantity}</span>
          <button className={styles.qtyBtn} onClick={handleIncrement}>
            +
          </button>
        </div>
      )}
    </div>
  );
}
