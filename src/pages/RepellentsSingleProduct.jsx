import React from "react";
import Header from "../Layout/Header";
import SingleRepellentsProduct from "../Components/RepellentsPage/SingleRepellentsProduct";
import RelatedRepellentsProduct from "../Components/RepellentsPage/RelatedRepellentsProduct";
import Footer from "../Layout/Footer";

const RepellentsSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleRepellentsProduct />
      <RelatedRepellentsProduct />
      <Footer />
    </>
  );
};

export default RepellentsSingleProduct;
