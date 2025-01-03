import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: [],
  loading: false,
  error: null,
};

// Fetch Wishlist Items
export const fetchWishlistItems = createAsyncThunk(
  "wishlist/fetchWishlistItems",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axios.get(
        "https://arogya-point-backend.onrender.com/api/v1/wishlist/getwishlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //! Return an empty array if the wishlist is empty
      if (response.data.status === 1) {
        return [];
      }

      const wishlistItemsArray = response.data.data.items;
      return wishlistItemsArray;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Add Item to Wishlist
export const addItemWishlist = createAsyncThunk(
  "wishlist/addItemWishlist",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axios.post(
        "https://arogya-point-backend.onrender.com/api/v1/wishlist/addwishlist",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Wishlist added successfully!");

      // Assuming the API returns the entire wishlist after addition
      return response.data.data.items || [];
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to add to wishlist.");
      return rejectWithValue(error.response?.data);
    }
  }
);

// Remove Item from Wishlist
export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/removeItemFromWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      await axios.delete(
        "https://arogya-point-backend.onrender.com/api/v1/wishlist/removewishlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { productId },
        }
      );
      toast.success("Product removed from wishlist.");

      return productId; // Return product ID for removal
    } catch (error) {
      toast.error("Failed to remove product from wishlist.");
      return rejectWithValue(error.response?.data);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Wishlist Items
      .addCase(fetchWishlistItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlistItems = action.payload;
      })
      .addCase(fetchWishlistItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Item to Wishlist
      .addCase(addItemWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlistItems = action.payload; // Updating the wishlist items
      })
      .addCase(addItemWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Remove Item from Wishlist
      .addCase(removeItemFromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.product._id !== action.payload
        );
      })
      .addCase(removeItemFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
