import React from "react";
import product1 from "./img/l1.jpeg"; // Update with your actual image paths
import product2 from "./img/l2.jpeg";
import product3 from "./img/l3.jpeg";
import product4 from "./img/l1.jpeg";

const RelatedEdibleOilsProduct = () => {
  const products = [
    {
      name: "Phalada Pure & Sure | Organic Coconut Milk: 160ml",
      price: 1179,
      originalPrice: 1749,
      rating: 4,
      reviews: 286,
      category: "EXTRA VIRGIN OLIVE OILS",
      image: product1,
      sale: true,
    },
    {
      name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 Gram",
      price: 1179,
      originalPrice: 1749,
      rating: 5,
      reviews: 286,
      category: "COFFEE",
      image: product2,
      sale: true,
    },
    {
      name: "Nutriboot Okra Chips – Spiced & Stormy",
      price: 1179,
      originalPrice: 1749,
      rating: 4,
      reviews: 286,
      category: "SWEETS & SAVOURIES",
      image: product3,
      sale: false,
    },
    {
      name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 Gram",
      price: 1179,
      originalPrice: 1749,
      rating: 4,
      reviews: 286,
      category: "COFFEE",
      image: product4,
      sale: true,
    },
    {
      name: "Phalada Pure & Sure | Organic Coconut Milk: 160ml",
      price: 1179,
      originalPrice: 1749,
      rating: 4,
      reviews: 286,
      category: "EXTRA VIRGIN OLIVE OILS",
      image: product1,
      sale: true,
    },
    {
      name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 Gram",
      price: 1179,
      originalPrice: 1749,
      rating: 5,
      reviews: 286,
      category: "COFFEE",
      image: product2,
      sale: true,
    },
    {
      name: "Nutriboot Okra Chips – Spiced & Stormy",
      price: 1179,
      originalPrice: 1749,
      rating: 4,
      reviews: 286,
      category: "SWEETS & SAVOURIES",
      image: product3,
      sale: false,
    },
    {
      name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 Gram",
      price: 1179,
      originalPrice: 1749,
      rating: 4,
      reviews: 286,
      category: "COFFEE",
      image: product4,
      sale: true,
    },
  ];

  const getStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full flex justify-start">
              {product.sale && (
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Sale!
                </span>
              )}
            </div>
            <img
              className="object-cover w-full h-48 mt-2 rounded-sm"
              src={product.image}
              alt={product.name}
            />
            <div className="mt-2 flex-grow">
              <h4 className="text-sm font-medium text-gray-700 underline">
                {product.name}
              </h4>
              <div className="flex items-center mt-2">
                <div className="text-orange-500">
                  {getStars(product.rating)}
                </div>
                <p className="ml-1 text-xs text-gray-500">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <p className="text-sm font-semibold text-gray-700">
                  From: ₹{product.price}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-800">{product.category}</p>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-2 text-md text-gray-800 border border-green-600 rounded-2xl hover:bg-green-600 hover:text-white transition-colors duration-300">
                Quick view
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedEdibleOilsProduct;
