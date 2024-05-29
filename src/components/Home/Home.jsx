import React from 'react'
import Nube from '../Nube/Nube'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Nube/>
        <h1>Digital <span>Rain</span> </h1>
        <h2>Tu <span>solución</span> en <span>desarrollo</span> web</h2>
        <Nube/>
        <button><img className='ImgButton' src="../../../public/img/Inicio/Polygon 1.svg" alt="" /></button>
    </div>
  )
}

export default Home