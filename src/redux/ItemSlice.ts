import { createSlice } from "@reduxjs/toolkit";
import type { ItemTypes } from "../types";

const itemSlice = createSlice({
  name: "items",
  initialState: { items: [] as ItemTypes[] },
  reducers: {
    addItem: (state, action: { payload: ItemTypes }) => {
      state.items.push(action.payload);
    },
    setItems: (state, action: { payload: ItemTypes[] }) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, setItems } = itemSlice.actions;
export default itemSlice.reducer;
