import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    phone: "",
    address: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
    },
    setNumber: (state, action) => {
      state.phone = action.payload.phone;
    },
    clearUser: (state, action) => {
      state.name = "";
      state.phone = "";
      state.address = "";
    },
    setAddress: (state, action) => {
      state.address = action.payload.address;
    },
  },
});
export const { setUser, setAddress, setNumber, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
