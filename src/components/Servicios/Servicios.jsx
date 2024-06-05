import React, { useState } from 'react';
import './Servicios.css';
import Ilustracion from '../Ilustracion/Ilustracion';

const Servicios = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleServiceClick = (section) => {
    setVisibleSection(section);
  };

  const handleClose = () => {
    setVisibleSection(null);
  };

  const ilustracionSrc = '/Servicios/servicios.lottie';

  return (
    <div className='Servicios'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#191e25" fillOpacity="1" d="M0,224L18.5,202.7C36.9,181,74,139,111,106.7C147.7,75,185,53,222,64C258.5,75,295,117,332,122.7C369.2,128,406,96,443,117.3C480,139,517,213,554,250.7C590.8,288,628,288,665,282.7C701.5,277,738,267,775,250.7C812.3,235,849,213,886,202.7C923.1,192,960,192,997,213.3C1033.8,235,1071,277,1108,293.3C1144.6,309,1182,299,1218,298.7C1255.4,299,1292,309,1329,293.3C1366.2,277,1403,235,1422,213.3L1440,192L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
      </svg>
      <h2 className='TittleServicios'>servicios</h2>
      <div className="ContainerServicios">
        <div className="ServiciosInfo" onClick={() => handleServiceClick('optimizacionseo')}>
          <h3 className='TittleInfoServicios'>
            Optimización de SEO
          </h3>
        </div>
        <div className="ServiciosInfo" onClick={() => handleServiceClick('disenoresponsive')}>
          <h3 className='TittleInfoServicios'>
            Diseño Responsive
          </h3>
        </div>
        <div className="ServiciosInfo" onClick={() => handleServiceClick('mantenimiento247')}>
          <h3 className='TittleInfoServicios'>
            Mantenimiento 24/7
          </h3>
        </div>
      </div>

      <Ilustracion src={ilustracionSrc} width={350} height={350} speed={1} />


      <div className={`ModalBackground ${visibleSection ? 'active' : ''}`} onClick={handleClose}></div>

      {visibleSection === 'optimizacionseo' && (
        <div className="InfoOptimizacion active">
          <div className="CloseWindow" onClick={handleClose}>X</div>
          <ul>
            <li>Aseguramos que tu sitio se posicione de manera destacada en los resultados de búsqueda.</li>
            <li>Usamos las últimas técnicas de SEO, desde investigación de palabras clave hasta optimización técnica.</li>
            <li>Aumentamos la visibilidad de tu sitio y atraemos tráfico de calidad.</li>
          </ul>
        </div>
      )}
      {visibleSection === 'disenoresponsive' && (
        <div className="InfoDisenoResponsive active">
          <div className="CloseWindow" onClick={handleClose}>X</div>
          <ul>
            <li>Adaptamos tu sitio web a cualquier dispositivo.</li>
            <li>Funciona perfectamente en computadoras, tabletas y teléfonos inteligentes.</li>
            <li>Ofrecemos una experiencia atractiva y consistente para todos los usuarios.</li>
          </ul>
        </div>
      )}
      {visibleSection === 'mantenimiento247' && (
        <div className="InfoMantenimiento247 active">
          <div className="CloseWindow" onClick={handleClose}>X</div>
          <ul>
            <li>Mantenemos tu sitio web actualizado y funcionando sin problemas.</li>
            <li>Resolvemos problemas técnicos para ti.</li>
            <li>Permite que te concentres en hacer crecer tu empresa.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Servicios;
