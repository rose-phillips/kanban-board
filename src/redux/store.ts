import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./ItemSlice";

const store = configureStore({
  reducer: {
    item: listReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
