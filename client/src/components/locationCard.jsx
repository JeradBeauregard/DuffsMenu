import React from "react";
import "../styles/locationCard.css";


export default function LocationCard({ image, title, address, phone, uber }) {
  return (
    <div className="location-card">
      <img className="location-image" src={image} alt={`${title} location`}/>
     <div className="location-text-container">
      <h2 className="location-title">{title}</h2>
        <p className="location-address">{address}</p>
        <p className="location-phone">{phone}</p>
      </div>
      <a href={uber} className="order-button-link"><div className="order-button">Order Now</div></a>
      
    </div>
  );
}
