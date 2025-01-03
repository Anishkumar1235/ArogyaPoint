import React from "react";
import Header from "../Layout/Header";
import SingleProteinPowderProduct from "../Components/ProteinPowdersPage/SingleProteinPowderProduct";
import RelatedProteinPowderProduct from "../Components/ProteinPowdersPage/RelatedProteinPowderProduct";
import Footer from "../Layout/Footer";

const ProteinPowderSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleProteinPowderProduct />
      <RelatedProteinPowderProduct />
      <Footer />
    </>
  );
};

export default ProteinPowderSingleProduct;
