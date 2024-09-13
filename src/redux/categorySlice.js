import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_STORE_API_BASE_URL;

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("getcategory", async () => {
  const response = await fetch(`${apiUrl}/products/categories`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      // state.categories.push(action.payload);// önceki verileri tutar üzerine ekler
      state.categories = action.payload; //  önceki verileri yenileri ile değiştirerek ekler
    });
  },
});

//! export const {} = categorySlice.actions;  sabit değişkenler üzerinde işlem yapmadıgımız için reducer kısmına birşey yazmadık extrareducer içinse direkt ulaşım saglayabılıyoruz
export default categorySlice.reducer;
