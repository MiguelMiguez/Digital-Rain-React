import React from 'react'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <div id='NosotrosSeccion' className='Nosotros'>
        <h2 className='TittleNosotros'>nosotros</h2>
        <p className='TextoNosotros'>En Digital Rain, creamos experiencias web impactantes. Ofrecemos desarrollo de landing pages atractivas, sitios empresariales profesionales y diseños personalizados. Nuestro enfoque en diseño responsive asegura que tu presencia online destaque en cualquier dispositivo.</p>
        <div className="InfoNosotros">
            <img className='NosotrosIlustracion' src="/Nosotros/ilustracion1.svg" alt="Ilustración"/>
            <div className="ContainerDesarrollo">
                <div className='Desarrollo'>
                    <img className='IconDesarrollo' src="/Nosotros/iconoemprendedores.svg" alt="emprendedors" />
                    <h3>Desarrollo web para emprendedores</h3>
                </div>
                <div className='Desarrollo'>
                    <img className='IconDesarrollo' src="/Nosotros/iconoempresas.svg" alt="empresas" />
                    <h3>Desarrollo web para empresas</h3>
                </div>
                <div className='Desarrollo'>
                    <img className='IconDesarrollo' src="/Nosotros/inconopersonalizado.svg" alt="personalizado" />
                    <h3>Desarrollo web personalizado</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nosotros