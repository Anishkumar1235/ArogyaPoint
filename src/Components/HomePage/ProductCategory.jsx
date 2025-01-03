import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Add useNavigate for dynamic navigation
import { fetchCategoriesSubCategory } from "../../redux/slices/categories";
// import supplements from "../../category_imgs/supplements.png";
import contact from "../../category_imgs/contact.png"; 
import blog from "../../category_imgs/blog.png"; 




const ProductCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategoriesSubCategory());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleSubcategoryClick = (subcategoryId) => {
    // Navigate to the subcategory page dynamically
    navigate(`/category/${subcategoryId}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 lg:gap-8 relative">
    {categories.map((category) => (
      <div
        key={category._id}
        className="p-1 relative"
        onMouseEnter={() => setHoveredCategory(category._id)}
        onMouseLeave={() => setHoveredCategory(null)}
      >
        {/* Reduce the image size */}
        <img
          src={category.images}
          alt={category.name}
          className="mb-1 h-10 sm:h-10 md:h-12 lg:h-14" // Reduced height
        />
        {/* Reduce the text size */}
        <p className="text-center text-[0.4rem] sm:text-[0.6rem] md:text-[0.75rem] lg:text-[0.6rem] whitespace-normal font-semibold">
          {category.name}
        </p>
        {hoveredCategory === category._id && (
          <div className="absolute left-0 mt-2 lg:w-[24rem] bg-white rounded-lg shadow-lg p-4 z-10">
            <div className="grid grid-cols-2 gap-4">
              {category.subcategories.map((subcategory) => (
                <div
                  key={subcategory._id}
                  className="flex items-start cursor-pointer"
                  onClick={() => handleSubcategoryClick(subcategory._id)}
                >
                  <img
                    src={subcategory.images}
                    alt={subcategory.name}
                    className="w-10 h-10 mr-2"
                  />
                  <div>
                    <p className="font-semibold text-sm">{subcategory.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  
    {/* Static Images for Contact, Blog */}
  
  
    <div className="p-1 relative w-24 flex-shrink-0" onClick={() => navigate('/contact')}> {/* Add navigation */}
  <img
    src={contact}
    alt="Contact"
    className="mb-1 h-10 sm:h-10 md:h-12 lg:h-14 w-full cursor-pointer" // Add cursor-pointer for visual feedback
  />
  <p className="text-center text-[0.4rem] sm:text-[0.6rem] md:text-[0.75rem] lg:text-[0.6rem] whitespace-normal font-semibold">
    Contact
  </p>
</div>
  
    <div className="p-1 relative w-24 flex-shrink-0">
      <img
        src={blog}
        alt="Blog"
        className="mb-1 h-8 sm:h-10 md:h-12 lg:h-14 w-full"
      />
      <p className="text-center text-[0.4rem] sm:text-[0.6rem] md:text-[0.75rem] lg:text-[0.6rem] whitespace-normal font-semibold">
        Blog
      </p>
    </div>
  </div>
  
  );
};

export default ProductCategory;
