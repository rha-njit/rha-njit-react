import React from "react";

import { Link } from "@reach/router";

function NavItemMcraft(props){
  return (
    <li className="nav-item">
      <Link to="/mcraftserv" className="icon-button" >
        {props.icon}
      </Link>
    </li>
  );

}
export default NavItemMcraft;