import React from "react";
import { Link } from "react-router-dom";
import logo from "./image/arogypointlogo.png"; // Replace with the path to your logo image
import FooterImg from "./image/footerimg.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" text-gray-300 relative ">
        <img
          src={FooterImg}
          alt=""
          className="w-full absolute top-0 left-0 h-full object-cover z-0"
        />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 py-8 px-4 relative z-10 ">
          <div>
            <img src={logo} alt="Arogya Point" className="" />
            <p>Reg. Office</p>
            <p>#26/A, Hanumaiha Layout, Veerasagara Road,</p>
            <p>
              Attur Layout, Yelahanka New Town, Bangalore, Karnataka – 560064
            </p>
            <p>Contact us – Call +91-7411023781</p>
            <p>Whatsapp: +91-9902826711</p>
            <p>E-Mail – pointarogya@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-16 ">SHOP BY CATEGORIES</h3>
            <ul>
              <li className="text-justify">Hot-Beverages</li>
              <li>Food</li>
              <li>Home Care</li>
              <li>Beauty & Skin</li>
            </ul>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.76270989691!2d77.54355684080397!3d13.102944643447929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae227c44a8dda3%3A0x9eb19b877115f465!2sVeerasagara%20Main%20Rd%2C%20Attur%20Layout%2C%20Yelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1722332087063!5m2!1sen!2sin"
              width="350"
              height="250"
              style={{ border: 0, marginTop: 20 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex space-x-4 mt-8">
              <Link
                to="https://www.facebook.com"
                className="text-white hover:text-gray-400 text-2xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.twitter.com"
                className="text-white hover:text-gray-400 text-2xl"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://www.linkedin.com"
                className="text-white hover:text-gray-400 text-2xl"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://www.youtube.com"
                className="text-white hover:text-gray-400 text-2xl"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://www.instagram.com"
                className="text-white hover:text-gray-400 text-2xl"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center  relative bg-transparent py-6 px-8 mt-[-20px]">
          <p>© 2024 Arogyapoint.com Design. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
