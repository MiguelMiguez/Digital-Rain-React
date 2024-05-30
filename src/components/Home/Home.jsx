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
        <button><div className='ButtonDown'><img className='ImgButton' src="/Inicio/Polygon.svg" alt="" /></div></button>
    </div>
  )
}

export default Home