import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import activitySlice from "../features/activitySlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    activities: activitySlice,
  },
});

export default store;
