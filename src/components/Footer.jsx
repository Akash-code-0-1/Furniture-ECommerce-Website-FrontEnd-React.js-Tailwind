import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-8 lg:pl-16 lg:pr-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Section */}
        <div className="mb-6 lg:mb-28">
          <h2 className="text-2xl lg:text-[24px] lg:mb-10 font-poppins font-bold text-black mb-2">Funiro.</h2>
          <p className="text-gray-500">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* middle Section  */}
        <div className="flex flex-wrap gap-8 lg:gap-20 mb-6 lg:mb-0">
          <div>
            <h3 className="text-gray-500 font-semibold mb-3 lg:mb-10">Links</h3>
            <ul className="space-y-2 text-black text-[16px]">
              <li className="lg:leading-10">Home</li>
              <li className="lg:leading-10">Shop</li>
              <li className="lg:leading-10">About</li>
              <li className="lg:leading-10">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold mb-3 lg:mb-10">Help</h3>
            <ul className="space-y-2 text-black text-[16px]">
              <li className="lg:leading-10">Payment Options</li>
              <li className="lg:leading-10">Returns</li>
              <li className="lg:leading-10">Privacy Policies</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto lg:mb-36">
          <h3 className="text-gray-500 font-semibold mb-3 lg:mb-10">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black px-4 py-2 w-full lg:w-auto text-sm text-gray-600  focus:outline-none "
            />
            <button className="border-b border-black bg-white text-black fond-poppins font-bold py-1 ml-4   hover:bg-gray-800 hover:text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4">
        <p className="text-center lg:text-left text-gray-500 text-sm">
          2023 Funiro. All rights reserved
        </p>
      </div>
    </footer>

  );
};

export default Footer;