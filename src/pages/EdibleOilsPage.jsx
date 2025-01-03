import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import EdibleOilsProduct from "../Components/EdibleOilsPage/EdibleOilsProduct";
import Footer from "../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";

const EdibleOilsPage = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [subcategoryId, setSubcategoryId] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.categories.products);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (categoryId || subcategoryId) {
      dispatch(
        fetchProductsByCategory({
          category: categoryId,
          subcategory: subcategoryId,
        })
      );
    }
  }, [categoryId, subcategoryId, dispatch]);

  const handleCategoryClick = (category, subcategory = null) => {
    setCategoryId(category);
    setSubcategoryId(subcategory);
  };
  return (
    <>
      <Header />
      <EdibleOilsProduct
        products={products}
        loading={loading}
        error={error}
        onCategoryClick={handleCategoryClick}
      />
      <Footer />
    </>
  );
};

export default EdibleOilsPage;
