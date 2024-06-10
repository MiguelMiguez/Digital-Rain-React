import React, { useEffect, useRef} from 'react'
import './Nube.css'

const Nube = () => {

    const cloudRef = useRef(null);

    useEffect(() => {
      const cloud = cloudRef.current;
      const animateCloud = () => {
        const deltaX = (Math.random() - 0.5) * 30; // Movimiento en x, entre -10px y 10px
        const deltaY = (Math.random() - 0.5) * 30; // Movimiento en y, entre -10px y 10px
        const duration = 2000 + Math.random() * 3000; // Duración entre 2 y 5 segundos
  
        cloud.style.transition = `transform ${duration}ms linear`;
        cloud.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  
        setTimeout(animateCloud, duration); // Repetir la animación después de la duración
      };
  
      animateCloud();
    }, []);
    
  return (
    <div className='Nube' ref={cloudRef}>
        <img className='ImgCloud' src="/Cloud/cloud.svg" alt="cloud" />
    </div>
    
  )
}

export default Nube