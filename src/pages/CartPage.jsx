import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartImage from "../assets/Group.png";
import { Link } from "react-router-dom";
import { fetchCartItems } from "../redux/slices/addToCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems || []);
  const loading = useSelector((state) => state.cartItems.loading);
  const error = useSelector((state) => state.cartItems.error);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      dispatch(fetchCartItems());
    } else {
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center bg-gray-100 m-6">
          <div className="bg-white p-8 rounded-lg shadow-md text-center w-full h-96">
            <h2 className="text-2xl font-semibold mb-2">Shopping Cart</h2>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="w-44 mx-auto mb-4"
            />
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <Link to="/login">
              <button className="bg-green-500 text-white font-semibold py-2 px-10 rounded-lg hover:bg-green-600">
                Log in or Sign Up
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Header />
        <div>Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-gray-100 m-6">
          <div className="bg-white p-8 rounded-lg shadow-md text-center w-full h-96">
            <h2 className="text-2xl font-semibold mb-2">Shopping Cart</h2>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="w-44 mx-auto mb-4"
            />
            <p className="text-gray-600 text-lg mb-4">Your Cart is empty</p>
          </div>
        </div>
      ) : (
        <ShoppingCart cartItems={cartItems} />
      )}
      <Footer />
    </>
  );
};

export default CartPage;
