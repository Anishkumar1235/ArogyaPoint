import { configureStore } from "@reduxjs/toolkit";
import categoriesSubCategoriesSlice from "./slices/categories";
import cartReducer from "./slices/addToCart";
import wishlistItemsReducer from "./slices/wishlistSlice";
import getAllProductsReducer from "./slices/productSlice";
import changePasswordReducer from "./slices/changePassword";
import userReducer from "./slices/authUserSlice";
import relatedProductsReducer from "./slices/relatedProductSlice";


const store = configureStore({
  reducer: {
    categories: categoriesSubCategoriesSlice,
    cartItems: cartReducer,
    wishlistItems: wishlistItemsReducer,
    products: getAllProductsReducer,
    relatedProducts: relatedProductsReducer,
    changePassword: changePasswordReducer,
    user: userReducer,
  },
});

export default store;
