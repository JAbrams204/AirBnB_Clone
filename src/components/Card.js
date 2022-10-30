import React from "react";
import '../Style.css';
// import '../images/katie-zaferes.png'
// import '../images/mountain-bike.png'
// import '../images/wedding-photography.png'

function Card(props) {
  let badgeText
  if (props.info.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.info.location === "Online") {
      badgeText = "ONLINE"
  } else {
      
  }
  return(
    <div className="card">
      <div className="card-info">
        {props.info.openSpots === 0 && <div className="card--badge">{badgeText}</div>}
        {props.info.location === 'Online' && <div className="card--badge">{badgeText}</div>}
    
        <img className="card-img" src={props.info.coverImg} alt="" />

        <div className="metrics">
            <img className="star" src={require("../images/star-image.png")} alt="customer star ranking" />
            <span className="rating">{props.info.stats.rating}</span>
            <span className="review-count">({props.info.stats.reviewCount}) • </span>
            <span className="country">{props.info.location}</span>
        </div>
            <p className="text">{props.info.title}</p>
            <p className="price"><strong>From ${props.info.price}</strong>/person</p>
      </div>    
    </div>
  )
}
export default Card


      {/* <img className="zaferes-img" src={`../images/{props.img}`} alt="" /> */}

      {/* <img className="zaferes-img" src={require(`../images/{props.img}`)} alt="" /> */}

