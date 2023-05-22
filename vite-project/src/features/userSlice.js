import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
<<<<<<< HEAD
  currentUser: null,
=======

>>>>>>> 6f8638d332ab487afa5a37d1e62fd83ad88eb803
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    setCurrentUser: (state,action) => {
      state.user = action.payload;
    }
  },
});

export default userSlice.reducer;

export const { setUsers, setCurrentUser } = userSlice.actions;
