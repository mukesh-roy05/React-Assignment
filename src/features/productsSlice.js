// src/features/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import productsData from "../data/products.json"; // Import the JSON data

const initialState = {
  products: productsData.products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Add reducers here if needed in the future
  },
});

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;
