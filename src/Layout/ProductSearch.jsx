import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search-results?query=${searchTerm}`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-0">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-sm sm:max-w-lg lg:max-w-2xl"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products, Categories, Brands and more..."
          className="h-9 w-[500px] px-2 rounded-l border border-gray-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200 text-sm sm:text-base"
        />
        <button type="submit" className="h-9 bg-green-500 text-white rounded-r px-4">
          <FaSearch className="text-lg" />
        </button>
      </form>
    </div>
  );
};

export default ProductSearch;
