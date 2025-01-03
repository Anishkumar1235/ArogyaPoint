import React from "react";
import ProductCategory from "../Components/HomePage/ProductCategory";
import HeroSection from "../Components/HomePage/HeroSection";
import BestSelling from "../Components/HomePage/BestSelling";
import FeaturesSection from "../Components/HomePage/FeaturesSection";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <ProductCategory />
      <HeroSection />
      <BestSelling />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default HomePage;
