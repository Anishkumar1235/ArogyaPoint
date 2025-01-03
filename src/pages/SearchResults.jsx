import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      axios
        .get(`http://localhost:8001/api/v1/products/search?name=${query}`)
        .then((response) => {
          setProducts(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching search results.");
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 shadow-md"
              >
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold text-green-500">
                    ₹{product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
