"use client";

import { useState, useEffect, useCallback } from "react";

interface CartItem {
  id: number;
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setCart(parsed);
        }
      } catch (err) {
        console.error("Failed to parse cart from localStorage:", err);
      }
    }
  }, []);

  const getQuantity = useCallback(
    (productId: number): number => {
      const item = cart.find((i) => i.id === productId);
      return item?.quantity ?? 0;
    },
    [cart],
  );

  const updateItemQuantity = useCallback(
    (productId: number, newQuantity: number) => {
      setCart((prevCart) => {
        const existingIndex = prevCart.findIndex(
          (item) => item.id === productId,
        );

        let updatedCart: CartItem[];

        if (newQuantity <= 0) {
          updatedCart = prevCart.filter((item) => item.id !== productId);
        } else if (existingIndex !== -1) {
          updatedCart = prevCart.map((item, index) =>
            index === existingIndex ? { ...item, quantity: newQuantity } : item,
          );
        } else {
          updatedCart = [...prevCart, { id: productId, quantity: newQuantity }];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        window.dispatchEvent(new Event("cartUpdated"));

        return updatedCart;
      });
    },
    [],
  );

  const increment = (productId: number) => {
    const current = getQuantity(productId);
    updateItemQuantity(productId, current + 1);
  };

  const decrement = (productId: number) => {
    const current = getQuantity(productId);
    if (current > 0) {
      updateItemQuantity(productId, current - 1);
    }
  };

  const addToCart = (productId: number) => {
    updateItemQuantity(productId, 1);
  };

  const removeFromCart = (productId: number) => {
    updateItemQuantity(productId, 0);
  };

  return {
    cart,
    getQuantity,
    increment,
    decrement,
    addToCart,
    removeFromCart,
    isInCart: (productId: number) => getQuantity(productId) > 0,
  };
}
