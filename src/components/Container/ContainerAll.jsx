import React from 'react'
import './ContainerAll.css'
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Nosotros from '../Nosotros/Nosotros';
import Elegirnos from '../Elegrinos/Elegirnos';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/Footer';

const ContainerAll = () => {
  return (
    <div className='ContainerAll'>
        <Navbar/>
        <Home/>
        <Nosotros/>
        <Elegirnos/>
        <Servicios/>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default ContainerAll