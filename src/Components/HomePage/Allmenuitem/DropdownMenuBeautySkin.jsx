import React from "react";
import { Link } from "react-router-dom";
import EdibleOilImg from "./img/edoil.png";
const DropdownMenu = () => {
  return (
    <div className="absolute left-0 mt-2 lg:w-[18rem] md:w-[20rem] sm:w-[8rem] w-[8rem] bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="grid grid-cols-1 p-2">
        <div className="flex items-start">
          <img
            src={EdibleOilImg}
            alt="Edible Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/skincare-products" className="font-semibold text-sm">
              Skincare
            </Link>
            <p className="text-gray-500 text-xs">
              Effective, protective skincare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
