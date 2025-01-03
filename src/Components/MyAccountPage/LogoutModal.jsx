import React from "react";

function LogoutModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[24rem] text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-600 h-16 w-16 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-12 h-12 ml-2 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Logout Successfully</h3>
        <p className="text-gray-700 font-semibold mb-4">
          Thank You for Visiting Arogya Point! ✌️
        </p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default LogoutModal;
