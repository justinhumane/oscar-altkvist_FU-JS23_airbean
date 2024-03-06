import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserState } from "../types/user";

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        name: "",
        email: "",
        orderHistory: [],
        gdpr: false,
      },
      register: (user) => {
        set(() => {
          return { user: user };
        });
      },
      addOrderToHistory: (order) => {
        set((state) => {
          return {
            user: {
              ...state.user,
              orderHistory: [...state.user.orderHistory, order],
            },
          };
        });
      },
    }),
    {
      name: "userStorage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
