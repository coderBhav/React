import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="search-container">
                <input className="Search" type="text" placeholder="Search for Food"/>
                <button className="search-btn">Search</button>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/Home"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Contact"><li>Contact Us</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;