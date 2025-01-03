import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroSection from "../Components/HomePage/HeroSection";
import AboutUsPage from "../Components/AboutPage/AboutUsPage";

const AboutPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsPage />
      <Footer />
    </>
  );
};

export default AboutPage;
