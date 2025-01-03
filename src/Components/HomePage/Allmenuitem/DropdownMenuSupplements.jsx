import React from "react";
import { Link } from "react-router-dom";
import EdibleOilImg from "./img/edoil.png";

const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 lg:w-[18rem] md:w-[20rem] sm:w-[8rem] w-[8rem]  bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="grid grid-cols-1 p-2">
        <div className="flex items-start">
          <img
            src={EdibleOilImg}
            alt="Edible Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/protein-powders" className="font-semibold text-sm">
              Protein Powders
            </Link>
            <p className="text-gray-500 text-xs">
              High-performance whey protein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
