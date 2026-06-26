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
    setStatus: (state, action: {payload: ItemTypes}) => {
     const { id, status } = action.payload;
      const item = state.items.find(item => item.id === id);
      item!.status = status
    }
  },
});

export const { addItem, setItems, setStatus } = itemSlice.actions;
export default itemSlice.reducer;
