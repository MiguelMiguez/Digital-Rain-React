import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="ContactInfo">
            <div className='Branding'>
                <img className='LogoFooter' src="/Cloud/cloud.svg" alt="Logo Nube" />
                <p className='TittleBranding'>Digital <span>Rain</span></p>
            </div>
            <div className="ContainerInfoContact">
                <p>contacto@digitalrain.com.ar</p>
                <p>11-7364-3037</p>
            </div>
            <div className="SocialMedia">
                <a href="https://www.instagram.com/digital_rainok/" target='blank'><img className='IconSocial' src="/SocialMedia/instagram.png" alt="Instagram" /></a>
                <a href="" target='blank'><img className='IconSocial' src="/SocialMedia/linkedin.png" alt="LinkedIn" /></a>
            </div>
        </div>
        <p className='CopyRight'>© 2024 DigitalRain. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer