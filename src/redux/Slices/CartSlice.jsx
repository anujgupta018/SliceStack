import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducer: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
