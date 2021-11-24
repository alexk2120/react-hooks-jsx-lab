import React from "react";
import About from "./About";
import Home from "./Home";

function NavBar() {
  // update the JSX being returned!
  return (<nav>
    <a href = "#home" >Home </a>
    <a href = "#about">About </a>
  </nav>);
}

export default NavBar;
