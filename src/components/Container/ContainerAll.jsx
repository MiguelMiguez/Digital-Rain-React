import React from 'react'
import './ContainerAll.css'
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Nosotros from '../Nosotros/Nosotros';
import Elegirnos from '../Elegrinos/Elegirnos';

const ContainerAll = () => {
  return (
    <div className='ContainerAll'>
        <Navbar/>
        <Home/>
        <Nosotros/>
        <Elegirnos/>
    </div>
  )
}

export default ContainerAll