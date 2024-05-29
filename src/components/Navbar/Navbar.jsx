import React, {useState} from 'react'
import './Navbar.css'
import brandNavbar from '../../assets/Navbar/brandnavbar.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
  return (
    <div className='Navbar'>
        <div className='BrandNavbar'>
            <img className='LogoNavbar' src="/Navbar/brandnavbar.svg" alt="LogoNavbar" /><h2>Digital <span>Rain</span></h2>
        </div>
        <div className={`Burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="Stick"></div>
            <div className="Stick"></div>
            <div className="Stick"></div>
        </div>
        <div className={`Menu ${menuOpen ? 'open' : ''}`}>
        <div className="MenuClose"  onClick={toggleMenu}>X</div>
        <ul>
          <li><a href="#home">inicio</a></li>
          <li><a href="#services">nosotros</a></li>
          <li><a href="#about">servicios</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar