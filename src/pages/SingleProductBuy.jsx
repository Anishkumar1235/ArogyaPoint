// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { FaCcStripe, FaRegCreditCard } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import AddressModal from "../Components/ShoppingCart/AddressModal";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
// import { fetchSingleCartProduct } from "../redux/slices/productSlice";

// const SingleProductBuy = () => {
//   const { id } = useParams(); // Getting productId dynamically from the URL
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products); // Use products from Redux state
//   const product = products; // Assuming products holds the fetched product details

//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     fullName: "",
//     phoneNumber: "",
//     pincode: "",
//     state: "",
//     city: "",
//     streetAddress: "",
//     apartment: "",
//   });
//   const [addresses, setAddresses] = useState([
//     {
//       fullName: "John Doe",
//       phoneNumber: "1234567890",
//       pincode: "751024",
//       state: "Odisha",
//       city: "Bhubaneswar",
//       streetAddress: "Idco Info Park, Technology Corridor",
//       apartment: "",
//     },
//   ]);
//   const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
//   const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchSingleCartProduct(id)); // Fetch product data dynamically
//     }
//   }, [dispatch, id]);

//   const openModal = () => setModalIsOpen(true);
//   const closeModal = () => {
//     setModalIsOpen(false);
//     setNewAddress({
//       fullName: "",
//       phoneNumber: "",
//       pincode: "",
//       state: "",
//       city: "",
//       streetAddress: "",
//       apartment: "",
//     });
//   };

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSaveAddress = () => {
//     setAddresses((prev) => [...prev, newAddress]);
//     setSelectedAddressIndex(addresses.length);
//     closeModal();
//   };

//   const calculateTotalPrice = () => {
//     const total = product ? product.price * 1 : 0; // Assuming single product purchase with quantity 1
//     return total - discount;
//   };

//   const applyCoupon = () => {
//     if (couponCode === "SAVE10") {
//       setDiscount(10);
//       alert("Coupon applied! ₹10 discount.");
//     } else if (couponCode === "DISCOUNT10") {
//       setDiscount(10);
//     } else {
//       setDiscount(0);
//       alert("Invalid coupon code.");
//     }
//   };

//   // Check if loading, error, or no product case
//   if (loading) {
//     return <p>Loading product details...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!product) {
//     return <p>No product found</p>;
//   }

//   return (
//     <>
//       <Header />

//       <div className="container mx-auto p-4 md:p-8 lg:p-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Shopping Cart Items Section */}
//           <div className="lg:col-span-2">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold mb-4">Product Purchase</h2>
//               {product ? (
//                 <div className="flex items-center justify-between border-b border-gray-200 py-4">
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={
//                         product.images && product.images[0]
//                           ? product.images[0].url
//                           : "path/to/placeholder.jpg"
//                       } // Safely check for images
//                       alt={product.name || "Product"}
//                       className="w-16 h-16 object-cover"
//                     />
//                     <div>
//                       <p className="font-medium text-lg">{product.name}</p>
//                       <p className="text-gray-600">
//                         ₹{product.price ? product.price.toFixed(2) : "N/A"}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="font-medium mt-10 text-lg">
//                     ₹{product.price ? product.price.toFixed(2) : "N/A"}
//                   </p>
//                 </div>
//               ) : (
//                 <p>No product details available</p>
//               )}

//               <div className="mt-6 flex items-center space-x-4">
//                 <input
//                   type="text"
//                   placeholder="Coupon Code"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                   className="border border-gray-300 p-2 w-1/2 rounded"
//                 />
//                 <button
//                   onClick={applyCoupon}
//                   className="bg-blue-500 text-white p-2 rounded"
//                 >
//                   Apply
//                 </button>
//               </div>

//               <div className="flex justify-between mt-6">
//                 <span>Total Price:</span>
//                 <span className="font-bold">₹{calculateTotalPrice()}</span>
//               </div>
//             </div>
//           </div>

//           {/* Address and Payment Section */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             {/* Address */}
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold mb-4">Address</h3>
//               {addresses.map((address, index) => (
//                 <div key={index} className="mb-4">
//                   <p className="text-gray-700">{address.fullName}</p>
//                   <p className="text-gray-700">{address.phoneNumber}</p>
//                   <p className="text-gray-700">
//                     {address.streetAddress}
//                     {address.apartment ? `, ${address.apartment}` : ""}
//                   </p>
//                   <p className="text-gray-700">
//                     {address.city}, {address.state} - {address.pincode}
//                   </p>
//                 </div>
//               ))}
//               <p
//                 className="text-green-500 mt-2 cursor-pointer"
//                 onClick={openModal}
//               >
//                 + Add New Address
//               </p>
//               <div className="flex items-center mt-4">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={shippingSameAsBilling}
//                   onChange={(e) => setShippingSameAsBilling(e.target.checked)}
//                 />
//                 <span>Shipping Address same as Billing Address</span>
//               </div>
//             </div>

//             {/* Payment */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Payment</h3>
//               <div className="flex flex-col mb-4">
//                 <label className="inline-flex items-center mb-2">
//                   <input
//                     type="radio"
//                     className="form-radio"
//                     name="payment"
//                     value="stripe"
//                   />
//                   <FaCcStripe className="ml-2 text-lg text-blue-700" />
//                   <span className="ml-2">Secure Card Payment with Stripe</span>
//                 </label>
//                 <label className="inline-flex items-center mb-2">
//                   <input
//                     type="radio"
//                     className="form-radio"
//                     name="payment"
//                     value="googlePay"
//                   />
//                   <FcGoogle className="ml-2 text-lg" />
//                   <span className="ml-2">Google Pay</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     className="form-radio"
//                     name="payment"
//                     value="creditCard"
//                   />
//                   <FaRegCreditCard className="text-lg ml-2" />
//                   <span className="ml-2">Credit Card/Debit Card</span>
//                 </label>
//               </div>
//               <p className="text-gray-600 text-sm mb-4">
//                 Your personal data will be used to process your order and for
//                 other purposes described in our privacy policy.
//               </p>
//               <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">
//                 Pay ₹{calculateTotalPrice()}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Address Modal */}
//       <AddressModal
//         modalIsOpen={modalIsOpen}
//         closeModal={closeModal}
//         newAddress={newAddress}
//         handleAddressChange={handleAddressChange}
//       />

//       <Footer />
//     </>
//   );
// };

// export default SingleProductBuy;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCcStripe, FaRegCreditCard } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AddressModal from "../Components/ShoppingCart/AddressModal";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { fetchSingleCartProduct } from "../redux/slices/productSlice";

const SingleProductBuy = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const product = products;

  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    state: "",
    city: "",
    streetAddress: "",
    apartment: "",
  });
  const [addresses, setAddresses] = useState([
    {
      fullName: "John Doe",
      phoneNumber: "1234567890",
      pincode: "751024",
      state: "Odisha",
      city: "Bhubaneswar",
      streetAddress: "Idco Info Park, Technology Corridor",
      apartment: "",
    },
  ]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleCartProduct(id));
    }
  }, [dispatch, id]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setNewAddress({
      fullName: "",
      phoneNumber: "",
      pincode: "",
      state: "",
      city: "",
      streetAddress: "",
      apartment: "",
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveAddress = () => {
    setAddresses((prev) => [...prev, newAddress]);
    setSelectedAddressIndex(addresses.length);
    closeModal();
  };

  const calculateTotalPrice = () => {
    const total = product ? product.price * quantity : 0;
    return total - discount;
  };

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10);
      alert("Coupon applied! ₹10 discount.");
    } else if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid coupon code.");
    }
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <>
      <Header />

      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shopping Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Product Purchase</h2>

              <div className="flex flex-col sm:flex-row justify-between mb-8 ml-10 px-2 space-y-4 sm:space-y-0">
                <span className="text-md font-bold text-gray-900 border-b-2 border-gray-300">
                  Product
                </span>
                <span className="text-md font-bold ml-5 text-gray-900 border-b-2 border-gray-300">
                  Name
                </span>
                <span className="text-md font-bold ml-10 text-gray-900 border-b-2 border-gray-300">
                  Price
                </span>
                <span className="text-md font-bold text-gray-900 border-b-2 border-gray-300 ml-12">
                  Quantity
                </span>
                <span className="text-md font-bold text-gray-900 border-b-2 border-gray-300 ml-16">
                  Total Price
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 sm:space-x-28">
                  <img
                    src={
                      product.images && product.images[0]
                        ? product.images[0].url
                        : "path/to/placeholder.jpg"
                    }
                    alt={product.name || "Product"}
                    className="w-16 h-16 object-cover"
                  />
                  <p className="font-medium text-lg">{product.name}</p>
                </div>
                <p className="text-gray-600 ml-0 sm:ml-4">
                  ₹{product.price ? product.price.toFixed(2) : "N/A"}
                </p>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 p-2 w-16 rounded text-center"
                />
                <p className="font-medium text-lg sm:mt-0">
                  ₹{(product.price * quantity).toFixed(2)}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="border border-gray-300 p-2 w-full sm:w-1/2 rounded mb-4 sm:mb-0"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto"
                >
                  Apply
                </button>
              </div>

              <div className="flex justify-between mt-6">
                <span>Total Price:</span>
                <span className="font-bold">
                  ₹{calculateTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Address and Payment Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              {addresses.map((address, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-700">{address.fullName}</p>
                  <p className="text-gray-700">{address.phoneNumber}</p>
                  <p className="text-gray-700">
                    {address.streetAddress}
                    {address.apartment ? `, ${address.apartment}` : ""}
                  </p>
                  <p className="text-gray-700">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
              ))}
              <p
                className="text-green-500 mt-2 cursor-pointer"
                onClick={openModal}
              >
                + Add New Address
              </p>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={shippingSameAsBilling}
                  onChange={(e) => setShippingSameAsBilling(e.target.checked)}
                />
                <span>Shipping Address same as Billing Address</span>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment</h3>
              <div className="flex flex-col mb-4">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="radio"
                    className="form-radio"
                    name="payment"
                    value="stripe"
                  />
                  <FaCcStripe className="ml-2 text-lg text-blue-700" />
                  <span className="ml-2">Secure Card Payment with Stripe</span>
                </label>
                <label className="inline-flex items-center mb-2">
                  <input
                    type="radio"
                    className="form-radio"
                    name="payment"
                    value="googlePay"
                  />
                  <FcGoogle className="ml-2 text-lg" />
                  <span className="ml-2">Google Pay</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="payment"
                    value="creditCard"
                  />
                  <FaRegCreditCard className="text-lg ml-2" />
                  <span className="ml-2">Credit Card/Debit Card</span>
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="p-2 border border-gray-300 rounded-lg w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="p-2 border border-gray-300 rounded-lg w-full mb-4"
                />
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/2 sm:mr-2 mb-4 sm:mb-0"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/2 sm:ml-2"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Your personal data will be used to process your order and for
                other purposes described in our privacy policy.
              </p>
              <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">
                Pay ₹{calculateTotalPrice().toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddressModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        newAddress={newAddress}
        handleAddressChange={handleAddressChange}
      />

      <Footer />
    </>
  );
};

export default SingleProductBuy;
