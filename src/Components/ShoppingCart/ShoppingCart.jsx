// import React, { useState, useEffect } from "react";
// import { FaCcStripe, FaRegCreditCard } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import AddressModal from "./AddressModal";
// import Loading from "../../Components/Loading";
// import { CiSquareRemove } from "react-icons/ci";
// import {
//   fetchCartItems,
//   removeItemFromCart,
//   updateCartItemQuantity,
// } from "../../redux/slices/addToCart";
// import { useDispatch } from "react-redux";

// const ShoppingCart = ({ cartItems = [] }) => {
//   const dispatch = useDispatch();
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [deletingItemId, setDeletingItemId] = useState(null);

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
//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [cart, setCart] = useState(Array.isArray(cartItems) ? cartItems : []);

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

//   // Handle quantity increment and decrement
//   const handleQuantityChange = (index, change) => {
//     setCart((prevCart) =>
//       prevCart.map((item, i) =>
//         i === index
//           ? { ...item, quantity: Math.max(1, item.quantity + change) }
//           : item
//       )
//     );
//   };

//   // Calculate the total price of all items in the cart
//   const calculateTotalPrice = () => {
//     const total = cart.reduce(
//       (total, item) => total + item.quantity * item.productDetails.price,
//       0
//     );
//     const discountedTotal = total - (total * discount) / 100;
//     return discountedTotal.toFixed(2);
//   };

//   const applyCoupon = () => {
//     if (coupon === "SAVE10") {
//       setDiscount(10); // Apply 10% discount
//       alert("Coupon applied! 10% discount.");
//     } else if (coupon === "SAVE20") {
//       setDiscount(20); // Apply 20% discount
//       alert("Coupon applied! 20% discount.");
//     } else {
//       setDiscount(0); // No discount
//       alert("Invalid coupon code.");
//     }
//   };

//   const handleRemoveItem = async (cartItemId) => {
//     setDeletingItemId(cartItemId);
//     try {
//       await dispatch(removeItemFromCart(cartItemId)).unwrap();
//     } catch (error) {
//       console.error("Failed to remove item from cart.");
//     } finally {
//       setDeletingItemId(null);
//     }
//   };

//   const handleIncreaseQuantity = async (cartItemId, currentQuantity) => {
//     const newQuantity = currentQuantity + 1;
//     try {
//       await dispatch(
//         updateCartItemQuantity({ cartItemId, quantity: newQuantity })
//       ).unwrap();
//       dispatch(fetchCartItems());
//     } catch (error) {
//       console.error("Failed to update quantity", error);
//     }
//   };

//   const handleDecreaseQuantity = async (cartItemId, currentQuantity) => {
//     if (currentQuantity > 1) {
//       const newQuantity = currentQuantity - 1;
//       try {
//         await dispatch(
//           updateCartItemQuantity({ cartItemId, quantity: newQuantity })
//         ).unwrap();
//         dispatch(fetchCartItems());
//       } catch (error) {
//         console.error("Failed to update quantity", error);
//       }
//     }
//   };

//   const calculateSubtotal = () => {
//     return cartItems
//       .reduce(
//         (total, item) => total + item.productDetails.price * item.quantity,
//         0
//       )
//       .toFixed(2);
//   };

//   // Update the subtotal after applying the coupon
//   const calculateDiscountedTotal = () => {
//     const subtotal = calculateSubtotal();
//     const discountedTotal = subtotal - (subtotal * discount) / 100;
//     return discountedTotal.toFixed(2);
//   };

