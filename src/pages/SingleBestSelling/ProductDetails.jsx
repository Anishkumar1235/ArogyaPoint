import React from "react";
import Header from "../../Layout/Header";
import SingleBestSelling from "../../Components/SingleProduct/SingleBestSelling";
import RelatedProduct from "../../Components/SingleProduct/RelatedProduct";
import Footer from "../../Layout/Footer";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <SingleBestSelling />
      <RelatedProduct />
      <Footer />
    </>
  );
};

export default ProductDetails;
