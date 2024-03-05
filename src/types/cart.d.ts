import { MenuItem } from "../types/menuItem";

export interface CartState {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  incrementQuantity: (itemId: MenuItem["id"]) => void;
  decrementQuantity: (itemId: MenuItem["id"]) => void;
  removeFromCart: (itemId: MenuItem["id"]) => void;
}

export interface CartItem {
  item: MenuItem;
  amount: number;
}
