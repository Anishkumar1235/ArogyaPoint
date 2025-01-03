import React from "react";

const AddAddress = ({ closeAddressPopup, handleAddressSave }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-[32rem] max-h-[80vh] overflow-y-auto mt-20">
        <h3 className="text-lg font-semibold mb-4">Change Address</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apartment</label>
          <input
            type="text"
            name="apartment"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAddressSave}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={closeAddressPopup}
            className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
