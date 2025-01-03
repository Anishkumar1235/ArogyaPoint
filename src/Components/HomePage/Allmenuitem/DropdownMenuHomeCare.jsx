import React from "react";
import { Link } from "react-router-dom";
import EdibleOilImg from "./img/edoil.png";

const DropdownMenu = () => {
  return (
    <div className="absolute -left-1 mt-2 lg:w-[20rem] md:w-[23rem] sm:w-[18rem] w-[18rem]   bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="grid grid-cols-1  p-2">
        <div className="flex items-start">
          <img
            src={EdibleOilImg}
            alt="Edible Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/repellents-product" className="font-semibold text-sm">
              Repellents
            </Link>
            <p className="text-gray-500 text-xs">
              Effective, protective repellents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
