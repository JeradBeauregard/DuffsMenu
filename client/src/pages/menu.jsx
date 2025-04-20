import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MenuItemCard from "../components/menuCard"; 
import "../styles/menuPage.css";
import { useEffect } from "react";

export default function MenuPage() {
{/*uses states for each category */}
const [starters,setStarters] = useState([]);
const [salads, setSalads] = useState([]);
const [wings, setWings] = useState([]);
const [entrees, setEntrees] = useState([]);
const [sides, setSides] = useState([]);
const [drinks, setDrinks] = useState([]);

const baseUrl = import.meta.env.VITE_API_URL;
{/* get menu item functions for each type */}
useEffect(()=>{
async function ListItems(type, setter){
  try{
    const results = await fetch(`${baseUrl}/MenuApi/ListMenuItemsByType/${type}`);
    const data = await results.json();
    setter(data);
  } catch(error){
    console.error("unable to fetch starters", error);
  }
}


{/*run menu item functions*/}
ListItems("starter", setStarters);
ListItems("salad", setSalads);
ListItems("wings", setWings);
ListItems("entrée", setEntrees);
ListItems("side", setSides);
ListItems("Beverage", setDrinks);

},[]);

  return (
    <>
      <Header />
      <main className="menu-main-container">
      {/* Main Menu Container */}
      <div className="menu-container">
        {/* Top Title + Nav */}
        <div className="menu-header-row">
          <h1 className="menu-title">Our Menu</h1>
          <nav className="menu-nav">
            <a href="#apps">Apps</a>
            <a href="#salads">Salads</a>
            <a href="#wings">Wings</a>
            <a href="#entrees">Entrees</a>
            <a href="#sides">Sides</a>
            <a href="#drinks">Drinks</a>
          </nav>
        </div>

        {/* Menu Sections */}
        <section id="apps" className="menu-section">
          <h2>Appetizers</h2>
          <div className="menu-grid">
          {starters.map((starter, index) => (
              <MenuItemCard
                key={index}
                title={starter.name}
                description={starter.description}
                price={starter.price}
              />
            ))}
          </div>
        </section>

        <section id="salads" className="menu-section">
          <h2>Salads</h2>
          <div className="menu-grid">
          {salads.map((salad, index) => (
              <MenuItemCard
                key={index}
                title={salad.name}
                description={salad.description}
                price={salad.price}
              />
            ))}
          </div>
        </section>

        <section id="wings" className="menu-section">
          <h2>Wings</h2>
          <div className="menu-grid">
          {wings.map((wing, index) => (
              <MenuItemCard
                key={index}
                title={wing.name}
                description={wing.description}
                price={wing.price}
              />
            ))}
          </div>
        </section>

        <section id="entrees" className="menu-section">
          <h2>Entrees</h2>
          <div className="menu-grid">
          {entrees.map((entree, index) => (
              <MenuItemCard
                key={index}
                title={entree.name}
                description={entree.description}
                price={entree.price}
              />
            ))}
          </div>
        </section>

        <section id="sides" className="menu-section">
          <h2>Sides</h2>
          <div className="menu-grid">
          {sides.map((side, index) => (
              <MenuItemCard
                key={index}
                title={side.name}
                description={side.description}
                price={side.price}
              />
            ))}
          </div>
        </section>

        <section id="drinks" className="menu-section">
          <h2>Drinks</h2>
          <div className="menu-grid">
          {drinks.map((drink, index) => (
              <MenuItemCard
                key={index}
                title={drink.name}
                description={drink.description}
                price={drink.price}
              />
            ))}
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </>
  );
}
