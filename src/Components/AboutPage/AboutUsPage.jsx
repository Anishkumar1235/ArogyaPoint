import React from "react";
import Img1 from "./AboutImg/img1.svg";
import Img2 from "./AboutImg/img2.svg";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8">
        About <span className="text-black">Us</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Arogya Point is a market place for health and wellness products.
            It’s a team of passionate leaders who love natural wholesome food
            and non-toxic products in our day to day life which keeps all of us
            away from harmful chemicals that impacts Health & Wellness. Our goal
            is to change the way of consuming the products which is safe for our
            body and around our body. We care for cleaner, safer, healthier &
            sustainable living.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>
              It’s our pleasure to get aligned with like minded passionate
              entrepreneurs across the country catering the natural and
              sustainable products to our platform and quality is our core
              objective.
            </li>
            <li>
              We focus on products that are natural, sustainable, not easily
              available elsewhere, and enhance the well-being.
            </li>
            <li>
              For a perfect wellness, lifestyle also becomes crucial along with
              the right food. Arogya Point covers a wide range of health,
              fitness and wellness products that are verified and serves value
              addition for Health & Wellness.
            </li>
            <li>
              We aim to be a specialized market place for health & wellness
              products including services with continuous improvements in the
              product range and customer satisfaction.
            </li>
          </ul>
        </div>
        <div className="grid grid-row-2 gap-4">
          <img src={Img1} alt="Team working" className="rounded-lg shadow-lg" />
          <img src={Img2} alt="Library" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">For more information</h2>
        <p className="text-lg">Email: info@rejag.com</p>
        <p className="text-lg">Call: 7353894444 / 9902826711</p>
        <p className="text-lg">Keen to list your products in Arogya Point</p>
        <p className="text-lg">E-mail: pointarogya@gmail.com</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
