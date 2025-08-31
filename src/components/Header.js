import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
        <div className="nav-items">
            <ul>
                <a href="link"><li>Home</li></a>
                <a href="link"><li>About</li></a>
                <a href="link"><li>Contact Us</li></a>
                <a href="link"><li>Cart</li></a>
            </ul>
        </div>
        </div>
    )
};
export default Header;