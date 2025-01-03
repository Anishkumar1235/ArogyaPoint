import React from "react";
import Header from "../Layout/Header";
import SingleCoffeeProduct from "../Components/CoffeePage/SingleCoffeeProduct";
import RelatedCoffeeProduct from "../Components/CoffeePage/RelatedCoffeeProduct";
import Footer from "../Layout/Footer";

const CoffeeSingleProduct = () => {
  return (
    <>
      <Header />
      <SingleCoffeeProduct />
      <RelatedCoffeeProduct />
      <Footer />
    </>
  );
};

export default CoffeeSingleProduct;
