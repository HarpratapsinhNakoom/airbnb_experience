import React from 'react'


import navbarLogo from "../images/navbar-logo.png";
export default function Navbar() {
    return (
        <nav className="navbar--section">
            <img src={navbarLogo} alt="" className='navbar--logo'/>
        </nav>
    );
};