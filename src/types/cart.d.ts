import { MenuItem } from "../types/menuItem";
import { OrderData } from "./order";

export interface CartState {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  incrementQuantity: (itemId: MenuItem["id"]) => void;
  decrementQuantity: (itemId: MenuItem["id"]) => void;
  removeFromCart: (itemId: MenuItem["id"]) => void;
  prepareOrderData: (cart: CartItem[]) => OrderData;
  resetCart: () => void;
}

export interface CartItem {
  item: MenuItem;
  amount: number;
}
