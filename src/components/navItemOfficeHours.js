import React from "react";
import { Link } from "@reach/router";

function NavItemOfficeHours(props){
  return (
    <li className="nav-item">
      <Link to="/officeHours" className="icon-button" >
        {props.icon}
      </Link>
    </li>
  );

}
export default NavItemOfficeHours;