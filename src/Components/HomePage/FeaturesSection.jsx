import React from "react";
import PaymentImg from "./FeatureImg/Online.jpg";
import ShippingImg from "./FeatureImg/shipping.jpg";
import ChemicalImg from "./FeatureImg/chemical.jpg";
import NaturalImg from "./FeatureImg/natural.jpg";

const features = [
  {
    icon: PaymentImg,
    text: "100% Secure Online payments",
  },
  {
    icon: ShippingImg,
    text: "Certified Shipping Across India Brands",
  },
  {
    icon: ChemicalImg,
    text: "Sustainable Chemical free consumption IN and ON your body.",
  },
  {
    icon: NaturalImg,
    text: "NaturalEat local, consume local, closer to nature.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-10 mt-10">
      <div className="flex flex-wrap justify-around items-center md:justify-between lg:justify-around">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-8 md:w-1/3 lg:w-1/4 p-4"
          >
            <img
              src={feature.icon}
              alt="Feature Icon"
              className="w-16 h-16 mb-4"
            />
            <p className="text-center text-gray-700 whitespace-normal w-40">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
