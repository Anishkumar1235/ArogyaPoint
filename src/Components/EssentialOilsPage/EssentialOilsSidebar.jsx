import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const EssentialOilsSidebar = ({
  priceRange,
  handleMaxPriceChange,
  selectedRatings,
  onRatingChange,
  selectedDiscounts,
  onDiscountChange,
  selectedAvailability,
  onAvailabilityChange,
  onClearFilters,
}) => {
  // State for managing each dropdown
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  const toggleDropdown = (filter) => {
    switch (filter) {
      case "price":
        setIsPriceOpen(!isPriceOpen);
        break;
      case "rating":
        setIsRatingOpen(!isRatingOpen);
        break;
      case "discount":
        setIsDiscountOpen(!isDiscountOpen);
        break;
      case "availability":
        setIsAvailabilityOpen(!isAvailabilityOpen);
        break;
      default:
        break;
    }
  };

  const handleAvailabilityChange = (availability) => {
    onAvailabilityChange(availability);
  };

  const handleClearFilters = () => {
    // Call the onClearFilters function passed from Main2
    onClearFilters();
  };

  return (
    <>
      <div className="p-4 bg-white lg:w-64 md:w-56 sm:w-full ml-2 mt-16 rounded-md">
        {/* Filters Header with Clear Filters Button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button
            onClick={handleClearFilters}
            className="text-sm text-blue-500 hover:underline"
          >
            Clear Filters
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-500 my-4" />

        {/* Price Filter */}
        <div className="mb-4">
          <button
            onClick={() => toggleDropdown("price")}
            className="w-full text-left text-sm font-medium md:text-base flex items-center justify-between"
          >
            Price Range
            <i
              className={`fa ${
                isPriceOpen ? "fa-chevron-up" : "fa-chevron-down"
              } ml-2`}
            ></i>
          </button>
          <div
            className={`mt-2 transition-all duration-300 ease-in-out ${
              isPriceOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="relative">
              <input
                type="range"
                min="1"
                max="2000"
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
                className="w-full h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-sm mt-2 md:text-base">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                className="w-16 p-1 border border-gray-300 rounded text-sm md:text-base"
                placeholder={`₹${priceRange[0]}`}
                readOnly
              />
              <span className="text-sm md:text-base">-</span>
              <input
                type="text"
                className="w-16 p-1 border border-gray-300 rounded text-sm md:text-base"
                placeholder={`₹${priceRange[1]}`}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <button
            onClick={() => toggleDropdown("rating")}
            className="w-full text-left text-sm font-medium md:text-base flex items-center justify-between"
          >
            Rating
            <i
              className={`fa ${
                isRatingOpen ? "fa-chevron-up" : "fa-chevron-down"
              } ml-2`}
            ></i>
          </button>
          <div
            className={`mt-2 transition-all duration-300 ease-in-out ${
              isRatingOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {["5", "4", "3", "2", "1"].map((star) => (
                <label
                  key={star}
                  className="flex items-center space-x-2 text-sm md:text-base"
                >
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(Number(star))}
                    onChange={() => onRatingChange(Number(star))}
                    className="form-checkbox"
                  />
                  <span className="flex items-center space-x-1">
                    {[...Array(Number(star))].map((_, i) => (
                      <i key={i} className="fa fa-star text-orange-500"></i>
                    ))}
                  </span>
                  <span> & Up</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Discount Filter */}
        <div className="mb-4">
          <button
            onClick={() => toggleDropdown("discount")}
            className="w-full text-left text-sm font-medium md:text-base flex items-center justify-between"
          >
            Discount
            <i
              className={`fa ${
                isDiscountOpen ? "fa-chevron-up" : "fa-chevron-down"
              } ml-2`}
            ></i>
          </button>
          <div
            className={`mt-2 transition-all duration-300 ease-in-out ${
              isDiscountOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {[
                "10% or more",
                "20% or more",
                "30% or more",
                "40% or more",
                "50% or more",
                "60% or more",
              ].map((discount) => (
                <label
                  key={discount}
                  className="flex items-center space-x-2 text-sm md:text-base"
                >
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.includes(discount)}
                    onChange={() => onDiscountChange(discount)}
                    className="form-checkbox"
                  />
                  <span>{discount}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Availability Filter */}
        <div>
          <button
            onClick={() => toggleDropdown("availability")}
            className="w-full text-left text-sm font-medium md:text-base flex items-center justify-between"
          >
            Availability
            <i
              className={`fa ${
                isAvailabilityOpen ? "fa-chevron-up" : "fa-chevron-down"
              } ml-2`}
            ></i>
          </button>
          <div
            className={`mt-2 transition-all duration-1000 ease-in-out ${
              isAvailabilityOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {["In Stock", "Out of Stock"].map((availability) => (
                <label
                  key={availability}
                  className="flex items-center space-x-2 text-sm md:text-base"
                >
                  <input
                    type="checkbox"
                    checked={selectedAvailability.includes(availability)}
                    onChange={() => handleAvailabilityChange(availability)}
                    className="form-checkbox"
                  />
                  <span>{availability}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Dotted Line */}
        <div className="border-t border-gray-500 border-dotted my-4"></div>
      </div>
    </>
  );
};

export default EssentialOilsSidebar;
