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
    <div className="absolute left-0 mt-2 lg:w-[24rem] md:w-[23rem] sm:w-[21.5rem] w-[21rem]   bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="grid grid-cols-2 gap-4 p-2">
        <div className="flex items-start">
          <img
            src={EdibleOilImg}
            alt="Edible Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/compression-garments" className="font-semibold text-sm">
              Compression Garments
            </Link>
            <p className="text-gray-500 text-xs">
              Supportive, therapeutic wear
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={EssentialOilImg}
            alt="Essential Oils"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/essential-oils" className="font-semibold text-sm">
              Body Belts & Braces
            </Link>
            <p className="text-gray-500 text-xs">Comfortable belts & braces</p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={JamsSpreadsImg}
            alt="Jams & Spreads"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/jams-spreads" className="font-semibold text-sm">
              Allied Products
            </Link>
            <p className="text-gray-500 text-xs">versatile accessories</p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={SauceDipsImg}
            alt="Sauce & Dips"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/sauce-dips" className="font-semibold text-sm ">
              Cervical Aids
            </Link>
            <p className="text-gray-500 text-xs">Neck support & relief aidss</p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={SweetsSavouriesImg}
            alt="Sweets & Savouries"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/sweets-savouries" className="font-semibold text-sm">
              Ankle Support
            </Link>
            <p className="text-gray-500 text-xs">
              Stabilizing, cushioned ankle support
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            src={ChocolatesImg}
            alt="Chocolates & Confectionaries"
            className="w-12 h-12 mr-2"
          />
          <div>
            <Link to="/chocolates" className="font-semibold text-sm">
              Fracture Aids
            </Link>
            <p className="text-gray-500 text-xs">
              Supportive, healing fracture aids
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
