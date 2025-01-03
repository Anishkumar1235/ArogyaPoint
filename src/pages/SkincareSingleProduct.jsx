import React from "react";
import Header from "../Layout/Header";
import SingleSkincareProduct from "../Components/SkincarePage/SingleSkincareProduct";
import RelatedSkincareProduct from "../Components/SkincarePage/RelatedSkincareProduct";
import Footer from "../Layout/Footer";

const SkincareSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleSkincareProduct />
      <RelatedSkincareProduct />
      <Footer />
    </>
  );
};

export default SkincareSingleProduct;
