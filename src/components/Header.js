import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer">
        <img src={LOGO_URL} alt="Logo" className="h-20 w-auto" />
      </div>

      {/* Center - Search 
      <div className="flex flex-1 max-w-lg mx-6">
        <input
          type="text"
          placeholder="Search for Food"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="px-4 py-2 bg-orange-500 text-white rounded-r-full hover:bg-orange-600">
          Search
        </button>
      </div> */}

      {/* Right - Nav Links */}
      <nav>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/Home" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-orange-500">
              Contact Us
            </Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;