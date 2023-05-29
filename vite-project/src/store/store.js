import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import activitySlice from "../features/activitySlice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import {persistCombineReducers} from "redux-persist";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  storage,
}



const reducer = combineReducers({
  users: userSlice,
  activities: activitySlice,
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
