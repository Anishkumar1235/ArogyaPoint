import React from "react";
import { Link } from "react-router-dom";
import EdibleOilImg from "./img/edoil.png";
import EssentialOilImg from "./img/essoil.png";
import JamsSpreadsImg from "./img/jam.png";
import SauceDipsImg from "./img/dips.png";
import SweetsSavouriesImg from "./img/sweet.png";
import ChocolatesImg from "./img/choco.png";

const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 lg:w-[18rem] md:w-[20rem] sm:w-[8rem] w-[8rem]   bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="grid grid-cols-1 p-2">
        <div className="flex items-start">
          <img
            src={EdibleOilImg}
            alt="Edible Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/contact" className="font-semibold text-sm">
              Contact Us
            </Link>
            <p className="text-gray-500 text-xs">
              Pure, nutritious cooking oil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
