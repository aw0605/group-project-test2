import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import heartReducer from "../slice/heartSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  likes: heartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
});
