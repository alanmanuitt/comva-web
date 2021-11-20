import React from 'react'
import {FiMenu, fix} from "react-icons/fi";

//const navbarLinks = [{url: "/home", title="Home"}];
const Navbar = ({ navbarLinks }) => {
    return (
        //<span className="navbar_logo">Comva</span>
        <nav className="navbar">
            <ul className="navbar_list">
                {navbarLinks.map((item) => {
                    return (
                        <li className="navbar_item" key={item.title}>
                            <a className="navbar_link" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

          

export default Navbar
