import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./reducer/bookmarkReducer";

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});
