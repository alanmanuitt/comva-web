import React from "react";
import { FiMenu, fix } from "react-icons/fi";

import "./Navbar.css";

const Navbar = ({ links }) => (
  <>
    <nav className="navbar">
      <ul className="navbar_list">
        <li className="navbar_item">
          <span className="navbar_logo">Comva</span>
        </li>
        {links.map(({ id, title, url }) => (
          <li className="navbar_item" key={`navbar-${id}`}>
            <a className="navbar_link" href={url}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default Navbar;
