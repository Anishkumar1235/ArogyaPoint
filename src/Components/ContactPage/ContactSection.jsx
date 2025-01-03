import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You need to log in first.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      website: formData.website,
      message: formData.message,
    };

    setLoading(true); // Set loading state to true

    try {
      // Make the API request
      const response = await axios.post(
        "https://arogya-point-backend.onrender.com/api/v1/contactus/create",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", website: "", message: "" });
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col lg:flex-row m-6">
      <div className="lg:w-1/2 flex flex-col items-start justify-center px-4 py-8 lg:py-0 lg:px-16">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Contact us</h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get in <span className="text-green-600">Touch</span>
        </h3>
        <p className="text-gray-600 mb-6">
          Send us your message and we'll get back to you within 2-4 business hours.
        </p>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Comment or Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            >
              {loading ? "Sending..." : "POST COMMENT"}
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center bg-gray-100 p-4 lg:p-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.76270989691!2d77.54355684080397!3d13.102944643447929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae227c44a8dda3%3A0x9eb19b877115f465!2sVeerasagara%20Main%20Rd%2C%20Attur%20Layout%2C%20Yelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1722332087063!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
