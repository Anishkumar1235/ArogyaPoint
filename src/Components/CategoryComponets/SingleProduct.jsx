// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { FaCartArrowDown } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa";
// import Header from "../../Layout/Header";
// import Footer from "../../Layout/Footer";
// import { fetchProductById } from "../../redux/slices/categories";
// import { addItemToCart } from "../../redux/slices/addToCart";
// import toast from "react-hot-toast";
// import {
//   fetchWishlistItems,
//   removeItemFromWishlist,
//   addItemWishlist,
// } from "../../redux/slices/wishlistSlice";
// import loveIcons from "../../assets/heart-red-svgrepo-com.svg";
// import RelatedProducts from "../../Components/HomePage/productcardpage/RelatedProducts";

// const SingleProduct = () => {
//   const { id } = useParams(); // Fetch product ID from the URL
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const product = useSelector((state) => state.categories.products);
//   const loading = useSelector((state) => state.categories.loading);
//   const error = useSelector((state) => state.categories.error);
//   const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
//   const wishlistItems = useSelector(
//     (state) => state.wishlistItems.wishlistItems
//   );

//   useEffect(() => {
//     dispatch(fetchWishlistItems()); // Fetch wishlist items when the component mounts
//   }, [dispatch]);

//   // Check if the product is already in the wishlist when the component mounts
//   useEffect(() => {
//     const productInWishlist = wishlistItems.some(
//       (item) => item?.product?._id === id
//     );
//     setIsAddedToWishlist(productInWishlist);
//   }, [wishlistItems, id]);

//   // Fetch product details when the component mounts or product ID changes
//   useEffect(() => {
//     if (id) {
//       dispatch(fetchProductById(id));
//     }
//   }, [dispatch, id]);

//   if (loading) {
//     return <p>Loading product details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!product) {
//     return <p>No product found</p>;
//   }

//   // Handle adding product to the cart
//   const handleAddToCart = () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       toast.error("Please log in to add items to your cart.");
//       navigate("/login");
//       return;
//     }

//     const quantity = 1;
//     dispatch(addItemToCart({ productId: id, quantity }))
//       .unwrap()
//       .then(() => {
//         toast.success("Product added to cart successfully.");
//       })
//       .catch((error) => {
//         toast.error("Failed to add product to cart.");
//         console.error(error);
//       });
//   };

//   // Handle adding product to wishlist
//   const handleAddToWishlist = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Please log in to add items to your wishlist.");
//       navigate("/login");
//       return;
//     }

//     dispatch(addItemWishlist({ productId: id }))
//       .unwrap()
//       .then(() => {
//         toast.success("Product added to wishlist.");
//         setIsAddedToWishlist(true);
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("Failed to add product to wishlist.");
//       });
//   };

//   // Handle removing product from wishlist
//   const handleRemoveFromWishlist = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Please log in to remove items from your wishlist.");
//       navigate("/login");
//       return;
//     }

//     dispatch(removeItemFromWishlist(id))
//       .unwrap()
//       .then(() => {
//         toast.success("Product removed from wishlist.");
//         setIsAddedToWishlist(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("Failed to remove product from wishlist.");
//       });
//   };

//   // Generate star rating
//   const getStars = (rating) => {
//     const fullStars = "★".repeat(rating);
//     const emptyStars = "☆".repeat(5 - rating);
//     return fullStars + emptyStars;
//   };

//   return (
//     <>
//       <Header />
//       <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-md w-auto m-2 rounded-md lg:space-x-8 p-5 lg:p-10">
//         {/* Left Section - Image Gallery */}
//         <div>
//           {isAddedToWishlist ? (
//             <img
//               src={loveIcons}
//               alt="Added to Wishlist"
//               className="w-6 h-6 cursor-pointer"
//               onClick={handleRemoveFromWishlist}
//             />
//           ) : (
//             <FaRegHeart
//               className="cursor-pointer"
//               onClick={handleAddToWishlist}
//             />
//           )}

