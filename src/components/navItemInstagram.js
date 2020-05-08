import React from "react";

function NavItemInstagram(props){
  return (
    <li className="nav-item">
      <a href="https://www.instagram.com/njit_rha/?hl=en" className="icon-button" >
        {props.icon}
      </a>
    </li>
  );

}
export default NavItemInstagram;