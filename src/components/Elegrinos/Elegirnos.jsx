import React from 'react'
import './Elegirnos.css'
import Ilustracion from '../Ilustracion/Ilustracion';

const Elegirnos = () => {
    const ilustracionSrc = '/Elegirnos/elegirnos.lottie';

  return (
    <div className='Elegirnos'>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L17.1,181.3C34.3,203,69,245,103,224C137.1,203,171,117,206,117.3C240,117,274,203,309,208C342.9,213,377,139,411,133.3C445.7,128,480,192,514,197.3C548.6,203,583,149,617,144C651.4,139,686,181,720,176C754.3,171,789,117,823,96C857.1,75,891,85,926,112C960,139,994,181,1029,186.7C1062.9,192,1097,160,1131,170.7C1165.7,181,1200,235,1234,229.3C1268.6,224,1303,160,1337,133.3C1371.4,107,1406,117,1423,122.7L1440,128L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>
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