//           {product.images && product.images.length > 0 ? (
//             <img
//               src={product.images[0]?.url}
//               alt={product.name}
//               className="w-48 h-auto lg:w-72 lg:h-72 object-cover rounded-lg mb-4"
//             />
//           ) : (
//             <p>No image available</p>
//           )}
//           <div className="flex space-x-2">
//             {product.images &&
//               product.images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img.url}
//                   alt={`Thumb ${index + 1}`}
//                   className="w-16 h-16 object-cover rounded-lg border"
//                 />
//               ))}
//           </div>
//         </div>

//         {/* Right Section - Product Details */}
//         <div className="flex flex-col lg:w-2/3">
//           <h1 className="text-2xl lg:text-4xl font-bold mb-2">
//             {product?.name}
//           </h1>
//           <p className="text-yellow-500 text-sm lg:text-lg mb-2 ">
//             {getStars(product?.rating || 0)} (286 User feedback)
//           </p>
//           <p className="text-green-600 text-2xl lg:text-2xl font-bold mb-2">
//             ₹{product?.price}
//           </p>
//           <p className="text-lg lg:text-md mb-2">
//             Availability:{" "}
//             <span className="text-green-600">
//               {product?.stock > 0 ? "In Stock" : "Out of Stock"}
//             </span>
//           </p>
//           <p className="text-lg lg:text-xl mb-2">
//             Category:{" "}
//             <span className="text-blue-600 underline">
//               {product?.category?.name}
//             </span>
//           </p>
//           <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
//             <input
//               type="text"
//               placeholder="Enter Pincode"
//               className="border p-2 rounded-lg lg:w-1/3 mb-4 lg:mb-0"
//             />
//             <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
//               Check
//             </button>
//           </div>
//           <div className="flex gap-2">
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center"
//               onClick={handleAddToCart}
//             >
//               ADD TO CART <FaCartArrowDown className="ml-3" />
//             </button>
//             <button className="text-black border-2 border-green-500 py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center">
//               <Link to={`/single-product-buy/${id}`}>Buy Now</Link>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="p-6 lg:p-8 bg-gray-100 rounded-md my-6 max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Description</h2>
//         <div className="space-y-2 text-lg">
//           <p>Good news for spring-cleaning your mind, body, and spirit.</p>
//           <p>
//             Made with organic dandelion, fennel, green tea, lemon myrtle, and
//             licorice.
//           </p>
//           <p>One sip and you're ready to sparkle.</p>
//           <p>Ethically sourced, 100% organically grown ingredients.</p>
//           <p>
//             Bring these incredible herbs alive by infusing in freshly boiled
//             water for up to 15 minutes.
//           </p>
//           <p>
//             We are proud to be 1% for the planet. This product is certified
//             FairWild and Fair for Life.
//           </p>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="p-6 lg:p-8 bg-gray-100 rounded-md my-6 max-w-7xl mx-auto">
//         <RelatedProducts />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { fetchProductById } from "../../redux/slices/categories";
import { addItemToCart } from "../../redux/slices/addToCart";
import toast from "react-hot-toast";
import {
  fetchWishlistItems,
  removeItemFromWishlist,
  addItemWishlist,
} from "../../redux/slices/wishlistSlice";
import loveIcons from "../../assets/heart-red-svgrepo-com.svg";
import RelatedProducts from "../../Components/HomePage/productcardpage/RelatedProducts";

