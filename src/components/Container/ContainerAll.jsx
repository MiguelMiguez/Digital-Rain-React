import React from "react";
import "./ContainerAll.css";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Nosotros from "../Nosotros/Nosotros";
import Elegirnos from "../Elegrinos/Elegirnos";
import Servicios from "../Servicios/Servicios";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";

const ContainerAll = () => {
  return (
    <div className="ContainerAll">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="elegirnos">
        <Elegirnos />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
      <Footer />
    </div>
  );
};

export default ContainerAll;
