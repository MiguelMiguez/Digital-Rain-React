import React, { useState } from 'react';
import './Nosotros.css';
import Ilustracion from '../Ilustracion/Ilustracion';

const Nosotros = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ilustracionSrc = '/Nosotros/ilustracion.lottie';

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const desarrollos = [
    { src: '/Nosotros/iconoemprendedores.svg', alt: 'emprendedores', title: 'Desarrollo web para emprendedores' },
    { src: '/Nosotros/iconoempresas.svg', alt: 'empresas', title: 'Desarrollo web para empresas' },
    { src: '/Nosotros/inconopersonalizado.svg', alt: 'personalizado', title: 'Desarrollo web personalizado' }
  ];

  return (
    <div id="NosotrosSeccion" className="Nosotros">
      <h2 className="TittleNosotros">nosotros</h2>
      <p className="TextoNosotros">
        En Digital Rain, creamos experiencias web impactantes. Ofrecemos desarrollo de landing pages atractivas, sitios empresariales profesionales y diseños personalizados. Nuestro enfoque en diseño responsive asegura que tu presencia online destaque en cualquier dispositivo.
      </p>
      <div className="InfoNosotros">
        <div className="NosotrosIlustracion">
          <Ilustracion src={ilustracionSrc} width={300} height={300} speed={1} />
        </div>
        <div className="ContainerDesarrollo">
          {desarrollos.map((desarrollo, index) => (
            <div
              key={index}
              className={`Desarrollo ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img className="IconDesarrollo" src={desarrollo.src} alt={desarrollo.alt} />
              <h3 className="TittleDesarrollo">{desarrollo.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
