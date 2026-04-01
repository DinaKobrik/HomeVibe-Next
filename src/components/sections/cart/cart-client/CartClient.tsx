"use client";

import { useState, useEffect, useMemo } from "react";
import { CartItem, CartProduct } from "@/types/cart";
import { getProductById } from "@/lib/data/products";

import { CartSummary, CartItems } from "@/components/sections/cart";
import styles from "./cart-client.module.css";
import Pagination from "@/components/ui/pagination/pagination";

export default function CartClient() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [productsMap, setProductsMap] = useState<Record<number, CartProduct>>(
    {},
  );
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    let initialCart: CartItem[] = [];

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) initialCart = parsed;
      } catch {}
    }

    if (initialCart.length === 0) {
      initialCart = [
        { id: 12, quantity: 2 },
        { id: 13, quantity: 1 },
        { id: 14, quantity: 4 },
        { id: 15, quantity: 1 },
      ];
      localStorage.setItem("cart", JSON.stringify(initialCart));
    }

    setCartItems(initialCart);
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      if (cartItems.length === 0) {
        setProductsMap({});
        setLoading(false);
        return;
      }

      setLoading(true);

      const neededIds = cartItems
        .filter((item) => !productsMap[item.id])
        .map((item) => item.id);

      if (neededIds.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const fetched = await Promise.all(
          neededIds.map(async (id) => {
            const prod = await getProductById(id);
            if (prod) {
              const cartItem = cartItems.find((item) => item.id === id);
              return { ...prod, quantity: cartItem?.quantity || 1 };
            }
            return null;
          }),
        );

        const newMap = fetched.reduce(
          (acc, prod) => {
            if (prod) acc[prod.id] = prod;
            return acc;
          },
          {} as Record<number, CartProduct>,
        );

        setProductsMap((prev) => ({ ...prev, ...newMap }));
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      );

      localStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
      return updated;
    });

    setProductsMap((prev) => ({
      ...prev,
      [id]: prev[id]
        ? { ...prev[id], quantity: Math.max(1, prev[id].quantity + delta) }
        : prev[id],
    }));
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
      return updated;
    });

    setProductsMap((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: removed, ...rest } = prev;
      return rest;
    });
  };

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const prod = productsMap[item.id];
        return sum + (prod ? prod.price * item.quantity : 0);
      }, 0),
    [cartItems, productsMap],
  );

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const currentItems = cartItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className={styles.cartContent}>
      <CartItems
        cartItems={currentItems}
        productsMap={productsMap}
        loading={loading}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />

      <CartSummary itemCount={itemCount} subtotal={subtotal} />

      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <Pagination
            className={styles.pagination}
            items={cartItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            renderItems={(currentItems) => (
              <>
                {currentItems.length === 0 ? (
                  <p className={styles.empty}>No items in cart</p>
                ) : (
                  currentItems.map((item) => <div key={item.id}></div>)
                )}
              </>
            )}
          />
        </div>
      )}
    </div>
  );
}
