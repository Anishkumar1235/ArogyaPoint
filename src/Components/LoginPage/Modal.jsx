import React, { useState } from "react";
import axios from "axios";

const Modal = ({ isOpen, onClose }) => {
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpConfirmed, setIsOtpConfirmed] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [conformPasswordVisible, setConformPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conformPassword, setConformPassword] = useState(""); // corrected from conformPassword
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailFilled(e.target.value !== "");
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        "https://arogya-point-backend.onrender.com/api/v1/users/forgot-password",
        {
          email
        }
      );
      if (response.data.success) {
        setIsOtpSent(true);
        setSuccessMessage("OTP sent successfully to your email.");
      } else {
        setErrorMessage("Error sending OTP. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to send OTP.");
    }
  };

  const handleConfirmOtp = (e) => {
    e.preventDefault();
    setIsOtpConfirmed(true); // Assuming the OTP is confirmed on the frontend
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== conformPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(
        "https://arogya-point-backend.onrender.com/api/v1/users/reset-password",
        {
          email,
          otp,
          newPassword,
          conformPassword, // corrected from conformPassword
        }
      );
      if (response.data.success) {
        setSuccessMessage("Password reset successfully.");
        setIsOtpConfirmed(false); // Reset modal to initial state after success
      } else {
        setErrorMessage("Error resetting password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to reset password.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConformPasswordVisible(!conformPasswordVisible);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4">
          {isOtpConfirmed ? "Set New Password" : "Reset Password"}
        </h2>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {!isOtpConfirmed ? (
          <>
            <p className="text-sm text-gray-600 mb-4">
              Lost your password? Please enter your Email ID. You will receive
              an OTP to reset your password via email.
            </p>
            <form onSubmit={handleConfirmOtp}>
              <div className="mb-4">
                <label
                  htmlFor="username-email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Enter Email ID
                </label>
                <input
                  id="username-email"
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Username or email"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              {isEmailFilled && !isOtpSent && (
                <div className="flex justify-end mb-4">
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send OTP
                  </button>
                </div>
              )}
              {isOtpSent && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="otp"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Enter OTP
                    </label>
                    <input
                      id="otp"
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Enter OTP"
                      onChange={(e) => setOtp(e.target.value)}
                      value={otp}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="py-2 px-4 border border-green-600 text-green-600 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Confirm
                    </button>
                  </div>
                </>
              )}
            </form>
          </>
        ) : (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4 relative">
              <label
                htmlFor="new-password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Enter New Password
              </label>
              <input
                id="new-password"
                type={passwordVisible ? "text" : "password"}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 mt-8 flex items-center text-xl leading-5 cursor-pointer"
              >
                {passwordVisible ? "🙈" : "👁"}
              </span>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm New Password
              </label>
              <input
                id="confirm-password"
                type={conformPasswordVisible ? "text" : "password"}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                onChange={(e) => setConformPassword(e.target.value)}
                value={conformPassword}
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 mt-8 flex items-center text-xl leading-5 cursor-pointer"
              >
                {conformPasswordVisible ? "🙈" : "👁"}
              </span>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;