import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          qty: 1,
        });
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
        if (item.qty > 1) {
          item.qty -= 1;
        }
      } else {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      }
    },
    clearCart: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);
    },
  },
});
export const { addToCart, incrementQty, decrementQty, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
