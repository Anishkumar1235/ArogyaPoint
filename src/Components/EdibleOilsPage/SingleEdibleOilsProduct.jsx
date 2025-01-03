import React from "react";
import { useParams } from "react-router-dom";
import M1 from "./img/l1.jpeg";
import M2 from "./img/l2.jpeg";
import M3 from "./img/l3.jpeg";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

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

const SingleEdibleOilsProduct = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const getStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-md w-auto m-2 rounded-md lg:space-x-8 p-5 lg:p-10">
      {/* Left Section - Image Gallery */}
      <div className="flex flex-col items-center mb-5 lg:mb-0">
        <FaRegHeart className="text-red-500 ml-[16rem] mt-4 text-xl" />
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-auto lg:w-72 lg:h-72 object-cover rounded-lg mb-4"
        />
        <div className="flex space-x-2">
          <img
            src={product.image}
            alt="Thumb 1"
            className="w-16 h-16 object-cover rounded-lg border"
          />
          <img
            src={product.image}
            alt="Thumb 2"
            className="w-16 h-16 object-cover rounded-lg border"
          />
          <img
            src={product.image}
            alt="Thumb 3"
            className="w-16 h-16 object-cover rounded-lg border"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex flex-col lg:w-2/3">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-yellow-500 text-sm lg:text-lg mb-2 ">
          {getStars(product.rating)} (286 User feedback)
        </p>
        <p className="text-green-600 text-2xl lg:text-2xl font-bold mb-2">
          ₹{product.price}
        </p>
        <p className="text-lg lg:text-md mb-2">20Bag/Pkt</p>
        <p className="text-lg lg:text-md mb-2">
          Availability:{" "}
          <span className="text-green-600">{product.availability}</span>
        </p>
        <p className="text-lg lg:text-xl mb-2">
          Category:{" "}
          <span className="text-blue-600 underline">{product.category}</span>
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
          <input
            type="text"
            placeholder="Enter Pincode"
            className="border p-2 rounded-lg lg:w-1/3 mb-4 lg:mb-0"
          />
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
            Check
          </button>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center">
            ADD TO CART <FaCartArrowDown className="ml-3" />
          </button>
          <button className=" text-black border-2 border-green-500 py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEdibleOilsProduct;
