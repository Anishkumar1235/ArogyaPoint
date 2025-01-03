import React from "react";
import policyImage1 from "./AboutImg/img1.svg";
// import policyImage2 from "./AboutImg/img1.svg";
import policyImage3 from "./AboutImg/img2.svg";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  return (
    <div className="p-6 md:p-12 lg:p-24 bg-gray-100 text-gray-800 w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          <span className="text-green-600">Privacy</span> Policy
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            We are committed to safeguarding the privacy of our website
            visitors; this policy sets out how we will treat your personal
            information.
          </h2>
          <p className="mb-4">
            Our website uses cookies. By using our website and agreeing to this
            policy, you consent to our use of cookies in accordance with the
            terms of this policy.
          </p>
          <img
            src={policyImage1}
            alt="Policy Image 1"
            className="w-full mb-4"
          />

          <h2 className="text-lg font-semibold text-green-600 mb-4">
            What information do we collect?
          </h2>
          <p className="mb-4">
            We may collect, store and use the following kinds of personal
            information:
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>
              information about your computer and about your visits to and use
              of this website
            </li>
            <li>
              information relating to any transactions carried out between you
              and us on or in relation to this website
            </li>
            <li>
              information that you provide to us for the purpose of registering
              with us
            </li>
            <li>
              information that you provide to us for the purpose of subscribing
              to our website services, email notifications and/or newsletters
            </li>
            <li>any other information that you choose to send to us</li>
          </ul>

          <h2 className="text-lg font-semibold text-green-600 mb-4">Cookies</h2>
          <p className="mb-4">
            A cookie is a file containing an identifier sent by a web server to
            a web browser and stored by the browser. The information is then
            sent back to the server each time the browser requests a page from
            the server.
          </p>
          <p className="mb-4">
            We may use both "session" cookies and "persistent" cookies on the
            website.
          </p>
          <p className="mb-4">
            We use Google Analytics to analyze the use of this website. Google
            Analytics generates statistical and other information about website
            use by means of cookies, which are stored on users' computers.
          </p>
          {/* <img
            src={policyImage2}
            alt="Policy Image 2"
            className="w-full mb-4"
          /> */}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-4">
            What we use the information we gather
          </h2>
          <p className="mb-4">
            We require this information to understand your needs and provide you
            with a better service.
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>
              We may use the information to improve our products and services.
            </li>
            <li>
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting.
            </li>
            <li>We may contact you by email, phone, fax or mail.</li>
          </ul>
          <h2 className="text-lg font-semibold text-green-600 mb-4">
            Disclosures
          </h2>
          <p className="mb-4">
            We may disclose information about you to any of our employees,
            officers, agents, suppliers or subcontractors insofar as reasonably
            necessary for the purposes as set out in this privacy policy.
          </p>
          <p className="mb-4">
            In addition, we may disclose your personal information:
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>to the extent that we are required to do so by law</li>
            <li>
              in connection with any legal proceedings or prospective legal
              proceedings
            </li>
            <li>in order to establish, exercise or defend our legal rights</li>
          </ul>
          <h2 className="text-lg font-semibold text-green-600 mb-4">Contact</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our treatment
            of your personal information, please write to us by email to
            privacy@example.com.
          </p>
          <img
            src={policyImage3}
            alt="Policy Image 3"
            className="w-full mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Contact: If you have any questions about this privacy policy or our
            treatment of your personal information, please write to us by email
            at{" "}
            <Link to="mailto:pointarogya@gmail.com" className="text-blue-500">
              pointarogya@gmail.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
