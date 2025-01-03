import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import AddAddress from "./AddAddress";

const MyAccount = () => {
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);

  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);

  const handlePasswordChange = () => setIsPasswordPopupOpen(true);
  const closePasswordPopup = () => setIsPasswordPopupOpen(false);

  const handleAddressChange = () => setIsAddressPopupOpen(true);
  const closeAddressPopup = () => setIsAddressPopupOpen(false);

  const handleAddressSave = () => {
    closeAddressPopup();
  };

  const toggleDefaultAddress = () => {
    setIsDefaultAddress((prev) => !prev);
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white py-7 mb-5">
        <h2 className="text-3xl ml-5 font-semibold">My account</h2>
      </div>

      {/* Account Details */}
      <div className="bg-white p-6 border flex">
        <div className="w-1/2 pr-4">
          {/* Name */}
          <div className="mb-2">
            <label className="block font-bold text-gray-800 mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full p-2 border border-gray-300 rounded pr-20"
                readOnly
              />
              <button
                onClick={handlePasswordChange}
                className="absolute right-2 top-2 text-blue-500"
              >
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Shipping Addresses */}
        <div className="w-1/2 pl-4 pr-12 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Shipping Addresses:</h3>
          <div className="mt-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isDefaultAddress}
                onChange={toggleDefaultAddress}
                className="form-checkbox text-green-600 accent-green-400"
              />
              <span className="text-gray-700">Make as default address</span>
            </label>
          </div>
          <button onClick={handleAddressChange} className="mt-4 text-blue-500">
            + Add New Address
          </button>
        </div>
      </div>

      {/* Password Change Popup */}
      {isPasswordPopupOpen && (
        <ChangePassword closePasswordPopup={closePasswordPopup} />
      )}

      {/* Address Change Popup */}
      {isAddressPopupOpen && (
        <AddAddress
          closeAddressPopup={closeAddressPopup}
          handleAddressSave={handleAddressSave}
        />
      )}
    </div>
  );
};

export default MyAccount;