//   return (
//     <div className="container mx-auto p-4 md:p-8 lg:p-12">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Shopping Cart Items Section */}
//         <div className="lg:col-span-2">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
//             {cart.length === 0 ? (
//               <p>Your cart is empty</p>
//             ) : (
//               <>
//                 {/* Header for Cart Items */}
//                 <div className="flex justify-between mb-8 ml-10 px-2">
//                   <span className="text-md font-bold text-gray-900 border-b-2 border-gray-300">
//                     Product
//                   </span>
//                   <span className="text-md font-bold ml-5 text-gray-900 border-b-2 border-gray-300">
//                     Name
//                   </span>
//                   <span className="text-md font-bold ml-10 text-gray-900 border-b-2 border-gray-300">
//                     Price
//                   </span>
//                   <span className="text-md font-bold text-gray-900 border-b-2 border-gray-300 ml-12">
//                     Quantity
//                   </span>
//                   <span className="text-md font-bold text-gray-900 border-b-2 border-gray-300 ml-16">
//                     Total Price
//                   </span>
//                 </div>

//                 {/* Cart Items */}
//                 {cart.map((item, index) => (
//                   <div key={item._id} className="flex items-center mb-4 px-2">
//                     <div className="relative mr-4">
//                       {deletingItemId === item._id ? (
//                         <Loading />
//                       ) : (
//                         <div
//                           className="bg-red-500 rounded-full p-1 cursor-pointer"
//                           onClick={() => handleRemoveItem(item._id)}
//                         >
//                           <CiSquareRemove className="text-xl text-white font-bold" />
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex-shrink-0 mr-4">
//                       <img
//                         src={item.productDetails.images[0]?.url}
//                         alt={item.productDetails.name}
//                         className="w-16 h-16 rounded-md"
//                       />
//                     </div>

//                     <p className="text-lg font-medium ml-8 w-1/4 truncate">
//                       {item.productDetails.name}
//                     </p>

//                     <span className="text-lg ml-8">
//                       ₹{item.productDetails.price}
//                     </span>

//                     <div className="flex items-center ml-24">
//                       <button
//                         className="p-2 bg-gray-200 rounded"
//                         onClick={() =>
//                           handleDecreaseQuantity(item._id, item.quantity)
//                         }
//                         disabled={item.quantity === 1}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{item.quantity}</span>
//                       <button
//                         className="p-2 bg-gray-200 rounded"
//                         onClick={() =>
//                           handleIncreaseQuantity(item._id, item.quantity)
//                         }
//                       >
//                         +
//                       </button>
//                     </div>

//                     <span className="text-lg font-bold ml-40">
//                       ₹{item.productDetails.price * item.quantity}
//                     </span>
//                   </div>
//                 ))}

//                 <div className="flex justify-between items-center mt-6 px-2">
//                   <input
//                     type="text"
//                     value={coupon}
//                     onChange={(e) => setCoupon(e.target.value)}
//                     placeholder="Coupon Code"
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                   <button
//                     className="ml-4 bg-blue-500 text-white p-2 rounded-lg"
//                     onClick={applyCoupon}
//                   >
//                     Apply
//                   </button>
//                 </div>

//                 <div className="flex justify-between mt-6 px-2">
//                   <span>Subtotal ({cart.length} items):</span>
//                   <span className="font-bold">₹{calculateSubtotal()}</span>
//                 </div>
//                 <div className="flex justify-between mt-2 px-2">
//                   <span>Discount:</span>
//                   <span className="font-bold">{discount}%</span>
//                 </div>
//                 <div className="flex justify-between mt-6 text-xl font-bold px-2">
//                   <span>Total after Discount:</span>
//                   <span>₹{calculateDiscountedTotal()}</span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Address and Payment Section */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           {/* Address */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold mb-4">Address</h3>
//             {addresses.map((address, index) => (
//               <div key={index} className="mb-4">
//                 <p className="text-gray-700">{address.fullName}</p>
//                 <p className="text-gray-700">{address.phoneNumber}</p>
//                 <p className="text-gray-700">
//                   {address.streetAddress}
//                   {address.apartment ? `, ${address.apartment}` : ""}
//                 </p>
//                 <p className="text-gray-700">
//                   {address.city}, {address.state} - {address.pincode}
//                 </p>
//               </div>
//             ))}
//             <p
//               className="text-green-500 mt-2 cursor-pointer"
//               onClick={openModal}
//             >
//               + Add New Address
//             </p>
//             <div className="flex items-center mt-4">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={shippingSameAsBilling}
//                 onChange={(e) => setShippingSameAsBilling(e.target.checked)}
//               />
//               <span>Shipping Address same as Billing Address</span>
//             </div>
//           </div>

