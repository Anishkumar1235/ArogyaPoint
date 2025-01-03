import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const SingleBestSelling = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state ? location.state.product : null;

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 rounded-lg shadow-lg">
        <div className="lg:w-1/3 w-full flex flex-col items-center">
          <div className="relative">
            <FaRegHeart className="text-red-500 ml-[16rem] mt-4 text-xl" />
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-w-xs object-cover mb-4"
            />
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            <img
              className="w-16 h-16 border"
              src={product.image} // Replace this with actual thumbnail 1 URL
              alt="Thumbnail 1"
            />
            <img
              className="w-16 h-16 border"
              src={product.image} // Replace this with actual thumbnail 2 URL
              alt="Thumbnail 2"
            />
            <img
              className="w-16 h-16 border"
              src={product.image} // Replace this with actual thumbnail 3 URL
              alt="Thumbnail 3"
            />
            <img
              className="w-16 h-16 border"
              src={product.image} // Replace this with actual thumbnail 4 URL
              alt="Thumbnail 4"
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full lg:ml-8 mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-gray-500">
              ({product.reviews} User feedback)
            </span>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-4">
            ₹{product.price}
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500">20Bag/Pkt</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700">Availability: </span>
            <span className="text-green-500">In Stock</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700">Category: </span>
            <span className="text-blue-500">{product.category}</span>
          </div>
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border p-2 rounded mr-2 w-full sm:w-36 mb-2 sm:mb-0"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">
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
    </div>
  );
};

export default SingleBestSelling;
