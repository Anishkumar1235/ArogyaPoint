import React from "react";
import { Link } from "react-router-dom";
import EdibleOilImg from "./img/edoil.png";
import EssentialOilImg from "./img/essoil.png";

const DropdownMenu = () => {
  return (
    <div className="absolute left-0 mt-2 lg:w-[24rem] md:w-[23rem] sm:w-[21.5rem] w-[21rem]   bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="grid grid-cols-2 gap-4 p-2">
        <div className="flex items-start">
          <img
            src={EdibleOilImg}
            alt="Edible Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/tea-powder" className="font-semibold text-sm">
              Tea Powder
            </Link>
            <p className="text-gray-500 text-xs">Rich Aromatic Tea Blend</p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={EssentialOilImg}
            alt="Essential Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/coffee-powder" className="font-semibold text-sm">
              Coffee Powder
            </Link>
            <p className="text-gray-500 text-xs">Bold Aromatic Tea Blend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
