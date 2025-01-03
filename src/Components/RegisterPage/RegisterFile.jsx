import React, { useState } from "react";
import image from "./LoginImg/loginImg.png";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const RegisterFile = () => {
  const [usernameError, setUsernameError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleRegister = async (values) => {
    setIsLoading(true); // Set loading to true when starting the registration process
    const { name, username, email, password } = values;

    if (username === "takenUsername") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
      try {
        const response = await axios.post(
          "https://arogya-point-backend.onrender.com/api/v1/users/register",
          { name, userName: username, email, password }
        );

        toast.success("Registration successful! Please verify your email.");
        setEmail(email);
        setUserId(response.data.userId);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error during registration:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post(
        "https://arogya-point-backend.onrender.com/api/v1/users/verifyOTP",
        { email, otp }
      );
      toast.success(response.data.message);
      console.log("OTP verified:", response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 flex items-center justify-center bg-green-900">
        <img
          src={image}
          alt="Left side"
          className="h-[20rem] lg:h-[40rem] w-full m-4 object-cover"
        />
      </div>
      <div className="lg:w-1/2 flex items-center justify-center px-4 py-8 lg:py-0">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome!{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              A password will be sent to your email address.
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {() => (
              <Form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-700 font-semibold"
                    >
                      Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm rounded-t-md"
                      placeholder="Enter Your Full Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="text-gray-700 font-semibold"
                    >
                      Username
                    </label>
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                        usernameError ? "border-red-500" : "border-gray-300"
                      } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
                      placeholder="Username"
                    />
                    <ErrorMessage
                      name="username"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                    {usernameError && (
                      <p className="text-red-500 text-sm mt-1">
                        Username already used
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-700 font-semibold"
                    >
                      Enter Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Enter Your Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="text-gray-700 font-semibold"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="************"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-3 mt-7 flex items-center text-xl leading-5 cursor-pointer z-20"
                    >
                      {passwordVisible ? "🙈" : "👁️"}
                    </span>
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="confirmPassword"
                      className="text-gray-700 font-semibold"
                    >
                      Confirm password
                    </label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type={confirmPasswordVisible ? "text" : "password"}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="************"
                    />
                    <span
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-3 mt-7 flex items-center text-xl leading-5 cursor-pointer z-20"
                    >
                      {confirmPasswordVisible ? "🙈" : "👁️"}
                    </span>
                    <ErrorMessage
                      name="confirmPassword"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading} // Disable button while loading
                    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                      isLoading ? "cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <ClipLoader color={"#fff"} size={20} />
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="text-center text-sm text-gray-600">
            <p>
              Already a user?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="text-center">
            <p className="text-gray-600">OTP has been sent to {email}</p>
            <div className="mt-4">
              <label htmlFor="otp" className="text-gray-700 font-semibold">
                Enter the OTP
              </label>{" "}
              <br />
              <input
                id="otp"
                name="otp"
                type="text"
                required
                className="mt-2 appearance-none rounded-md   w-[20rem] px-3 py-2 border justify-center border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={otp}
                onChange={handleOtpChange} // Update OTP state
              />
            </div>
            <div className="mt-6 flex justify-center space-x-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleOtpSubmit}
                className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RegisterFile;
