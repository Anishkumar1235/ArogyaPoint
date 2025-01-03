import React from "react";
import Header from "../Layout/Header";
import SingleEssentialOilsProduct from "../Components/EssentialOilsPage/SingleEssentialOilsProduct";
import RelatedEssentialOilsProduct from "../Components/EssentialOilsPage/RelatedEssentialOilsProduct";
import Footer from "../Layout/Footer";

const EssentialOilsSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleEssentialOilsProduct />
      <RelatedEssentialOilsProduct />
      <Footer />
    </>
  );
};

export default EssentialOilsSingleProduct;
