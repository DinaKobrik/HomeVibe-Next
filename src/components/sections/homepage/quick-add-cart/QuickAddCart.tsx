"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, P } from "@/components/ui/";
import { Button } from "@/components/ui/";
import styles from "./quick-add-cart.module.css";
import { getAllProducts } from "@/lib/data/products";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { CartIcon } from "@/components/icons/cart";

export default function QuickAddCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const { getQuantity, increment, decrement, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts.slice(0, 3));
    };

    fetchProducts();
  }, []);

  const layouts = [
    { wrapperClass: styles.wrapperRight, layoutClass: styles.layoutLeft },
    { wrapperClass: styles.wrapperCenter, layoutClass: styles.layoutRight },
    { wrapperClass: styles.wrapperLeft, layoutClass: styles.layoutLeft },
  ];

  return (
    <section>
      <div className={styles.grid}>
        {products.map((product, index) => {
          const layout = layouts[index % layouts.length];
          const quantity = getQuantity(product.id);
          const isInCart = quantity > 0;

          return (
            <div
              key={product.id}
              className={`${styles.cardWrapper} ${layout.wrapperClass}`}>
              <div className={`${styles.card} ${layout.layoutClass}`}>
                <Link
                  href={`/product/${product.id}`}
                  className={styles.imageWrapper}>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className={styles.image}
                    unoptimized
                    priority={index < 3}
                  />
                </Link>

                <div className={styles.content}>
                  <div>
                    <Heading level="h2" className={styles.productTitle}>
                      {product.title}
                    </Heading>
                    <P>{product.description}</P>
                  </div>

                  <div className={styles.bottom}>
                    {isInCart ? (
                      <div className={styles.quantityControls}>
                        <button
                          onClick={() => decrement(product.id)}
                          className={styles.qtyBtn}>
                          −
                        </button>
                        <span className={styles.qtyDisplay}>{quantity}</span>
                        <button
                          onClick={() => increment(product.id)}
                          className={styles.qtyBtn}>
                          +
                        </button>
                      </div>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => addToCart(product.id)}
                        className={styles.addButton}>
                        <CartIcon />
                        Add
                      </Button>
                    )}

                    <div className={styles.priceGroup}>
                      <span className={styles.price}>
                        $ {product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
