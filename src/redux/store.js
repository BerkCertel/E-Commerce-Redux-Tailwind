import { configureStore } from "@reduxjs/toolkit";
import categorSlice from "./categorySlice.js";
import productsSlice from "./productSlice.js";
import cartSlice from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    categories: categorSlice,
    products: productsSlice,
    carts: cartSlice,
  },
});
