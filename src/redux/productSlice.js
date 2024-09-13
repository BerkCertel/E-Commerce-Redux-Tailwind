import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
const apiUrl = import.meta.env.VITE_STORE_API_BASE_URL;

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: null,
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch(`${apiUrl}/products`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk(
  "getCategoryProducts",
  async (category) => {
    const response = await fetch(`${apiUrl}/products/category/${category}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  }
);

export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(`${apiUrl}/products/${id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      })

      // Details Sayfası için

      .addCase(getDetailProduct.pending, (state) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state) => {
        state.productDetailStatus = STATUS.FAIL;
      })

      // Category products için

      .addCase(getCategoryProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
