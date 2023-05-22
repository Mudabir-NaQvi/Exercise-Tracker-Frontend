import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],

};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUsers } = userSlice.actions;
