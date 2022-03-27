import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

export const UserSlice = createSlice({
  name: "User",
  initialState: { value: initialStateValue },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },

    removeUser: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
