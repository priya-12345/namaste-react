import {LOGO_URL} from "../utils/constants";
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div  className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
    </div>
    <div className="nav-items">
    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
    <li>Cart</li>
    </ul>
    </div>
    </div>
    );

    export default Header;