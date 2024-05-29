import React from 'react'
import Home from '../Home/Home';
import './ContainerAll.css'
import Navbar from '../Navbar/Navbar';

const ContainerAll = () => {
  return (
    <div className='ContainerAll'>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default ContainerAll