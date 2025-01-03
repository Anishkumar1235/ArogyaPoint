// src/components/BestSelling.js
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./productcardpage/ProductCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllProducts } from "../../redux/slices/productSlice";

const BestSelling = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleProductClick = (product) => {
    navigate(`/product/${product._id}`, { state: { product } });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 m-4">Best Selling</h2>

      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 m-4">
          {/* Render Skeletons while loading */}
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <Skeleton height={300} />
                <Skeleton height={20} />
                <Skeleton height={20} />
                <Skeleton height={20} width="60%" />
              </div>
            ))}
        </div>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 m-4">
          {products.map((product) => (
            <div key={product._id}>
              <ProductCard
                product={product}
                handleProductClick={handleProductClick}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSelling;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import ProductCard from "./productcardpage/ProductCard";
// import OilImg from "./productImg/oilimg.jpg";
// import CocoMilk from "./productImg/cocomilk.jpg";
// import Coffee from "./productImg/blackcoffee.jpg";
// import Garlic from "./productImg/garlicimg.jpg";

// const products = [
//   {
//     id: 1,
//     image: OilImg,
//     name: "Phalada Pure & Sure | Organic Coconut Milk - 160ml",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "EXTRA VIRGIN OLIVE OILS",
//     onSale: true,
//   },
//   {
//     id: 2,
//     image: CocoMilk,
//     name: "Nutriboat Okra Chips – Spice & Stormy",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "SWEETS & SAVOURIES",
//     onSale: false,
//   },
//   {
//     id: 3,
//     image: Coffee,
//     name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 G",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "COFFEE",
//     onSale: true,
//   },
//   {
//     id: 4,
//     image: Garlic,
//     name: "Aaswad Black Garlic – 500 Grams Organic Black",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "FOOD",
//     onSale: false,
//   },
//   {
//     id: 5,
//     image: OilImg,
//     name: "Phalada Pure & Sure | Organic Coconut Milk - 160ml",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "EXTRA VIRGIN OLIVE OILS",
//     onSale: true,
//   },
//   {
//     id: 6,
//     image: CocoMilk,
//     name: "Nutriboat Okra Chips – Spice & Stormy",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "SWEETS & SAVOURIES",
//     onSale: false,
//   },
//   {
//     id: 7,
//     image: Coffee,
//     name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 G",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "COFFEE",
//     onSale: true,
//   },
//   {
//     id: 8,
//     image: Garlic,
//     name: "Aaswad Black Garlic – 500 Grams Organic Black",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "FOOD",
//     onSale: false,
//   },
//   {
//     id: 9,
//     image: OilImg,
//     name: "Phalada Pure & Sure | Organic Coconut Milk - 160ml",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "EXTRA VIRGIN OLIVE OILS",
//     onSale: true,
//   },
//   {
//     id: 10,
//     image: CocoMilk,
//     name: "Nutriboat Okra Chips – Spice & Stormy",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "SWEETS & SAVOURIES",
//     onSale: false,
//   },
//   {
//     id: 11,
//     image: Coffee,
//     name: "Woodi Peck’s Araku Organic Black Coffee Powder – 250 G",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "COFFEE",
//     onSale: true,
//   },
//   {
//     id: 12,
//     image: Garlic,
//     name: "Aaswad Black Garlic – 500 Grams Organic Black",
//     reviews: 286,
//     price: 1179,
//     originalPrice: 1749,
//     category: "FOOD",
//     onSale: false,
//   },
// ];

// const BestSelling = () => {
//   const navigate = useNavigate();

//   const handleProductClick = (product) => {
//     navigate(`/product/${product.id}`, { state: { product } });
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4 m-4">Best Selling</h2>
//       <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 m-4">
//         {products.map((product) => (
//           <div key={product.id} onClick={() => handleProductClick(product)}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSelling;
