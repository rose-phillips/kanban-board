import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./ItemSlice";

const store = configureStore({
  reducer: {
    item: listReducer,
  },
});

export default store;
