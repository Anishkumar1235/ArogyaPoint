import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  products: [], // Will hold the fetched product(s)
  error: null,
};

// Async action to fetch a single product by its ID
export const fetchSingleCartProduct = createAsyncThunk(
  "cart/fetchSingleCartProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://arogya-point-backend.onrender.com/api/v1/products/${productId}`
      );
      return response.data.data; // Assuming the data contains the product details
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all products
export const getAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://arogya-point-backend.onrender.com/api/v1/products/"
      );
      return response.data.data;
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to fetch data");
      return rejectWithValue(error.response?.data?.error || "Fetch failed");
    }
  }
);

const getAllProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSingleCartProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleCartProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Storing single product details
      })
      .addCase(fetchSingleCartProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getAllProductSlice.reducer;
