import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroImg from "./Hero-Img/arogyabanner.png";

const HeroSection = () => {
  const heroImages = [
    { id: 1, url: HeroImg },
    { id: 2, url: HeroImg },
    { id: 3, url: HeroImg },
  ];

  return (
    <div>
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={`Hero Image ${image.id}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
