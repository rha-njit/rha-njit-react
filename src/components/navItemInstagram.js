import React from "react";
import { Link } from "@reach/router";

function NavItemInstagram(props){
  return (
    <li className="nav-item">
        {/* Need to add instagram link*/}
      <Link to="/" className="icon-button" >
        {props.icon}
      </Link>
    </li>
  );

}
export default NavItemInstagram;