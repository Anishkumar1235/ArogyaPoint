import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../../../redux/slices/relatedProductSlice"; // Assuming you have this slice

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const relatedProducts = useSelector((state) => state.relatedProducts?.items || []); // Safeguard with default empty array
  const loading = useSelector((state) => state.relatedProducts?.loading);
  const error = useSelector((state) => state.relatedProducts?.error);

  useEffect(() => {
    dispatch(fetchRelatedProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading related products...</p>;
  }

  if (error) {
    return <p>Error fetching related products: {error}</p>;
  }

  return (
    <div className="p-6 lg:p-8 bg-gray-100 rounded-md my-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* {relatedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 bg-white shadow-md relative">
            {product.sale && (
              <span className="text-white bg-blue-500 px-2 py-1 rounded absolute top-2 left-2">
                Sale!
              </span>
            )}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className="text-yellow-500 text-sm mb-2">
              ★★★★☆ ({product.reviews} Reviews)
            </p>
            <p className="text-green-600 font-bold mb-2">
              From: ₹{product.price}{" "}
              <span className="line-through text-gray-500">₹{product.originalPrice}</span>
            </p>
            <p className="text-sm text-gray-600 mb-4">{product.category}</p>
            <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Quick view
            </button>
          </div>
        ))} */}

{relatedProducts.map((product, index) => (
  <div key={product.id || index} className="border rounded-lg p-4 bg-white shadow-md relative">
     {product.sale && (
              <span className="text-white bg-blue-500 px-2 py-1 rounded absolute top-2 left-2">
                Sale!
              </span>
            )}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className="text-yellow-500 text-sm mb-2">
              ★★★★☆ ({product.reviews} Reviews)
            </p>
            <p className="text-green-600 font-bold mb-2">
              From: ₹{product.price}{" "}
              <span className="line-through text-gray-500">₹{product.originalPrice}</span>
            </p>
            <p className="text-sm text-gray-600 mb-4">{product.category}</p>
            <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Quick view
            </button>
  </div>
))}

      </div>
    </div>
  );
};

export default RelatedProducts;
