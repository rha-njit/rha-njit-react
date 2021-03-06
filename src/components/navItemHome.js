import React from "react";

import { Link } from "@reach/router";

function NavItemHome(props){
  return (
    <li className="nav-item">
      <Link to="/" className="icon-button" >
        {props.icon}
      </Link>
    </li>
  );

}
export default NavItemHome;