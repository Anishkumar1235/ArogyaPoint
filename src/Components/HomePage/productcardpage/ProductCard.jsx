import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addItemWishlist,
  fetchWishlistItems,
  removeItemFromWishlist,
} from "../../../redux/slices/wishlistSlice";
import { toast } from "react-toastify";
import loveIcons from "../../../assets/heart-red-svgrepo-com.svg";

const ProductCard = ({ product, handleProductClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const wishlistItems = useSelector(
    (state) => state.wishlistItems.wishlistItems
  );

  useEffect(() => {
    dispatch(fetchWishlistItems());
  }, [dispatch]);

  //! Check if the product is already in the wishlist
  useEffect(() => {
    const productInWishlist = wishlistItems.some(
      (item) => item?.product?._id === product._id
    );
    setIsAddedToWishlist(productInWishlist);
  }, [wishlistItems, product._id]);

  const handleAddToWishlist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to add items to your wishlist.");
      navigate("/login");
      return;
    }

    dispatch(addItemWishlist({ productId: product._id }))
      .unwrap()
      .then(() => {
        toast.success("Product added to wishlist.");
        setIsAddedToWishlist(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add product to wishlist.");
      });
  };

  const handleRemoveFromWishlist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to remove items from your wishlist.");
      navigate("/login");
      return;
    }

    dispatch(removeItemFromWishlist(product._id))
      .unwrap()
      .then(() => {
        toast.success("Product removed from wishlist.");
        setIsAddedToWishlist(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to remove product from wishlist.");
      });
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="relative">
        {product.onSale && (
          <span className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs rounded-br-lg">
            Sale!
          </span>
        )}
        {/* Adjusted to use product.images for dynamic image loading */}
        <img
          onClick={() => handleProductClick(product)}
          src={product.images[0]?.url || product.image}
          alt={product.name}
          className="w-44 h-44 items-center ml-8 object-cover rounded-lg"
        />
        <div className="absolute top-0 right-0 p-4 text-red-500 hover:text-red-700">
          {isAddedToWishlist ? (
            <img
              src={loveIcons}
              alt="Added to Wishlist"
              className="w-6 h-6 cursor-pointer"
              onClick={handleRemoveFromWishlist}
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer"
              onClick={handleAddToWishlist}
            />
          )}
        </div>
      </div>
      <h3 className="mt-4 font-semibold">{product.name}</h3>
      <div className="flex items-center my-2">
        <span className="text-yellow-500">★★★★★</span>
        <span className="ml-2 text-gray-500">({product.reviews} Reviews)</span>
      </div>
      <div className="text-lg font-bold">
        From: ₹{product.price}{" "}
        <span className="line-through text-gray-500">
          ₹{product.regularprice || product.originalPrice}
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-1">
        {product.category?.name || product.category}
      </p>
      <button className="mt-4 w-full text-black py-2 rounded-xl border border-[#8BC242] hover:bg-[#f7f7f7]" onClick={() => handleProductClick(product)}>
        Quick view
      </button>
    </div>
  );
};

export default ProductCard;
