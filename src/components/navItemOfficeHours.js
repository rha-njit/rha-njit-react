import React from "react";
import { Link } from "@reach/router";

function NavItemOfficeHours(props){
  return (
    <li className="nav-item">
        {/* Need to add offcie hours page link*/}
      <Link to="/" className="icon-button" >
        {props.icon}
      </Link>
    </li>
  );

}
export default NavItemOfficeHours;