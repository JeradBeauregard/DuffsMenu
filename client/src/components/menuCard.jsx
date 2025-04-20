import React from "react";
import "../styles/menuCard.css";

export default function MenuItemCard({ title, description, price }) {
  return (
    <div className="menu-item-card">
      <div className="menu-item-card-inner">
        <div className="menu-item-card-left">
        <h3 className="menu-item-title">{title}</h3>
        <p className="menu-item-description">{description}</p>
        </div>
        <div className="menu-item-card-right">
        <p className="menu-item-price">${price.toFixed(2)}</p>

        </div>
      </div>
    </div>
  );
}
