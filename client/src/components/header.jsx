import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.png";

export default function Header() {
    
    return(

    <header>
    <div className="header-inner-container">
      <div id="logo"><a href="/"><img className="logo" src={logo} alt="Duff's Famous Wings"/></a></div>
      <nav class="header-nav">
          <li className="header-link"><a href="/menu">Menu</a></li>
          <li className="header-link"><a href="#">Locations</a></li>
          <li className="header-link"><a href="#">Our Story</a></li>
          <li className="header-link"><a href="#">Order Now</a></li>
      </nav>
    </div>
  </header>


)}
