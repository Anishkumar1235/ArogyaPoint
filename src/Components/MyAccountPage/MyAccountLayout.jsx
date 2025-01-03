import React from "react";
import AccountSection from "./AccountSection";
import { VscAccount } from "react-icons/vsc";
import { FiBox } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import P1 from "./img/preetamsirImg.jpeg";

const userProfile = {
  name: "Preetam Kumar Behera",
  image: P1,
};

const sections = [
  {
    key: "MyAccount",
    label: "My Account",
    icon: <VscAccount className="text-xl" />,
  },
  {
    key: "OrderHistory",
    label: "Orders",
    icon: <FiBox className="text-xl" />,
  },
  {
    key: "Wishlist",
    label: "Wishlist",
    icon: <FaRegHeart className="text-xl" />,
  },
  {
    key: "Logout",
    label: "Log Out",
    icon: <AiOutlineLogout className="text-xl" />,
  },
];

function App() {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <AccountSection
      userProfile={userProfile}
      sections={sections}
      onLogout={handleLogout}
      modalMessage="You have successfully logged out."
    />
  );
}

export default App;
