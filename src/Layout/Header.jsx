import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import {
  FaSearch,
  FaCartArrowDown,
  FaHeart,
  FaInfoCircle,
} from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./image/arogypointlogo.png";
import Menu from "./image/menu.svg";
import App from "./image/appStore.png.svg";
import Play from "./image/googlePlay.png.svg";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { fetchCartItems } from "../redux/slices/addToCart";
import { getUserById, logoutUser } from "../redux/slices/authUserSlice";
import ProductSearch from "./ProductSearch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartItemCount = cartItems.length;
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      dispatch(fetchCartItems());
      dispatch(getUserById()); // Fetch user data on component mount
    } else {
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  const logout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. You are not logged in.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8001/api/v1/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      setIsAuthenticated(false);
      dispatch(logoutUser());
      toast.success("Logout successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Error during logout.");
    }
  };

  const menuItems = [
    { id: 1, label: "My Account", icon: <CgProfile />, url: "/my-account" },
    { id: 4, label: "About Us", icon: <FaInfoCircle />, url: "/about-us" },
    { id: 5, label: "Privacy Policy", icon: <FiBox />, url: "/privacy-policy" },
    { id: 6, label: "Login", icon: <RiLoginCircleFill />, url: "/login" },
    { id: 7, label: "Contact", icon: <MdContactPhone />, url: "/contact" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0C3D20] flex flex-col sm:flex-row items-center justify-between py-2 px-4 sticky top-0 z-50 shadow-md h-auto sm:h-20 m">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center">
          <img
            src={Menu}
            className="text-white text-xl sm:text-5xl mr-4 cursor-pointer"
            onClick={handleMenuToggle}
          />
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[10rem] sm:w-[15rem] " />
          </Link>
        </div>
        <div className="flex items-center sm:hidden">
          <Link to="/cart" className="relative flex items-center">
            <FaCartArrowDown className="text-lg text-white font-semibold" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 mt-[-5px] mr-[-5px] bg-red-500 text-white rounded-full h-[0.75rem] w-[0.75rem] flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="flex items-center w-full sm:w-auto  sm:order-none  py-2  sm:bg-transparent mt-1">
        <ProductSearch />
      </div>

      <div className="hidden sm:flex items-center">
        {isAuthenticated ? (
          <>
            {/* Display username if available */}
            {user && (
              <div className="flex items-center mr-4">
                <p className="text-white font-semibold mr-2">{user.name}</p>
              </div>
            )}
            <button onClick={logout} className="flex items-center">
              <p className="mr-2 text-white font-semibold">LOGOUT</p>
              <CgProfile className="mr-16 text-xl text-white font-semibold" />
            </button>
            <Link to="/cart" className="relative flex items-center">
              <span className="text-sm sm:text-base font-semibold mr-2 text-white">
                CART
              </span>
              <FaCartArrowDown className="text-lg text-white font-semibold mr-16" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 mt-[-5px] mr-[55px] bg-red-500 text-white rounded-full h-[0.75rem] w-[0.75rem] flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="flex items-center">
              <p className="mr-2 text-white font-semibold">LOGIN</p>
              <CgProfile className="mr-16 text-xl text-white font-semibold" />
            </Link>
            <Link to="/cart" className="relative flex items-center">
              <span className="text-sm sm:text-base font-semibold mr-2 text-white">
                CART
              </span>
              <FaCartArrowDown className="text-lg text-white font-semibold mr-16" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 mt-[-5px] mr-[55px] bg-red-500 text-white rounded-full h-[0.75rem] w-[0.75rem] flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </>
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-80">
            <div className="flex justify-end">
              <button
                onClick={handleMenuToggle}
                className="text-black text-2xl"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="flex flex-col items-center p-2 border rounded-lg"
                  onClick={handleMenuToggle}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="mt-2 text-sm font-semibold">{item.label}</div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <div className="text-center text-sm">DOWNLOAD MOBILE APP</div>
              <div className="flex justify-center mt-2">
                <img src={Play} alt="Google Play" className="h-10 mx-2" />
                <img src={App} alt="App Store" className="h-10 mx-2" />
              </div>
              <div className="text-center text-xs mt-4">
                © 2024 Arogyapoint.com Design. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;