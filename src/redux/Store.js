import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import CartSlice from "./Slices/CartSlice";
export const Store = configureStore({
  reducer: {
    user: UserSlice,
    cart: CartSlice,
  },
});