//           {/* Payment */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Payment</h3>
//             <div className="flex flex-col mb-4">
//               <label className="inline-flex items-center mb-2">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="payment"
//                   value="stripe"
//                 />
//                 <FaCcStripe className="ml-2 text-lg text-blue-700" />
//                 <span className="ml-2">Secure Card Payment with Stripe</span>
//               </label>
//               <label className="inline-flex items-center mb-2">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="payment"
//                   value="googlePay"
//                 />
//                 <FcGoogle className="ml-2 text-lg" />
//                 <span className="ml-2">Google Pay</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="payment"
//                   value="creditCard"
//                 />
//                 <FaRegCreditCard className="text-lg ml-2" />
//                 <span className="ml-2">Credit Card/Debit Card</span>
//               </label>
//             </div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Name on Card"
//                 className="p-2 border border-gray-300 rounded-lg w-full mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Card Number"
//                 className="p-2 border border-gray-300 rounded-lg w-full mb-4"
//               />
//               <div className="flex justify-between">
//                 <input
//                   type="text"
//                   placeholder="Expiration Date"
//                   className="p-2 border border-gray-300 rounded-lg w-1/2 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CVV"
//                   className="p-2 border border-gray-300 rounded-lg w-1/2 ml-2"
//                 />
//               </div>
//             </div>
//             <p className="text-gray-600 text-sm mb-4">
//               Your personal data will be used to process your order and for
//               other purposes described in our privacy policy.
//             </p>
//             <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">
//               Pay ₹{calculateDiscountedTotal()}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Address Modal */}
//       <AddressModal
//         modalIsOpen={modalIsOpen}
//         closeModal={closeModal}
//         newAddress={newAddress}
//         handleAddressChange={handleAddressChange}
//         handleSaveAddress={handleSaveAddress}
//       />
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useState } from "react";
import { FaCcStripe, FaRegCreditCard } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AddressModal from "./AddressModal";
import Loading from "../../Components/Loading";
import { CiSquareRemove } from "react-icons/ci";
import {
  fetchCartItems,
  removeItemFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/addToCart";
import { useDispatch } from "react-redux";

const ShoppingCart = ({ cartItems = [] }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);

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
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [cart, setCart] = useState(Array.isArray(cartItems) ? cartItems : []);

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

  const handleQuantityChange = (index, change) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce(
      (total, item) => total + item.quantity * item.productDetails.price,
      0
    );
    const discountedTotal = total - (total * discount) / 100;
    return discountedTotal.toFixed(2);
  };

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(10);
      alert("Coupon applied! 10% discount.");
    } else if (coupon === "SAVE20") {
      setDiscount(20);
      alert("Coupon applied! 20% discount.");
    } else {
      setDiscount(0);
      alert("Invalid coupon code.");
    }
  };

  const handleRemoveItem = async (cartItemId) => {
    setDeletingItemId(cartItemId);
    try {
      await dispatch(removeItemFromCart(cartItemId)).unwrap();
    } catch (error) {
      console.error("Failed to remove item from cart.");
    } finally {
      setDeletingItemId(null);
    }
  };

  const handleIncreaseQuantity = async (cartItemId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    try {
      await dispatch(
        updateCartItemQuantity({ cartItemId, quantity: newQuantity })
      ).unwrap();
      dispatch(fetchCartItems());
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const handleDecreaseQuantity = async (cartItemId, currentQuantity) => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      try {
        await dispatch(
          updateCartItemQuantity({ cartItemId, quantity: newQuantity })
        ).unwrap();
        dispatch(fetchCartItems());
      } catch (error) {
        console.error("Failed to update quantity", error);
      }
    }
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + item.productDetails.price * item.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateDiscountedTotal = () => {
    const subtotal = calculateSubtotal();
    const discountedTotal = subtotal - (subtotal * discount) / 100;
    return discountedTotal.toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4">
              Shopping Cart
            </h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <div className="hidden md:flex justify-between mb-4">
                  <span className="font-semibold">Product</span>
                  <span className="font-semibold mr-2">Name</span>
                  <span className="font-semibold mr-10">Price</span>
                  <span className="font-semibold mr-12">Quantity</span>
                  <span className="font-semibold mr-4">Total</span>
                </div>

                {/* Cart Items */}
                {cart.map((item, index) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row ml-0 items-center mb-4 p-2 sm:ml-0" // added sm:ml-2 for left margin
                  >
                    {/* Remove Item Button */}
                    <div className="relative sm:mr-4">
                      {deletingItemId === item._id ? (
                        <Loading />
                      ) : (
                        <div
                          className="bg-red-500 rounded-full p-1 cursor-pointer"
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          <CiSquareRemove className="text-xl text-white font-bold" />
                        </div>
                      )}
                    </div>

                    {/* Product Image */}
                    <div className="flex-shrink-0 sm:mr-4 w-16 h-16">
                      <img
                        src={item.productDetails.images[0]?.url}
                        alt={item.productDetails.name}
                        className="rounded-md w-full h-full"
                      />
                    </div>

                    {/* Product Name */}
                    <p className="text-lg font-medium sm:ml-16 w-full sm:w-1/4 text-center sm:text-left truncate">
                      {item.productDetails.name}
                    </p>

                    {/* Product Price */}
                    <span className="text-lg sm:ml-10 w-full sm:w-auto text-center">
                      ₹{item.productDetails.price}
                    </span>

                    <div className="flex items-center md:ml-40 mt-2 sm:mt-0">
                      <button
                        className="p-2 bg-gray-200 rounded"
                        onClick={() =>
                          handleDecreaseQuantity(item._id, item.quantity)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="p-2 bg-gray-200 rounded"
                        onClick={() =>
                          handleIncreaseQuantity(item._id, item.quantity)
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Total Price */}
                    <span className="text-lg font-bold mt-2 sm:mt-0 w-full sm:w-auto text-center sm:text-left md:ml-40">
                      ₹{item.productDetails.price * item.quantity}
                    </span>
                  </div>
                ))}

                {/* Coupon Input and Apply Button */}
                <div className="flex flex-col sm:flex-row items-center  justify-between mt-6 p-2 space-y-4 sm:space-y-0">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon Code"
                    className="p-2 border border-gray-300 rounded-lg w-full sm:w-3/4"
                  />
                  <button
                    className="bg-blue-500 text-white p-2 rounded-lg w-full sm:w-1/4"
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>

                {/* Price Breakdown */}
                <div className="mt-6 p-2">
                  <div className="flex justify-between mb-2 ">
                    <span>Subtotal ({cart.length} items):</span>
                    <span className="font-bold">₹{calculateSubtotal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Discount:</span>
                    <span className="font-bold">{discount}%</span>
                  </div>
                  <div className="flex justify-between text-xl  font-bold">
                    <span>Total after Discount:</span>
                    <span>₹{calculateDiscountedTotal()}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Address and Payment Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Address */}
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
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="p-2 border border-gray-300 rounded-lg w-1/2 mr-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="p-2 border border-gray-300 rounded-lg w-1/2 ml-2"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your personal data will be used to process your order and for
              other purposes described in our privacy policy.
            </p>
            <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">
              Pay ₹{calculateDiscountedTotal()}
            </button>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      <AddressModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        newAddress={newAddress}
        handleAddressChange={handleAddressChange}
        handleSaveAddress={handleSaveAddress}
      />
    </div>
  );
};

export default ShoppingCart;
