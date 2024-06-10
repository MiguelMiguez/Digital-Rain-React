import React from 'react'
import './Elegirnos.css'
import Ilustracion from '../Ilustracion/Ilustracion';

const Elegirnos = () => {
    const ilustracionSrc = '/Elegirnos/elegirnos.lottie';

  return (
    <div className='Elegirnos'>
        <div className="ContainerElegrinos">
            <h2 className='TittleElegrinos'>¿por qué elegirnos?</h2>
            <div className="ElegirnosInfo">
                <div className="ElegirnosText">
                    <img src="/Elegirnos/speacker.svg" alt="speacker" />
                    <div className="TextInfo">
                        <h3 className="TittleTextElegirnos">Transformación de Ideas:</h3>
                        <p className="TextInfoElegirnos">
                        Convertimos tus conceptos en realidades digitales excepcionales.
                        </p>
                    </div>
                </div>
                <div className="ElegirnosText">
                    <img src="/Elegirnos/speacker.svg" alt="speacker" />
                    <div className="TextInfo">
                        <h3 className="TittleTextElegirnos">Soluciones Innovadoras:</h3>
                        <p className="TextInfoElegirnos">
                        Ofrecemos desarrollo web creativo y avanzado utilizando las ultimas tecnologías.
                        </p>
                    </div>
                </div>
                <div className="ElegirnosText">
                    <img src="/Elegirnos/speacker.svg" alt="speacker" />
                    <div className="TextInfo">
                        <h3 className="TittleTextElegirnos">Diseños Impactantes:</h3>
                        <p className="TextInfoElegirnos">
                        Creamos experiencias visuales que capturan la atención.
                        </p>
                    </div>
                </div>
                <div className="ElegirnosText">
                    <img src="/Elegirnos/speacker.svg" alt="speacker" />
                    <div className="TextInfo">
                        <h3 className="TittleTextElegirnos">Funcionalidad Perfecta:</h3>
                        <p className="TextInfoElegirnos">
                        Aseguramos una experiencia de usuario fluida y eficiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Ilustracion src={ilustracionSrc} width={350} height={350} speed={1} />

    </div>
  )
}

export default Elegirnos