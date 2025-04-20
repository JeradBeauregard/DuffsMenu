import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LocationCard from "../components/locationCard"; 
import UberEatsLogo from "../assets/ubereats.png"; 
import HeroImage from "../assets/hero.png"; 
import "../styles/home.css";
import { useEffect, useState } from "react";





export default function HomePage() {
{/*Get location data*/}
const baseUrl = import.meta.env.VITE_API_URL;




const [locations,setLocations] = useState([]);

useEffect(()=>{
async function ListLocations(){
    try{
        const results = await fetch(`${baseUrl}/StoreApi/ListStores`);
        const data = await results.json(); // should already return json anyway
       
        setLocations(data);
    }catch(error){
        console.error("Unable to fetch locations", error);
    }
}

ListLocations(); // run function


},[]);


  return (
    <>
      <Header />

      {/* hero section */}
      <div className="hero-section">
        <img src={HeroImage} alt="Warning! Medium is hot!" className="hero-image" />
      </div>
      <main className="home-main-section">
      {/* locations section */}
      <section className="locations-section">
        <h2 className="location-section-title">Our Locations</h2>
        <div className="location-card-container">
        {locations.map((location, index) => {
        console.log("Location:", location);
        return (
          <LocationCard
            key={index}
            image={location.image}
            title={location.title}
            address={location.address}
            phone={location.phone}
            uber={location.uber}
          />
        );
      })}

          </div>
      </section>

      {/* ubereats promo section*/}
      <section className="ubereats-section">
        <h3>Get delivery through</h3>
        <img src={UberEatsLogo} alt="Uber Eats" className="ubereats-logo" />
      </section>
      </main>
      <Footer />
    </>
  );
}