const SingleProduct = () => {
  const { id } = useParams(); // Fetch product ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.categories.products);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false); // New state for cart
  const wishlistItems = useSelector(
    (state) => state.wishlistItems.wishlistItems
  );
  const cartItems = useSelector((state) => state.cartItems.cartItems); // Fetch cart items

  useEffect(() => {
    dispatch(fetchWishlistItems()); // Fetch wishlist items when the component mounts
  }, [dispatch]);

  // Check if the product is already in the wishlist when the component mounts
  useEffect(() => {
    const productInWishlist = wishlistItems.some(
      (item) => item?.product?._id === id
    );
    setIsAddedToWishlist(productInWishlist);
  }, [wishlistItems, id]);

  // Check if the product is already in the cart when the component mounts
  useEffect(() => {
    const productInCart = cartItems.some((item) => item.productId === id);
    setIsInCart(productInCart); // Update cart state
  }, [cartItems, id]);

  // Fetch product details when the component mounts or product ID changes
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  // Handle adding product to the cart
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const quantity = 1;
    dispatch(addItemToCart({ productId: id, quantity }))
      .unwrap()
      .then(() => {
        toast.success("Product added to cart successfully.");
        setIsInCart(true); // Set cart state to true
      })
      .catch((error) => {
        toast.error("Failed to add product to cart.");
        console.error(error);
      });
  };

  // Handle adding product to wishlist
  const handleAddToWishlist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to add items to your wishlist.");
      navigate("/login");
      return;
    }

    dispatch(addItemWishlist({ productId: id }))
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

  // Handle removing product from wishlist
  const handleRemoveFromWishlist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to remove items from your wishlist.");
      navigate("/login");
      return;
    }

    dispatch(removeItemFromWishlist(id))
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

  // Generate star rating
  const getStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-md w-auto m-2 rounded-md lg:space-x-8 p-5 lg:p-10">
        {/* Left Section - Image Gallery */}
        <div>
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

          {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]?.url}
              alt={product.name}
              className="w-48 h-auto lg:w-72 lg:h-72 object-cover rounded-lg mb-4"
            />
          ) : (
            <p>No image available</p>
          )}
          <div className="flex space-x-2">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`Thumb ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
              ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex flex-col lg:w-2/3">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">
            {product?.name}
          </h1>
          <p className="text-yellow-500 text-sm lg:text-lg mb-2 ">
            {getStars(product?.rating || 0)} (286 User feedback)
          </p>
          <p className="text-green-600 text-2xl lg:text-2xl font-bold mb-2">
            ₹{product?.price}
          </p>
          <p className="text-lg lg:text-md mb-2">
            Availability:{" "}
            <span className="text-green-600">
              {product?.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="text-lg lg:text-xl mb-2">
            Category:{" "}
            <span className="text-blue-600 underline">
              {product?.category?.name}
            </span>
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border p-2 rounded-lg lg:w-1/3 mb-4 lg:mb-0"
            />
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
              Check
            </button>
          </div>
          <div className="flex gap-2">
            {isInCart ? ( // Change button based on cart state
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center"
                onClick={() => navigate("/cart")} // Navigate to cart
              >
                GO TO CART
              </button>
            ) : (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center"
                onClick={handleAddToCart}
              >
                ADD TO CART <FaCartArrowDown className="ml-3" />
              </button>
            )}
            <button className="text-black border-2 border-green-500 py-2 px-4 rounded w-full lg:w-auto flex justify-center items-center">
              <Link to={`/single-product-buy/${id}`}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-6 lg:p-8 bg-gray-100 rounded-md my-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <div className="space-y-2 text-lg">
          <p>Good news for spring-cleaning your mind, body, and spirit.</p>
          <p>
            Made with organic dandelion, fennel, green tea, lemon myrtle, and
            licorice.
          </p>
          <p>One sip and you're ready to sparkle.</p>
          <p>Ethically sourced, 100% organically grown ingredients.</p>
          <p>
            Bring these incredible herbs alive by infusing in freshly boiled
            water for up to 15 minutes.
          </p>
          <p>
            We are proud to be 1% for the planet. This product is certified
            FairWild and Fair for Life.
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="p-6 lg:p-8 bg-gray-100 rounded-md my-6 max-w-7xl mx-auto">
        <RelatedProducts />
      </div>

      <Footer />
    </>
  );
};

export default SingleProduct;
