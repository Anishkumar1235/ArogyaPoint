import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRelatedProducts = createAsyncThunk(
  "relatedProducts/fetchRelatedProducts",
  async () => {
    const response = await axios.get("https://arogya-point-backend.onrender.com/api/v1/products/related/66d58c2bf62672e15578468e"); // Update the URL to the correct one
    return response.data.data;
  }
);

const relatedProductsSlice = createSlice({
  name: "relatedProducts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default relatedProductsSlice.reducer;
