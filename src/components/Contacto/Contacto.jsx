import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='Contacto'>
        <h2 className='TittleForm'>contactanos</h2>
        <form action="" method="POST">
          <h3 className='SubTittleForm'>Nosotros nos <span>encargamos</span> de todo!</h3>
            <div className='FormGroup'>
                <input type="text" id='name' placeholder='Nombre' />
                <input type="text" id='surname' placeholder='Apellido' />
                <input type="email" id='email' placeholder='ejemplo@email.com' />
                <input type="number" id='number' placeholder='telefono' />
            </div>
            <button className='ButtonForm'>ENVIAR</button>
        </form>
    </div>
  )
}

export default Contacto