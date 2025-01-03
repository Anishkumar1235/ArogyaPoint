import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import ContactPage from "../src/pages/ContactPage";
import AboutPage from "../src/pages/AboutPage";
import PrivacyPage from "../src/pages/PrivacyPage";
// import ProductDetails from "../src/pages/SingleBestSelling/ProductDetails";
import Category from "./pages/Category";
import SingleProduct from "./Components/CategoryComponets/SingleProduct";
import SingleRelatedProduct from "./Components/SingleProduct/SingleRelatedProduct";
// import RelatedProducts from "./Components/SingleProduct/RelatedProduct";
import CartPage from "./pages/CartPage";
import MyAccountPage from "./pages/MyAccountPage";
import SearchResults from "./pages/SearchResults";
import SingleProductBuy from "./pages/SingleProductBuy";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/category/:subcategoryId" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/related-products/:id" element={<SingleRelatedProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/single-product-buy/:id" element={<SingleProductBuy />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
