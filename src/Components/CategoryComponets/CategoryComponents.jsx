import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../redux/slices/categories";
import SideBar from "./SideBar";

const CategoryComponents = () => {
  const [sortOrder, setSortOrder] = useState("Relevance");

  const { subcategoryId } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.categories.products);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (subcategoryId) {
      dispatch(fetchProductsByCategory({ subcategory: subcategoryId }));
    }
  }, [dispatch, subcategoryId]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Check if products is an array before mapping
  if (!Array.isArray(products)) {
    return <p>No products available</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <SideBar />

      {/* Cards Section */}
      <section className="flex-1 bg-[#F1F3F6]">
        <div className="container px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full">
              <div className="text-sm tracking-widest mb-4">
                <p className="text-xl text-gray-900 font-bold">Products</p>
              </div>
              <div className="">
                <p className="text-[0.95rem] text-gray-600">
                  Discover a variety of products.
                </p>
              </div>

              {/* Sort and Pagination */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                <p className="text-[1rem] text-gray-600 font-semibold">
                  Showing 1-{products.length} Products
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

              {/* Product Cards */}
              <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="flex flex-col w-full max-w-xs mx-auto p-4 rounded-lg bg-white shadow-md"
                  >
                    {/* Sale Badge */}
                    <div className="w-full flex justify-start">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Sale!
                      </span>
                    </div>

                    {/* Product Image */}
                    <Link to={`/product/${product._id}`}>
                      <img
                        className="object-cover w-[120px] h-[100px] mx-auto mt-2 rounded-sm"
                        src={product.images[0]?.url}
                        alt={product.name}
                      />
                      <div className="flex flex-col mt-2">
                        <h4 className="text-sm font-medium text-gray-700 text-left underline">
                          {product.name}
                        </h4>
                        <div className="flex items-center mt-2 text-left">
                          <div className="text-orange-500">
                            ⭐ {product.rating} / 5
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mt-2 text-left text-gray-700 flex gap-2">
                          <p className="text-sm font-semibold">
                            ₹{product.price}
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            ₹{product.price + 250}
                          </p>
                        </div>
                        <p className="text-xs text-green-600">
                          {product.discount}
                        </p>

                        {/* Fix Here: Properly Access Category and Subcategory Name */}
                        <p className="mt-4 text-sm text-gray-800 text-left">
                          {product?.category?.name}
                        </p>
                        <p className="mt-4 text-sm text-gray-800 text-left">
                          {product?.subcategory?.name}
                        </p>

                        <p
                          className={`mt-1 text-sm ${
                            product.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {product.availability}
                        </p>
                      </div>
                    </Link>

                    {/* Quick View Button */}
                    <div className="flex justify-center mt-4">
                      <Link to={`/product/${product._id}`}>
                        <button className="px-12 py-2 text-md mt-2 text-gray-800 border border-green-600 rounded-2xl">
                          Quick view
                        </button>
                      </Link>
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

export default CategoryComponents;
