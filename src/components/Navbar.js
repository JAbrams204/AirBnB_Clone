import React from "react";
import '../Style.css';

function Navbar() {
  return(
      <nav className="navbar">
        <img className="logo" src={require("../images/airbnb-logo.png")} alt="airbnb logo" />
      </nav>
  )
}
export default Navbar

