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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#191e25" fill-opacity="1" d="M0,160L21.8,176C43.6,192,87,224,131,218.7C174.5,213,218,171,262,176C305.5,181,349,235,393,234.7C436.4,235,480,181,524,170.7C567.3,160,611,192,655,202.7C698.2,213,742,203,785,213.3C829.1,224,873,256,916,272C960,288,1004,288,1047,250.7C1090.9,213,1135,139,1178,122.7C1221.8,107,1265,149,1309,181.3C1352.7,213,1396,235,1418,245.3L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
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
