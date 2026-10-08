import { configureStore } from "@reduxjs/toolkit";
import gisReducer from "@/features/gis/gisSlice";

export const store = configureStore({
  reducer: {
    gis: gisReducer,
  },
});