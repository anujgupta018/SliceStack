import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    phone: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    clearUser: (state, action) => {
      state.name = "";
      state.phone = "";
    },
  },
});
export const { setUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
