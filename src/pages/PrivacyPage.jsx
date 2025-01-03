import React from "react";
import Header from "../Layout/Header";
import HeroSection from "../Components/HomePage/HeroSection";
import PrivacyPolicyPage from "../Components/PrivacyPolicyPage/PrivacyPolicyPage";
import Footer from "../Layout/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PrivacyPolicyPage />
      <Footer />
    </>
  );
};

export default PrivacyPage;
