import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartState } from "../types/cart";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) => {
        set((state) => {
          const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.item.id === item.id); // Check if menu item exists in cart

          if (existingItemIndex !== -1) {
            // If menu item exists in cart, update amount
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].amount++;

            return { cart: updatedCart };
          } else {
            // If menu item doesn't exist, add menu item and amount to cart as an object
            return { cart: [...state.cart, { item, amount: 1 }] };
          }
        });
      },
      incrementQuantity: (itemId) => {
        set((state) => ({
          cart: state.cart.map((cartItem) =>
            cartItem.item.id === itemId ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
          ),
        }));
      },
      decrementQuantity: (itemId) => {
        set((state) => ({
          cart: state.cart.map((cartItem) =>
            cartItem.item.id === itemId && cartItem.amount > 1 ? { ...cartItem, amount: cartItem.amount - 1 } : cartItem
          ),
        }));
      },
      removeFromCart: (itemId) => {
        set((state) => ({
          cart: state.cart.filter((cartItem) => cartItem.item.id !== itemId),
        }));
      },
    }),
    {
      name: "cartStorage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);