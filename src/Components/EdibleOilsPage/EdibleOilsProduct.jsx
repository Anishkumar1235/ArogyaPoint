import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./EdibleOilsSidebar";
import M1 from "./img/l1.jpeg";
import M2 from "./img/l2.jpeg";
import M3 from "./img/l3.jpeg";

// Sample products data
const products = [
  {
    id: "1",
    name: "Woodi Peck's Coffee – 250 Grams",
    category: "EXTRA VIRGIN OLIV OILS",
    price: 699,
    rating: 4,
    discount: "10% or more",
    availability: "In Stock",
    image: M1,
    description: "A description of the product",
  },
  {
    id: "2",
    name: "Green Tea Premium Blend – 100 Grams",
    category: "COFFEE",
    price: 799,
    rating: 5,
    discount: "20% or more",
    availability: "Out of Stock",
    image: M2,
    description: "A description of the product",
  },
  {
    id: "3",
    name: "Organic Matcha Green Tea – 50 Grams",
    category: "SWEETS SAVOURIES",
    price: 999,
    rating: 3,
    discount: "30% or more",
    availability: "In Stock",
    image: M3,
    description: "A description of the product",
  },
  {
    id: "4",
    name: "Himalayan Black Tea – 200 Grams",
    category: "COFFEE",
    price: 1999,
    rating: 4,
    discount: "40% or more",
    availability: "In Stock",
    image: M1,
    description: "A description of the product",
  },
  {
    id: "5",
    name: "Herbal Chamomile Tea – 150 Grams",
    category: "EXTRA VIRGIN OLIV OILS",
    price: 1399,
    rating: 5,
    discount: "50% or more",
    availability: "In Stock",
    image: M2,
    description: "A description of the product",
  },
  {
    id: "6",
    name: "Spiced Masala Chai – 250 Grams",
    category: "COFFEE",
    price: 1699,
    rating: 4,
    discount: "60% or more",
    availability: "Out of Stock",
    image: M3,
    description: "A description of the product",
  },
  {
    id: "7",
    name: "Earl Grey Loose Leaf Tea – 100 Grams",
    category: "SWEETS SAVOURIES",
    price: 1899,
    rating: 5,
    discount: "10% or more",
    availability: "In Stock",
    image: M1,
    description: "A description of the product",
  },
  {
    id: "8",
    name: "Jasmine Green Tea – 50 Grams",
    category: "COFFEE",
    price: 1599,
    rating: 2,
    discount: "20% or more",
    availability: "Out of Stock",
    image: M2,
    description: "A description of the product",
  },
];

const EdibleOilsProduct = () => {
  // Initial state values
  const initialPriceRange = [1, 2000];
  const initialSelectedRatings = [];
  const initialSelectedDiscounts = [];
  const initialSelectedAvailability = [];
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [selectedRatings, setSelectedRatings] = useState(
    initialSelectedRatings
  );
  const [selectedDiscounts, setSelectedDiscounts] = useState(
    initialSelectedDiscounts
  );
  const [selectedAvailability, setSelectedAvailability] = useState(
    initialSelectedAvailability
  );
  const [sortOrder, setSortOrder] = useState("Relevance");

  const handleMaxPriceChange = (e) => {
    const newValue = Math.max(Number(e.target.value), priceRange[0] + 1);
    setPriceRange([priceRange[0], newValue]);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount]
    );
  };

  const handleAvailabilityChange = (availability) => {
    setSelectedAvailability((prev) =>
      prev.includes(availability)
        ? prev.filter((a) => a !== availability)
        : [...prev, availability]
    );
  };

  const handleClearFilters = () => {
    setPriceRange(initialPriceRange);
    setSelectedRatings(initialSelectedRatings);
    setSelectedDiscounts(initialSelectedDiscounts);
    setSelectedAvailability(initialSelectedAvailability);
    setSortOrder("Relevance");
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  let filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedRatings.length === 0 ||
        selectedRatings.includes(product.rating)) &&
      (selectedDiscounts.length === 0 ||
        selectedDiscounts.includes(product.discount)) &&
      (selectedAvailability.length === 0 ||
        selectedAvailability.includes(product.availability))
  );

  if (sortOrder === "Price-Low to High") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "Price-High to Low") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  const getStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar
        priceRange={priceRange}
        handleMaxPriceChange={handleMaxPriceChange}
        selectedRatings={selectedRatings}
        onRatingChange={handleRatingChange}
        selectedDiscounts={selectedDiscounts}
        onDiscountChange={handleDiscountChange}
        selectedAvailability={selectedAvailability}
        onAvailabilityChange={handleAvailabilityChange}
        onClearFilters={handleClearFilters}
      />

      {/* Cards Section */}
      <section className="flex-1 bg-[#F1F3F6]">
        <div className="container px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full">
              <div className="text-sm tracking-widest mb-4">
                <p className="text-xl text-gray-900 font-bold">
                  Repellents Product
                </p>
              </div>
              <div className="">
                <p className="text-[0.95rem] text-gray-600">
                  Hot beverages are the perfect way to warm up during the
                  beginning of the day and winter season. Check out our
                  collection of different types of tea, coffee, and other health
                  drinks that boost your immune system and soothe your mind and
                  body.
                </p>
              </div>
              {/* Sort and Pagination */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                <p className="text-[1rem] text-gray-600 font-semibold">
                  Showing 1-{filteredProducts.length} of {products.length}{" "}
                  Products
                </p>
                <div className="flex items-center border-[1px] bg-white border-gray-400 rounded-sm h-12 w-full sm:w-[16rem] mt-2 sm:mt-0">
                  <p className="text-gray-800 rounded-md ml-2">Sort By :</p>
                  <select
                    className="ml-2 font-medium text-gray-800 border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    value={sortOrder}
                    onChange={handleSortChange}
                  >
                    <option value="Relevance">Relevance</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Price-Low to High">Price-Low to High</option>
                    <option value="Price-High to Low">Price-High to Low</option>
                    <option value="Newest First">Newest First</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* Product Card */}
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col w-full max-w-xs mx-auto p-4 rounded-lg bg-white shadow-md"
                  >
                    <div className="w-full flex justify-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Sale!
                      </span>
                    </div>
                    <Link to={`/edibleoils-products/${product.id}`}>
                      <img
                        className="object-cover w-[120px] h-[100px] mx-auto mt-2 rounded-sm"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="flex flex-col mt-2">
                        <h4 className="text-sm font-medium text-gray-700 text-left underline">
                          {product.name}
                        </h4>
                        <div className="flex items-center mt-2 text-left">
                          <div className="text-orange-500">
                            {getStars(product.rating)}
                          </div>
                          <p className="ml-1 text-xs text-gray-500">
                            ({product.rating * 50} Reviews)
                          </p>
                        </div>
                        <div className="mt-2 text-left text-gray-700 flex gap-2">
                          <p className="text-sm font-semibold">
                            From: ₹{product.price}
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            ₹{product.price + 250}
                          </p>
                        </div>
                        <p className="mt-4 text-sm text-gray-800 text-left">
                          {product.category}
                        </p>
                      </div>
                    </Link>
                    <div className="flex justify-center mt-4">
                      <button className="px-12 py-2 text-md mt-2 text-gray-800 border border-green-600 rounded-2xl">
                        Quick view
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdibleOilsProduct;
