import React from "react";
import Header from "../Layout/Header";
import SingleTeaProduct from "../Components/TeaPage/SingleTeaProduct";
import RelatedTeaProduct from "../Components/TeaPage/RelatedTeaProduct";
import Footer from "../Layout/Footer";

const TeaSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleTeaProduct />
      <RelatedTeaProduct />
      <Footer />
    </>
  );
};

export default TeaSingleProduct;
