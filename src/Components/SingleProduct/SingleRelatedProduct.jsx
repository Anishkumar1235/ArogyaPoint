import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../Layout/Header"; // Assuming Header is a separate component

const SingleRelatedProduct = () => {
  const { productId } = useParams(); // Use useParams to get the dynamic productId from URL
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://16.171.151.13/products/related/${productId}`
        );
        setRelatedProducts(response.data?.relatedProducts || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch related products.");
        setLoading(false);
      }
    };

    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId]); // UseEffect will run whenever productId changes

  const handleQuickViewClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <p className="text-center mt-10">Loading related products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <Header />
      <div className="p-6 lg:p-8 bg-gray-100 rounded-md my-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <div>
                <h1 className="text-lg font-semibold mb-1">{product.name}</h1>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="text-yellow-500 mr-2">
                    {product.rating}★
                  </span>
                  <span>({product.reviews} Reviews)</span>
                </div>

                <p className="text-sm text-gray-500 mb-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  {product.regularprice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.regularprice}
                    </span>
                  )}
                  <span className="text-lg font-bold text-green-600">
                    ₹{product.price}
                  </span>
                </div>
                <button
                  className="px-6 py-2 text-md text-gray-800 border border-green-600 rounded-2xl hover:bg-green-600 hover:text-white transition-colors duration-300"
                  onClick={() => handleQuickViewClick(product._id)}
                >
                  Quick view
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleRelatedProduct;
