import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleBookmark(state, action) {
      const recipe = action.payload;
      const index = state.items.findIndex(
        (item) => item.RCP_SEQ === recipe.RCP_SEQ
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(recipe);
      }
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
