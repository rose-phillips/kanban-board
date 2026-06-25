import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "item",
  initialState: {
    id: "",
    name: "",
    status: "",
    selected: false,
  },
  reducers: {    
    addItem: (state, action) => {
      const { name, status } = action.payload;
      state.id = `${Math.floor(Math.random() * 10000)}`;
      state.name = name;
      state.status = status;
      state.selected = false;
    },
  },
});

export const { addItem } = listSlice.actions;
export default listSlice.reducer;
