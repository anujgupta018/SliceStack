import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducer: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    incrementQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty -= 1;
      }
      if (item.qty <= 0) {
        state.items.filter((item) => item.id != action.payload.id);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});
export const { addToCart, incrementQty, decrementQty, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
