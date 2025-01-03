import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlistItems,
  removeItemFromWishlist,
} from "../../redux/slices/wishlistSlice";
import W1 from "./img/l1.jpeg"; // Placeholder image
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItemToCart } from "../../redux/slices/addToCart";

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(
    (state) => state.wishlistItems.wishlistItems
  );
  const loading = useSelector((state) => state.wishlistItems.loading);
  const error = useSelector((state) => state.wishlistItems.error);

  useEffect(() => {
    dispatch(fetchWishlistItems());
  }, [dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromWishlist(productId))
      .unwrap()
      .then(() => {
        toast.success("Product removed from wishlist.");
      })
      .catch((error) => {
        toast.error("Failed to remove item from wishlist.");
        console.error(error);
      });
  };

  const handleAddToCart = (productId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const quantity = 1; // Default quantity is 1
    dispatch(addItemToCart({ productId, quantity }))
      .unwrap()
      .then(() => {
        toast.success("Product added to cart successfully.");
      })
      .catch((error) => {
        toast.error("Failed to add product to cart.");
        console.error(error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl text-gray-800 font-bold mb-6">Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[19rem] bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 text-left font-medium text-gray-700 bg-slate-300">
                PRODUCTS
              </th>
              <th className="p-4 text-left font-medium text-gray-700 bg-slate-300">
                PRICE
              </th>
              <th className="p-4 text-left font-medium text-gray-700 bg-slate-300">
                DATE ADDED
              </th>
              <th className="p-4 text-left font-medium text-gray-700 bg-slate-300">
                STATUS
              </th>
              <th className="p-4 text-left font-medium text-gray-700 bg-slate-300">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item?.product?._id} className="border-b border-gray-200">
                <td className="p-2 flex items-center ">
                  <img
                    src={item?.product?.images?.[0]?.url || W1} // Guard clause here
                    alt={item?.product?.name || "Product Image"} // Guard clause for product name
                    className="w-14 h-14 mr-4"
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    {item?.product?.name || "Unknown Product"}
                  </span>
                </td>
                <td className="p-2 text-sm text-gray-700 items-center">
                  ₹{item?.product?.price || "N/A"}
                </td>
                <td className="p-2 text-sm text-gray-700 items-center">
                  {item?.product?.createdAt
                    ? new Date(item.product.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="p-2 text-sm text-gray-700 items-center">
                  {item?.product?.stock > 0 ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </td>
                <td className="p-2 flex gap-2 mb-2">
                  <button
                    className="bg-green-500 text-sm text-white font-bold h-[2.5rem] w-[8rem] rounded-md hover:bg-green-600 transition duration-200"
                    onClick={() => handleAddToCart(item?.product?._id)}
                    disabled={!item?.product?.stock}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item?.product?._id)}
                    className="border border-green-500 text-sm text-green-500 font-bold py-1 px-6 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;
