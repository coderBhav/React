import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { usercontext } from "../utils/usercontext";
import { useContext, useState } from "react";
import { Themecontext } from "../utils/Themecontext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const user = useContext(usercontext);
  const {theme , toggleTheme} = useContext(Themecontext);
  const [name,setName]=useState("LogIn");
  const [click,setClick]=useState(false);
  
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50 dark:bg-black dark:shadow-amber-50">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer select-none">
        <img src={LOGO_URL} alt="Logo" className="h-20 w-auto dark:rounded-full" />
      </div>

      {/* Right - Nav Links */}
      <nav>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium dark:text-white">
          <li>
            <Link to="/Home" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/SearchBar">
              <MagnifyingGlassIcon className="h-5 w-5 hover:cursor-pointer hover:text-orange-500"/>
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
          <button className={`p-1.5 ${click ? "bg-transparent text-orange-500 font-extrabold" : "hover:text-orange-500 text-gray-700 hover:bg-gray-700 bg-orange-500 hover:cursor-pointer rounded-lg dark:text-white"}`} onClick={()=>{setName(user),setClick(true)}}>{name}</button>
          <button className="hover:cursor-pointer dark:text-yellow-400" onClick={toggleTheme}>{theme === "light"? "Moon":"Sun"}</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;