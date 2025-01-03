import React from "react";
import Header from "../Layout/Header";
import SingleEdibleOilsProduct from "../Components/EdibleOilsPage/SingleEdibleOilsProduct";
import RelatedEdibleOilsProduct from "../Components/EdibleOilsPage/RelatedEdibleOilsProduct";
import Footer from "../Layout/Footer";

const EdibleOilsSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleEdibleOilsProduct />
      <RelatedEdibleOilsProduct />
      <Footer />
    </>
  );
};

export default EdibleOilsSingleProduct;
