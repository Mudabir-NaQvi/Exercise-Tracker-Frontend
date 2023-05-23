import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: "loading..",
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

  },
});

export default userSlice.reducer;

export const { setUsers, setCurrentUser } = userSlice.actions;
