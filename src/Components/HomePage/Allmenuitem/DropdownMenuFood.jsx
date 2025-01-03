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
            <Link to="/edible-oils" className="font-semibold text-sm">
              Edible Oils
            </Link>
            <p className="text-gray-500 text-xs">
              Pure, nutritious cooking oil
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
              Essential Oils
            </Link>
            <p className="text-gray-500 text-xs">Aromatic, therapeutic oils</p>
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
              Jams & Spreads
            </Link>
            <p className="text-gray-500 text-xs">Delicious, fruity spreads</p>
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
              Sauce & Dips
            </Link>
            <p className="text-gray-500 text-xs">Flavorful, zesty condiments</p>
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
              Sweets & Savouries
            </Link>
            <p className="text-gray-500 text-xs">Tasty traditional delights</p>
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
              Chocolates & Confectionaries
            </Link>
            <p className="text-gray-500 text-xs">Indulgent, sweet treats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
