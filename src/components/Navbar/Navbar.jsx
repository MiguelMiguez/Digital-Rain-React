import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const servicesSection = document.getElementById('ServiciosSeccion');
    const servicesTop = servicesSection?.offsetTop || 0;

    if (window.scrollY >= servicesTop) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${navbarTransparent ? 'transparent' : ''}`}>
      <div className='BrandNavbar'>
        <img className='LogoNavbar' src="/Navbar/brandnavbar.svg" alt="LogoNavbar" />
        <h2 className='TittleNavbar'>Digital <span>Rain</span></h2>
      </div>
      <div className={`Burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="Stick"></div>
        <div className="Stick"></div>
        <div className="Stick"></div>
      </div>
      <div className={`Menu ${menuOpen ? 'open' : ''}`}>
        <div className="MenuClose" onClick={toggleMenu}>X</div>
        <ul>
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>inicio</a></li>
          <li><a href="#nosotros" onClick={(e) => handleLinkClick(e, 'nosotros')}>nosotros</a></li>
          <li><a href="#servicios" onClick={(e) => handleLinkClick(e, 'servicios')}>servicios</a></li>
          <li><a href="#contacto" onClick={(e) => handleLinkClick(e, 'contacto')}>contacto</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
