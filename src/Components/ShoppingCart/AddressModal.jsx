import React from "react";

const AddressModal = ({
  modalIsOpen,
  closeModal,
  newAddress,
  handleAddressChange,
  handleSaveAddress,
}) => {
  if (!modalIsOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-4">
        <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={newAddress.fullName}
            onChange={handleAddressChange}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={newAddress.phoneNumber}
            onChange={handleAddressChange}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={newAddress.pincode}
            onChange={handleAddressChange}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <div className="flex justify-between">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={newAddress.state}
              onChange={handleAddressChange}
              className="p-2 border border-gray-300 rounded-lg w-1/2 mr-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={newAddress.city}
              onChange={handleAddressChange}
              className="p-2 border border-gray-300 rounded-lg w-1/2 ml-2"
            />
          </div>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={newAddress.streetAddress}
            onChange={handleAddressChange}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, unit, etc. (optional)"
            value={newAddress.apartment}
            onChange={handleAddressChange}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={handleSaveAddress}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
