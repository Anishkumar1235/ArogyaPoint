import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import image from "./LoginImg/loginImg.png";
import Modal from "./Modal";
import { ClipLoader } from "react-spinners";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email or Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (values) => {
    setIsLoading(true); // Set loading to true before starting the request
    const { email, password } = values;

    try {
      const response = await axios.post(
        "https://arogya-point-backend.onrender.com/api/v1/users/login",
        { email, password }
      );
      const { accessToken } = response.data.data;

      if (accessToken) {
        localStorage.setItem("token", accessToken);
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Failed to retrieve authentication token.");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
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
              Welcome Back{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link
                to="/privacy-policy"
                className="font-medium text-green-600 hover:text-green-500"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {() => (
              <Form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="text-gray-700 font-semibold"
                    >
                      Enter Email or User Name
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Email address or User Name"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="relative mb-6">
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
                      className="appearance-none rounded-none relative block w-full px-3 py-2 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
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
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to=""
                      onClick={handleOpenModal}
                      className="font-medium text-green-600 hover:text-green-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                      isLoading ? "cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <ClipLoader color={"#fff"} size={20} />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="text-center text-sm text-gray-600">
            <p>
              Don't you have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Register
              </Link>
            </p>
          </div>
          <div className="text-center text-sm text-gray-600 mt-4">
            <p>© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LoginFile;
