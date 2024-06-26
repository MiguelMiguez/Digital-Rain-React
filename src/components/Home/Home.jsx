import React from 'react'
import Nube from '../Nube/Nube'
import './Home.css'

const Home = () => {

  const handleScrollToSection = () => {
    const section = document.getElementById('NosotrosSeccion');
    if (section){
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };  
  return (
    <div className='Home'>
        <div className='CloudContainer'>
          <Nube/>
          <Nube/>
          <Nube/>
        </div>
        <h1>Digital <span>Rain</span> </h1>
        <h2>Tu <span>solución</span> en <span>desarrollo</span> web</h2>
        <div className='CloudContainer'>
          <Nube/>
          <Nube/>
        </div>
        <button className='ButtonHome' onClick={handleScrollToSection}>
          <div className='ButtonDown'>
            <img className='ImgButton' src="/Inicio/Polygon.svg" alt="button" />
          </div>
        </button>
    </div>
  )
}

export default Home