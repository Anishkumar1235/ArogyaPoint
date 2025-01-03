import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  categories: [],
  products: [],
  error: null,
};

export const fetchCategoriesSubCategory = createAsyncThunk(
  "categories/fetchAllCategoriesSubCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://arogya-point-backend.onrender.com/api/v1/subcategory/"
      );
      return response.data.data;
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to fetch data");
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({ category, subcategory }, { rejectWithValue }) => {
    try {
      // Validate if category is provided, otherwise skip it in the query
      let url = "https://arogya-point-backend.onrender.com/api/v1/products";

      if (category || subcategory) {
        const params = new URLSearchParams();
        if (category) params.append("category", category);
        if (subcategory) params.append("subcategory", subcategory);

        url += `?${params.toString()}`;
      }

      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://arogya-point-backend.onrender.com/api/v1/products/${productId}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categoriesSubCategoriesSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesSubCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesSubCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesSubCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSubCategoriesSlice.reducer;
