import React from "react";
import '../Style.css';

function Hero() {
  return(
    <div className="Hero">
        <img className="airbnb-img" src={require("../images/airbnb-image.png")} alt="airbnb pages" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
  )
}
export default Hero
