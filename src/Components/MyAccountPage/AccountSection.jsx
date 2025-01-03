import React, { useEffect, useState } from "react";
import MyAccount from "./MyAccount";
import Order from "./Order";
import Wishlist from "./Wishlist";
import LogoutModal from "./LogoutModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/slices/authUserSlice";

function AccountSection({
  userProfile,
  sections,
  onLogout,
  modalMessage = "Check your email for a booking confirmation. We’ll see you soon!",
}) {
  const [selectedSection, setSelectedSection] = useState("MyAccount");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  const handleSectionClick = (section) => {
    if (section === "Logout") {
      setShowLogoutModal(true);
      if (onLogout) {
        onLogout(); // Execute any logout logic provided via props
      }
    } else {
      setSelectedSection(section);
    }
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "OrderHistory":
        return <Order />;
      case "Wishlist":
        return <Wishlist />;
      case "MyAccount":
      default:
        return <MyAccount />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <div className="lg:w-1/4 md:w-1/3 w-full bg-white p-6 rounded-lg shadow-lg  sm:m-4 lg:m-4 h-auto lg:h-[32rem]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img
              src={userProfile.image}
              alt="Profile"
              className="rounded-full"
            />
          </div>
          {loading ? (
            <div className="text-gray-800 font-bold text-xl mb-6">
              Loading...
            </div>
          ) : (
            <div className="text-gray-800 font-bold text-xl mb-6">
              {user ? user?.name : "User"}
            </div>
          )}
          <ul className="w-full">
            {sections.map((section) => (
              <li
                key={section.key}
                className={`cursor-pointer p-3 rounded-lg flex items-center gap-3 mb-2 ${
                  selectedSection === section.key
                    ? "bg-gray-200 text-green-500"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleSectionClick(section.key)}
              >
                {section.icon} {section.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:w-3/4 md:w-2/3 w-full p-6 bg-white shadow-md  lg:m-4 sm:m-4 rounded-md overflow-y-auto h-auto lg:h-[32rem]">
        {renderSection()}
      </div>

      {showLogoutModal && (
        <LogoutModal
          message={modalMessage}
          onClose={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}

export default AccountSection;
