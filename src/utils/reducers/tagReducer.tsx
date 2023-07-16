import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  tags: [],
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    populateTags: (state, action) => {
      const { payload } = action;
      state.tags = [...payload];
    },
  },
});

export const { populateTags } = tagSlice.actions;
export default tagSlice.reducer;
