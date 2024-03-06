import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartState } from "../types/cart";
import { OrderItem } from "../types/order";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) => {
        set((state) => {
          const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.item.id === item.id); // Check if menu item exists in cart

          if (existingItemIndex !== -1) {
            // If exact menu item exists in cart, update amount
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].amount++;

            return { cart: updatedCart };
          } else {
            // If exact menu item doesn't exist, add menu item and amount to cart as an object
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
      prepareOrderData: (cart) => {
        const orderData: OrderItem[] = [];

        cart.forEach((cartItem) => {
          // Split cart items into individual items based on quantity
          for (let i = 0; i < cartItem.amount; i++) {
            orderData.push({
              name: cartItem.item.title,
              price: cartItem.item.price,
            });
          }
        });

        return { details: { order: orderData } };
      },
    }),
    {
      name: "cartStorage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
